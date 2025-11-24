import { useState } from 'react';

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
    }
  ]
};

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, choices, correctAnswer, explanation } = questions[activeQuestion];

  const onClickNext = () => {
    setSelectedAnswerIndex(null);
    setShowFeedback(false);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 10,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  };

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    const correct = answer === correctAnswer;
    setIsCorrect(correct);
    setSelectedAnswer(correct);
    setShowFeedback(true);
  };

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  const restartQuiz = () => {
    setActiveQuestion(0);
    setSelectedAnswer('');
    setShowResult(false);
    setSelectedAnswerIndex(null);
    setShowFeedback(false);
    setIsCorrect(false);
    setResult({
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    });
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        padding: '40px',
        maxWidth: '800px',
        width: '100%',
        animation: 'fadeIn 0.5s ease-in'
      }}>
        {!showResult ? (
          <div>
            <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'baseline', gap: '5px' }}>
              <span style={{
                fontSize: '48px',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {addLeadingZero(activeQuestion + 1)}
              </span>
              <span style={{ fontSize: '28px', color: '#ccc' }}>
                /{addLeadingZero(questions.length)}
              </span>
              <span style={{ 
                marginLeft: '20px', 
                fontSize: '16px', 
                color: '#667eea',
                fontWeight: '600',
                background: '#e0e7ff',
                padding: '8px 16px',
                borderRadius: '20px'
              }}>
                Agile Coach Quiz
              </span>
            </div>
            
            <h2 style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#2d3748',
              marginBottom: '30px',
              lineHeight: '1.4'
            }}>
              {question}
            </h2>
            
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px' }}>
              {choices.map((answer, index) => {
                const isSelected = selectedAnswerIndex === index;
                const isCorrectAnswer = answer === correctAnswer;
                const showCorrectAnswer = showFeedback && isCorrectAnswer;
                const showWrongAnswer = showFeedback && isSelected && !isCorrect;
                
                return (
                  <li
                    onClick={() => !showFeedback && onAnswerSelected(answer, index)}
                    key={answer}
                    style={{
                      padding: '18px 24px',
                      marginBottom: '12px',
                      borderRadius: '12px',
                      cursor: showFeedback ? 'default' : 'pointer',
                      transition: 'all 0.3s ease',
                      border: showCorrectAnswer 
                        ? '3px solid #10b981' 
                        : showWrongAnswer 
                        ? '3px solid #ef4444'
                        : isSelected 
                        ? '3px solid #667eea' 
                        : '2px solid #e2e8f0',
                      background: showCorrectAnswer
                        ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                        : showWrongAnswer
                        ? 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'
                        : isSelected 
                        ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                        : '#f7fafc',
                      color: (isSelected || showCorrectAnswer) ? 'white' : '#2d3748',
                      fontWeight: (isSelected || showCorrectAnswer) ? '600' : '500',
                      transform: isSelected ? 'scale(1.02)' : 'scale(1)',
                      boxShadow: isSelected 
                        ? '0 8px 20px rgba(102, 126, 234, 0.4)' 
                        : '0 2px 4px rgba(0,0,0,0.05)',
                      pointerEvents: showFeedback ? 'none' : 'auto'
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected && !showFeedback) {
                        e.target.style.background = '#edf2f7';
                        e.target.style.transform = 'translateX(5px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected && !showFeedback) {
                        e.target.style.background = '#f7fafc';
                        e.target.style.transform = 'translateX(0)';
                      }
                    }}
                  >
                    {showCorrectAnswer && '✓ '}
                    {showWrongAnswer && '✗ '}
                    {answer}
                  </li>
                );
              })}
            </ul>

            {showFeedback && (
              <div style={{
                padding: '20px',
                borderRadius: '12px',
                marginBottom: '20px',
                background: isCorrect 
                  ? 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)'
                  : 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)',
                border: isCorrect ? '2px solid #10b981' : '2px solid #ef4444',
                animation: 'slideIn 0.3s ease-out'
              }}>
                <h3 style={{
                  margin: '0 0 10px 0',
                  color: isCorrect ? '#065f46' : '#991b1b',
                  fontSize: '20px',
                  fontWeight: 'bold'
                }}>
                  {isCorrect ? '✓ Correct!' : '✗ Not quite!'}
                </h3>
                <p style={{
                  margin: 0,
                  color: isCorrect ? '#047857' : '#991b1b',
                  fontSize: '16px',
                  lineHeight: '1.6'
                }}>
                  {isCorrect ? explanation.correct : explanation.incorrect}
                </p>
              </div>
            )}
            
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                onClick={onClickNext}
                disabled={!showFeedback}
                style={{
                  padding: '14px 32px',
                  borderRadius: '10px',
                  border: 'none',
                  fontWeight: '600',
                  fontSize: '16px',
                  cursor: !showFeedback ? 'not-allowed' : 'pointer',
                  background: !showFeedback 
                    ? '#cbd5e0' 
                    : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: !showFeedback ? '#a0aec0' : 'white',
                  transition: 'all 0.3s ease',
                  boxShadow: !showFeedback 
                    ? 'none' 
                    : '0 4px 15px rgba(102, 126, 234, 0.4)'
                }}
                onMouseEnter={(e) => {
                  if (showFeedback) {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.5)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (showFeedback) {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
                  }
                }}
              >
                {activeQuestion === questions.length - 1 ? 'Finish' : 'Next Question'}
              </button>
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <h3 style={{
              fontSize: '42px',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '20px'
            }}>
              🎉 Quiz Complete!
            </h3>

            <p style={{
              fontSize: '18px',
              color: '#4a5568',
              marginBottom: '40px'
            }}>
              {result.correctAnswers >= 7 
                ? "Outstanding! You have a strong understanding of Agile Coaching!" 
                : result.correctAnswers >= 5
                ? "Good job! You have a solid grasp of Agile Coaching basics."
                : "Keep learning! Agile Coaching is a journey of continuous improvement."}
            </p>
            
            <div style={{ marginBottom: '40px' }}>
              <div style={{
                background: 'linear-gradient(135deg, #e0e7ff 0%, #f3e8ff 100%)',
                padding: '20px',
                borderRadius: '12px',
                marginBottom: '15px',
                border: '2px solid #c7d2fe'
              }}>
                <p style={{ fontSize: '18px', color: '#4c51bf', margin: 0 }}>
                  Total Questions: <span style={{ fontWeight: 'bold', fontSize: '22px' }}>{questions.length}</span>
                </p>
              </div>
              
              <div style={{
                background: 'linear-gradient(135deg, #ddd6fe 0%, #e9d5ff 100%)',
                padding: '20px',
                borderRadius: '12px',
                marginBottom: '15px',
                border: '2px solid #c4b5fd'
              }}>
                <p style={{ fontSize: '18px', color: '#6b21a8', margin: 0 }}>
                  Total Score: <span style={{ fontWeight: 'bold', fontSize: '22px' }}>{result.score} / {questions.length * 10}</span>
                </p>
              </div>
              
              <div style={{
                background: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)',
                padding: '20px',
                borderRadius: '12px',
                marginBottom: '15px',
                border: '2px solid #6ee7b7'
              }}>
                <p style={{ fontSize: '18px', color: '#065f46', margin: 0 }}>
                  Correct Answers: <span style={{ fontWeight: 'bold', fontSize: '22px' }}>✓ {result.correctAnswers}</span>
                </p>
              </div>
              
              <div style={{
                background: 'linear-gradient(135deg, #fecaca 0%, #fca5a5 100%)',
                padding: '20px',
                borderRadius: '12px',
                border: '2px solid #f87171'
              }}>
                <p style={{ fontSize: '18px', color: '#991b1b', margin: 0 }}>
                  Wrong Answers: <span style={{ fontWeight: 'bold', fontSize: '22px' }}>✗ {result.wrongAnswers}</span>
                </p>
              </div>
            </div>

            <button
              onClick={restartQuiz}
              style={{
                padding: '16px 40px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontSize: '18px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
              }}
            >
              🔄 Retake Quiz
            </button>
          </div>
        )}
      </div>
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default function Quizz() {
  return (
    <div className="App">
      <Quiz />
    </div>
  );
}
