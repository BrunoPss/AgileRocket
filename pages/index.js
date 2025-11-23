import React from 'react';
import Link from "next/link";
import { 
  Target, Users, Lightbulb, TrendingUp, CheckCircle2, Activity 
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white">
      {/* Transform Teams Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-gray-900">
            Transform Teams with <br />
            <span className="text-blue-600">Agile Coaching</span>
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Empower your organization to embrace agility, foster collaboration, and deliver exceptional results through proven coaching methodologies.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/quizz">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition">
                Test Your Knowledge
              </button>
            </Link>
            <Link href="/agile-coach">
              {/* Note: Change this Link later to point to the Agile Coach page */}
              <button className="px-8 py-3 bg-white text-gray-700 border border-gray-300 rounded-full font-semibold hover:bg-gray-50 transition">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Agile Principles Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Agile Principles</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Discover the fundamental pillars that make Agile coaching effective.
          </p>
          <div className="mt-6 max-w-3xl mx-auto bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 text-left">
            <h3 className="font-bold text-blue-800 mb-2">What is Agile Coaching?</h3>
            <p className="text-gray-700">
              Agile coaching is a catalytic process that helps individuals, teams, and organizations adopt an Agile mindset.
              It moves beyond simply 'doing' Agile ceremonies (like Stand-ups) to 'being' Agile — fostering a culture of continuous improvement,
              psychological safety, and rapid value delivery.
            </p>
          </div>
        </div>
         {/* Grid of Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          <div className="p-6 border border-gray-100 rounded-xl shadow-sm bg-white text-left">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600"><Target size={24} /></div>
            <h3 className="font-bold text-lg mb-2">Goal-Oriented</h3>
            <p className="text-gray-700">
              Shift the focus from 'output' (busy work) to 'outcome' (value).
              Ensure every sprint aligns with strategic business goals and solves real customer problems.
              Focus on delivering value and achieving meaningful outcomes for your team.
            </p>
          </div>
          <div className="p-6 border border-gray-100 rounded-xl shadow-sm bg-white text-left">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 text-green-600"><Users size={24} /></div>
            <h3 className="font-bold text-lg mb-2">Team Collaboration</h3>
            <p className="text-gray-700">
              Build psychological safety where communication flows freely.
              Transform groups of individuals into self-organizing, high-performing units that solve problems together.
              Foster communication and teamwork to build high-performing Agile teams.
            </p>
          </div>
          <div className="p-6 border border-gray-100 rounded-xl shadow-sm bg-white text-left">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 text-yellow-600"><Lightbulb size={24} /></div>
            <h3 className="font-bold text-lg mb-2">Continuous Learning</h3>
            <p className="text-gray-700">
              Create an environment where feedback is a gift.
              Encourage experimentation and view 'failure' not as an error, but as a necessary step in the learning process.
              Embrace experimentation and learning to adapt and improve constantly.
            </p>
          </div>
          <div className="p-6 border border-gray-100 rounded-xl shadow-sm bg-white text-left">
             <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600"><TrendingUp size={24} /></div>
            <h3 className="font-bold text-lg mb-2">Iterative Growth</h3>
            <p className="text-gray-700">
              Deliver value in small, manageable increments rather than one 'big bang' launch.
              This allows for faster feedback, reduced risk, and the ability to adapt quickly to change.
              Develop incrementally, through sprints, retrospectives, and refinement.
            </p>
          </div>
        </div>
      </section>

      {/* Agile Coach vs Scrum Master Section */}
      <section className="py-16 px-4 bg-indigo-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-indigo-900 mb-8 ml-4">Agile Coach vs Scrum Master</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-sm p-8 border border-indigo-100">
            {/* Agile Coach Column */}
            <div>
              <div className="border-l-4 border-purple-500 pl-4 mb-6">
                  <h3 className="text-xl font-bold text-purple-700">Agile Coach</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-purple-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Works with multiple teams and the organization</span>
                </li>
                <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-purple-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Focuses on cultural and organizational transformation</span>
                </li>
                 <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-purple-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Mentors Scrum Masters and leaders</span>
                </li>
                <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-purple-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Strategic long-term vision</span>
                </li>
                 <li className="flex items-start gap-3">
                    <Activity className="text-purple-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Applies various agile frameworks (Scrum, Kanban, SAFe, etc.)</span>
                </li>
              </ul>
            </div>

            {/* Scrum Master Column */}
            <div>
                <div className="border-l-4 border-pink-500 pl-4 mb-6">
                    <h3 className="text-xl font-bold text-pink-600">Scrum Master</h3>
                </div>
               <ul className="space-y-4">
                <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-pink-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Works with a specific team</span>
                </li>
                <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-pink-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Focuses on implementing Scrum</span>
                </li>
                 <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-pink-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Removes day-to-day impediments</span>
                </li>
                <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-pink-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Tactical and operational vision</span>
                </li>
                 <li className="flex items-start gap-3">
                    <Activity className="text-pink-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Specialized in the Scrum framework</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Start Your Agile Journey Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-teal-500 to-blue-600 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Agile Journey?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Test your knowledge with our interactive quiz or chat with our AI assistant.
          </p>
          <Link href="/quizz">
            <button className="px-8 py-3 bg-white text-blue-600 rounded-full font-bold hover:bg-blue-50 transition shadow-md">
              Take the Quiz
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

