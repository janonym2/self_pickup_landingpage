
export default async function DatenschutzPage() {

  return (
    <div>
      <main className="px-[5%] md:px-[15%] my-20 space-y-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--accent)] mb-4">Datenschutzerklärung</h1>
          <section>
            <h2>Datenschutzerklärung</h2>
            <p>
                Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Mit dieser Datenschutzerklärung 
                informieren wir Sie darüber, welche Daten auf unserer Website erhoben und wie sie verwendet werden.
            </p>

            <h3>1. Verantwortlicher</h3>
            <p>
                Jan Hendricks<br />
                Bonnenbergstr. 18<br />
                45259 Essen<br />
                E-Mail: jan-hendricks@outlook.de
            </p>

            <h3>2. Erhebung und Verarbeitung personenbezogener Daten</h3>
            <p>
                - Wenn Sie unser <strong>Kontaktformular</strong> nutzen, speichern wir Name, E-Mail-Adresse und Nachricht, 
                um Ihre Anfrage zu bearbeiten.<br />
                - Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung / Anbahnung eines Vertrags)
            </p>

            <h3>3. Google Analytics 4 (GA4)</h3>
            <p>
                - Wir verwenden GA4, um Besucherzahlen und Klicks auf unserer Seite zu analysieren.<br />
                - IP-Adressen werden anonymisiert (anonymize_ip) und pseudonyme Daten verarbeitet.<br />
                - Google speichert diese Daten ggf. außerhalb der EU.<br />
                - Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse: Webanalyse)
            </p>

            <h3>4. Cookies und Tracking</h3>
            <p>
                - Für GA4 werden Cookies gesetzt, die nur nach Ihrer Einwilligung aktiviert werden.<br />
                - Sie können die Speicherung von Cookies in Ihrem Browser jederzeit ablehnen oder löschen.
            </p>

            <h3>5. Weitergabe an Dritte</h3>
            <p>
                - Daten aus dem Kontaktformular werden ausschließlich intern verarbeitet.<br />
                - Google erhält anonymisierte Analysedaten (siehe Punkt 3).
            </p>

            <h3>6. Speicherdauer</h3>
            <p>
                - Kontaktdaten werden gelöscht, sobald die Anfrage bearbeitet ist oder der Zweck entfällt, spätestens nach 6 Monaten.<br />
                - Analytics-Daten werden gemäß Google-Einstellungen pseudonymisiert gespeichert.
            </p>

            <h3>7. Rechte der Betroffenen</h3>
            <p>
                Sie haben das Recht auf:<br />
                - Auskunft über Ihre gespeicherten Daten<br />
                - Berichtigung, Löschung oder Einschränkung der Verarbeitung<br />
                - Widerspruch gegen die Verarbeitung<br />
                - Datenübertragbarkeit<br />
                Anfragen richten Sie bitte an die oben genannte E-Mail-Adresse.
            </p>

            <h3>8. Änderungen der Datenschutzerklärung</h3>
            <p>
                Wir behalten uns vor, die Datenschutzerklärung bei Bedarf anzupassen. Bitte prüfen Sie regelmäßig die aktuelle Version.
            </p>
            </section>

      </main>

    </div>
  );
}