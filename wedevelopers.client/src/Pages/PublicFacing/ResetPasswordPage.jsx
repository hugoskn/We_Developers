import { useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import '../css/SignInSignUpPage.css';
import http, { errorMessage } from '../../components/httpClient';

export default function ResetPasswordPage() {
    const [searchParams] = useSearchParams();
    const email = searchParams.get('email') ?? '';
    const token = searchParams.get('token') ?? '';
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);
    const linkValid = Boolean(email && token);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        if (password !== confirm) {
            setError('Passwords do not match.');
            return;
        }
        setLoading(true);
        try {
            await http.post('/api/Account/ResetPassword', { email, token, newPassword: password });
            setDone(true);
        } catch (err) {
            setError(errorMessage(err, 'Could not reset your password. Please try again.'));
        } finally {
            setLoading(false);
        }
    };

    const headline = !linkValid
        ? { tag: '// invalid_link', title: 'Link not valid.' }
        : done
            ? { tag: '// password_updated', title: 'All set.' }
            : { tag: '// reset_password', title: 'Choose a new password.' };

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

                    <div className="acc-card__body">
                        <div className="acc-headline">
                            <span className="acc-headline__tag">{headline.tag}</span>
                            <h1 className="acc-headline__title">{headline.title}</h1>
                        </div>

                        {!linkValid && (
                            <p className="acc-switch">
                                This reset link is incomplete.{' '}
                                <Link to="/account" className="acc-switch__link">Request a new one</Link>
                            </p>
                        )}

                        {linkValid && done && (
                            <p className="acc-switch">
                                Your password has been updated.{' '}
                                <Link to="/account" className="acc-switch__link">Sign In</Link>
                            </p>
                        )}

                        {linkValid && !done && (
                            <form className="acc-form" onSubmit={handleSubmit} noValidate>
                                <div className="acc-field">
                                    <label className="acc-label" htmlFor="rp-password">New Password</label>
                                    <input
                                        id="rp-password"
                                        className="acc-input"
                                        type="password"
                                        autoComplete="new-password"
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="acc-field">
                                    <label className="acc-label" htmlFor="rp-confirm">Confirm Password</label>
                                    <input
                                        id="rp-confirm"
                                        className="acc-input"
                                        type="password"
                                        autoComplete="new-password"
                                        placeholder="••••••••"
                                        value={confirm}
                                        onChange={e => setConfirm(e.target.value)}
                                        required
                                    />
                                </div>

                                {error && (
                                    <div className="acc-error" role="alert">
                                        <span className="acc-error__icon">!</span>
                                        {error}
                                    </div>
                                )}

                                <button className="acc-submit" type="submit" disabled={loading}>
                                    {loading ? (
                                        <span className="acc-submit__spinner" />
                                    ) : (
                                        <>
                                            <span>Update Password</span>
                                            <span className="acc-submit__arrow">→</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
