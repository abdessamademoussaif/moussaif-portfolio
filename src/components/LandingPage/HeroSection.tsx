import Image from 'next/image';
import { AnimatedWrapper, IButton } from '../shared';
import Link from 'next/link';
import { personalData } from '@/services/data';

const HeroSection = () => {
  const { firstName, lastName } = personalData;
  return (
    <section
      className="flex flex-col min-[1322px]:flex-row items-center justify-between w-full max-w-screen"
      id="home"
    >
      <article className="mt-16 lg:mt-0">
        <AnimatedWrapper from="right">
          {/* IMPROVEMENT: Removed unnecessary <br /> tags for better accessibility and flow */}
          {/* Added max-w-2xl to control line break length in the absence of <br /> */}
          <h1 className="text-3xl lg:text-5xl uppercase mb-6 max-w-2xl">
            my name is{' '}
            <span className="font-bold bg-gradient bg-clip-text text-transparent">
              {firstName} {lastName}...
            </span>
          </h1>
        </AnimatedWrapper>
        <AnimatedWrapper from="left">
          <p className="text-xl font-bold capitalize mb-10">
            back end developer{' '}
            <span className="font-normal">based in Morocco</span>
          </p>
        </AnimatedWrapper>
        <AnimatedWrapper from="right">
          <Link href="#contacts">
            <IButton text="talk with me" />
          </Link>
        </AnimatedWrapper>
      </article>

      <AnimatedWrapper from="left">
        <div className="max-[1322px]:mt-10">
          <Image
            src="/images/hero.webp"
            alt={`${firstName} ${lastName} - Back End Developer`}
            priority
            width={750}
            height={520}
            className="border-2 border-fuchsia-400 rounded-full object-cover" 
          />
        </div>
      </AnimatedWrapper>
    </section>
  );
};

export default HeroSection;