// Agile Coach Quiz Data
const quiz = {
  questions: [
    {
      question: "What is the primary role of an Agile Coach?",
      choices: [
        "To manage the team's daily tasks",
        "To facilitate organizational change and improve agile practices",
        "To write code and deliver features",
        "To replace the Scrum Master"
      ],
      correctAnswer: "To facilitate organizational change and improve agile practices",
      explanation: {
        correct: "Exactly! An Agile Coach focuses on guiding organizations through agile transformation, helping teams improve their practices, and fostering a culture of continuous improvement.",
        incorrect: "Not quite. While coaches work with teams, their primary role is to facilitate organizational change and improve agile practices across the entire organization, not just manage tasks or replace specific roles."
      }
    },
    {
      question: "Which of these is NOT typically part of an Agile Coach's responsibilities?",
      choices: [
        "Making technical decisions for the team",
        "Facilitating retrospectives",
        "Coaching team members on agile principles",
        "Removing organizational impediments"
      ],
      correctAnswer: "Making technical decisions for the team",
      explanation: {
        correct: "Correct! Agile Coaches empower teams to make their own technical decisions. The coach's role is to guide and facilitate, not to dictate technical solutions.",
        incorrect: "Actually, making technical decisions for the team is NOT the coach's responsibility. Coaches empower teams to be self-organizing and make their own technical choices."
      }
    },
    {
      question: "What coaching stance should an Agile Coach use when a team is struggling with a problem?",
      choices: [
        "Always provide the solution immediately",
        "Use powerful questions to help the team discover solutions",
        "Take over the team's work",
        "Ignore the problem and let them figure it out alone"
      ],
      correctAnswer: "Use powerful questions to help the team discover solutions",
      explanation: {
        correct: "Perfect! Asking powerful questions helps teams develop problem-solving skills and ownership. This approach builds long-term capability rather than creating dependency.",
        incorrect: "Good coaches use powerful questions to guide teams toward discovering their own solutions. This builds capability and ownership rather than creating dependency on the coach."
      }
    },
    {
      question: "Which agile value does an Agile Coach prioritize when helping teams?",
      choices: [
        "Following processes over adapting to change",
        "Comprehensive documentation over working software",
        "Individuals and interactions over processes and tools",
        "Contract negotiation over customer collaboration"
      ],
      correctAnswer: "Individuals and interactions over processes and tools",
      explanation: {
        correct: "Spot on! This is one of the four values from the Agile Manifesto. Coaches emphasize people and communication as the foundation for successful agile teams.",
        incorrect: "This contradicts the Agile Manifesto values. Agile Coaches prioritize 'Individuals and interactions over processes and tools' - focusing on people and communication first."
      }
    },
    {
      question: "How should an Agile Coach measure their success?",
      choices: [
        "By the number of meetings they attend",
        "By the team's improved ability to self-organize and continuous improvement",
        "By how many processes they've implemented",
        "By being involved in every team decision"
      ],
      correctAnswer: "By the team's improved ability to self-organize and continuous improvement",
      explanation: {
        correct: "Exactly right! A coach's success is measured by the team's growth in autonomy, collaboration, and their ability to continuously improve without constant guidance.",
        incorrect: "A coach's true success isn't about their personal involvement, but about the team's growth. The goal is to help teams become self-organizing and embrace continuous improvement."
      }
    },
    {
      question: "What is 'servant leadership' in the context of Agile Coaching?",
      choices: [
        "Doing everything the team asks without question",
        "Leading by serving the team's needs and removing obstacles",
        "Being submissive to management demands",
        "Avoiding all leadership responsibilities"
      ],
      correctAnswer: "Leading by serving the team's needs and removing obstacles",
      explanation: {
        correct: "Perfect! Servant leadership means putting the team's needs first, helping them succeed by removing impediments and creating an environment where they can thrive.",
        incorrect: "Servant leadership isn't about being submissive or avoiding responsibility. It's about leading by serving the team's needs, removing obstacles, and enabling their success."
      }
    },
    {
      question: "When should an Agile Coach intervene in team conflicts?",
      choices: [
        "Immediately, to prevent any disagreement",
        "Never, conflicts are not their concern",
        "When conflicts become destructive or the team requests help",
        "Only when management asks them to"
      ],
      correctAnswer: "When conflicts become destructive or the team requests help",
      explanation: {
        correct: "Correct! Healthy conflict can be productive. Coaches should intervene when conflicts become harmful or when teams need facilitation skills they haven't developed yet.",
        incorrect: "Coaches should allow healthy conflict as it can drive innovation, but step in when conflicts become destructive or when the team needs help navigating difficult conversations."
      }
    },
    {
      question: "What approach should an Agile Coach take when introducing change?",
      choices: [
        "Force immediate adoption of all agile practices",
        "Start with small experiments and inspect-and-adapt",
        "Wait for the perfect moment to make changes",
        "Change everything at once for maximum impact"
      ],
      correctAnswer: "Start with small experiments and inspect-and-adapt",
      explanation: {
        correct: "Excellent! Incremental change through small experiments allows teams to learn, adapt, and build confidence. This empirical approach is core to agile thinking.",
        incorrect: "Forcing big changes rarely works. Effective coaches start with small experiments, allow teams to learn and adapt, building momentum through validated improvements."
      }
    },
    {
      question: "What is the difference between an Agile Coach and a Scrum Master?",
      choices: [
        "There is no difference, they are the same role",
        "Agile Coaches work at organizational level, Scrum Masters focus on team level",
        "Scrum Masters are senior Agile Coaches",
        "Agile Coaches only work with Kanban teams"
      ],
      correctAnswer: "Agile Coaches work at organizational level, Scrum Masters focus on team level",
      explanation: {
        correct: "Perfect! While there's overlap, Agile Coaches typically work across multiple teams and at the organizational level, while Scrum Masters focus on serving a specific Scrum team.",
        incorrect: "While related, these roles have different scopes. Agile Coaches work at the organizational level across multiple teams, while Scrum Masters focus on serving specific Scrum teams."
      }
    },
    {
  question: "What is the main purpose of a retrospective?",
  choices: [
    "To assign blame for failures",
    "To inspect and adapt the team's process",
    "To plan the next sprint backlog",
    "To evaluate individual performance"
  ],
  correctAnswer: "To inspect and adapt the team's process",
  explanation: {
    correct: "Exactly! Retrospectives focus on continuous improvement of team collaboration and processes.",
    incorrect: "Retrospectives are not about blame or individual performance—they focus on improving the team's process."
  }
},
{
  question: "What is a common anti-pattern for Agile Coaches?",
  choices: [
    "Doing the team's work",
    "Facilitating learning",
    "Encouraging collaboration",
    "Supporting experimentation"
  ],
  correctAnswer: "Doing the team's work",
  explanation: {
    correct: "Correct! Agile Coaches should empower the team, not take over their work.",
    incorrect: "An anti-pattern occurs when a coach does the team's work, creating dependency instead of growth."
  }
},
{
  question: "Which skill is most important for an Agile Coach?",
  choices: [
    "Active listening",
    "Writing technical documentation",
    "Programming expertise",
    "Command-and-control leadership"
  ],
  correctAnswer: "Active listening",
  explanation: {
    correct: "Exactly! Coaching relies heavily on understanding the team and asking powerful questions.",
    incorrect: "Agile Coaching is not about technical control—it's about listening and enabling growth."
  }
},
{
  question: "What is a key outcome of coaching a team?",
  choices: [
    "The coach becomes indispensable",
    "The team becomes self-sufficient",
    "The coach controls team decisions",
    "The team increases reporting"
  ],
  correctAnswer: "The team becomes self-sufficient",
  explanation: {
    correct: "Yes! Success means the team no longer depends heavily on the coach.",
    incorrect: "Agile Coaching aims for autonomy—not dependency or control."
  }
},
{
  question: "Which tool does an Agile Coach primarily use?",
  choices: [
    "Powerful questions",
    "Gantt charts",
    "Command instructions",
    "Performance reviews"
  ],
  correctAnswer: "Powerful questions",
  explanation: {
    correct: "Correct! Coaches unlock thinking by asking powerful, open questions.",
    incorrect: "Agile Coaches facilitate thinking—not command or control."
  }
},
{
  question: "What is the preferred leadership style for an Agile Coach?",
  choices: [
    "Command-and-control",
    "Servant leadership",
    "Micromanagement",
    "Directive leadership"
  ],
  correctAnswer: "Servant leadership",
  explanation: {
    correct: "Exactly! Servant leaders support and enable teams to succeed.",
    incorrect: "Agile leaders don't control or micromanage—they serve the team."
  }
},
{
  question: "What should an Agile Coach do when a team resists change?",
  choices: [
    "Force the change",
    "Understand concerns and co-create steps",
    "Ignore the resistance",
    "Escalate immediately to management"
  ],
  correctAnswer: "Understand concerns and co-create steps",
  explanation: {
    correct: "Perfect! Co-creating change increases engagement and success.",
    incorrect: "Forcing change creates resistance. Coaches collaborate to evolve practices."
  }
},
{
  question: "Who is responsible for continuous improvement?",
  choices: [
    "The Agile Coach",
    "The Scrum Master",
    "The entire team",
    "Management"
  ],
  correctAnswer: "The entire team",
  explanation: {
    correct: "Correct! Improvement is a shared responsibility, not owned by one role.",
    incorrect: "Continuous improvement must be driven collectively by the team."
  }
},
{
  question: "What is a key mindset for Agile Coaching?",
  choices: [
    "Fixed mindset",
    "Growth mindset",
    "Control mindset",
    "Risk avoidance mindset"
  ],
  correctAnswer: "Growth mindset",
  explanation: {
    correct: "Yes! Coaches foster learning, experimentation and growth.",
    incorrect: "Agile Coaching thrives on adaptability—not fixed thinking."
  }
},
{
  question: "What should an Agile Coach avoid?",
  choices: [
    "Coaching individuals and teams",
    "Telling teams exactly what to do",
    "Facilitating collaboration",
    "Encouraging learning"
  ],
  correctAnswer: "Telling teams exactly what to do",
  explanation: {
    correct: "Correct! Coaches guide rather than dictate solutions.",
    incorrect: "Commanding teams limits autonomy and learning."
  }
},
{
  question: "What is a key responsibility of an Agile Coach at the organizational level?",
  choices: [
    "Supporting cultural change",
    "Managing project budgets",
    "Assigning tasks",
    "Writing technical solutions"
  ],
  correctAnswer: "Supporting cultural change",
  explanation: {
    correct: "Exactly! Organizational coaching focuses on culture, mindset and systemic improvements.",
    incorrect: "Agile Coaches do not manage tasks or budgets—they influence culture."
  }
}

  ]
};

export default quiz;
