import './Contact.css';
import { useState } from 'react';

const API_BASE = 'http://localhost:5000';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(null); // { type: 'success' | 'error', text: '' }
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        if (status) setStatus(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            const res = await fetch(`${API_BASE}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            const data = await res.json();

            if (res.ok && data.success) {
                setStatus({ type: 'success', text: '✅ Message sent successfully! I will get back to you soon.' });
                setForm({ name: '', email: '', message: '' });
            } else {
                setStatus({ type: 'error', text: '❌ ' + (data.error || 'Something went wrong.') });
            }
        } catch (err) {
            console.error('Submission error:', err);
            setStatus({
                type: 'error',
                text: `❌ EmailJS Error: ${err.text || err.message || 'Please check your Service/Template IDs.'}`,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <div className="section-header reveal">
                    <h2 className="section-title">Get In Touch</h2>
                    <div className="section-line" />
                </div>

                <div className="contact-content reveal">
                    {/* Form */}
                    <form className="contact-form" onSubmit={handleSubmit}>
                        {status && (
                            <div className={`form-status ${status.type}`}>
                                {status.text}
                            </div>
                        )}

                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="you@example.com"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Tell me about your project or opportunity..."
                                value={form.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn-primary"
                            disabled={loading}
                            style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                        >
                            {loading ? (
                                <>
                                    <span className="spinner" />
                                    <span>Sending...</span>
                                </>
                            ) : (
                                <span>Send Message 🚀</span>
                            )}
                        </button>
                    </form>

                    {/* Info */}
                    <div className="contact-info">
                        <h3>Let's Connect</h3>
                        <p>
                            I am currently open to <strong>Internships</strong> and{' '}
                            <strong>Junior Developer</strong> roles. Let's build something amazing together!
                        </p>

                        <div className="social-links">
                            <a
                                href="https://www.linkedin.com/in/nensi-dalsaniya-0a28173a3/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                            >
                                <span className="social-icon-emoji">🔗</span>
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/Nc1020"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                            >
                                <span className="social-icon-emoji">🐙</span>
                                GitHub
                            </a>
                            <a
                                href="mailto:nensidalsaniya537@gmail.com"
                                className="social-icon"
                            >
                                <span className="social-icon-emoji">📧</span>
                                nensidalsaniya537@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
