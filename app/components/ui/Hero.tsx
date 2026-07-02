"use client";

import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Zap,
  Heart,
} from "lucide-react";

const features = [
  {
    title: "Fast Processing",
    icon: Zap,
  },
  {
    title: "Secure",
    icon: ShieldCheck,
  },
  {
    title: "Mobile Friendly",
    icon: Smartphone,
  },
  {
    title: "Free Forever",
    icon: Heart,
  },
];

const stats = [
  {
    value: "28+",
    label: "Online Tools",
    color: "text-blue-400",
    border: "hover:border-blue-500/40",
    shadow: "hover:shadow-[0_0_35px_rgba(59,130,246,.18)]",
  },
  {
    value: "100%",
    label: "Free Access",
    color: "text-green-400",
    border: "hover:border-green-500/40",
    shadow: "hover:shadow-[0_0_35px_rgba(34,197,94,.18)]",
  },
  {
    value: "0",
    label: "Signups Needed",
    color: "text-cyan-400",
    border: "hover:border-cyan-500/40",
    shadow: "hover:shadow-[0_0_35px_rgba(6,182,212,.18)]",
  },
  {
    value: "24/7",
    label: "Availability",
    color: "text-purple-400",
    border: "hover:border-purple-500/40",
    shadow: "hover:shadow-[0_0_35px_rgba(168,85,247,.18)]",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">

      {/* Background */}

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:70px_70px] opacity-[0.015]" />

      <div className="absolute left-1/2 top-20 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[170px]" />

      <div className="absolute right-0 top-0 h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute bottom-0 left-0 h-[260px] w-[260px] rounded-full bg-indigo-500/10 blur-[130px]" />

      <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-blue-500/10 to-transparent" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-20 text-center">

        {/* Badge */}

        <div className="rounded-full border border-blue-500/20 bg-white/5 px-6 py-2 text-sm font-medium text-blue-300 backdrop-blur-xl shadow-lg shadow-blue-500/10">
          🚀 28+ Professional Online Tools
        </div>

        {/* Heading */}

        <h1 className="mt-10 max-w-6xl text-5xl font-black leading-[1.05] tracking-tight md:text-7xl lg:text-[78px]">

          All Your

          <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
            Online Tools
          </span>

          In One Place

        </h1>

        {/* Description */}

        <p className="mt-10 max-w-2xl text-lg leading-8 text-gray-400 md:text-xl">

          Compress images, merge PDFs, format JSON,
          generate QR codes and access powerful online
          tools — all in one fast, secure and completely
          free platform.

        </p>

        {/* Buttons */}

        <div className="mt-16 flex flex-wrap justify-center gap-5">

          <a
            href="#tools"
            className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 font-semibold text-white shadow-xl shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-blue-500/40"
          >
            Explore Tools

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />

          </a>

          <Link
            href="/about"
            className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold backdrop-blur-xl transition-all duration-300 hover:border-blue-500 hover:bg-white/10"
          >
            Learn More
          </Link>

        </div>
                {/* Feature Pills */}

        <div className="mt-20 flex flex-wrap items-center justify-center gap-4">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(59,130,246,.12)]"
              >
                <Icon
                  size={18}
                  className="text-blue-400 transition-transform duration-300 group-hover:scale-110"
                />

                <span className="text-sm font-medium text-gray-300">
                  {feature.title}
                </span>

              </div>
            );
          })}

        </div>

        {/* Stats */}

        <div className="mt-32 w-full max-w-6xl">

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">

            {stats.map((item) => (

              <div
                key={item.label}
                className={`group rounded-3xl border border-white/10 bg-gradient-to-b from-[#161616] to-[#0d0d0d] p-8 text-center transition-all duration-300 hover:-translate-y-2 ${item.border} ${item.shadow}`}
              >

                <h3 className={`text-4xl font-black ${item.color}`}>
                  {item.value}
                </h3>

                <p className="mt-3 text-sm text-gray-400">
                  {item.label}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Decorative Blur */}

        <div className="pointer-events-none absolute left-12 top-44 hidden xl:block">

          <div className="h-24 w-24 rotate-12 rounded-3xl border border-blue-500/10 bg-white/5 backdrop-blur-xl" />

        </div>

        <div className="pointer-events-none absolute right-14 top-56 hidden xl:block">

          <div className="h-20 w-20 -rotate-12 rounded-2xl border border-cyan-500/10 bg-white/5 backdrop-blur-xl" />

        </div>

        <div className="pointer-events-none absolute bottom-24 left-24 hidden xl:block">

          <div className="h-16 w-16 rounded-full bg-blue-500/20 blur-xl" />

        </div>

        <div className="pointer-events-none absolute bottom-20 right-20 hidden xl:block">

          <div className="h-20 w-20 rounded-full bg-cyan-500/20 blur-xl" />

        </div>
                {/* Bottom Fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />

      </div>
    </section>
  );
}