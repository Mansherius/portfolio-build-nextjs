import React from 'react'
import { BentoGrid, BentoGridItem } from '@/components/ui/bentoGrid'

const AbouttBento = () => {
  return (
    <section className='mt-20'>
      <BentoGrid>
        <BentoGridItem 
          id={1}
          title="Skills Cloud and Development Stack"
          descriptionTop="I am always trying to learn more"
          className="lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]"
          imgClassName="w-full h-full"
          titleClassName="justify-end"
          img=""
          spareImg=""
        />
        <BentoGridItem 
          id={2}
          title="Teaching Assistant - OS'24, DAA'24"
          descriptionTop=""
          descriptionBottom="In my last semester before graduating, I was the Teaching Assistant for the 'Operating Systems' course taught by Prof. Goutam Kumar Paul."
          descriptionBottom2="I was also the Teaching Assistant for the 'Design and Analysis of Algorithms' course, taught by Prof. Sandeep Sen, in my first semester at my Post Graduate Diploma In Computer Science at Ashoka University."
          className="lg:col-span-2 md:col-span-3 md:row-span-2"
          imgClassName="opacity-50"
          titleClassName="justify-center"
          img="/groundBreaker.svg"
          spareImg=""
        />
        <BentoGridItem 
          id={3}
          title="Passionate Developer, tech and fitness enthusiast"
          descriptionTop=""
          className="lg:col-span-2 md:col-span-3 md:row-span-2"
          imgClassName="h-full absolute -right-2"
          titleClassName="justify-center"
          img="/fitness.svg"
          spareImg="/b4.svg"
        />
        <BentoGridItem 
          id={5}
          title="Let's work together?"
          descriptionTop=""
          className="lg:col-span-2 md:col-span-3 md:row-span-2"
          imgClassName=""
          titleClassName="justify-center"
          img=""
          spareImg="/bg.png"
        />
        <BentoGridItem 
          id={4}
          title="Building a Fitness Tracker for IOS"
          descriptionTop="Ongoing Projects"
          className="lg:col-span-3 md:col-span-3 md:row-span-2"
          imgClassName="absolute right-0 bottom-0 md:w-[60%] w-60"
          titleClassName="justify-center md:justify-start lg:justify-center"
          img="/b5.svg"
          spareImg="/grid.svg"
        />
      </BentoGrid>
    </section>
  )
}

export default AbouttBento;