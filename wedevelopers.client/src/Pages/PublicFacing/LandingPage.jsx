import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import '../css/LandingPage.css';

const NAV_LINKS = ['Programs', 'About', 'Academy', 'Join'];

const PILLARS = [
    {
        number: '01',
        label: 'Creator Program',
        sublabel: 'Social Crowdsteering',
        tagline: 'Build in Public, Get Paid in Private.',
        description: 'Join our Media Creator Program to amplify your reach and earn a direct share of the revenue from our monetized channels. Not a creator? No problem — you still get full access to the high-signal content and insights from the community.',
        tags: ['Revenue Share', 'Content', 'Audience Growth'],
    },
    {
        number: '02',
        label: 'Career',
        sublabel: 'The Dev-First Exchange',
        tagline: 'Skip the Recruiter, Join the Team.',
        description: 'Get exclusive access to high-impact roles from our partner companies and internal community leads. Whether you\'re looking for your next big move or a team lead needs an extra pair of expert hands, we connect talent directly to the source.',
        tags: ['No Middlemen', 'Vetted Roles', 'Direct Access'],
    },
    {
        number: '03',
        label: 'Collab',
        sublabel: 'The Forge',
        tagline: 'Ship Faster, Together.',
        description: 'The ultimate matchmaking engine for technical collaboration. Whether you\'re looking for a co-founder for an AI startup or need a specific expert to help unblock a personal project, find your next collaborator within an open community of driven peers.',
        tags: ['Co-founders', 'Expert Matching', 'AI Projects'],
    },
    {
        number: '04',
        label: 'Academy',
        sublabel: 'Production-Grade Learning',
        tagline: 'Master the Stack, Not the Theory.',
        description: 'Access elite training created by active senior engineers and industry sponsors. No "Hello World" tutorials — just deep-dives into production-grade AI engineering, systems architecture, and high-performance development.',
        tags: ['Senior Engineers', 'AI Engineering', 'Systems Design'],
    },
];

const COMMUNITY_FEATURES = [
    { icon: '⚡', title: 'Open to All Developers', body: 'No gatekeeping, no barriers — just a community of engineers who want to grow and ship.' },
    { icon: '◈', title: 'Zero Intermediaries', body: 'Direct connections between talent, collaborators, and opportunities.' },
    { icon: '▲', title: 'Revenue-Aligned', body: 'We share what we earn. Creators and contributors get a cut of the upside.' },
    { icon: '◉', title: 'Always Production-Grade', body: 'Content, roles, and collabs are held to the same bar: does it work in prod?' },
];

const STATS = [
    { value: '100+', label: 'Members' },
    { value: '12+', label: 'Opportunities' },
    { value: '14', label: 'Collabs Formed' },
    { value: '20+', label: 'Courses Live' },
];

const CODE_SNIPPETS = [
    'wedevelopers join --community',
    'SELECT * FROM roles WHERE recruiter = false',
    'git remote add collab peer@wedevelopers.dev',
    'npm install @wedevelopers/academy --save',
    'const { revenue } = await creator.earn(content);',
];

const ACCENT_WORDS = ['Learn', 'Monetize', 'Get Hired', 'Grow'];

