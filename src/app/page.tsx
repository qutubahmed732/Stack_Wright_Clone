"use client";
import {
  CircleCheckBig,
  ArrowRight,
  LucidePlay,
  LucideSparkles,
  Zap,
  CheckCircle,
  Shield,
  Target,
  Star,
  ChevronRight,
  ChevronLeft,
  CalendarRange,
  Tag,
  TrendingUp,
  Users,
  Sparkles,
  MessageSquare,
  Lightbulb,
  Rocket,
  Heart,
  Quote,
  Mail,
  Phone,
  MapPin,
  ArrowUp
} from "lucide-react";

import { LuLinkedin, LuTwitter, LuGithub } from "react-icons/lu";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import image1 from "../images/image-1.webp";
import image2 from "../images/image-2.webp";
import image3 from "../images/image-3.webp";

import sarah from "../images/sarah.webp";
import emily from "../images/emily-watson.webp";
import Marcus from "../images/Marcus-man.webp";


export default function Home() {
  const [word, setWord] = useState("Shopify");
  const [active, setActive] = useState<number>(1);
  const [hoverActive, setHoverActive] = useState<number>(1);
  const [activeSlide, setActiveSlide] = useState<number>(1);
  const [clientStoreis, setClientStories] = useState<number>(1);


  useEffect(() => {
    const interval = setInterval(() => {
      if (word === "Shopify") {
        setWord("WordPress")
      } else if (word === "WordPress") {
        setWord("Wix")
      } else if (word === "Wix") {
        setWord("SquareSpace")
      } else {
        setWord("Shopify")
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [word]);

  const departments = [
    {
      id: 1,
      category: "E-commerce",
      projects: "TechFlow Solutions",
      description: "E-commerce Platform Redesign",
      style: "flex-1 p-6 rounded-2xl border-2 transition-all duration-300 text-left bg-gray-800/50 border-gray-700 hover:border-gray-600",
      bulletDesign: "w-3 h-3 rounded-full bg-linear-to-r from-blue-500 to-cyan-500",
      styleHover: "flex-1 p-6 rounded-2xl border-2 transition-all duration-300 text-left bg-linear-to-br from-blue-500 to-cyan-500 border-gray-600 scale-102",
    },
    {
      id: 2,
      category: "SaaS",
      projects: "innovateLab",
      description: "SaaS Platform Development",
      style: "flex-1 p-6 rounded-2xl border-2 transition-all duration-300 text-left bg-gray-800/50 border-gray-700 hover:border-gray-600",
      bulletDesign: "w-3 h-3 rounded-full bg-linear-to-r from-purple-500 to-pink-500",
      styleHover: "flex-1 p-6 rounded-2xl border-2 transition-all duration-300 text-left bg-linear-to-br from-purple-500 to-pink-500 border-gray-600 scale-102",
    },
    {
      id: 3,
      category: "Corporate",
      projects: "GrowthCorp",
      description: "Corporate Website & CMS",
      style: "flex-1 p-6 rounded-2xl border-2 transition-all duration-300 text-left bg-gray-800/50 border-gray-700 hover:border-gray-600",
      bulletDesign: "w-3 h-3 rounded-full bg-linear-to-r from-green-500 to-emerald-500",
      styleHover: "flex-1 p-6 rounded-2xl border-2 transition-all duration-300 text-left bg-linear-to-br from-green-500 to-emerald-500 border-gray-600 scale-102",
    }
  ];

  const imageContainer = [
    {
      id: 1,
      category: "E-commerce",
      projects: "TechFlow Solutions",
      description: "E-commerce Platform Redesign",
      months: 3,
      image: image1,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      category: "SaaS",
      projects: "innovateLab",
      description: "SaaS Platform Development",
      months: 6,
      image: image2,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      category: "Corporate",
      projects: "GrowthCorp",
      description: "Corporate Website & CMS",
      months: 6,
      image: image3,
      gradient: "from-green-500 to-emerald-500"
    },
  ]

  const cardsData = [
    {
      id: 1,
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      head3: "Listen",
      smallDesc: "Your vision, our ears",
      para: "We start by understanding your dreams, challenges, and what success looks like to you.",
      point1: "Deep discovery sessions",
      point2: "Goal alignment",
      point3: "Success metrics definition",
      gradient: "from-blue-400 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
    },
    {
      id: 2,
      icon: <Lightbulb className="w-6 h-6 text-white" />,
      head3: "Ideate",
      smallDesc: "Where magic begins",
      para: "We transform your vision into a strategic blueprint that balances ambition with reality.",
      point1: "Strategic planning",
      point2: "User experience design",
      point3: "Technical architecture",
      gradient: "from-amber-400 to-orange-500",
      bgGradient: "from-amber-500/10 to-orange-500/10",
    },
    {
      id: 3,
      icon: <Rocket className="w-6 h-6 text-white" />,
      head3: "Create",
      smallDesc: "Bringing ideas to life",
      para: "This is where the real magic happens. We build, test, and perfect every detail.",
      point1: "Custom development",
      point2: "Quality assurance",
      point3: "Performance optimization",
      gradient: "from-emerald-400 to-green-500",
      bgGradient: "from-emerald-500/10 to-green-500/10",
    },
    {
      id: 4,
      icon: <Heart className="w-6 h-6 text-white" />,
      head3: "Deliver",
      smallDesc: "Your success, our pride",
      para: "We launch with confidence and stay by your side to ensure continued success.",
      point1: "Seamless deployment",
      point2: "Training & support",
      point3: "Ongoing optimization",
      gradient: "from-pink-400 to-rose-500",
      bgGradient: "from-pink-500/10 to-rose-500/10",
    },
  ]

  const clientStoriesData = [
    {
      id: 1,
      para: "The difference is night and day. Our new custom site loads 5x faster than our old WordPress site, and our conversion rate increased by 40%. The team's attention to detail and technical expertise is unmatched.",
      clientAvatar: sarah,
      clientName: "Sarah Chen",
      clientRank: "Marketing Director",
      clientCompany: "TechFlow Solutions",
      smallPara1: "5x faster",
      smallPara2: "+40%",
      smallPara3: "10/10",
      bgGradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      para: "As a technical founder, I was skeptical about outsourcing development. But their code quality and architecture decisions were better than what my internal team could have produced. Truly impressive work.",
      clientAvatar: Marcus,
      clientName: "Marcus Rodriguez",
      clientRank: "CEO & Founder",
      clientCompany: "InnovateLab",
      smallPara1: "3x faster",
      smallPara2: "+60%",
      smallPara3: "10/10",
      bgGradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      para: "They didn't just build us a website—they built us a growth engine. The custom CMS is intuitive, the performance is incredible, and our team can finally focus on business instead of technical issues.",
      clientAvatar: emily,
      clientName: "Emily Watson",
      clientRank: "Product Manager",
      clientCompany: "GrowthCorp",
      smallPara1: "4x faster",
      smallPara2: "+35%",
      smallPara3: "10/10",
      bgGradient: "from-emerald-500 to-green-500"
    },
  ]

  let hoverClasses = "bg-linear-to-r from-blue-400 to-cyan-500 border-transparent shadow-2xl scale-110";

  return (
    <>
      <header className="pt-5 py-15 min-h-screen relative bg-linear-to-b from-gray-900 to-black items-center overflow-hidden">
        {/* animation */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="w-full h-full flex flex-col items-center">
          <div className="flex flex-col items-center space-y-6 lg:space-y-8 transform transition-all duration-1000 delay-200 translate-y-0 opacity-100">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-full px-4 lg:px-6 py-2 lg:py-3 shadow-sm transform transition-all duration-1000 translate-y-0 opacity-100">
              <div className="flex items-center -space-x-2">
                <span className="shrink-0 w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-linear-to-r from-blue-400 to-purple-500"></span>
                <span className="shrink-0 w-5 h-5 lg:w-6 lg:h-6 outline-2 outline-black rounded-full bg-linear-to-r from-blue-400 to-purple-500"></span>
                <span className="shrink-0 w-5 h-5 lg:w-6 lg:h-6 outline-2 outline-black rounded-full bg-linear-to-r from-blue-400 to-purple-500"></span>
              </div>
              <p className="text-xs lg:text-sm font-medium text-gray-300">Trusted by 200+ companies</p>
              <CircleCheckBig className="text-green-400 w-4 h-4" />
            </div>

            {/* center heading + string animation */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-[0.9] tracking-tight text-center">
              <span className="block">Beyond</span>
              <div className="relative inline-block my-2 lg:my-4">
                <span className="relative z-10 font-medium bg-linear-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">{word}</span>
                <div className="absolute inset-0 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-lg transform -skew-x-12 z-10"></div>
              </div>
              <span className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">Build something<span className="block font-medium">extraordinary</span></span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 font-light leading-relaxed max-w-4xl mx-auto px-4 text-center">We craft bespoke web experiences that outperform templates in every metric that matters—<span className="font-medium text-gray-200">speed, conversions, and user satisfaction</span></p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6 px-4 transform transition-all duration-1000 delay-400 translate-y-0 opacity-100 ">
              <button className="group relative bg-white hover:bg-gray-100 text-gray-900 px-8 lg:px-10 py-4 lg:py-5 rounded-xl lg:rounded-2xl font-medium text-base lg:text-lg transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500">
                <span className="relative z-10">Start Your Project</span>
                <ArrowRight className="ml-3 w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform relative z-10" />
              </button>
              <button className="group flex items-center text-gray-300 hover:text-white font-medium text-base lg:text-lg transition-colors duration-300 w-full sm:w-auto justify-center sm:justify-start focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center mr-3 lg:mr-4 group-hover:border-gray-600 transition-colors duration-300 shadow-sm">
                  <LucidePlay className="w-4 h-4 lg:w-5 lg:h-5 ml-0.5" />
                </div>
                Watch our process
              </button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto pt-4 px-4 transform transition-all duration-1000 delay-600 translate-y-0 opacity-100">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-1 lg:mb-2">10x</div>
                <div className="text-xs sm:text-sm text-gray-400 font-medium">Faster Loading</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-1 lg:mb-2">40%</div>
                <div className="text-xs sm:text-sm text-gray-400 font-medium">Higher Conversions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-1 lg:mb-2">99.9%</div>
                <div className="text-xs sm:text-sm text-gray-400 font-medium">Uptime SLA</div>
              </div>
              <div className="text-center"><div className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-1 lg:mb-2">200+</div>
                <div className="text-xs sm:text-sm text-gray-400 font-medium">Sites Launched</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-12 bg-linear-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8 mb-4 transform transition-all duration-1000 translate-y-0 opacity-100">

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 space-y-5">
              <div className="inline-flex items-center gap-3 bg-linear-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-3">
                <LucideSparkles className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 font-medium">What We Do Best</span>
              </div>
              <div className="space-y-6 my-5">
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white leading-tight">We don't just build<span className="block font-medium bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">we engineer experiences</span>
                </h2>
                <p className="text-2xl text-gray-400 font-light max-w-4xl mx-auto leading-relaxed">Three pillars of digital excellence that separate the extraordinary from the ordinary</p>
              </div>
              <div className="grid lg:grid-cols-3 gap-8 mt-10 mb-10">
                {/* first Card */}
                <div className="relative p-8 space-y-8 rounded-3xl transform transition-transform duration-500 group hover:scale-105 border border-gray-800 hover:border-gray-700  bg-gray-900/50 hover:bg-linear-to-r from-amber-500/10 to-orange-500/10">
                  <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-amber-400 to-orange-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl"></div>
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-16 rounded-2xl bg-linear-to-r from-amber-400 to-orange-500 flex items-center justify-center shadow-lg transform transition-transform duration-500 group-hover:rotate-5 group-hover:scale-110">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex flex-col text-gray-600 font-semibold">
                      <div className="text-3xl font-extralight bg-linear-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent"><span className="text-4xl">&lt;</span> 2s</div>
                      <div>Load Time</div>
                    </div>
                  </div>
                  <div className="text-left space-y-4">
                    <div>
                      <h3 className="text-2xl font-medium text-white mb-2">Lightning Performance</h3>
                      <p className="text-sm font-medium bg-linear-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Speed that converts</p>
                    </div>
                    <p className="text-gray-400 leading-relaxed">Your users expect instant gratification. We deliver websites that load faster than they can blink.</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                      <span className="text-gray-300 text-sm">Sub-2 second load times</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                      <span className="text-gray-300 text-sm">Core Web Vitals optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                      <span className="text-gray-300 text-sm">Advanced caching strategies</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                      <span className="text-gray-300 text-sm">Image &amp; asset optimization</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-white font-medium transition-all duration-300 translate-x-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-2">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Second Card */}
                <div className="relative p-8 space-y-8 rounded-3xl transform transition-transform duration-500 group hover:scale-105 border border-gray-800 hover:border-gray-700  bg-gray-900/50 hover:bg-linear-to-r from-emerald-500/10 to-teal-500/10">
                  <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl"></div>
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-16 rounded-2xl bg-linear-to-r from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg transform transition-transform duration-500 group-hover:rotate-5 group-hover:scale-110">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex flex-col text-gray-600 font-semibold text-right">
                      <div className="text-3xl font-extralight bg-linear-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent"><span className="text-4xl">99.9%</span></div>
                      <div>Uptime</div>
                    </div>
                  </div>
                  <div className="text-left space-y-4">
                    <div>
                      <h3 className="text-2xl font-medium text-white mb-2">Bulletproof Security</h3>
                      <p className="text-sm font-medium bg-linear-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">Sleep soundly at night</p>
                    </div>
                    <p className="text-gray-400 leading-relaxed">Enterprise-grade security without the enterprise complexity. Your site stays protected, your users stay safe.</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                      <span className="text-gray-300 text-sm">Advanced threat protection</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                      <span className="text-gray-300 text-sm">SSL &amp; encryption</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                      <span className="text-gray-300 text-sm">Regular security audits</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                      <span className="text-gray-300 text-sm">Compliance ready</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-white font-medium transition-all duration-300 translate-x-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-2">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Third Card */}
                <div className="relative p-8 space-y-8 rounded-3xl transform transition-transform duration-500 group hover:scale-105 border border-gray-800 hover:border-gray-700  bg-gray-900/50 hover:bg-linear-to-r from-violet-500/10 to-purple-500/10">
                  <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-violet-400 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl"></div>
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-16 rounded-2xl bg-linear-to-r from-violet-400 to-purple-500 flex items-center justify-center shadow-lg transform transition-transform duration-500 group-hover:rotate-5 group-hover:scale-110">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex flex-col text-gray-600 font-semibold text-right">
                      <div className="text-3xl font-extralight bg-linear-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent"><span className="text-4xl">+40%</span></div>
                      <div>Conversions</div>
                    </div>
                  </div>
                  <div className="text-left space-y-4">
                    <div>
                      <h3 className="text-2xl font-medium text-white mb-2">Conversion Magic</h3>
                      <p className="text-sm font-medium bg-linear-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">Turn visitors into customers</p>
                    </div>
                    <p className="text-gray-400 leading-relaxed">Every pixel is placed with purpose. We design experiences that guide users toward action.</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                      <span className="text-gray-300 text-sm">Psychology-driven design</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                      <span className="text-gray-300 text-sm">A/B tested layouts</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                      <span className="text-gray-300 text-sm">Mobile-first approach</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                      <span className="text-gray-300 text-sm">Accessibility focused</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-white font-medium transition-all duration-300 translate-x-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-2">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <div className="text-center transform transition-all duration-1000 delay-600 translate-y-0 opacity-100">
                <div className="bg-linear-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-700">
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h3 className="text-3xl font-light text-white">Ready to experience the difference?</h3>
                      <p className="text-xl text-gray-400 font-light">Let's build something that your competitors will wish they had</p>
                    </div>
                    <button className="group bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-5 rounded-2xl font-medium text-lg transition-all duration-300 flex items-center mx-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                      <span>Start Your Project</span>
                      <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-10 bg-linear-to-b from-gray-900 to-black">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-24 transform transition-all duration-1000 translate-y-0 opacity-100">
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium border border-green-500/20">
                <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                Success Stories
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-tight px-4">Real projects,<span className="block font-medium bg-linear-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">real results</span></h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed px-4">See how we've transformed businesses with custom solutions that deliver measurable impact</p>
            </div>
          </div>
        </div>

        <div className="px-5 max-w-6xl mx-auto">

          <div className="lg:hidden mb-8">
            <div className="flex items-center justify-between px-4">
              <button onClick={() => setActive((prev) => prev === 1 ? 3 : --prev)} className="w-10 h-10 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-600 transition-all duration-200">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="text-center">
                <span className="text-gray-400 text-sm">{active} of 3</span>
              </div>
              <button onClick={() => setActive((prev) => prev === 3 ? 1 : ++prev)} className="w-10 h-10 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-600 transition-all duration-200">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="hidden pb-10 lg:flex items-center justify-between gap-10">
            {departments.map((e) => (
              <button key={2 * e.id} className={active === e.id ? e.styleHover : e.style} onClick={() => setActive(e.id)}>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className={e.bulletDesign}></div>
                    <span className={`text-sm ${e.id === active ? "text-white" : "text-gray-400"} font-medium`}>{e.category}</span>
                  </div>
                  <h3 className="text-xl font-medium text-white">{e.projects}</h3>
                  <p className={`text-sm ${e.id === active ? "text-white" : "text-gray-400"}`}>{e.description}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="w-full h-[280px] lg:h-[500px] rounded-2xl overflow-hidden mb-12 sm:mb-16 lg:mb-20">
            {imageContainer.filter(e => e.id === active).map(e => (
              <div key={2 * e.id} className="relative w-full h-full">
                <div className={`absolute z-10 w-full h-full bg-linear-to-r ${e.gradient} opacity-20`}></div>
                <Image
                  className="w-full h-full object-cover"
                  src={e.image.src}
                  alt=""
                  width={900}
                  height={900}
                />
                <div className="absolute bottom-2 z-10 w-full p-4 sm:p-6 lg:p-8">
                  <div className="bg-black rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"><div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-white mb-2">{e.projects}</h3>
                      <p className={`text-sm sm:text-base lg:text-lg font-medium bg-linear-to-r ${e.gradient} bg-clip-text text-transparent`}>{e.description}</p>
                    </div>
                      <div className="flex gap-4 sm:gap-6">
                        <div className="flex items-center gap-2 text-white">
                          <CalendarRange className="w-4 h-4" />
                          <span className="text-sm">{e.months} months</span>
                        </div>
                        <div className="flex items-center gap-2 text-white">
                          <Tag className="w-4 h-4" />
                          <span className="text-sm">{e.category}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-12 sm:mb-16 lg:mb-20">
            <div className="space-y-6">
              <div>
                <h4 className="text-xl sm:text-2xl font-medium text-white mb-4">The Challenge</h4>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">TechFlow's outdated WordPress site was losing customers due to slow loading times and poor mobile experience. Cart abandonment was at 78%.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl sm:text-2xl font-medium text-white mb-4">Our Solution</h4>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">We built a custom React-based e-commerce platform with advanced caching, optimized checkout flow, and mobile-first design.</p>
              </div>
            </div>
          </div>

          <div className="mb-12 sm:mb-16 lg:mb-20">
            <h4 className="text-2xl sm:text-3xl font-light text-white mb-8 sm:mb-12 text-center">Key Results</h4>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              <div className="bg-gray-800/50 rounded-xl lg:rounded-2xl p-4 sm:p-6 border border-gray-700 text-center">
                <div className="space-y-3 sm:space-y-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-linear-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl lg:text-2xl font-light text-white">5x faster loading</div>
                    <div className="text-xs sm:text-sm text-gray-400 capitalize">speed</div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-xl lg:rounded-2xl p-4 sm:p-6 border border-gray-700 text-center">
                <div className="space-y-3 sm:space-y-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-linear-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto">
                    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl lg:text-2xl font-light text-white">+40% conversion rate</div>
                    <div className="text-xs sm:text-sm text-gray-400 capitalize">conversion</div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-xl lg:rounded-2xl p-4 sm:p-6 border border-gray-700 text-center">
                <div className="space-y-3 sm:space-y-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-linear-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto">
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl lg:text-2xl font-light text-white">+$2.3M annual revenue</div>
                    <div className="text-xs sm:text-sm text-gray-400 capitalize">revenue</div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-xl lg:rounded-2xl p-4 sm:p-6 border border-gray-700 text-center">
                <div className="space-y-3 sm:space-y-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-linear-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl lg:text-2xl font-light text-white">98% customer satisfaction</div>
                    <div className="text-xs sm:text-sm text-gray-400 capitalize">satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/30 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 border border-gray-700 mb-12 sm:mb-16 lg:mb-20">
            <h4 className="text-xl sm:text-2xl lg:text-3xl font-light text-white mb-8 sm:mb-12 text-center">Performance Breakdown</h4>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center space-y-2 md:space-y-4">
                <div className="space-y-3">
                  <div className="text-sm sm:text-base text-gray-400 font-medium">Page Load Time</div>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-500">Before: 8.2s</div>
                    <div className="text-sm lg:text-lg text-white font-medium">After: 1.6s</div>
                  </div>
                </div>
                <div className="text-xl sm:text-2xl font-light bg-linear-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">81% better</div>
              </div>
              <div className="text-center space-y-2 md:space-y-4">
                <div className="space-y-3">
                  <div className="text-sm text-gray-400 font-medium">Conversion Rate</div>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-500">Before: 2.1%</div>
                    <div className="text-sm lg:text-lg text-white font-medium">After: 2.9%</div>
                  </div>
                </div>
                <div className="text-xl sm:text-2xl font-light bg-linear-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">40% better</div>
              </div>
              <div className="text-center space-y-2 md:space-y-4">
                <div className="space-y-3">
                  <div className="text-sm text-gray-400 font-medium">Mobile Traffic</div>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-500">Before: 45%</div>
                    <div className="text-sm lg:text-lg text-white font-medium">After: 72%</div>
                  </div>
                </div>
                <div className="text-xl sm:text-2xl font-light bg-linear-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">60% better</div>
              </div>
              <div className="text-center space-y-2 md:space-y-4">
                <div className="space-y-3">
                  <div className="text-sm text-gray-400 font-medium">Cart Abandonment</div>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-500">Before: 78%</div>
                    <div className="text-sm lg:text-lg text-white font-medium">After: 52%</div>
                  </div>
                </div>
                <div className="text-xl sm:text-2xl font-light bg-linear-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">33% better</div>
              </div>
            </div>
          </div>

          <div className="mb-12 sm:mb-16 lg:mb-20">
            <h4 className="text-xl sm:text-2xl font-medium text-white mb-6 sm:mb-8 text-center">Technologies Used</h4>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <span className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-gray-600 transition-colors duration-200">React</span>
              <span className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-gray-600 transition-colors duration-200">Node.js</span>
              <span className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-gray-600 transition-colors duration-200">PostgreSQL</span>
              <span className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-gray-600 transition-colors duration-200">Redis</span>
              <span className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-gray-600 transition-colors duration-200">AWS</span>
            </div>
          </div>

          <div className="bg-linear-to-br from-blue-500 to-cyan-500 bg-opacity-10 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 border border-gray-600">
            <div className="text-center space-y-6 sm:space-y-8">
              <blockquote className="text-lg sm:text-xl lg:text-2xl font-light text-white leading-relaxed">"The difference is night and day. Our new custom site loads 5x faster than our old WordPress site, and our conversion rate increased by 40%."</blockquote>
              <div>
                <div className="font-medium text-white text-base sm:text-lg">Sarah Chen</div>
                <div className="text-gray-500 text-sm sm:text-base">Marketing Director</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16 sm:mt-20 lg:mt-24 transform transition-all duration-1000 delay-600 translate-y-0 opacity-100">
            <div className="bg-linear-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-8 sm:p-12 border border-gray-700">
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white">Ready for your success story?</h3>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-400 font-light max-w-2xl mx-auto">Let's build something that your competitors will wish they had</p>
                </div>
                <button className="group bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-xl lg:rounded-2xl font-medium text-base sm:text-lg transition-all duration-300 flex items-center mx-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <span>Start Your Project</span>
                  <ArrowRight className="ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </section>

      <section className="py-16 bg-linear-to-b from-black via-gray-900 to-black relative overflow-hidden">

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 lg:w-96 lg:h-96 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 lg:w-96 lg:h-96 bg-linear-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 transform transition-all duration-1000 translate-y-0 opacity-100">
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <div className="inline-flex items-center gap-2 lg:gap-3 bg-linear-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full px-3 sm:px-4 lg:px-6 py-2 lg:py-3">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-purple-400" />
                <span className="text-purple-400 font-medium text-xs sm:text-sm lg:text-base">How We Work</span>
              </div>
              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                <h2 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-light text-white leading-tight px-2">Simple process,<span className="block font-medium bg-linear-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">extraordinary results</span>
                </h2>
                <p className="text-sm sm:text-base lg:text-xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed px-4">Four phases that transform your vision into digital reality</p>
              </div>
            </div>
          </div>

          <div className="lg:hidden mb-8">
            <div className="relative">
              <div className="transform transition-all duration-700 translate-y-0 opacity-100">
                <div className="mx-4">
                  {cardsData.filter(e => e.id === activeSlide).map(e => (

                    <div key={e.id} className={`relative p-6 rounded-2xl border-2 bg-linear-to-br ${e.bgGradient} border-gray-600 shadow-2xl`}>
                      <div className="absolute -top-3 -left-3 w-8 h-8 bg-linear-to-r from-gray-800 to-gray-900 rounded-full border-2 border-gray-700 flex items-center justify-center">
                        <span className="text-white text-sm font-medium">{e.id}</span>
                      </div>
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-xl bg-linear-to-r ${e.gradient} flex items-center justify-center shadow-lg`}>
                            {e.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-medium text-white">{e.head3}</h3>
                            <p className={`text-sm font-medium bg-linear-to-r ${e.gradient} bg-clip-text text-transparent`}>{e.smallDesc}</p>
                          </div>
                        </div>
                        <p className="text-gray-400 leading-relaxed">{e.para}</p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full shrink-0"></div>
                            <span className="text-gray-300 text-sm">{e.point1}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full shrink-0"></div>
                            <span className="text-gray-300 text-sm">{e.point2}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full shrink-0"></div>
                            <span className="text-gray-300 text-sm">{e.point3}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center mt-6 px-4">
                <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200">
                  <div onClick={() => { setActiveSlide((prev) => prev === 1 ? 4 : --prev); setHoverActive((prev) => prev === 1 ? 4 : --prev) }} className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700">
                    <ArrowRight className="w-4 h-4 rotate-180" />
                  </div>
                  <span className="text-sm">Previous</span>
                </button>
                <div className="text-center">
                  <span className="text-gray-400 text-sm">{activeSlide} of 4</span>
                </div>
                <button onClick={() => { setActiveSlide((prev) => prev === 4 ? 1 : ++prev); setHoverActive((prev) => prev === 4 ? 1 : ++prev) }} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"><span className="text-sm">Next</span>
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="hidden lg:block pb-20">
            <div className="relative">

              <div className="absolute top-16 left-0 right-0 h-0.5 bg-[linear-gradient(to_right,#3b82f6_0%,#f59e0b_30%,#10b981_60%,#ec4899_100%)]"></div>

              <div className="grid grid-cols-4 gap-6">

                <div
                  onMouseOver={() => { setHoverActive(1); setActiveSlide(1) }}
                  className="group relative transform transition-all duration-700 cursor-pointer translate-y-0 opacity-100" style={{ transitionDelay: "0ms" }}>
                  <div className="flex justify-center mb-8">
                    <div className={`relative w-20 h-20 rounded-full border-4 flex items-center justify-center transition-all duration-500 bg-gray-900 border-gray-700 ${hoverActive === 1 ? hoverClasses : ""}`}>
                      <MessageSquare className={`w-8 h-8 transition-colors duration-300 ${hoverActive === 1 ? "text-white" : "text-gray-500"}`} />
                      <div className={`${hoverActive === 1 ? "absolute" : ""} inset-0 rounded-full bg-linear-to-r from-blue-400 to-cyan-500 animate-ping opacity-20`}></div>
                      <div className={`${hoverActive === 1 ? "absolute" : ""} -inset-4 rounded-full bg-linear-to-r from-blue-400 to-cyan-500 opacity-10 blur-lg`}></div>
                    </div>
                  </div>
                  <div className={`p-8 rounded-3xl border-2 transition-all duration-500 h-full bg-gray-900/50 border-gray-800 hover:shadow-lg ${hoverActive === 1 ? "bg-linear-to-br from-blue-500/10 to-cyan-500/10 border-gray-600! shadow-2xl scale-105" : ""}`}>
                    <div className="space-y-6 text-center">
                      <div className="space-y-3">
                        <h3 className="text-2xl font-medium text-white">Listen</h3>
                        <p className="text-base font-medium bg-linear-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">Your vision, our ears</p>
                      </div>
                      <p className="text-gray-400 leading-relaxed">We start by understanding your dreams, challenges, and what success looks like to you.</p>
                      <div className="space-y-4 flex flex-col items-start">
                        <div className="flex items-center gap-5 justify-center">
                          <div className="w-2 h-2 bg-gray-500 rounded-full shrink-0"></div>
                          <span className="text-gray-300 text-sm">Deep discovery sessions</span>
                        </div>
                        <div className="flex items-center gap-5 justify-center">
                          <div className="w-2 h-2 bg-gray-500 rounded-full shrink-0"></div>
                          <span className="text-gray-300 text-sm">Goal alignment</span>
                        </div>
                        <div className="flex items-center gap-5 justify-center">
                          <div className="w-2 h-2 bg-gray-500 rounded-full shrink-0"></div>
                          <span className="text-gray-300 text-sm">Success metrics definition</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  onMouseOver={() => { setHoverActive(2); setActiveSlide(2) }}
                  className="relative transform transition-all duration-700 cursor-pointer translate-y-0 opacity-100" style={{ transitionDelay: "150ms" }}>
                  <div className="flex justify-center mb-8">
                    <div className={`relative w-20 h-20 rounded-full border-4 flex items-center justify-center transition-all duration-500 bg-gray-900 border-gray-700 ${hoverActive === 2 ? "bg-linear-to-r from-amber-400 to-orange-500 border-transparent shadow-2xl scale-110" : ""}`}>
                      <Lightbulb className={`w-8 h-8 transition-colors duration-300 ${hoverActive === 2 ? "text-white" : "text-gray-500"}`} />
                      <div className={`${hoverActive === 2 ? "absolute" : ""} inset-0 rounded-full bg-linear-to-r from-amber-400 to-orange-500 animate-ping opacity-20`}></div>
                      <div className={`${hoverActive === 2 ? "absolute" : ""} -inset-4 rounded-full bg-linear-to-r from-amber-400 to-orange-500 opacity-10 blur-lg`}></div>
                    </div>
                  </div>
                  <div className={`p-8 rounded-3xl border-2 transition-all duration-500 h-full bg-gray-900/50 border-gray-800  hover:shadow-lg ${hoverActive === 2 ? "bg-linear-to-r from-amber-400/10 to-orange-500/10 border-gray-600! shadow-2xl scale-105" : ""}`}>
                    <div className="space-y-6 text-center">
                      <div className="space-y-3">
                        <h3 className="text-2xl font-medium text-white">Ideate</h3>
                        <p className="text-base font-medium bg-linear-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Where magic begins</p>
                      </div>
                      <p className="text-gray-400 leading-relaxed">We transform your vision into a strategic blueprint that balances ambition with reality.</p>
                      <div className="space-y-4 flex flex-col items-start">
                        <div className="flex items-center gap-5 justify-center">
                          <div className="w-2 h-2 bg-gray-500 rounded-full shrink-0"></div>
                          <span className="text-gray-300 text-sm">Strategic planning</span>
                        </div>
                        <div className="flex items-center gap-5 justify-center">
                          <div className="w-2 h-2 bg-gray-500 rounded-full shrink-0"></div>
                          <span className="text-gray-300 text-sm">User experience design</span>
                        </div>
                        <div className="flex items-center gap-5 justify-center">
                          <div className="w-2 h-2 bg-gray-500 rounded-full shrink-0"></div>
                          <span className="text-gray-300 text-sm">Technical architecture</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  onMouseOver={() => { setHoverActive(3); setActiveSlide(3) }}
                  className="group relative transform transition-all duration-700 cursor-pointer translate-y-0 opacity-100" style={{ transitionDelay: "150ms" }}>
                  <div className="flex justify-center mb-8">
                    <div className={`relative w-20 h-20 rounded-full border-4 flex items-center justify-center transition-all duration-500 bg-gray-900 border-gray-700 ${hoverActive === 3 ? "bg-linear-to-r from-emerald-400 to-green-500 border-transparent shadow-2xl scale-110" : ""}`}>
                      <Rocket className={`w-8 h-8 transition-colors duration-300 ${hoverActive === 3 ? "text-white" : "text-gray-500"}`} />
                      <div className={`${hoverActive === 3 ? "absolute" : ""} inset-0 rounded-full bg-linear-to-r from-emerald-400 to-green-500 animate-ping opacity-20`}></div>
                      <div className={`${hoverActive === 3 ? "absolute" : ""} -inset-4 rounded-full bg-linear-to-r from-emerald-400 to-green-500 opacity-10 blur-lg`}></div>
                    </div>
                  </div>
                  <div className={`p-8 rounded-3xl border-2 transition-all duration-500 h-full bg-gray-900/50 border-gray-800 hover:shadow-lg ${hoverActive === 3 ? "bg-linear-to-r from-emerald-400/10 to-green-500/10 border-gray-600! shadow-2xl scale-105" : ""}`}>
                    <div className="space-y-6 text-center">
                      <div className="space-y-3">
                        <h3 className="text-2xl font-medium text-white">Create</h3>
                        <p className="text-base font-medium bg-linear-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">Bringing ideas to life</p>
                      </div>
                      <p className="text-gray-400 leading-relaxed">This is where the real magic happens. We build, test, and perfect every detail.</p>
                      <div className="space-y-4 flex flex-col items-start">
                        <div className="flex items-center gap-5 justify-center">
                          <div className="w-2 h-2 bg-gray-500 rounded-full shrink-0"></div>
                          <span className="text-gray-300 text-sm">Custom development</span>
                        </div>
                        <div className="flex items-center gap-5 justify-center">
                          <div className="w-2 h-2 bg-gray-500 rounded-full shrink-0"></div>
                          <span className="text-gray-300 text-sm">Quality assurance</span>
                        </div>
                        <div className="flex items-center gap-5 justify-center">
                          <div className="w-2 h-2 bg-gray-500 rounded-full shrink-0"></div>
                          <span className="text-gray-300 text-sm">Performance optimization</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  onMouseOver={() => { setHoverActive(4); setActiveSlide(4) }}
                  className="group relative transform transition-all duration-700 cursor-pointer translate-y-0 opacity-100" style={{ transitionDelay: "150ms" }}>
                  <div className="flex justify-center mb-8">
                    <div className={`relative w-20 h-20 rounded-full border-4 flex items-center justify-center transition-all duration-500 bg-gray-900 border-gray-700 ${hoverActive === 4 ? "bg-linear-to-r from-pink-400 to-rose-500 border-transparent shadow-2xl scale-110" : ""}`}>
                      <Heart className={`w-8 h-8 transition-colors duration-300 ${hoverActive === 4 ? "text-white" : "text-gray-500"}`} />
                      <div className={`${hoverActive === 4 ? "absolute" : ""} inset-0 rounded-full bg-linear-to-r from-pink-400 to-rose-500 animate-ping opacity-20`}></div>
                      <div className={`${hoverActive === 4 ? "absolute" : ""} -inset-4 rounded-full bg-linear-to-r from-pink-400 to-rose-500 opacity-10 blur-lg`}></div>
                    </div>
                  </div>
                  <div className={`p-8 rounded-3xl border-2 transition-all duration-500 h-full bg-gray-900/50 border-gray-800 hover:shadow-lg ${hoverActive === 4 ? "bg-linear-to-r from-pink-400/10 to-rose-500/10 border-gray-600! shadow-2xl scale-105" : ""}`}>
                    <div className="space-y-6 text-center">
                      <div className="space-y-3">
                        <h3 className="text-2xl font-medium text-white">Deliver</h3>
                        <p className="text-base font-medium bg-linear-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">Your success, our pride</p>
                      </div>
                      <p className="text-gray-400 leading-relaxed">We launch with confidence and stay by your side to ensure continued success.</p>
                      <div className="space-y-4 flex flex-col items-start">
                        <div className="flex items-center gap-5 justify-center">
                          <div className="w-2 h-2 bg-gray-500 rounded-full shrink-0"></div>
                          <span className="text-gray-300 text-sm">Seamless deployment</span>
                        </div>
                        <div className="flex items-center gap-5 justify-center">
                          <div className="w-2 h-2 bg-gray-500 rounded-full shrink-0"></div>
                          <span className="text-gray-300 text-sm">Training & support</span>
                        </div>
                        <div className="flex items-center gap-5 justify-center">
                          <div className="w-2 h-2 bg-gray-500 rounded-full shrink-0"></div>
                          <span className="text-gray-300 text-sm">Ongoing optimization</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="py-1 lg:py-20 bg-linear-to-b from-black to-gray-900">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium border border-yellow-500/20">
              <Star className="w-4 h-4 fill-current" />
              Client Success Stories
            </div>
            <h2 className="text-center text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight">Results that speak<span className="block font-medium bg-linear-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">for themselves</span></h2>
            <p className="text-center text-lg lg:text-xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">Don't just take our word for it. Here's what happens when businesses choose custom over templates.</p>
          </div>

          {clientStoriesData.filter(e => e.id === clientStoreis).map(e => (
            <div key={e.id} className="relative mb-12 lg:mb-16">
              <div className="bg-gray-800/50 rounded-2xl lg:rounded-3xl shadow-2xl border border-gray-700 overflow-hidden">
                <div className="flex flex-col lg:grid lg:grid-cols-3 gap-0">
                  <div className="lg:col-span-2 p-6 lg:p-12">
                    <div className="space-y-6 lg:space-y-8">
                      <div className="relative">
                        <Quote className="absolute -top-2 lg:-top-4 -left-1 lg:-left-2 w-8 h-8 lg:w-12 lg:h-12 text-gray-700" />
                        <blockquote className="text-xl lg:text-2xl xl:text-3xl font-light text-white leading-relaxed pl-6 lg:pl-8">"{e.para}"</blockquote>
                      </div>
                      <div className="flex items-center gap-4 lg:gap-6">
                        <div className="relative">
                          <div className={`absolute inset-0 bg-linear-to-r ${e.bgGradient} rounded-full blur-lg opacity-30`}></div>
                          <Image
                            src={e.clientAvatar}
                            alt={"user avatar"}
                            width={300}
                            height={300}
                            className="relative w-12 h-12 lg:w-16 lg:h-16 rounded-full object-cover border-4 border-gray-700 shadow-lg"
                          />
                        </div>
                        <div>
                          <div className="font-medium text-white text-lg lg:text-xl">{e.clientName}</div>
                          <div className="text-gray-400 text-sm lg:text-base">{e.clientCompany}</div>
                          <div className="text-gray-500 text-xs lg:text-sm">{e.clientRank}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-400 fill-current" />
                        <Star className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-400 fill-current" />
                        <Star className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-400 fill-current" />
                        <Star className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-400 fill-current" />
                        <Star className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-400 fill-current" />
                        <span className="ml-2 text-gray-400 font-medium text-sm lg:text-base">5.0 out of 5</span>
                      </div>
                    </div>
                  </div>
                  <div className={`bg-linear-to-br ${e.bgGradient} p-6 lg:p-12 text-white`}>
                    <div className="space-y-6 lg:space-y-8">
                      <h3 className="text-xl lg:text-2xl font-medium">Project Results</h3>
                      <div className="space-y-4 lg:space-y-6">
                        <div className="flex items-center gap-3 lg:gap-4">
                          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/20 rounded-xl flex items-center justify-center">
                            <Zap className="w-5 h-5 lg:w-6 lg:h-6" />
                          </div>
                          <div>
                            <div className="text-2xl lg:text-3xl font-light">{e.smallPara1}</div>
                            <div className="text-white/80 text-sm lg:text-base">Loading Speed</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 lg:gap-4">
                          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/20 rounded-xl flex items-center justify-center">
                            <TrendingUp className="w-5 h-5 lg:w-6 lg:h-6" />
                          </div>
                          <div>
                            <div className="text-2xl lg:text-3xl font-light">{e.smallPara2}</div>
                            <div className="text-white/80 text-sm lg:text-base">Conversion Rate</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 lg:gap-4">
                          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/20 rounded-xl flex items-center justify-center">
                            <Users className="w-5 h-5 lg:w-6 lg:h-6" />
                          </div>
                          <div>
                            <div className="text-2xl lg:text-3xl font-light">{e.smallPara3}</div>
                            <div className="text-white/80 text-sm lg:text-base">Client Satisfaction</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 lg:gap-6 mt-6 lg:mt-8">
                <button onClick={() => setClientStories((prev) => prev === 1 ? 3 : --prev)} className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-600 transition-all duration-200 shadow-sm hover:shadow-md">
                  <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
                </button>
                <div className="flex gap-2 lg:gap-3">
                  <button onClick={() => setClientStories(1)} className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-200 ${clientStoreis === 1 ? "bg-white scale-125" : "bg-gray-600 hover:bg-gray-500"}`}></button>
                  <button onClick={() => setClientStories(2)} className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-200 ${clientStoreis === 2 ? "bg-white scale-125" : "bg-gray-600 hover:bg-gray-500"}`}></button>
                  <button onClick={() => setClientStories(3)} className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-200 ${clientStoreis === 3 ? "bg-white scale-125" : "bg-gray-600 hover:bg-gray-500"}`}></button>
                </div>
                <button onClick={() => setClientStories((prev) => prev === 3 ? 1 : ++prev)} className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-600 transition-all duration-200 shadow-sm hover:shadow-md">
                  <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
                </button>
              </div>
            </div>
          ))}


          <div className="hidden lg:grid md:grid-cols-3 gap-8">
            <button onClick={() => setClientStories(1)} className={`text-left p-6 rounded-2xl border-2 transition-all duration-300 ${clientStoreis === 1 ? "border-gray-600 bg-gray-800/50 scale-105" : "border-gray-700 bg-gray-800/30 hover:border-gray-600 hover:shadow-md"}`}>
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={sarah}
                  alt={"user avatar"}
                  width={300}
                  height={300}
                  className="relative w-12 h-12 lg:w-16 lg:h-16 rounded-full object-cover border-4 border-gray-700 shadow-lg"
                />
                <div>
                  <div className="font-medium text-white">Sarah Chen</div>
                  <div className="text-sm text-gray-400">TechFlow Solutions</div>
                </div>
              </div>
              <div className="flex space-x-1 mb-3">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">"The difference is night and day. Our new custom site loads 5x faster than our old WordPress site, and our conversion rate increased by 40%. The team's attention to detail and technical expertise is unmatched."</p>
            </button>
            <button onClick={() => setClientStories(2)} className={`text-left p-6 rounded-2xl border-2 transition-all duration-300 ${clientStoreis === 2 ? "border-gray-600 bg-gray-800/50 scale-105" : "border-gray-700 bg-gray-800/30 hover:border-gray-600 hover:shadow-md"}`}>
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={Marcus}
                  alt={"user avatar"}
                  width={300}
                  height={300}
                  className="relative w-12 h-12 lg:w-16 lg:h-16 rounded-full object-cover border-4 border-gray-700 shadow-lg"
                />
                <div>
                  <div className="font-medium text-white">Marcus Rodriguez</div>
                  <div className="text-sm text-gray-400">innovativeLab</div>
                </div>
              </div>
              <div className="flex space-x-1 mb-3">
                <div className="flex space-x-1 mb-3">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">"As a technical founder, I was skeptical about outsourcing development. But their code quality and architecture decisions were better than what my...</p>
            </button>
            <button onClick={() => setClientStories(3)} className={`text-left p-6 rounded-2xl border-2 transition-all duration-300 ${clientStoreis === 3 ? "border-gray-600 bg-gray-800/50 scale-105" : "border-gray-700 bg-gray-800/30 hover:border-gray-600 hover:shadow-md"}`}>
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={emily}
                  alt={"user avatar"}
                  width={300}
                  height={300}
                  className="relative w-12 h-12 lg:w-16 lg:h-16 rounded-full object-cover border-4 border-gray-700 shadow-lg"
                />
                <div>
                  <div className="font-medium text-white">Emily Watson</div>
                  <div className="text-sm text-gray-400">GrowthCorp</div>
                </div>
              </div>
              <div className="flex space-x-1 mb-3">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">"They didn't just build us a website—they built us a growth engine. The custom CMS is intuitive, the performance is incredible, and our team can finally...</p>
            </button>
          </div>
        </div>

      </section>

      <section className="py-24 bg-linear-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/20"><Sparkles className="w-4 h-4" />Let's Build Something Amazing</div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight">Ready to transform<span className="block font-medium bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">your digital presence?</span>
            </h2>
            <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">Let's discuss your project and show you what's possible with a custom solution. Get a detailed proposal within 48 hours.</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-medium text-white">What happens next?</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center shrink-0 border border-blue-500/20">
                      <CalendarRange className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="font-medium text-white mb-1">Free consultation call</div>
                      <div className="text-gray-400 text-sm leading-relaxed">We'll discuss your project goals and requirements in detail</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center shrink-0 border border-blue-500/20">
                      <CheckCircle className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="font-medium text-white mb-1">Custom proposal</div>
                      <div className="text-gray-400 text-sm leading-relaxed">Receive a detailed project plan with timeline and pricing</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center shrink-0 border border-blue-500/20">
                      <ArrowRight className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="font-medium text-white mb-1">Project kickoff</div>
                      <div className="text-gray-400 text-sm leading-relaxed">Start building your custom solution with our expert team</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-medium text-white">Get in touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
                      <Mail className="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Email</div>
                      <div className="font-medium text-white">hello@stackwright.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
                      <Phone className="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Phone</div>
                      <div className="font-medium text-white">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
                      <MapPin className="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Location</div>
                      <div className="font-medium text-white">San Francisco, CA</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-gray-800/50 rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-700">
                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-white">Full Name *</label>
                      <input type="text" id="name" name="name" required className="w-full px-4 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-gray-800 transition-all duration-200" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-white">Email Address *</label>
                      <input type="email" id="email" name="email" required className="w-full px-4 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-gray-800 transition-all duration-200" placeholder="john@company.com" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="company" className="block text-sm font-medium text-white">Company Name *</label>
                      <input type="text" id="name" name="name" required className="w-full px-4 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-gray-800 transition-all duration-200" placeholder="Your Company Inc." />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="url" className="block text-sm font-medium text-white">Current Website *</label>
                      <input type="url" id="website" name="url" required className="w-full px-4 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-gray-800 transition-all duration-200" placeholder="https://yoursite.com" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="projectType" className="block text-sm font-medium text-white">Project Type</label>
                      <select id="projectType" name="projectType" className="w-full px-4 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-gray-800 transition-all duration-200">
                        <option value="">Select type</option>
                        <option value="website-redesign">Website Redesign</option>
                        <option value="web-application">Web Application</option>
                        <option value="e-commerce">E-commerce Site</option>
                        <option value="mobile-app">Mobile App</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="budget" className="block text-sm font-medium text-white">Budget Range</label>
                      <select id="budget" name="budget" className="w-full px-4 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-gray-800 transition-all duration-200">
                        <option value="">Select budget</option>
                        <option value="10k-25k">$10k - $25k</option>
                        <option value="25k-50k">$25k - $50k</option>
                        <option value="50k-100k">$50k - $100k</option>
                        <option value="100k+">$100k+</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="timeline" className="block text-sm font-medium text-white">Timeline</label>
                      <select id="timeline" name="timeline" className="w-full px-4 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-gray-800 transition-all duration-200">
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-3-months">1-3 months</option>
                        <option value="3-6-months">3-6 months</option>
                        <option value="6-months+">6+ months</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-white">Project Details</label>
                    <textarea id="message" name="message" rows={5} className="w-full px-4 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-gray-800 transition-all duration-200 resize-none" placeholder="Tell us about your project goals, current challenges, and what success looks like to you..."></textarea>
                  </div>
                  <button type="submit" className="group w-full bg-white hover:bg-gray-100 disabled:bg-gray-600 text-gray-900 disabled:text-gray-400 py-5 px-8 rounded-xl font-medium text-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none">
                    <span className="relative z-10">Send Message</span>
                    <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10" />
                  </button>
                  <p className="text-center text-gray-500 text-sm">We'll get back to you within 24 hours with a detailed response.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="py-24">
            <div className="flex justify-center">
              <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 max-w-4xl w-full">
                <div className="space-y-8 text-center lg:text-left">
                  <div className="space-y-6">
                    <h3 className="text-4xl font-light text-white">Stackwright</h3>
                    <p className="text-xl text-gray-400 font-light leading-relaxed">We craft bespoke web experiences that outperform templates in speed, conversions, and user satisfaction.</p>
                  </div>
                  <div className="flex space-x-6 justify-center lg:justify-start">
                    <Link href="#" className="w-12 h-12 bg-gray-900 hover:bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 border border-gray-800 hover:border-gray-700">
                      <LuLinkedin className="w-5 h-5" />
                    </Link>
                    <Link href="#" className="w-12 h-12 bg-gray-900 hover:bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 border border-gray-800 hover:border-gray-700">
                      <LuTwitter className="w-5 h-5" />
                    </Link>
                    <Link href="#" className="w-12 h-12 bg-gray-900 hover:bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 border border-gray-800 hover:border-gray-700">
                      <LuGithub className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
                <div className="space-y-8 text-center lg:text-left">
                  <h4 className="text-2xl font-light text-white">Get In Touch</h4>
                  <div className="space-y-6 grid grid-rows-3 items-start justify-center md:justify-start">
                    <Link href="mailto:hello@stackwright.com" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors duration-200 group justify-start">
                      <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center border border-gray-800 group-hover:border-gray-700 transition-colors duration-200">
                        <Mail className="w-5 h-5" />
                      </div>
                      <span className="font-light text-lg">hello@stackwright.com</span>
                    </Link>
                    <Link href="tel:+15551234567" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors duration-200 group justify-start">
                      <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center border border-gray-800 group-hover:border-gray-700 transition-colors duration-200">
                        <Phone className="w-5 h-5" />
                      </div>
                      <span className="font-light text-lg">+1 (555) 123-4567</span>
                    </Link>
                    <Link href="#" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors duration-200 group justify-start">
                      <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center border border-gray-800 group-hover:border-gray-700 transition-colors duration-200">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <span className="font-light text-lg">San Francisco, CA</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
              <div className="text-gray-400 font-light">
                <p>© 2025 Stackwright. All rights reserved.</p>
              </div>
              <div className="flex items-center gap-8 text-gray-400 font-light">
                <Link href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
                <Link href="#" className="hover:text-white transition-colors duration-200">Terms of Service</Link>
                <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="w-10 h-10 bg-gray-900 hover:bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 border border-gray-800 hover:border-gray-700 ml-4" aria-label="Scroll to top">
                  <ArrowUp className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}