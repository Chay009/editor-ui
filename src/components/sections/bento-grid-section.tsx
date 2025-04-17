"use client";

import { motion } from "framer-motion";
import { Zap, CheckCircle2, Sparkles, Gauge, Cloud, Users2 } from "lucide-react";
import { GridPattern } from "../ui/shadcn-io/grid-pattern";
import { BackgroundGradient } from "../ui/shadcn-io/background-gradient";

const BENTO_FEATURES = [
  {
    icon: <Gauge className="w-6 h-6 text-white" />,
    title: "Hardware Acceleration",
    description: "Leverage GPU power for blazing fast rendering and real-time effects",
    gradient: "from-violet-600 to-indigo-600",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-white" />,
    title: "Real-time Preview",
    description: "See your edits instantly without any lag or buffering",
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    icon: <Cloud className="w-6 h-6 text-white" />,
    title: "Cloud Storage",
    description: "All your assets synced and accessible from anywhere",
    gradient: "from-emerald-600 to-teal-600",
  },
  {
    icon: <Users2 className="w-6 h-6 text-white" />,
    title: "Team Collaboration",
    description: "Work together in shared workspaces with version control",
    gradient: "from-orange-600 to-amber-600",
  },
];

export function BentoGridSection() {
  return (
    <section className="relative w-full py-32 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 overflow-hidden">
      <GridPattern className="absolute inset-0" />
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400 text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>Lightning Fast</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Built for speed and{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              precision
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Our engine handles heavy lifting in the cloud, so you can edit
            smoothly on any device. No downloads, no waiting.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {BENTO_FEATURES.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <div className="group relative h-full">
                {/* Gradient border effect */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500" />

                {/* Card content */}
                <div className="relative h-full min-h-[320px] rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col">
                  {/* Icon with gradient background */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-20 blur-xl rounded-2xl`} />
                    <div
                      className={`relative inline-flex p-5 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      {feature.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed flex-grow">
                    {feature.description}
                  </p>

                  {/* Decorative gradient line */}
                  <div className="mt-8 flex items-center gap-3">
                    <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${feature.gradient} group-hover:w-24 transition-all duration-300`} />
                    <div className={`h-1 w-8 rounded-full bg-gradient-to-r ${feature.gradient} opacity-50`} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { label: "Render Speed", value: "10x Faster" },
            { label: "Cloud Storage", value: "Unlimited" },
            { label: "Export Quality", value: "Up to 4K" },
            { label: "Collaboration", value: "Real-time" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-800 border border-slate-200 dark:border-slate-700 group hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  {stat.label}
                </p>
              </div>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">
                {stat.value}
              </p>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
