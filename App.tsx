import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Check, X, PhoneCall, Target, Fingerprint, Cpu, Globe } from 'lucide-react';
import React, { ReactNode, useState, useEffect } from 'react';

const FadeIn: React.FC<{ children: ReactNode; delay?: number; className?: string; }> = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const WA_LINK = "https://wa.me/393519631564";

const translations = {
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
    callNow: "إتصل الآن",
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
    callNow: "Chiama Ora",
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
};


const MoneyDrops = () => {
  const [drops, setDrops] = useState<{id: number, emoji: string, left: string, duration: number, delay: number, size: number}[]>([]);
  
  useEffect(() => {
    setDrops(Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      emoji: ['💰', '💸', '🪙', '💵', '💎'][Math.floor(Math.random() * 5)],
      left: `${Math.random() * 90 + 5}%`,
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
            fontSize: `${drop.size}rem`,
            filter: "drop-shadow(0px 10px 10px rgba(0,0,0,0.5))"
          }}
        >
          {drop.emoji}
        </motion.div>
      ))}
    </div>
  );
};


type Language = keyof typeof translations;

const ProminentButton = ({ text, lang, className = "" }: { text: string, lang: Language, className?: string }) => (
  <a href={WA_LINK} target="_blank" rel="noreferrer" 
    className={`inline-flex items-center justify-center gap-4 bg-gradient-to-br from-green-400 to-emerald-600 text-white px-8 py-5 md:px-12 md:py-6 text-xl md:text-2xl font-heading font-black rounded-2xl shadow-[0_8px_0_0_#065f46,0_15px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_4px_0_0_#065f46,0_8px_10px_rgba(0,0,0,0.4)] hover:translate-y-[4px] transition-all group relative overflow-hidden ${className}`}
  >
    {/* Shine effect */}
    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite] skew-x-[-20deg]"></div>
    
    <div className="relative inline-flex items-center gap-3 z-10">
      <span className="absolute -inset-4 rounded-full bg-green-400 opacity-20 group-hover:animate-ping mix-blend-screen" style={{ animationDuration: '1.5s' }}></span>
      
      {text}
      
      {lang === 'ar' ? (
        <ArrowLeft className="w-8 h-8 group-hover:-translate-x-2 transition-transform" />
      ) : (
        <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
      )}
    </div>
  </a>
);


