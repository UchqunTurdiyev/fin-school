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
    <div className="min-h-screen bg-[#001f3f] text-white font-sans selection:bg-yellow-500 selection:text-[#001f3f]">
      
      {/* 1. NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-[#001f3f]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center">
              <img src="/logo.png" alt="UzFIN" className="w-12 h-12 object-contain" /> 
              {/* Eslatma: Logotipni shu yerga joylashtiring */}
            </div>
            <span className="hidden md:inline-block text-2xl font-black tracking-tighter text-white">
  UzFIN <span className="text-yellow-500">SCHOOL</span>
</span>
          </div>
          <div className="hidden md:flex gap-8 font-medium text-slate-300">
            <a href="#about" className="hover:text-yellow-500 transition">Biz haqimizda</a>
            <a href="#features" className="hover:text-yellow-500 transition">Afzalliklar</a>
            <a href="#director" className="hover:text-yellow-500 transition">Direktor</a>
          </div>
          <a href="tel:888008080" className="bg-yellow-500 text-[#001f3f] px-6 py-2.5 rounded-full font-bold hover:bg-yellow-400 transition flex items-center gap-2">
            <Phone size={18} /> 88-800-80-80
          </a>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-yellow-500/10 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 z-10">
            <div className="inline-block bg-yellow-500/20 text-yellow-500 px-4 py-1 rounded-md font-bold text-sm uppercase tracking-widest border border-yellow-500/30">
              Qabul Ochiq (0-11 sinflar)
            </div>
            <h1 className="text-6xl lg:text-7xl font-black leading-tight">
              Farzandingiz <br />
              <span className="text-yellow-500">Ishonchli</span> qo&apos;llarda
            </h1>
            <p className="text-xl text-slate-300 max-w-lg leading-relaxed">
              Samarqanddagi eng kuchli ingliz tili muhitiga ega maktab. AQSH bitiruvchilaridan sifatli ta&apos;lim oling.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-yellow-500 text-[#001f3f] px-8 py-4 rounded-xl font-black text-lg hover:scale-105 transition shadow-xl shadow-yellow-500/20">
                RO&apos;YXATDAN O&apos;TISH
              </button>
              <div className="flex items-center gap-3 px-6">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-[#001f3f] bg-slate-500"></div>)}
                </div>
                <span className="text-sm font-medium text-slate-400">Faqat 100 ta o&apos;quvchi uchun joy</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-4xl overflow-hidden border-4 border-yellow-500/30 shadow-2xl">
              <img src="https://i.ibb.co/VWV3W6z/building.jpg" alt="UzFIN School Building" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl text-[#001f3f]">
              <div className="flex items-center gap-4">
                <div className="bg-yellow-100 p-3 rounded-xl text-yellow-600"><Clock size={24} /></div>
                <div>
                  <div className="font-bold text-lg">9:00 – 17:00</div>
                  <div className="text-sm opacity-70 text-slate-500">To&apos;liq kunlik maktab</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KEY FEATURES TABLE */}
      <section id="features" className="py-20 bg-white text-[#001f3f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Nega aynan UzFIN School?</h2>
            <div className="w-24 h-1.5 bg-yellow-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all group">
                <div className="mb-6 transform group-hover:scale-110 transition">{React.cloneElement(f.icon, { size: 40 })}</div>
                <h3 className="text-xl font-black mb-3">{f.title}</h3>
                <p className="text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DIRECTOR SECTION */}
      <section id="director" className="py-24 px-6 bg-[#001833]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <h2 className="text-4xl font-black text-yellow-500">Shuhratjon Ochilov</h2>
              <p className="text-lg font-bold text-slate-300 tracking-wide">UzFIN DIREKTORI</p>
              <div className="space-y-4 text-slate-400">
                <p>• 2016 - ULPGS universiteti magistri, Ispaniya</p>
                <p>• 2019 - ManhattanPrep, VeritasPrep, AQSH</p>
                <p>• 2020 - GMAT jahon olimpiadasi g&apos;olibi</p>
                <p>• 2022 - Zarmed universiteti rektori</p>
                <p className="text-yellow-500 italic mt-4">&quot;100 dan ortiq shogirdlarim bugun AQSH, Kanada va Buyuk Britaniyada grant asosida o&apos;qishmoqda.&quot;</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-80 h-96">
              <div className="absolute inset-0 border-4 border-yellow-500 rounded-2xl translate-x-4 translate-y-4"></div>
              <img src="https://i.ibb.co/Xz9Z2fX/director.jpg" alt="Director" className="absolute inset-0 w-full h-full object-cover rounded-2xl bg-slate-800" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. QUICK STATS */}
      <section className="py-16 border-y border-white/5 bg-[#001f3f]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-black text-yellow-500 mb-2">18+</div>
            <div className="text-sm text-slate-400">Har bir sinfda o&apos;quvchi</div>
          </div>
          <div>
            <div className="text-4xl font-black text-yellow-500 mb-2">10+ yil</div>
            <div className="text-sm text-slate-400">Tajribali pedagoglar</div>
          </div>
          <div>
            <div className="text-4xl font-black text-yellow-500 mb-2">SAT 1500+</div>
            <div className="text-sm text-slate-400">Natijali ustozlar</div>
          </div>
          <div>
            <div className="text-4xl font-black text-yellow-500 mb-2">10+</div>
            <div className="text-sm text-slate-400">Rivojlantiruvchi to&apos;garaklar</div>
          </div>
        </div>
      </section>

      <section className="py-16 border-y border-white/5 bg-[#001f3f]">
              <h4 className="text-4xl font-bold mb-4 text-center">Bepul konsultatsiya olish</h4>
              <RegistrationForm />
          
      </section>

      {/* 6. CONTACT FOOTER */}
      <footer className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-black text-yellow-500">UzFIN School</h3>
              <p className="text-slate-500">Hayotiy ko&apos;nikmalar birinchi kundan boshlanadi.</p>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-yellow-500 hover:text-black transition"><Instagram size={24}/></a>
                <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-yellow-500 hover:text-black transition"><Send size={24}/></a>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-6">Manzilimiz</h4>
              <div className="flex items-start gap-3 text-slate-400">
                <MapPin className="text-yellow-500 shrink-0" size={20} />
                <span>O&apos;zbekiston, Samarqand,<br />Universitet Xiyoboni, 7-uy</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Phone className="text-yellow-500" size={20} />
                <span>88-800-80-80</span>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 text-center text-slate-600 text-sm">
            © 2026 UzFIN School. Barcha huquqlar himoyalangan.
          </div>
        </div>
      </footer>
    </div>
  );
}