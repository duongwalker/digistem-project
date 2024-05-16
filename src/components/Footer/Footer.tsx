export function Footer() {
  return (
    <footer style={{ backgroundColor: 'black', color: 'white', padding: '1vw', paddingLeft: '12vw', paddingRight: '12vw' }}>
      <div style={{ display: 'flex', borderTop: '1px solid #fff', paddingTop: '20px' }}>
        <div style={{ flex: 1 }}>
          <h4 style={{ fontSize: '1.2em' }}>About us:</h4>
          <p style={{ lineHeight: '1.5' }}>The primary purpose of the DigiSTEM project is STEM education. This project strives to give educators the tools and knowledge to redesign their teaching and implement digital resources and activities.</p>
        </div>
        <div style={{ flex: 1 }}>
          <h4 style={{ fontSize: '1.2em' }}>Our partners:</h4>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>Tampere University of Applied Sciences</li>
            <li>Slovak University of Technology in Bratislava</li>
            <li>Technical University of Civil Engineering Bucharest</li>
            <li>Polytechnical University of Madrid</li>
          </ul>
        </div>
        <div style={{ flex: 1 }}>
          <h4 style={{ fontSize: '1.2em' }}>Contact:</h4>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>Kirsi-Maria Rinneheimo - project coordinator</li>
            <li>Email: asdasdsada@asdasda</li>
            <li>Phone: +312312341241</li>
          </ul>
          <h4 style={{ fontSize: '1.2em' }}>European Union:</h4>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>This project is sponsored by:</li>
            <li>Erasmus+</li>
          </ul>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px', borderTop: '1px solid #fff', paddingTop: '20px' }}>
        DigiSTEM 2024
      </div>
    </footer>
  );
}
