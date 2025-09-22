function Footer() {
  return (
    <footer className="dn-footer">
      <div className="dn-container dn-footer-grid">
        <div>
          <h4>Department</h4>
          <ul>
            <li><a href="#about">About</a></li>
          </ul>
        </div>
        <div>
          <h4>Resources</h4>
          <ul>
            <li><a href="#notices">Notices</a></li>
            <li><a href="#gallery">Gallery</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <address>
            Unn Shamli, Uttar Pradesh<br />
            Email: <a href="mailto:prabhushriramdharmiknyas@gmail.com">prabhushriramdharmiknyas@gmail.com</a><br />
            Phone: <a href="tel:+919012802194">+91 90128 02194</a>
          </address>
        </div>
      </div>
      <div className="dn-footer-bottom">
        <div className="dn-container">© {new Date().getFullYear()} Religious Trusts & Endowments</div>
      </div>
    </footer>
  )
}

export default Footer


