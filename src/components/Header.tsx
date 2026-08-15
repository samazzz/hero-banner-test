"use client";

import { useState } from "react";

const navLinks = [
  "Services",
  "How it Works",
  "Resources",
  "News and Insights",
  "About Us",
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 bg-white">
      <div className="relative mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-5 md:px-8 lg:px-12">
        <a href="/" className="relative z-10 flex shrink-0 items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-immbark text-white">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="12"
                cy="12"
                r="8.5"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <ellipse
                cx="12"
                cy="12"
                rx="3.5"
                ry="8.5"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="M3.5 12h17M5 8.5h14M5 15.5h14"
                stroke="currentColor"
                strokeWidth="1.1"
                strokeLinecap="round"
              />
              <path
                d="M14.2 8.8c1.4-.5 2.8-.8 3.5-.3.2.8-.2 1.6-.8 2.1l-1.4.9 1.2 1.5c-.6.4-1.5.3-2.2 0l-1.2-1.8-.3-2.4.2 0z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span className="font-sans text-[1.35rem] font-bold tracking-tight text-immbark">
            Immbark
          </span>
        </a>

        <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-7 lg:flex xl:gap-9">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className="whitespace-nowrap font-sans text-[0.95rem] font-medium text-immbark-nav transition-colors hover:text-immbark"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="relative z-10 flex items-center gap-3">
          <a
            href="#login"
            className="hidden rounded-full bg-immbark px-6 py-2.5 font-sans text-sm font-semibold text-white transition hover:bg-immbark-deep sm:inline-flex"
          >
            Login
          </a>
          <button
            type="button"
            aria-label="Search"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-immbark-search text-immbark-nav transition hover:bg-zinc-200"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-[18px] w-[18px]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
            </svg>
          </button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-immbark-search text-immbark lg:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-zinc-100 bg-white px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setOpen(false)}
                className="font-sans text-base font-medium text-immbark-nav"
              >
                {link}
              </a>
            ))}
            <a
              href="#login"
              className="mt-2 inline-flex w-fit rounded-full bg-immbark px-6 py-2.5 font-sans text-sm font-semibold text-white sm:hidden"
            >
              Login
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
