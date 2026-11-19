import { Link } from 'react-router';
import '../css/LegalPage.css';

const EFFECTIVE_DATE = 'March 18, 2026';

const SECTIONS = [
    { num: '01', id: 'information-we-collect',  title: 'Information We Collect' },
    { num: '02', id: 'how-we-use-information',   title: 'How We Use Your Information' },
    { num: '03', id: 'information-sharing',      title: 'Information Sharing' },
    { num: '04', id: 'data-retention',           title: 'Data Retention' },
    { num: '05', id: 'security',                 title: 'Security' },
    { num: '06', id: 'your-rights',              title: 'Your Rights' },
    { num: '07', id: 'cookies',                  title: 'Cookies & Tracking' },
    { num: '08', id: 'third-party',              title: 'Third-Party Services' },
    { num: '09', id: 'children',                 title: "Children's Privacy" },
    { num: '10', id: 'changes',                  title: 'Changes to This Policy' },
    { num: '11', id: 'contact',                  title: 'Contact Us' },
];

export default function PrivacyPolicyPage() {
    return (
        <div className="legal-root">
            <div className="legal-bg-grid" aria-hidden="true" />

            <nav className="legal-nav">
                <Link to="/" className="legal-nav__logo">
                    <span className="legal-nav__logo-we">We</span>
                    <span className="legal-nav__logo-dev">Developers</span>
                </Link>
                <Link to="/" className="legal-nav__back">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                    Back to home
                </Link>
            </nav>

            <div className="legal-page">

                <header className="legal-header">
                    <span className="legal-header__tag">// privacy_policy</span>
                    <h1 className="legal-header__title">Privacy Policy</h1>
                    <div className="legal-header__meta">
                        <span className="legal-header__date">Effective: {EFFECTIVE_DATE}</span>
                        <Link to="/terms" className="legal-header__sibling">&#8594; Terms &amp; Conditions</Link>
                    </div>
                </header>

                <div className="legal-highlight">
                    <p>
                        <strong>Plain English first:</strong> WeDevelopers collects only what it needs to operate the platform, never sells your data to third parties, and gives you full control over your information. The detailed version follows below.
                    </p>
                </div>

                <nav className="legal-toc" aria-label="Table of contents">
                    <p className="legal-toc__title">Contents</p>
                    <ol className="legal-toc__list">
                        {SECTIONS.map(s => (
                            <li key={s.id}>
                                <a href={`#${s.id}`}>
                                    <span className="legal-toc__num">{s.num}</span>
                                    {s.title}
                                </a>
                            </li>
                        ))}
                    </ol>
                </nav>

                {/* 01 */}
                <section className="legal-section" id="information-we-collect">
                    <div className="legal-section__header">
                        <span className="legal-section__num">01</span>
                        <h2 className="legal-section__title">Information We Collect</h2>
                    </div>
                    <p className="legal-p">We collect information you provide directly and information generated through your use of the platform.</p>

                    <p className="legal-p"><strong>Account information</strong></p>
                    <ul className="legal-list">
                        <li>Email address — used for authentication, account recovery, and platform communications.</li>
                        <li>Password — stored as a salted cryptographic hash; we never store or transmit your plaintext password.</li>
                        <li>First and last name — optionally provided through your account profile settings.</li>
                    </ul>

                    <p className="legal-p"><strong>Platform activity</strong></p>
                    <ul className="legal-list">
                        <li>Content you post, publish, or submit within the Creator Program, job board, or Collab sections.</li>
                        <li>Collaboration requests and messages exchanged on the platform.</li>
                        <li>Applications submitted for jobs or collaboration opportunities.</li>
                    </ul>

                    <p className="legal-p"><strong>Technical data</strong></p>
                    <ul className="legal-list">
                        <li>IP address and approximate geolocation derived from it.</li>
                        <li>Browser type, operating system, and device identifiers.</li>
                        <li>Pages visited, features used, and timestamps of platform interactions.</li>
                        <li>Encrypted refresh tokens stored to maintain authenticated sessions.</li>
                    </ul>

                    <p className="legal-p"><strong>Communications</strong></p>
                    <ul className="legal-list">
                        <li>Emails sent to us at <span className="legal-code">hello@wedevelopers.dev</span> or via the contact form.</li>
                        <li>Responses to surveys, feedback requests, or support inquiries.</li>
                    </ul>
                </section>

                <div className="legal-divider" />

                {/* 02 */}
                <section className="legal-section" id="how-we-use-information">
                    <div className="legal-section__header">
                        <span className="legal-section__num">02</span>
                        <h2 className="legal-section__title">How We Use Your Information</h2>
                    </div>
                    <p className="legal-p">We use the information we collect for the following purposes:</p>
                    <ul className="legal-list">
                        <li><strong>Providing the platform</strong> — creating and managing your account, authenticating sessions, and delivering core features across the Creator Program, Career, Collab, and Academy pillars.</li>
                        <li><strong>Communications</strong> — sending transactional emails such as account confirmation, password resets, and platform notifications. You can opt out of non-essential communications at any time.</li>
                        <li><strong>Revenue sharing</strong> — calculating and distributing Creator Program earnings based on your published content and its performance metrics.</li>
                        <li><strong>Matching and discovery</strong> — surfacing relevant job opportunities, collaboration partners, and Academy content based on your profile and activity.</li>
                        <li><strong>Security</strong> — detecting and preventing fraud, abuse, and unauthorised access to accounts.</li>
                        <li><strong>Platform improvement</strong> — analysing aggregated usage patterns to improve features, fix bugs, and inform product decisions. This analysis is always done on aggregate data, never on individual profiles.</li>
                        <li><strong>Legal compliance</strong> — fulfilling legal obligations and responding to lawful requests from public authorities.</li>
                    </ul>
                </section>

                <div className="legal-divider" />

                {/* 03 */}
                <section className="legal-section" id="information-sharing">
                    <div className="legal-section__header">
                        <span className="legal-section__num">03</span>
                        <h2 className="legal-section__title">Information Sharing</h2>
                    </div>
                    <p className="legal-p"><strong>We do not sell your personal data.</strong> We share information only in the following limited circumstances:</p>
                    <ul className="legal-list">
                        <li><strong>With other members, where you choose to</strong> — your public profile, posted content, and collaboration requests are visible to other platform members as part of normal platform operation.</li>
                        <li><strong>With partner companies (Career pillar)</strong> — when you apply for a role or express interest in an opportunity, relevant profile information is shared with that specific partner. You are always informed before this occurs.</li>
                        <li><strong>With service providers</strong> — we use third-party vendors for cloud infrastructure, database services, email delivery, and analytics. These providers are contractually bound to process data only as instructed and may not use it for their own purposes.</li>
                        <li><strong>For legal reasons</strong> — we may disclose information if required by law, court order, or to protect the rights, property, or safety of WeDevelopers, our members, or the public.</li>
                        <li><strong>Business transfers</strong> — if WeDevelopers is acquired or merges with another entity, your information may transfer as part of that transaction. We will notify you before your data becomes subject to a different privacy policy.</li>
                    </ul>
                </section>

                <div className="legal-divider" />

                {/* 04 */}
                <section className="legal-section" id="data-retention">
                    <div className="legal-section__header">
                        <span className="legal-section__num">04</span>
                        <h2 className="legal-section__title">Data Retention</h2>
                    </div>
                    <p className="legal-p">We retain your personal data for as long as your account is active or as needed to provide platform services. Specifically:</p>
                    <ul className="legal-list">
                        <li>Account data (email, profile details) is retained for the lifetime of your account plus a 90-day grace period after deletion to allow for account recovery.</li>
                        <li>Session tokens are invalidated upon logout and expire automatically after a defined period of inactivity.</li>
                        <li>Creator Program earnings records are retained for seven years to satisfy financial reporting obligations.</li>
                        <li>Server logs and technical data are automatically purged after 90 days.</li>
                        <li>Content you have published may remain in anonymised or archived form after account deletion where required for platform integrity.</li>
                    </ul>
                    <p className="legal-p">You may request deletion of your account and associated data at any time. See Section 6 for details.</p>
                </section>

                <div className="legal-divider" />

                {/* 05 */}
                <section className="legal-section" id="security">
                    <div className="legal-section__header">
                        <span className="legal-section__num">05</span>
                        <h2 className="legal-section__title">Security</h2>
                    </div>
                    <p className="legal-p">We implement industry-standard technical and organisational measures to protect your information:</p>
                    <ul className="legal-list">
                        <li>Passwords are hashed using a strong, salted algorithm before storage — plaintext passwords never touch our database.</li>
                        <li>Authentication tokens are encrypted using AES encryption at rest.</li>
                        <li>All data in transit is protected by TLS/HTTPS with modern cipher suites.</li>
                        <li>Access to production databases is restricted to authorised personnel only, with audit logging.</li>
                        <li>We conduct periodic security reviews of our infrastructure and application code.</li>
                    </ul>
                    <p className="legal-p">No method of transmission over the internet is 100% secure. If you believe your account has been compromised, contact us immediately at <a href="mailto:security@wedevelopers.dev">security@wedevelopers.dev</a>.</p>
                </section>

                <div className="legal-divider" />

                {/* 06 */}
                <section className="legal-section" id="your-rights">
                    <div className="legal-section__header">
                        <span className="legal-section__num">06</span>
                        <h2 className="legal-section__title">Your Rights</h2>
                    </div>
                    <p className="legal-p">Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>
                    <ul className="legal-list">
                        <li><strong>Access</strong> — request a copy of the personal data we hold about you.</li>
                        <li><strong>Correction</strong> — update or correct inaccurate information via account settings or by contacting us.</li>
                        <li><strong>Deletion</strong> — request that we delete your account and associated personal data, subject to legal retention obligations.</li>
                        <li><strong>Portability</strong> — request your data in a structured, machine-readable format.</li>
                        <li><strong>Objection</strong> — object to processing of your data for certain purposes, including direct marketing.</li>
                        <li><strong>Restriction</strong> — request that we limit how we use your data in certain circumstances.</li>
                        <li><strong>Withdraw consent</strong> — where processing is based on consent, you may withdraw it at any time without affecting prior lawful processing.</li>
                    </ul>
                    <p className="legal-p">To exercise any of these rights, email <a href="mailto:privacy@wedevelopers.dev">privacy@wedevelopers.dev</a>. We will respond within 30 days.</p>
                </section>

                <div className="legal-divider" />

                {/* 07 */}
                <section className="legal-section" id="cookies">
                    <div className="legal-section__header">
                        <span className="legal-section__num">07</span>
                        <h2 className="legal-section__title">Cookies &amp; Tracking</h2>
                    </div>
                    <p className="legal-p">WeDevelopers uses a minimal set of browser storage mechanisms to operate the platform:</p>
                    <ul className="legal-list">
                        <li><strong>Authentication tokens</strong> — stored in <span className="legal-code">localStorage</span> to maintain your signed-in session. Strictly necessary; cannot be disabled without breaking authentication.</li>
                        <li><strong>Session preferences</strong> — lightweight local state for UI experience (e.g., last active section). Never transmitted to servers.</li>
                        <li><strong>Analytics</strong> — if used, we prefer privacy-respecting, cookieless tools that report only aggregate metrics. No personally identifiable data is sent to analytics providers.</li>
                    </ul>
                    <p className="legal-p">We do not use advertising cookies, tracking pixels, or third-party retargeting scripts.</p>
                </section>

                <div className="legal-divider" />

                {/* 08 */}
                <section className="legal-section" id="third-party">
                    <div className="legal-section__header">
                        <span className="legal-section__num">08</span>
                        <h2 className="legal-section__title">Third-Party Services</h2>
                    </div>
                    <p className="legal-p">The platform relies on the following categories of third-party infrastructure. All vendors are subject to data processing agreements:</p>
                    <ul className="legal-list">
                        <li><strong>Cloud hosting &amp; database</strong> — servers and MongoDB clusters hosted on reputable cloud providers within secure data centres.</li>
                        <li><strong>Transactional email</strong> — used to deliver account confirmation, password reset, and notification emails on our behalf.</li>
                        <li><strong>Payment processing (Creator Program)</strong> — revenue distributions are processed through third-party payment rails subject to their own privacy policies. We do not store payment card details.</li>
                    </ul>
                    <p className="legal-p">This policy does not govern third-party websites linked from our platform. We encourage you to review their privacy policies independently.</p>
                </section>

                <div className="legal-divider" />

                {/* 09 */}
                <section className="legal-section" id="children">
                    <div className="legal-section__header">
                        <span className="legal-section__num">09</span>
                        <h2 className="legal-section__title">Children&apos;s Privacy</h2>
                    </div>
                    <p className="legal-p">WeDevelopers is a professional developer community platform intended for users aged <strong>16 and over</strong>. We do not knowingly collect personal data from anyone under 16. If you believe a minor has registered an account, contact us at <a href="mailto:privacy@wedevelopers.dev">privacy@wedevelopers.dev</a> and we will promptly delete the account and its associated data.</p>
                </section>

                <div className="legal-divider" />

                {/* 10 */}
                <section className="legal-section" id="changes">
                    <div className="legal-section__header">
                        <span className="legal-section__num">10</span>
                        <h2 className="legal-section__title">Changes to This Policy</h2>
                    </div>
                    <p className="legal-p">We may update this Privacy Policy as the platform evolves or legal requirements change. When we make material changes, we will:</p>
                    <ul className="legal-list">
                        <li>Update the effective date at the top of this page.</li>
                        <li>Send a notification email to registered members at least 14 days before changes take effect.</li>
                        <li>Display a prominent in-platform notice during the transition period.</li>
                    </ul>
                    <p className="legal-p">Continued use of the platform after the effective date constitutes acceptance of the revised policy.</p>
                </section>

                <div className="legal-divider" />

                {/* 11 */}
                <section className="legal-section" id="contact">
                    <div className="legal-section__header">
                        <span className="legal-section__num">11</span>
                        <h2 className="legal-section__title">Contact Us</h2>
                    </div>
                    <p className="legal-p">Questions, concerns, or requests regarding this Privacy Policy or how we handle your data should be directed to our privacy team:</p>
                    <div className="legal-contact">
                        <p className="legal-contact__label">Privacy inquiries</p>
                        <a href="mailto:privacy@wedevelopers.dev" className="legal-contact__email">privacy@wedevelopers.dev</a>
                    </div>
                    <p className="legal-p" style={{ marginTop: '1rem' }}>
                        For general questions use <a href="mailto:hello@wedevelopers.dev">hello@wedevelopers.dev</a>.
                        For security concerns use <a href="mailto:security@wedevelopers.dev">security@wedevelopers.dev</a>.
                    </p>
                </section>

            </div>

            <footer className="legal-footer">
                <Link to="/" className="legal-footer__logo">
                    <span className="legal-nav__logo-we">We</span>
                    <span className="legal-nav__logo-dev">Developers</span>
                </Link>
                <span className="legal-footer__copy">&copy; 2026 WeDevelopers</span>
                <nav className="legal-footer__links">
                    <Link to="/">Home</Link>
                    <Link to="/terms">Terms</Link>
                    <a href="mailto:hello@wedevelopers.dev">Contact</a>
                </nav>
            </footer>
        </div>
    );
}
