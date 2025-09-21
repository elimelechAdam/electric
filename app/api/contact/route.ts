import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { ContactEmail } from '@/components/contact-email'
import { render } from '@react-email/render'

const resend = new Resend(process.env.RESEND_TOKEN)

export async function POST(request: NextRequest) {
  try {
    const { name, email, mobile, company, message } = await request.json()

    if (!name || !email || !mobile || !message) {
      return NextResponse.json(
        { error: 'שדות חובה חסרים' },
        { status: 400 }
      )
    }

    const emailHtml = await render(
      ContactEmail({
        name,
        email,
        mobile,
        company,
        message,
      })
    )

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['nikolaisaar@gmail.com'],
      subject: `פנייה חדשה מ-${name}`,
      html: emailHtml,
    })

    if (error) {
      console.error({ message: 'Error sending email', error })
      return NextResponse.json(
        { error: 'שגיאה בשליחת ההודעה' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, data })
  } catch (err) {
    console.error({ message: 'Error in POST /api/contact', error: err })
    return NextResponse.json({ error: 'שגיאה בשרת' }, { status: 500 })
  }
}
