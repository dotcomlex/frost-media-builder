import { motion } from "framer-motion";

const credentials = [
  "7+ Years Experience",
  "Denver, Colorado",
  "Bilingual (EN/ES)",
  "100+ Systems Built",
  "Selective Clientele",
];

const AboutSection = () => (
  <section id="about" className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-[#0A0E1A] to-[#1E3A8A] relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3"
        >
          <p className="font-mono-tech text-xs tracking-widest uppercase text-frost-blue mb-4">About</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
            Built by Marketers Who Saw the Gaps
          </h2>
          <div className="space-y-4 text-base md:text-lg text-slate-300 leading-relaxed">
            <p>
              Hi, I'm Christian Alejandro, founder of Frost Media. I spent seven years in the trenches of performance marketing, running campaigns across insurance, e-commerce, beauty, and home services. I saw the same problems everywhere: businesses throwing money at ads with no real tracking, agencies charging retainers regardless of results, and companies sharing leads with five competitors.
            </p>
            <p>
              So we built Frost Media differently. We're a small expert team based here in Denver, Colorado. We don't work with everyone. We're selective because we want to work with businesses that have skin in the game, know how to run their operations, and are ready to scale with proper systems.
            </p>
            <p>
              Everything we build is custom. No templates, no recycled campaigns, no cookie-cutter solutions. We combine cutting-edge AI technology with expert media buying to create complete growth infrastructures that actually work. We speak fluent English and Spanish, which means we can unlock markets your competitors can't touch.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            {credentials.map((c) => (
              <span key={c} className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white">
                {c}
              </span>
            ))}
          </div>

          {/* Selective callout */}
          <div className="mt-10 bg-frost-blue/10 border-l-4 border-frost-blue rounded-r-2xl p-6">
            <h3 className="text-white font-bold font-heading mb-2">We Don't Work with Everyone</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              We're selective about our clients. We want businesses that are established, have skin in the game, and know how to run their operations. We're not here to rescue failing businesses. We're here to help good businesses become dominant through technology and systems.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 relative"
        >
          <div className="absolute -inset-6 bg-frost-blue/10 rounded-3xl blur-3xl -z-10" />
          <div className="rounded-2xl border-4 border-white/10 aspect-[3/4] w-full max-w-md mx-auto flex items-center justify-center shadow-2xl overflow-hidden bg-white/5">
            <span className="text-slate-400 text-lg">Photo</span>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
