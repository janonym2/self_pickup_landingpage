export default function HowItWorksTimeline() {
  return (
    <section className="w-full max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-[var(--accent)] mb-8">
        So funktioniert’s:
      </h1>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-4 top-0 h-full w-px bg-[var(--accent)]/40" />

        <ul className="space-y-12">
          {/* Step 1 */}
          <li className="relative pl-16">
            <div className="absolute left-0 top-1 flex items-center justify-center w-8 h-8 rounded-full bg-[var(--accent)] text-white font-bold">
              1
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Buchen
            </h3>
            <p className="text-gray-700 font-sans leading-relaxed">
              Wähle deine Garnitur und buche online.
            </p>
          </li>

          {/* Step 2 */}
          <li className="relative pl-16">
            <div className="absolute left-0 top-1 flex items-center justify-center w-8 h-8 rounded-full bg-[var(--accent)] text-white font-bold">
              2
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Zugangscode erhalten
            </h3>
            <p className="text-gray-700 font-sans leading-relaxed">
              Nach der Buchung bekommst du einen persönlichen Zugangscode.
            </p>
          </li>

          {/* Step 3 */}
          <li className="relative pl-16">
            <div className="absolute left-0 top-1 flex items-center justify-center w-8 h-8 rounded-full bg-[var(--accent)] text-white font-bold">
              3
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Abholen & zurückbringen
            </h3>
            <p className="text-gray-700 font-sans leading-relaxed">
              Hol dir deine Garnitur selbst aus unserem zentral gelegenen Lager in Essen und bring sie nach deinem Event wieder zurück. Einfach, flexibel und stressfrei.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
