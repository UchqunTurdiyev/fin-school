"use client";

import { addToSheet } from '@/actions/actions';
import React, { useState } from 'react'; // Fayl yo'lini tekshiring
import { useRouter } from 'next/navigation'; // MANA SHU TO'G'RI

const RegistrationForm = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter(); // Endi xato bermaydi

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // 1. Formani o'zgaruvchiga olamiz (null xatosini oldini olish uchun)
    const form = e.currentTarget; 
    
    setLoading(true);
    setError("");

    const formData = new FormData(form);
    
    // Telefon raqamini chiroyli formatlash
    let rawPhone = formData.get("phone") as string;
    const cleanPhone = rawPhone.replace(/\D/g, "");
    const formattedPhone = cleanPhone.startsWith("998") ? "+" + cleanPhone : "+998" + cleanPhone;

    const data = {
      name: formData.get("fullname") as string,
      phone: formattedPhone,
      grade: formData.get("grade") as string,
    };

    try {
      // Parallel ravishda Sheets va Telegram'ga yuborish
      const [sheetResult] = await Promise.all([
        addToSheet(data), // Bu funksiya sizda mavjud deb hisoblaymiz
        fetch("/api/send-lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })
      ]);

      if (sheetResult.success) {
        setSubmitted(true);
        form.reset(); // Formani tozalash
        
        // 2. Muvaffaqiyatli sahifaga o'tkazish
        router.push('/thanks'); 
      } else {
        setError("Kechirasiz, bazaga saqlashda muammo bo'ldi.");
      }
    } catch (err) {
      console.error("Xatolik:", err);
      setError("Aloqa uzildi. Iltimos, qaytadan urinib ko'ring.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto mt-10 p-12 bg-[#001f3f]/60 backdrop-blur-2xl rounded-[3rem] shadow-2xl text-center border border-white/10 relative overflow-hidden group">
      {/* Orqa fondagi tilla nur effekti */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl group-hover:bg-yellow-500/20 transition-all duration-700"></div>
      
      <div className="relative z-10">
        <div className="w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-yellow-500/40 transform scale-110 animate-bounce-slow">
          <svg 
            className="w-12 h-12 text-[#001f3f]" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="3" 
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
    
        <h2 className="text-3xl font-black text-white mb-4 tracking-tight">
          Arizangiz <span className="text-yellow-500 text-shadow-sm">Qabul Qilindi!</span>
        </h2>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-8 font-medium">
          Tez orada mutaxassislarimiz siz bilan bog&apos;lanib, barcha savollaringizga javob berishadi.
        </p>
    
        <button 
          onClick={() => setSubmitted(false)}
          className="inline-flex items-center gap-2 text-yellow-500 font-black uppercase tracking-widest text-sm hover:text-white transition-all duration-300 group/btn"
        >
          <span className="w-8 h-0.5 bg-yellow-500 group-hover/btn:w-12 transition-all duration-300"></span>
          Yana ariza qoldirish
        </button>
      </div>
      
      {/* Pastki qismdagi dekorativ chiziq */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-yellow-500/50 to-transparent"></div>
    </div>
    );
  }

  return (
<div className="max-w-md mx-auto mt-10 bg-[#001f3f]/40 backdrop-blur-xl rounded-4xl shadow-2xl overflow-hidden border border-white/10 relative">
  {/* Yuqoridagi tilla chiziq effekt uchun */}
  <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-transparent via-yellow-500 to-transparent"></div>
  
  <div className="bg-[#001833] p-8 text-center border-b border-white/5">
    <div className="w-16 h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-yellow-500/20">
      <img src="/logo.png" alt="UzFIN" className="w-12 h-12 object-contain" />
    </div>
    <h2 className="text-3xl font-black text-white tracking-tight">Qabul <span className="text-yellow-500">2026</span></h2>
    <p className="text-slate-400 text-sm mt-2 font-medium">Farzandingiz kelajagi uchun ilk qadam</p>
  </div>
  
  <form onSubmit={handleSubmit} className="p-8 space-y-6">
    {error && (
      <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-xl text-sm text-center animate-pulse">
        {error}
      </div>
    )}
    
    <div className="space-y-2">
      <label className="block text-xs font-bold text-yellow-500/80 uppercase tracking-widest ml-1">O&apos;quvchi ismi</label>
      <input 
        required
        name="fullname"
        type="text" 
        placeholder="Aziz Rahimov"
        className="w-full bg-black/20 text-white px-5 py-4 rounded-xl border border-white/10 focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 outline-none transition-all placeholder:text-slate-600 font-medium"
      />
    </div>

    <div className="space-y-2">
      <label className="block text-xs font-bold text-yellow-500/80 uppercase tracking-widest ml-1">Telefon raqam</label>
      <div className="relative">
        <span className="absolute left-5 top-4 text-slate-400 font-bold">+998</span>
        <input 
          required
          name="phone"
          type="tel" 
          placeholder="90 123 45 67"
          className="w-full pl-16 pr-5 py-4 bg-black/20 text-white rounded-xl border border-white/10 focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 outline-none transition-all placeholder:text-slate-600 font-medium"
        />
      </div>
    </div>

    <div className="space-y-2">
      <label className="block text-xs font-bold text-yellow-500/80 uppercase tracking-widest ml-1">Sinfni tanlang</label>
      <div className="relative">
        <select 
          name="grade"
          className="w-full px-5 py-4 bg-black/20 text-white rounded-xl border border-white/10 focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 outline-none transition-all appearance-none cursor-pointer font-medium"
        >
          <option className="bg-[#001f3f]" value="0-sinf">0-sinf (Tayyorlov)</option>
          <option className="bg-[#001f3f]" value="1-4 sinf">1 - 4 sinflar</option>
          <option className="bg-[#001f3f]" value="5-9 sinf">5 - 9 sinflar</option>
          <option className="bg-[#001f3f]" value="10-11 sinf">10 - 11 sinflar</option>
        </select>
        {/* Select uchun o'ng tomondagi kichik strelka ikonasi */}
        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </div>

    <button 
      disabled={loading}
      type="submit" 
      className="w-full bg-yellow-500 hover:bg-yellow-400 text-[#001f3f] font-black py-5 rounded-2xl shadow-xl shadow-yellow-500/10 transition-all active:scale-[0.97] disabled:opacity-50 flex items-center justify-center gap-3 text-lg tracking-tight"
    >
      {loading ? (
        <>
          <span className="w-5 h-5 border-2 border-[#001f3f]/30 border-t-[#001f3f] rounded-full animate-spin"></span>
          YUBORILMOQDA...
        </>
      ) : "RO'YXATDAN O'TISH"}
    </button>
    
    <div className="flex items-center justify-center gap-2 pt-2">
      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
        Ma&apos;lumotlar xavfsizligi kafolatlangan
      </p>
    </div>
  </form>
</div>
  );
};

export default RegistrationForm;