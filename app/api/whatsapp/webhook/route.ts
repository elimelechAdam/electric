import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { WhatsAppAPI } from '@/lib/whatsapp'
import { userStateManager } from '@/lib/user-state'

const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN
const APP_SECRET = process.env.WHATSAPP_APP_SECRET

interface WhatsAppMessage {
  from: string
  id: string
  timestamp: string
  text?: {
    body: string
  }
  type: string
}

interface WhatsAppWebhookEntry {
  id: string
  changes: Array<{
    value: {
      messaging_product: string
      metadata: {
        display_phone_number: string
        phone_number_id: string
      }
      messages?: WhatsAppMessage[]
    }
    field: string
  }>
}

interface WhatsAppWebhook {
  object: string
  entry: WhatsAppWebhookEntry[]
}

function verifySignature(payload: string, signature: string): boolean {
  if (!APP_SECRET) return false
  
  const expectedSignature = crypto
    .createHmac('sha256', APP_SECRET)
    .update(payload)
    .digest('hex')
  
  return signature === `sha256=${expectedSignature}`
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const mode = searchParams.get('hub.mode')
  const token = searchParams.get('hub.verify_token')
  const challenge = searchParams.get('hub.challenge')

  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    console.log('Webhook verified')
    return new NextResponse(challenge, { status: 200 })
  }

  return new NextResponse('Forbidden', { status: 403 })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const signature = request.headers.get('x-hub-signature-256')

    if (!signature || !verifySignature(body, signature)) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const webhookData: WhatsAppWebhook = JSON.parse(body)

    if (webhookData.object === 'whatsapp_business_account') {
      for (const entry of webhookData.entry) {
        for (const change of entry.changes) {
          if (change.field === 'messages' && change.value.messages) {
            for (const message of change.value.messages) {
              await processMessage(message, change.value.metadata.phone_number_id)
            }
          }
        }
      }
    }

    return new NextResponse('OK', { status: 200 })
  } catch (error) {
    console.error('Webhook error:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

async function processMessage(message: WhatsAppMessage, phoneNumberId: string) {
  if (message.type !== 'text' || !message.text?.body) return

  const userPhone = message.from
  const messageText = message.text.body.trim()

  console.log(`Received message from ${userPhone}: ${messageText}`)

  try {
    await handleBotLogic(userPhone, messageText)
  } catch (error) {
    console.error('Error processing message:', error)
  }
}

const whatsapp = new WhatsAppAPI()

const MENU_OPTIONS = [
  { id: '1', title: '🔧 Technical Support' },
  { id: '2', title: '💰 Get Quote' },
  { id: '3', title: '📞 Contact Info' }
]

const MENU_MESSAGE = `Welcome to MS Electrical Solutions! 🔌

Please select one of the following options:`

function getFollowUpPrompt(option: '1' | '2' | '3'): string {
  switch (option) {
    case '1':
      return 'Please describe your technical issue or what type of support you need:'
    case '2':
      return 'Please tell us about your project so we can provide an accurate quote:'
    case '3':
      return 'What specific contact information would you like to know about?'
    default:
      return 'Please provide more details:'
  }
}

function generateResponse(option: '1' | '2' | '3', followUp: string): string {
  switch (option) {
    case '1':
      return `Thank you for contacting technical support! 🔧

Your issue: "${followUp}"

Our technical team will review your request and get back to you within 24 hours. For urgent matters, please call us directly at (555) 123-4567.

We'll send you a follow-up message with next steps soon!`

    case '2':
      return `Thank you for your quote request! 💰

Project details: "${followUp}"

Our team will review your requirements and prepare a detailed quote. You can expect to receive it within 2-3 business days.

We'll contact you if we need any additional information.`

    case '3':
      return `Here's our contact information! 📞

🏢 MS Electrical Solutions
📱 Phone: (555) 123-4567
📧 Email: info@mselectrical.com
🌐 Website: www.mselectrical.com
📍 Address: 123 Electric Ave, City, State 12345

Business Hours:
Monday - Friday: 8:00 AM - 6:00 PM
Saturday: 9:00 AM - 4:00 PM
Sunday: Emergency calls only

Question: "${followUp}"

Is there anything specific you'd like to know more about?`

    default:
      return 'Thank you for your message. We\'ll get back to you soon!'
  }
}

async function handleBotLogic(userPhone: string, message: string) {
  console.log(`Processing message from ${userPhone}: "${message}"`)

  const userState = userStateManager.getState(userPhone)
  console.log(`Current user state:`, userState)

  switch (userState.step) {
    case 'menu':
      await whatsapp.sendInteractiveMessage(userPhone, MENU_MESSAGE, MENU_OPTIONS)
      userStateManager.updateState(userPhone, { step: 'waiting_selection' })
      break

    case 'waiting_selection':
      const selection = message.trim()
      if (selection === '1' || selection === '2' || selection === '3') {
        const followUpPrompt = getFollowUpPrompt(selection)
        await whatsapp.sendTextMessage(userPhone, followUpPrompt)
        userStateManager.updateState(userPhone, { 
          step: 'waiting_followup', 
          selectedOption: selection 
        })
      } else {
        await whatsapp.sendTextMessage(
          userPhone, 
          'Please select a valid option (1, 2, or 3) from the menu above.'
        )
      }
      break

    case 'waiting_followup':
      if (userState.selectedOption) {
        const response = generateResponse(userState.selectedOption, message)
        await whatsapp.sendTextMessage(userPhone, response)
        
        setTimeout(async () => {
          await whatsapp.sendTextMessage(
            userPhone, 
            'Thank you for using MS Electrical Solutions! Type any message to see our menu again. 🔌'
          )
        }, 2000)
        
        userStateManager.resetState(userPhone)
      } else {
        await whatsapp.sendTextMessage(
          userPhone, 
          'Something went wrong. Let me show you the menu again.'
        )
        userStateManager.resetState(userPhone)
        await whatsapp.sendInteractiveMessage(userPhone, MENU_MESSAGE, MENU_OPTIONS)
        userStateManager.updateState(userPhone, { step: 'waiting_selection' })
      }
      break

    default:
      userStateManager.resetState(userPhone)
      await whatsapp.sendInteractiveMessage(userPhone, MENU_MESSAGE, MENU_OPTIONS)
      userStateManager.updateState(userPhone, { step: 'waiting_selection' })
      break
  }
}
