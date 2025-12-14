import { personalData } from '@/services/data';
import Image from 'next/image';
import { IButton, MyInfo, AnimatedWrapper } from '../shared';
import { Mail, MapPin, SquareUserRound } from 'lucide-react';
import Link from 'next/link';
import { QuoteDown, Whatsapp } from 'iconsax-reactjs';

const age = new Date().getFullYear() - personalData.birthYear;

const AboutSection = () => {
  const { firstName, lastName, phone, email, address } = personalData;

  return (
    <section id="about" className="w-full max-w-screen">
      <AnimatedWrapper from="left" className="mt-16 lg:mt-0">
        <p className="italic font-semibold capitalize">Nice to meet you!</p>
      </AnimatedWrapper>
      <AnimatedWrapper from="left">
        <h2 className="text-3xl lg:text-5xl font-bold uppercase mt-4 mb-10">
          Welcome to...
        </h2>
      </AnimatedWrapper>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        <AnimatedWrapper
          from="right"
          className="text-center flex-2/5 flex items-center justify-center flex-col">
          <Image
            src="/images/about.png"
            alt="about"
            width={430}
            height={480}
            priority
            className="w-auto h-auto border-3 border-fuchsia-400 rounded-full"
          />
          <h3 className="text-2xl lg:text-4xl font-bold capitalize bg-gradient bg-clip-text text-transparent mt-4 mb-3">
            {firstName} {lastName}
          </h3>
          <p className="text-xl font-bold capitalize mb-10">
            back end developer{' '}
            <span className="font-normal">based in Morocco</span>
          </p>
          <Link
            href="https://drive.google.com/file/d/1wLdgztOVqAtVIC4YG-MW0UMCBgZnLC_U/view?usp=sharing"
            target="_blank">
            <IButton text="view my cv" />
          </Link>
        </AnimatedWrapper>
        <div className="flex flex-col gap-10 flex-3/5">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-4  pb-10 border-b border-border">
            <AnimatedWrapper from="left">
              <Link href={`https://wa.me/${phone}`} target="_blank">
                <MyInfo text={phone} icon={<Whatsapp variant="Outline" />} />
              </Link>
            </AnimatedWrapper>
            <AnimatedWrapper from="left" delay={0.15}>
              <MyInfo text={`${age} yrs`} icon={<SquareUserRound />} />
            </AnimatedWrapper>
            <AnimatedWrapper from="left" delay={0.3} >
              <Link href={`mailto:${email}`} target="_blank">
                <MyInfo text={email} icon={<Mail/>} />
              </Link>
            </AnimatedWrapper>
            <AnimatedWrapper from="left" delay={0.45}>
              <MyInfo text={address} icon={<MapPin />} />
            </AnimatedWrapper>
          </div>
          <AnimatedWrapper from="right" className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <p className="flex items-center gap-2 font-bold">
                <span className="font-bold text-5xl bg-gradient bg-clip-text text-transparent">
                  1+
                </span>
                <span className="italic font-bold">
                  Years <br /> experience...
                </span>
              </p>
              <p>
                Hello there! My name is{' '}
                <span className="text-gradient-start">
                  {firstName} {lastName}
                </span>
                . I am a Backend Developer with hands-on experience
                 designing and building scalable, secure, and efficient
                  server-side applications using Node.js, Express.js, and MongoDB.
              </p>
            </div>
          </AnimatedWrapper>
          <AnimatedWrapper from="left">
            <p className="flex items-center gap-2 bg-primary text-primary-foreground p-5 italic font-semibold rounded-xl">
              <QuoteDown size="46" color="#555" variant="Bold" />
              &quot;Behind every beautiful UI, there’s a backend quietly <br />
              doing the heavy lifting.&quot;
            </p>
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
