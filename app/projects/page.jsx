'use client'

import React, {useState} from 'react'
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs'
import ProjectCard from '@/components/ProjectCard'

const projectData = [
    {
        image: '/work/5.png',
        category: 'Java',
        name: 'Theatre Booking System',
        Description: 'Theatre ticket booking system using OOP concepts',
        link: '/',
        github: '/',
    },
    {
        image: '/work/6.png',
        category: 'Java',
        name: 'Product management system with shopping cart GUI',
        Description: 'Java GUI application using OOP concepts, where the user can select items and check out and the manager can manage the products ',
        link: '/',
        github: '/',
    },
    {
        image: '/work/8.png',
        category: 'Flutter',
        name: 'AI/AR app for people with autism and social anxiety',
        Description: 'The goal of the project is to develop an Augmented Reality (AR) chatbot specifically for people with social anxiety who are autistic.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/7.png',
        category: 'React.js',
        name: 'Portfolio',
        Description: 'Portfolio using React.js Next.js Tailwind CSS and Shadcn UI',
        link: '/',
        github: '/',
    },
];

// Remove Category Duplication
const uniqueCategories = ['all projects', ...new Set(projectData.map(item => item.category))];

const Projects = () => {
    const [categories, setCategories] = useState(uniqueCategories);
    const [category, setCategory] = useState('all projects');

    const filteredProjects = projectData.filter(project => {
        return category === 'all projects'
        ? project
        :project.category === category;
    });

return (
    <section className='min-h-screen pt-12'>
        <div className="container mx-auto">
            <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
                My Projects
            </h2>
            {/* Tabs */}
            <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
                <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
                    {categories.map((category, index) => {
                        return (
                        <TabsTrigger
                        onClick={() => setCategory(category)}
                            value={category}
                            key={index}
                            className='capitalize w-[162px] md:w-auto'>
                                {category}
                        </TabsTrigger>
                        )
                    })}
                </TabsList>
                {/* Tabs Content */}
                <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
                    {filteredProjects.map((project, index) => {
                        return <TabsContent value={category} key={index}>
                            <ProjectCard project={project} />
                        </TabsContent>
                    })}
                </div>
            </Tabs>
        </div>
    </section>
)
}

export default Projects;