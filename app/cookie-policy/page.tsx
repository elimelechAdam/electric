import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'מדיניות עוגיות - MS Electrical Solutions',
  description: 'מדיניות העוגיות שלנו - הסבר על השימוש בעוגיות באתר MS Electrical Solutions',
}

export default function CookiePolicyPage() {
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
              מדיניות עוגיות (Cookies Policy)
            </h1>
            <div className="w-24 h-1 bg-[#2aba7f] mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-right" dir="rtl">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">מבוא</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                אנו מחויבים לשמירה על פרטיות המשתמשים באתר זה. מסמך זה נועד להסביר כיצד אנו עושים שימוש בעוגיות (Cookies) ובטכנולוגיות דומות, ומה המשמעות עבורכם המשתמשים.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">מהן עוגיות (Cookies)?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                עוגיות הן קבצים קטנים המותקנים בדפדפן או במכשיר שלכם כאשר אתם מבקרים באתר אינטרנט. הן נועדו לאפשר תפקוד בסיסי של האתר, לשפר את חוויית המשתמש ולספק שירות תקין.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">השימוש שלנו בעוגיות</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                באתר זה השימוש בעוגיות הוא מינימלי בלבד ומיועד לצורך:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 mr-4">
                <li>תפקוד תקין של האתר.</li>
                <li>התאמה בסיסית של חוויית המשתמש (כגון בחירת שפה או ניווט חלק יותר).</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">מה איננו עושים</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 mr-4">
                <li>איננו שומרים מידע אישי מזהה על המשתמשים.</li>
                <li>איננו אוספים או שומרים את המידע שאתם מזינים באתר.</li>
                <li>איננו משתמשים בעוגיות לצורכי פרסום, ניתוחים סטטיסטיים או מעקב.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">העברת מידע</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                כל מידע שתבחרו לשלוח דרך האתר (כגון פרטים אישיים או הודעה בטופס יצירת קשר):
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 mr-4">
                <li>אינו נשמר בשרתים שלנו.</li>
                <li>מועבר ישירות לערוץ ממנו פניתם – דוא״ל (Email) או וואטסאפ (WhatsApp) בלבד.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">הסכמת המשתמש</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                בעת השימוש באתר, ובלחיצה על &quot;קבל&quot;, אתם מאשרים את השימוש שלנו בעוגיות כפי שמתואר במדיניות זו.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">יצירת קשר</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                לשאלות נוספות בנוגע למדיניות העוגיות או נושא פרטיות, ניתן לפנות אלינו ב־Email או WhatsApp המופיעים בעמוד יצירת הקשר.
              </p>
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
