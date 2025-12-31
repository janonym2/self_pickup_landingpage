import ContactFormular from '@/components/ContactFormular';
import Banner from '@/components/Banner';
import { ItemFrame } from "@/components/ItemFrame";
import HowItWorks from '@/components/HowItWorks';

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

            <HowItWorks /><br />

            <p className='font-sans'>
              Jetzt Bierzeltgarnitur auswählen, in den Warenkorb legen und dein Event starten!
            </p>
          </section>

            
        </section>
        <br />
        <ItemFrame />
        
        <br />
        <Banner content={`Einfach & \nunkompliziert`} />
        <br />
        <ContactFormular />
      </main>

    </div>
  );
}