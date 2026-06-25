'use client'

import { useState, useEffect, useCallback, memo } from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { Sun, TrendingDown, IndianRupee, Award, Clock, Star, ArrowRight, Home, Building, Factory } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface SolarResults {
  systemSize: number
  monthlySavings: number
  annualSavings: number
  systemCost: number
  subsidyAmount: number
  netCost: number
  paybackYears: number
  totalSavings25yr: number
  includeLoan: boolean
  downPayment: number
  emi: number
}

// Memoized results panel to prevent lag when dragging the slider
const ResultsPanel = memo(({ results, onContactClick }: { results: SolarResults; onContactClick: () => void }) => (
  <motion.div
    initial={{ opacity: 0, x: 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    style={{ willChange: 'transform, opacity' }}
    className="bg-white rounded-2xl shadow-card p-8 flex flex-col h-full"
  >
    <h4 className="font-heading font-semibold text-lg text-slate-900 mb-6">Your Estimated Savings</h4>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
      {/* System Size */}
      <div className="bg-slate-50 rounded-xl p-4">
        <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
          <Sun size={14} className="text-emerald-600 shrink-0" /> Recommended System
        </div>
        <div className="text-xl font-bold text-slate-900">
          <CountUp end={results.systemSize} decimals={1} duration={0.8} preserveValue={true} /> kW
        </div>
      </div>

      {/* Gross Cost */}
      <div className="bg-slate-50 rounded-xl p-4">
        <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
          <IndianRupee size={14} className="text-slate-400 shrink-0" /> Gross Cost
        </div>
        <div className="text-xl font-bold text-slate-900">
          Rs <CountUp end={results.systemCost} duration={0.8} separator="," preserveValue={true} />
        </div>
      </div>

      {/* Govt Subsidy */}
      <div className="bg-slate-50 rounded-xl p-4">
        <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
          <Award size={14} className="text-blue-600 shrink-0" /> Govt Subsidy
        </div>
        <div className="text-xl font-bold text-blue-600">
          - Rs <CountUp end={results.subsidyAmount} duration={0.8} separator="," preserveValue={true} />
        </div>
      </div>

      {/* Net Cost */}
      <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
        <div className="flex items-center gap-2 text-emerald-800 text-xs mb-1 font-semibold">
          <IndianRupee size={14} className="text-emerald-600 shrink-0" /> Net Cost
        </div>
        <div className="text-2xl font-bold text-emerald-700">
          Rs <CountUp end={results.netCost} duration={0.8} separator="," preserveValue={true} />
        </div>
      </div>

      {/* Loan Financing Details (If active) */}
      {results.includeLoan ? (
        <>
          <div className="bg-indigo-50 rounded-xl p-4">
            <div className="flex items-center gap-2 text-indigo-800 text-xs mb-1">
              Down Payment (20%)
            </div>
            <div className="text-xl font-bold text-indigo-700">
              Rs <CountUp end={results.downPayment} duration={0.8} separator="," preserveValue={true} />
            </div>
          </div>
          <div className="bg-indigo-50 rounded-xl p-4">
            <div className="flex items-center gap-2 text-indigo-800 text-xs mb-1">
              Est. EMI (5 Years)
            </div>
            <div className="text-xl font-bold text-indigo-700">
              Rs <CountUp end={results.emi} duration={0.8} separator="," preserveValue={true} /> /mo
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="bg-slate-50 rounded-xl p-4">
            <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
              <TrendingDown size={14} className="text-emerald-600 shrink-0" /> Monthly Savings
            </div>
            <div className="text-xl font-bold text-slate-900">
              Rs <CountUp end={results.monthlySavings} duration={0.8} separator="," preserveValue={true} />
            </div>
          </div>
          <div className="bg-slate-50 rounded-xl p-4">
            <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
              <Clock size={14} className="text-blue-600 shrink-0" /> Payback Period
            </div>
            <div className="text-xl font-bold text-slate-900">
              <CountUp end={results.paybackYears} decimals={1} duration={0.8} preserveValue={true} /> Years
            </div>
          </div>
        </>
      )}

      {/* 25-Year Savings */}
      <div className="sm:col-span-2 bg-slate-900 rounded-xl p-4 text-center">
        <div className="flex items-center justify-center gap-2 text-slate-400 text-xs mb-1 uppercase tracking-wider">
          <Star size={14} className="text-emerald-400 shrink-0" /> Lifetime ROI (25 Years)
        </div>
        <div className="text-3xl font-black text-white mt-1">
          Rs <CountUp end={results.totalSavings25yr} duration={0.8} separator="," preserveValue={true} />+
        </div>
      </div>
    </div>

    <p className="text-[11px] text-slate-400 mt-6 leading-relaxed">
      * Estimates based on average tariffs. Get a precise quote with our free site survey.
    </p>

    <button
      onClick={onContactClick}
      className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl py-3.5 text-sm font-semibold flex items-center justify-center gap-2 shadow-emerald hover:shadow-lg hover:-translate-y-0.5 transition-all"
    >
      Get a Quote <ArrowRight size={16} />
    </button>
  </motion.div>
))

ResultsPanel.displayName = 'ResultsPanel'

const propertyTypes = [
  { id: 'residential', label: 'Residential', icon: <Home size={18} /> },
  { id: 'commercial', label: 'Commercial', icon: <Building size={18} /> },
  { id: 'industrial', label: 'Industrial', icon: <Factory size={18} /> },
]

const roofSizes = [
  { value: 'small', label: 'Small - Below 500 sq. ft.' },
  { value: 'medium', label: 'Medium - 500 to 1,000 sq. ft.' },
  { value: 'large', label: 'Large - Above 1,000 sq. ft.' },
]

const cities = ['Rajkot', 'Ahmedabad', 'Surat', 'Morbi', 'Bhavnagar', 'Vadodara', 'Other Gujarat']

export default function SolarCalculator({ includeSubsidyToggle = false, includeLoanToggle = false }: { includeSubsidyToggle?: boolean; includeLoanToggle?: boolean }) {
  const router = useRouter()
  const [monthlyBill, setMonthlyBill] = useState(3000)
  const [roofSize, setRoofSize] = useState('medium')
  const [city, setCity] = useState('Rajkot')
  const [propertyType, setPropertyType] = useState('residential')
  const [includeSubsidy, setIncludeSubsidy] = useState(true)
  const [includeLoan, setIncludeLoan] = useState(false)
  const [results, setResults] = useState({
    systemSize: 0,
    monthlySavings: 0,
    annualSavings: 0,
    systemCost: 0,
    subsidyAmount: 0,
    netCost: 0,
    paybackYears: 0,
    totalSavings25yr: 0,
    includeLoan: false,
    downPayment: 0,
    emi: 0,
  })

  const calculateResults = useCallback(() => {
    // 1. Calculate base ideal system size (approx 120 units generated per kW per month)
    // Avg tariff considered = 8 Rs/unit -> 1kW saves Rs 960/mo
    const idealSystemSize = (monthlyBill / 960)
    
    // 2. Cap system size based on roof area constraint
    let maxSystemSize = Infinity
    if (roofSize === 'small') maxSystemSize = 3 // ~300 sq ft fits max 3kW
    if (roofSize === 'medium') maxSystemSize = 10 // ~1000 sq ft fits max 10kW
    
    let systemSize = Math.min(idealSystemSize, maxSystemSize)
    // Round to nearest 0.5 kW
    systemSize = Math.max(1, Math.round(systemSize * 2) / 2)

    // 3. Calculate system cost (Economy of scale applies)
    let costPerKw = 60000
    if (propertyType === 'commercial' || propertyType === 'industrial') {
      costPerKw = 50000 // Larger scale, cheaper per kW
    } else {
      if (systemSize >= 10) costPerKw = 52000
      else if (systemSize >= 5) costPerKw = 55000
    }
    const systemCost = Math.round(systemSize * costPerKw)

    // 4. Calculate Subsidy (PM Surya Ghar Yojana logic)
    // Subsidy is only for residential properties!
    let subsidyAmount = 0
    if (includeSubsidy && propertyType === 'residential') {
      if (systemSize <= 2) {
        subsidyAmount = systemSize * 30000
      } else if (systemSize < 3) {
        subsidyAmount = 60000 + ((systemSize - 2) * 18000)
      } else {
        subsidyAmount = 78000 // Max subsidy capped at 78,000 for 3kW+
      }
    }

    const netCost = systemCost - subsidyAmount

    // 5. Savings
    const monthlyUnitsGenerated = systemSize * 120
    const monthlySavings = Math.min(monthlyBill, monthlyUnitsGenerated * 8)
    const annualSavings = monthlySavings * 12

    // 6. Payback and ROI
    const paybackYears = netCost / annualSavings
    const totalSavings25yr = (annualSavings * 25) - netCost

    // 7. Loan Calculation (Standard Solar Loan: 9% interest, 5 years)
    let downPayment = 0
    let emi = 0
    if (includeLoan) {
      downPayment = Math.round(netCost * 0.20) // 20% down
      const principal = netCost - downPayment
      const ratePerMonth = 9 / 12 / 100
      const months = 60
      emi = Math.round((principal * ratePerMonth * Math.pow(1 + ratePerMonth, months)) / (Math.pow(1 + ratePerMonth, months) - 1))
    }

    setResults({
      systemSize,
      monthlySavings: Math.round(monthlySavings),
      annualSavings: Math.round(annualSavings),
      systemCost,
      subsidyAmount: Math.round(subsidyAmount),
      netCost,
      paybackYears: Number(paybackYears.toFixed(1)),
      totalSavings25yr: Math.round(totalSavings25yr),
      includeLoan,
      downPayment,
      emi,
    })
  }, [monthlyBill, roofSize, propertyType, includeSubsidy, includeLoan])

  useEffect(() => {
    const timer = setTimeout(calculateResults, 300)
    return () => clearTimeout(timer)
  }, [monthlyBill, roofSize, city, propertyType, includeSubsidy, calculateResults])

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Input Panel */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        style={{ willChange: 'transform, opacity' }}
        className="bg-white rounded-2xl shadow-card p-8 flex flex-col h-full"
      >
        <h4 className="font-heading font-semibold text-lg text-slate-900 mb-6">Enter Your Details</h4>

        {/* Monthly Bill Slider */}
        <div className="mb-6">
          <label className="text-sm font-medium text-slate-700 mb-2 block">Monthly Electricity Bill (Rs)</label>
          <input
            type="range"
            min={500}
            max={20000}
            step={100}
            value={monthlyBill}
            onChange={(e) => setMonthlyBill(Number(e.target.value))}
            className="w-full accent-primary-600"
          />
          <div className="flex justify-between items-center mt-2">
            <span className="text-3xl font-bold gradient-text">
              Rs {monthlyBill.toLocaleString('en-IN')}
            </span>
            <input
              type="number"
              value={monthlyBill}
              onChange={(e) => setMonthlyBill(Number(e.target.value))}
              className="w-24 rounded-lg border border-slate-200 px-3 py-2 text-right"
            />
          </div>
        </div>

        {/* Roof Area */}
        <div className="mb-6">
          <label className="text-sm font-medium text-slate-700 mb-2 block">Approximate Roof Area</label>
          <select
            value={roofSize}
            onChange={(e) => setRoofSize(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-4 py-3"
          >
            {roofSizes.map((size) => (
              <option key={size.value} value={size.value}>{size.label}</option>
            ))}
          </select>
        </div>

        {/* City */}
        <div className="mb-6">
          <label className="text-sm font-medium text-slate-700 mb-2 block">Your City / District</label>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-4 py-3"
          >
            {cities.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Property Type */}
        <div className="mb-6">
          <label className="text-sm font-medium text-slate-700 mb-2 block">Property Type</label>
          <div className="flex flex-col sm:flex-row gap-2">
            {propertyTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setPropertyType(type.id)}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  propertyType === type.id
                    ? 'bg-[#0B1F3A] text-white'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <div className="shrink-0">{type.icon}</div> {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Toggles */}
        {includeSubsidyToggle && (
          <div className="mb-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={includeSubsidy}
                onChange={(e) => setIncludeSubsidy(e.target.checked)}
                className="w-5 h-5 accent-primary-600"
              />
              <span className="text-sm text-slate-700">Include Government Subsidy in calculation?</span>
            </label>
          </div>
        )}

        {includeLoanToggle && (
          <div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={includeLoan}
                onChange={(e) => setIncludeLoan(e.target.checked)}
                className="w-5 h-5 accent-primary-600"
              />
              <span className="text-sm text-slate-700">Loan financing?</span>
            </label>
          </div>
        )}
      </motion.div>

      {/* Results Panel */}
      <ResultsPanel results={results} onContactClick={() => router.push('/contact')} />
    </div>
  )
}
