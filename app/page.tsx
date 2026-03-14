import RegistrationForm from '@/components/RegistrationForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Sifatli ta&apos;limga ilk qadam</h1>
        <p className="text-slate-500">Kurslarimizda joy band qilish uchun formani to&apos;ldiring</p>
      </div>
      
      <RegistrationForm />
      
      <footer className="mt-12 text-slate-400 text-sm">
        © {new Date().getFullYear()} Fin School Academy. Barcha huquqlar himoyalangan.
      </footer>
    </main>
  );
}