export default function LandingPage() {
    const [scrolled, setScrolled] = useState(false);
    const [heroVisible, setHeroVisible] = useState(false);
    const [codeIndex, setCodeIndex] = useState(0);
    const [accentIndex, setAccentIndex] = useState(3);
    const [displayedWord, setDisplayedWord] = useState('Grow');
    const displayedWordRef = useRef('Grow');
    const isTyping = displayedWord !== ACCENT_WORDS[accentIndex];
    const [activePillar, setActivePillar] = useState(null);
    const observerRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => setHeroVisible(true), 80);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const cycle = setInterval(() => {
            setAccentIndex(i => (i + 1) % ACCENT_WORDS.length);
        }, 3000);
        return () => clearInterval(cycle);
    }, []);

    useEffect(() => {
        const target = ACCENT_WORDS[accentIndex];
        let current = displayedWordRef.current;
        let timeout;

        const show = (word) => {
            current = word;
            displayedWordRef.current = word;
            setDisplayedWord(word);
        };

        const erase = () => {
            if (current.length === 0) {
                type();
                return;
            }
            show(current.slice(0, -1));
            timeout = setTimeout(erase, 60);
        };

        const type = () => {
            if (current.length === target.length) return;
            show(target.slice(0, current.length + 1));
            timeout = setTimeout(type, 80);
        };

        timeout = setTimeout(erase, 60);
        return () => clearTimeout(timeout);
    }, [accentIndex]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCodeIndex(prev => (prev + 1) % CODE_SNIPPETS.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            entries => entries.forEach(e => {
                if (e.isIntersecting) e.target.classList.add('in-view');
            }),
            { threshold: 0.12 }
        );
        document.querySelectorAll('.reveal').forEach(el => observerRef.current.observe(el));
        return () => observerRef.current?.disconnect();
    }, []);

    return (
        <div className="lp-root">
            {/* NAV */}
            <nav className={`lp-nav${scrolled ? ' lp-nav--scrolled' : ''}`}>
                <a href="#" className="lp-nav__logo">
                    <span className="lp-nav__logo-we">We</span>
                    <span className="lp-nav__logo-dev">Developers</span>
                </a>
                <ul className="lp-nav__links">
                    {NAV_LINKS.map(link => (
                        <li key={link}>
                            <a href={`#${link.toLowerCase()}`} className="lp-nav__link">{link}</a>
                        </li>
                    ))}
                </ul>
                <div className="lp-nav__actions">
                    <Link to="/account" className="lp-nav__signin">Sign In</Link>
                    <a href="#contact" className="lp-nav__cta">Let&apos;s talk</a>
                </div>
            </nav>

            {/* HERO */}
            <section className={`lp-hero${heroVisible ? ' lp-hero--visible' : ''}`}>
                <div className="lp-hero__grid-bg" aria-hidden="true" />
                <div className="lp-hero__noise" aria-hidden="true" />
                <div className="lp-hero__glow" aria-hidden="true" />

                <div className="lp-hero__content">
                    <div className="lp-hero__eyebrow">
                        <span className="lp-hero__status-dot" />
                        Developer Community Platform &mdash; All together in one Tribe
                    </div>

                    <h1 className="lp-hero__headline">
                        <span className="lp-hero__line" style={{ '--i': 0 }}>Where</span>
                        <span className="lp-hero__line" style={{ '--i': 1 }}>Developers</span>
                        <span className="lp-hero__line lp-hero__line--accent" style={{ '--i': 2 }}>
                            {displayedWord}<span className={`lp-hero__cursor${isTyping ? '' : ' lp-hero__cursor--blink'}`}>|</span>
                        </span>
                        <span className="lp-hero__line" style={{ '--i': 3 }}>Together.</span>
                    </h1>

                    <div className="lp-hero__sub">
                        <p>One open community. Built for engineers. Create, get help, get a job, hire a dev, and learn.</p>
                        <div className="lp-hero__actions">
                            <a href="#programs" className="lp-btn lp-btn--primary">Explore programs</a>
                            <a href="#join" className="lp-btn lp-btn--ghost">Join the community <span>&#8594;</span></a>
                        </div>
                    </div>
                </div>

                <div className="lp-hero__terminal">
                    <div className="lp-terminal">
                        <div className="lp-terminal__header">
                            <span className="lp-terminal__dot lp-terminal__dot--r" />
                            <span className="lp-terminal__dot lp-terminal__dot--y" />
                            <span className="lp-terminal__dot lp-terminal__dot--g" />
                            <span className="lp-terminal__title">wedevelopers.sh</span>
                        </div>
                        <div className="lp-terminal__body">
                            <div className="lp-terminal__line">
                                <span className="lp-terminal__prompt">~/projects $</span>
                                <span className="lp-terminal__command" key={codeIndex}>
                                    {CODE_SNIPPETS[codeIndex]}
                                </span>
                                <span className="lp-terminal__cursor" aria-hidden="true" />
                            </div>
                            <div className="lp-terminal__output">// Executing with care...</div>
                        </div>
                    </div>
                </div>

                <div className="lp-hero__stats">
                    {STATS.map((stat, i) => (
                        <div className="lp-stat" key={stat.label} style={{ '--i': i }}>
                            <span className="lp-stat__value">{stat.value}</span>
                            <span className="lp-stat__label">{stat.label}</span>
                        </div>
                    ))}
                </div>

                <div className="lp-hero__scroll-hint" aria-hidden="true">
                    <div className="lp-hero__scroll-line" />
                    <span>Scroll</span>
                </div>
            </section>

            {/* PROGRAMS */}
            <section className="lp-services" id="programs">
                <div className="lp-container">
                    <div className="lp-section-header reveal">
                        <span className="lp-section-tag">The four programs</span>
                        <h2 className="lp-section-title">
                            Everything you need.<br /><em>Nothing you don&apos;t.</em>
                        </h2>
                    </div>

                    <div className="lp-services__grid">
                        {PILLARS.map((pillar, i) => (
                            <div
                                className={`lp-service-card reveal${activePillar === i ? ' lp-service-card--active' : ''}`}
                                key={pillar.number}
                                style={{ '--i': i }}
                                onMouseEnter={() => setActivePillar(i)}
                                onMouseLeave={() => setActivePillar(null)}
                            >
                                <div className="lp-service-card__number">{pillar.number}</div>
                                <div className="lp-service-card__body">
                                    <div className="lp-service-card__label-row">
                                        <h3 className="lp-service-card__title">{pillar.label}</h3>
                                        <span className="lp-service-card__sublabel">{pillar.sublabel}</span>
                                    </div>
                                    <p className="lp-service-card__tagline">&ldquo;{pillar.tagline}&rdquo;</p>
                                    <p className="lp-service-card__desc">{pillar.description}</p>
                                    <div className="lp-service-card__tags">
                                        {pillar.tags.map(tag => (
                                            <span className="lp-tag" key={tag}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <span className="lp-service-card__arrow" aria-hidden="true">&#8594;</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ABOUT */}
            <section className="lp-about" id="about">
                <div className="lp-container">
                    <div className="lp-about__layout">
                        <div className="lp-about__left reveal">
                            <span className="lp-section-tag">What we stand for</span>
                            <h2 className="lp-section-title">
                                Built by devs,<br />for devs who<br /><em>actually ship.</em>
                            </h2>
                            <p className="lp-about__body">
                                WeDevelopers is a private community platform built around one conviction: the best opportunities, collaborations, and knowledge don&apos;t come from job boards or YouTube tutorials — they come from other high-calibre engineers.
                            </p>
                            <p className="lp-about__body">
                                We&apos;ve replaced recruiters with direct connections, replaced generic courses with production-grade training, and replaced random networking with structured, intentional matchmaking.
                            </p>
                            <a href="#join" className="lp-btn lp-btn--primary" style={{ marginTop: '2rem', display: 'inline-flex' }}>Join the community</a>
                        </div>

                        <div className="lp-about__right">
                            <div className="lp-team-grid">
                                {COMMUNITY_FEATURES.map((feat, i) => (
                                    <div className="lp-team-card reveal" key={feat.title} style={{ '--i': i }}>
                                        <div className="lp-team-card__avatar lp-team-card__avatar--icon">{feat.icon}</div>
                                        <div className="lp-team-card__info">
                                            <strong className="lp-team-card__name">{feat.title}</strong>
                                            <span className="lp-team-card__specialty" style={{ marginTop: '0.35rem' }}>{feat.body}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="lp-cta" id="join">
                <div className="lp-cta__bg-text" aria-hidden="true">JOIN</div>
                <div className="lp-container">
                    <div className="lp-cta__inner reveal">
                        <div className="lp-cta__badge">Applications open</div>
                        <h2 className="lp-cta__title">
                            Stop browsing.<br /><em>Start building.</em>
                        </h2>
                        <p className="lp-cta__sub">
                            Join for free and get access to all four programs. Everyone is welcome — bring your curiosity and drive.
                        </p>
                        <div className="lp-cta__actions">
                            <a href="mailto:join@wedevelopers.dev" className="lp-btn lp-btn--dark lp-btn--lg">
                                Apply for membership
                            </a>
                            <div className="lp-cta__alt">
                                <span>questions?</span>
                                <a href="mailto:hello@wedevelopers.dev" className="lp-cta__phone">hello@wedevelopers.dev</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="lp-footer">
                <div className="lp-container">
                    <div className="lp-footer__inner">
                        <div className="lp-footer__logo">
                            <span className="lp-nav__logo-we">We</span>
                            <span className="lp-nav__logo-dev">Developers</span>
                        </div>
                        <p className="lp-footer__copy">&copy; 2026 WeDevelopers. Crafted with care.</p>
                        <div className="lp-footer__links">
                            <a href="#">GitHub</a>
                            <a href="#">LinkedIn</a>
                            <a
                                href="https://www.youtube.com/channel/UCGT9TUyvtYHJOt0-IsGbfeg"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="YouTube"
                                style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                                YouTube
                            </a>
                            <a
                                href="https://www.instagram.com/we_developers_dev/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
                            >
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                                </svg>
                                Instagram
                            </a>
                            <a
                                href="https://www.tiktok.com/@we.developers"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="TikTok"
                                style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
                            >
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
                                </svg>
                                TikTok
                            </a>
                            <a
                                href="https://www.facebook.com/profile.php?id=61578475318132"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
                            >
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                                Facebook
                            </a>
                            <Link to="/privacy">Privacy</Link>
                            <Link to="/terms">Terms</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
