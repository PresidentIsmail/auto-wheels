import React from 'react';
import Image from "next/image"

import tireBg from "@/public/images/tyre-bg-01.webp"

const TireSelection: React.FC = () => {
    return (
        <section aria-label='Tire Selection Section' className='relative'>
           <Image 
                src={tireBg}
                alt='Tire Selection Background'
                fill
                sizes='100vw'
                quality={100}
                placeholder='blur'
           />
        </section >
    );
};

export default TireSelection;
