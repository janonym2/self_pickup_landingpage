
export default async function ImpressumPage() {

  return (
    <div>
      <main className="px-[5%] md:px-[15%] my-20 space-y-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--accent)] mb-4">Impressum</h1>
          <section>
            <h2>Angaben gemäß § 5 TMG:</h2>
            <p>Jan Hendricks<br />
            Bonnenbergstr. 18<br />
            45259 Essen<br />
            Deutschland</p>

            <h2>Kontakt:</h2>
            <p>E-Mail: jan-hendricks@outlook.de<br />
            Telefon: 00491772247053</p>

            <h2>Hinweis:</h2>
            <p>Diese Landingpage dient ausschließlich der Marktanalyse und enthält derzeit keine kommerziellen Angebote. Das Unternehmen ist noch in Gründung.</p>

            <h2>Haftung für Inhalte:</h2>
            <p>Die Inhalte dieser Seite wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird jedoch keine Gewähr übernommen.</p>

          </section>
      </main>

    </div>
  );
}