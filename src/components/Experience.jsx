import './Experience.css';
export default function Experience() {
    return (
        <section id="internships" className="section internships">
            <div className="container">
                <div className="section-header reveal">
                    <h2 className="section-title">Experience</h2>
                    <div className="section-line" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    <div className="internship-card glass-card reveal tilt-card">
                        <div className="intern-header">
                            <h3>Internship – Full Stack Web Development (MERN Stack)</h3>
                            <span className="duration">02/2026 - 03/2026</span>
                        </div>
                        <div className="company-name">🏢 Future Internship</div>
                        <ul className="responsibilities">
                            <li>To continue building modern, scalable web applications with MongoDB, Express, React, and Node.js.</li>
                            <li>Looking forward to contributing to REST APIs, databases, and fullstack workflows.</li>
                        </ul>
                    </div>

                    <div className="internship-card glass-card reveal tilt-card">
                        <div className="intern-header">
                            <h3>Front-End Development Intern</h3>
                            <span className="duration">29/01/2026 - 01/03/2026</span>
                        </div>
                        <div className="company-name">🏢 Cognifyz Technologies</div>
                        <ul className="responsibilities">
                            <li>Developed front-end applications with modern technologies.</li>
                            <li>Ensured responsive design and optimal user experience.</li>
                        </ul>
                    </div>

                    <div className="internship-card glass-card reveal tilt-card">
                        <div className="intern-header">
                            <h3>React.js Intern</h3>
                            <span className="duration">6 Months</span>
                        </div>
                        <div className="company-name">🏢 Infolabs Pvt. Ltd.</div>
                        <ul className="responsibilities">
                            <li>Developed responsive web pages using HTML, CSS, and JavaScript with pixel-perfect accuracy.</li>
                            <li>Integrated RESTful APIs and handled dynamic DOM manipulations for real-time updates.</li>
                            <li>Collaborated with the team using Git to fix frontend bugs and improve UI consistency.</li>
                            <li>Built reusable React components to improve codebase maintainability and performance.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
