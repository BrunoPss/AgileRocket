// T2.9: Agile Coach Page Implementation
// Structure: Mockup-style Accordion (Summary -> Overview -> Key Points -> Examples).
// Content: ORIGINAL content from T2.4.1 Knowledge Base.

import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from 'react';
import { 
    GraduationCap, BookOpen, Heart, Zap, Target, MessageSquare, Scale, CheckCircle,
    BarChart, Layers, Shield, ChevronDown, Lightbulb, Briefcase, Info
} from "lucide-react";

// DATA STRUCTURE: Matches the visual mockup (Summary List + Detailed Sections)
const sections = [
    {
        icon: BookOpen,
        title: '1. Introduction to Agile Coaching',
        themeColor: 'text-indigo-600',
        bgColor: 'bg-indigo-50',
        borderColor: 'border-indigo-200',
        details: {
            summary: [
                "Professional practice focused on helping organizations adopt agile.",
                "Acts as facilitator, mentor, teacher, and catalyst for change.",
                "Bridges the gap between agile theory and real-world scenarios.",
                "Works at individual, team, and organizational levels."
            ],
            overview: "Agile Coaching is not just about implementing frameworks like Scrum or Kanban. It is a deep professional practice that combines coaching psychology, technical mastery, and organizational change management to foster true business agility and a mindset shift.",
            keyPoints: [
                "Fosters an Agile Mindset over just doing agile mechanics.",
                "Balances the four stances: Teaching, Mentoring, Facilitating, and Coaching.",
                "Requires navigating conflict and building psychological safety."
            ],
            examples: [
                "Guiding a traditional team through their first agile transformation.",
                "Helping a manager transition from command-and-control to servant leadership."
            ]
        }
    },
    {
        icon: Layers, 
        title: '2. Core Competencies',
        themeColor: 'text-purple-600',
        bgColor: 'bg-purple-50',
        borderColor: 'border-purple-200',
        details: {
            summary: [
                "Facilitating complex discussions neutrally.",
                "Professional coaching to unlock potential.",
                "Teaching frameworks effectively.",
                "Mastering technical and business domains."
            ],
            overview: "Based on the Agile Coaching Competency Framework (Lyssa Adkins), a coach must balance multiple domains. It's not enough to just know Scrum; you must also know how to teach it, mentor people in it, and coach them through the difficulties of change.",
            keyPoints: [
                "Facilitation is about holding the space, not leading the discussion.",
                "Professional Coaching focuses on the person, not the problem.",
                "Technical Mastery helps in gaining respect from developer teams."
            ],
            examples: [
                "Running a Value Stream Mapping workshop to identify bottlenecks.",
                "Conducting a 1:1 coaching session with a Product Owner."
            ]
        }
    },
    {
        icon: Target,
        title: '3. The Agile Coaching Stances',
        themeColor: 'text-pink-600',
        bgColor: 'bg-pink-50',
        borderColor: 'border-pink-200',
        details: {
            summary: [
                "Teacher: Imparts new knowledge.",
                "Mentor: Shares experience and advice.",
                "Facilitator: Manages group decision making.",
                "Coach: Inspires creative problem solving."
            ],
            overview: "An effective coach moves fluidly between different 'stances' depending on the team's needs at the moment. Knowing which hat to wear—and when to switch it—is the hallmark of an experienced coach.",
            keyPoints: [
                "Don't coach when they need teaching (they don't know the answer).",
                "Don't teach when they need coaching (they need ownership).",
                "Facilitation is the neutral ground for conflict resolution."
            ],
            examples: [
                "Switching from 'Facilitator' during a Daily Scrum to 'Teacher' when explaining a new retrospective technique."
            ]
        }
    },
    {
        icon: Zap,
        title: '4. Key Responsibilities',
        themeColor: 'text-yellow-600',
        bgColor: 'bg-yellow-50',
        borderColor: 'border-yellow-200',
        details: {
            summary: [
                "Leading organizational transformation.",
                "Building high-performing teams.",
                "Removing impediments and bottlenecks.",
                "Fostering psychological safety."
            ],
            overview: "The responsibilities of an Agile Coach extend far beyond running meetings; they are change agents who operate across the entire organization to improve the flow of value.",
            keyPoints: [
                "Focuses on the whole system, not just local optimization.",
                "Works with leadership to align strategy with execution.",
                "Champions cultural change and transparency."
            ],
            examples: [
                "Working with HR to align performance reviews with agile team goals.",
                "Establishing a Community of Practice (CoP) for Scrum Masters."
            ]
        }
    },
    {
        icon: BarChart,
        title: '5. Agile Coach vs. Scrum Master',
        themeColor: 'text-emerald-600',
        bgColor: 'bg-emerald-50',
        borderColor: 'border-emerald-200',
        details: {
            summary: [
                "Scrum Master focuses on 1-2 teams.",
                "Agile Coach focuses on the enterprise.",
                "SM drives team effectiveness.",
                "Coach drives organizational health."
            ],
            overview: "While the roles overlap, the scope differs significantly. A Scrum Master protects the team process, while an Agile Coach looks at the broader ecosystem that affects multiple teams.",
            keyPoints: [
                "Agile Coaches often mentor Scrum Masters.",
                "Coaches deal more with executive leadership obstacles.",
                "Scrum Masters are tactical; Coaches are strategic."
            ],
            examples: [
                "A Scrum Master facilitates the team's Retro; the Agile Coach observes and gives feedback to the Scrum Master afterwards."
            ]
        }
    },
    {
        icon: GraduationCap,
        title: '6. Agile Frameworks & Methodologies',
        themeColor: 'text-orange-600',
        bgColor: 'bg-orange-50',
        borderColor: 'border-orange-200',
        details: {
            summary: [
                "Scrum for iterative product dev.",
                "Kanban for flow optimization.",
                "SAFe/LeSS for scaling.",
                "XP for technical excellence."
            ],
            overview: "A true Agile Coach is framework-agnostic. They understand the principles behind the frameworks and help the team choose the right tool for the job, rather than forcing a 'one size fits all' approach.",
            keyPoints: [
                "Scrum is best for complex domains with high uncertainty.",
                "Kanban suits support teams or continuous delivery pipelines.",
                "XP provides the engineering discipline needed for agility."
            ],
            examples: [
                "Helping a support team switch from Scrum Sprints to a Kanban flow system."
            ]
        }
    },
    {
        icon: Shield,
        title: '7. Building Trust & Psychological Safety',
        themeColor: 'text-rose-600',
        bgColor: 'bg-rose-50',
        borderColor: 'border-rose-200',
        details: {
            summary: [
                "Trust is the foundation of agility.",
                "Creating safe-to-fail environments.",
                "Encouraging open conflict resolution.",
                "Modeling vulnerability."
            ],
            overview: "Without trust, no true agility is possible. The coach is the guardian of safety, ensuring that team members can admit mistakes, offer radical candor, and experiment without fear of retribution.",
            keyPoints: [
                "Safety precedes high performance.",
                "Leaders must model vulnerability first.",
                "Blame culture kills innovation."
            ],
            examples: [
                "Conducting a 'Safety Check' before a Retrospective to ensure everyone feels comfortable speaking up."
            ]
        }
    },
    {
        icon: MessageSquare,
        title: '8. Communication & Collaboration',
        themeColor: 'text-blue-600',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200',
        details: {
            summary: [
                "Active Listening.",
                "Powerful Questions.",
                "Visual Management.",
                "Constructive Feedback."
            ],
            overview: "Agile replaces siloed documentation with face-to-face collaboration. The coach teaches the team how to communicate effectively, using visual tools and structured feedback loops to keep everyone aligned.",
            keyPoints: [
                "Listen to understand, not to reply.",
                "Visualize work to expose hidden problems.",
                "Feedback should be continuous, not just at annual reviews."
            ],
            examples: [
                "Teaching a team how to give constructive feedback using the 'Situation-Behavior-Impact' model."
            ]
        }
    },
    {
        icon: Scale,
        title: '9. Measuring Success',
        themeColor: 'text-teal-600',
        bgColor: 'bg-teal-50',
        borderColor: 'border-teal-200',
        details: {
            summary: [
                "Outcomes over Outputs.",
                "Flow Metrics (Cycle Time).",
                "Team Health & Morale.",
                "Business Impact."
            ],
            overview: "We stop measuring 'how much work we did' (velocity/outputs) and start measuring 'what value we delivered' (outcomes). Metrics should be used for improvement, never for punishment.",
            keyPoints: [
                "Velocity is for capacity planning, not productivity comparison.",
                "Cycle time tells you how fast you deliver value.",
                "Team happiness is a leading indicator of future performance."
            ],
            examples: [
                "Tracking the 'Time to Market' trend over 6 months to see if coaching has improved delivery speed."
            ]
        }
    },
    {
        icon: CheckCircle,
        title: '10. Best Practices & Principles',
        themeColor: 'text-violet-600',
        bgColor: 'bg-violet-50',
        borderColor: 'border-violet-200',
        details: {
            summary: [
                "Start with Why.",
                "Meet people where they are.",
                "Empower, don't rescue.",
                "Continuous Learning."
            ],
            overview: "Successful coaching relies on core principles: serving the team, maintaining neutrality, and constantly focusing on the business goal behind the transformation.",
            keyPoints: [
                "Don't force practices without explaining the purpose.",
                "Let the team fail safely so they can learn.",
                "An agile coach who stops learning stops being effective."
            ],
            examples: [
                "Refusing to fix a problem for the team, but instead asking: 'What do you think we should do?'"
            ]
        }
    },
];

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.5 }
    },
};

