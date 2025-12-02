import Head from "next/head";
import { useState } from 'react';
import { motion } from "framer-motion";
import { 
  Mail, 
  Heart, 
  Target, 
  Lightbulb, 
  Sparkles,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  BookOpen
} from "lucide-react";

const MemberCard = ({ member, getInitials }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] xl:w-[calc(20%-1.6rem)] bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col">
      {/* Gradient Header */}
      <div className={`h-24 bg-gradient-to-r ${member.colors.header} relative overflow-hidden`}>
        <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-x-10 -translate-y-10 blur-xl" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-white opacity-20 rounded-full translate-x-10 translate-y-10 blur-xl" />
      </div>

      {/* Initials Avatar */}
      <div className="flex justify-center -mt-12 relative z-10">
        <div className="w-24 h-24 rounded-full border-4 border-white bg-white shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <div className={`w-full h-full rounded-full bg-gradient-to-br ${member.colors.bg} flex items-center justify-center`}>
            <span className={`text-2xl font-bold bg-gradient-to-br ${member.colors.text} bg-clip-text text-transparent`}>
              {getInitials(member.name)}
            </span>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 pt-4 text-center flex-grow flex flex-col">
        <h3 className="font-bold text-indigo-600 text-lg mb-1">
          {member.name}
        </h3>
        <p className="text-purple-500 text-sm font-bold tracking-wide mb-4">
          {member.role}
        </p>
        
        {/* --- THE LOGIC FOR READ MORE --- */}
        <div className="mb-6 relative">
          <p 
            className={`text-gray-500 text-sm leading-relaxed transition-all duration-300 ${
              isExpanded ? '' : 'line-clamp-4' 
            }`}
          >
            {member.bio}
          </p>
          
          {/* Only show button if text is long enough (optional check) or always show it */}
          {member.bio && member.bio.length > 100 && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 text-xs font-bold text-indigo-500 hover:text-indigo-700 flex items-center justify-center mx-auto gap-1 transition-colors"
            >
              {isExpanded ? (
                <>Show Less <ChevronUp size={14} /></>
              ) : (
                <>Read More <ChevronDown size={14} /></>
              )}
            </button>
          )}
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-4 mt-auto">
          <a 
            href={`mailto:${member.email}`} 
            className="text-gray-400 hover:text-indigo-600 transition-colors transform hover:scale-110"
            title="Send Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default function About() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const teamMembers = [
    {
      name: "Bruno Fonseca",
      role: "Developer",
      email: "a2021129658@isec.pt",
      bio: "Bruno is a junior programmer currently working at OneSource. "
        + "He joined ISEC to study Computer Engineering and is now pursuing a master's degree in Computer Engineering. "
        + "He loves learning new things every day about web programming, as it is what he enjoys doing most. "
        + "Other things he likes to do are working with servers and going to the gym, doing a full workout so that when he gets home he can sleep well and end his day on a high note :D",
      colors: {
        bg: "from-blue-50 to-indigo-50",
        text: "from-blue-600 to-indigo-600",
        header: "from-blue-600 to-indigo-600"
      }
    },
    {
      name: "Bruno Guiomar",
      role: "Product Owner / Developer",
      email: "a2021137345@isec.pt",
      bio: "Bruno is a Software Engineer at Critical Software. "
        + "He holds a Double Degree in European Computer Science from ISEC and HAW Hamburg, reflecting his international approach to engineering. "
        + "He is currently deepening his expertise by pursuing a Master's degree at ISEC.",
      colors: {
        bg: "from-pink-50 to-rose-50",
        text: "from-pink-600 to-rose-600",
        header: "from-pink-600 to-rose-600"
      }
    },
    {
      name: "Eylül Ateş",
      role: "Developer",
      email: "a2025114252@isec.pt",
      bio: "Eylül is a Computer Engineering Bachelor's student at the Opole University of Technology in Poland. "
        + "She enjoys exploring new concepts that help her grow as a developer. Besides her interest in software, she has a deep curiosity for music and psychology. "
        + "Eylül loves learning new things and discovering different perspectives, both in her studies and in her personal life.",
      colors: {
        bg: "from-emerald-50 to-teal-50",
        text: "from-emerald-600 to-teal-600",
        header: "from-emerald-600 to-teal-600"
      }
    },
    {
      name: "Marina Baltar",
      role: "Developer",
      email: "a21280992@isec.pt",
      bio: "Marina is a software developer who enjoys solving problems and finding solutions through code. "
        + "She is currently studying for her master's in Computer Engineering at ISEC, where she brings motivation and a good sense of humor to group projects. "
        + "Outside of programming, she enjoys learning new languages (Duolingo knows her well), which makes her curious about the world beyond computers.",
      colors: {
        bg: "from-orange-50 to-amber-50",
        text: "from-orange-600 to-amber-600",
        header: "from-orange-600 to-amber-600"
      }
    },
    {
      name: "Rui Gonçalves",
      role: "Scrum Master / Developer",
      email: "a21250802@isec.pt",
      bio: "Rui is a junior software developer at the CCG/ZGDV Institute. "
        + "He embraced a new academic challenge at ISEC, pursuing a master's degree in Computer Engineering after completing bachelor's degrees in Computer Engineering and Economics. "
        + "Although sports haven't quite killed him yet (almost though...), he has interests in several sports, such as football, chess, and artistic swimming (in this case, as a referee, because this guy barely knows how to swim...). "
        + "Heavy metal makes his days much more melodic.",
      colors: {
        bg: "from-violet-50 to-purple-50",
        text: "from-violet-600 to-purple-600",
        header: "from-violet-600 to-purple-600"
      }
    },
  ];

  const values = [
    {
      icon: Heart,
      color: "bg-indigo-100 text-indigo-600",
      title: "Teamwork",
      desc: "Collaborative learning and support among group members.",
    },
    {
      icon: Target,
      color: "bg-pink-100 text-pink-600",
      title: "Agile Mindset",
      desc: "Iterative development with sprints and continuous feedback.",
    },
    {
      icon: Lightbulb,
      color: "bg-purple-100 text-purple-600",
      title: "Innovation",
      desc: "Exploring new tools like BotSchool.ai and Lovable.dev and Netlify.",
    },
    {
      icon: Sparkles,
      color: "bg-yellow-100 text-yellow-600",
      title: "Commitment",
      desc: "Delivering quality work and meeting sprint deadlines.",
    },
  ];

  // Helper to get initials
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <>
      <Head>
        <title>About Us — RocketTeam</title>
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-20"
        >
          {/* Section 1: About Header */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-indigo-600 mb-6 font-display">
              About Our Team
            </h1>
            <p className="text-gray-600 leading-relaxed text-lg">
              We are a team of students in the Software Engineering Master’s program at ISEC (Instituto Superior de Engenharia de Coimbra).
              As part of the Metodologias de Desenvolvimento de Software course, we are developing an interactive and educational website 
              designed to help users better understand the principles and practices of agile coaching.
            </p>
          </motion.div>

          {/* Section 2: Methodology (Centered) */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-lg border border-indigo-50 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-xl font-bold text-indigo-600 mb-4 font-display">
                Methodology
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We are following the <strong>Scrum framework</strong> to manage this project.
                This includes working in 3 sprints, conducting Daily Scrums, Sprint Planning, Sprint Reviews,
                and Retrospectives to ensure continuous improvement and timely delivery of increments.
              </p>
            </div>
          </motion.div>

          {/* Section 3: Meet the Team (Students) */}      
          <motion.div variants={itemVariants}>
            <h2 className="text-center text-2xl font-bold text-indigo-600 mb-12 font-display">
              The Team
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {teamMembers.map((member) => (
                <MemberCard 
                  key={member.name} 
                  member={member} 
                  getInitials={getInitials} 
                />
              ))}
            </div>
          </motion.div>

          {/* Section 4: Academic Values */}
          <motion.div variants={itemVariants} className="pb-12">
            <h2 className="text-center text-2xl font-bold text-indigo-600 mb-12 font-display">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div 
                  key={value.title} 
                  className="group flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:bg-white hover:-translate-y-1 border border-transparent hover:border-indigo-50"
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${value.color} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                    <value.icon size={28} />
                  </div>
                  <h3 className="font-bold text-indigo-600 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}