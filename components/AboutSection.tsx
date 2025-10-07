// components/AboutSection.tsx
import React from "react";
import { css } from "../styled-system/css";

export default function AboutSection() {
  return (
    <section 
      id="o-nas" 
      aria-labelledby="about-title"
      className={css({
        padding: '64px 0',
        backgroundColor: 'white'
      })}
    >
      <div className={css({
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'grid',
        gridTemplateColumns: { base: '1fr', lg: '1fr 1fr' },
        gap: '48px',
        alignItems: 'center'
      })}>
        <div className={css({
          fontSize: 'lg',
          lineHeight: 'relaxed',
          color: 'textSecondary'
        })}>
          <p>
            Harmonia Rząska to wyjątkowa inwestycja mieszkaniowa położona w malowniczej miejscowości Rząska,
            zaledwie kilka kilometrów od granic Krakowa. Nasze osiedle łączy w sobie nowoczesną architekturę
            z poszanowaniem dla naturalnego otoczenia.
          </p>
          <p>
            Oferujemy różnorodne typy mieszkań – od kompaktowych dwupokojowych po przestronne czteropokojowe
            lokale z balkonami, tarasami, a niektóre z prywatnymi ogródkami. Każde mieszkanie zostało
            zaprojektowane z myślą o maksymalnym komforcie i funkcjonalności.
          </p>
          <p>
            Doskonała komunikacja z Krakowem, bliskość lasów i terenów rekreacyjnych oraz rozwijająca się
            infrastruktura lokalna sprawiają, że Harmonia Rząska to idealne miejsce dla rodzin poszukujących
            spokoju bez rezygnacji z miejskich udogodnień.
          </p>
        </div>

        <div className={css({
          textAlign: 'center'
        })}>
          <h2 
            id="about-title" 
            className={css({
              fontSize: { base: '48px', md: '64px' },
              fontWeight: 'bold',
              color: 'primary',
              lineHeight: 'tight',
              marginBottom: '16px'
            })}
          >
            <span>TARASY</span><br />
            <span>HARMONIA</span><br />
            <span>RZĄSKA</span>
          </h2>
          <p className={css({
            fontSize: 'xl',
            color: 'textSecondary',
            fontWeight: 'medium'
          })}>
            Nowoczesne mieszkania<br />pod Krakowem
          </p>
        </div>
      </div>
    </section>
  );
}
