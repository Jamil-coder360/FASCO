import React from 'react'
import Section from './global/Section';
import Container from './global/Container';
import Image from 'next/image';

// import images
import feature1 from '@/app/assets/features_1.png';
import feature2 from '@/app/assets/features_2.png';
import feature3 from '@/app/assets/features_3.png';
import feature4 from '@/app/assets/features_4.png';


// features data
const featuresData =[
    {
        id:1,
        image:feature1,
        heading:"High Quality",
        title:"crafted from top materials"
    },
    {
        id:2,
        image:feature2,
        heading:"High Quality",
        title:"crafted from top materials"
    },
    {
        id:3,
        image:feature3,
        heading:"High Quality",
        title:"crafted from top materials"
    },
    {
        id:4,
        image:feature4,
        heading:"High Quality",
        title:"crafted from top materials"
    },
]
const Features = ({image , title, heading}) => {
  return (
    <Section className="py-18">
        <Container>
            <div className="grid grid-cols-4 gap-10">

            {featuresData.map((item)=>(

            <div key={item.id} className="flex gap-3.25">
                <div>
                    <Image src={item.image} alt="Feature 1" width={51} height={50} />
                </div>
                <div className="flex flex-col">

                <h3 className="text-[20px] leading-auto font-medium font-poppins text-heading">{item.heading}</h3>
                <p className="text-[16px] leading-[1.625] font-normal font-poppins text-heading">{item.title}</p>
                </div>
            </div>
            ))}
            </div>
        </Container>
    </Section>
  )
}

export default Features