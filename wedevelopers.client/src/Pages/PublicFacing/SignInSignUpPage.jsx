import { useState } from 'react';
import { useNavigate } from 'react-router';
import '../css/SignInSignUpPage.css';
import http, { errorMessage } from '../../components/httpClient';

const HEADLINES = {
    signin: { tag: '// authenticate', title: 'Welcome back.' },
    signup: { tag: '// new_account', title: 'Join the crew.' },
    forgot: { tag: '// recover_access', title: 'Forgot your password?' },
};

const SUBMIT_LABELS = {
    signin: 'Sign In',
    signup: 'Create Account',
    forgot: 'Send Reset Link',
};

export default function SignInSignUpPage() {
    const [tab, setTab] = useState('signin');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showResetSent, setShowResetSent] = useState(false);
    const navigate = useNavigate();

    const reset = () => {
        setEmail('');
        setPassword('');
        setConfirm('');
        setError('');
    };

    const switchTab = (t) => {
        setTab(t);
        reset();
    };

    const handleSignIn = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            const data = await http.post('/api/Authentication/Login', { email, password });
            localStorage.setItem('authToken', data.token);
            navigate('/main');
        } catch (err) {
            setError(errorMessage(err, 'Invalid email or password.'));
        } finally {
            setLoading(false);
        }
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError('');
        if (password !== confirm) {
            setError('Passwords do not match.');
            return;
        }
        setLoading(true);
        try {
            const data = await http.post('/api/Authentication/Register', { email, password });
            localStorage.setItem('authToken', data.token);
            navigate('/main');
        } catch (err) {
            setError(errorMessage(err, 'Registration failed.'));
        } finally {
            setLoading(false);
        }
    };

    const handleForgot = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await http.post('/api/Account/ForgotPassword', { email });
            setShowResetSent(true);
        } catch (err) {
            setError(errorMessage(err, 'Could not send the reset link. Please try again.'));
        } finally {
            setLoading(false);
        }
    };

    const handlers = { signin: handleSignIn, signup: handleSignUp, forgot: handleForgot };

    const closeResetSent = () => {
        setShowResetSent(false);
        switchTab('signin');
    };

    return (
        <div className="acc-root">
            <div className="acc-bg-grid" aria-hidden="true" />

            <a href="/" className="acc-wordmark">
                <span className="acc-wordmark__we">We</span>
                <span className="acc-wordmark__dev">Developers</span>
            </a>

            <main className="acc-main">
                <div className="acc-card">
                    <div className="acc-card__corner acc-card__corner--tl" />
                    <div className="acc-card__corner acc-card__corner--br" />

                    <div className="acc-tabs">
                        <button
                            type="button"
                            className={`acc-tab${tab !== 'signup' ? ' acc-tab--active' : ''}`}
                            onClick={() => switchTab('signin')}
                        >
                            Sign In
                        </button>
                        <button
                            type="button"
                            className={`acc-tab${tab === 'signup' ? ' acc-tab--active' : ''}`}
                            onClick={() => switchTab('signup')}
                        >
                            Sign Up
                        </button>
                        <span
                            className="acc-tabs__indicator"
                            style={{ transform: `translateX(${tab === 'signup' ? '100%' : '0%'})` }}
                        />
                    </div>

                    <div className="acc-card__body">
                        <div className="acc-headline">
                            <span className="acc-headline__tag">{HEADLINES[tab].tag}</span>
                            <h1 className="acc-headline__title">{HEADLINES[tab].title}</h1>
                        </div>

                        <form className="acc-form" onSubmit={handlers[tab]} noValidate>
                            <div className="acc-field">
                                <label className="acc-label" htmlFor="acc-email">Email</label>
                                <input
                                    id="acc-email"
                                    className="acc-input"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            {tab !== 'forgot' && (
                                <div className="acc-field">
                                    <label className="acc-label" htmlFor="acc-password">Password</label>
                                    <input
                                        id="acc-password"
                                        className="acc-input"
                                        type="password"
                                        autoComplete={tab === 'signin' ? 'current-password' : 'new-password'}
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                            )}

                            {tab === 'signup' && (
                                <div className="acc-field acc-field--confirm">
                                    <label className="acc-label" htmlFor="acc-confirm">Confirm Password</label>
                                    <input
                                        id="acc-confirm"
                                        className="acc-input"
                                        type="password"
                                        autoComplete="new-password"
                                        placeholder="••••••••"
                                        value={confirm}
                                        onChange={e => setConfirm(e.target.value)}
                                        required
                                    />
                                </div>
                            )}

                            {error && (
                                <div className="acc-error" role="alert">
                                    <span className="acc-error__icon">!</span>
                                    {error}
                                </div>
                            )}

                            <button
                                className="acc-submit"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? (
                                    <span className="acc-submit__spinner" />
                                ) : (
                                    <>
                                        <span>{SUBMIT_LABELS[tab]}</span>
                                        <span className="acc-submit__arrow">→</span>
                                    </>
                                )}
                            </button>
                        </form>

                        {tab === 'forgot' ? (
                            <p className="acc-switch">
                                Remembered it?{' '}
                                <button type="button" className="acc-switch__link" onClick={() => switchTab('signin')}>
                                    Sign In
                                </button>
                            </p>
                        ) : (
                            <p className="acc-switch">
                                {tab === 'signin' ? "Don't have an account?" : 'Already a member?'}{' '}
                                <button
                                    type="button"
                                    className="acc-switch__link"
                                    onClick={() => switchTab(tab === 'signin' ? 'signup' : 'signin')}
                                >
                                    {tab === 'signin' ? 'Sign Up' : 'Sign In'}
                                </button>
                            </p>
                        )}

                        {tab === 'signin' && (
                            <p className="acc-switch" style={{ marginTop: '.5rem' }}>
                                <button type="button" className="acc-switch__link" onClick={() => switchTab('forgot')}>
                                    Forgot password?
                                </button>
                            </p>
                        )}
                    </div>
                </div>
            </main>

            {showResetSent && (
                <div className="acc-modal-backdrop" onClick={closeResetSent}>
                    <div className="acc-modal" role="dialog" aria-modal="true" aria-labelledby="acc-modal-title" onClick={e => e.stopPropagation()}>
                        <div className="acc-modal__icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        </div>
                        <h2 id="acc-modal-title" className="acc-modal__title">Check your inbox.</h2>
                        <p className="acc-modal__body">
                            If an account exists for that email, we&apos;ve sent a link to reset your password. It expires in 1 hour.
                        </p>
                        <button type="button" className="acc-modal__close" onClick={closeResetSent}>
                            Continue <span>→</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
