import React from 'react'
import Section from './global/Section';
import Container from './global/Container';
import Image from 'next/image';
import subscribe_1 from '../app/assets/subscribe_1.png';
import subscribe_2 from '../app/assets/subscribe_2.png';
import Button from './global/Button';

const Subscribe = () => {
  return (
    <Section className="pt-37.5 pb-12.5 ">
        <Container>
            <div className="flex items-center justify-between">
                <div className="w-[355px] h-[747px] pr-7.5">
                    <Image src={subscribe_1} alt="Subscribe" className="w-full h-full" />
                </div>
                <div className= "max-w-[631px] text-center">
                        <h2 className="text-[46px] font-normal text-heading">
             Subscribe To Our Newsletter
            </h2>

            <p className=" mt-5 text-[16px] leading-[26px] text-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin 
            </p>
          
            <form action="" className="pt-7.5">

            <input
              type="email"
              placeholder="michael@ymail.com"
              className="w-full rounded-md pl-7.5 pt-7 pb-8 focus:border-blue-500 focus:outline-none shadow-2xl"
            />
            <Button className="mt-7.5">
                Subscribe Now
            </Button>
            </form>


                </div>
                 <div className="w-[355px] h-[747px] pl-12">
                    <Image src={subscribe_2} alt="Subscribe" className="w-full h-full" />
                </div>
            </div>
        </Container>
    </Section>
  )
}

export default Subscribe