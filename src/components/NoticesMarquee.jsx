const notices = [
  { id: 1, text: 'प्रभु श्री राम धार्मिक न्यास: देवी मंदिर रखरखाव कार्य 2025-26', href: '#' }
]

function NoticesMarquee() {
  return (
    <section id="notices" className="dn-notices" aria-label="Latest Notices">
      <div className="dn-container dn-notices-row">
        <div className="dn-notices-title">Notices</div>
        <div className="dn-notices-track" aria-live="polite">
          <div className="dn-notices-items">
            {notices.concat(notices).map((n, i) => (
              <a key={`n-${n.id}-${i}`} className="dn-notice" href={n.href}>
                {n.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default NoticesMarquee


