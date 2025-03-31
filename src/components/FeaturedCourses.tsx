"use client";
import Link from "next/link";
import courseData from "../data/music_courses.json";
import { ColourfulText } from "./ui/colourful-text";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { AuroraBackground } from "./ui/aurora-background";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
  paratext: string;
}

function FeaturedCourses() {
  const featCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <AuroraBackground className="pt-10 min-h-screen">
      <div className="">
        <div className="text-center">
          <h2 className="text-xl text-teal-500 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black dark:text-white sm:text-4xl">
            Let Music <ColourfulText text="Colour" /> Your World.
          </p>
        </div>
      </div>
      <div className="pt-10 min-h-[40vh]">
        <BentoGrid className="max-w-4xl h-full mx-auto">
          {featCourses.map((course: Course, i) => (
            <BentoGridItem
              key={course.id}
              id={course.id}
              title={course.title}
              description={course.description}
              img={course.image}
              //   icon={item.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
      <div className="py-10 text-center">
        <Link href={"/courses"}>
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              ALL COURSES
            </span>
          </button>
        </Link>
      </div>
    </AuroraBackground>
  );
}

export default FeaturedCourses;
