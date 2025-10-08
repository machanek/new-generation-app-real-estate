import { css } from "../styled-system/css";

export function SiteFooter() {
  return (
    <footer className={css({
      backgroundColor: 'gray.900',
      color: 'white',
      paddingX: '0',
      paddingY: '12'
    })}>
      <div 
        style={{ maxWidth: '1200px', margin: '0 auto' }}
        className={css({
        paddingX: '6',
        paddingY: '0'
      })}>
        <div className={css({
          display: 'grid',
          gridTemplateColumns: { base: '1fr', md: 'repeat(3, 1fr)' },
          gap: '8'
        })}>
          <div>
            <h3 className={css({
              fontSize: 'xl',
              fontWeight: 'bold',
              marginBottom: '4'
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
              marginBottom: '4'
            })}>Kontakt</h3>
            <div className={css({
              color: 'gray.300',
              display: 'flex',
              flexDirection: 'column',
              gap: '2'
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
              marginBottom: '4'
            })}>Godziny otwarcia</h3>
            <div className={css({
              color: 'gray.300',
              display: 'flex',
              flexDirection: 'column',
              gap: '1'
            })}>
              <p>Poniedziałek - Piątek: 9:00 - 18:00</p>
              <p>Sobota: 10:00 - 16:00</p>
              <p>Niedziela: Zamknięte</p>
            </div>
          </div>
        </div>
        
        <div 
          style={{ borderTop: '1px solid' }}
          className={css({
          borderColor: 'gray.700',
          marginTop: '8',
          paddingTop: '8',
          textAlign: 'center',
          color: 'gray.400'
        })}>
          <p>&copy; 2024 Harmonia Rząska. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  )
}
