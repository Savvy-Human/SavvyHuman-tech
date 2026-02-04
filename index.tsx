import React, { useEffect, useState, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  ArrowRight, 
  Cpu, 
  Heart, 
  Users, 
  Layers, 
  ChevronRight,
  Settings,
  Sparkles,
  Zap,
  Mail,
  Phone,
  User,
  Calendar,
  Clock,
  CheckCircle2,
  X,
  ShieldCheck,
  BrainCircuit
} from 'lucide-react';

// --- Components ---

const SavvyLogo = ({ className = "", onClick }: { className?: string, onClick?: () => void }) => (
  <button onClick={onClick} className={`flex flex-col items-center md:items-start focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg group ${className}`}>
    <div className="flex items-center space-x-3">
      <div className="logo-icon group-hover:scale-110 transition-transform duration-500">
        <div className="w-4 h-4 bg-white/20 rounded-full blur-[2px]"></div>
      </div>
      <div className="flex flex-col leading-none text-left">
        <span className="font-brand font-extrabold text-2xl tracking-tighter text-white">SAVVY IT</span>
        <span className="font-serif italic text-[10px] text-zinc-400 tracking-wide mt-0.5">Technology, made simple.</span>
      </div>
    </div>
  </button>
);

const Navbar = ({ onContactClick, onHomeClick, onPillarClick }: { onContactClick: () => void, onHomeClick: () => void, onPillarClick: (id: number) => void }) => (
  <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center bg-black/40 backdrop-blur-md border-b border-white/5">
    <SavvyLogo onClick={onHomeClick} />
    <div className="hidden md:flex space-x-10 text-[10px] font-bold tracking-[0.3em] text-zinc-500">
      <button onClick={() => onPillarClick(0)} className="hover:text-white hover:translate-y-[-1px] transition-all outline-none uppercase">Foundation</button>
      <button onClick={() => onPillarClick(1)} className="hover:text-white hover:translate-y-[-1px] transition-all outline-none uppercase">Heart</button>
      <button onClick={() => onPillarClick(2)} className="hover:text-white hover:translate-y-[-1px] transition-all outline-none uppercase">Future</button>
    </div>
    <button 
      onClick={onContactClick}
      className="btn-focus px-6 py-2 rounded-full bg-white text-black text-[10px] font-bold tracking-widest hover:bg-zinc-200 active:bg-zinc-300 transition-all uppercase shadow-lg shadow-white/5 hover:shadow-white/10"
    >
      Contact
    </button>
  </nav>
);

// --- Landing Page Sections ---

const Hero = ({ scrollY, onContactClick }: { scrollY: number, onContactClick: () => void }) => (
  <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-32 pb-20 text-center overflow-hidden">
    <div 
      className="parallax-element absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"
      style={{ transform: `translate(-50%, calc(-50% + ${scrollY * 0.1}px))` }}
    ></div>
    
    <div className="max-w-5xl mx-auto z-10 flex flex-col items-center">
      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold tracking-[0.2em] text-zinc-400 mb-10 uppercase transition-all hover:border-white/20">
        <Sparkles className="w-3 h-3 text-blue-400" />
        <span>Elevating the Human Experience</span>
      </div>
      
      <h1 className="text-xl md:text-3xl lg:text-4xl font-extrabold tracking-tight mb-8 leading-[1.4] text-white max-w-2xl mx-auto drop-shadow-sm">
        Whether you're an individual, a small business, or a scaling enterprise, we provide the <span className="text-blue-400">intelligent support systems</span> to make you unstoppable.
      </h1>
      
      <p className="font-serif italic text-lg md:text-xl text-zinc-400 mb-14 max-w-xl mx-auto tracking-wide leading-relaxed">
        Technology, made simple.
      </p>
      
      <div className="flex flex-col md:flex-row gap-8 justify-center mt-4">
        <button 
          onClick={onContactClick}
          className="btn-focus group relative flex flex-col items-start p-10 rounded-3xl glass hover:bg-white/[0.05] hover:border-blue-500/40 active:scale-[0.99] transition-all duration-500 w-full md:w-80 text-left"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
             <Users className="w-5 h-5 text-blue-400" />
          </div>
          <span className="text-zinc-500 text-xs font-bold mb-1 uppercase tracking-widest">Individual</span>
          <span className="text-2xl font-bold tracking-tight mb-6 uppercase">PERSONAL EDGE</span>
          <div className="mt-auto flex items-center text-xs font-bold tracking-widest text-blue-400 group-hover:translate-x-2 transition-transform uppercase">
            Start Journey <ArrowRight className="ml-2 w-4 h-4" />
          </div>
        </button>

        <button 
          onClick={onContactClick}
          className="btn-focus group relative flex flex-col items-start p-10 rounded-3xl glass hover:bg-white/[0.05] hover:border-pink-500/40 active:scale-[0.99] transition-all duration-500 w-full md:w-80 text-left"
        >
          <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
             <Layers className="w-5 h-5 text-pink-400" />
          </div>
          <span className="text-zinc-500 text-xs font-bold mb-1 uppercase tracking-widest">Business</span>
          <span className="text-2xl font-bold tracking-tight mb-6 uppercase">ENTERPRISE CLASS</span>
          <div className="mt-auto flex items-center text-xs font-bold tracking-widest text-pink-400 group-hover:translate-x-2 transition-transform uppercase">
            Scalability <ArrowRight className="ml-2 w-4 h-4" />
          </div>
        </button>
      </div>
    </div>
  </section>
);

