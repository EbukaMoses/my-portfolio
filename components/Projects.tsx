import { project } from '@/utilis/data'
import React, { useState, useEffect } from 'react'
import { FaEye, FaLink, FaTimes } from 'react-icons/fa';
import Image, { StaticImageData } from 'next/image';

interface Project {
    img: StaticImageData;
    title: string;
    lang: string[];
    live: string;
    github: string;
}

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (proj: Project) => {
        setSelectedProject(proj);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
        document.body.style.overflow = 'unset';
    };

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isModalOpen) {
                closeModal();
            }
        };

        if (isModalOpen) {
            window.addEventListener('keydown', handleEscape);
        }

        return () => {
            window.removeEventListener('keydown', handleEscape);
        };
    }, [isModalOpen]);

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {project.map((proj) => (
                        <div 
                            className="group bg-[#001E28] rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-[#001E28]" 
                            key={proj.title}
                        >
                            <div className="relative overflow-hidden h-48 bg-gray-50 shadow-lg">
                                <Image
                                    src={proj.img}
                                    alt={proj.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <button
                                    onClick={() => openModal(proj)}
                                    className="absolute inset-0 bg-black/80 cursor-pointer bg-opacity-30 hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100"
                                    aria-label={`View ${proj.title} details`}
                                >
                                    <div className="bg-white rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <FaEye className="text-gray-800 text-lg" />
                                    </div>
                                </button>
                            </div>
                            
                            <div className="p-5">
                                <div className="mb-2">
                                    <h3 className="text-xl font-semibold text-[#a1a1a1] mb-2 transition-colors duration-200">
                                        {proj.title}
                                    </h3>
                                </div>
                                
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {proj.lang.map((tech, index) => (
                                        <span 
                                            key={index} 
                                            className="px-3 py-1 bg-[#020A0F] text-[#a1a1a1] text-xs italic font-medium rounded-md"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                
                                <div className="flex gap-3">
                                    <a
                                        href={proj.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 inline-flex items-center justify-center p-2 border-1 border-[#a1a1a1] text-[#a1a1a1] text-sm font-medium rounded-md"
                                    >
                                        <FaEye className="mr-2" />
                                        Live Demo
                                    </a>
                                    <a
                                        href={proj.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex-1 inline-flex items-center justify-center px-2 text-sm font-medium rounded-md ${
                                            proj.github === '#' 
                                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                                                : 'bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-500'
                                        }`}
                                        onClick={(e) => proj.github === '#' && e.preventDefault()}
                                    >
                                        <FaLink className="mr-2" />
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {isModalOpen && selectedProject && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 backdrop-blur-sm"
                    onClick={closeModal}
                >
                    <div 
                        className="relative bg-[#a1a1a1] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl transform transition-all duration-300 scale-100"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="sticky top-0 bg-[#a1a1a1] border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h2>
                            <button
                                onClick={closeModal}
                                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 "
                                aria-label="Close modal"
                            >
                                <FaTimes className="text-xl" />
                            </button>
                        </div>
                        
                        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
                            <div className="relative w-full h-64 md:h-96 mb-6 bg-[#a1a1a1] rounded-lg overflow-hidden">
                                <Image
                                    src={selectedProject.img}
                                    alt={selectedProject.title}
                                    fill
                                    className="w-full object-cover"
                                />
                            </div>
                            
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Technologies Used</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.lang.map((tech, index) => (
                                            <span 
                                                key={index} 
                                                className="px-3 py-1 bg-[#020A0F] text-white italic text-sm font-medium rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="flex gap-3 pt-4">
                                    <a
                                        href={selectedProject.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-[#020A0F] text-white font-medium rounded-md"
                                    >
                                        <FaEye className="mr-2" />
                                        View Live Project
                                    </a>
                                    {selectedProject.github !== '#' && (
                                        <a
                                            href={selectedProject.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                        >
                                            <FaLink className="mr-2" />
                                            View on GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Projects