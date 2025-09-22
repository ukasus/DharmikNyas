import PropTypes from 'prop-types'

function Card({ title, desc, href }) {
  return (
    <a className="dn-card" href={href}>
      <h3>{title}</h3>
      <p>{desc}</p>
      <span className="dn-link">Learn more →</span>
    </a>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
}

function Sections() {
  return (
    <main className="dn-main">
      <section id="about" className="dn-section">
        <div className="dn-container">
          <h2>About Department</h2>
          <p>
            Religious Trusts and Endowments, Unn Shamli, Uttar Pradesh. We
            administer temples, religious trusts and related welfare activities across the town.
          </p>
        </div>
      </section>

      <section id="gallery" className="dn-section">
        <div className="dn-container">
          <h2>Media Gallery</h2>
          <div className="dn-gallery">
            {[1,2,3,4,5,6].map(i => (
              <img key={i} src={`https://picsum.photos/seed/dn-${i}/480/320`} alt={`Gallery ${i}`} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="dn-section dn-section-alt">
        <div className="dn-container">
          <h2>Contact</h2>
          <p>Email: <a href="mailto:prabhushriramdharmiknyas@gmail.com">prabhushriramdharmiknyas@gmail.com</a> · Phone: <a href="tel:+919012802194">+91 90128 02194</a></p>
        </div>
      </section>
    </main>
  )
}

export default Sections


