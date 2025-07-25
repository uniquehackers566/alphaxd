'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Assessment() {
  const [currentSection, setCurrentSection] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [showResults, setShowResults] = useState(false);

  const assessmentSections = [
    {
      title: "Password Security",
      questions: [
        {
          id: "password1",
          question: "Do you use unique passwords for each of your accounts?",
          options: ["Always", "Usually", "Sometimes", "Never"]
        },
        {
          id: "password2",
          question: "Do you use a password manager?",
          options: ["Yes, regularly", "Yes, occasionally", "No, but I plan to", "No"]
        },
        {
          id: "password3",
          question: "Do you enable two-factor authentication when available?",
          options: ["Always", "For important accounts", "Rarely", "Never"]
        },
        {
          id: "password4",
          question: "Do you regularly change your passwords?",
          options: ["Every 3 months", "Every 6 months", "Yearly", "Never"]
        },
        {
          id: "password5",
          question: "Do you check if your passwords have been leaked in breaches?",
          options: ["Always", "Sometimes", "Rarely", "Never"]
        }
      ]
    },
    {
      title: "Software & Updates",
      questions: [
        {
          id: "software1",
          question: "How often do you update your operating system?",
          options: ["Automatically", "Weekly", "Monthly", "Rarely"]
        },
        {
          id: "software2",
          question: "Do you have antivirus software installed?",
          options: ["Yes, premium", "Yes, free version", "Built-in only", "No"]
        },
        {
          id: "software3",
          question: "How do you handle software downloads?",
          options: ["Official sources only", "Mostly official sources", "Various sources", "Any source"]
        },
        {
          id: "software4",
          question: "Do you update third-party applications regularly?",
          options: ["Always", "Sometimes", "Rarely", "Never"]
        },
        {
          id: "software5",
          question: "Do you uninstall unused or outdated software?",
          options: ["Always", "Sometimes", "Rarely", "Never"]
        }
      ]
    },
    {
      title: "Email & Communication",
      questions: [
        {
          id: "email1",
          question: "How do you handle suspicious emails?",
          options: ["Delete immediately", "Check sender carefully", "Sometimes click links", "Usually respond"]
        },
        {
          id: "email2",
          question: "Do you verify sender identity before clicking links?",
          options: ["Always", "Usually", "Sometimes", "Never"]
        },
        {
          id: "email3",
          question: "How do you share sensitive information?",
          options: ["Encrypted channels", "Secure platforms", "Regular email", "Any method"]
        },
        {
          id: "email4",
          question: "Do you use encrypted messaging apps for sensitive communication?",
          options: ["Always", "Sometimes", "Rarely", "Never"]
        },
        {
          id: "email5",
          question: "Do you check for phishing indicators in emails (e.g., spelling errors, suspicious links)?",
          options: ["Always", "Sometimes", "Rarely", "Never"]
        }
      ]
    },
    {
      title: "Network Security",
      questions: [
        {
          id: "network1",
          question: "How do you connect to public Wi-Fi?",
          options: ["With VPN", "Carefully", "Regularly", "Without concern"]
        },
        {
          id: "network2",
          question: "Is your home Wi-Fi network secured?",
          options: ["WPA3/WPA2", "WEP", "Password protected", "Open"]
        },
        {
          id: "network3",
          question: "Do you use a VPN service?",
          options: ["Always", "For sensitive activities", "Occasionally", "Never"]
        },
        {
          id: "network4",
          question: "Do you regularly check for unauthorized devices on your network?",
          options: ["Always", "Sometimes", "Rarely", "Never"]
        },
        {
          id: "network5",
          question: "Do you change your Wi-Fi password periodically?",
          options: ["Every 3 months", "Every 6 months", "Yearly", "Never"]
        }
      ]
    },
    {
      title: "Data Protection",
      questions: [
        {
          id: "data1",
          question: "How often do you back up your data?",
          options: ["Automatically", "Weekly", "Monthly", "Rarely"]
        },
        {
          id: "data2",
          question: "Where do you store sensitive documents?",
          options: ["Encrypted storage", "Secure cloud", "Regular folders", "Anywhere"]
        },
        {
          id: "data3",
          question: "Do you encrypt sensitive files?",
          options: ["Always", "Important files", "Sometimes", "Never"]
        },
        {
          id: "data4",
          question: "Do you use multi-factor authentication for cloud storage?",
          options: ["Always", "Sometimes", "Rarely", "Never"]
        },
        {
          id: "data5",
          question: "Do you securely erase data before disposing of devices?",
          options: ["Always", "Sometimes", "Rarely", "Never"]
        }
      ]
    }
  ];

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const calculateScore = () => {
    let totalScore = 0;
    let maxScore = 0;

    assessmentSections.forEach(section => {
      section.questions.forEach(question => {
        const answer = answers[question.id];
        if (answer) {
          const answerIndex = question.options.indexOf(answer);
          totalScore += (3 - answerIndex); // Best answer = 3 points, worst = 0
        }
        maxScore += 3;
      });
    });

    return Math.round((totalScore / maxScore) * 100);
  };

  const getScoreLevel = (score: number) => {
    if (score >= 80) return { level: "Excellent", color: "green", description: "You have strong cybersecurity practices!" };
    if (score >= 60) return { level: "Good", color: "blue", description: "You're on the right track with room for improvement." };
    if (score >= 40) return { level: "Fair", color: "yellow", description: "You have basic security but need significant improvements." };
    return { level: "Poor", color: "red", description: "Your security practices need immediate attention." };
  };

  const nextSection = () => {
    if (currentSection < assessmentSections.length - 1) {
      setCurrentSection(currentSection + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const resetAssessment = () => {
    setCurrentSection(0);
    setAnswers({});
    setShowResults(false);
  };

  if (showResults) {
    const score = calculateScore();
    const scoreLevel = getScoreLevel(score);

    return (
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-blue-600 font-pacifico cursor-pointer">Cyber Sphere</Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  <Link href="/" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer">Home</Link>
                  <Link href="/what-is-cybersecurity" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer">What Is Cybersecurity</Link>
                  <Link href="/threats" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer">Threats</Link>
                  <Link href="/best-practices" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer">Best Practices</Link>
                  <Link href="/tools" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer">Tools</Link>
                  <Link href="/glossary" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer">Glossary</Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

          <p>&copy; 2025 Cyber Sphere. Educational content for cybersecurity awareness. Kushagra & Lucky.</p>
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Security Assessment Results</h1>
              <p className="text-xl text-gray-600">Based on your responses, here's your cybersecurity score</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="text-center mb-8">
                <div className={`w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-4 bg-${scoreLevel.color}-100`}>
                  <span className={`text-4xl font-bold text-${scoreLevel.color}-600`}>{score}%</span>
                </div>
                <h2 className={`text-2xl font-bold text-${scoreLevel.color}-600 mb-2`}>{scoreLevel.level}</h2>
                <p className="text-gray-600">{scoreLevel.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommendations</h3>
                  <ul className="space-y-3">
                    {score < 80 && (
                      <li className="flex items-start">
                        <i className="ri-arrow-right-line text-blue-600 mr-2 mt-1 text-sm w-4 h-4 flex items-center justify-center"></i>
                        <span className="text-gray-700">Implement a password manager for all accounts</span>
                      </li>
                    )}
                    {score < 70 && (
                      <li className="flex items-start">
                        <i className="ri-arrow-right-line text-blue-600 mr-2 mt-1 text-sm w-4 h-4 flex items-center justify-center"></i>
                        <span className="text-gray-700">Enable two-factor authentication everywhere</span>
                      </li>
                    )}
                    {score < 60 && (
                      <li className="flex items-start">
                        <i className="ri-arrow-right-line text-blue-600 mr-2 mt-1 text-sm w-4 h-4 flex items-center justify-center"></i>
                        <span className="text-gray-700">Set up automatic software updates</span>
                      </li>
                    )}
                    {score < 50 && (
                      <li className="flex items-start">
                        <i className="ri-arrow-right-line text-blue-600 mr-2 mt-1 text-sm w-4 h-4 flex items-center justify-center"></i>
                        <span className="text-gray-700">Install comprehensive antivirus software</span>
                      </li>
                    )}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Next Steps</h3>
                  <div className="space-y-4">
                    <Link href="/best-practices" className="block bg-blue-50 border border-blue-200 rounded-lg p-4 hover:bg-blue-100 transition duration-300 cursor-pointer">
                      <div className="flex items-center">
                        <i className="ri-shield-check-line text-blue-600 mr-3 text-xl w-6 h-6 flex items-center justify-center"></i>
                        <div>
                          <div className="font-semibold text-gray-900">Learn Best Practices</div>
                          <div className="text-sm text-gray-600">Improve your security posture</div>
                        </div>
                      </div>
                    </Link>
                    
                    <Link href="/tools" className="block bg-green-50 border border-green-200 rounded-lg p-4 hover:bg-green-100 transition duration-300 cursor-pointer">
                      <div className="flex items-center">
                        <i className="ri-tools-line text-green-600 mr-3 text-xl w-6 h-6 flex items-center justify-center"></i>
                        <div>
                          <div className="font-semibold text-gray-900">Find Security Tools</div>
                          <div className="text-sm text-gray-600">Get recommended software</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={resetAssessment}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 cursor-pointer whitespace-nowrap mr-4"
              >
                Retake Assessment
              </button>
              <Link href="/" className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition duration-300 cursor-pointer whitespace-nowrap">
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600 font-pacifico cursor-pointer">Cyber Sphere</Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer">Home</Link>
                <Link href="/what-is-cybersecurity" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer">What Is Cybersecurity</Link>
                <Link href="/threats" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer">Threats</Link>
                <Link href="/best-practices" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer">Best Practices</Link>
                <Link href="/tools" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer">Tools</Link>
                <Link href="/glossary" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer">Glossary</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Security Assessment
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Evaluate your current cybersecurity posture with our comprehensive assessment. Get personalized recommendations to improve your digital security.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Progress</span>
            <span className="text-sm text-gray-600">{currentSection + 1} of {assessmentSections.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentSection + 1) / assessmentSections.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Assessment Questions */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {assessmentSections[currentSection].title}
              </h2>
              <p className="text-gray-600">Answer the following questions honestly for accurate results</p>
            </div>

            <div className="space-y-8">
              {assessmentSections[currentSection].questions.map((question, index) => (
                <div key={question.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {index + 1}. {question.question}
                  </h3>
                  <div className="space-y-2">
                    {question.options.map((option, optionIndex) => (
                      <label key={optionIndex} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name={question.id}
                          value={option}
                          checked={answers[question.id] === option}
                          onChange={() => handleAnswer(question.id, option)}
                          className="mr-3 cursor-pointer"
                        />
                        <span className="text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={prevSection}
                disabled={currentSection === 0}
                className={`px-6 py-3 rounded-lg font-semibold transition duration-300 cursor-pointer whitespace-nowrap ${
                  currentSection === 0
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gray-600 text-white hover:bg-gray-700'
                }`}
              >
                Previous
              </button>
              
              <button
                onClick={nextSection}
                disabled={!assessmentSections[currentSection].questions.every(q => answers[q.id])}
                className={`px-6 py-3 rounded-lg font-semibold transition duration-300 cursor-pointer whitespace-nowrap ${
                  !assessmentSections[currentSection].questions.every(q => answers[q.id])
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {currentSection === assessmentSections.length - 1 ? 'Get Results' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Take Assessment */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Take This Assessment?</h2>
            <p className="text-lg text-gray-600">Understanding your security posture is the first step to better protection</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-search-line text-blue-600 text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Identify Weaknesses</h3>
              <p className="text-gray-600">Discover gaps in your current security practices and areas for improvement.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-lightbulb-line text-green-600 text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Get Recommendations</h3>
              <p className="text-gray-600">Receive personalized suggestions tailored to your specific security needs.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-purple-600 text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Improve Security</h3>
              <p className="text-gray-600">Take actionable steps to strengthen your digital security posture.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-blue-400 font-pacifico mb-4">Cyber Sphere</div>
              <p className="text-gray-400">Your trusted resource for cybersecurity knowledge and protection strategies.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/what-is-cybersecurity" className="text-gray-400 hover:text-white cursor-pointer">What Is Cybersecurity</Link></li>
                <li><Link href="/threats" className="text-gray-400 hover:text-white cursor-pointer">Common Threats</Link></li>
                <li><Link href="/best-practices" className="text-gray-400 hover:text-white cursor-pointer">Best Practices</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/tools" className="text-gray-400 hover:text-white cursor-pointer">Tools & Resources</Link></li>
                <li><Link href="/glossary" className="text-gray-400 hover:text-white cursor-pointer">Glossary</Link></li>
                <li><Link href="/assessment" className="text-gray-400 hover:text-white cursor-pointer">Security Assessment</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Sources</h3>
              <ul className="space-y-2">
                <li><a href="https://www.cisa.gov" className="text-gray-400 hover:text-white cursor-pointer">CISA.gov</a></li>
                <li><a href="https://www.nist.gov" className="text-gray-400 hover:text-white cursor-pointer">NIST Framework</a></li>
                <li><a href="https://www.sans.org" className="text-gray-400 hover:text-white cursor-pointer">SANS Institute</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Cyber Sphere. Educational content for cybersecurity awareness. Kushagra & Lucky.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}