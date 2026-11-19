import { useState, useEffect } from 'react';
import http from '../../components/httpClient';

export default function AccountPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [feedback, setFeedback] = useState(null); // { type: 'ok'|'err', msg }

    useEffect(() => {
        (async () => {
            try {
                const [details, account] = await Promise.all([
                    http.get('/api/UserDetails'),
                    http.get('/api/Account'),
                ]);
                setFirstName(details.firstName ?? '');
                setLastName(details.lastName ?? '');
                setEmail(account.email ?? '');
            } catch {
                setFeedback({ type: 'err', msg: 'Failed to load account details.' });
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    const handleSave = async (e) => {
        e.preventDefault();
        setFeedback(null);
        setSaving(true);
        try {
            await http.post('/api/UserDetails', { firstName, lastName });
            setFeedback({ type: 'ok', msg: 'Details saved successfully.' });
        } catch {
            setFeedback({ type: 'err', msg: 'Failed to save. Please try again.' });
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="mp-account">
                <p style={{ color: 'var(--mp-muted)', fontSize: '.875rem' }}>Loading…</p>
            </div>
        );
    }

    return (
        <div className="mp-account">
            <h1 className="mp-account__heading">Account</h1>
            <p className="mp-account__sub">Manage your personal details.</p>

            <form className="mp-account__form" onSubmit={handleSave} noValidate>
                <div className="mp-field">
                    <label className="mp-label" htmlFor="acc-email">Email</label>
                    <input
                        id="acc-email"
                        className="mp-input"
                        type="email"
                        value={email}
                        readOnly
                    />
                </div>

                <div className="mp-field">
                    <label className="mp-label" htmlFor="acc-firstname">First Name</label>
                    <input
                        id="acc-firstname"
                        className="mp-input"
                        type="text"
                        placeholder="John"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />
                </div>

                <div className="mp-field">
                    <label className="mp-label" htmlFor="acc-lastname">Last Name</label>
                    <input
                        id="acc-lastname"
                        className="mp-input"
                        type="text"
                        placeholder="Doe"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />
                </div>

                {feedback && (
                    <p className={`mp-account__feedback mp-account__feedback--${feedback.type}`}>
                        {feedback.msg}
                    </p>
                )}

                <div className="mp-account__actions">
                    <button className="mp-btn mp-btn--primary" type="submit" disabled={saving}>
                        {saving ? 'Saving…' : 'Save Changes'}
                    </button>
                </div>
            </form>
        </div>
    );
}
