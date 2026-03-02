import './About.css';
export default function About() {
    return (
        <section id="about" className="section about">
            <div className="container">
                <div className="section-header reveal">
                    <h2 className="section-title">About Me</h2>
                    <div className="section-line" />
                </div>
                <div className="about-content">
                    <div className="about-text glass-card reveal">
                        <p>
                            I am a passionate <strong>Junior Full Stack Developer</strong> currently pursuing my{' '}
                            <strong>Master of Science in Computer Applications & Information Technology</strong>. My journey involves a deep
                            interest in building scalable, responsive web applications. I love exploring new modern
                            web technologies and have hands-on experience developing full-stack applications using
                            the MERN stack.
                        </p>
                        <p>
                            I am detail-oriented, a quick learner, and ready to contribute to high-impact
                            engineering teams. When I'm not coding, you can find me exploring UI/UX trends or
                            working on personal projects.
                        </p>

                        <div className="education-timeline">
                            <h3>🎓 Education</h3>

                            <div className="timeline-item">
                                <div className="timeline-dot" />
                                <div className="timeline-date">Present</div>
                                <div>
                                    <h4>Master of Science (CA & IT) </h4>
                                    <p>Ganpat University</p>
                                    <h5>CGPA: 7.15</h5>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-dot" />
                                <div className="timeline-date">Completed</div>
                                <div>
                                    <h4>Bachelor of Commerce (B.Com)</h4>
                                    <p>Bhakta Kavi Narsinh Mehta University (BKNMU)</p>
                                    <h5>CGPA: 7.89</h5>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-dot" />
                                <div className="timeline-date">Completed</div>
                                <div>
                                    <h4>Higher Secondary Certificate (12th Grade)</h4>
                                    <p>Lion's Higher Secondary School</p>
                                    <h5>Percentage: 61%</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
