import Image from 'next/image';
import { AnimatedWrapper, IButton } from '../shared';
import Link from 'next/link';
import { personalData } from '@/services/data';

const HeroSection = () => {
  const { firstName, lastName } = personalData;
  
  return (
    <section
      className="flex flex-col xl:flex-row items-center justify-between w-full max-w-screen gap-8"
      id="home"
      aria-label="Hero section introducing the developer"
    >
      <article className="mt-16 lg:mt-0 flex-1">
        <AnimatedWrapper from="right">
          <h1 
            className="text-3xl lg:text-5xl uppercase mb-6 max-w-2xl"
            id="hero-heading"
          >
            my name is{' '}
            <strong className="font-bold bg-gradient bg-clip-text text-transparent">
              {firstName} {lastName}
            </strong>
            ...
          </h1>
        </AnimatedWrapper>
        
        <AnimatedWrapper from="left">
          <p 
            className="text-xl font-bold capitalize mb-10"
            aria-describedby="hero-heading"
          >
            back end developer{' '}
            <span className="font-normal">based in Morocco</span>
          </p>
        </AnimatedWrapper>
        
        <AnimatedWrapper from="right">
          <Link href="#contacts" aria-label="Navigate to contact section">
            <IButton text="talk with me" />
          </Link>
        </AnimatedWrapper>
      </article>

      <AnimatedWrapper from="left">
        <div className="xl:mt-0 max-w-120  shrink-0">
          <Image
            src="/images/hero.webp"
            alt={`${firstName} ${lastName}, Back End Developer based in Morocco`}
            priority
            width={600}
            height={520}
            className="border-2 border-fuchsia-400 rounded-full object-cover w-full h-auto" 
          />
        </div>
      </AnimatedWrapper>
    </section>
  );
};

export default HeroSection;