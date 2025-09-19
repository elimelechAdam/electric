import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend('re_SMsYopef_KKQygVeAvZ9pAL6aFDqMsoHz')

export async function POST(request: NextRequest) {
  try {
    const { name, email, mobile, company, message } = await request.json()

    if (!name || !email || !mobile || !message) {
      return NextResponse.json(
        { error: 'שדות חובה חסרים' },
        { status: 400 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: 'MS Electrical Solutions <noreply@yourdomain.com>',
      to: ['nikoniko0@walla.co.il'],
      subject: `פנייה חדשה מ-${name}`,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2aba7f;">פנייה חדשה מהאתר</h2>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>שם:</strong> ${name}</p>
            <p><strong>אימייל:</strong> ${email}</p>
            <p><strong>טלפון:</strong> ${mobile}</p>
            <p><strong>חברה:</strong> ${company || 'לא צוין'}</p>
            <p><strong>הודעה:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 14px;">נשלח מ-${email}</p>
        </div>
      `,
    })

    if (error) {
        console.log(error)
      return NextResponse.json(
        { error: 'שגיאה בשליחת ההודעה' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    return NextResponse.json(
      { error: 'שגיאה בשרת' },
      { status: 500 }
    )
  }
}
