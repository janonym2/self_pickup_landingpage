export default function HowItWorks() {
  return (
    <section className="w-full max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-[var(--accent)] mb-10">
        So funktioniert’s:
      </h1>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Step 1 */}
        <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[var(--accent)] text-white flex items-center justify-center text-xl font-bold">
            1
          </div>
          <h3 className="text-lg font-semibold mb-2">
            Buchen
          </h3>
          <p className="text-gray-700 leading-relaxed">
            <strong>Buchen:</strong> Wähle deine Garnitur und buche online.
          </p>
        </div>

        {/* Step 2 */}
        <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[var(--accent)] text-white flex items-center justify-center text-xl font-bold">
            2
          </div>
          <h3 className="text-lg font-semibold mb-2">
            Zugangscode
          </h3>
          <p className="text-gray-700 leading-relaxed">
            <strong>Pin erhalten:</strong> Nach der Buchung bekommst du einen persönlichen Zugangscode.
          </p>
        </div>

        {/* Step 3 */}
        <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[var(--accent)] text-white flex items-center justify-center text-xl font-bold">
            3
          </div>
          <h3 className="text-lg font-semibold mb-2">
            Abholen & zurückbringen
          </h3>
          <p className="text-gray-700 leading-relaxed">
            <strong>Abholen & zurückbringen:</strong> Hol dir deine Garnitur selbst aus unserem zentral gelegenen Lager in Essen und bring sie nach deinem Event wieder zurück. Einfach, flexibel und stressfrei.
          </p>
        </div>
      </div>
    </section>
  );
}
