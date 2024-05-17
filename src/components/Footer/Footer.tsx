import './Footer.css';

export function Footer() {
  const listItemStyle = {
    paddingTop: '7px',
  };

  const aboutUsParagraphStyle = {
    paddingTop: '7px',
    lineHeight: '1.5',
    maxWidth: '50ch',
    width: '100%',
  };

  const h4Style = {
    fontSize: '1.2em',
    textDecorationThickness: '1px',
    textUnderlineOffset: '4px',
    fontWeight: 'bold',
    color: 'orange'
  };

  return (
    <footer style={{ backgroundColor: 'black', color: 'white', padding: '1vw', paddingLeft: '12vw', paddingRight: '12vw', marginBottom: '0' }}>
      <div style={{ display: 'flex', borderTop: '1px solid #fff', paddingTop: '20px' }}>
        <div style={{ flex: 1 }}>
          <h4 style={h4Style}>About us:</h4>
          <p style={aboutUsParagraphStyle}>The primary purpose of the DigiSTEM project is to improve STEM education by utilizing innovative methods and technologies. This project strives to give educators the tools and knowledge to redesign their teaching and implement digital resources and activities.</p>
        </div>
        <div style={{ flex: 1 }}>
          <h4 style={h4Style}>Our partners:</h4>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={listItemStyle}>
              <div className="underline"></div>
              <a href="https://www.tuni.fi/en/about-us/tamk" target="_blank" rel="noopener noreferrer" className="footer-link">Tampere University of Applied Sciences</a>
            </li>
            <li style={listItemStyle}>
              <div className="underline"></div>
              <a href="https://www.stuba.sk/english.html?page_id=132" target="_blank" rel="noopener noreferrer" className="footer-link">Slovak University of Technology in Bratislava</a>
            </li>
            <li style={listItemStyle}>
              <div className="underline"></div>
              <a href="https://utcb.ro/english/" target="_blank" rel="noopener noreferrer" className="footer-link">Technical University of Civil Engineering Bucharest</a>
            </li>
            <li style={listItemStyle}>
              <div className="underline"></div>
              <a href="https://www.upm.es/internacional" target="_blank" rel="noopener noreferrer" className="footer-link">Polytechnical University of Madrid</a>
            </li>
          </ul>
        </div>
        <div style={{ flex: 0.4 }}>
          <h4 style={h4Style}>Contact:</h4>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={listItemStyle}>Kirsi-Maria Rinneheimo</li>
            <li style={listItemStyle}>Email: asdasdsada@asdasda</li>
            <li style={listItemStyle}>Phone: +312312341241</li>
          </ul>
          <h4 style={{ ...h4Style, marginTop: '15px' }}>European Union:</h4>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={listItemStyle}>
              <div className="underline"></div>
              <a href="https://erasmus-plus.ec.europa.eu/" target="_blank" rel="noopener noreferrer" className="footer-link">Erasmus+</a>
            </li>
          </ul>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px', borderTop: '1px solid #fff', paddingTop: '15px', marginBottom: '0px', color: 'orange' }}>
        DigiSTEM 2024
      </div>
    </footer>
  );
}
