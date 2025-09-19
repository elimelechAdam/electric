const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN
const WHATSAPP_PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID

interface TextMessagePayload {
  messaging_product: 'whatsapp'
  to: string
  type: 'text'
  text: {
    body: string
  }
}

interface InteractiveMessagePayload {
  messaging_product: 'whatsapp'
  to: string
  type: 'interactive'
  interactive: {
    type: 'button'
    body: {
      text: string
    }
    action: {
      buttons: Array<{
        type: 'reply'
        reply: {
          id: string
          title: string
        }
      }>
    }
  }
}

export class WhatsAppAPI {
  private baseUrl = 'https://graph.facebook.com/v18.0'

  async sendTextMessage(to: string, message: string): Promise<boolean> {
    const payload: TextMessagePayload = {
      messaging_product: 'whatsapp',
      to,
      type: 'text',
      text: {
        body: message
      }
    }

    return this.sendMessage(payload)
  }

  async sendInteractiveMessage(
    to: string, 
    bodyText: string, 
    buttons: Array<{ id: string; title: string }>
  ): Promise<boolean> {
    const payload: InteractiveMessagePayload = {
      messaging_product: 'whatsapp',
      to,
      type: 'interactive',
      interactive: {
        type: 'button',
        body: {
          text: bodyText
        },
        action: {
          buttons: buttons.map(button => ({
            type: 'reply',
            reply: {
              id: button.id,
              title: button.title
            }
          }))
        }
      }
    }

    return this.sendMessage(payload)
  }

  private async sendMessage(payload: TextMessagePayload | InteractiveMessagePayload): Promise<boolean> {
    try {
      console.log('Sending message to WhatsApp API...')
      console.log('Phone Number ID:', WHATSAPP_PHONE_NUMBER_ID)
      console.log('Token (first 20 chars):', WHATSAPP_TOKEN?.substring(0, 20) + '...')
      
      const response = await fetch(`${this.baseUrl}/${WHATSAPP_PHONE_NUMBER_ID}/messages`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${WHATSAPP_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      if (!response.ok) {
        const errorText = await response.text()
        console.error('WhatsApp API error:', errorText)
        
        try {
          const errorJson = JSON.parse(errorText)
          if (errorJson.error?.code === 100) {
            console.error('❌ WhatsApp Setup Issue:')
            console.error('- Phone Number ID may be incorrect or expired')
            console.error('- Access token may be expired or invalid')
            console.error('- Check your Meta Business App permissions')
            console.error('- Verify WhatsApp Business API setup')
          }
        } catch {
          // Error text wasn't JSON
        }
        
        return false
      }

      const result = await response.json()
      console.log('✅ Message sent successfully:', result)
      return true
    } catch (error) {
      console.error('Error sending WhatsApp message:', error)
      return false
    }
  }
}
