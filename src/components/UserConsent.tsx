import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const UserConsent = () => {
  const [open, setOpen] = useState(false);

  const handleCookie = (enable: boolean): void => {
    if (process.env.NODE_ENV !== "production") return;

    // Check if the cookie is enable
    document.cookie = enable
      ? "gdpr-analytics-enabled=true"
      : "gdpr-analytics-enabled=false";

    // Fire tracking independently let the function handle the logic
    window.trackGoogleAnalytics();

    // Set the banner to close status
    setOpen(false);
  };

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;

    const analyticsIsEnabled = document.cookie
      .split("; ")
      .find(key => key.startsWith("gdpr"))
      ?.split("=")[1];

    if (!analyticsIsEnabled) {
      setOpen(true);
    }
  }, []);

  if (open)
    return (
      <Backdrop>
        <div className="container py-4">
          {console.log(open)}
          <p>
            Este site utiliza ferramentas de análise para aperfeiçoar nosso produto e
            oferecer para você experiências cada vez melhores. Mas é voce que decide se
            quer compartilhar seus dados.
          </p>

          <button
            className="btn btn-primary btn-lg w-100 d-block my-2"
            onClick={() => handleCookie(true)}
          >
            Aceitar
          </button>
          <button
            className="btn btn-btn-outline-primary w-100 d-block my-2"
            onClick={() => handleCookie(false)}
          >
            Negar
          </button>

          <Link to="/privacidade" className="d-block text-center">
            Política de Privacidade
          </Link>
        </div>
      </Backdrop>
    );
  else return null; // corresponding to type
};

const Backdrop = styled.div`
  position: fixed;
  bottom: 0;
  z-index: ${({ theme }) => theme.zIndex.backdrop};
  width: 100vw;
  min-height: 30vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);

  p,
  a,
  button {
    color: white;
  }
`;

export default UserConsent;
