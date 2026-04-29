const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

const newTranslations = `const translations = {
  ar: {
    navTitle1: "محمود",
    navTitle2: "ساسي.",
    navDirectContact: "تواصل معي",
    heroBadge: "خبير أنظمة النمو",
    heroTitle1: "أبني لك",
    heroTitleHighlight: "آلة مبيعات.",
    heroSubtitle1: "من الفوضى والتعب إلى...",
    heroSubtitleHighlight: "أرباح مستقرة.",
    heroDesc: 'أساعد الشركات ومزودي الخدمات في أوروبا والخليج على جذب العملاء الجاهزين للدفع، نظام أوتوماتيكي يجلب لك المال وأنت مرتاح.',
    bookCall: "تواصل معي الآن",
    whoAmI: "من أنا؟",
    whoAmITitle1: "أنا محمود ساسي،",
    whoAmITitleHighlight: "أصنع أنظمة تجلب لك الأرباح.",
    whoAmIDesc: "لا أقدم خدمات تسويق عادية. أنا أبني لك نظاماً متكاملاً يحول الزوار إلى مشترين يثقون بك ويدفعون لك بسهولة.",
    iBuild: "ماذا أبني؟",
    build1: "عروض لا تُقاوم (Offers)",
    build2: "مسارات بيع ذكية (Funnels)",
    build3: "فلترة العملاء آلياً (Automation)",
    build4: "بناء ثقة قوية (Brand Trust)",
    whoAmIMission: "مع من أعمل؟",
    whoAmIMission2: "أعمل مع",
    whoAmIMissionHighlight: "الشركات، العيادات، والمستشارين",
    whoAmIMission3: "في أوروبا والخليج.",
    whatIdo: "كيف نعمل؟",
    service1Title: "عروض قوية",
    service1Desc: "نصمم لك عرضاً جذاباً يجعل العميل يشتري بدون تردد.",
    service2Title: "مسارات البيع",
    service2Desc: "خطوات بسيطة وذكية تحول المتابع إلى مشتري بكل سهولة.",
    service3Title: "الفلترة الآلية",
    service3Desc: "نوفر وقتك ونبعد عنك الأشخاص غير الجادين.",
    service4Title: "الثقة والمصداقية",
    service4Desc: "نجعلك الخيار الأول والأفضل في مجالك عبر الإنترنت.",
    whyMe: "شروط العمل",
    whyMeSub: "لا أعمل مع الجميع.",
    ifYourProject: "لا يناسبك هذا إذا كنت:",
    bad1: "تبحث عن نجاح سريع ومزيف",
    bad2: "تعتمد على الحظ بدلاً من الأرقام",
    bad3: "لا تريد الاستثمار في عملك",
    notForYou: "هذا النظام غير مناسب لك.",
    onlyWorkWith: "أعمل حصرياً مع:",
    good1: "الشركات التي تقدم خدمة حقيقية وممتازة",
    good2: "من يبحث عن عملاء يدفعون أكثر (High-Ticket)",
    good3: "من يريدون زيادة أرباحهم بشكل مستمر",
    futureTitle: "المستقبل الذكي",
    futureSubtitle: "أرباح أكثر وبجهد أقل.",
    future1Title: "العمل الآلي",
    future1Desc: "النظام يشتغل 24 ساعة لفلترة العملاء وجلب الأفضل لك.",
    future2Title: "الراحة والتنظيم",
    future2Desc: "لا تضيع وقتك في الردود العشوائية، النظام يجهز لك العميل.",
    future3Title: "تسهيل البيع",
    future3Desc: "نزيل كل العقبات لنجعل عملية الشراء سريعة ومريحة.",
    results: "النتائج المطمئنة",
    noPromises: "لا نبيع أوهاماً.",
    sellClarity: "نحن نركز على الأرقام والأرباح:",
    res1: "عملاء جادين ومستعدين للدفع",
    res2: "تكلفة أقل لجلب العميل",
    res3: "مبيعات أكثر وثابتة",
    process: "كيف نبدأ؟",
    step1: "مكالمة التعارف والفهم",
    step2: "رسم خطة العمل",
    step3: "بناء النظام خطوة بخطوة",
    step4: "إطلاق النظام",
    step5: "المتابعة وزيادة الأرباح",
    processSub: "خطوات بسيطة نحو نجاحك.",
    pricing: "الاستثمار المطلوب",
    noSmallServices: "نحن نبني أنظمة كاملة.",
    ifYouLooking: "نحن لا نقوم بـ:",
    cheapService: "إدارة حسابات السوشيال ميديا بسعر رخيص",
    orPosts: "أو النشر العشوائي بدون خطة.",
    siteNotForYou: "إذا كنت تريد ذلك، ابحث عن مسوق تقليدي.",
    workOnProjects: "نظام الأرباح المتكامل يبدأ من",
    priceLimit: "1,500$ شهرياً",
    longTerm: "لنعطيك كامل تركيزنا ونضمن لك أفضل النتائج.",
    ifYouRead: "جاهز لزيادة أرباحك؟",
    notNormal: "لأصحاب العقول التجارية الجادة.",
    bookCallNow: "احجز جلستك الآن لنبدأ بزيادة مبيعاتك.",
    bookNow: "تواصل معي الآن",
    ownerLabel: "خبير أنظمة النمو",
    ownerName: "Mahmoud S.",
    faqTitle: "أسئلة سريعة",
    faq1Q: "كيف تجذب العملاء الذين يدفعون أكثر؟",
    faq1A: "من خلال نظام ذكي يبني الثقة ويشرح قيمتك للعميل قبل أن يتحدث معك.",
    faq2Q: "ما الفرق بينك وبين وكالة التسويق؟",
    faq2A: "هم يجلبون لك (لايكات)، أنا أبني لك نظاماً يجلب لك (أموالاً ومبيعات).",
    faq3Q: "لماذا تهتم بالأرقام؟",
    faq3A: "لأن الأرقام لا تكذب، وهي الطريق الوحيد لنمو عملك بأمان في الخليج وأوروبا."
  },
  it: {
    navTitle1: "Mahmoud",
    navTitle2: "Sassi.",
    navDirectContact: "Contattami",
    heroBadge: "Esperto di Crescita",
    heroTitle1: "Costruisco la tua",
    heroTitleHighlight: "macchina per vendere.",
    heroSubtitle1: "Dal caos alla",
    heroSubtitleHighlight: "crescita stabile.",
    heroDesc: 'Aiuto aziende e professionisti in Europa e nel GCC ad attrarre clienti pronti a pagare. Un sistema automatico che lavora per te.',
    bookCall: "Contattami Ora",
    whoAmI: "Chi Sono?",
    whoAmITitle1: "Sono Mahmoud Sassi,",
    whoAmITitleHighlight: "creo sistemi che generano profitti.",
    whoAmIDesc: "Non faccio semplice marketing. Costruisco un sistema completo che trasforma i visitatori in clienti che si fidano e pagano volentieri.",
    iBuild: "Cosa costruisco?",
    build1: "Offerte Irresistibili (Offers)",
    build2: "Sistemi di Vendita (Funnels)",
    build3: "Filtro Automatico (Automation)",
    build4: "Fiducia nel Brand (Brand Trust)",
    whoAmIMission: "Con chi lavoro?",
    whoAmIMission2: "Lavoro con",
    whoAmIMissionHighlight: "Aziende, Cliniche e Consulenti",
    whoAmIMission3: "in Europa e nel Golfo (GCC).",
    whatIdo: "Come Lavoriamo?",
    service1Title: "Offerte Forti",
    service1Desc: "Creiamo un'offerta così bella che il cliente comprerà senza esitare.",
    service2Title: "Sistemi di Vendita",
    service2Desc: "Passaggi semplici e intelligenti per trasformare i follower in acquirenti.",
    service3Title: "Filtro Automatico",
    service3Desc: "Risparmia tempo e allontana le persone non seriamente interessate.",
    service4Title: "Fiducia e Credibilità",
    service4Desc: "Ti rendiamo la scelta numero uno nel tuo settore sul web.",
    whyMe: "Requisiti per Lavorare",
    whyMeSub: "Non lavoro con tutti.",
    ifYourProject: "Questo sistema non fa per te se:",
    bad1: "Cerchi successo rapido e finto",
    bad2: "Ti affidi alla fortuna invece che ai numeri",
    bad3: "Non vuoi investire nel tuo business",
    notForYou: "Questo sistema non ti aiuterà.",
    onlyWorkWith: "Lavoro esclusivamente con:",
    good1: "Aziende che offrono servizi reali e di ottima qualità",
    good2: "Chi cerca clienti disposti a pagare di più (High-Ticket)",
    good3: "Chi vuole aumentare i propri profitti costantemente",
    futureTitle: "Il Futuro Intelligente",
    futureSubtitle: "Più profitti con meno sforzo.",
    future1Title: "Lavoro Automatico",
    future1Desc: "Il sistema lavora 24 ore su 24 per filtrare e portarti i clienti migliori.",
    future2Title: "Comodità e Organizzazione",
    future2Desc: "Non perdere tempo con messaggi inutili. Il sistema prepara il cliente per te.",
    future3Title: "Vendita Facilitata",
    future3Desc: "Rimuoviamo tutti gli ostacoli per rendere l'acquisto rapido e comodo.",
    results: "I Risultati Veri",
    noPromises: "Nessuna falsa promessa.",
    sellClarity: "Ci concentriamo su numeri e profitti:",
    res1: "Clienti seri e pronti a pagare",
    res2: "Pubblicità meno costosa",
    res3: "Vendite maggiori e costanti",
    process: "Come Iniziamo?",
    step1: "Chiamata Conoscitiva",
    step2: "Piano d'Azione",
    step3: "Costruzione del Sistema",
    step4: "Lancio",
    step5: "Monitoraggio e Aumento dei Profitti",
    processSub: "Passi semplici per il tuo successo.",
    pricing: "L'Investimento",
    noSmallServices: "Costruiamo sistemi completi.",
    ifYouLooking: "Noi NON facciamo:",
    cheapService: "Gestione di account da poco",
    orPosts: "o pubblicazione di post a caso.",
    siteNotForYou: "Se vuoi questo, cerca una normale agenzia.",
    workOnProjects: "La macchina per i profitti parte da",
    priceLimit: "1.500€ al mese",
    longTerm: "Così possiamo dedicarti tutta la nostra attenzione per ottimi risultati.",
    ifYouRead: "Pronto ad aumentare i profitti?",
    notNormal: "Solo per menti imprenditoriali serie.",
    bookCallNow: "Prenota ora la tua sessione per iniziare a guadagnare.",
    bookNow: "Contattami Ora",
    ownerLabel: "Esperto di Crescita",
    ownerName: "Mahmoud S.",
    faqTitle: "Domande Veloci",
    faq1Q: "Come attiri clienti che pagano bene?",
    faq1A: "Attraverso un sistema intelligente che costruisce fiducia e spiega il tuo valore prima ancora di parlarti.",
    faq2Q: "Qual è la differenza con un'agenzia di marketing?",
    faq2A: "Loro ti portano 'mi piace'. Io ti costruisco un sistema che porta soldi e vendite.",
    faq3Q: "Perché ti interessano tanto i numeri?",
    faq3A: "Perché i numeri non mentono. Sono l'unica strada sicura per far crescere il tuo business in Europa o nel Golfo."
  }
};`;

