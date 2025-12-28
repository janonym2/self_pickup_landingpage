"use client";

export default function Footer() {

  return (
    <div>
      {/* Footer */}
      <footer className="bg-[var(--gray)] text-white text-center py-8 text-xs md:text-sm">
        <ul className="md:flex justify-center gap-6 font-bold text-sm md:text-base">
          <hr className="md:hidden mx-[25%] my-2" />
          <span className="hidden md:inline">|</span>
          <li>
            <a href="/impressum" className="hover:text-[var(--accent)]">
              Impressum
            </a>
          </li>
          <hr className="md:hidden mx-[25%] my-2" />
          <span className="hidden md:inline">|</span>
          <li>
            <a href="/datenschutz" className="hover:text-[var(--accent)]">
              Datenschutzerklärung
            </a>
          </li>
          <hr className="md:hidden mx-[25%] my-2" />
          <span className="hidden md:inline">|</span>
          <li>
            <a href="/terms" className="hover:text-[var(--accent)]">
              Mietbedingungen
            </a>
          </li>
          <hr className="md:hidden mx-[25%] my-2" />
          <span className="hidden md:inline">|</span>
        </ul>
      </footer>
    </div>
  );
}
