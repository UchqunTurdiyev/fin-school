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
      window.location.href = "https://t.me/finschool_admin"; // O'zingizning profilingiz yoki guruhingiz linki
    }, 15000);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full space-y-8 animate-in fade-in zoom-in duration-700">
        
        {/* Muvaffaqiyat belgisi */}
        <div className="flex justify-center">
          <div className="bg-emerald-100 p-6 rounded-full text-emerald-600 shadow-xl shadow-emerald-100">
            <CheckCircle2 size={64} />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-black text-slate-900 leading-tight">
            Muvaffaqiyatli ro&apos;yxatdan o&apos;tdingiz!
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Sizning arizangiz qabul qilindi. Tez orada mutaxassislarimiz bog&apos;lanishadi.
          </p>
        </div>

        {/* Taymer bloki */}
        <div className="bg-slate-50 p-8 rounded-4xl border border-slate-100 space-y-4">
          <p className="text-slate-500 font-medium">
            Sizni qo&apos;shimcha ma&apos;lumotlar uchun asosiy Telegram kanalimizga yo&apos;naltirmoqdamiz...
          </p>
          
          <div className="relative flex items-center justify-center">
            {/* Dumaloq Progress Bar (ixtiyoriy, chiroyli ko'rinadi) */}
            <div className="text-4xl font-black text-emerald-600 bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-lg border-2 border-emerald-500">
              {countdown}
            </div>
          </div>

          <a 
            href="https://t.me/finschool_admin" 
            className="flex items-center justify-center gap-3 bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-emerald-700 transition shadow-lg shadow-emerald-200 w-full"
          >
            Hoziroq o&apos;tish <Send size={20} />
          </a>
        </div>

        <button 
          onClick={() => router.push('/')}
          className="text-slate-400 hover:text-emerald-600 font-medium transition"
        >
          Asosiy sahifaga qaytish
        </button>
      </div>
    </div>
  );
}