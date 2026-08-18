"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SLIDE_MS = 6000;

const slides = [
  {
    id: 1,
    rating: "Rated 4.9/5",
    title: "Immigration, reimagined—powered by smart tech, designed by lawyers",
    body: "Our innovative platform streamlines the application process and connects you with licensed immigration attorneys with clear pricing—no guesswork, no hidden fees.",
    image: "/hero-1.jpg",
    imageAlt: "Professional woman reviewing documents on a tablet",
  },
  {
    id: 2,
    rating: "Trusted nationwide",
    title: "Clear guidance from day one—your path, mapped by experts",
    body: "Answer a few questions and get a tailored plan with timelines, document checklists, and attorney support built around your unique immigration goals.",
    image: "/hero-2.jpg",
    imageAlt: "Immigration attorney in a modern office",
  },
  {
    id: 3,
    rating: "Transparent pricing",
    title: "Licensed attorneys. Honest fees. Progress you can actually track.",
    body: "Every step is visible in your dashboard—from filing to follow-ups—so you always know where your case stands and what comes next.",
    image: "/hero-3.jpg",
    imageAlt: "Confident professional smiling in a bright workspace",
  },
];

function Stars() {
  return (
    <span className="flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-white">
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.9l-4.94 2.6.94-5.5-4-3.9 5.53-.8L10 1.5z" />
        </svg>
      ))}
    </span>
  );
}

export default function HeroBanner() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const goTo = (next: number) => {
    setIndex((next + slides.length) % slides.length);
    setAnimKey((k) => k + 1);
  };

  useEffect(() => {
    if (paused) return;
    const id = window.setTimeout(() => goTo(index + 1), SLIDE_MS);
    return () => window.clearTimeout(id);
  }, [index, paused]);

  const slide = slides[index];

  return (
    <section
      className="px-4 pb-8 pt-2 md:px-6 lg:px-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current == null) return;
        const delta = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(delta) > 50) goTo(index + (delta < 0 ? 1 : -1));
        touchStartX.current = null;
      }}
    >
      <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[2rem] bg-immbark text-white shadow-[0_24px_60px_-28px_rgba(26,67,56,0.55)] md:rounded-[2.75rem] lg:rounded-[3.25rem]">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 15% 20%, rgba(255,255,255,0.08), transparent 55%), radial-gradient(ellipse 50% 60% at 90% 80%, rgba(0,0,0,0.18), transparent 50%)",
          }}
        />

        <div className="relative grid min-h-[560px] grid-cols-1 items-center gap-8 px-6 py-10 sm:px-10 md:min-h-[620px] md:gap-10 md:px-12 md:py-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:px-16 lg:py-16 xl:px-20">
          <div
            key={`copy-${animKey}`}
            className="hero-animate-in relative z-10 max-w-xl lg:max-w-2xl"
          >
            <div className="mb-5 flex items-center gap-2.5 text-sm font-medium tracking-wide text-white/90 md:mb-7">
              <Stars />
              <span>{slide.rating}</span>
            </div>

            <h1 className="font-serif text-[2.15rem] leading-[1.15] tracking-[-0.02em] text-white sm:text-[2.6rem] md:text-[3.15rem] lg:text-[3.45rem] xl:text-[3.75rem]">
              {slide.title}
            </h1>

            <p className="mt-5 max-w-lg font-sans text-[0.98rem] leading-relaxed text-white/85 md:mt-6 md:text-[1.05rem] md:leading-8">
              {slide.body}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 md:mt-10 md:gap-4">
              <a
                href="#apply"
                className="group inline-flex items-center gap-3 rounded-full bg-white py-2 pl-6 pr-2 font-sans text-[0.95rem] font-semibold text-immbark transition hover:bg-zinc-100"
              >
                Apply Now
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-immbark text-white transition group-hover:translate-x-0.5">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
              <a
                href="#consult"
                className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3.5 font-sans text-[0.95rem] font-semibold text-white transition hover:bg-white/10"
              >
                Consult with Lawyer
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[420px] lg:mx-0 lg:max-w-none lg:justify-self-end">
            <div className="relative aspect-[3/4] w-full max-h-[520px] overflow-hidden rounded-[2rem] md:rounded-[2.5rem] lg:ml-auto lg:max-h-[560px] lg:w-[92%]">
              {slides.map((s, i) => (
                <div
                  key={s.id}
                  className={`absolute inset-0 transition-[opacity,clip-path] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    i === index
                      ? "z-10 opacity-100 [clip-path:inset(0_0_0_0)]"
                      : "z-0 opacity-0 [clip-path:inset(0_0_0_100%)]"
                  }`}
                  aria-hidden={i !== index}
                >
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    priority={i === 0}
                    sizes="(max-width: 1024px) 90vw, 420px"
                    className={`object-cover object-top ${i === index ? "hero-ken" : ""}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-immbark/35 via-transparent to-transparent" />
                </div>
              ))}
            </div>

            <div className="absolute -right-1 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-3 lg:flex xl:-right-3">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === index ? "true" : undefined}
                  onClick={() => goTo(i)}
                  className="relative flex h-14 w-1.5 overflow-hidden rounded-full bg-white/20"
                >
                  {i === index && (
                    <span
                      key={`bar-${animKey}`}
                      className="absolute inset-x-0 bottom-0 w-full rounded-full bg-white hero-grow-bar"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between gap-4 px-6 pb-8 sm:px-10 md:px-12 lg:px-16">
          <div className="flex items-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className="relative h-1 overflow-hidden rounded-full bg-white/25 transition-[width] duration-300"
                style={{ width: i === index ? 48 : 18 }}
              >
                {i === index && (
                  <span
                    key={`mbar-${animKey}`}
                    className="absolute inset-y-0 left-0 w-full rounded-full bg-white hero-progress-active"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => goTo(index - 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white/20"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M15 6l-6 6 6 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => goTo(index + 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white/20"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M9 6l6 6-6 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