export default function App() {
  const [lang, setLang] = useState<Language>('ar');

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const t = translations[lang];

  return (
    <div className="min-h-screen relative">
      <MoneyDrops />
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-40 bg-brand-black/80 backdrop-blur-md border-b border-white/5 text-white px-6 py-6 md:px-12 flex justify-between items-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-heading font-black text-2xl tracking-wide flex gap-1.5">
          <span>{t.navTitle1}</span> <span className="text-brand-gray">{t.navTitle2}</span>
        </motion.div>
        
        <div className="flex items-center gap-6">
          <motion.button 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            onClick={() => setLang(lang === 'ar' ? 'it' : 'ar')}
            className="flex items-center gap-2 text-sm font-sans tracking-widest uppercase text-brand-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-colors"
          >
            <Globe className="w-4 h-4" />
            {lang === 'ar' ? 'IT' : 'AR'}
          </motion.button>
          
          <motion.a 
             href={WA_LINK} target="_blank" rel="noreferrer"
             initial={{ opacity: 0 }} animate={{ opacity: 1 }}
             className="hidden md:flex gap-2 items-center text-sm font-heading font-bold text-brand-gray hover:text-white transition-colors"
          >
            <PhoneCall className="w-4 h-4" />
            {t.navDirectContact}
          </motion.a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center pt-32 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto w-full">
          <FadeIn delay={0.2} className="mb-8">
            <div className="inline-block bg-white/5 border border-white/10 px-4 py-2 text-sm font-sans tracking-widest text-brand-gray uppercase">
              {t.heroBadge}
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-heading font-black leading-[1.1] mb-8 text-brand-white">
              {t.heroTitle1} <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-brand-gray to-white/40">{t.heroTitleHighlight}</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className="text-2xl md:text-5xl font-heading text-brand-white leading-tight mb-12">
              {t.heroSubtitle1} <span className="text-brand-accent font-black">{t.heroSubtitleHighlight}</span>
            </p>
          </FadeIn>
          <FadeIn delay={0.8}>
            <p className="font-sans text-brand-gray text-xl md:text-2xl max-w-2xl leading-relaxed mb-12">
              {t.heroDesc}
            </p>
            <ProminentButton text={t.bookCall} lang={lang} className="mt-8 animate-bounce" />
          </FadeIn>
        </div>
      </section>

      {/* Who Am I */}
      <section className="py-24 md:py-40 px-6 md:px-12 lg:px-24 bg-brand-dark-gray border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-7">
            <FadeIn>
              <div className="flex items-center gap-4 mb-12">
                <div className="h-[2px] w-12 bg-brand-accent"></div>
                <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-white">{t.whoAmI}</h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="space-y-12 font-sans text-xl md:text-2xl text-brand-gray font-light leading-relaxed">
                <p className="text-brand-white font-heading font-bold text-4xl leading-tight">
                  {t.whoAmITitle1}<br/> 
                  <span className="text-brand-accent">{t.whoAmITitleHighlight}</span>
                </p>
                <p>
                  {t.whoAmIDesc}
                </p>
                
                <div className="space-y-6 pt-6">
                  <p className="text-white font-heading font-bold text-2xl">{t.iBuild}</p>
                  <ul className="space-y-4 text-xl">
                    <li className="flex items-center gap-4"><Check className="w-6 h-6 text-brand-accent"/> {t.build1}</li>
                    <li className="flex items-center gap-4"><Check className="w-6 h-6 text-brand-accent"/> {t.build2}</li>
                    <li className="flex items-center gap-4"><Check className="w-6 h-6 text-brand-accent"/> {t.build3}</li>
                    <li className="flex items-center gap-4"><Check className="w-6 h-6 text-brand-accent"/> {t.build4}</li>
                  </ul>
                </div>

                <div className="pt-12 border-t border-white/10">
                  <p className="text-white font-heading text-3xl leading-relaxed">
                    {t.whoAmIMission}<br/>
                    {t.whoAmIMission2} <span className="text-brand-accent font-bold">{t.whoAmIMissionHighlight}</span> {t.whoAmIMission3}
                  </p>
                  
                  <ProminentButton text={t.bookCall} lang={lang} className="mt-10" />
                </div>
              </div>
            </FadeIn>
          </div>
          
          {/* Photo Placeholder Section */}
          <div className="lg:col-span-5 relative mt-16 lg:mt-0">
            <FadeIn delay={0.4}>
              <div className="relative aspect-[3/4] w-full max-w-sm mx-auto shadow-2xl group">
                <div className="absolute -inset-4 border border-brand-accent/30 -translate-x-4 translate-y-4 group-hover:-translate-x-6 group-hover:translate-y-6 transition-transform duration-700"></div>
                
                <div className="w-full h-full bg-brand-black overflow-hidden relative z-10 border border-white/10">
                  <img 
                    src="/Design%20sans%20titre%20(5).png" 
                    alt="صورة محمود ساسي" 
                    className="w-full h-full object-cover object-[center_top] grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-dark-gray to-transparent opacity-90 pointer-events-none"></div>
                  
                  <div className={`absolute bottom-6 z-20 pointer-events-none ${lang === 'ar' ? 'right-6 text-left' : 'left-6 text-left'}`} dir="ltr">
                    <p className="font-heading font-black text-2xl text-white tracking-widest uppercase w-full">{t.ownerName}</p>
                    <p className="font-sans text-xs text-brand-accent font-bold tracking-[0.2em] uppercase mt-1">{t.ownerLabel}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="py-24 md:py-40 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-heading font-black mb-20 md:text-center text-brand-white">{t.whatIdo}</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <FadeIn delay={0.1} className="bg-brand-dark-gray p-10 md:p-14 border border-white/5 hover:border-brand-accent/50 transition-colors group">
              <span className="text-6xl md:text-8xl font-black text-brand-black/50 group-hover:text-brand-accent/10 transition-colors block mb-8">01</span>
              <h3 className="text-2xl md:text-4xl font-heading font-bold mb-6 text-brand-white group-hover:text-brand-accent transition-colors">{t.service1Title}</h3>
              <p className="font-sans text-brand-gray text-xl">{t.service1Desc}</p>
            </FadeIn>
            <FadeIn delay={0.2} className="bg-brand-dark-gray p-10 md:p-14 border border-white/5 hover:border-brand-accent/50 transition-colors group">
              <span className="text-6xl md:text-8xl font-black text-brand-black/50 group-hover:text-brand-accent/10 transition-colors block mb-8">02</span>
              <h3 className="text-2xl md:text-4xl font-heading font-bold mb-6 text-brand-white group-hover:text-brand-accent transition-colors">{t.service2Title}</h3>
              <p className="font-sans text-brand-gray text-xl">{t.service2Desc}</p>
            </FadeIn>
            <FadeIn delay={0.3} className="bg-brand-dark-gray p-10 md:p-14 border border-white/5 hover:border-brand-accent/50 transition-colors group">
              <span className="text-6xl md:text-8xl font-black text-brand-black/50 group-hover:text-brand-accent/10 transition-colors block mb-8">03</span>
              <h3 className="text-2xl md:text-4xl font-heading font-bold mb-6 text-brand-white group-hover:text-brand-accent transition-colors">{t.service3Title}</h3>
              <p className="font-sans text-brand-gray text-xl">{t.service3Desc}</p>
            </FadeIn>
            <FadeIn delay={0.4} className="bg-brand-dark-gray p-10 md:p-14 border border-white/5 hover:border-brand-accent/50 transition-colors group">
              <span className="text-6xl md:text-8xl font-black text-brand-black/50 group-hover:text-brand-accent/10 transition-colors block mb-8">04</span>
              <h3 className="text-2xl md:text-4xl font-heading font-bold mb-6 text-brand-white group-hover:text-brand-accent transition-colors">{t.service4Title}</h3>
              <p className="font-sans text-brand-gray text-xl">{t.service4Desc}</p>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.5} className="mt-20 flex justify-center">
            <ProminentButton text={t.bookCall} lang={lang} />
          </FadeIn>
        </div>
      </section>

      {/* Why Me (Dominant Filter) */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-brand-accent/5 border-y border-brand-accent/20 relative overflow-hidden">
        <div className={`absolute top-0 w-1/2 h-full bg-brand-accent/5 blur-[120px] pointer-events-none ${lang === 'ar' ? 'right-0' : 'left-0'}`}></div>
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center relative z-10">
          <div className="lg:w-1/2 w-full">
            <FadeIn>
              <h2 className="text-5xl md:text-7xl font-heading font-black mb-8 text-brand-white">{t.whyMe}</h2>
              <p className="text-3xl font-heading text-brand-accent font-bold mb-12">{t.whyMeSub}</p>
            </FadeIn>
          </div>
          <div className="lg:w-1/2 w-full space-y-12">
            <FadeIn delay={0.2}>
              <div className={`bg-brand-black p-8 md:p-12 border-white/10 shadow-2xl shadow-black ${lang === 'ar' ? 'border-r-4' : 'border-l-4'}`}>
                <h3 className="text-2xl font-heading font-bold mb-8 text-white">{t.ifYourProject}</h3>
                <ul className="space-y-6 font-sans text-brand-gray text-xl">
                  <li className="flex items-center gap-4"><X className="w-6 h-6 text-white/30 shrink-0"/> {t.bad1}</li>
                  <li className="flex items-center gap-4"><X className="w-6 h-6 text-white/30 shrink-0"/> {t.bad2}</li>
                  <li className="flex items-center gap-4"><X className="w-6 h-6 text-white/30 shrink-0"/> {t.bad3}</li>
                </ul>
                <p className="mt-10 pt-8 border-t border-white/10 font-heading font-bold text-white text-2xl">{t.notForYou}</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className={`bg-brand-dark-gray p-8 md:p-12 border-brand-accent shadow-2xl shadow-brand-accent/5 ${lang === 'ar' ? 'border-r-4' : 'border-l-4'}`}>
                <h3 className="text-2xl font-heading font-bold mb-8 text-white">{t.onlyWorkWith}</h3>
                <ul className="space-y-6 font-sans text-brand-gray text-xl">
                  <li className="flex items-center gap-4"><Check className="w-6 h-6 text-brand-accent shrink-0"/> {t.good1}</li>
                  <li className="flex items-center gap-4"><Check className="w-6 h-6 text-brand-accent shrink-0"/> {t.good2}</li>
                  <li className="flex items-center gap-4"><Check className="w-6 h-6 text-brand-accent shrink-0"/> {t.good3}</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 md:py-40 px-6 md:px-12 text-center max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-5xl md:text-7xl font-heading font-black mb-8 text-brand-white">{t.results}</h2>
          <p className="text-3xl font-heading font-bold text-brand-gray mb-20">{t.noPromises}<br/> <span className="text-brand-accent">{t.sellClarity}</span></p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-dark-gray border border-white/5 p-12 hover:bg-brand-accent/10 transition-colors">
              <Target className="w-12 h-12 text-brand-accent mx-auto mb-8"/>
              <p className="font-heading font-bold text-2xl text-white">{t.res1}</p>
            </div>
            <div className="bg-brand-dark-gray border border-white/5 p-12 hover:bg-brand-accent/10 transition-colors">
              <Fingerprint className="w-12 h-12 text-brand-accent mx-auto mb-8"/>
              <p className="font-heading font-bold text-2xl text-white">{t.res2}</p>
            </div>
            <div className="bg-brand-dark-gray border border-white/5 p-12 hover:bg-brand-accent/10 transition-colors">
              <Cpu className="w-12 h-12 text-brand-accent mx-auto mb-8"/>
              <p className="font-heading font-bold text-2xl text-white">{t.res3}</p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 2026 Vision (New Section) */}
      <section className="py-24 md:py-40 px-6 md:px-12 lg:px-24 bg-brand-black border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex justify-center items-center gap-4 mb-6">
              <div className="h-[2px] w-8 md:w-12 bg-brand-accent"></div>
              <h2 className="text-2xl md:text-3xl font-heading font-black text-brand-accent tracking-wider uppercase">{t.futureTitle}</h2>
              <div className="h-[2px] w-8 md:w-12 bg-brand-accent"></div>
            </div>
            <h3 className="text-4xl md:text-6xl font-heading font-black mb-24 md:text-center text-brand-white leading-tight max-w-4xl mx-auto border-b border-brand-accent/20 pb-16">{t.futureSubtitle}</h3>
          </FadeIn>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {[
              { t: t.future1Title, d: t.future1Desc },
              { t: t.future2Title, d: t.future2Desc },
              { t: t.future3Title, d: t.future3Desc }
            ].map((f, i) => (
              <FadeIn key={i} delay={0.2 * i} className="relative group">
                <div className="absolute -inset-6 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-full pointer-events-none"></div>
                <span className="text-brand-accent font-mono text-sm tracking-widest mb-6 block relative z-10">ANALYSIS // {2026 + i}</span>
                <h4 className="text-3xl font-heading font-bold mb-6 text-white leading-tight relative z-10">{f.t}</h4>
                <p className="font-sans text-brand-gray text-xl leading-relaxed relative z-10">{f.d}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-white text-brand-black">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-heading font-black mb-24 md:text-center text-brand-black">{t.process}</h2>
          </FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative">
            <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-1 bg-brand-gray/20 -translate-y-1/2 z-0"></div>
            {[
              { n: "1", t: t.step1 },
              { n: "2", t: t.step2 },
              { n: "3", t: t.step3 },
              { n: "4", t: t.step4 },
              { n: "5", t: t.step5 },
            ].map((s, i) => (
               <FadeIn key={s.n} delay={0.1 * i} className="relative z-10 w-full md:w-auto text-center md:flex-1">
                 <div className="w-20 h-20 bg-brand-black text-white rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-8 border-4 border-white shadow-xl">
                   {s.n}
                 </div>
                 <p className="font-heading font-bold text-2xl text-brand-black">{s.t}</p>
               </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.6} className="mt-32 text-center">
             <p className="text-3xl md:text-5xl font-heading font-black text-brand-accent">{t.processSub}</p>
          </FadeIn>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 md:py-40 px-6 md:px-12 max-w-5xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-5xl md:text-7xl font-heading font-black text-white mb-16">{t.pricing}</h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="bg-brand-dark-gray p-12 md:p-24 border border-white/5 relative overflow-hidden">
            <div className={`absolute top-0 w-2 h-full bg-brand-accent ${lang === 'ar' ? 'left-0' : 'right-0'}`}></div>
            <p className="text-4xl font-heading font-bold mb-16 text-white">{t.noSmallServices}</p>
            
            <div className="font-sans text-brand-gray text-2xl md:text-3xl mb-16 leading-loose">
              {t.ifYouLooking}<br/>
              <span className="line-through decoration-white/30 text-white/40">{t.cheapService}</span><br/>
              {t.orPosts}<br/>
              <strong className="text-brand-accent mt-8 block font-heading font-bold">{t.siteNotForYou}</strong>
            </div>
            
            <div className="pt-16 border-t border-white/10">
              <p className="text-3xl md:text-4xl font-heading font-bold leading-relaxed text-white">
                {t.workOnProjects} <span className="text-brand-accent font-black block md:inline mt-4 md:mt-0 px-4">{t.priceLimit}</span><br className="hidden md:block" />
                {t.longTerm}
              </p>
              <ProminentButton text={t.bookCall} lang={lang} className="mt-16 w-full md:w-auto" />
            </div>
          </div>
        </FadeIn>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-brand-dark-gray border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-heading font-black mb-16 text-center text-brand-white">{t.faqTitle}</h2>
          </FadeIn>
          <div className="space-y-8">
            <FadeIn delay={0.1}>
              <div className={`bg-brand-black p-8 md:p-12 ${lang === 'ar' ? 'border-r-4' : 'border-l-4'} border-brand-accent`}>
                <h3 className="text-2xl font-heading font-bold mb-4 text-white">{t.faq1Q}</h3>
                <p className="font-sans text-brand-gray text-xl leading-relaxed">{t.faq1A}</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className={`bg-brand-black p-8 md:p-12 ${lang === 'ar' ? 'border-r-4' : 'border-l-4'} border-brand-accent`}>
                <h3 className="text-2xl font-heading font-bold mb-4 text-white">{t.faq2Q}</h3>
                <p className="font-sans text-brand-gray text-xl leading-relaxed">{t.faq2A}</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className={`bg-brand-black p-8 md:p-12 ${lang === 'ar' ? 'border-r-4' : 'border-l-4'} border-brand-accent`}>
                <h3 className="text-2xl font-heading font-bold mb-4 text-white">{t.faq3Q}</h3>
                <p className="font-sans text-brand-gray text-xl leading-relaxed">{t.faq3A}</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-32 pb-24 md:pt-48 md:pb-32 px-6 md:px-12 bg-brand-accent text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <FadeIn>
            <p className="text-3xl md:text-4xl font-heading font-bold text-white/80 mb-8">{t.ifYouRead}</p>
            <h2 className="text-5xl md:text-8xl font-heading font-black text-white mb-16 leading-tight">{t.notNormal}</h2>
            <p className="text-2xl md:text-3xl font-heading text-white/90 mb-20 leading-relaxed max-w-2xl mx-auto">
              {t.bookCallNow}
            </p>
            <ProminentButton text={t.bookNow} lang={lang} className="w-full md:w-auto text-3xl md:text-5xl py-8 md:py-10 shadow-[0_12px_0_0_#065f46,0_20px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_6px_0_0_#065f46,0_10px_15px_rgba(0,0,0,0.5)] hover:translate-y-[6px] animate-[pulse_2s_infinite]" />
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 bg-brand-black flex flex-col md:flex-row justify-between items-center gap-8 text-center text-brand-gray text-base border-t border-white/10 font-sans">
        <div className="font-heading font-black text-2xl text-white flex gap-1.5">
          <span>{t.navTitle1}</span> <span className="text-brand-gray">{t.navTitle2}</span>
        </div>
        <div className="tracking-widest">&copy; {new Date().getFullYear()} — Milan, Italy.</div>
        <div>
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="font-heading font-bold hover:text-white transition-colors tracking-widest text-lg" dir="ltr">PRIVATE: +39 351 963 1564</a>
        </div>
      </footer>
    </div>
  );
}
