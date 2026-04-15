import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { GraduationCap, BookOpen, Target, Cpu, Mail, ChevronDown, Award, Github } from 'lucide-react';
import ThreeScene from './components/ThreeScene';

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`min-h-screen flex flex-col items-center justify-center px-6 py-20 relative ${className}`}>
    {children}
  </section>
);

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative font-sans selection:bg-brand-primary selection:text-black">
      {/* 3D Background */}
      <ThreeScene scrollY={scrollY} />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-40">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold tracking-tighter"
        >
          SUMIT<span className="text-brand-primary">.</span>
        </motion.div>
        <div className="hidden md:flex gap-12 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
          <a href="#about" className="hover:text-brand-primary transition-colors">01. About</a>
          <a href="#journey" className="hover:text-brand-primary transition-colors">02. Journey</a>
          <a href="#future" className="hover:text-brand-primary transition-colors">03. Future</a>
          <a href="https://github.com/prosumitkumawat" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">04. GitHub</a>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <Section>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-5xl"
          >
            <span className="subtitle mb-4 block">Professional Portfolio</span>
            <h1 className="text-7xl md:text-[10rem] font-display font-bold mb-8 leading-[0.85] tracking-tighter">
              SUMIT <br /> <span className="text-gradient">KUMAWAT</span>
            </h1>
            <p className="text-lg md:text-xl text-white/40 font-light max-w-xl mx-auto leading-relaxed uppercase tracking-[0.2em]">
              Academic Excellence • Strategic Aspirant • Future Engineer
            </p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mt-32 flex flex-col items-center gap-4 text-white/20"
            >
              <div className="w-[1px] h-20 bg-gradient-to-b from-brand-primary to-transparent" />
            </motion.div>
          </motion.div>
        </Section>

        {/* About / Academic Excellence */}
        <Section id="about">
          <div className="max-w-6xl w-full grid md:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-brand-primary font-mono text-sm mb-4 block">01. BACKGROUND</span>
              <h2 className="section-title mb-8">Academic <br /> Excellence</h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                स्कूल के दिनों से ही मैंने हमेशा श्रेष्ठता (Excellence) को अपना लक्ष्य बनाया है। 
                एक **School Topper** के रूप में, मैंने न केवल अकादमिक सफलता प्राप्त की, बल्कि अनुशासन और निरंतरता के महत्व को भी समझा।
              </p>
              <div className="flex gap-8">
                <div>
                  <div className="text-3xl font-display font-bold text-brand-primary">100%</div>
                  <div className="text-xs uppercase tracking-widest text-white/30">Dedication</div>
                </div>
                <div className="w-[1px] h-12 bg-white/10" />
                <div>
                  <div className="text-3xl font-display font-bold text-brand-accent">#1</div>
                  <div className="text-xs uppercase tracking-widest text-white/30">Rank Holder</div>
                </div>
              </div>
            </motion.div>
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="glass p-12 rounded-3xl relative z-10"
              >
                <Award className="text-brand-primary mb-6" size={48} />
                <h3 className="text-2xl font-bold mb-4">Top Tier Performance</h3>
                <p className="text-white/40 leading-relaxed">
                  मेरी सफलता का राज मेरी जिज्ञासु प्रवृत्ति और हर समस्या को हल करने का जुनून है।
                </p>
              </motion.div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-primary/10 blur-[100px] rounded-full" />
            </div>
          </div>
        </Section>

        {/* Timeline / Journey */}
        <Section id="journey">
          <div className="max-w-5xl w-full">
            <div className="text-center mb-24">
              <span className="text-brand-primary font-mono text-sm mb-4 block">02. THE JOURNEY</span>
              <h2 className="section-title">Career Evolution</h2>
            </div>
            
            <div className="space-y-12 relative">
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 hidden md:block" />
              
              {[
                { 
                  year: "Academic Foundation", 
                  title: "School Excellence", 
                  desc: "स्कूल के दिनों में अकादमिक श्रेष्ठता और अनुशासन की नींव। हमेशा से पढ़ाई में अव्वल प्रदर्शन।",
                  align: "left"
                },
                { 
                  year: "Present", 
                  title: "SSC Aspirant", 
                  desc: "प्रशासनिक सेवाओं में करियर बनाने के लिए SSC की तैयारी। सामान्य अध्ययन और तर्कशक्ति पर पकड़।",
                  align: "right"
                },
                { 
                  year: "Future", 
                  title: "B.Tech Engineering", 
                  desc: "तकनीकी नवाचार और समस्या समाधान के लिए इंजीनियरिंग की डिग्री प्राप्त करने का लक्ष्य।",
                  align: "left"
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${item.align === 'right' ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1 w-full">
                    <div className={`glass p-8 rounded-2xl ${item.align === 'right' ? 'md:text-right' : ''}`}>
                      <span className="text-brand-primary font-bold mb-2 block">{item.year}</span>
                      <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                      <p className="text-white/50 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-brand-primary shadow-[0_0_15px_rgba(0,229,255,0.5)] z-10 hidden md:block" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Skills Grid */}
        <Section>
          <div className="max-w-6xl w-full">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="md:col-span-2 glass p-12 rounded-3xl flex flex-col justify-end min-h-[300px]">
                <h2 className="text-4xl font-display font-bold mb-4">Strategic <br /> Mindset</h2>
                <p className="text-white/40">कठिन परीक्षाओं की तैयारी ने मुझे दबाव में काम करना और समय प्रबंधन सिखाया है।</p>
              </div>
              {[
                { label: "Logic", val: "95%", color: "brand-primary" },
                { label: "Strategy", val: "90%", color: "brand-secondary" },
                { label: "Analysis", val: "88%", color: "brand-accent" },
                { label: "Focus", val: "98%", color: "white" }
              ].map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="glass p-8 rounded-3xl flex flex-col justify-between"
                >
                  <span className="text-[10px] uppercase tracking-widest text-white/30">{skill.label}</span>
                  <div className={`text-3xl font-display font-bold text-${skill.color}`}>{skill.val}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Contact */}
        <Section>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <span className="subtitle mb-8 block">Get In Touch</span>
            <h2 className="text-5xl md:text-8xl font-display font-bold mb-16 tracking-tighter">
              READY FOR THE <br /> <span className="text-gradient">NEXT CHAPTER</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a 
                href="mailto:sumitkumawat090912@gmail.com"
                className="group relative px-12 py-6 overflow-hidden rounded-full glass transition-all hover:border-brand-primary"
              >
                <div className="absolute inset-0 bg-brand-primary/10 translate-y-full group-hover:translate-y-0 transition-transform" />
                <span className="relative z-10 font-bold flex items-center gap-3">
                  <Mail size={20} /> sumitkumawat090912@gmail.com
                </span>
              </a>
              <a 
                href="https://github.com/prosumitkumawat"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-12 py-6 overflow-hidden rounded-full glass transition-all hover:border-brand-primary"
              >
                <div className="absolute inset-0 bg-brand-primary/10 translate-y-full group-hover:translate-y-0 transition-transform" />
                <span className="relative z-10 font-bold flex items-center gap-3">
                  <Github size={20} /> GitHub
                </span>
              </a>
            </div>
            
            <footer className="mt-40 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 w-full max-w-6xl mx-auto">
              <div className="text-[10px] uppercase tracking-[0.5em] text-white/20">
                © 2026 SUMIT KUMAWAT • ALL RIGHTS RESERVED
              </div>
              <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-white/20">
                <span>JAIPUR, INDIA</span>
                <span>AVAILABLE FOR COLLABORATION</span>
              </div>
            </footer>
          </motion.div>
        </Section>
      </main>
    </div>
  );
}
