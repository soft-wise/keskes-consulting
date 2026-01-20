"use client";

import Link from "next/link";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { IconBulb, IconChartBar, IconCloud, IconBrain } from "@tabler/icons-react";
import Button from "@/components/ui/Button";
import Section from "@/components/utils/Section";
import Card from "@/components/ui/Card";
import styles from "./page.module.css";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      {/* Hero Section with Aurora Effect */}
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <h1 className="text-3xl md:text-7xl font-bold text-center font-serif text-burgundy-900">
             Data strategy that moves <br /> <span className="text-burgundy-700">business forward</span>
          </h1>
          <p className="font-light text-base md:text-2xl text-neutral-600 py-4 text-center max-w-2xl">
            We help forward-thinking companies unlock the true potential of their data through expert consulting and actionable insights.
          </p>
          <div className="flex gap-4">
            <Link href="/contact" className="bg-burgundy-700 rounded-full w-fit text-white px-6 py-3 font-medium hover:bg-burgundy-800 transition-colors shadow-lg hover:shadow-xl hover:scale-105 transform duration-200">
              Get Started
            </Link>
             <Link href="/case-studies" className="bg-white border border-neutral-200 rounded-full w-fit text-neutral-800 px-6 py-3 font-medium hover:bg-neutral-50 transition-colors hover:scale-105 transform duration-200">
              View Our Work
            </Link>
          </div>
        </motion.div>
      </AuroraBackground>

      {/* Services Preview with Bento Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="text-center mb-12"
           >
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-800 mb-4 font-serif">What we do</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Comprehensive data solutions for modern enterprises.
            </p>
          </motion.div>
          
          <BentoGrid className="max-w-4xl mx-auto">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}

                icon={item.icon}
                className={i === 1 || i === 2 ? "md:col-span-1" : ""}
              />
            ))}
          </BentoGrid>
          
          <div className="flex justify-center mt-10">
             <Link href="/services" className="text-burgundy-700 font-medium hover:underline flex items-center gap-2 group">
                View all services <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
             </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Preview with Hover Effect */}
       <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="mb-10 text-center"
           >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-neutral-900">Real results from real work</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">See how we have helped other businesses transform their data interactively.</p>
          </motion.div>
          
          <HoverEffect items={projects} />
          
          <div className="flex justify-center mt-8">
             <Link href="/case-studies" className="text-burgundy-700 font-medium hover:underline flex items-center gap-2 group">
                View all case studies <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
             </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-burgundy-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-multiply"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-6 font-serif text-burgundy-900"
          >
            Let’s talk about your data
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-burgundy-800 max-w-2xl mx-auto mb-10"
          >
            Ready to transform your business? Schedule a free consultation with our experts today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/contact" className="bg-burgundy-700 text-white rounded-full px-8 py-4 font-bold text-lg hover:bg-burgundy-800 transition-all shadow-lg hover:shadow-burgundy-200/50 transform hover:-translate-y-1 inline-block">
                Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}



const items = [
  {
    title: "Strategic Data Roadmaps",
    description: "Align your data initiatives with 10x business growth objectives. We map the path from chaos to clarity.",
    icon: <div className="p-3 bg-burgundy-50 w-fit rounded-lg"><IconBulb className="h-6 w-6 text-burgundy-700" /></div>,
  },
  {
    title: "Scalable Data Foundations",
    description: "Engineering robust pipelines that handle petabytes with millisecond latency. Built for future growth.",
    icon: <div className="p-3 bg-burgundy-50 w-fit rounded-lg"><IconChartBar className="h-6 w-6 text-burgundy-700" /></div>,
  },
  {
    title: "Seamless Cloud Migration",
    description: "Modernize legacy systems with 0% downtime and improved security. Move faster, safer.",
    icon: <div className="p-3 bg-burgundy-50 w-fit rounded-lg"><IconCloud className="h-6 w-6 text-burgundy-700" /></div>,
  },
  {
    title: "Actionable AI & ML",
    description: "Deploy predictive models that directly impact the bottom line. Turn data into decisions.",
    icon: <div className="p-3 bg-burgundy-50 w-fit rounded-lg"><IconBrain className="h-6 w-6 text-burgundy-700" /></div>,
  },
];

const projects = [
    {
        title: "Scaling Fintech Infrastructure",
        description: "Reduced query latency by 40% and saved $2M in annual cloud costs for a global bank.",
        link: "/case-studies/case-1",
        tag: "Fintech"
    },
    {
        title: "Real-time E-commerce Analytics",
        description: "Boosted conversion rates by 15% ($500k/mo) through instant customer behavior insights.",
        link: "/case-studies/case-2",
        tag: "E-commerce"
    },
    {
        title: "Predictive IoT Maintenance",
        description: "Eliminated unplanned downtime, increasing manufacturing output by 25%.",
        link: "/case-studies/case-3",
        tag: "Manufacturing"
    }
];
