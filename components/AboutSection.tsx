// components/AboutSection.tsx
import React from "react";
import { css } from "../styled-system/css";

export default function AboutSection() {
  return (
    <section 
      id="o-nas" 
      aria-labelledby="about-title"
      className={css({
        paddingX: '0',
        paddingY: '16',
        backgroundColor: 'white'
      })}
    >
      <div 
        style={{ maxWidth: '1200px', margin: '0 auto' }}
        className={css({
        paddingX: '6',
        paddingY: '0',
        display: 'grid',
        gridTemplateColumns: { base: '1fr', lg: '1fr 1fr' },
        gap: '12',
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
              fontSize: { base: '5xl', md: '6xl' },
              fontWeight: 'bold',
              color: 'primary',
              lineHeight: 'tight',
              marginBottom: '4'
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
