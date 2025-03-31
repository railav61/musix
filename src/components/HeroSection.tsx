"use client";
import Link from "next/link";
import { Spotlight } from "./ui/spotlight-new";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="min-h-screen md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        gradientFirst={
          "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 95%, .14) 0, hsla(210, 100%, 70%, .06) 50%, hsla(210, 100%, 60%, 0) 80%)"
        }
        gradientSecond={
          "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 95%, .12) 0, hsla(210, 100%, 70%, .06) 80%, transparent 100%)"
        }
        gradientThird={
          "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 92%, .10) 0, hsla(210, 100%, 60%, .06) 80%, transparent 100%)"
        }
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the art of music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Learn and practice music anytime, anywhere with expert-led lessons
          designed for all skill levels. Whether you&apos;re a beginner or an
          advanced musician, our platform helps you improve with interactive
          sessions and a supportive community. Start your musical journey today
          and take your skills to the next level!
        </p>
        <div className="mt-4">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
