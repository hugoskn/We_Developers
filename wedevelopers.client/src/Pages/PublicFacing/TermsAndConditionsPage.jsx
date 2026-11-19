import { Link } from 'react-router';
import '../css/LegalPage.css';

const EFFECTIVE_DATE = 'March 18, 2026';

const SECTIONS = [
    { num: '01', id: 'acceptance',        title: 'Acceptance of Terms' },
    { num: '02', id: 'account',           title: 'Account Registration' },
    { num: '03', id: 'acceptable-use',    title: 'Acceptable Use' },
    { num: '04', id: 'creator-program',   title: 'Creator Program' },
    { num: '05', id: 'career',            title: 'Career & Job Board' },
    { num: '06', id: 'collaborations',    title: 'Collaborations' },
    { num: '07', id: 'academy',           title: 'Academy' },
    { num: '08', id: 'ip',                title: 'Intellectual Property' },
    { num: '09', id: 'disclaimers',       title: 'Disclaimers' },
    { num: '10', id: 'liability',         title: 'Limitation of Liability' },
    { num: '11', id: 'termination',       title: 'Termination' },
    { num: '12', id: 'governing-law',     title: 'Governing Law' },
    { num: '13', id: 'changes',           title: 'Changes to Terms' },
    { num: '14', id: 'contact',           title: 'Contact Us' },
];

