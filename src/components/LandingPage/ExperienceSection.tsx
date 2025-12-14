import { IButton } from '../shared';
import { AnimatedWrapper } from '@/components/shared';
import { experiences } from '@/services/data';
import Link from 'next/link';

const ExperienceSection = () => {
  return (
    <section className="flex flex-col !min-h-fit lg:flex-row items-center justify-between gap-10 mt-10 bg-gradient text-primary-foreground pb-[2rem] lg:pb-[3.5rem] w-full max-w-screen">
      <div className="flex-1 flex flex-col items-start">
        <AnimatedWrapper from="right">
          <p className="italic font-semibold capitalize mr-1">experience</p>
        </AnimatedWrapper>
        <AnimatedWrapper from="right">
          <h2 className="text-3xl lg:text-5xl font-bold uppercase mt-4 mb-10">
            my experience
          </h2>
        </AnimatedWrapper>
        <AnimatedWrapper from="right">
          <p className="mb-10">
            I have completed practical internships and developed real-world backend projects successfully deployed online. Skilled in API development and integration, performance optimization, and writing clean, maintainable code, I’m eager to contribute to scalable systems and collaborative engineering teams while continuously growing in a professional environment.
          </p>
        </AnimatedWrapper>
        <AnimatedWrapper from="right">
          <Link
            href="https://drive.usercontent.google.com/u/0/uc?id=1wLdgztOVqAtVIC4YG-MW0UMCBgZnLC_U&export=download"
            download>
            <IButton text="download my cv" />
          </Link>
        </AnimatedWrapper>
      </div>
      <div className="flex-1 flex justify-center flex-col gap-10 w-full">
        {experiences.map((ex,i) => (
          <AnimatedWrapper from="left" delay={i * 0.15} key={i}>
            <div className="border-b border-border pb-4">
              <p className="capitalize text-lg flex justify-between items-center mb-3">
                <span> {ex.date}</span>
                <span> {ex.company}</span>
              </p>
              <h2 className="text-2xl font-bold">{ex.title}</h2>
            </div>
          </AnimatedWrapper>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
