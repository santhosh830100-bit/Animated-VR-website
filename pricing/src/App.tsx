import React, { useState } from 'react';
import { Check, X, Sparkles, CreditCard, Lock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import basicImage from './assets/images/regenerated_image_1783141308252.jpg';
import standardImage from './assets/images/regenerated_image_1783141309025.jpg';
import proImage from './assets/images/regenerated_image_1783141309774.jpg';

// Type definitions for pricing tiers
interface PricingPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  description: string;
  features: string[];
  isPopular: boolean;
  accentColor: string;
  image: string;
}

const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    monthlyPrice: 100,
    description: 'Sleek spatial audio and HD immersive display for personal use',
    features: [
      'Full HD Display Mode',
      'Spatial Audio Engine',
      'Standard Comfort Headstrap'
    ],
    isPopular: false,
    accentColor: 'from-blue-500/20 to-indigo-500/10',
    image: basicImage
  },
  {
    id: 'standard',
    name: 'Standard',
    monthlyPrice: 150,
    description: 'Ultra HD visuals with dual-glowing smart visor tracking',
    features: [
      'Dual-LED Eye Tracking',
      '4K Ultra-Wide Visuals',
      'Ergonomic Balance Strap'
    ],
    isPopular: true,
    accentColor: 'from-orange-500/25 to-amber-500/10',
    image: standardImage
  },
  {
    id: 'pro',
    name: 'Pro',
    monthlyPrice: 200,
    description: 'Full dynamic spectrum display, developer tools, and tactile feedback',
    features: [
      'Infinite Refresh Rate Mode',
      'Full Haptic Sensory Suit Support',
      'Direct Developer Workspace Access'
    ],
    isPopular: false,
    accentColor: 'from-purple-500/20 to-fuchsia-500/10',
    image: proImage
  }
];

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  
  // Checkout form states
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('saravanaplastics80@gmail.com');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<'form' | 'success'>('form');

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate payment authorization
    setTimeout(() => {
      setIsSubmitting(false);
      setCheckoutStep('success');
    }, 1500);
  };

  const closeCheckout = () => {
    setSelectedPlan(null);
    setCheckoutStep('form');
    setFullName('');
    setCardNumber('');
    setExpiry('');
    setCvv('');
  };

  return (
    <div className="relative min-h-screen bg-[#090D1A] text-slate-100 font-sans overflow-x-hidden flex flex-col justify-between">
      
      {/* Decorative ambient glowing orbs */}
      <div className="absolute top-[-10%] left-1/4 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[20%] right-1/4 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[130px] pointer-events-none" />
      
      {/* Grid pattern overlay for tech aesthetic */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Main Container */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex-grow flex flex-col justify-center items-center w-full">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white font-display mb-6"
            id="main-title"
          >
            Pricing
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="text-slate-400 text-base sm:text-lg leading-relaxed px-4"
            id="main-subtitle"
          >
            Safely collect, process, and share your data with the plan that's{' '}
            <span className="block sm:inline">right for you.</span>
          </motion.p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 w-full max-w-6xl items-stretch px-2 sm:px-0">
          {PRICING_PLANS.map((plan, index) => {
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-transparent border border-slate-800/80 rounded-[28px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-slate-700/60 hover:bg-slate-900/10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
                id={`plan-card-${plan.id}`}
              >
                {/* Popular Glow Effect */}
                {plan.isPopular && (
                  <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-transparent rounded-[28px] pointer-events-none" />
                )}

                {/* Card Content Area */}
                <div>
                  {/* VR Headset Product Frame */}
                  <div className="mb-6 rounded-2xl overflow-hidden relative">
                    <img src={plan.image} alt={`${plan.name} VR Headset`} className="w-full h-auto object-cover aspect-[1.7]" referrerPolicy="no-referrer" />
                  </div>

                  {/* Optional Popular Pill Badge */}
                  {plan.isPopular && (
                    <div className="mb-4">
                      <span className="inline-flex items-center px-3.5 py-1 rounded-full text-[11px] font-semibold bg-[#1F2435] text-slate-300 border border-slate-700/60 tracking-wide uppercase">
                        Popular
                      </span>
                    </div>
                  )}

                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-white tracking-tight mb-2" id={`plan-name-${plan.id}`}>
                    {plan.name}
                  </h3>

                  {/* Pricing Display */}
                  <div className="flex items-baseline gap-2 mt-4 mb-3">
                    <span className="text-4xl sm:text-5xl font-bold text-white tracking-tight font-display">
                      ${plan.monthlyPrice}
                    </span>
                    <span className="text-sm text-slate-400">
                      per month
                    </span>
                  </div>

                  {/* Plan Description */}
                  <p className="text-slate-400 text-[14px] leading-relaxed min-h-[48px] mb-6">
                    {plan.description}
                  </p>

                  {/* Divider Line */}
                  <div className="border-t border-slate-800/80 my-5" />

                  {/* Features List */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white flex items-center justify-center mt-0.5 shadow-sm">
                          <Check className="w-3.5 h-3.5 text-[#090D1A] stroke-[3.5]" />
                        </div>
                        <span className="text-slate-200 text-sm font-medium leading-tight">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call-to-Action Button */}
                <button
                  onClick={() => setSelectedPlan(plan)}
                  className={`w-full py-3.5 px-6 rounded-full text-sm font-semibold text-center transition-all duration-300 cursor-pointer ${
                    plan.isPopular 
                      ? 'bg-white text-slate-950 hover:bg-slate-100 shadow-[0_4px_20px_rgba(255,255,255,0.15)] active:scale-[0.98]' 
                      : 'bg-white text-slate-950 hover:bg-slate-100 active:scale-[0.98]'
                  }`}
                  id={`choose-${plan.id}`}
                >
                  Choose Plan
                </button>
              </motion.div>
            );
          })}
        </div>
      </main>

      {/* Symmetrical simple footer */}
      <footer className="w-full text-center py-8 border-t border-slate-900 z-10 text-xs text-slate-500">
        <p>© 2026 Immersive Devices Corp. All rights reserved.</p>
      </footer>

      {/* Checkout / Subscription Modal Dialog */}
      <AnimatePresence>
        {selectedPlan && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeCheckout}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative w-full max-w-lg bg-[#0F1424] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl z-10"
              id="checkout-modal"
            >
              {/* Decorative accent top-glow bar */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-orange-500 via-sky-500 to-purple-500" />

              {/* Close Button */}
              <button
                onClick={closeCheckout}
                className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 p-1.5 rounded-full transition-all"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="p-6 sm:p-8">
                {checkoutStep === 'form' ? (
                  <>
                    {/* Header */}
                    <div className="mb-6 mt-2">
                      <div className="flex items-center gap-2 text-xs font-semibold text-orange-400 uppercase tracking-widest mb-1">
                        <Sparkles className="w-3.5 h-3.5" />
                        Subscription Plan
                      </div>
                      <h4 className="text-2xl font-bold text-white tracking-tight">
                        Subscribe to {selectedPlan.name}
                      </h4>
                      <p className="text-slate-400 text-sm mt-1">
                        Billed monthly at{' '}
                        <span className="text-white font-semibold">
                          ${selectedPlan.monthlyPrice}/mo
                        </span>
                      </p>
                    </div>

                    {/* Checkout Form */}
                    <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                      
                      {/* Name input */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="John Doe"
                          className="w-full bg-slate-900/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-slate-700 focus:ring-1 focus:ring-slate-700 transition-all"
                        />
                      </div>

                      {/* Email input */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your@email.com"
                          className="w-full bg-slate-900/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-slate-700 focus:ring-1 focus:ring-slate-700 transition-all"
                        />
                      </div>

                      {/* Credit Card Info */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                          Card Details
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            required
                            maxLength={19}
                            value={cardNumber}
                            onChange={(e) => {
                              // Auto format spaces every 4 digits
                              const val = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
                              const matches = val.match(/\d{4,16}/g);
                              const match = (matches && matches[0]) || '';
                              const parts = [];

                              for (let i = 0, len = match.length; i < len; i += 4) {
                                parts.push(match.substring(i, i + 4));
                              }

                              if (parts.length > 0) {
                                setCardNumber(parts.join(' '));
                              } else {
                                setCardNumber(val);
                              }
                            }}
                            placeholder="0000 0000 0000 0000"
                            className="w-full bg-slate-900/80 border border-slate-800 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-slate-700 focus:ring-1 focus:ring-slate-700 transition-all"
                          />
                          <CreditCard className="absolute left-4 top-3.5 w-4 h-4 text-slate-600" />
                        </div>
                      </div>

                      {/* Expiry & CVV */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                            Expiry
                          </label>
                          <input
                            type="text"
                            required
                            maxLength={5}
                            value={expiry}
                            onChange={(e) => {
                              // Auto insert /
                              let val = e.target.value.replace(/\D/g, '');
                              if (val.length > 2) {
                                val = `${val.substring(0, 2)}/${val.substring(2, 4)}`;
                              }
                              setExpiry(val);
                            }}
                            placeholder="MM/YY"
                            className="w-full bg-slate-900/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-slate-700 focus:ring-1 focus:ring-slate-700 transition-all text-center"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                            CVC / CVV
                          </label>
                          <input
                            type="password"
                            required
                            maxLength={4}
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))}
                            placeholder="•••"
                            className="w-full bg-slate-900/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-slate-700 focus:ring-1 focus:ring-slate-700 transition-all text-center"
                          />
                        </div>
                      </div>

                      {/* Guarantee message */}
                      <div className="flex items-center gap-2 bg-[#1E293B]/30 border border-slate-800/40 rounded-xl p-3 text-xs text-slate-400 mt-2">
                        <Lock className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Secure SSL 256-Bit Encrypted sandbox transaction.</span>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-white text-slate-950 py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer hover:bg-slate-100 disabled:opacity-50 flex items-center justify-center gap-2 mt-4"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-slate-950" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Authorizing Transaction...
                          </>
                        ) : (
                          <>
                            Confirm Subscription
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                ) : (
                  /* Success Screen */
                  <div className="text-center py-6 flex flex-col items-center">
                    <motion.div
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: 'spring', damping: 15 }}
                      className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mb-6 border border-emerald-500/20"
                    >
                      <CheckCircle2 className="w-10 h-10" />
                    </motion.div>
                    
                    <h4 className="text-2xl font-bold text-white mb-2">
                      Subscribed Successfully!
                    </h4>
                    
                    <p className="text-slate-400 text-sm max-w-sm mb-6">
                      Welcome aboard! Your 3D Visor dynamic environment is being provisioned for_
                      <span className="text-white font-semibold">{email}</span>.
                    </p>

                    <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 w-full text-left space-y-2 mb-8">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-500">Selected Plan:</span>
                        <span className="text-slate-200 font-semibold">{selectedPlan.name}</span>
                      </div>
                      <div className="flex justify-between text-xs border-t border-slate-800/80 pt-2 mt-2">
                        <span className="text-slate-500">Amount Charged:</span>
                        <span className="text-emerald-400 font-semibold">
                          ${selectedPlan.monthlyPrice}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={closeCheckout}
                      className="w-full bg-slate-800 hover:bg-slate-700 text-white py-3.5 px-6 rounded-xl font-semibold text-sm transition-all"
                    >
                      Close Window
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
