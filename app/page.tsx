"use client";

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Languages, 
  Utensils, 
  Sparkles, 
  GraduationCap, 
  MapPin, 
  Phone, 
  Clock, 
  Users,
  CheckCircle2,
  ArrowRight,
  Instagram,
  Send
} from 'lucide-react';
import RegistrationForm from '@/components/RegistrationForm';

export default function UzFINLanding() {
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const features = [
    { icon: <ShieldCheck className="text-yellow-500" />, title: "Xavfsizlik", desc: "24/7 videokuzatuv, yopiq hudud va psixologik bosimsiz muhit." },
    { icon: <Sparkles className="text-yellow-500" />, title: "Tozalik", desc: "Gipoallergen tozalash, havoni namlash va doimiy dezinfeksiya." },
    { icon: <Utensils className="text-yellow-500" />, title: "Ovqatlanish", desc: "100% Halol standartlari, GMOsiz tabiiy mahsulotlar." },
    { icon: <Languages className="text-yellow-500" />, title: "Ingliz Muhiti", desc: "AQSHda tahsil olgan ustozlar va to'liq ingliz tilidagi darslar." }
  ];

  return (
    <div className="min-h-screen bg-[#0f223c] text-white font-sans selection:bg-[#ffbf00] selection:text-[#0f223c]">
      
    {/* 1. NAVBAR */}
    <nav className="fixed top-0 w-full z-50 bg-[#0f2e4d]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center p-1 bg-white/5 rounded-xl border border-white/10">
            <img src="/logo.png" alt="UzFIN" className="w-12 h-12 object-contain" /> 
          </div>
          <span className="hidden md:inline-block text-2xl font-black tracking-tighter text-white">
            UzFIN <span className="text-[#ffbf00]">SCHOOL</span>
          </span>
        </div>
        
        <div className="hidden md:flex gap-8 font-semibold text-slate-300">
          <a href="#about" className="hover:text-[#ffbf00] transition-colors">Biz haqimizda</a>
          <a href="#features" className="hover:text-[#ffbf00] transition-colors">Afzalliklar</a>
          <a href="#director" className="hover:text-[#ffbf00] transition-colors">Direktor</a>
        </div>

        <a href="tel:888008080" className="bg-[#ffbf00] text-[#0f223c] px-6 py-2.5 rounded-full font-black hover:bg-[#ffcf33] transition-all flex items-center gap-2 shadow-lg shadow-[#ffbf00]/20 active:scale-95">
          <Phone size={18} strokeWidth={3} /> 88-800-80-80
        </a>
      </div>
    </nav>

    {/* 2. HERO SECTION */}
    <section className="pt-40 pb-24 px-6 relative overflow-hidden">
      {/* Dekorativ fon elementlari */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-linear-to-l from-[#ffbf00]/5 to-transparent pointer-events-none"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#0f2e4d] rounded-full blur-[120px] opacity-50"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10 z-10">
          <div className="inline-flex items-center gap-2 bg-[#ffbf00]/10 text-[#ffbf00] px-4 py-2 rounded-lg font-black text-xs uppercase tracking-[0.2em] border border-[#ffbf00]/20">
            <span className="w-2 h-2 rounded-full bg-[#ffbf00] animate-pulse"></span>
            Qabul Ochiq (0-11 sinflar)
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-black leading-[0.95] tracking-tighter">
            Farzandingiz <br />
            <span className="text-[#ffbf00] drop-shadow-sm">Ishonchli</span> <br />
            qo&apos;llarda
          </h1>
          
          <p className="text-xl text-slate-300 max-w-lg leading-relaxed font-medium">
            Samarqanddagi eng kuchli ingliz tili muhitiga ega maktab. AQSH bitiruvchilaridan sifatli ta&apos;lim oling.
          </p>
          
          <div className="flex flex-wrap gap-5 pt-4">
            <button className="bg-[#ffbf00] text-[#0f223c] px-10 py-5 rounded-2xl font-black text-lg hover:bg-[#ffcf33] transition-all shadow-2xl shadow-[#ffbf00]/20 active:scale-95 uppercase tracking-tight">
              RO&apos;YXATDAN O&apos;TISH
            </button>
            <div className="flex items-center gap-4 bg-white/5 p-2 pr-6 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-[#0f223c] bg-slate-700 overflow-hidden shadow-xl">
                     <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                  </div>
                ))}
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-tight">Faqat 100 ta <br/> o&apos;quvchi uchun</span>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-[#ffbf00] rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform duration-500 blur-xl opacity-10"></div>
          <div className="relative rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl z-10">
            <img src="/bino2.png" alt="UzFIN School Building" className="w-full h-[600px] object-cover group-hover:scale-105 transition duration-700" />
            <div className="absolute inset-0 bg-linear-to-t from-[#0f223c] via-transparent to-transparent opacity-60"></div>
          </div>
          
          {/* Ma'lumot kartochkasi */}
          <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-4xl shadow-2xl text-[#0f223c] z-20 animate-bounce-slow">
            <div className="flex items-center gap-5">
              <div className="bg-[#ffbf00]/10 p-4 rounded-2xl text-[#ffbf00]"><Clock size={32} strokeWidth={2.5} /></div>
              <div>
                <div className="font-black text-2xl tracking-tighter">9:00 – 17:00</div>
                <div className="text-sm font-bold opacity-60 uppercase tracking-widest">To&apos;liq kunlik maktab</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* 3. KEY FEATURES */}
    <section id="features" className="py-32 bg-white text-[#0f223c] rounded-t-[4rem] relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 uppercase">Nega aynan <br/> <span className="text-[#ffbf00]">UzFIN School?</span></h2>
            <p className="text-xl text-slate-500 font-medium">Biz nafaqat bilim beramiz, balki farzandingizning xavfsizligi va salomatligi uchun barcha sharoitlarni yaratamiz.</p>
          </div>
          <div className="w-32 h-2 bg-[#ffbf00] mb-4 hidden md:block"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-10 rounded-[2.5rem] bg-[#0f2e4d]/5 border border-[#0f2e4d]/10 hover:bg-[#ffbf00] hover:text-[#0f223c] transition-all duration-500 group shadow-sm">
              <div className="mb-8 transform group-hover:scale-110 group-hover:-rotate-6 transition duration-500 inline-block text-[#ffbf00] group-hover:text-[#0f223c]">
                {React.cloneElement(f.icon, { size: 48, strokeWidth: 2.5 })}
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight uppercase">{f.title}</h3>
              <p className="font-medium opacity-70 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 4. DIRECTOR SECTION */}
    <section id="director" className="py-32 px-6 bg-[#0f2e4d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1 space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-black text-[#ffbf00] tracking-tighter">Shuhratjon Ochilov</h2>
            <p className="text-xl font-black text-white/50 tracking-[0.3em] uppercase">UzFIN DIREKTORI</p>
          </div>
          
          <div className="grid gap-4">
            {[
              "2016 - ULPGS universiteti magistri, Ispaniya",
              "2019 - ManhattanPrep, VeritasPrep, AQSH",
              "2020 - GMAT jahon olimpiadasi g'olibi",
              "2022 - Zarmed universiteti rektori",
              "2012 dan beri SAT, IELTS va GMAT eksperti"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-[#ffbf00]/30 transition">
                <div className="w-2 h-2 rounded-full bg-[#ffbf00]"></div>
                <span className="font-semibold text-slate-300">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-[#0f223c] p-8 rounded-3xl border-l-8 border-[#ffbf00] italic">
            <p className="text-[#ffbf00] text-xl font-bold leading-relaxed">
              &quot;100 dan ortiq shogirdlarim bugun AQSH, Kanada va Buyuk Britaniyada grant asosida o&apos;qishmoqda. UzFIN&apos;da ham shu tajribani davom ettiramiz.&quot;
            </p>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 relative">
           <div className="absolute inset-0 bg-[#ffbf00] blur-[100px] opacity-10"></div>
           <div className="relative">
              <div className="absolute -inset-4 border-2 border-[#ffbf00]/30 rounded-[3rem] -rotate-3"></div>
              <img src="/direktor.JPG" alt="Director" className="relative w-full aspect-[4/5] object-cover rounded-[3rem] shadow-2xl border-4 border-[#0f2e4d]" />
           </div>
        </div>
      </div>
    </section>

    {/* 5. QUICK STATS */}
    <section className="py-24 bg-[#ffbf00]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-[#0f223c]">
        {[
          { label: "Har bir sinfda o'quvchi", val: "18+" },
          { label: "Tajribali pedagoglar", val: "10+ yil" },
          { label: "Natijali ustozlar", val: "SAT 1500+" },
          { label: "Rivojlantiruvchi to'garaklar", val: "10+" }
        ].map((stat, i) => (
          <div key={i} className="text-center space-y-2">
            <div className="text-6xl max-md:text-2xl font-black tracking-tighter">{stat.val}</div>
            <div className="text-xs font-black uppercase tracking-widest opacity-80">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>

    {/* 6. REGISTRATION */}
    <section className="py-32 bg-[#0f223c] px-6">
      <div className="max-w-4xl mx-auto text-center space-y-12">
         <div className="space-y-4">
            <h2 className="text-5xl font-black uppercase tracking-tighter">Bepul konsultatsiya olish</h2>
            <p className="text-slate-400 text-lg font-medium">Mutaxassislarimiz barcha savollaringizga javob berishadi.</p>
         </div>
         <div className="bg-[#0f2e4d] p-2 rounded-[2.5rem] shadow-3xl border border-white/5">
            <RegistrationForm />
         </div>
      </div>
    </section>

    {/* 7. FOOTER */}
    <footer className="py-20 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16 items-start">
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="UzFIN" className="w-12 h-12" />
            <span className="text-3xl font-black tracking-tighter uppercase">UzFIN <span className="text-[#ffbf00]">SCHOOL</span></span>
          </div>
          <p className="text-slate-500 font-medium text-lg leading-relaxed">
            Hayotiy ko&apos;nikmalar birinchi kundan boshlanadi. Samarqandning markazida zamonaviy ta&apos;lim.
          </p>
          <div className="flex gap-4">
            {[Instagram, Send].map((Icon, i) => (
              <a key={i} href="#" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-[#ffbf00] hover:text-[#0f223c] transition-all duration-300">
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <h4 className="text-[#ffbf00] font-black uppercase tracking-widest text-sm">Biz bilan bog&apos;lanish</h4>
          <div className="space-y-6">
            <div className="flex items-start gap-4 group">
              <MapPin className="text-[#ffbf00] shrink-0 group-hover:scale-110 transition" size={24} />
              <span className="text-slate-400 font-semibold">O&apos;zbekiston, Samarqand,<br />Universitet Xiyoboni, 7-uy</span>
            </div>
            <div className="flex items-center gap-4 group">
              <Phone className="text-[#ffbf00] shrink-0 group-hover:scale-110 transition" size={24} />
              <span className="text-slate-400 font-semibold text-xl">88-800-80-80</span>
            </div>
          </div>
        </div>
        
        <div className="bg-[#0f2e4d] p-10 rounded-[2.5rem] border border-white/10">
           <h4 className="font-black text-xl mb-4 uppercase tracking-tight">Qabul ochiq!</h4>
           <p className="text-slate-400 font-medium mb-6">0-11 sinflar uchun hujjatlar qabul qilinmoqda. Shoshiling, joylar soni cheklangan.</p>
           <div className="w-full h-1 bg-[#ffbf00]/20 rounded-full overflow-hidden">
              <div className="w-[85%] h-full bg-[#ffbf00]"></div>
           </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-center">
         <p className="text-slate-600 font-bold uppercase tracking-[0.3em] text-[10px]">© 2026 UzFIN School. Barcha huquqlar himoyalangan.</p>
      </div>
    </footer>
  </div>
  );
}