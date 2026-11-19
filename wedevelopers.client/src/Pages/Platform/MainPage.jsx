import { useState } from 'react';
import { useNavigate } from 'react-router';
import '../css/MainPage.css';
import AccountPage from './AccountPage';

const NAV_ITEMS = [
    {
        id: 'my-content',
        label: 'My Content',
        icon: (
            <svg className="mp-nav-btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
            </svg>
        ),
    },
    {
        id: 'posted-jobs',
        label: 'Posted Jobs',
        icon: (
            <svg className="mp-nav-btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                <line x1="12" y1="12" x2="12" y2="16" /><line x1="10" y1="14" x2="14" y2="14" />
            </svg>
        ),
    },
    {
        id: 'find-job',
        label: 'Find Job',
        icon: (
            <svg className="mp-nav-btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
        ),
    },
    {
        id: 'collaborations',
        label: 'Collaborations',
        icon: (
            <svg className="mp-nav-btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
    },
];

const UC_META = {
    'my-content':     { title: 'My Content',     desc: 'Manage and publish your creative work here.' },
    'posted-jobs':    { title: 'Posted Jobs',     desc: 'Review and manage jobs you have posted.' },
    'find-job':       { title: 'Find Job',        desc: 'Browse open opportunities from the community.' },
    'collaborations': { title: 'Collaborations',  desc: 'Connect and build together with other developers.' },
};

function UnderConstruction({ id }) {
    const meta = UC_META[id];
    return (
        <div className="mp-uc">
            <svg className="mp-uc__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
            </svg>
            <span className="mp-uc__badge">Coming Soon</span>
            <h2 className="mp-uc__title">{meta.title}</h2>
            <p className="mp-uc__sub">{meta.desc} This section is currently under construction.</p>
        </div>
    );
}

export default function MainPage() {
    const [active, setActive] = useState('my-content');
    const [showLogout, setShowLogout] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/account');
    };

    return (
        <div className="mp-root">
            {/* ── Sidebar ── */}
            <nav className="mp-sidebar">
                <a href="/" className="mp-sidebar__logo">
                    <span>We</span><span>Developers</span>
                </a>

                {/* Top nav items */}
                <div className="mp-sidebar__section mp-sidebar__section--top">
                    <span className="mp-sidebar__label">Platform</span>
                    {NAV_ITEMS.map(item => (
                        <button
                            key={item.id}
                            className={`mp-nav-btn${active === item.id ? ' mp-nav-btn--active' : ''}`}
                            onClick={() => setActive(item.id)}
                        >
                            {item.icon}
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* Bottom nav items */}
                <div className="mp-sidebar__section mp-sidebar__section--bottom">
                    <span className="mp-sidebar__label">Settings</span>
                    <button
                        className={`mp-nav-btn${active === 'account' ? ' mp-nav-btn--active' : ''}`}
                        onClick={() => setActive('account')}
                    >
                        <svg className="mp-nav-btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                        </svg>
                        Account
                    </button>

                    <div className="mp-sidebar__divider" />

                    <button
                        className="mp-nav-btn mp-nav-btn--logout"
                        onClick={() => setShowLogout(true)}
                    >
                        <svg className="mp-nav-btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                            <polyline points="16 17 21 12 16 7" />
                            <line x1="21" y1="12" x2="9" y2="12" />
                        </svg>
                        Log Out
                    </button>
                </div>
            </nav>

            {/* ── Content ── */}
            <main className="mp-content">
                {active === 'account'
                    ? <AccountPage />
                    : <UnderConstruction id={active} />
                }
            </main>

            {/* ── Logout modal ── */}
            {showLogout && (
                <div className="mp-modal-backdrop" onClick={() => setShowLogout(false)}>
                    <div className="mp-modal" onClick={e => e.stopPropagation()}>
                        <div className="mp-modal__icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                <polyline points="16 17 21 12 16 7" />
                                <line x1="21" y1="12" x2="9" y2="12" />
                            </svg>
                        </div>
                        <h2 className="mp-modal__title">Log Out?</h2>
                        <p className="mp-modal__body">
                            You will be returned to the sign-in page. Any unsaved changes will be lost.
                        </p>
                        <div className="mp-modal__actions">
                            <button className="mp-btn mp-btn--ghost" onClick={() => setShowLogout(false)}>
                                Cancel
                            </button>
                            <button className="mp-btn mp-btn--danger" onClick={handleLogout}>
                                Log Out
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
