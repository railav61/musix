"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

function WhyChooseUs() {
  const chooseUsContent = [
    {
      title: "Personalized Learning Experience",
      description:
        "Every learner is unique, and so is their musical journey. Our platform provides a personalized learning experience by adapting to your skill level and preferences. Whether you're a complete beginner, an intermediate learner, or an advanced musician, our AI-driven recommendations and customized lesson plans ensure that you learn at your own pace and comfort. Say goodbye to one-size-fits-all learning and embrace a tailored approach that truly works for you.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--indigo-500))] text-white">
          Personalized Learning Experience
        </div>
      ),
    },
    {
      title: "Learn from Industry Experts",
      description:
        "Gain insights from some of the best musicians and music educators in the industry. Our courses are curated and delivered by professionals with years of experience in performing, teaching, and composing music. Each lesson is crafted with precision, ensuring you grasp not only the technical aspects of music but also the artistry behind it. Whether it's mastering a new instrument or understanding music theory, you’ll be guided by the best in the field.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="/courses/music-production.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Learn from Industry Experts"
          />
        </div>
      ),
    },
    {
      title: "Interactive and Engaging Lessons",
      description:
        "Learning music should be fun and engaging! Our platform integrates interactive exercises, real-time feedback, and gamified learning experiences to keep you motivated. Play along with AI-backed practice tools, participate in live quizzes, and challenge yourself with exciting exercises. With our immersive approach, learning music becomes more than just a lesson—it becomes an experience that keeps you inspired every step of the way.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--green-500),var(--teal-500))] text-white">
          Interactive and Engaging Lessons
        </div>
      ),
    },
    {
      title: "Community and Collaboration",
      description:
        "Music is best enjoyed when shared! Join a vibrant community of fellow learners, collaborate on music projects, and participate in live jam sessions. Our discussion forums and group learning features allow you to connect with like-minded musicians from around the world. Share your progress, get feedback from peers and instructors, and collaborate on exciting musical pieces. Learning together makes the journey more enjoyable and fulfilling.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] text-white">
          Community and Collaboration
        </div>
      ),
    },
    {
      title: "Track Progress and Earn Certifications",
      description:
        "Stay motivated by tracking your progress through our intuitive dashboard. Monitor your practice hours, see your improvements over time, and celebrate milestones as you master new skills. Upon completing a course, earn officially recognized certifications that validate your expertise. These certificates can be shared on professional platforms, helping you build credibility and confidence in your musical journey.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
          Track Progress and Earn Certifications
        </div>
      ),
    },
    {
      title: "Learn Anytime, Anywhere",
      description:
        "No more limitations! Our platform is designed for ultimate flexibility, allowing you to learn at your own pace, anytime, and from any device. Whether you're at home, on the go, or in a music studio, you can access your lessons, practice materials, and progress reports with just a click. With both web and mobile accessibility, your musical journey is always within reach, ensuring uninterrupted learning no matter where you are.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
          Learn Anytime, Anywhere
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <StickyScroll content={chooseUsContent} />
    </div>
  );
}

export default WhyChooseUs;
