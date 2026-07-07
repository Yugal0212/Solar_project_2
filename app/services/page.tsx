'use client'

import { motion } from 'motion/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import {
  Check, ShieldCheck, Zap, Award,
  FileText, Phone, Building2, Factory, Home, Briefcase,
  GraduationCap, X, Store,
  Warehouse, PenTool, CheckCircle2, AlertTriangle, MapPin,
  ArrowRight
} from 'lucide-react'
import SectionHeader from '../../src/components/SectionHeader'
import InnerPageHero from '../../src/components/InnerPageHero'
import { cities } from '../../src/data/seed'
import { fadeLeft, fadeRight, staggerContainer, staggerChild } from '../../src/lib/animations'

export default function ServicesPage() {
  const router = useRouter()

  const coreCapabilities = [
    {
      eyebrow: 'CAPABILITY 01',
      title: 'Commercial & Industrial EPC Solutions',
      desc: 'Turnkey engineering, procurement, and construction for megawatt-scale industrial solar power plants. We handle end-to-end execution, ensuring maximum yield and accelerated ROI for heavy industry.',
      features: [
        'Advanced SCADA integration and remote monitoring',
        'Accelerated depreciation (40% in Year 1) compliance',
        'High-tension (HT) grid synchronization',
        'Custom heavy-duty mounting structures for industrial roofs',
      ],
      image: '/images/services/industrial.png',
      layout: 'left',
    },
    {
      eyebrow: 'CAPABILITY 02',
      title: 'Corporate & Institutional Integrations',
      desc: 'Sleek, architectural solar integrations designed for corporate parks, educational institutions, and commercial complexes. Elevate your ESG score with beautiful, functional clean energy.',
      features: [
        'Solar carports and covered parking arrays',
        'BIPV (Building Integrated Photovoltaics)',
        'Zero-penetration rooftop installations',
        'Corporate sustainability reporting dashboards',
      ],
      image: '/images/services/commercial.png',
      layout: 'right',
    },
    {
      eyebrow: 'CAPABILITY 03',
      title: 'Advanced Operations & Maintenance (O&M)',
      desc: 'Enterprise-grade maintenance services to protect your solar asset. Utilizing thermographic imaging and AI-driven performance analytics to guarantee maximum uptime.',
      features: [
        'Preventative and corrective maintenance protocols',
        'Drone-assisted thermographic inspections',
        'Automated robotic panel cleaning options',
        '24/7 rapid response engineering team',
      ],
      image: '/images/services/maintenance.png',
      layout: 'left',
    },
  ]

  const packages = [
    { name: 'Starter', range: '1kW-2kW', best: 'Studio to 1BHK apartments', price: 'From Rs 60,000*', savings: 'Rs 600-1,400', yearly: 'Rs 16,800', features: ['1kW-2kW monocrystalline panels', '1-2kW hybrid inverter', 'Mounting structure', 'AC/DC wiring', 'Net metering', '5-yr installation warranty'] },
    { name: 'Standard', range: '3kW-5kW', best: '2BHK to 3BHK homes', price: 'From Rs 1,40,000*', popular: true, savings: 'Rs 2,100-3,500', yearly: 'Rs 42,000', features: ['Everything in Starter +', '500W panels (higher efficiency)', '5kW hybrid inverter', 'Smart monitoring app', 'Subsidy application assistance'] },
    { name: 'Premium', range: '7kW-10kW', best: '4BHK+ homes & villas', price: 'From Rs 3,20,000*', savings: 'Rs 4,900-7,000', yearly: 'Rs 84,000', features: ['Everything in Standard +', '600W bifacial panels', '10kW inverter', 'Priority installation (within 5 days)', '1-year free AMC'] },
    { name: 'Enterprise', range: '10kW+', best: 'Offices, shops, factories', price: 'Custom Quote', savings: 'Varies', yearly: 'Varies', features: ['40% accelerated depreciation', 'Three-phase systems', 'SCADA monitoring', 'RECs available'], isCustom: true },
  ]

  const whyChooseUs = [
    { icon: <PenTool size={32} />, title: 'Turnkey Execution', desc: 'From initial site survey to final net-metering approval, we handle 100% of the project lifecycle in-house.' },
    { icon: <Award size={32} />, title: 'Premium Components', desc: 'We only deploy Tier-1 BIS-certified solar panels and highly efficient string inverters rated for extreme heat.' },
    { icon: <FileText size={32} />, title: 'Subsidy Assistance', desc: 'Our dedicated compliance team processes all MNRE and PM Surya Ghar paperwork so you get your subsidy instantly.' },
    { icon: <Briefcase size={32} />, title: 'Dedicated Project Manager', desc: 'A single point of contact assigned to your site ensuring seamless communication and absolute accountability.' },
    { icon: <Zap size={32} />, title: 'Fast Installation', desc: 'Rapid deployment protocols ensure residential systems are fully installed within 1 to 3 working days.' },
    { icon: <ShieldCheck size={32} />, title: 'Long-Term Support', desc: '25-year performance warranties backed by our responsive, local Gujarat-based maintenance fleet.' }
  ]

  const processSteps = [
    { step: '01', title: 'Consultation', desc: 'We discuss your energy needs and review your current electricity bills.' },
    { step: '02', title: 'Site Survey', desc: 'Engineers assess your roof structure and conduct shadow analysis.' },
    { step: '03', title: 'Energy Analysis', desc: 'We calculate your exact ROI, payback period, and recommended system size.' },
    { step: '04', title: 'System Design', desc: '3D modeling of the panel layout for maximum aesthetic and energy yield.' },
    { step: '05', title: 'Government Approvals', desc: 'We file all necessary DISCOM and CEI applications on your behalf.' },
    { step: '06', title: 'Installation', desc: 'Expert mounting, wiring, and inverter commissioning by certified technicians.' },
    { step: '07', title: 'Monitoring & Support', desc: 'System goes live. You get app access for real-time generation tracking.' }
  ]

  const withoutUs = [
    'Poor system design leading to low yields',
    'Low-efficiency, uncertified components',
    'Nightmare warranty claims with absent installers',
    'Zero post-installation support or maintenance',
    'Delayed installations stretching for months'
  ]

  const withUs = [
    'Expert 3D-modeled design for maximum generation',
    'Premium Tier-1 BIS-certified components',
    'Iron-clad warranties honored directly by us',
    'Dedicated lifetime support and rapid response O&M',
    'Rapid deployment within agreed contractual timelines'
  ]

  const audiences = [
    { icon: <Home />, title: 'Residential Homes' },
    { icon: <Building2 />, title: 'Villas & Bungalows' },
    { icon: <Building2 />, title: 'Apartment Complexes' },
    { icon: <Store />, title: 'Retail Shops' },
    { icon: <Briefcase />, title: 'Commercial Buildings' },
    { icon: <Factory />, title: 'Factories' },
    { icon: <Warehouse />, title: 'Warehouses' },
    { icon: <GraduationCap />, title: 'Educational Institutions' }
  ]
  return (
    <main>
      {/* Hero */}
      <InnerPageHero
        label="ENTERPRISE SERVICES"
        title="Complete Solar Solutions"
        highlightWords={['Solar', 'Solutions']}
        subtitle="From Survey to Lifetime Support"
        description="We don't just install panels - we engineer your energy independence. Discover enterprise-grade execution for your home or business."
        imagePath="/images/products/hero-rooftop-array.jpg"
      />

      {/* CORE CAPABILITIES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            eyebrow="OUR EXPERTISE"
            title="Core Engineering Capabilities"
            subtitle="Precision Engineered Solar Infrastructure"
            description="We deliver enterprise-grade installations with uncompromising quality. Our expert engineers design systems tailored to maximize your roof's potential while ensuring absolute structural integrity."
          />
          <div className="mt-20 space-y-24">
            {coreCapabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6 }}
                className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
              >
                <div className={`relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] ${cap.layout === 'right' ? 'lg:order-2' : ''}`}>
                  <Image src={cap.image} alt={cap.title} width={1024} height={1024} sizes="(min-width: 1024px) 50vw, 100vw" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 border border-black/10 rounded-3xl" />
                </div>

                <div className={cap.layout === 'right' ? 'lg:order-1' : ''}>
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-600">{cap.eyebrow}</span>
                  <h3 className="font-heading font-bold text-3xl lg:text-4xl text-slate-900 mt-4 leading-tight">{cap.title}</h3>
                  <p className="text-slate-600 mt-6 leading-relaxed text-lg">{cap.desc}</p>

                  <ul className="mt-8 space-y-4">
                    {cap.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3 text-slate-700">
                        <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={14} className="text-emerald-600" />
                        </div>
                        <span className="font-medium">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => router.push('/contact')}
                    className="mt-10 flex items-center gap-2 bg-emerald-900 hover:bg-emerald-800 text-white rounded-full px-8 py-4 font-bold tracking-wide transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Talk to a Solar Expert <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CLIENTS CHOOSE OUR SERVICES */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            eyebrow="THE LGPSM DIFFERENCE"
            title="Why Clients Choose Our Services"
            subtitle="Zero Headaches. Maximum Returns."
            description="We eliminate the complexity of transitioning to solar energy. Our comprehensive, end-to-end approach ensures seamless deployment, regulatory compliance, and immediate cost savings."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {whyChooseUs.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:border-emerald-500 hover:shadow-xl hover:-translate-y-2 transition-all group">
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform origin-left">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR SOLAR PROCESS */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[100px] -mr-[400px] -mt-[400px]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <SectionHeader
            eyebrow="EXECUTION PROTOCOL"
            title="Our 7-Step Solar Process"
            subtitle="Meticulously Engineered Deployment"
            description="From initial feasibility analysis to lifetime monitoring, our standardized workflow guarantees precision installation and rapid commissioning from day one."
            light
          />
          <div className="mt-20 relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-800 -translate-y-1/2" />
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 justify-between">
              {processSteps.map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative flex-1 lg:text-center flex lg:block items-center gap-6">
                  <div className="w-16 h-16 bg-slate-800 border-4 border-slate-900 rounded-full flex items-center justify-center text-emerald-400 font-bold text-xl relative z-10 flex-shrink-0 shadow-[0_0_20px_rgba(52,211,153,0.1)]">
                    {step.step}
                  </div>
                  <div className="lg:mt-8">
                    <h4 className="text-white font-bold mb-2">{step.title}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed hidden lg:block">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WITHOUT US vs WITH US */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            eyebrow="THE COMPARISON"
            title="Don't Risk Your Roof with Amateurs"
            subtitle="The Hidden Cost of Cheap Solar"
            description="Substandard installations can lead to roof leaks, electrical hazards, and massive yield losses. See why investing in enterprise-grade deployment is the only logical choice."
          />
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <motion.div {...fadeLeft} className="bg-white rounded-3xl border border-red-100 shadow-xl overflow-hidden">
              <div className="bg-red-50 p-8 border-b border-red-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-500">
                  <AlertTriangle size={24} />
                </div>
                <h3 className="text-2xl font-bold text-red-900">Without Professional Partner</h3>
              </div>
              <div className="p-8 space-y-6">
                {withoutUs.map((item, i) => (
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
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-2xl font-bold text-emerald-900">With LGPSM Solar</h3>
              </div>
              <div className="p-8 space-y-6 relative z-10">
                {withUs.map((item, i) => (
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

      {/* PACKAGE SECTION */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            eyebrow="STANDARDISED DEPLOYMENT"
            title="Residential & SME Packages"
            subtitle="Pre-Engineered Deployment Tiers"
            description="Our packaged systems are designed for rapid installation, guaranteed yields, and streamlined government subsidy processing. Choose the tier that matches your exact energy profile."
          />
          <motion.div {...staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                {...staggerChild}
                className={`bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 relative group ${pkg.popular ? 'ring-2 ring-emerald-500 lg:-translate-y-4 relative z-10' : 'border border-slate-200'}`}
              >
                {pkg.popular && (
                  <div className="bg-emerald-500 text-white text-center py-2 text-xs tracking-widest uppercase font-bold absolute top-0 left-0 right-0 z-20 shadow-md">
                    Most Popular
                  </div>
                )}

                <div className={`p-8 ${pkg.popular ? 'pt-12' : ''}`}>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="text-xs font-bold text-emerald-600 tracking-wider uppercase bg-emerald-50 px-3 py-1 rounded-full inline-block mb-3">{pkg.range}</div>
                      <h4 className="font-heading font-black text-3xl text-slate-900">{pkg.name}</h4>
                      <p className="text-sm text-slate-500 mt-2 font-medium">{pkg.best}</p>
                    </div>
                  </div>

                  <div className="my-8 p-6 bg-slate-50 rounded-2xl group-hover:bg-emerald-50/50 transition-colors border border-slate-100">
                    <div className="text-sm text-slate-500 font-medium mb-1">Starting from</div>
                    <div className="text-3xl font-black text-slate-900">{pkg.price}</div>
                    <div className="mt-4 pt-4 border-t border-slate-200/60 flex justify-between items-center">
                      <div>
                        <div className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Monthly Savings</div>
                        <div className="text-lg font-bold text-emerald-600">{pkg.savings}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Yearly Savings</div>
                        <div className="text-lg font-bold text-emerald-600">{pkg.yearly}</div>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                        <Check size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 pt-0 mt-auto">
                  <button
                    onClick={() => router.push('/contact')}
                    className={`w-full rounded-xl py-4 font-bold tracking-widest uppercase transition-all flex justify-center items-center gap-2 ${
                      pkg.popular
                        ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-[0_4px_20px_rgba(5,150,105,0.3)] hover:shadow-[0_6px_25px_rgba(5,150,105,0.4)] hover:-translate-y-1'
                        : 'bg-slate-100 text-slate-900 hover:bg-slate-200 hover:-translate-y-1'
                    }`}
                  >
                    Get a Quote <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <p className="text-sm text-slate-500 text-center mt-12 font-medium">
            * Base estimates post-MNRE subsidy. Final specifications subject to technical site survey.
          </p>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader 
            eyebrow="AUDIENCE" 
            title="Who We Serve"
            subtitle="Powering Homes and Heavy Industries"
            description="From individual households looking to eliminate energy bills to massive commercial warehouses requiring megawatt-scale deployments, we scale our solutions to meet the exact demands of our diverse clientele."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {audiences.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-100 hover:border-emerald-200 hover:bg-white hover:shadow-xl transition-all group">
                <div className="w-12 h-12 mx-auto bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="font-bold text-slate-900">{item.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            eyebrow="OPERATIONAL REACH"
            title="Gujarat Distribution & Execution Network"
            subtitle="Statewide Deployment Capabilities"
            description="With engineering hubs strategically located across Gujarat, our rapid-response teams are equipped to handle installations, maintenance, and grid-integration anywhere in the state."
          />
          <motion.div {...staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {cities.map((city, i) => (
              <motion.div
                key={i}
                {...staggerChild}
                className="group rounded-2xl border border-slate-200 p-8 text-center bg-slate-50 hover:bg-white hover:border-emerald-200 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center text-slate-400 mb-4 group-hover:text-emerald-600 group-hover:shadow-md transition-all">
                  <MapPin size={24} />
                </div>
                <h4 className="font-heading font-bold text-xl text-slate-900 group-hover:text-emerald-700 transition-colors">{city.name}</h4>
                <p className="text-slate-500 mt-3 font-medium text-sm leading-relaxed">{city.description}</p>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-12 bg-slate-50 rounded-2xl p-8 border border-slate-100 max-w-3xl mx-auto">
            <p className="text-slate-700 font-medium text-lg">
              Project location outside these hubs? Our mobile engineering teams deploy state-wide for utility-scale projects.
            </p>
            <button onClick={() => router.push('/contact')} className="mt-6 inline-flex items-center gap-2 text-emerald-700 font-bold hover:text-emerald-800 border-b-2 border-emerald-300 hover:border-emerald-700 pb-1 transition-all">
              Talk to a Solar Expert <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* FINAL PREMIUM CTA */}
      <section className="py-32 bg-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-heading font-black text-5xl md:text-6xl text-white tracking-tight">Ready To Build Your Solar Future?</h2>
          <p className="text-emerald-100 mt-8 text-xl max-w-2xl mx-auto leading-relaxed">
            Talk to our solar experts and receive a customized solution designed specifically for your property&apos;s energy needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <button
              onClick={() => router.push('/contact')}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-emerald-900 px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-emerald-50 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:-translate-y-1"
            >
              Book Free Consultation <ArrowRight size={20} />
            </button>
            <a
              href="tel:+919999900000"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/10 text-white border border-white/20 px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white/20 transition-all"
            >
              <Phone size={20} /> Talk To Expert
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