// Expandable Card Component matching the Mockup Structure
const ExpandableCard = ({ section, index }) => {
    const [isOpen, setIsOpen] = useState(false);
    const Icon = section.icon;

    return (
        <motion.div 
            variants={cardVariants}
            className={`bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border ${section.borderColor}`}
        >
            {/* Card Header (Always Visible) */}
            <div 
                onClick={() => setIsOpen(!isOpen)}
                className={`p-6 border-b ${section.borderColor} ${section.bgColor} flex items-center justify-between cursor-pointer group`}
            >
                <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-white shadow-sm ${section.themeColor}`}>
                        <Icon size={24} />
                    </div>
                    <h2 className={`font-bold text-xl ${section.themeColor}`}>
                        {section.title}
                    </h2>
                </div>
                
                {/* Rotating Arrow Icon */}
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`${section.themeColor}`}
                >
                    <ChevronDown size={24} />
                </motion.div>
            </div>

            {/* Expandable Content Area */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="p-6 bg-white space-y-8">
                            
                            {/* 1. Summary List (Checkmarks) */}
                            <div>
                                <ul className="space-y-3">
                                    {section.details.summary.map((item, i) => (
                                        <motion.li 
                                            key={i} 
                                            className="flex items-start gap-3 text-gray-700 font-medium"
                                            initial={{ x: -10, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: i * 0.05 }}
                                        >
                                            <span className={`mt-1 ${section.themeColor}`}>
                                                <CheckCircle size={18} />
                                            </span>
                                            <span>{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            <div className="h-px bg-gray-100 w-full" />

                            {/* 2. Overview Section */}
                            <div>
                                <h3 className={`font-bold text-lg mb-2 ${section.themeColor}`}>Overview</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {section.details.overview}
                                </p>
                            </div>

                            {/* 3. Key Points Section */}
                            <div>
                                <h3 className={`font-bold text-lg mb-2 ${section.themeColor}`}>Key Points</h3>
                                <ul className="space-y-2">
                                    {section.details.keyPoints.map((point, i) => (
                                        <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-current ${section.themeColor}`} />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* 4. Practical Examples Section */}
                            <div className={`p-4 rounded-xl bg-gray-50 border border-gray-100`}>
                                <h3 className={`font-bold text-md mb-3 flex items-center gap-2 ${section.themeColor}`}>
                                    <Briefcase size={18} /> Practical Examples
                                </h3>
                                <ul className="space-y-2">
                                    {section.details.examples.map((ex, i) => (
                                        <li key={i} className="flex gap-3 text-gray-600 text-sm">
                                            <span className={`font-bold ${section.themeColor}`}>{i + 1}.</span>
                                            <span>{ex}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default function AgileCoach() {
    return (
        <>
            <Head>
                <title>Agile Coach Guide — RocketTeam</title>
            </Head>

            {/* No Navbar or Footer here - layout wrapper handles them */}
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50 min-h-screen">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="space-y-12"
                >
                    {/* Page Header */}
                    <motion.div variants={cardVariants} className="text-center max-w-4xl mx-auto mb-16">
                        <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl rotate-3 hover:rotate-12 transition-transform duration-300"
                        >
                            <BookOpen className="text-white w-10 h-10" />
                        </motion.div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display tracking-tight">
                            Agile Coaching <span className="text-indigo-600">Knowledge Base</span>
                        </h1>
                        <p className="text-gray-600 leading-relaxed text-xl max-w-2xl mx-auto">
                            A comprehensive guide covering the essential topics, roles, and stances every Agile Coach should master.
                        </p>
                    </motion.div>

                    {/* Content Sections Grid (Accordion Style) */}
                    <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
                        {sections.map((section, index) => (
                            <ExpandableCard key={index} section={section} index={index} />
                        ))}
                    </div>

                    {/* CTA/Quiz Area - Linked to /quizz */}
                    <motion.div 
                        variants={cardVariants}
                        whileHover={{ scale: 1.02 }}
                        className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-700 rounded-3xl p-12 text-center shadow-2xl mt-16 max-w-5xl mx-auto"
                    >
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
                            <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-white blur-3xl"></div>
                            <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-white blur-3xl"></div>
                        </div>
                        
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold text-white mb-4">Ready to Test Your Knowledge?</h3>
                            <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
                                Put your agile coaching skills to the test and see how well you understand the principles and practices.
                            </p>
                            {/* UPDATED LINK TO QUIZZ PAGE */}
                            <Link
                                href="/quizz"
                                className="inline-block px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl shadow-lg hover:shadow-white/20 transition-all duration-300 transform hover:scale-105 active:scale-95"
                            >
                                Take the Quiz
                            </Link>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </>
    );
}