export default function ContactFormular() {
  const handleSubmit = () => {
    if (typeof window.gtag !== "undefined") {
      window.gtag('event', 'nachricht_senden', {
          button_name: 'Nachricht senden'
      });
    }
  };

  return (    
    <div>
        <section className="bg-[#f7f9fc] border-t-8 border-[var(--accent)] p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--accent)] mb-4">Kontaktieren Sie uns</h2>
          <form onSubmit={handleSubmit} noValidate className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm mb-1" htmlFor="name">
                Name:*
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Max Mustermann"
                className="w-full bg-[var(--background)] border border-[#d6d6d6] p-2 focus:ring-2 focus:ring-[var(--accent)] outline-none"
              />
            </div>

            <div>
              <label className="block text-sm mb-1" htmlFor="email">
                E-Mail:*
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="max@beispiel.de"
                className="w-full bg-[var(--background)] border border-[#d6d6d6] p-2 focus:ring-2 focus:ring-[var(--accent)] outline-none"
              />
            </div>

            <div>
              <label className="block text-sm mb-1" htmlFor="phone">
                Telefon:
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+49 171 1234567"
                className="w-full bg-[var(--background)] border border-[#d6d6d6] p-2 focus:ring-2 focus:ring-[var(--accent)] outline-none"
              />
            </div>

            <div>
              <label className="block text-sm mb-1" htmlFor="company">
                Firma:
              </label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Firma GmbH"
                className="w-full bg-[var(--background)] border border-[#d6d6d6] p-2 focus:ring-2 focus:ring-[var(--accent)] outline-none"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm mb-1" htmlFor="subject">
                Anliegen:
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full bg-[var(--background)] border border-[#d6d6d6] p-2 focus:ring-2 focus:ring-[var(--accent)] outline-none"
              >
                <option value="allgemein">Allgemeine Anfrage</option>
                <option value="miete">Mietanfrage</option>
                <option value="support">Support</option>
                <option value="kooperation">Kooperation</option>
                <option value="rechnung">Rechnung & Zahlung</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm mb-1" htmlFor="message">
                Nachricht:*
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Ihre Nachricht..."
                className="w-full bg-[var(--background)] border border-[#d6d6d6] p-2 focus:ring-2 focus:ring-[var(--accent)] outline-none min-h-[120px]"
              />
            </div>

            <div className="flex items-start gap-2 md:col-span-2">
              <input id="privacy" name="privacy" type="checkbox" required className="mt-1 bg-[var(--background)]" />
              <label htmlFor="privacy" className="text-sm text-gray-600">
                Ich stimme der Speicherung und Verarbeitung meiner Daten durch diese Webseite zu.*
              </label>
            </div>

            <p className="text-sm text-gray-500 md:col-span-2">
              * Pflichtfelder
            </p>

            <div className="md:col-span-2">
              <button
                type="submit"
                className='text-white px-6 py-2 font-bold shadow transition bg-[var(--accent)] hover:bg-[var(--accent-2)]'
              >
                Nachricht senden
              </button>
            </div>
          </form>
        </section>
    </div>
  );
}