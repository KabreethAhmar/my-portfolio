import {GanttChartSquare, Blocks, Gem}  from 'lucide-react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

const serviceData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: 'Machine Learning',
        description:  "Harnessing advanced algorithms to derive actionable insights and predictive models from data, empowering informed decision-making and innovation."
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: 'Backend Programming',
        description: "Developing robust and scalable server-side systems, handling data storage, business logic, and ensuring seamless integration with front-end interfaces for efficient and secure application functionality."
    },
    {
        icon: <Gem size={72} strokeWidth={0.8} />,
        title: 'Web Development',
        description:  "Crafting dynamic and responsive web solutions tailored to your needs, seamlessly blending creativity with functionality for an engaging online presence."
    },
];


const Services = () => {
  return (
    <section className='mb-12 xl:mb-36'> 
    <div className='container mx-auto'>
        <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'> My Services </h2>
        {/* Grid Items */}
        <div className='grid xl:grid-cols-3 justify-center gap-y-15 xl:gap-y-30 xl:gap-x-12'>
            {serviceData.map((item, index) => {
                return (
                    <Card className='w-full max-w-[424px] h-[320px] flex flex-col pt-16 pb-10 justify-center items-center relative' 
                        key={index}>
                        <CardHeader className='text-primary absolute -top-[60px]'>
                            <div className='w-[100px] h-[100px] bg-blue-100 dark:bg-background flex justify-center items-center'>
                                {item.icon}
                            </div>
                        </CardHeader>
                        <CardContent className='text-center '>
                            <CardTitle className='mb-4'>{item.title}</CardTitle>
                            <CardDescription className='text-lg'>{item.description}</CardDescription>
                        </CardContent>
                    </Card>
                )
            })}
        </div>
    </div>
    </section>
  )
}

export default Services