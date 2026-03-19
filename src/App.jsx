import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Layout, 
  Server, 
  ChevronRight,
  Menu,
  X,
  Terminal,
  Sun,
  Moon,
  Instagram,
  MessageCircle,
  Layers
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);


  const projects = [
    {
      title: "Meu Portfólio",
      description: "Site pessoal para apresentar meus projetos, habilidades e experiências como desenvolvedor, com design moderno e responsivo.",
      tech: ["React", "Vite", "Tailwind CSS", "JavaScript", "Lucide React"],
      link: "https://landingpage-odonto.vercel.app/",
      image: "/img/meu_portifolio.png"
    },
    {
      title: "Gestão Escolar",
      description: "Sistema de gestão escolar completo com funcionalidades para gerenciamento de alunos, professores e disciplinas.",
      tech: ["HTML", "CSS", "JavaScript", "MySQL"],
      link: "https://github.com/Welintondev/gestao-escolar.git",
      image: "/img/gestao_escolar.png"
    },
    {
      title: "Smile Odonto",
      description: "Landing page para clínica odontológica com design moderno e responsivo, focada em conversão de clientes.",
      tech: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
      link: "https://landingpage-odonto.vercel.app/",
      image: "/img/smile_odonto.png"
    },
    {
      title: "Minhas Finanças",
      description: "Aplicação web para controle financeiro pessoal, permitindo cadastro de receitas, despesas e visualização de gráficos financeiros.",
      tech: ["HTML5", "Tailwind CSS", "JavaScript"],
      link: "https://minhas-financas-khaki.vercel.app/",
      image: "/img/minhas_financas.png"
    }
  ];


  const socialLinks = [
    { 
      name: "GitHub", 
      icon: <Github size={22} />, 
      url: "https://github.com/Welintondev", 
      color: "hover:bg-slate-800" 
    },
    { 
      name: "LinkedIn", 
      icon: <Linkedin size={22} />, 
      url: "https://www.linkedin.com/in/welinton-luan-35ab9a291/", 
      color: "hover:bg-blue-600" 
    },
    { 
      name: "Instagram", 
      icon: <Instagram size={22} />, 
      url: "https://www.instagram.com/_welintonluan/", 
      color: "hover:bg-pink-600" 
    },
    { 
      name: "WhatsApp", 
      icon: <MessageCircle size={22} />, 
      url: "https://wa.me/5598985458247", 
      color: "hover:bg-green-600" 
    }
  ];

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="w-6 h-6 text-blue-500" />,
      skills: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "HTML/CSS"]
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6 text-emerald-500" />,
      skills: ["Node.js", "MySQL", "Git"]
    },
    {
      title: "Ferramentas",
      icon: <Layers className="w-6 h-6 text-purple-500" />,
      skills: ["VS Code", "GitHub", "Figma", "Windows"]
    }
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setActiveTab(id);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'}`}>
      
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all ${scrolled ? (isDarkMode ? 'bg-slate-950/90 border-b border-slate-800 backdrop-blur-md' : 'bg-white/90 shadow-md backdrop-blur-md') : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center h-16">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => scrollToSection('home')}>
            <div className="bg-blue-600 p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
              <Terminal className="text-white w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight">Welinton<span className="text-blue-600">.dev</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['home', 'skills', 'projects', 'contact'].map((id) => (
              <button key={id} onClick={() => scrollToSection(id)} className={`capitalize font-semibold transition-all relative group ${activeTab === id ? 'text-blue-600' : (isDarkMode ? 'text-slate-400' : 'text-slate-500')}`}>
                {id === 'home' ? 'Início' : id === 'skills' ? 'Habilidades' : id === 'projects' ? 'Projetos' : 'Contato'}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full ${activeTab === id ? 'w-full' : ''}`}></span>
              </button>
            ))}
            <button onClick={toggleTheme} className={`p-2.5 rounded-xl transition-all ${isDarkMode ? 'bg-slate-800 text-yellow-400' : 'bg-slate-100 text-slate-600'}`}>
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="relative pt-44 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-600 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full text-sm font-bold bg-blue-500/10 text-blue-500 border border-blue-500/20">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Disponível para novos projetos
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            Desenvolvendo Soluções com <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Inovação e Performance.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-12">
            Olá, eu sou o Welinton. Sou um Desenvolvedor apaixonado por criar experiências digitais memoráveis e interfaces de alta performance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={() => scrollToSection('contact')} className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-600/30 transition-all active:scale-95">
              Vamos conversar
            </button>
            <button onClick={() => scrollToSection('projects')} className={`px-8 py-4 rounded-2xl font-bold border transition-all active:scale-95 ${isDarkMode ? 'border-slate-800 hover:bg-slate-900' : 'border-slate-200 hover:bg-slate-50'}`}>
              Ver Projetos
            </button>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className={`py-24 px-6 ${isDarkMode ? 'bg-slate-900/40' : 'bg-slate-50/50'}`}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Minhas Habilidades</h2>
            <p className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>As tecnologias que fazem parte do meu dia a dia.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((cat, i) => (
              <div key={i} className={`p-8 rounded-3xl border transition-all hover:-translate-y-2 ${isDarkMode ? 'border-slate-800 bg-slate-900/50 hover:border-blue-500/50' : 'border-slate-100 bg-white shadow-sm hover:shadow-xl'}`}>
                <div className={`mb-6 p-3 inline-block rounded-2xl ${isDarkMode ? 'bg-slate-800' : 'bg-slate-50'}`}>{cat.icon}</div>
                <h3 className="text-xl font-bold mb-6">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(s => (
                    <span key={s} className={`px-3 py-1.5 rounded-xl text-xs font-bold ${isDarkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meus Projetos</h2>
              <p className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>Clique para ver o resultado final de cada trabalho.</p>
            </div>
            <a href="https://github.com/Welinton-silva" target="_blank" className="flex items-center gap-2 text-blue-600 font-bold hover:underline">
              Ver GitHub <ChevronRight size={18} />
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <div key={i} className={`group rounded-3xl overflow-hidden border transition-all ${isDarkMode ? 'border-slate-800 bg-slate-900/40' : 'border-slate-200 bg-white hover:shadow-2xl'}`}>
                <div className="relative h-52 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <a href={p.link} target="_blank" className="text-white text-sm font-bold flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-xl">
                      Visualizar Site <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex gap-2 mb-4">
                    {p.tech.map(t => <span key={t} className="text-[10px] uppercase font-extrabold text-blue-500">{t}</span>)}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                  <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6">
        <div className="container mx-auto max-w-5xl bg-slate-900 dark:bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Bora criar algo novo?</h2>
            <p className="text-lg mb-12 text-blue-100 opacity-80 max-w-xl mx-auto">
              Estou sempre em busca de novos desafios e parcerias. Sinta-se à vontade para me chamar em qualquer rede!
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {socialLinks.map((s, i) => (
                <a 
                  key={i} 
                  href={s.url} 
                  target="_blank" 
                  className={`w-14 h-14 flex items-center justify-center rounded-2xl bg-white/10 text-white transition-all hover:scale-110 shadow-xl ${s.color}`}
                  title={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <a href="mailto:welinton.dev@email.com" className="inline-block bg-white text-slate-900 px-12 py-5 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-colors">
              Enviar Email
            </a>
          </div>
        </div>
      </section>

      <footer className={`py-12 border-t text-center ${isDarkMode ? 'border-slate-900 text-slate-500' : 'border-slate-100 text-slate-400'}`}>
        <p className="font-bold mb-2">© 2026 Welinton dev. Todos os direitos reservados.</p>
        <p className="text-xs">Feito com React & Tailwind</p>
      </footer>
    </div>
  );
};

export default App;