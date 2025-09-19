import { NextRequest, NextResponse } from 'next/server'
import { WhatsAppAPI } from '@/lib/whatsapp'

export async function POST(request: NextRequest) {
  try {
    let body
    try {
      body = await request.json()
    } catch (jsonError) {
      return NextResponse.json({ 
        error: 'Invalid JSON in request body',
        example: {
          phone: '+1234567890',
          message: 'Hello, this is a test message!'
        }
      }, { status: 400 })
    }

    const { phone, message } = body

    if (!phone || !message) {
      return NextResponse.json({ 
        error: 'Phone and message are required',
        received: body,
        example: {
          phone: '+1234567890',
          message: 'Hello, this is a test message!'
        }
      }, { status: 400 })
    }

    const whatsapp = new WhatsAppAPI()
    const success = await whatsapp.sendTextMessage(phone, message)

    if (success) {
      return NextResponse.json({ success: true, message: 'Message sent successfully' })
    } else {
      return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
    }
  } catch (error) {
    console.error('Test API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ 
    status: 'WhatsApp Bot API is running',
    endpoints: {
      webhook: '/api/whatsapp/webhook',
      test: '/api/whatsapp/test'
    },
    config: {
      phoneNumberId: process.env.WHATSAPP_PHONE_NUMBER_ID ? 'configured' : 'missing',
      token: process.env.WHATSAPP_TOKEN ? 'configured' : 'missing',
      appSecret: process.env.WHATSAPP_APP_SECRET ? 'configured' : 'missing',
      verifyToken: process.env.WHATSAPP_VERIFY_TOKEN ? 'configured' : 'missing'
    }
  })
}
