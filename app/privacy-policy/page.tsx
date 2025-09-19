import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'מדיניות פרטיות - MS Electrical Solutions',
  description: 'מדיניות הפרטיות שלנו - הסבר על איסוף ושימוש במידע באתר MS Electrical Solutions',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Image 
                src="/images/images/logo.png" 
                alt="MS Electrical Solutions Logo" 
                width={200} 
                height={200}
                className="rounded-lg"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              מדיניות פרטיות (Privacy Policy)
            </h1>
            <div className="w-24 h-1 bg-[#2aba7f] mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-right" dir="rtl">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">מבוא</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                אנו מכבדים את פרטיות המשתמשים באתר זה ומחויבים להגן עליה. מסמך זה מסביר איזה מידע אנו אוספים, כיצד אנו משתמשים בו, ומהן הזכויות שלכם כמשתמשים.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">איזה מידע אנו אוספים</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">מידע טכני מינימלי</h3>
                  <p className="text-gray-700 leading-relaxed">
                    ייתכן שהדפדפן שלכם שולח באופן אוטומטי מידע בסיסי (כגון סוג מכשיר או דפדפן), אך איננו שומרים או מעבדים מידע זה מעבר לצורך תפקוד בסיסי של האתר.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">מידע שאתם מספקים באופן יזום</h3>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    כאשר אתם ממלאים טופס יצירת קשר באתר, המידע מועבר ישירות לערוץ ממנו פניתם:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 mr-4">
                    <li>דוא״ל (Email)</li>
                    <li>וואטסאפ (WhatsApp)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">מה איננו עושים</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 mr-4">
                <li>איננו שומרים את המידע שמוזן באתר בשרתים שלנו.</li>
                <li>איננו אוספים נתוני גלישה, סטטיסטיקות או מידע אישי לצורכי פרסום או מעקב.</li>
                <li>איננו מעבירים מידע לצדדים שלישיים.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">שימוש בעוגיות (Cookies)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                באתר זה נעשה שימוש בעוגיות (Cookies) בסיסיות בלבד, שמטרתן לאפשר תפקוד תקין של האתר ושיפור חוויית המשתמש.
              </p>
              <p className="text-gray-700 leading-relaxed">
                איננו משתמשים בעוגיות לצורכי פרסום, ניתוחים שיווקיים או איסוף מידע אישי.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">אבטחת מידע</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                אנו נוקטים באמצעים סבירים כדי לשמור על הגנה ואבטחת תקשורת באתר. מאחר והמידע אינו נשמר אצלנו, הסיכון לחשיפה מינימלי.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">זכויות המשתמש</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                בכל עת אתם רשאים:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 mr-4">
                <li>לדעת איזה מידע נשלח דרככם (באמצעות Email או WhatsApp).</li>
                <li>לבקש שנפסיק ליצור עמכם קשר.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">יצירת קשר</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                במידה ויש לכם שאלות או חששות לגבי מדיניות הפרטיות שלנו, ניתן ליצור קשר דרך:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#2aba7f] rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">@</span>
                    </div>
                    <span className="text-gray-700 font-medium">דוא״ל: needhelp@ms-electrical.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#2aba7f] rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">W</span>
                    </div>
                    <span className="text-gray-700 font-medium">וואטסאפ: 666 888 0000</span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-[#2aba7f] text-white font-semibold rounded-lg hover:bg-[#1f684a] transition-colors"
            >
              חזרה לדף הבית
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
