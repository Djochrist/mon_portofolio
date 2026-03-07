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

const staggerCards = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 }
  }
};

const getToolBadge = (tool: string) => {
  const customBadges: Record<string, string> = {
    Python: "Python",
    Pandas: "Pandas",
    NumPy: "NumPy",
    "Scikit-learn": "SKL",
    Matplotlib: "MPL",
    Seaborn: "Seaborn",
    Plotly: "Plotly",
    SQL: "SQL",
    "Web Scraping (BeautifulSoup, Scrapy)": "Scraping",
    "API Data": "API",
    Streamlit: "Streamlit",
    Dash: "Dash",
    React: "React",
    TypeScript: "TS",
    "Tailwind CSS": "Tailwind",
    Git: "Git",
    GitHub: "GitHub",
    "Jupyter Notebook": "Jupyter",
    Excel: "Excel",
    "Google Analytics": "Analytics",
  };

  return customBadges[tool] ?? tool;
};

export default function Portfolio() {
  return (
    <div className="bg-background min-h-screen overflow-x-hidden text-foreground">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 via-emerald-50/70 to-white px-5 pt-28 pb-16 sm:px-10 sm:pt-24 sm:pb-20 lg:px-24">
        {/* Abstract background elements */}
        <div className="absolute top-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-1/4 h-[300px] w-[300px] rounded-full bg-primary/10 blur-[100px] pointer-events-none"></div>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="absolute left-0 right-0 top-[22%] hidden h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent lg:block"></div>
        
        <div className="z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-6 inline-flex items-center gap-3 rounded-full border border-primary/15 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm sm:gap-5 sm:px-5 sm:py-3">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-primary/30 shadow-xl box-glow sm:h-24 sm:w-24 md:h-28 md:w-28">
                <img src={profilePhoto} alt="Photo de profil — Djochrist K." className="h-full w-full object-cover" />
              </div>
              <div>
                <div className="text-primary font-mono tracking-widest uppercase text-sm">Djochrist K.</div>
                <div className="text-muted-foreground text-xs sm:text-sm font-mono tracking-wider uppercase">
                  Analyste des données et Développeur logiciel
                </div>
              </div>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="mb-6 text-2xl font-display font-bold leading-[1.12] tracking-tight text-foreground sm:text-4xl md:mb-8 md:text-6xl">
              Prenez de meilleures décisions <br className="hidden md:block"/>
              grâce aux données et renforcez votre présence digitale.
            </motion.h1>

            <motion.p variants={fadeInUp} className="mb-4 text-lg font-semibold uppercase tracking-[0.24em] text-primary/80 sm:text-sm">
              Analyse stratégique. Image digitale premium.
            </motion.p>

            <motion.p variants={fadeInUp} className="mb-10 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl md:mb-12 md:text-2xl">
              J&apos;accompagne les entreprises dans l&apos;analyse de leurs données pour orienter des décisions plus éclairées, tout en concevant des sites web modernes qui renforcent leur crédibilité.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              <NeonButton href="mailto:djochristkfreelance@gmail.com">
                ME CONTACTER
              </NeonButton>
              <NeonButton href="#services" variant="outline">
                MES SERVICES
              </NeonButton>
              <NeonButton href="#stack" variant="outline">
                MON STACK
              </NeonButton>
              <NeonButton href="#projets" variant="outline">
                VOIR MES PROJETS
              </NeonButton>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerCards}
            className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1"
          >
            {[
              {
                icon: TrendingUp,
                title: "Décisions plus sûres",
                text: "Des analyses qui clarifient vos priorités et réduisent l'incertitude."
              },
              {
                icon: LineChart,
                title: "Présence plus forte",
                text: "Des interfaces modernes qui renforcent la confiance autour de votre marque."
              },
              {
                icon: Code2,
                title: "Exécution soignée",
                text: "Un rendu propre, rapide et pensé pour valoriser votre activité."
              }
            ].map(({ icon: Icon, title, text }) => (
              <motion.div
                key={title}
                variants={fadeInUp}
                className="rounded-3xl border border-white/60 bg-white/75 p-6 shadow-lg shadow-slate-200/40 backdrop-blur-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon size={22} />
                </div>
                <h3 className="mb-2 text-lg font-display font-bold text-foreground">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 opacity-50 md:flex"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <span className="text-xs tracking-widest font-mono uppercase">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
        </motion.div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section id="about" className="border-y border-border/50 bg-card/30 px-5 py-20 sm:px-10 sm:py-24 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16"
          >
            <motion.div variants={fadeInUp} className="lg:col-span-8">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                L'obsession du <span className="text-primary">détail.</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg mb-6">
                Avec mes années d'expérience  en développement et analyse, mon approche se résume en un mot.
              </p>
              <div className="inline-block border border-primary/30 bg-primary/5 px-6 py-3 box-glow mb-8">
                <span className="font-display text-xl text-foreground">Mentalité : <span className="text-primary font-bold">Grind</span></span>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="lg:col-span-4">
              <div className="rounded-3xl border border-primary/15 bg-white/80 p-6 shadow-sm backdrop-blur-sm">
                <div className="mb-3 text-xs font-mono uppercase tracking-[0.24em] text-primary">Positionnement</div>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Une approche hybride entre rigueur statistique et design moderne pour produire des solutions lisibles, utiles et crédibles.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section id="services" className="relative px-5 py-24 sm:px-10 sm:py-28 lg:px-24 lg:py-32">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-12 sm:mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold">Mes <span className="text-primary">Services</span></h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerCards}
            className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8"
          >
            {/* Service 1: Data */}
            <motion.div 
              variants={fadeInUp}
              className="relative overflow-hidden border border-border bg-card p-8 transition-colors duration-500 group hover:border-primary/50 box-glow-hover sm:p-10 lg:p-14"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/70 to-primary/10"></div>
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
              variants={fadeInUp}
              className="relative overflow-hidden border border-border bg-card p-8 transition-colors duration-500 group hover:border-primary/50 box-glow-hover sm:p-10 lg:p-14"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/70 to-primary/10"></div>
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
          </motion.div>
        </div>
      </section>

      {/* 4. STACK SECTION */}
      <section id="stack" className="border-y border-border/40 bg-slate-50/60 px-5 py-24 sm:px-10 sm:py-28 lg:px-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-12 sm:mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
              Mon <span className="text-primary">Stack</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Les technologies et outils que j’utilise pour analyser, construire et livrer des solutions solides.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerCards}
            className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 xl:grid-cols-5 xl:gap-8"
          >
            {[
              {
                icon: Database,
                title: "Data",
                description: "Les bibliothèques et langages que j’utilise pour explorer, modéliser et visualiser les données.",
                items: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Plotly", "SQL"],
              },
              {
                icon: BarChart3,
                title: "Data Collection",
                description: "Des outils pour collecter des données fiables depuis le web ou des services externes.",
                items: ["Web Scraping (BeautifulSoup, Scrapy)", "API Data"],
              },
              {
                icon: LineChart,
                title: "Data Apps",
                description: "Des frameworks utiles pour transformer l’analyse en applications interactives et démonstratives.",
                items: ["Streamlit", "Dash"],
              },
              {
                icon: Code2,
                title: "Web",
                description: "Une base moderne pour concevoir des interfaces rapides, propres et agréables à utiliser.",
                items: ["React", "TypeScript", "Tailwind CSS"],
              },
              {
                icon: Terminal,
                title: "Tools",
                description: "Les outils transverses que j’utilise pour travailler proprement, documenter et collaborer.",
                items: ["Git", "GitHub", "Jupyter Notebook", "Excel", "Google Analytics"],
              },
            ].map(({ icon: Icon, title, description, items }) => (
              <motion.div
                key={title}
                variants={fadeInUp}
                className="self-start border border-border bg-card/50 p-8 transition-all group hover:border-primary/30 hover:bg-card"
              >
                <div className="w-12 h-12 rounded-full bg-background border border-primary/20 text-primary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform box-glow">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-display font-bold mb-4 text-center">{title}</h3>
                <p className="mb-5 text-center text-sm leading-relaxed text-muted-foreground">{description}</p>

                <ul className="grid grid-cols-2 gap-3 text-sm text-muted-foreground">
                  {items.map((tool) => (
                    <li key={tool} className="flex items-center justify-center text-center overflow-hidden">
                      <span className="inline-flex max-w-full items-center justify-center rounded-full bg-primary/8 px-3 py-2 text-sm font-medium text-primary/90 shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-primary/12 group-hover:shadow-md break-normal whitespace-normal text-center">
                        {getToolBadge(tool)}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. PROJECTS SECTION */}
      <section id="projets" className="bg-slate-50/50 px-5 py-24 sm:px-10 sm:py-28 lg:px-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold">Travaux <br/><span className="text-primary">Récents</span></h2>
            <p className="text-muted-foreground max-w-md">Une sélection d'applications web et de plateformes de données conçues pour générer de l'impact.</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerCards}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          >
            {/* Project 1 */}
            <motion.div 
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
          </motion.div>
        </div>
      </section>

      {/* 5. GALLERY MARQUEE SECTION */}
      <section className="relative overflow-hidden border-y border-border/30 bg-background py-20 sm:py-24">
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
      <section className="px-5 py-24 sm:px-10 sm:py-28 lg:px-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-14 text-center sm:mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Pourquoi travailler avec <span className="text-primary">moi ?</span></h2>
            <div className="h-1 w-20 bg-primary mx-auto"></div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerCards}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8"
          >
            <motion.div 
              variants={fadeInUp}
              className="border border-border bg-card/50 p-8 text-center transition-all group hover:border-primary/30 hover:bg-card"
            >
              <div className="w-12 h-12 rounded-full bg-background border border-primary/50 flex items-center justify-center text-primary mx-auto mb-6 group-hover:scale-110 transition-transform box-glow">
                <BrainCircuit size={24} />
              </div>
              <h4 className="text-xl font-display font-bold mb-4">Approche Analytique</h4>
              <p className="text-muted-foreground text-sm">Chaque décision est justifiée par les données et la logique.</p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="border border-border bg-card/50 p-8 text-center transition-all group hover:border-primary/30 hover:bg-card"
            >
              <div className="w-12 h-12 rounded-full bg-background border border-primary/50 flex items-center justify-center text-primary mx-auto mb-6 group-hover:scale-110 transition-transform box-glow">
                <MessageSquare size={24} />
              </div>
              <h4 className="text-xl font-display font-bold mb-4">Communication Claire</h4>
              <p className="text-muted-foreground text-sm">Transparence totale sur l'avancement. Vous savez toujours où en est votre projet.</p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="border border-border bg-card/50 p-8 text-center transition-all group hover:border-primary/30 hover:bg-card"
            >
              <div className="w-12 h-12 rounded-full bg-background border border-primary/50 flex items-center justify-center text-primary mx-auto mb-6 group-hover:scale-110 transition-transform box-glow">
                <FileText size={24} />
              </div>
              <h4 className="text-xl font-display font-bold mb-4">Livrables Documentés</h4>
              <p className="text-muted-foreground text-sm">Code propre et analyses fournies avec une documentation complète et exploitable.</p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="border border-border bg-card/50 p-8 text-center transition-all group hover:border-primary/30 hover:bg-card"
            >
              <div className="w-12 h-12 rounded-full bg-background border border-primary/50 flex items-center justify-center text-primary mx-auto mb-6 group-hover:scale-110 transition-transform box-glow">
                <Clock size={24} />
              </div>
              <h4 className="text-xl font-display font-bold mb-4">Respect des Délais</h4>
              <p className="text-muted-foreground text-sm">Engagement absolu sur les timelines. La ponctualité est le socle de la confiance.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 7. CONTACT SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-t from-emerald-50/70 to-white px-5 py-28 sm:px-10 sm:py-36 lg:px-24 lg:py-40">
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