export default function TermsAndConditionsPage() {
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
                    <span className="legal-header__tag">// terms_and_conditions</span>
                    <h1 className="legal-header__title">Terms &amp; Conditions</h1>
                    <div className="legal-header__meta">
                        <span className="legal-header__date">Effective: {EFFECTIVE_DATE}</span>
                        <Link to="/privacy" className="legal-header__sibling">&#8594; Privacy Policy</Link>
                    </div>
                </header>

                <div className="legal-highlight">
                    <p>
                        <strong>Before you read the full version:</strong> by using WeDevelopers you agree to contribute positively to the community, respect other members' work and intellectual property, and not abuse any of the platform's features. The full terms below govern the relationship between you and WeDevelopers.
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
                <section className="legal-section" id="acceptance">
                    <div className="legal-section__header">
                        <span className="legal-section__num">01</span>
                        <h2 className="legal-section__title">Acceptance of Terms</h2>
                    </div>
                    <p className="legal-p">These Terms and Conditions (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you (&ldquo;Member&rdquo; or &ldquo;you&rdquo;) and WeDevelopers (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) governing your access to and use of the WeDevelopers platform, including its website, web application, and all associated services (collectively, the &ldquo;Platform&rdquo;).</p>
                    <p className="legal-p">By creating an account, accessing, or using the Platform in any way, you confirm that you have read, understood, and agree to be bound by these Terms and our <Link to="/privacy">Privacy Policy</Link>. If you do not agree to these Terms, you must not use the Platform.</p>
                    <p className="legal-p">You must be at least 16 years of age to use the Platform. By agreeing to these Terms, you represent that you meet this age requirement.</p>
                </section>

                <div className="legal-divider" />

                {/* 02 */}
                <section className="legal-section" id="account">
                    <div className="legal-section__header">
                        <span className="legal-section__num">02</span>
                        <h2 className="legal-section__title">Account Registration</h2>
                    </div>
                    <p className="legal-p">To access most features of the Platform you must register for an account. When registering, you agree to:</p>
                    <ul className="legal-list">
                        <li>Provide accurate, current, and complete information, including a valid email address.</li>
                        <li>Keep your account credentials confidential and not share your password with any third party.</li>
                        <li>Notify us immediately at <a href="mailto:hello@wedevelopers.dev">hello@wedevelopers.dev</a> if you suspect any unauthorised access to or use of your account.</li>
                        <li>Be responsible for all activity that occurs under your account, whether or not authorised by you.</li>
                    </ul>
                    <p className="legal-p">We reserve the right to suspend or terminate accounts that contain false or misleading information, or that are used in violation of these Terms.</p>
                    <p className="legal-p">Each person may hold only one account. Creating multiple accounts to circumvent restrictions or bans is prohibited.</p>
                </section>

                <div className="legal-divider" />

                {/* 03 */}
                <section className="legal-section" id="acceptable-use">
                    <div className="legal-section__header">
                        <span className="legal-section__num">03</span>
                        <h2 className="legal-section__title">Acceptable Use</h2>
                    </div>
                    <p className="legal-p">You agree to use the Platform only for lawful purposes and in a manner that does not infringe the rights of others. The following conduct is strictly prohibited:</p>
                    <ul className="legal-list">
                        <li>Posting content that is unlawful, defamatory, harassing, threatening, fraudulent, obscene, or otherwise objectionable.</li>
                        <li>Impersonating any person or entity, or misrepresenting your affiliation with any person or entity.</li>
                        <li>Attempting to gain unauthorised access to any part of the Platform, its servers, or the accounts of other members.</li>
                        <li>Introducing malware, viruses, trojans, or other harmful code into the Platform.</li>
                        <li>Using automated scripts, bots, scrapers, or crawlers to access the Platform without our prior written consent.</li>
                        <li>Spamming other members with unsolicited messages, job offers, or marketing materials.</li>
                        <li>Engaging in any conduct that could disable, overburden, or impair the Platform&apos;s infrastructure.</li>
                        <li>Harvesting or collecting personal data about other members without their explicit consent.</li>
                        <li>Misrepresenting your skills, experience, or professional background in job applications or collaboration requests.</li>
                    </ul>
                    <p className="legal-p">Violation of acceptable use policies may result in immediate suspension or permanent termination of your account without notice or refund of any fees paid.</p>
                </section>

                <div className="legal-divider" />

                {/* 04 */}
                <section className="legal-section" id="creator-program">
                    <div className="legal-section__header">
                        <span className="legal-section__num">04</span>
                        <h2 className="legal-section__title">Creator Program</h2>
                    </div>
                    <p className="legal-p">The Creator Program allows eligible members to publish content through WeDevelopers&apos; channels and receive a share of the resulting revenue. Participation in the Creator Program is subject to the following terms:</p>
                    <ul className="legal-list">
                        <li><strong>Eligibility</strong> — participation requires acceptance into the Creator Program at our discretion. Acceptance is not guaranteed and may be revoked at any time.</li>
                        <li><strong>Content ownership</strong> — you retain ownership of the content you create. By submitting content for publication you grant WeDevelopers a non-exclusive, royalty-free, worldwide licence to publish, distribute, and promote that content through our channels.</li>
                        <li><strong>Content standards</strong> — all published content must be original, accurate, technically sound, and consistent with the platform&apos;s production-grade ethos. Content that is plagiarised, misleading, or in violation of third-party intellectual property rights will be removed.</li>
                        <li><strong>Revenue share</strong> — revenue share percentages and payment schedules are agreed separately at the time of onboarding. WeDevelopers reserves the right to adjust revenue share terms with 30 days&apos; written notice to active creators.</li>
                        <li><strong>Payment</strong> — payments are subject to reaching minimum thresholds and to the accuracy of payment details you provide. We are not responsible for misdirected payments resulting from incorrect information.</li>
                        <li><strong>Taxes</strong> — you are solely responsible for all taxes arising from Creator Program earnings. We may request tax documentation as required by law.</li>
                    </ul>
                </section>

                <div className="legal-divider" />

                {/* 05 */}
                <section className="legal-section" id="career">
                    <div className="legal-section__header">
                        <span className="legal-section__num">05</span>
                        <h2 className="legal-section__title">Career &amp; Job Board</h2>
                    </div>
                    <p className="legal-p">The Career pillar connects developers directly with partner companies and community-sourced opportunities. The following terms apply:</p>
                    <ul className="legal-list">
                        <li><strong>Accuracy of listings</strong> — job listings are provided by partner companies. WeDevelopers facilitates the connection but does not guarantee the accuracy, completeness, or availability of any listing.</li>
                        <li><strong>No employment relationship</strong> — WeDevelopers is not your employer and is not a party to any employment agreement you enter into with a partner company. All terms of employment are exclusively between you and the hiring company.</li>
                        <li><strong>Profile accuracy</strong> — the profile and experience information you submit in connection with job applications must be truthful and accurate. Misrepresentation may result in account termination and notification to the relevant partner company.</li>
                        <li><strong>No guarantee of placement</strong> — WeDevelopers does not guarantee job placement, interview invitations, or any employment outcome. Access to listings is a platform feature, not a recruitment service with guaranteed results.</li>
                        <li><strong>Fee-free for members</strong> — access to the job board is included in platform membership. WeDevelopers may receive referral fees from partner companies; these arrangements do not affect your rights as a member.</li>
                    </ul>
                </section>

                <div className="legal-divider" />

                {/* 06 */}
                <section className="legal-section" id="collaborations">
                    <div className="legal-section__header">
                        <span className="legal-section__num">06</span>
                        <h2 className="legal-section__title">Collaborations</h2>
                    </div>
                    <p className="legal-p">The Collab feature helps members find co-founders, technical partners, and project contributors. WeDevelopers provides the matching infrastructure but is not a party to any collaboration arrangement you form:</p>
                    <ul className="legal-list">
                        <li>Any agreements, equity splits, IP assignments, or compensation arrangements between collaborating members are entirely the responsibility of those members. We strongly recommend formalising such arrangements in writing.</li>
                        <li>WeDevelopers does not mediate disputes arising from collaboration arrangements. We may, at our discretion, facilitate communication but are not obligated to do so.</li>
                        <li>Members posting collaboration requests must accurately represent the nature, scope, and compensation (or lack thereof) of the opportunity.</li>
                        <li>Do not use the Collab feature to solicit unpaid speculative work under false pretences or to harvest ideas from other members without genuine collaboration intent.</li>
                    </ul>
                </section>

                <div className="legal-divider" />

                {/* 07 */}
                <section className="legal-section" id="academy">
                    <div className="legal-section__header">
                        <span className="legal-section__num">07</span>
                        <h2 className="legal-section__title">Academy</h2>
                    </div>
                    <p className="legal-p">The Academy provides access to technical training content created by senior engineers and industry sponsors. The following terms apply to Academy content:</p>
                    <ul className="legal-list">
                        <li>Academy content is provided for personal, non-commercial educational use only. You may not resell, redistribute, screen-record for redistribution, or otherwise commercialise Academy materials.</li>
                        <li>Access to Academy content is a benefit of platform membership and may be adjusted as the Platform evolves. Where content is separately priced, refund terms specific to that content will apply.</li>
                        <li>While we strive for technical accuracy, Academy content represents the views and practices of its instructors and does not constitute professional advice. Apply all knowledge in the context of your specific environment.</li>
                        <li>Instructors contributing to the Academy retain ownership of their course materials and grant WeDevelopers a licence to distribute them on the Platform per their instructor agreement.</li>
                    </ul>
                </section>

                <div className="legal-divider" />

                {/* 08 */}
                <section className="legal-section" id="ip">
                    <div className="legal-section__header">
                        <span className="legal-section__num">08</span>
                        <h2 className="legal-section__title">Intellectual Property</h2>
                    </div>
                    <p className="legal-p"><strong>WeDevelopers&apos; IP:</strong> The Platform — including its name, logo, design, codebase, and all non-user-generated content — is owned by WeDevelopers and protected by applicable intellectual property laws. You may not copy, reproduce, modify, or create derivative works of Platform content without our prior written consent.</p>
                    <p className="legal-p"><strong>Your IP:</strong> You retain all rights to content you create and post on the Platform. By posting content you grant WeDevelopers a non-exclusive, royalty-free licence to display, distribute, and promote that content within the Platform and, for Creator Program participants, through our associated channels.</p>
                    <p className="legal-p"><strong>Feedback:</strong> If you submit suggestions, ideas, or feature requests to WeDevelopers, you grant us the right to use that feedback without restriction or compensation. We are not obligated to treat feedback as confidential.</p>
                    <p className="legal-p"><strong>Third-party IP:</strong> You represent and warrant that content you post does not infringe the intellectual property rights of any third party. If you believe content on the Platform infringes your rights, contact us at <a href="mailto:legal@wedevelopers.dev">legal@wedevelopers.dev</a>.</p>
                </section>

                <div className="legal-divider" />

                {/* 09 */}
                <section className="legal-section" id="disclaimers">
                    <div className="legal-section__header">
                        <span className="legal-section__num">09</span>
                        <h2 className="legal-section__title">Disclaimers</h2>
                    </div>
                    <p className="legal-p">The Platform is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind, either express or implied, including but not limited to:</p>
                    <ul className="legal-list">
                        <li>Warranties of merchantability, fitness for a particular purpose, or non-infringement.</li>
                        <li>Guarantees that the Platform will be uninterrupted, error-free, or free of harmful components.</li>
                        <li>Guarantees regarding the accuracy, completeness, or suitability of any content posted by members, partner companies, or instructors.</li>
                    </ul>
                    <p className="legal-p">WeDevelopers makes no representations regarding the professional conduct, competence, or reliability of any member you connect with through the Platform.</p>
                </section>

                <div className="legal-divider" />

                {/* 10 */}
                <section className="legal-section" id="liability">
                    <div className="legal-section__header">
                        <span className="legal-section__num">10</span>
                        <h2 className="legal-section__title">Limitation of Liability</h2>
                    </div>
                    <p className="legal-p">To the fullest extent permitted by applicable law, WeDevelopers and its directors, employees, and contractors shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from:</p>
                    <ul className="legal-list">
                        <li>Your use of or inability to use the Platform.</li>
                        <li>Any collaboration, employment, or commercial arrangement entered into through the Platform.</li>
                        <li>Unauthorised access to or alteration of your data.</li>
                        <li>Any content posted by other members or third parties on the Platform.</li>
                    </ul>
                    <p className="legal-p">In jurisdictions that do not allow the exclusion or limitation of certain damages, our liability is limited to the maximum extent permitted by law. In all cases, our aggregate liability to you shall not exceed the total amount you have paid to WeDevelopers in the twelve months preceding the claim, or £100 GBP, whichever is greater.</p>
                </section>

                <div className="legal-divider" />

                {/* 11 */}
                <section className="legal-section" id="termination">
                    <div className="legal-section__header">
                        <span className="legal-section__num">11</span>
                        <h2 className="legal-section__title">Termination</h2>
                    </div>
                    <p className="legal-p"><strong>By you:</strong> You may close your account at any time by contacting <a href="mailto:hello@wedevelopers.dev">hello@wedevelopers.dev</a> or through the account settings. Deletion requests will be processed within 30 days. Creator Program earnings accrued up to the date of termination will be paid out on the next scheduled payment date, subject to minimum thresholds.</p>
                    <p className="legal-p"><strong>By us:</strong> We reserve the right to suspend or permanently terminate your account at any time, with or without notice, if we determine that:</p>
                    <ul className="legal-list">
                        <li>You have violated these Terms or our community standards.</li>
                        <li>Your conduct is harmful to other members or the platform community.</li>
                        <li>Continued access poses a legal or security risk to WeDevelopers or its members.</li>
                    </ul>
                    <p className="legal-p">Upon termination, your right to access the Platform ceases immediately. Sections of these Terms that by their nature should survive termination (including Intellectual Property, Limitation of Liability, and Governing Law) shall continue to apply.</p>
                </section>

                <div className="legal-divider" />

                {/* 12 */}
                <section className="legal-section" id="governing-law">
                    <div className="legal-section__header">
                        <span className="legal-section__num">12</span>
                        <h2 className="legal-section__title">Governing Law</h2>
                    </div>
                    <p className="legal-p">These Terms are governed by and construed in accordance with the laws of England and Wales, without regard to conflict of law principles. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
                    <p className="legal-p">If you are a consumer resident in a jurisdiction with mandatory local consumer protection laws, those laws may provide you with rights that cannot be excluded by these Terms, and such rights are not affected by this clause.</p>
                </section>

                <div className="legal-divider" />

                {/* 13 */}
                <section className="legal-section" id="changes">
                    <div className="legal-section__header">
                        <span className="legal-section__num">13</span>
                        <h2 className="legal-section__title">Changes to Terms</h2>
                    </div>
                    <p className="legal-p">We may revise these Terms from time to time. When we make material changes, we will:</p>
                    <ul className="legal-list">
                        <li>Update the effective date at the top of this page.</li>
                        <li>Send a notification email to registered members at least 14 days before changes take effect.</li>
                        <li>Display a prominent in-platform notice during the transition period.</li>
                    </ul>
                    <p className="legal-p">For minor, non-material changes (such as typographical corrections or clarifications that do not alter your rights), we may update the Terms without advance notice. Continued use of the Platform following the effective date of any revision constitutes your acceptance of the updated Terms. If you do not agree to revised Terms, you must close your account.</p>
                </section>

                <div className="legal-divider" />

                {/* 14 */}
                <section className="legal-section" id="contact">
                    <div className="legal-section__header">
                        <span className="legal-section__num">14</span>
                        <h2 className="legal-section__title">Contact Us</h2>
                    </div>
                    <p className="legal-p">Questions or concerns about these Terms should be directed to:</p>
                    <div className="legal-contact">
                        <p className="legal-contact__label">Legal inquiries</p>
                        <a href="mailto:legal@wedevelopers.dev" className="legal-contact__email">legal@wedevelopers.dev</a>
                    </div>
                    <p className="legal-p" style={{ marginTop: '1rem' }}>
                        For general questions use <a href="mailto:hello@wedevelopers.dev">hello@wedevelopers.dev</a>.
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
                    <Link to="/privacy">Privacy</Link>
                    <a href="mailto:hello@wedevelopers.dev">Contact</a>
                </nav>
            </footer>
        </div>
    );
}
