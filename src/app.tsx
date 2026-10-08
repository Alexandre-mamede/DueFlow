import './index.css'

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="container navbar-content">
          <a href="#" className="logo">
            <span className="logo-mark">$</span>
            <span>DueFlow</span>
          </a>

          <nav className="nav-links">
            <a href="#features">Features</a>
            <a href="#how-it-works">How it works</a>
            <a href="#pricing">Pricing</a>
          </nav>

          <div className="nav-actions">
            <button className="login-button">Log in</button>
            <button className="primary-button small-button">
              Start Free
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-content">
            <div className="hero-text">
              <div className="status-badge">
                <span className="status-dot"></span>
                Automated invoice collection
              </div>

              <h1>
                Get paid.
                <br />
                <span>Without the chasing.</span>
              </h1>

              <p>
                Automate invoice follow-ups and recover overdue payments
                without spending your time chasing clients.
              </p>

              <div className="hero-actions">
                <button className="primary-button">
                  Start Free
                  <span>→</span>
                </button>

                <a href="#how-it-works" className="secondary-button">
                  See how it works
                  <span>↓</span>
                </a>
              </div>

              <div className="hero-note">
                <span>✓</span>
                No credit card required
              </div>
            </div>

            <div className="dashboard-preview">
              <div className="preview-header">
                <div>
                  <span className="preview-label">Overview</span>
                  <h3>This month</h3>
                </div>

                <div className="preview-avatar">JD</div>
              </div>

              <div className="preview-stats">
                <div className="preview-stat">
                  <span className="stat-label">Overdue</span>
                  <strong className="stat-value danger">$12,450</strong>
                  <span className="stat-change danger-text">
                    ↑ 8.2% this month
                  </span>
                </div>

                <div className="preview-stat">
                  <span className="stat-label">Due soon</span>
                  <strong className="stat-value">$4,280</strong>
                  <span className="stat-change">
                    12 invoices
                  </span>
                </div>

                <div className="preview-stat">
                  <span className="stat-label">Recovered</span>
                  <strong className="stat-value success">$3,840</strong>
                  <span className="stat-change success-text">
                    ↑ 24.5% this month
                  </span>
                </div>
              </div>

              <div className="invoice-section">
                <div className="invoice-section-header">
                  <span>Recent invoices</span>
                  <span className="view-all">View all →</span>
                </div>

                <div className="invoice">
                  <div className="invoice-client">
                    <div className="client-icon">AC</div>
                    <div>
                      <strong>Acme Corporation</strong>
                      <span>INV-1042</span>
                    </div>
                  </div>

                  <div className="invoice-info">
                    <strong>$2,400</strong>
                    <span className="overdue-badge">8 days overdue</span>
                  </div>
                </div>

                <div className="invoice">
                  <div className="invoice-client">
                    <div className="client-icon">NS</div>
                    <div>
                      <strong>Nova Studio</strong>
                      <span>INV-1043</span>
                    </div>
                  </div>

                  <div className="invoice-info">
                    <strong>$1,250</strong>
                    <span className="due-badge">Due tomorrow</span>
                  </div>
                </div>

                <div className="invoice">
                  <div className="invoice-client">
                    <div className="client-icon">SK</div>
                    <div>
                      <strong>Smith &amp; Co.</strong>
                      <span>INV-1044</span>
                    </div>
                  </div>

                  <div className="invoice-info">
                    <strong>$890</strong>
                    <span className="paid-badge">Paid</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-section">
          <div className="container">
            <p>BUILT FOR BUSINESSES THAT WANT TO GET PAID</p>

            <div className="trust-items">
              <span>AGENCIES</span>
              <span>CONSULTANTS</span>
              <span>FREELANCERS</span>
              <span>SMALL BUSINESSES</span>
            </div>
          </div>
        </section>

        <section className="features-section" id="features">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">WHY DUEFLOW</span>

              <h2>
                Stop chasing.
                <br />
                <span>Start getting paid.</span>
              </h2>

              <p>
                DueFlow handles the repetitive work of following up on
                invoices, so you don't have to.
              </p>
            </div>

            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">↗</div>
                <h3>Automatic reminders</h3>
                <p>
                  Send professional payment reminders automatically before
                  and after an invoice is due.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">◷</div>
                <h3>Never miss a payment</h3>
                <p>
                  Know exactly which invoices are due, overdue, or already
                  paid from one simple dashboard.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">$</div>
                <h3>Recover more revenue</h3>
                <p>
                  Give clients an easy way to pay and recover money that
                  would otherwise remain outstanding.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="how-section" id="how-it-works">
          <div className="container">
            <div className="section-heading centered">
              <span className="section-label">HOW IT WORKS</span>

              <h2>
                Set it once.
                <br />
                <span>Let DueFlow handle the rest.</span>
              </h2>
            </div>

            <div className="steps">
              <div className="step">
                <div className="step-number">01</div>
                <div>
                  <h3>Add your invoice</h3>
                  <p>
                    Create or import an invoice with the amount, client,
                    and due date.
                  </p>
                </div>
              </div>

              <div className="step-line"></div>

              <div className="step">
                <div className="step-number">02</div>
                <div>
                  <h3>DueFlow follows up</h3>
                  <p>
                    Automatic reminders are sent at the right time based
                    on your collection rules.
                  </p>
                </div>
              </div>

              <div className="step-line"></div>

              <div className="step">
                <div className="step-number">03</div>
                <div>
                  <h3>You get paid</h3>
                  <p>
                    Your client receives a payment link and you get
                    notified when the invoice is paid.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pricing-section" id="pricing">
          <div className="container pricing-container">
            <div className="section-heading centered">
              <span className="section-label">SIMPLE PRICING</span>

              <h2>
                Less chasing.
                <br />
                <span>More cash flow.</span>
              </h2>

              <p>
                Start small and scale as your business grows.
              </p>
            </div>

            <div className="pricing-card">
              <div>
                <span className="pricing-name">Starter</span>

                <div className="price">
                  <span>$</span>
                  19
                  <small>/month</small>
                </div>

                <p>Everything you need to automate invoice follow-ups.</p>
              </div>

              <div className="pricing-features">
                <span>✓ Up to 25 invoices</span>
                <span>✓ Automated reminders</span>
                <span>✓ Payment links</span>
                <span>✓ Overdue tracking</span>
              </div>

              <button className="primary-button pricing-button">
                Start Free
                <span>→</span>
              </button>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-card">
              <span className="section-label">READY TO GET PAID?</span>

              <h2>
                Your clients already owe you money.
                <br />
                <span>Let DueFlow help you collect it.</span>
              </h2>

              <button className="primary-button">
                Start Free
                <span>→</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <div className="logo">
            <span className="logo-mark">$</span>
            <span>DueFlow</span>
          </div>

          <p>Get paid. Without the chasing.</p>

          <span className="copyright">
            © 2026 DueFlow. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  )
}

export default App