// --- Consolidated Pillar Navigation ---

const PillarNavigation = ({ activePillar, setActivePillar }: { activePillar: number, setActivePillar: (id: number) => void }) => {
  const pillars = [
    { id: 0, name: "Foundation", icon: <ShieldCheck className="w-6 h-6" />, color: "text-blue-400", bg: "bg-blue-500/10", border: "hover:border-blue-500/30", activeBorder: "border-blue-500" },
    { id: 1, name: "Heart", icon: <Heart className="w-6 h-6" />, color: "text-pink-400", bg: "bg-pink-500/10", border: "hover:border-pink-500/30", activeBorder: "border-pink-500" },
    { id: 2, name: "Future", icon: <BrainCircuit className="w-6 h-6" />, color: "text-purple-400", bg: "bg-purple-500/10", border: "hover:border-purple-500/30", activeBorder: "border-purple-500" }
  ];

  return (
    <section id="pillars-nav" className="py-20 px-6 border-t border-white/5 bg-[#080808]/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <div className="flex justify-center items-center space-x-6 md:space-x-12">
            {pillars.map((p) => (
              <button
                key={p.id}
                onMouseEnter={() => setActivePillar(p.id)}
                onClick={() => setActivePillar(p.id)}
                className={`group flex flex-col items-center space-y-4 transition-all duration-500 p-6 rounded-[2rem] border ${activePillar === p.id ? `${p.activeBorder} bg-white/[0.03]` : `border-transparent hover:bg-white/[0.02]`}`}
              >
                <div className={`w-14 h-14 rounded-2xl ${p.bg} flex items-center justify-center ${p.color} transition-transform duration-500 ${activePillar === p.id ? 'scale-110 shadow-lg' : 'group-hover:scale-105 opacity-60 group-hover:opacity-100'}`}>
                  {p.icon}
                </div>
                <span className={`text-[10px] font-bold tracking-[0.3em] uppercase transition-colors duration-500 ${activePillar === p.id ? 'text-white' : 'text-zinc-600 group-hover:text-zinc-400'}`}>
                  {p.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="relative min-h-[600px]">
          {/* Pillar 0: Foundation */}
          <div className={`transition-all duration-700 absolute inset-0 ${activePillar === 0 ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
            <div className="mb-20 text-center md:text-left">
              <div className="pillar-title revealed mb-6">PILLAR 01: FOUNDATION</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">IT Support</h2>
              <p className="text-xl md:text-2xl font-serif italic text-zinc-500 tracking-wide">Refined & Humanized</p>
              <p className="text-lg text-zinc-400 max-w-2xl mt-8 leading-relaxed font-light tracking-wide">
                Technical excellence for everyone. We eliminate friction so you can focus on what matters most.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <div className="space-y-12">
                <div className="flex items-center space-x-4 border-b border-white/5 pb-4">
                  <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">Individual</h3>
                </div>
                <div className="space-y-10">
                  {[
                    { title: "Home Office Setup", desc: "Executive-level productivity environments for your residence." },
                    { title: "Device Security", desc: "Protecting your personal data across mobile and desktop devices." },
                    { title: "Personal IT Concierge", desc: "Direct access to technical assistance for any personal project." }
                  ].map((item, i) => (
                    <div key={i} className="group relative pl-8 py-2">
                      <div className="absolute left-0 top-0 h-full w-px bg-zinc-800 group-hover:bg-blue-400 transition-colors"></div>
                      <h4 className="font-bold text-xl mb-3 group-hover:text-blue-100 transition-colors tracking-tight">{item.title}</h4>
                      <p className="text-zinc-500 text-lg leading-[1.7] tracking-wide font-light">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-12">
                <div className="flex items-center space-x-4 border-b border-white/5 pb-4">
                  <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-pink-400">Business</h3>
                </div>
                <div className="space-y-10">
                  {[
                    { title: "Security & Compliance", desc: "Proactive threat defense and compliance for scaling teams." },
                    { title: "Cloud Architecture", desc: "Transition your legacy systems to robust Azure/AWS environments." },
                    { title: "Proactive Defense", desc: "Managed detection and response to keep your operations running." }
                  ].map((item, i) => (
                    <div key={i} className="group relative pl-8 py-2">
                      <div className="absolute left-0 top-0 h-full w-px bg-zinc-800 group-hover:bg-pink-400 transition-colors"></div>
                      <h4 className="font-bold text-xl mb-3 group-hover:text-pink-100 transition-colors tracking-tight">{item.title}</h4>
                      <p className="text-zinc-500 text-lg leading-[1.7] tracking-wide font-light">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 1: Heart */}
          <div className={`transition-all duration-700 absolute inset-0 ${activePillar === 1 ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              <div className="pt-8">
                <div className="pillar-title revealed mb-6">PILLAR 02: HEART</div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight leading-tight">Strategic Empowerment</h2>
                <p className="text-xl text-zinc-400 mb-12 leading-[1.8] font-light tracking-wide">
                  Technology only works if people can use it confidently. We don't just provide tools; we amplify your ability to use them.
                </p>
                <div className="grid grid-cols-1 gap-6">
                  {[
                    "AI Literacy and real world use-cases",
                    "Practical training and enablement",
                    "Clear documentation and SOPs"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-5 group p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all">
                      <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                      <span className="text-zinc-300 font-medium text-lg tracking-wide">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative group mt-8">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-pink-500/10 rounded-[40px] blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative glass p-10 md:p-14 rounded-[40px] border-white/10">
                  <div className="w-12 h-12 bg-pink-500/10 rounded-2xl flex items-center justify-center mb-8">
                    <Zap className="w-6 h-6 text-pink-400" />
                  </div>
                  <p className="text-xl md:text-2xl leading-[1.6] text-zinc-200 font-light italic font-serif">
                    Exclusive training resources, workshops, corporate trainings and individual coaching that builds real understanding.
                  </p>
                  <div className="mt-12 flex items-center space-x-6">
                    <div className="flex -space-x-3">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full bg-zinc-900 border-2 border-zinc-950 flex items-center justify-center text-[10px] font-bold text-zinc-500">
                          0{i}
                        </div>
                      ))}
                    </div>
                    <div className="h-px w-12 bg-zinc-800"></div>
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.3em]">Enabling Mastery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 2: Future */}
          <div className={`transition-all duration-700 absolute inset-0 ${activePillar === 2 ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
            <div className="max-w-4xl mx-auto text-center md:text-left">
              <div className="pillar-title revealed mb-6">PILLAR 03: FUTURE</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">Intelligent Systems</h2>
              
              <div className="mb-20 text-center">
                <blockquote className="text-2xl md:text-4xl font-serif italic mb-8 leading-[1.5] text-zinc-300 tracking-wide">
                  “Our value is not in our ability to be a machine, but in our ability to be a human.”
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <div className="h-px w-8 bg-zinc-800"></div>
                  <cite className="text-zinc-500 font-bold uppercase tracking-[0.4em] text-[10px]">Deepak Chopra</cite>
                  <div className="h-px w-8 bg-zinc-800"></div>
                </div>
              </div>

              <div className="glass p-10 md:p-16 rounded-[40px] border-white/10 relative overflow-hidden group">
                <h3 className="text-xl md:text-2xl font-bold mb-12 text-zinc-100 uppercase tracking-widest leading-relaxed">
                  Applied intelligence that actually works in real systems and real businesses, with real people.
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 pt-12 border-t border-white/5">
                  <div className="flex flex-col">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                      <Settings className="w-6 h-6 text-blue-400" />
                    </div>
                    <h4 className="text-lg font-bold mb-4 uppercase tracking-widest text-white">For individuals</h4>
                    <p className="text-zinc-400 leading-[1.7] text-base font-light tracking-wide">
                      We look at how you manage your life— tasks, reminders, paperwork, schedules…and make it simpler using smart automation.
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                      <Cpu className="w-6 h-6 text-purple-400" />
                    </div>
                    <h4 className="text-lg font-bold mb-4 uppercase tracking-widest text-white">For businesses</h4>
                    <p className="text-zinc-400 leading-[1.7] text-base font-light tracking-wide">
                      We map workflows, systems, and data flows to translate operational complexity into intelligent, scalable systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Contact Page ---

const ContactPage = () => {
  const [msgSubjects, setMsgSubjects] = useState<string[]>([]);
  const [bookingService, setBookingService] = useState('');
  
  const subjects = ['General', 'Technical Support', 'Business Inquiry', 'AI Strategy', 'Training', 'Other'];
  const services = ['Personal Tech Setup', 'Security Audit', 'Enterprise Strategy', 'AI Integration Workshop', 'Managed Services'];

  const toggleSubject = (sub: string) => {
    setMsgSubjects(prev => prev.includes(sub) ? prev.filter(s => s !== sub) : [...prev, sub]);
  };

  const handleMessageSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    const selectedSubjects = msgSubjects.length > 0 ? msgSubjects.join(', ') : 'None selected';
    
    const body = `Name: ${name}\nEmail: ${email}\nSubjects: ${selectedSubjects}\n\nMessage:\n${message}`;
    window.location.href = `mailto:Renee@ILSavvyIT.onmicrosoft.com?subject=Message from ${name}&body=${encodeURIComponent(body)}`;
  };

  const handleBookingSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const date = formData.get('date');
    const time = formData.get('time');
    const notes = formData.get('notes');
    
    const body = `Booking Request from: ${name}\nEmail: ${email}\nService: ${bookingService}\nPreferred Date: ${date}\nPreferred Time: ${time}\n\nNotes:\n${notes}`;
    window.location.href = `mailto:Renee@ILSavvyIT.onmicrosoft.com?subject=Booking Request - ${bookingService}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold tracking-[0.2em] text-zinc-400 mb-6 uppercase">
            <Mail className="w-3 h-3 text-blue-400" />
            <span>Get in Touch</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Connect with Savvy IT</h1>
          <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto">We're here to bridge the gap between human potential and technological excellence.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Details & Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="glass p-10 rounded-[32px] border-white/10 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest text-white">Direct Contact</h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-5 group">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-all">
                      <User className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-1">Lead Consultant</p>
                      <p className="text-xl text-white font-medium">Renee</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-5 group">
                    <div className="w-12 h-12 rounded-2xl bg-pink-500/10 flex items-center justify-center group-hover:bg-pink-500/20 transition-all">
                      <Phone className="w-5 h-5 text-pink-400" />
                    </div>
                    <div>
                      <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-1">Phone</p>
                      <a href="tel:2179860863" className="text-xl text-white font-medium hover:text-pink-400 transition-colors">(217) 986-0863</a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-5 group">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-all">
                      <Mail className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-1">Email</p>
                      <a href="mailto:savvy_i_t@outlook.com" className="text-xl text-white font-medium hover:text-blue-400 transition-colors break-all">savvy_i_t@outlook.com</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                <p className="text-zinc-400 leading-relaxed font-light italic">
                  "Our mission is to make technology feel like a natural extension of your workflow, not a barrier."
                </p>
              </div>
            </div>
          </div>

          {/* Forms Area */}
          <div className="lg:col-span-2 space-y-12">
            {/* Message Form */}
            <div className="glass p-10 rounded-[40px] border-white/10 hover:border-white/20 transition-all duration-700">
              <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest text-white flex items-center">
                <Sparkles className="w-5 h-5 mr-3 text-blue-400" /> Send a Message
              </h2>
              <form onSubmit={handleMessageSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Your Name</label>
                    <input required name="name" type="text" className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all text-white" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Email Address</label>
                    <input required name="email" type="email" className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all text-white" placeholder="john@company.com" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Subjects of Interest (Select multiple)</label>
                  <div className="flex flex-wrap gap-3">
                    {subjects.map(sub => (
                      <button 
                        key={sub}
                        type="button"
                        onClick={() => toggleSubject(sub)}
                        className={`px-5 py-2 rounded-full text-xs font-medium transition-all border ${msgSubjects.includes(sub) ? 'bg-blue-500 border-blue-400 text-white' : 'bg-white/5 border-white/10 text-zinc-400 hover:border-white/30'}`}
                      >
                        {sub}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Message</label>
                  <textarea required name="message" rows={5} className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all text-white resize-none" placeholder="Tell us how we can help..."></textarea>
                </div>

                <button type="submit" className="w-full py-5 rounded-2xl bg-white text-black font-bold uppercase tracking-[0.2em] text-xs hover:bg-zinc-200 active:scale-[0.98] transition-all">
                  Send Inquiry
                </button>
              </form>
            </div>

            {/* Booking Form */}
            <div className="glass p-10 rounded-[40px] border-white/10 hover:border-white/20 transition-all duration-700">
              <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest text-white flex items-center">
                <Calendar className="w-5 h-5 mr-3 text-pink-400" /> Book a Consultation
              </h2>
              <form onSubmit={handleBookingSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Client Name</label>
                    <input required name="name" type="text" className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/20 transition-all text-white" placeholder="Organization or Individual Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Contact Email</label>
                    <input required name="email" type="email" className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/20 transition-all text-white" placeholder="hello@company.com" />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Service Required</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {services.map(service => (
                      <button 
                        key={service}
                        type="button"
                        onClick={() => setBookingService(service)}
                        className={`flex items-center justify-between p-4 rounded-xl border text-sm transition-all ${bookingService === service ? 'bg-pink-500/10 border-pink-500/50 text-white' : 'bg-white/5 border-white/10 text-zinc-400 hover:border-white/20'}`}
                      >
                        {service}
                        {bookingService === service && <CheckCircle2 className="w-4 h-4 text-pink-400" />}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Preferred Date</label>
                    <div className="relative">
                      <input required name="date" type="date" className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/20 transition-all text-white appearance-none" />
                      <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600 pointer-events-none" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Preferred Time Window</label>
                    <div className="relative">
                      <select required name="time" className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/20 transition-all text-white appearance-none">
                        <option value="morning">Morning (9AM - 12PM)</option>
                        <option value="afternoon">Afternoon (1PM - 4PM)</option>
                        <option value="evening">Evening (5PM - 7PM)</option>
                      </select>
                      <Clock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Project Notes</label>
                  <textarea name="notes" rows={3} className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/20 transition-all text-white resize-none" placeholder="Briefly describe your requirements..."></textarea>
                </div>

                <button type="submit" className="w-full py-5 rounded-2xl bg-gradient-to-r from-pink-500 to-blue-500 text-white font-bold uppercase tracking-[0.2em] text-xs hover:opacity-90 active:scale-[0.98] transition-all shadow-xl shadow-pink-500/10">
                  Request Booking
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Footer Component ---

const Footer = ({ onHomeClick, onContactClick }: { onHomeClick: () => void, onContactClick: () => void }) => (
  <footer className="py-20 px-6 bg-zinc-950 border-t border-white/5">
    <div className="max-w-6xl mx-auto flex flex-col items-center">
      <SavvyLogo className="mb-12" onClick={onHomeClick} />
      <div className="flex flex-wrap justify-center gap-12 text-[10px] font-bold tracking-[0.4em] text-zinc-500 mb-16 uppercase">
        <button onClick={onHomeClick} className="hover:text-white hover:translate-y-[-1px] transition-all outline-none">Foundation</button>
        <button onClick={onHomeClick} className="hover:text-white hover:translate-y-[-1px] transition-all outline-none">Heart</button>
        <button onClick={onHomeClick} className="hover:text-white hover:translate-y-[-1px] transition-all outline-none">Future</button>
        <button onClick={onContactClick} className="hover:text-white hover:translate-y-[-1px] transition-all outline-none">Contact</button>
        <a href="#" className="hover:text-white hover:translate-y-[-1px] transition-all outline-none">Privacy</a>
      </div>
      <div className="w-full pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold tracking-widest text-zinc-600 uppercase">
        <p>&copy; {new Date().getFullYear()} Savvy IT Solutions. Redefining human-tech interaction.</p>
        <p className="mt-4 md:mt-0">Made simple. Made human.</p>
      </div>
    </div>
  </footer>
);

// --- Main App Logic ---

const App = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentView, setCurrentView] = useState<'landing' | 'contact'>('landing');
  const [activePillar, setActivePillar] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px"
    });

    if (currentView === 'landing') {
      document.querySelectorAll('.pillar-title').forEach(el => observer.observe(el));
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [currentView]);

  const navigateToContact = () => {
    setCurrentView('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setCurrentView('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onPillarClick = (id: number) => {
    if (currentView !== 'landing') setCurrentView('landing');
    setActivePillar(id);
    const el = document.getElementById('pillars-nav');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen selection:bg-blue-500/30 bg-[#050505]">
      <Navbar onContactClick={navigateToContact} onHomeClick={navigateToHome} onPillarClick={onPillarClick} />
      
      {currentView === 'landing' ? (
        <>
          <Hero scrollY={scrollY} onContactClick={navigateToContact} />
          <PillarNavigation activePillar={activePillar} setActivePillar={setActivePillar} />
        </>
      ) : (
        <ContactPage />
      )}
      
      <Footer onHomeClick={navigateToHome} onContactClick={navigateToContact} />
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);