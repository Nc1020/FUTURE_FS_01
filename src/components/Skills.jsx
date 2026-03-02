import './Skills.css';
const skillsData = [
    {
        icon: '🎨',
        title: 'Frontend Development',
        tags: ['React.js', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3', 'Responsive Web Design'],
    },
    {
        icon: '⚙️',
        title: 'Backend Development',
        tags: ['Node.js', 'API Development & Integration'],
    },
    {
        icon: '🗂️',
        title: 'Database',
        tags: ['MongoDB', 'Mongoose'],
    },
    {
        icon: '🛠️',
        title: 'Tools & Version Control',
        tags: ['Git', 'GitHub', 'Vite', 'VS Code'],
    },
    {
        icon: '🤝',
        title: 'Soft Skills',
        tags: ['Good Communication', 'Problem solving', 'Teamwork', 'Quick Learner', 'Time Management', 'Leadership'],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="section skills">
            <div className="container">
                <div className="section-header reveal">
                    <h2 className="section-title">Technical Skills</h2>
                    <div className="section-line" />
                </div>
                <div className="skills-grid">
                    {skillsData.map((cat) => (
                        <div key={cat.title} className="skill-category glass-card reveal">
                            <h3>{cat.icon} {cat.title}</h3>
                            <div className="skill-tags">
                                {cat.tags.map((tag) => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
