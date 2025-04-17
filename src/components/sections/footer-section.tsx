"use client";

import { motion } from "framer-motion";
import { Video, Github, Twitter, Youtube, Mail } from "lucide-react";

const SOCIAL_LINKS = [
  { icon: <Github className="w-5 h-5" />, label: "GitHub", href: "#" },
  { icon: <Twitter className="w-5 h-5" />, label: "Twitter", href: "#" },
  { icon: <Youtube className="w-5 h-5" />, label: "YouTube", href: "#" },
  { icon: <Mail className="w-5 h-5" />, label: "Email", href: "#" },
];

export function FooterSection() {
  return (
    <footer className="relative w-full py-16 px-4 bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-900">
      <div className="relative z-10 container mx-auto max-w-7xl">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Video className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              VideoEditor
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 max-w-md">
              The most intuitive online video editor. Create stunning content in
              minutes with professional tools designed for everyone.
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 flex items-center justify-center transition-all duration-200 hover:scale-110 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Product</h4>
            <ul className="space-y-2">
              {["Features", "Pricing", "Templates", "Tutorials"].map((link, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Support</h4>
            <ul className="space-y-2">
              {["Help Center", "Community", "Contact", "Status"].map((link, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm"
        >
          <div className="text-slate-600 dark:text-slate-400">
            © 2024 VideoEditor. All rights reserved.
          </div>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
