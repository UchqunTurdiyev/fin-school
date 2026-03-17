"use client";

import React, { useState } from 'react';
import { 
  BookOpen, 
  Users, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Instagram, 
  Send,
  Star,
  Plus
} from 'lucide-react';
import RegistrationForm from '@/components/RegistrationForm';

export default function FinSchoolLanding() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-emerald-100 selection:text-emerald-900 relative font-sans overflow-x-hidden">
      
      {/* BACKGROUND ELEMENTS - MAKTA ATMOSFERASI */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <img src="https://i.pinimg.com/564x/42/48/92/424892c9745e347475f49e493976451e.jpg" alt="Background pattern" className="absolute top-0 left-0 w-full h-full object-cover"/>
        <img src="https://i.pinimg.com/564x/f3/d3/18/f3d3184f4794e77b946f1f4560738d97.jpg" alt="Library bookshelf" className="absolute top-1/4 right-0 w-1/3 h-1/3 object-cover rounded-full filter blur-3xl"/>
        <img src="https://i.pinimg.com/564x/f2/86/e1/f286e1e39b98a00224168019087c0678.jpg" alt="Classroom" className="absolute bottom-0 left-0 w-full h-1/2 object-cover"/>
      </div>

      {/* 1. NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-3xl font-extrabold tracking-tighter text-emerald-800">FIN SCHOOL</div>
          <div className="hidden md:flex gap-10 font-semibold text-slate-700">
            <a href="#about" className="hover:text-emerald-600 transition duration-300">Biz haqimizda</a>
            <a href="#courses" className="hover:text-emerald-600 transition duration-300">Kurslar</a>
            <a href="#testimonials" className="hover:text-emerald-600 transition duration-300">Otzivlar</a>
            <a href="#faq" className="hover:text-emerald-600 transition duration-300">FAQ</a>
            <a href="#contact" className="hover:text-emerald-600 transition duration-300">Bog&apos;lanish</a>
          </div>
          <a href="#contact" className="bg-emerald-600 text-white px-7 py-3 rounded-full font-bold hover:bg-emerald-700 transition duration-300 shadow-lg shadow-emerald-200 active:scale-95">
            A&apos;zo bo&apos;lish
          </a>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section id="about" className="pt-40 pb-28 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 bg-emerald-100/70 backdrop-blur-sm px-5 py-2.5 rounded-full text-emerald-800 font-extrabold text-sm border border-emerald-200">
              <Award size={20} className="text-emerald-600"/> O&apos;zbekistondagi eng innovatsion moliya akademiyasi
            </div>
            <h1 className="text-7xl lg:text-8xl font-extrabold text-slate-950 leading-[1.05] tracking-tighter">
              Kelajak moliyachilari <span className="text-emerald-600 relative inline-block">shu yerda<span className="absolute bottom-0 left-0 w-full h-2 bg-emerald-200 rounded-full -z-10"></span></span> tayyorlanadi.
            </h1>
            <p className="text-2xl text-slate-700 leading-relaxed max-w-xl">
              Fin School bilan buxgalteriya, audit va moliya tahlilini jahon standartlari va amaliy tajriba asosida mukammal o&apos;rganing.
            </p>
            <div className="flex flex-wrap gap-5 pt-4">
              <a href="#courses" className="flex items-center gap-3 bg-slate-950 text-white px-10 py-5 rounded-3xl font-extrabold hover:bg-slate-800 transition duration-300 shadow-2xl active:scale-95 text-lg">
                Kurslarni ko&apos;rish <ArrowRight size={22} />
              </a>
              <a href="#contact" className="flex items-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-3xl font-extrabold hover:bg-slate-100 transition duration-300 shadow-xl border border-slate-200 active:scale-95 text-lg">
                Maslahat olish
              </a>
            </div>
          </div>
          {/* Pinterest-style Image Container */}
          <div className="relative group">
            <div className="absolute inset-0 bg-emerald-200 rounded-[4rem] rotate-6 group-hover:rotate-0 transition-transform duration-500 -z-10 blur-xl opacity-50"></div>
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500 border-[12px] border-white">
              <img 
                src="https://i.pinimg.com/564x/a4/82/35/a482354c4f3468536b9e58e3782b6c7e.jpg" 
                alt="Fin School Education and Collaboration"
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl hidden md:block border border-slate-100 animate-float">
              <div className="flex gap-5 items-center">
                <div className="bg-emerald-100 p-4 rounded-full text-emerald-600"><Users size={30} /></div>
                <div>
                  <div className="font-extrabold text-3xl text-slate-950">+1,500</div>
                  <div className="text-base text-slate-600">Bitiruvchilar</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COURSES SECTION */}
      <section id="courses" className="py-28 bg-white/60 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-5">
            <h2 className="text-5xl font-extrabold text-slate-950 tracking-tight">Karyerangiz uchun Professional Kurslar</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">Sizning hozirgi bilim darajangiz va maqsadlaringizga mos keladigan amaliy o&apos;quv dasturlari.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { 
                title: "Buxgalteriya hisobi: 0 dan Balansgacha", 
                duration: "4 oy",
                level: "Boshlang&apos;ich",
                img: "https://i.pinimg.com/564x/13/28/7a/13287a6c9e8a7195454b5f8541c6f496.jpg"
              },
              { 
                title: "Moliya Analitikasi va Prognozlash", 
                duration: "3 oy",
                level: "O&apos;rta/Murakkab",
                img: "https://i.pinimg.com/564x/53/56/11/5356113b28489c03b290b201f9b33a7f.jpg" 
              },
              { 
                title: "Xalqaro Audit Standartlari (ISA)", 
                duration: "5 oy",
                level: "Murakkab",
                img: "https://i.pinimg.com/564x/27/a3/52/27a3528b1a32906e537672f0b7596a1e.jpg" 
              }
            ].map((course, i) => (
              <div key={i} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-emerald-100 hover:shadow-2xl transition-all duration-500 flex flex-col">
                <div className="h-72 overflow-hidden relative">
                  <img src={course.img} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                  <div className="absolute top-5 right-5 bg-white/80 backdrop-blur-sm text-emerald-800 px-4 py-1.5 rounded-full text-xs font-bold border border-white/50">{course.level}</div>
                </div>
                <div className="p-10 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-950 mb-4 leading-snug group-hover:text-emerald-700 transition">{course.title}</h3>
                    <p className="text-slate-500 text-base mb-6">Davomiyligi: <span className="font-semibold text-slate-700">{course.duration}</span>. Amaliy mashg&apos;ulotlar va keyslar bilan boyitilgan.</p>
                  </div>
                  <div className="flex justify-between items-center mt-auto pt-6 border-t border-slate-100">
                    <span className="text-emerald-700 font-extrabold text-xl">Batafsil ma&apos;lumot</span>
                    <button className="p-4 bg-slate-100 rounded-2xl hover:bg-emerald-600 hover:text-white transition duration-300 group-hover:rotate-45"><ArrowRight size={22} /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS SECTION - OTZIVLAR */}
      <section id="testimonials" className="py-28 px-6 bg-slate-50/50 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-5">
            <h2 className="text-5xl font-extrabold text-slate-950 tracking-tight">Talabalarimizning Fikrlari</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">Bitiruvchilarimizning ustozlar va o&apos;quv jarayoni haqidagi samimiy otzivlari.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { 
                name: "Dilnoza Aliyeva", 
                course: "Buxgalteriya kurs bitiruvchisi", 
                comment: "Ustozlar juda tajribali va tushunarli tushuntirishdi. Amaliy keyslar bilan ishlash real ishda juda asqotyapti.", 
                img: "https://i.pinimg.com/564x/0f/cf/64/0fcf64188f5798991316b1473f622e03.jpg"
              },
              { 
                name: "Sardor Rahimov", 
                course: "Moliya Analitikasi kurs bitiruvchisi", 
                comment: "Kurs murakkab mavzularni oddiy tilda tushuntirib berdi. Moliya bozorlarini tahlil qilishni o'rgandim.", 
                img: "https://i.pinimg.com/564x/a4/0f/50/a40f50873f139d67185c762145749f71.jpg" 
              },
              { 
                name: "Komil Toshpo'latov", 
                course: "Audit kurs bitiruvchisi", 
                comment: "Xalqaro standartlar bo'yicha bilim oldim. Ustozimning maslahatlari professional rivojlanishimda muhim rol o'ynadi.", 
                img: "https://i.pinimg.com/564x/44/77/82/4477826359c362f6b8c8d8c366e6c19f.jpg" 
              }
            ].map((otziv, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 flex flex-col gap-6 relative">
                <Star className="absolute top-8 right-8 text-amber-400 fill-amber-400" size={24}/>
                <div className="flex gap-5 items-center">
                  <img src={otziv.img} alt={otziv.name} className="w-16 h-16 rounded-full object-cover border-4 border-slate-100" />
                  <div>
                    <div className="font-extrabold text-xl text-slate-950">{otziv.name}</div>
                    <div className="text-sm text-emerald-700 font-semibold">{otziv.course}</div>
                  </div>
                </div>
                <p className="text-slate-700 text-lg leading-relaxed italic">&ldquo;{otziv.comment}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION - KO'P BERILADIGAN SAVOLLAR */}
      <section id="faq" className="py-28 px-6 bg-white/60 backdrop-blur-sm relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20 space-y-5">
            <h2 className="text-5xl font-extrabold text-slate-950 tracking-tight">Ko&apos;p Beriladigan Savollar</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">Eng qisqa va muhim savollarga javoblar.</p>
          </div>
          <div className="space-y-6">
            {[
              { q: "O'qishni tugatgandan so'ng sertifikat beriladimi?", a: "Ha, barcha kurslarimiz bitiruvchilariga xalqaro darajadagi Fin School sertifikati beriladi." },
              { q: "O'qish to'lovini bo'lib to'lash imkoniyati bormi?", a: "Albatta, bizda to'lovlarni o'qish davomida bo'lib to'lash imkoniyati mavjud." },
              { q: "Kurslar qaysi tilda olib boriladi?", a: "Hozirda kurslarimiz o'zbek tilida olib borilmoqda. Rus va ingliz tillarida ham guruhlar ochish rejalashtirilgan." },
              { q: "Amaliyot o'tash imkoniyati bormi?", a: "Ha, eng yaxshi bitiruvchilarimizga hamkor kompaniyalarda amaliyot o'tash va ishga joylashishda yordam beramiz." }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg shadow-slate-100/30 flex gap-6 items-start group">
                <div className="bg-emerald-100 p-3 rounded-xl text-emerald-700 mt-1"><Plus size={20}/></div>
                <div>
                  <h4 className="text-xl font-extrabold text-slate-950 mb-3 group-hover:text-emerald-700 transition">{faq.q}</h4>
                  <p className="text-slate-700 text-lg leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FORM SECTION */}
      <section id="contact" className="py-28 px-6 bg-slate-100/50 backdrop-blur-sm relative z-10">
        <RegistrationForm />
      </section>

      {/* FOOTER */}
      <footer className="py-16 border-t border-slate-100 text-center bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-3xl font-extrabold tracking-tighter text-emerald-800 mb-6">FIN SCHOOL</div>
          <p className="text-slate-500 font-medium max-w-lg mx-auto leading-relaxed mb-10">Professional Moliya Akademiyasi. Biz bilan kelajagingizni quring.</p>
          <div className="flex justify-center gap-6 text-slate-400 mb-10">
            <Instagram size={24} className="hover:text-emerald-600 transition cursor-pointer"/>
            <Send size={24} className="hover:text-emerald-600 transition cursor-pointer"/>
          </div>
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Fin School. Barcha huquqlar himoyalangan.</p>
        </div>
      </footer>
    </div>
  );
}