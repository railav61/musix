"use client";
import React from "react";
import { ColourfulText } from "./ui/colourful-text";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {
  const webinars = [
    {
      title: "Mastering Guitar Techniques",
      description:
        "Join our expert guitarist as they walk you through essential fingerpicking, strumming patterns, and solo techniques. Suitable for beginners and intermediate players.",
      link: "https://yourmusicplatform.com/webinar/guitar-techniques",
    },
    {
      title: "The Art of Singing: Vocal Training 101",
      description:
        "Discover the secrets to improving your vocal range, breath control, and stage presence with our professional vocal coach. Ideal for aspiring singers.",
      link: "https://yourmusicplatform.com/webinar/vocal-training",
    },
    {
      title: "Music Theory Essentials for Beginners",
      description:
        "Demystify the fundamentals of music theory, including scales, chords, and progressions. Perfect for anyone looking to strengthen their musical foundation.",
      link: "https://yourmusicplatform.com/webinar/music-theory",
    },
    {
      title: "Digital Music Production: Getting Started",
      description:
        "Learn how to produce music using digital audio workstations (DAWs), mixing techniques, and sound design basics from industry professionals.",
      link: "https://yourmusicplatform.com/webinar/music-production",
    },
    {
      title: "Improvisation Skills for Pianists",
      description:
        "Unlock the art of improvisation on the piano with practical exercises and techniques. Great for jazz, classical, and contemporary pianists.",
      link: "https://yourmusicplatform.com/webinar/piano-improvisation",
    },
    {
      title: "The Business of Music: Monetizing Your Talent",
      description:
        "Understand the music industry's dynamics, from streaming revenue to licensing, and learn how to turn your musical passion into a sustainable career.",
      link: "https://yourmusicplatform.com/webinar/music-business",
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-xl text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your <ColourfulText text="Musical" /> Journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect items={webinars} />
        </div>
        <div className="mt-10 text-center">
          <Link href={"/"}>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                VIEW ALL WEBINARS
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
