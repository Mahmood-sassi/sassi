const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

const buttonComponent = `
const ProminentButton = ({ text, lang, className = "" }: { text: string, lang: Language, className?: string }) => (
  <a href={WA_LINK} target="_blank" rel="noreferrer" 
    className={\`inline-flex items-center justify-center gap-4 bg-gradient-to-br from-green-400 to-emerald-600 text-white px-8 py-5 md:px-12 md:py-6 text-xl md:text-2xl font-heading font-black rounded-2xl shadow-[0_8px_0_0_#065f46,0_15px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_4px_0_0_#065f46,0_8px_10px_rgba(0,0,0,0.4)] hover:translate-y-[4px] transition-all group relative overflow-hidden \${className}\`}
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
`;

// Insert the component before App component
content = content.replace(/(type Language = keyof typeof translations;)/, `$1\n${buttonComponent}`);

// Replaces in Hero
content = content.replace(/<a href={WA_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-4 bg-brand-white text-brand-black px-8 py-5 md:px-10 md:py-6 text-xl font-heading font-black hover:bg-brand-gray hover:text-white transition-colors group">\s*\{t\.bookCall\}\s*\{lang === 'ar' \? \(\s*<ArrowLeft[^>]+>\s*\) : \(\s*<ArrowRight[^>]+>\s*\)\}\s*<\/a>/m, `<ProminentButton text={t.bookCall} lang={lang} className="mt-8 animate-bounce" />`);

// Replaces in whoAmIMission
content = content.replace(/<a href={WA_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-4 bg-brand-accent text-white px-8 py-5 mt-10 text-xl font-heading font-black hover:bg-white hover:text-brand-black transition-colors group shadow-lg">\s*\{t\.bookCall\}\s*\{lang === 'ar' \? \(\s*<ArrowLeft[^>]+>\s*\) : \(\s*<ArrowRight[^>]+>\s*\)\}\s*<\/a>/m, `<ProminentButton text={t.bookCall} lang={lang} className="mt-10" />`);

// Replaces in service4Desc
content = content.replace(/<a href={WA_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-4 bg-brand-white text-brand-black px-10 py-6 text-xl font-heading font-black hover:bg-brand-gray hover:text-white transition-colors group shadow-2xl">\s*\{t\.bookCall\}\s*\{lang === 'ar' \? \(\s*<ArrowLeft[^>]+>\s*\) : \(\s*<ArrowRight[^>]+>\s*\)\}\s*<\/a>/m, `<ProminentButton text={t.bookCall} lang={lang} />`);

// Replaces in pricing
content = content.replace(/<a href={WA_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-4 bg-brand-accent text-white px-10 py-6 mt-16 text-xl font-heading font-black hover:bg-white hover:text-brand-black transition-all group shadow-2xl shadow-brand-accent\/20">\s*\{t\.bookCall\}\s*\{lang === 'ar' \? \(\s*<ArrowLeft[^>]+>\s*\) : \(\s*<ArrowRight[^>]+>\s*\)\}\s*<\/a>/m, `<ProminentButton text={t.bookCall} lang={lang} className="mt-16 w-full md:w-auto" />`);

// Replaces in bookNow
content = content.replace(/<a href={WA_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-4 bg-brand-black text-white px-10 py-6 md:px-16 md:py-8 text-2xl font-heading font-black hover:bg-white hover:text-brand-black transition-all group shadow-2xl">\s*\{t\.bookNow\}\s*\{lang === 'ar' \? \(\s*<ArrowLeft[^>]+>\s*\) : \(\s*<ArrowRight[^>]+>\s*\)\}\s*<\/a>/m, `<ProminentButton text={t.bookNow} lang={lang} className="w-full md:w-auto text-3xl md:text-5xl py-8 md:py-10 shadow-[0_12px_0_0_#065f46,0_20px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_6px_0_0_#065f46,0_10px_15px_rgba(0,0,0,0.5)] hover:translate-y-[6px] animate-[pulse_2s_infinite]" />`);

fs.writeFileSync('src/App.tsx', content);
