import { motion } from "framer-motion";
import { 
  BarChart3, 
  Code2, 
  Database, 
  LineChart, 
  Terminal, 
  ArrowUpRight, 
  CheckCircle2, 
  MessageSquare, 
  FileText, 
  Clock,
  TrendingUp,
  BrainCircuit
} from "lucide-react";
import { NeonButton } from "@/components/NeonButton";
import profilePhoto from "@assets/profile/profil.jpg";
import projectBlc from "@assets/projet/blc.png";
import projectDataInsightHub from "@assets/projet/Data-Insight-Hub.png";
import projectTenderMoment from "@assets/projet/tender-moment.png";
import eventDevfest from "@assets/events/speaker_devfest_2025.jpg";
import eventGrandeConference from "@assets/events/Grande_conference2025.jpg";
import eventBlockchain from "@assets/events/conference_blockchain.jpg";
import eventAccueil from "@assets/events/accueil_nouveaux__dec_2024.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Portfolio() {
  return (
    <div className="bg-background min-h-screen overflow-x-hidden text-foreground">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 sm:px-12 lg:px-24 bg-gradient-to-b from-blue-50 to-white">
        {/* Abstract background elements */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto z-10 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-5 mb-8">
              <div className="relative h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 rounded-full overflow-hidden border-2 border-primary/30 box-glow shrink-0 shadow-xl">
                <img src={profilePhoto} alt="Photo de profil — Djochrist K." className="h-full w-full object-cover" />
              </div>
              <div>
                <div className="text-primary font-mono tracking-widest uppercase text-sm">Djochrist K.</div>
                <div className="text-muted-foreground text-xs sm:text-sm font-mono tracking-wider uppercase">
                  Analyste des données et Développeur logiciel
                </div>
              </div>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl md:text-8xl font-display font-bold text-foreground leading-[1.1] mb-8">
              Transformez vos données en <br className="hidden md:block"/>
              <span className="text-primary text-glow">décisions stratégiques.</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-12 font-light leading-relaxed">
              J&apos;aide les entreprises à comprendre leurs données pour prendre des décisions plus éclairées grâce aux statistiques, et à gagner en crédibilité avec des sites web modernes.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6">
              <NeonButton href="mailto:djochristkfreelance@gmail.com">
                ME CONTACTER
              </NeonButton>
              <NeonButton href="#projets" variant="outline">
                VOIR MES PROJETS
              </NeonButton>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <span className="text-xs tracking-widest font-mono uppercase">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
        </motion.div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section id="about" className="py-24 px-6 sm:px-12 lg:px-24 bg-card/30 border-y border-border/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
          >
            <motion.div variants={fadeInUp} className="lg:col-span-12">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                L'obsession du <span className="text-primary">détail.</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Avec mes années d'expérience  en développement et analyse, mon approche se résume en un mot.
              </p>
              <div className="inline-block border border-primary/30 bg-primary/5 px-6 py-3 box-glow mb-8">
                <span className="font-display text-xl text-foreground">Mentalité : <span className="text-primary font-bold">Grind</span></span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="py-32 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold">Mes <span className="text-primary">Services</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Service 1: Data */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="border border-border p-10 lg:p-14 bg-card hover:border-primary/50 transition-colors duration-500 relative group overflow-hidden box-glow-hover"
            >
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center text-primary mb-8 rounded-none">
                <BarChart3 size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-6">Data Analysis</h3>
              
              <ul className="space-y-4 mb-10 text-muted-foreground">
                <li className="flex items-start gap-3"><CheckCircle2 className="text-primary shrink-0 mt-1" size={18}/> Statistiques Descriptives</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-primary shrink-0 mt-1" size={18}/> Statistiques Inférentielles</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-primary shrink-0 mt-1" size={18}/> Analyse de Corrélations</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-primary shrink-0 mt-1" size={18}/> Modélisation Prédictive</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-primary shrink-0 mt-1" size={18}/> Data Visualisation Avancée</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-primary shrink-0 mt-1" size={18}/> Analyse de Trafic Web</li>
              </ul>
            </motion.div>

            {/* Service 2: Web Dev */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="border border-border p-10 lg:p-14 bg-card hover:border-primary/50 transition-colors duration-500 relative group overflow-hidden box-glow-hover"
            >
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center text-primary mb-8 rounded-none">
                <Code2 size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-6">Web Development</h3>
              
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3"><Terminal className="text-primary shrink-0 mt-1" size={18}/> Site pour entreprise</li>
                <li className="flex items-start gap-3"><Terminal className="text-primary shrink-0 mt-1" size={18}/> Site pour organisation</li>
                <li className="flex items-start gap-3"><Terminal className="text-primary shrink-0 mt-1" size={18}/> Landing page</li>
                <li className="flex items-start gap-3"><Terminal className="text-primary shrink-0 mt-1" size={18}/> Optimisation SEO</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. TOOLS SECTION */}
      <section className="py-32 px-6 sm:px-12 lg:px-24 bg-slate-50/60 border-y border-border/40">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
              Mes <span className="text-primary">Tools</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Une boîte à outils pensée pour analyser, construire et livrer des solutions digitales solides.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="relative overflow-hidden rounded-3xl border border-border bg-white/80 p-10 shadow-sm"
            >
              <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Database size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold">Data</h3>
                    <p className="text-muted-foreground">Des outils concrets pour lire, structurer et interpréter les données.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["Excel", "R", "Google Analytics", "Statistiques avec Python", "Web Scraping avec Python"].map((tool) => (
                    <div key={tool} className="rounded-2xl border border-border bg-background/70 px-5 py-4 text-sm font-medium text-foreground">
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 shadow-sm"
            >
              <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <LineChart size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold">Web</h3>
                    <p className="text-muted-foreground">Une stack moderne pour créer des interfaces rapides, fluides et professionnelles.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite", "Node.js", "Express", "Radix UI / shadcn/ui"].map((tool) => (
                    <div key={tool} className="rounded-2xl border border-border bg-background/70 px-5 py-4 text-sm font-medium text-foreground">
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. PROJECTS SECTION */}
      <section id="projets" className="py-32 px-6 sm:px-12 lg:px-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold">Travaux <br/><span className="text-primary">Récents</span></h2>
            <p className="text-muted-foreground max-w-md">Une sélection d'applications web et de plateformes de données conçues pour générer de l'impact.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="group block bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
            >
              <div className="relative h-72 overflow-hidden bg-slate-200">
                <img 
                  src={projectBlc}
                  alt="Big Light Construction" 
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold tracking-widest uppercase rounded-full shadow-sm">
                    Site Vitrine
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors">Big Light Construction</h3>
                <p className="text-slate-500 mb-8 text-sm leading-relaxed line-clamp-2">
                  Plateforme vitrine premium pour une entreprise de construction, mettant en valeur leur portfolio.
                </p>
                <div className="flex items-center justify-between">
                  <a 
                    href="https://djochrist-big-light-construction.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary group/link"
                  >
                    Explorer <ArrowUpRight size={16} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="group block bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
            >
              <div className="relative h-72 overflow-hidden bg-slate-200">
                <img 
                  src={projectDataInsightHub}
                  alt="Data Insight Hub" 
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold tracking-widest uppercase rounded-full shadow-sm">
                    Data Explorer
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors">Data Insight Hub</h3>
                <p className="text-slate-500 mb-8 text-sm leading-relaxed line-clamp-2">
                  Application interactive permettant l'exploration et la visualisation avancée de données CSV.
                </p>
                <div className="flex items-center justify-between">
                  <a 
                    href="https://data-insight-hub-chi.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary group/link"
                  >
                    Explorer <ArrowUpRight size={16} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="group block bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
            >
              <div className="relative h-72 overflow-hidden bg-slate-200">
                <img 
                  src={projectTenderMoment}
                  alt="TenderMoment" 
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold tracking-widest uppercase rounded-full shadow-sm">
                    Expérience Web
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors">TenderMoment</h3>
                <p className="text-slate-500 mb-8 text-sm leading-relaxed line-clamp-2">
                  Une expérience romantique personnalisée en ligne, combinant design émotionnel et fluidité.
                </p>
                <div className="flex items-center justify-between">
                  <a 
                    href="https://tender-moment.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary group/link"
                  >
                    Explorer <ArrowUpRight size={16} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. GALLERY MARQUEE SECTION */}
      <section className="py-24 overflow-hidden border-y border-border/30 bg-background relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>
        
        <div className="flex w-[200%] animate-marquee">
          <div className="flex w-1/2 justify-around items-center px-4">
            <div className="flex items-center gap-6">
              <img src={eventDevfest} alt="DevFest — talk/speaker" className="h-40 w-64 object-cover border border-border grayscale hover:grayscale-0 transition-all" />
              <img src={eventGrandeConference} alt="Grande conférence — photo" className="h-40 w-64 object-cover border border-border grayscale hover:grayscale-0 transition-all" />
              <img src={eventBlockchain} alt="Conférence blockchain — photo" className="h-40 w-64 object-cover border border-border grayscale hover:grayscale-0 transition-all" />
              <img src={eventAccueil} alt="Accueil — décembre 2024" className="h-40 w-64 object-cover border border-border grayscale hover:grayscale-0 transition-all" />
            </div>
          </div>
          <div className="flex w-1/2 justify-around items-center px-4">
            <div className="flex items-center gap-6">
              {/* Duplicate for infinite loop */}
              <img src={eventDevfest} alt="DevFest — talk/speaker" className="h-40 w-64 object-cover border border-border grayscale hover:grayscale-0 transition-all" />
              <img src={eventGrandeConference} alt="Grande conférence — photo" className="h-40 w-64 object-cover border border-border grayscale hover:grayscale-0 transition-all" />
              <img src={eventBlockchain} alt="Conférence blockchain — photo" className="h-40 w-64 object-cover border border-border grayscale hover:grayscale-0 transition-all" />
              <img src={eventAccueil} alt="Accueil — décembre 2024" className="h-40 w-64 object-cover border border-border grayscale hover:grayscale-0 transition-all" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY ME SECTION */}
      <section className="py-32 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Pourquoi travailler avec <span className="text-primary">moi ?</span></h2>
            <div className="h-1 w-20 bg-primary mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="p-8 border border-border bg-card/50 text-center group hover:bg-card hover:border-primary/30 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-background border border-primary/50 flex items-center justify-center text-primary mx-auto mb-6 group-hover:scale-110 transition-transform box-glow">
                <BrainCircuit size={24} />
              </div>
              <h4 className="text-xl font-display font-bold mb-4">Approche Analytique</h4>
              <p className="text-muted-foreground text-sm">Chaque décision est justifiée par les données et la logique.</p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="p-8 border border-border bg-card/50 text-center group hover:bg-card hover:border-primary/30 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-background border border-primary/50 flex items-center justify-center text-primary mx-auto mb-6 group-hover:scale-110 transition-transform box-glow">
                <MessageSquare size={24} />
              </div>
              <h4 className="text-xl font-display font-bold mb-4">Communication Claire</h4>
              <p className="text-muted-foreground text-sm">Transparence totale sur l'avancement. Vous savez toujours où en est votre projet.</p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="p-8 border border-border bg-card/50 text-center group hover:bg-card hover:border-primary/30 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-background border border-primary/50 flex items-center justify-center text-primary mx-auto mb-6 group-hover:scale-110 transition-transform box-glow">
                <FileText size={24} />
              </div>
              <h4 className="text-xl font-display font-bold mb-4">Livrables Documentés</h4>
              <p className="text-muted-foreground text-sm">Code propre et analyses fournies avec une documentation complète et exploitable.</p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="p-8 border border-border bg-card/50 text-center group hover:bg-card hover:border-primary/30 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-background border border-primary/50 flex items-center justify-center text-primary mx-auto mb-6 group-hover:scale-110 transition-transform box-glow">
                <Clock size={24} />
              </div>
              <h4 className="text-xl font-display font-bold mb-4">Respect des Délais</h4>
              <p className="text-muted-foreground text-sm">Engagement absolu sur les timelines. La ponctualité est le socle de la confiance.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. CONTACT SECTION */}
      <section className="py-40 px-6 sm:px-12 lg:px-24 bg-gradient-to-t from-blue-50 to-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-5xl md:text-8xl font-display font-bold uppercase tracking-tighter mb-12">
              TRAVAILLONS <br/><span className="text-primary text-glow">ENSEMBLE.</span>
            </motion.h2>
            
            <motion.div variants={fadeInUp} className="mb-16">
              <a 
                href="mailto:djochristkfreelance@gmail.com" 
                className="text-xl md:text-3xl font-mono text-muted-foreground hover:text-white transition-colors border-b border-muted-foreground/30 hover:border-primary pb-2 interactive"
              >
                djochristkfreelance@gmail.com
              </a>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <NeonButton 
                href="mailto:djochristkfreelance@gmail.com" 
                className="text-xl px-12 py-6 font-bold"
              >
                DÉMARRER UN PROJET
              </NeonButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center border-t border-border/50 bg-background text-muted-foreground text-sm font-mono">
        <p>© {new Date().getFullYear()} Djochrist K. — Data Analyst & Software Developer</p>
      </footer>
    </div>
  );
}