content = content.replace(/const translations = {[\s\S]*?^};/m, newTranslations);

const moneyDropsCode = `
const MoneyDrops = () => {
  const [drops, setDrops] = useState<{id: number, emoji: string, left: string, duration: number, delay: number, size: number}[]>([]);
  
  useEffect(() => {
    setDrops(Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      emoji: ['💰', '💸', '🪙', '💵', '💎'][Math.floor(Math.random() * 5)],
      left: \`\${Math.random() * 90 + 5}%\`,
      duration: Math.random() * 8 + 8,
      delay: Math.random() * 5,
      size: Math.random() * 1.5 + 1.5,
    })));
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-10 opacity-70">
      {drops.map((drop) => (
        <motion.div
          key={drop.id}
          className="absolute top-[-10%]"
          initial={{ y: "-10vh", x: 0, rotate: 0 }}
          animate={{ 
            y: "110vh", 
            x: Math.random() * 100 - 50,
            rotate: 360,
          }}
          transition={{
            duration: drop.duration,
            delay: drop.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: drop.left,
            fontSize: \`\${drop.size}rem\`,
            filter: "drop-shadow(0px 10px 10px rgba(0,0,0,0.5))"
          }}
        >
          {drop.emoji}
        </motion.div>
      ))}
    </div>
  );
};
`;

content = content.replace(/type Language = keyof typeof translations;/, moneyDropsCode + '\n\ntype Language = keyof typeof translations;');

content = content.replace(/<div className="min-h-screen relative">/, '<div className="min-h-screen relative">\\n      <MoneyDrops />');

fs.writeFileSync('src/App.tsx', content);
