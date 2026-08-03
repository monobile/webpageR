import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-raydan-black px-6 text-center text-raydan-ivory">
      <p className="font-display text-6xl font-bold text-raydan-gold">404</p>
      <p className="max-w-md text-raydan-muted-dark">
        Страница не найдена · Page not found · الصفحة غير موجودة
      </p>
      <Link
        href="/ru"
        className="rounded-full border border-raydan-gold px-6 py-3 text-sm font-semibold text-raydan-light-gold transition-colors hover:bg-raydan-gold hover:text-raydan-black"
      >
        Райдан — Главная
      </Link>
    </main>
  );
}
