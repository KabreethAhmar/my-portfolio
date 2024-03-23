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
        image: '/work/3.png',
        category: 'react js',
        name: 'Nexa Website',
        Description: 'Lorem Ispum Lorem Ispum Lorem Ispum',
        link: '/',
        github: '/',
    },
    {
        image: '/work/3.png',
        category: 'node js',
        name: 'Nexa Website',
        Description: 'Lorem Ispum Lorem Ispum Lorem Ispum',
        link: '/',
        github: '/',
    },
    {
        image: '/work/3.png',
        category: 'python',
        name: 'Nexa Website',
        Description: 'Lorem Ispum Lorem Ispum Lorem Ispum',
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