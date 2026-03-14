const baseUrl = "https://mses.co.il";

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "MS Electrical Solutions",
  description: "חשמלאי מקצועי ושירותי הנדימן במרכז וראשון לציון. תיקוני חשמל, תחזוקת בית ומשרד, שירות 24/7.",
  url: baseUrl,
  telephone: "+972-54-391-7607",
  email: "Max96831@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressRegion: "מרכז",
    addressLocality: "ראשון לציון",
  },
  areaServed: [
    { "@type": "City", name: "ראשון לציון" },
    { "@type": "City", name: "חולון" },
    { "@type": "City", name: "בת ים" },
    { "@type": "City", name: "תל אביב" },
    { "@type": "AdministrativeArea", name: "מרכז" },
  ],
  openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "00:00", closes: "23:59" },
  priceRange: "$$",
};

const services = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    { "@type": "ListItem", position: 1, item: { "@type": "Service", name: "תיקוני חשמל", description: "תיקונים אמינים ומהירים לכל תקלה חשמלית בבית ובעסק" } },
    { "@type": "ListItem", position: 2, item: { "@type": "Service", name: "תאורה ומתקנים", description: "תכנון והתקנה של פתרונות תאורה מתקדמים וחכמים" } },
    { "@type": "ListItem", position: 3, item: { "@type": "Service", name: "תחזוקה שוטפת", description: "חבילות תחזוקה 24/7 לבית ולמשרד" } },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "מה כוללים שירותי חשמלאי אצלכם?", acceptedAnswer: { "@type": "Answer", text: "אנו מספקים תיקוני חשמל לבית ולמשרד, התקנת תאורה ומתקנים, תחזוקה שוטפת ואבחון תקלות. כל העבודות עם אחריות ומחירים שקופים." } },
    { "@type": "Question", name: "האם אתם נותנים שירות בראשון לציון ובמרכז?", acceptedAnswer: { "@type": "Answer", text: "כן. אנו נותנים שירות במרכז הארץ – ראשון לציון, חולון, בת ים, תל אביב והסביבה. זמינים גם לשירות דחוף." } },
    { "@type": "Question", name: "יש אחריות על העבודה?", acceptedAnswer: { "@type": "Answer", text: "כן. אחריות מלאה על העבודה והחומרים למשך התקופה המוסכמת. עושים את העבודה נכון מההתחלה." } },
    { "@type": "Question", name: "כמה עולה שירות חשמלאי או הנדימן?", acceptedAnswer: { "@type": "Answer", text: "המחירים תלויים בסוג העבודה. אנו שומרים על מחירים הוגנים ושקופים – תקבלו הצעת מחיר ברורה לפני תחילת העבודה." } },
  ],
};

export function StructuredData() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(services) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
