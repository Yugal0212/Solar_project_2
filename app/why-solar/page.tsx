'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  Zap, Leaf, CheckCircle2, ArrowRight, X,
  ShieldCheck,
  Sun, Battery, CloudRain, Landmark, AlertTriangle, ArrowUpRight, Plus, Minus,
  TrendingDown, TrendingUp, TreeDeciduous, Wind, Phone
} from 'lucide-react'
import { useRouter } from 'next/navigation'
import SectionHeader from '../../src/components/SectionHeader'
import InnerPageHero from '../../src/components/InnerPageHero'
import SolarCalculator from '../../src/components/SolarCalculator'
import { fadeLeft, fadeRight } from '../../src/lib/animations'

export default function WhySolarPage() {
  const router = useRouter()
  const [activeMyth, setActiveMyth] = useState<number | null>(null)

  const withoutSolar = [
    'Rising Electricity Bills',
    'Dependence on Grid',
    'Frequent Tariff Increases',
    'No Long-Term Savings',
    'High Monthly Expenses',
    'Carbon Emissions'
  ]

  const withSolar = [
    'Up to 80% Savings',
    'Energy Independence',
    'Fixed Energy Cost',
    'Government Subsidy',
    'Increased Property Value',
    'Clean Renewable Energy'
  ]

  const dayInLife = [
    { time: 'Morning', icon: <Sun />, desc: 'Solar panels begin generating energy as the sun rises, powering your morning routine.' },
    { time: 'Afternoon', icon: <Zap />, desc: 'Maximum power generation. Excess energy is automatically exported to the grid for credits.' },
    { time: 'Evening', icon: <TrendingDown />, desc: 'Energy savings continue as you use the credits earned during the peak afternoon hours.' },
    { time: 'Night', icon: <Battery />, desc: 'Grid backup or battery support seamlessly takes over to keep your property powered.' }
  ]

  const journey = [
    { year: 'Year 1', title: 'Government Subsidy', desc: 'Receive direct MNRE subsidy in your account and experience an immediate 80% drop in power bills.' },
    { year: 'Year 3', title: 'Major Savings', desc: 'You have now saved enough to notice a significant improvement in your family or business cash flow.' },
    { year: 'Year 5', title: 'System Pays for Itself', desc: '100% ROI achieved. The system has paid for itself entirely through accumulated electricity savings.' },
    { year: 'Year 10', title: 'Massive Profit', desc: 'You are now generating pure profit. Every unit of electricity is practically free.' },
    { year: 'Year 25', title: 'Lifetime Savings', desc: 'Over two decades of fixed energy costs, saving you lakhs of rupees against inflated grid tariffs.' }
  ]

  const homeReasons = [
    { icon: <TrendingDown size={32} />, title: 'Lower Bills', desc: 'Slash your monthly electricity expenses by up to 80% immediately.' },
    { icon: <ShieldCheck size={32} />, title: 'Power Security', desc: 'Protect your family from unpredictable grid failures and load shedding.' },
    { icon: <ArrowUpRight size={32} />, title: 'Property Value Increase', desc: 'Homes equipped with solar infrastructure sell faster and at a premium.' },
    { icon: <Leaf size={32} />, title: 'Environmental Responsibility', desc: 'Power your life with 100% clean, green, renewable sunshine.' }
  ]

  const bizReasons = [
    { icon: <TrendingDown size={32} />, title: 'Reduce Operating Costs', desc: 'Lower overheads directly increase your bottom-line profitability.' },
    { icon: <Landmark size={32} />, title: 'Tax Benefits', desc: 'Claim immediate tax relief and reduce corporate liability.' },
    { icon: <TrendingUp size={32} />, title: 'Accelerated Depreciation', desc: 'Claim 40% AD in the first year to aggressively write off the capital expense.' },
    { icon: <Leaf size={32} />, title: 'ESG Goals', desc: 'Meet corporate sustainability targets and appeal to eco-conscious clients.' }
  ]

  const caseStudies = [
    { type: 'Family Home', before: '₹5,000', after: '₹500', savings: '₹54,000' },
    { type: 'Commercial Shop', before: '₹20,000', after: '₹2,500', savings: '₹2,10,000' },
    { type: 'Industrial Unit', before: '₹1,00,000', after: '₹15,000', savings: '₹10,20,000' }
  ]

  const myths = [
    { q: "Solar Doesn't Work During Monsoon", a: "Modern premium solar panels generate power even on cloudy days using diffused sunlight. Your annual generation averages out perfectly." },
    { q: "Solar Is Too Expensive", a: "With massive government subsidies and zero-down financing options, solar is more affordable than ever. It pays for itself in 4-5 years." },
    { q: "Maintenance Is Difficult", a: "Solar systems have zero moving parts. Aside from occasional water cleaning, they require virtually no maintenance for 25 years." },
    { q: "My Roof Isn't Suitable", a: "We engineer custom mounting structures for flat roofs, pitched roofs, and industrial tin sheds without drilling into your ceiling." }
  ]

  return (
    <main>
      <InnerPageHero
        label="WHY SOLAR"
        title="Stop Renting Your Power. Start Owning It."
        highlightWords={['Owning', 'It.']}
        subtitle="Secure Your Financial Future"
        description="Join thousands of smart homeowners and businesses who have eliminated their electricity bills and secured their financial future."
        imagePath="/hero-bg.png"
        breadcrumbs={[{ label: 'Resources', path: '/resources' }, { label: 'Why Solar' }]}
      />

      {/* SECTION 1: WITHOUT SOLAR vs WITH SOLAR */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            eyebrow="THE REALITY"
            title="The True Cost of Waiting"
            subtitle="Don't Let the Grid Drain Your Assets"
            description="Every month you delay transitioning to solar is another month of pure, unrecoverable expense given directly to the utility company. It's time to own your power."
          />
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <motion.div {...fadeLeft} className="bg-white rounded-3xl border border-red-100 shadow-xl overflow-hidden">
              <div className="bg-red-50 p-8 border-b border-red-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-500">
                  <AlertTriangle size={24} />
                </div>
                <h3 className="text-2xl font-bold text-red-900">Without Solar</h3>
              </div>
              <div className="p-8 space-y-6">
                {withoutSolar.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <X size={20} className="text-red-400 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeRight} className="bg-white rounded-3xl border border-emerald-100 shadow-xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -mr-16 -mt-16" />
              <div className="bg-emerald-50 p-8 border-b border-emerald-100 flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                  <Sun size={24} />
                </div>
                <h3 className="text-2xl font-bold text-emerald-900">With LGPSM Solar</h3>
              </div>
              <div className="p-8 space-y-6 relative z-10">
                {withSolar.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle2 size={20} className="text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: A DAY IN LIFE WITH SOLAR */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            eyebrow="24/7 EFFICIENCY"
            title="A Day in the Life with Solar"
            subtitle="Intelligent Energy Generation"
            description="Watch how a premium LGPSM solar system works autonomously around the clock to capture sunlight, power your home, and drastically slash your utility bills."
          />
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            {dayInLife.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-slate-50 rounded-3xl p-8 hover:bg-emerald-50 transition-colors group border border-slate-100 hover:border-emerald-200">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-emerald-600 group-hover:scale-110 transition-all shadow-sm mb-6">
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{step.time}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: SOLAR SAVINGS JOURNEY */}
      <section className="py-24 bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            eyebrow="FINANCIAL TIMELINE"
            title="Your 25-Year Savings Journey"
            subtitle="A Compounding Financial Asset"
            description="Solar is not merely a home appliance; it is one of the highest-yielding, lowest-risk financial investments you can make for your property's future."
            light
          />
          <div className="mt-20 relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-800 -translate-y-1/2" />

            <div className="grid lg:grid-cols-5 gap-8">
              {journey.map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative text-center">
                  <div className="w-16 h-16 mx-auto bg-slate-800 border-4 border-slate-900 rounded-full flex items-center justify-center text-emerald-400 font-bold text-sm relative z-10 shadow-[0_0_20px_rgba(52,211,153,0.1)]">
                    {step.year}
                  </div>
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 mt-6 lg:mt-8 hover:border-emerald-500/50 transition-colors">
                    <h4 className="text-white font-bold mb-2">{step.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: SOLAR SAVINGS CALCULATOR */}
      <section className="py-24 bg-emerald-50 border-y border-emerald-100">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            eyebrow="CALCULATE YOUR ROI"
            title="See Exactly What You Could Save"
            subtitle="Live Financial Projections"
            description="Use our interactive calculator to project your 25-year cumulative savings and understand the exact payback period for your specific roof and energy profile."
          />
          <div className="mt-12">
            <SolarCalculator />
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY HOMEOWNERS SWITCH */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            eyebrow="RESIDENTIAL SOLAR"
            title="Why Homeowners Switch to Solar"
            subtitle="Unlock the Equity in Your Roof"
            description="Thousands of homeowners are realizing that generating their own power is the smartest way to increase property value and eliminate monthly liabilities."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {homeReasons.map((reason, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-lg hover:shadow-xl hover:border-emerald-500 transition-all group">
                <div className="text-emerald-600 mb-6 group-hover:scale-110 transition-transform origin-left">{reason.icon}</div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{reason.title}</h4>
                <p className="text-slate-600 leading-relaxed text-sm">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: WHY BUSINESSES CHOOSE SOLAR */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <SectionHeader
            eyebrow="COMMERCIAL SOLAR"
            title="Why Businesses Choose Solar"
            subtitle="Protect Margins and Maximize ROI"
            description="For heavy industries and commercial spaces, solar isn't just an eco-friendly choice—it's a massive financial lever that leverages powerful tax incentives and drastically reduces OpEx."
            light
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {bizReasons.map((reason, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 rounded-3xl bg-slate-800 border border-slate-700 hover:border-emerald-500 transition-colors group">
                <div className="text-emerald-400 mb-6 group-hover:scale-110 transition-transform origin-left">{reason.icon}</div>
                <h4 className="text-xl font-bold text-white mb-3">{reason.title}</h4>
                <p className="text-slate-400 leading-relaxed text-sm">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: REAL LIFE EXAMPLES */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            eyebrow="CASE STUDIES"
            title="Real Life Financial Impact"
            subtitle="Numbers Do Not Lie"
            description="Look at what our customers are actually saving month over month. These are real properties, real deployments, and real financial returns."
          />
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {caseStudies.map((study, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-4 py-1 rounded-bl-xl uppercase tracking-wider">
                  {study.type}
                </div>
                <div className="mt-4 space-y-6">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Monthly Bill Before</p>
                    <p className="text-2xl font-bold text-slate-900">{study.before}</p>
                  </div>
                  <div className="w-full h-px bg-slate-100" />
                  <div>
                    <p className="text-sm font-medium text-slate-500">Monthly Bill After Solar</p>
                    <p className="text-2xl font-bold text-emerald-600">{study.after}</p>
                  </div>
                  <div className="w-full h-px bg-slate-100" />
                  <div className="bg-emerald-50 p-4 rounded-xl">
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">Annual Savings</p>
                    <p className="text-3xl font-black text-emerald-600 mt-1">{study.savings}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: MYTHS ABOUT SOLAR */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeader
            eyebrow="FAQ"
            title="Myths vs Reality"
            subtitle="The Truth About Solar Energy"
            description="There is a lot of misinformation about solar deployment. We're here to clear the air with hard facts and engineering realities."
          />
          <div className="mt-16 space-y-4">
            {myths.map((myth, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border border-slate-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setActiveMyth(activeMyth === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <span className="font-bold text-slate-900 text-lg pr-8">Myth: {myth.q}</span>
                  {activeMyth === i ? <Minus className="text-emerald-600 flex-shrink-0" /> : <Plus className="text-slate-400 flex-shrink-0" />}
                </button>
                <AnimatePresence>
                  {activeMyth === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 bg-white border-t border-slate-100">
                        <p className="text-slate-600 leading-relaxed"><strong className="text-emerald-700">Reality:</strong> {myth.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: ENVIRONMENTAL IMPACT */}
      <section className="py-24 bg-emerald-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <SectionHeader 
            eyebrow="THE BIGGER PICTURE" 
            title="Massive Environmental Impact" 
            subtitle="Healing the Planet, One Roof at a Time"
            description="Beyond the incredible financial returns, deploying a standard 5kW solar system offsets a monumental amount of carbon damage every single year." 
            light 
          />
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-emerald-800/50 backdrop-blur-md border border-emerald-700/50 rounded-3xl p-10">
              <TreeDeciduous size={48} className="mx-auto text-emerald-400 mb-6" />
              <h3 className="text-5xl font-black text-white mb-2">120</h3>
              <p className="text-emerald-200 uppercase tracking-widest text-sm font-bold">Trees Planted Annually</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-emerald-800/50 backdrop-blur-md border border-emerald-700/50 rounded-3xl p-10">
              <CloudRain size={48} className="mx-auto text-emerald-400 mb-6" />
              <h3 className="text-5xl font-black text-white mb-2">2.4</h3>
              <p className="text-emerald-200 uppercase tracking-widest text-sm font-bold">Tons of CO2 Avoided</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-emerald-800/50 backdrop-blur-md border border-emerald-700/50 rounded-3xl p-10">
              <Wind size={48} className="mx-auto text-emerald-400 mb-6" />
              <h3 className="text-5xl font-black text-white mb-2">10k+</h3>
              <p className="text-emerald-200 uppercase tracking-widest text-sm font-bold">Units of Clean Energy</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 10: WHY NOW */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionHeader 
            eyebrow="URGENCY" 
            title="Why Now Is The Best Time" 
            subtitle="The Perfect Storm for Solar Deployment"
            description="With falling equipment costs, rising grid prices, and lucrative government subsidies available right now, there has never been a better time in history to secure your energy independence."
          />
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-6 py-3 rounded-full font-bold">Government Subsidies Available NOW</span>
            <span className="bg-red-50 text-red-700 border border-red-200 px-6 py-3 rounded-full font-bold">Grid Costs Rising 6% Annually</span>
            <span className="bg-blue-50 text-blue-700 border border-blue-200 px-6 py-3 rounded-full font-bold">Solar Equipment at Historic Best Prices</span>
            <span className="bg-purple-50 text-purple-700 border border-purple-200 px-6 py-3 rounded-full font-bold">Highest ROI Period in History</span>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-heading font-black text-5xl md:text-6xl text-white tracking-tight">Ready To Start Saving With Solar?</h2>
          <p className="text-slate-400 mt-8 text-xl max-w-2xl mx-auto">The sun is shining, the subsidies are live, and your roof is ready to become an asset.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <button
              onClick={() => router.push('/contact')}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-emerald-600 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-emerald-500 transition-all shadow-[0_0_40px_rgba(5,150,105,0.4)] hover:-translate-y-1"
            >
              Book Free Consultation <ArrowRight size={20} />
            </button>
            <a
              href="tel:+919999900000"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/10 text-white border border-white/20 px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white/20 transition-all"
            >
              <Phone size={20} /> Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
