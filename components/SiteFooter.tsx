import { css } from "../styled-system/css";

export function SiteFooter() {
  return (
    <footer className={css({
      backgroundColor: 'gray.900',
      color: 'white',
      padding: '48px 0'
    })}>
      <div className={css({
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px'
      })}>
        <div className={css({
          display: 'grid',
          gridTemplateColumns: { base: '1fr', md: 'repeat(3, 1fr)' },
          gap: '32px'
        })}>
          <div>
            <h3 className={css({
              fontSize: 'xl',
              fontWeight: 'bold',
              marginBottom: '16px'
            })}>Harmonia Rząska</h3>
            <p className={css({
              color: 'gray.300'
            })}>
              Nowoczesne osiedle mieszkaniowe, gdzie komfort spotyka się z naturą.
            </p>
          </div>
          
          <div>
            <h3 className={css({
              fontSize: 'xl',
              fontWeight: 'bold',
              marginBottom: '16px'
            })}>Kontakt</h3>
            <div className={css({
              color: 'gray.300',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            })}>
              <p>ul. Przykładowa 123</p>
              <p>00-000 Warszawa</p>
              <p>tel: +48 123 456 789</p>
              <p>email: kontakt@harmonia-rzaska.pl</p>
            </div>
          </div>
          
          <div>
            <h3 className={css({
              fontSize: 'xl',
              fontWeight: 'bold',
              marginBottom: '16px'
            })}>Godziny otwarcia</h3>
            <div className={css({
              color: 'gray.300',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px'
            })}>
              <p>Poniedziałek - Piątek: 9:00 - 18:00</p>
              <p>Sobota: 10:00 - 16:00</p>
              <p>Niedziela: Zamknięte</p>
            </div>
          </div>
        </div>
        
        <div className={css({
          borderTop: '1px solid',
          borderColor: 'gray.700',
          marginTop: '32px',
          paddingTop: '32px',
          textAlign: 'center',
          color: 'gray.400'
        })}>
          <p>&copy; 2024 Harmonia Rząska. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  )
}
