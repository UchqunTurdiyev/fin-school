"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ThanksPage() {
  const [countdown, setCountdown] = useState(15);
  const router = useRouter();

  useEffect(() => {
    // Har soniyada taymerni kamaytirish
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    // 15 soniyadan keyin Telegram'ga o'tkazish
    const timeout = setTimeout(() => {
      window.location.href = "https://t.me/UzFIN_school"; // O'zingizning profilingiz yoki guruhingiz linki
    }, 6000);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#001f3f] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
  
  {/* Orqa fondagi dekorativ tilla nurlar */}
  <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-yellow-500/5 rounded-full blur-[120px]"></div>
  <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-yellow-500/5 rounded-full blur-[120px]"></div>

  <div className="max-w-xl w-full space-y-10 animate-in fade-in zoom-in duration-1000 relative z-10">
    
    {/* Muvaffaqiyat belgisi - Premium Style */}
    <div className="flex justify-center">
      <div className="relative">
        <div className="absolute inset-0 bg-yellow-500 blur-2xl opacity-20 animate-pulse"></div>
        <div className="bg-linear-to-b from-yellow-400 to-yellow-600 p-8 rounded-[2.5rem] text-[#001f3f] shadow-2xl shadow-yellow-500/20 relative border border-white/20">
          <CheckCircle2 size={72} strokeWidth={2.5} />
        </div>
      </div>
    </div>

    <div className="space-y-4">
      <h1 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tighter">
        Muvaffaqiyatli <br />
        <span className="text-yellow-500 uppercase">ro&apos;yxatdan</span> o&apos;tdingiz!
      </h1>
      <p className="text-xl text-slate-300 leading-relaxed max-w-md mx-auto font-medium">
        Arizangiz qabul qilindi. UzFIN School mutaxassislari tez orada siz bilan bog&apos;lanishadi.
      </p>
    </div>

    {/* Taymer va Telegram bloki */}
    <div className="bg-white/5 backdrop-blur-2xl p-10 rounded-[3rem] border border-white/10 space-y-8 shadow-2xl">
      <div className="space-y-2">
        <p className="text-yellow-500 font-black text-xs uppercase tracking-[0.2em]">Sizni yo&apos;naltirmoqdamiz</p>
        <p className="text-slate-400 font-medium text-sm px-4">
          Qo&apos;shimcha ma&apos;lumotlar va yangiliklar uchun rasmiy Telegram kanalimizga o&apos;ting:
        </p>
      </div>
      
      <div className="relative flex items-center justify-center">
        {/* Countdown Ring */}
        <div className="relative w-28 h-28 flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle
              cx="56" cy="56" r="52"
              fill="transparent"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="8"
            />
            <circle
              cx="56" cy="56" r="52"
              fill="transparent"
              stroke="#EAB308"
              strokeWidth="8"
              strokeDasharray="326.7"
              strokeDashoffset={326.7 - (326.7 * countdown / 5)} // 5 soniyalik taymer uchun
              strokeLinecap="round"
              className="transition-all duration-1000 ease-linear"
            />
          </svg>
          <div className="text-5xl font-black text-white italic">
            {countdown}
          </div>
        </div>
      </div>

      <a 
        href="https://t.me/UzFIN_school" 
        className="group relative flex items-center justify-center gap-4 bg-yellow-500 text-[#001f3f] px-10 py-5 rounded-3xl font-black text-lg hover:bg-yellow-400 transition-all duration-300 shadow-xl shadow-yellow-500/10 active:scale-95 overflow-hidden"
      >
        <span className="relative z-10 flex items-center gap-3">
          TELEGRAMGA O&apos;TISH <Send size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </span>
      </a>
    </div>

    <button 
      onClick={() => router.push('/')}
      className="text-slate-500 hover:text-yellow-500 font-bold uppercase tracking-widest text-xs transition-colors duration-300 flex items-center gap-2 mx-auto group"
    >
      <span className="w-6 h-px bg-slate-700 group-hover:bg-yellow-500 transition-colors"></span>
      Asosiy sahifaga qaytish
    </button>
  </div>
</div>
  );
}