import { useState } from 'react';
import './Projects.css';

const projectsData = [
    {
        id: 1,
        title: 'Zyfit – Fashion Review Platform',
        description:
            'A creative platform where users can upload and explore short video reviews of fashion products. Features include real-time feed, category filtering, and user profiles.',
        longDescription: 'Zyfit is a specialized fashion review platform built to combine the engaging experience of short-form videos with e-commerce features. Users can log in, upload product review videos, categorize them, and interact with a real-time feed of fashion content.',
        problemSolved: 'Helps users make better fashion purchasing decisions by providing authentic, community-driven video reviews rather than static images.',
        tech: ['React', 'Redux', 'Node.js', 'MongoDB', 'Supabase', 'Tailwind CSS'],
        colorClass: 'color-1',
        label: 'ZyFit',
        image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800',
        screenshots: [
            'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800'
        ],
        code: 'https://github.com/Nc1020',
    },
    {
        id: 2,
        title: 'Luxe Salon',
        description:
            'A premium beauty and wellness website for Luxe Salon in Ahmedabad. Features include service exploration, appointment booking, and a modern, fully responsive UI.',
        longDescription: 'Luxe Salon\'s website is designed to provide a premium digital experience matching their in-person service. It showcases various spa, hair, and skin treatments, and features a seamlessly integrated appointment booking system.',
        problemSolved: 'Digitized the salon\'s booking process, reducing manual phone bookings and providing customers with an elegant way to explore services online.',
        tech: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
        colorClass: 'color-2',
        label: 'Luxe Salon',
        image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800',
        screenshots: [
            'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800'
        ],
        code: 'https://github.com/Nc1020/FUTURE_FS_03',
    },
    {
        id: 3,
        title: 'Recipe Book',
        description:
            'A culinary playground for users to create, share, and save their favorite recipes. Built with frontend.',
        longDescription: 'A visually appealing single-page application that acts as a digital cookbook. Users can search for recipes, view ingredients and instructions, and bookmark their favorite meals for later reference.',
        problemSolved: 'Provides a centralized, easy-to-search location for modern cooks to store and find their favorite recipes without the clutter of physical cookbooks.',
        tech: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
        colorClass: 'color-3',
        label: 'Recipe Book',
        image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=800&auto=format&fit=crop',
        screenshots: [
            'https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=80&w=800'
        ],
        code: 'https://github.com/Nc1020',
    },
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <div className="section-header reveal">
                    <h2 className="section-title">Featured Projects</h2>
                    <div className="section-line" />
                </div>
                <div className="projects-grid">
                    {projectsData.map((project) => (
                        <article key={project.id} className="project-card glass-card tilt-card reveal">
                            <div className={`project-image ${project.image ? '' : project.colorClass}`}>
                                {project.image ? (
                                    <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                ) : (
                                    <span>{project.label}</span>
                                )}
                            </div>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="tech-stack">
                                    {project.tech.map((t) => (
                                        <span key={t}>{t}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <button className="btn-details" onClick={() => openModal(project)}>
                                        🔍 View Details
                                    </button>
                                    <a href={project.code} target="_blank" rel="noopener noreferrer">
                                        📁 Code
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* Project Details Modal */}
            {selectedProject && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>&times;</button>

                        <h2 className="modal-title">{selectedProject.title}</h2>

                        <div className="modal-gallery">
                            {selectedProject.screenshots?.map((img, index) => (
                                <img key={index} src={img} alt={`Screenshot ${index + 1}`} className="modal-screenshot" />
                            ))}
                        </div>

                        <div className="modal-info">
                            <h3>Overview</h3>
                            <p>{selectedProject.longDescription}</p>

                            <h3 className="mt-4">Problem Solved</h3>
                            <p>{selectedProject.problemSolved}</p>

                            <div className="modal-tech">
                                {selectedProject.tech.map((t) => (
                                    <span key={t} className="tech-badge">{t}</span>
                                ))}
                            </div>

                            <div className="modal-actions">
                                <a href={selectedProject.code} target="_blank" rel="noopener noreferrer" className="btn-primary">
                                    <span>View Source Code</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
