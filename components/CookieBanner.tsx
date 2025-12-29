"use client"

import { useState, useEffect } from "react"
import Script from "next/script"
import TestUserMarker from '@/components/ga/TestUserMarker';

export default function CookieBanner() {
  const [consent, setConsent] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [isTestUser, setIsTestUser] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('test_user') === '1' || document.cookie.includes('test_user=1')) {
      setIsTestUser(true);
    }
  }, []);


  useEffect(() => {
    const saved = localStorage.getItem("cookie-consent")
    if (saved === "true") {
      setConsent(true)
    } else {
      setShowBanner(true)
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "true")
    setConsent(true)
    setShowBanner(false)
  };

  const acceptFunctionalOnly = () => {
    localStorage.setItem("cookie-consent", "functional-only")
    setConsent(false)
    setShowBanner(false)
    setShowSettings(false)
  };

  return (
    <>
      {/* Banner */}
      {showBanner && (
        <div
          role="dialog"
          aria-live="polite"
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "#2c2c2c",
            color: "#fff",
            padding: "1rem 2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            zIndex: 1000,
            boxShadow: "0 -2px 10px rgba(0,0,0,0.2)"
          }}
        >
          <p style={{ margin: 0, textAlign: "center", maxWidth: "600px" }}>
            Diese Website verwendet Cookies, um die Nutzung zu analysieren und die Benutzerfreundlichkeit zu verbessern.
          </p>
          <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
            <button
              onClick={acceptAll}
              style={{
                backgroundColor: "#4caf50",
                color: "#fff",
                border: "none",
                padding: "0.5rem 1rem",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              Akzeptieren
            </button>
            <button
              onClick={() => setShowSettings(true)}
              style={{
                backgroundColor: "#2196f3",
                color: "#fff",
                border: "none",
                padding: "0.5rem 1rem",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              Einstellungen
            </button>
          </div>
        </div>
      )}

      {/* Einstellungen Modal */}
      {showSettings && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2000
          }}
        >
          <div style={{ backgroundColor: "#fff", padding: "2rem", borderRadius: "8px", maxWidth: "500px", width: "90%", textAlign: "center" }}>
            <h2>Cookie-Einstellungen</h2>
            <p>Sie können auswählen, welche Cookies Sie zulassen möchten.</p>
            <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <button
                onClick={acceptAll}
                style={{
                  backgroundColor: "#4caf50",
                  color: "#fff",
                  border: "none",
                  padding: "0.5rem 1rem",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontWeight: "bold"
                }}
              >
                Alle Cookies akzeptieren
              </button>
              <button
                onClick={acceptFunctionalOnly}
                style={{
                  backgroundColor: "#ff9800",
                  color: "#fff",
                  border: "none",
                  padding: "0.5rem 1rem",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontWeight: "bold"
                }}
              >
                Nur funktionale Cookies
              </button>
              <button
                onClick={() => setShowSettings(false)}
                style={{
                  backgroundColor: "#ccc",
                  color: "#000",
                  border: "none",
                  padding: "0.5rem 1rem",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontWeight: "bold"
                }}
              >
                Schließen
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Google Analytics nur bei vollem Consent */}
      {consent && !isTestUser && (
        <>
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-T7HF8RNRZV" strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-T7HF8RNRZV', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}

    </>
  );
}
