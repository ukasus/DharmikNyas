import PropTypes from 'prop-types'
import { useI18n } from '../i18n.jsx'

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
  const { t } = useI18n()
  return (
    <main className="dn-main">
      <section id="about" className="dn-section">
        <div className="dn-container">
          <h2>About Department</h2>
          <p>
            Religious Trusts and Endowments, Unn Shamli, Uttar Pradesh. We
            administer temples, religious trusts and related welfare activities across the town.
          </p>
          <p>
            <a href="https://drive.google.com/file/d/1IdmFHq3OtBv9sIvBMl9Tu-yAbJ_SVoI1/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              {t('about.deedLink')}
            </a>
          </p>
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


