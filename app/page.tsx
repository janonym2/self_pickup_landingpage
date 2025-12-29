import ContactFormular from '@/components/ContactFormular';
import Banner from '@/components/Banner';
import { ItemFrame } from "@/components/ItemFrame";

export const metadata = {
  title: "Bierzeltgarnitur mieten in Essen",
  description: "Günstiger Self-Pickup Verleih für Bierzeltgarnituren."
}

export default async function HomePage() {

  return (
    <div>
      <main className="px-[5%] md:px-[15%] my-20 space-y-10">
        <section>
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--accent)] mb-4">Bierzeltgarnituren mieten in Essen</h1>
          <section>
            <p className='font-sans'>
              Du planst ein Fest, eine Party oder ein gemütliches Beisammensein im Freien? Bei uns kannst du unkompliziert Bierzeltgarnituren mieten – ganz ohne Lieferstress.
            </p><br /><br />

            <h1 className="text-3xl md:text-4xl font-bold text-[var(--accent)] mb-4">So funktioniert’s:</h1>
            <ol className="list-decimal list-inside ml-4 font-sans">
              <li><strong>Buchen:</strong> Wähle deine Garnitur und buche online.</li>
              <li><strong>Pin erhalten:</strong> Nach der Buchung bekommst du einen persönlichen Zugangscode.</li>
              <li><strong>Abholen & zurückbringen:</strong> Hol dir deine Garnitur selbst aus unserem zentral gelegenen Lager in Essen und bring sie nach deinem Event wieder zurück. Einfach, flexibel und stressfrei.</li>
            </ol>
            <br />

            <p className='font-sans'>
              Jetzt Bierzeltgarnitur auswählen, in den Warenkorb legen und dein Event starten!
            </p>
          </section>

            
        </section>
        <ItemFrame />

        <br />
        <Banner content='Einfach & unkompliziert' />
        <br />
        <ContactFormular />
      </main>

    </div>
  );
}