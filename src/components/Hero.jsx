import './Hero.css';
export default function Hero() {
    const handleScroll = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header id="home" className="hero">
            <div className="container hero-container">
                <div className="hero-content reveal">
                    <p className="greeting">✦ Hi, I'm</p>
                    <h1 className="name">Nensi Dalsaniya</h1>
                    <h2 className="role">
                        Building Modern Web Experiences <br />
                        with <span className="highlight">MERN Stack</span>
                    </h2>
                    <p className="bio">
                        A passionate <strong>Fresher Full Stack Developer</strong> specializing in React.js,
                        Node.js, TypeScript, and Modern UI. I bridge the gap between design and functional code.
                    </p>
                    <div className="hero-btns">
                        <button className="btn-primary" onClick={() => handleScroll('projects')}>
                            <span>View Projects</span>
                        </button>
                        <button className="btn-secondary" onClick={() => handleScroll('contact')}>
                            Contact Me
                        </button>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="code-card glass-card float-animation">
                        <div className="card-header">
                            <span className="dot red" />
                            <span className="dot yellow" />
                            <span className="dot green" />
                        </div>
                        <div className="card-body" style={{ lineHeight: '2' }}>
                            <code>
                                <span className="comment">// Full Stack Developer</span><br />
                                <span className="keyword">const</span>{' '}
                                <span className="variable">nensi</span> = {'{'}<br />
                                &nbsp;&nbsp;name:{' '}<span className="string">"Nensi Dalsaniya"</span>,<br />
                                &nbsp;&nbsp;role:{' '}<span className="string">"MERN Developer"</span>,<br />
                                &nbsp;&nbsp;skills:{' '}[<span className="string">"React"</span>,{' '}
                                <span className="string">"Node"</span>],<br />
                                &nbsp;&nbsp;hardWorker:{' '}<span className="boolean">true</span>,<br />
                                &nbsp;&nbsp;openToWork:{' '}<span className="boolean">true</span><br />
                                {'}'};
                            </code>
                        </div>
                    </div>
                    <div className="circle-gradient" />
                </div>
            </div>
        </header>
    );
}
