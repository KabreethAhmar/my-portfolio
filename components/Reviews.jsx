'use client'

import Image from 'next/image'

// Import Swiper React Components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper Styles
import 'swiper/css'
import 'swiper/css/pagination'

// Import Required Modules
import {Pagination} from 'swiper/modules'

const reviewsData = [
    {
        avatar: '/reviews/avatar-1.png',
        name: 'Person 1',
        job: 'Web Developer',
        review: ''
    },
    {
        avatar: '/reviews/avatar-2.png',
        name: 'Person 2',
        job: 'Web Developer',
        review: ''
    },
    {
        avatar: '/reviews/avatar-3.png',
        name: 'Person 3',
        job: 'Web Developer',
        review: ''
    },
    {
        avatar: '/reviews/avatar-4.png',
        name: 'Person 4',
        job: 'Web Developer',
        review: ''
    },
    {
        avatar: '/reviews/avatar-1.png',
        name: 'Person 5',
        job: 'Web Developer',
        review: ''
    },
    {
        avatar: '/reviews/avatar-2.png',
        name: 'Person 6',
        job: 'Web Developer',
        review: ''
    },
    {
        avatar: '/reviews/avatar-3.png',
        name: 'Person 7',
        job: 'Web Developer',
        review: ''
    },
    {
        avatar: '/reviews/avatar-4.png',
        name: 'Person 8 ',
        job: 'Web Developer',
        review: ''
    },
]


import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card'

const Reviews = () => {
return (
    <section className='mb-12 xl:mb-32'>
        <div className="container mx-auto">
            <h2 className='section-title mb-12 text-center mx-auto'>Reviews</h2>
            {/* Slider */}
            <Swiper
                slidesPerView={1}
                breakpoints ={{
                    640: { slidesPerView: 2 },
                    1400: { slidesPerView: 3 },
                }}
                spaceBetween={30}
                modules={[Pagination]}
                pagination={{
                    clickable: true,
                }}
                className='h-[350px]'
            >
                {reviewsData.map((person, index) => {
                    return (
                    <SwiperSlide key={index} >
                        <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]'>
                            <CardHeader className='p-0 mb-10'>
                                <div className='flex items-center gap-x-4'>
                                    {/* Image */}
                                    <Image
                                        src={person.avatar}
                                        width={70}
                                        height={70}
                                        alt=''
                                        priority
                                    />
                                    {/* Name */}
                                    <div className='flex flex-col'>
                                        <CardTitle>
                                            {person.name}
                                        </CardTitle>
                                        <p>{person.job}</p>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardDescription className='text-lg text-muted-foreground'>
                                {person.review}
                            </CardDescription>
                        </Card>
                    </SwiperSlide>
                )
                })}
            </Swiper>
        </div>
    </section>
)
}

export default Reviews