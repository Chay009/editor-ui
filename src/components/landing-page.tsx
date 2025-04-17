"use client";

import { useRouter } from "next/navigation";
import { Navbar05 } from "./ui/shadcn-io/navbar-05";
import { HeroGeometric } from "./ui/shadcn-io/shape-landing-hero";
import { AnimatedTestimonials } from "./ui/shadcn-io/animated-testimonials";
import { Carousel, Card } from "./ui/shadcn-io/apple-cards-carousel";
import { FeaturesSection } from "./sections/features-section";
import { BentoGridSection } from "./sections/bento-grid-section";
import { CTASection } from "./sections/cta-section";
import { FooterSection } from "./sections/footer-section";
import { GridPattern } from "./ui/shadcn-io/grid-pattern";

export function LandingPage() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/edit");
  };

  const handleNavCTA = () => {
    router.push("/edit");
  };

  return (
    <div className="w-full min-h-screen bg-white dark:bg-slate-950 font-sans selection:bg-indigo-500/30">
      {/* Navbar */}
      <Navbar05
        navigationLinks={[
          { href: "#features", label: "Features" },
          { href: "#showcase", label: "Example" },
          { href: "#reviews", label: "Reviews" },
        ]}
        ctaText="Start Creating"
        onCtaClick={handleNavCTA}
        className="!bg-white/50 dark:!bg-slate-950/50 !border-transparent backdrop-blur-md fixed top-0 w-full z-50"
      />

      {/* Hero Section - Geometric Background */}
      <HeroGeometric
        badge="v2.0 Now Available"
        title1="Edit Video"
        title2="Like Magic"
        description="The most intuitive online video editor. Drag, drop, and create stunning content in minutes. No installation required."
        ctaText="Start Editing Free"
        onCTA={handleGetStarted}
        className=""
      />

      {/* Features Section - Redesigned with Animated Beams and Reveal Text */}
      <FeaturesSection />

      {/* Bento Grid / Feature Highlight Section - Redesigned with 3D Cards */}
      <BentoGridSection />

      {/* Templates Carousel */}
      <section
        id="showcase"
        className="relative w-full py-32 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 overflow-hidden"
      >
        <GridPattern className="absolute inset-0" />
        <div className="container mx-auto px-4 mb-16 text-center">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Start with a Template
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Professional designs ready for your content. Customize in seconds.
          </p>
        </div>
        <Carousel
          items={CAROUSEL_ITEMS.map((card, index) => (
            <Card key={card.src} card={card} index={index} />
          ))}
        />
      </section>

      {/* Testimonials */}
      <section id="reviews" className="relative w-full bg-slate-50 dark:bg-slate-950 py-32 overflow-hidden">
        <GridPattern className="absolute inset-0" />
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900 dark:text-white">
            Loved by Creators
          </h2>
          <AnimatedTestimonials testimonials={TESTIMONIALS} autoplay />
        </div>
      </section>

      {/* Final CTA - Redesigned with Vortex */}
      <CTASection onGetStarted={handleGetStarted} />

      {/* Footer - Redesigned with Dock */}
      <FooterSection />
    </div>
  );
}

// Data Components

const DummyContent = ({ title }: { title: string }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {title}
        </span>{" "}
        Use our professional templates to get started quickly.
      </p>
      <img
        src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2070&auto=format&fit=crop"
        alt="Template preview"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-10 rounded-xl shadow-lg"
      />
    </div>
  );
};

const TESTIMONIALS = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed my video editing workflow.",
    name: "Sarah Chen",
    designation: "Content Creator @ YouTube",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO @ TechFlow",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Emily Watson",
    designation: "Operations Director @ CloudScale",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop",
  },
];

const CAROUSEL_ITEMS = [
  {
    category: "Social Media",
    title: "Instagram Reels",
    src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
    content: <DummyContent title="Create Viral Reels" />,
  },
  {
    category: "Professional",
    title: "LinkedIn Promos",
    src: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=1770&auto=format&fit=crop",
    content: <DummyContent title="Professional Branding" />,
  },
  {
    category: "YouTube",
    title: "Channel Intros",
    src: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?q=80&w=2070&auto=format&fit=crop",
    content: <DummyContent title="Dynamic Intros" />,
  },
  {
    category: "Marketing",
    title: "Product Ads",
    src: "https://images.unsplash.com/photo-1542038784424-fa001014303f?q=80&w=2028&auto=format&fit=crop",
    content: <DummyContent title="High Conversion Ads" />,
  },
  {
    category: "Education",
    title: "Tutorials",
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
    content: <DummyContent title="Educational Content" />,
  },
];
