"use client";

import React, { useState } from 'react';

const RegistrationForm = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Bu yerda API orqali Telegram yoki DB ga yuborish logikasini yozish mumkin
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-2xl shadow-lg text-center border border-emerald-100">
        <div className="text-5xl mb-4 text-emerald-500">✅</div>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Arizangiz qabul qilindi!</h2>
        <p className="text-slate-600">Tez orada mutaxassislarimiz siz bilan bog&apos;lanishadi.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-6 text-emerald-600 font-medium hover:underline"
        >
          Yana ariza qoldirish
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
      <div className="bg-emerald-600 p-6 text-white text-center">
        <h2 className="text-2xl font-bold">Fin School</h2>
        <p className="text-emerald-100 text-sm mt-1">Kelajak mutaxassislari maktabi</p>
      </div>
      
      <form onSubmit={handleSubmit} className="p-8 space-y-5">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">To&apos;liq ismingiz</label>
          <input 
            required
            type="text" 
            placeholder="Masalan: Aziz Rahimov"
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Telefon raqamingiz</label>
          <div className="relative">
            <span className="absolute left-4 top-3 text-slate-400">+998</span>
            <input 
              required
              type="tel" 
              placeholder="90 123 45 67"
              className="w-full pl-14 pr-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Sinf </label>
          <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all appearance-none bg-white">
            <option>1-4 sinflar</option>
            <option>5-8 sinflar</option>
            <option>9-11 sinfgacha</option>
            <option>Maktabgacha ta&apos;lim</option>
          </select>
        </div>

        <button 
          disabled={loading}
          type="submit" 
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-lg shadow-lg shadow-emerald-200 transition-all active:scale-[0.98] disabled:opacity-70"
        >
          {loading ? "Yuborilmoqda..." : "Ro'yxatdan o'tish"}
        </button>
        
        <p className="text-[11px] text-center text-slate-400">
          Tugmani bosish orqali shaxsiy ma&apos;lumotlarni qayta ishlashga rozilik bildirasiz.
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;