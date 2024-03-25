'use client'
import Link from 'next/link';
import { Button } from './ui/button';

// Import Swiper React Components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper Styles
import 'swiper/css'
import 'swiper/css/pagination'

// Import Required Modules
import {Pagination} from 'swiper/modules'

//Components
import ProjectCard from '@/components/ProjectCard'
import { Description } from '@radix-ui/react-dialog';

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

const Work = () => {
  return (
    <section className='relative mb-12 xl:mb-48'>
        <div className='container mx-auto'>
            {/* Text */}
            <div className=' max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
                <h2 className='section-title mb-4'>Latest Projects</h2>
                <p className='subtitle mb-8'>These are the recent projects I have worked on</p>
                <Link href='/projects'>
                    <Button> All Projects </Button>
                </Link>
            </div>
            {/* Slider */}
            <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
                <Swiper className='h-[480px]' slidesPerView={1} breakpoints={{
                    640: {
                        slidesPerView: 2
                    },
                }}
                spaceBetween={30}
                modules={[Pagination]}
                pagination={{clickable: true}}>
                    {projectData.slice(0, 4).map((project, index) => {
                        return (
                        <SwiperSlide key={index}>
                            <ProjectCard project={project} />
                        </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    </section>
)
}

export default Work