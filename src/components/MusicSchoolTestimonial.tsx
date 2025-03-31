"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "@/lib/utils";
import { ColourfulText } from "./ui/colourful-text";

function MusicSchoolTestimonial() {
  const testimonials = [
    {
      quote:
        "This platform has completely transformed my musical journey! The personalized lessons and expert guidance have helped me improve my skills faster than I ever imagined. Highly recommended for anyone who wants to learn music the right way!",
      name: "Emma Johnson",
      title: "Aspiring Pianist",
    },
    {
      quote:
        "I've tried multiple online music courses, but this one stands out. The interactive lessons, real-time feedback, and the supportive community make learning so much fun. I feel more confident in my playing, and I love being part of this platform!",
      name: "Michael Smith",
      title: "Guitar Enthusiast",
    },
    {
      quote:
        "As a music teacher, I am impressed by the structured curriculum and high-quality content. The ability to track progress and earn certifications is a game-changer. My students have shown tremendous growth using this platform!",
      name: "Sophia Martinez",
      title: "Music Educator",
    },
    {
      quote:
        "The flexibility to learn anytime, anywhere has been a lifesaver! Whether I’m practicing on my phone or laptop, I can always access my lessons. The AI-powered practice tools have significantly improved my technique.",
      name: "Daniel Lee",
      title: "Self-Taught Violinist",
    },
    {
      quote:
        "Joining this platform has been one of the best decisions for my musical growth. The lessons are engaging, and the gamified challenges keep me motivated. I’ve gone from a beginner to confidently playing my favorite songs!",
      name: "Olivia Brown",
      title: "Beginner to Intermediate Learner",
    },
  ];

  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

      <h2 className="text-4xl bg-white p-5 rounded-2xl font-bold text-center mb-20 z-10">
        <ColourfulText text="Hear Our Harmony: Voices Of Success" />
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default MusicSchoolTestimonial;
