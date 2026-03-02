import { motion } from "motion/react";
import { Cpu, Users, Rocket, Mail, MapPin, ChevronRight } from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-brand rounded-lg flex items-center justify-center">
          <Cpu className="text-zinc-950 w-6 h-6" />
        </div>
        <span className="text-xl font-bold tracking-tighter">ROBOTEK</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <a href="#team" className="hover:text-white transition-colors">Team</a>
        <a href="#join" className="bg-brand text-zinc-950 px-5 py-2.5 rounded-full hover:bg-brand-dark transition-all">Early Access</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-40 pb-20 px-6 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />
    </div>
    
    <div className="max-w-7xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-brand/10 text-brand text-xs font-bold tracking-widest uppercase mb-6 border border-brand/20">
          Building Future Engineers
        </span>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 text-gradient">
          We empower future <br className="hidden md:block" /> engineers.
        </h1>
        <p className="max-w-2xl mx-auto text-zinc-400 text-lg md:text-xl leading-relaxed mb-10">
          At Robotek, we believe every young mind has the power to change the world. Through robotics, we spark curiosity, creativity, and innovation.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#join" className="w-full sm:w-auto bg-brand text-zinc-950 px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2">
            Get Early Access <ChevronRight className="w-5 h-5" />
          </a>
          <a href="#about" className="w-full sm:w-auto glass px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors">
            Learn More
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 px-6 bg-zinc-900/50">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">What We Do</h2>
          <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
            <p>
              Welcome to Robotek Company Limited, where we are on a mission to inspire young minds and nurture the engineers of tomorrow. Our passion lies in equipping students with the knowledge and skills they need to explore the exciting world of robotics and technology.
            </p>
            <p>
              Our journey is one of collaboration, dedication, and a shared vision to make learning robotics accessible and engaging for students.
            </p>
            <p>
              At Robotek, we believe in sparking curiosity, encouraging creativity, and building a foundation for the engineers and innovators of the future.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="h-48 glass rounded-3xl flex flex-col items-center justify-center p-6 text-center">
              <Rocket className="w-10 h-10 text-brand mb-4" />
              <h3 className="font-bold">Innovation</h3>
            </div>
            <div className="h-64 glass rounded-3xl flex flex-col items-center justify-center p-6 text-center">
              <Users className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="font-bold">Collaboration</h3>
            </div>
          </div>
          <div className="space-y-4 pt-8">
            <div className="h-64 glass rounded-3xl flex flex-col items-center justify-center p-6 text-center">
              <Cpu className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="font-bold">Technology</h3>
            </div>
            <div className="h-48 glass rounded-3xl flex flex-col items-center justify-center p-6 text-center">
              <div className="text-3xl font-bold text-brand mb-2">100%</div>
              <h3 className="font-bold">Dedicated</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Team = () => {
  const members = [
    { name: "Mr. Sagoe Gad Lawson", role: "Founder and Robotics Educator", desc: "Passionate about making robotics accessible to children." },
    { name: "Mr. Godwin Appiah", role: "Marketing Manager and COO", desc: "Empowering young learners and driving our mission forward." },
    { name: "Mr. Armah", role: "Head of ICT at KNUST Basic School", desc: "Invaluable guidance and support." },
    { name: "Mr. Achi", role: "Investor and Director", desc: "Committed to advancing robotics education at Crystal Height International." },
    { name: "Mr. Abdul Kawiyu Zachariah", role: "Robotics Coordinator", desc: "Ensuring smooth technical operations." },
    { name: "Ephraim Sagoe", role: "Creative & Technical Contributor", desc: "Developing innovative solutions." },
    { name: "Edna Galaa", role: "Project & Administrative Manager", desc: "Ensuring smooth operations and hands-on learning." },
  ];

  return (
    <section id="team" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">The Team</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            At Robotek, we are a dedicated team working together to inspire and nurture future engineers.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-3xl group"
            >
              <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand/20 transition-colors">
                <Users className="w-6 h-6 text-zinc-400 group-hover:text-brand transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-brand text-sm font-medium mb-4 uppercase tracking-wider">{member.role}</p>
              <p className="text-zinc-500 text-sm leading-relaxed">{member.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const JoinUs = () => (
  <section id="join" className="py-24 px-6 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 blur-[160px] rounded-full -z-10" />
    <div className="max-w-3xl mx-auto glass p-8 md:p-16 rounded-[40px] border-brand/20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Get Early Access</h2>
        <p className="text-zinc-400">Join our training programs and start your journey into the world of robotics.</p>
      </div>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full bg-zinc-900 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand transition-colors"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full bg-zinc-900 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand transition-colors"
          />
        </div>
        <input
          type="email"
          placeholder="Email Address"
          className="w-full bg-zinc-900 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand transition-colors"
        />
        <button className="w-full bg-brand text-zinc-950 font-bold py-4 rounded-xl hover:bg-brand-dark transition-all text-lg shadow-lg shadow-brand/20">
          Request Access
        </button>
      </form>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
              <Cpu className="text-zinc-950 w-5 h-5" />
            </div>
            <span className="text-lg font-bold tracking-tighter">ROBOTEK</span>
          </div>
          <p className="text-zinc-500 text-sm leading-relaxed">
            Equipping students with the knowledge and skills they need to explore the exciting world of robotics and technology.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-zinc-500">
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-brand" /> info@robotek.com
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-brand" /> P.O. Box UP1902, Kumasi, Ghana
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Social</h4>
          <div className="flex gap-4">
            {["Twitter", "LinkedIn", "Instagram"].map((social) => (
              <a key={social} href="#" className="text-sm text-zinc-500 hover:text-white transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600 uppercase tracking-widest">
        <div className="flex flex-col md:flex-row items-center gap-2">
          <p>© 2026 ROBOTEK COMPANY LIMITED. ALL RIGHTS RESERVED.</p>
          <span className="hidden md:inline text-zinc-800">•</span>
          <p className="text-zinc-500">WEB DEV BY NENIFIX</p>
        </div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export { Navbar, Hero, About, Team, JoinUs, Footer };
