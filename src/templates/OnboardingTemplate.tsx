export const OnboardingTemplate = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <main className="min-h-screen bg-[url('/bg.jpg')] bg-cover flex items-center justify-center p-6">
    <section className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 border border-slate-100">
      <header className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-50 text-cyan-600 rounded-full mb-4">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-cyan-800">
          Profilini Oluşturalım
        </h1>
        <p className="text-slate-500 mt-2">
          Adını ve avatarını seç, hemen başlayalım!
        </p>
      </header>
      {children}
      <footer className="mt-8 pt-6 border-t border-slate-100 text-center">
        <p className="text-xs text-slate-400 text-cyan-500">
          Verilerin sadece tarayıcında kalır. <br /> Hesap oluşturmana gerek
          yok.
        </p>
      </footer>
    </section>
  </main>
);
