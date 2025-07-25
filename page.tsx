
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentThreat, setCurrentThreat] = useState(0);
  const [statsAnimated, setStatsAnimated] = useState(false);

  const threats = [
    "Ransomware attacks every 11 seconds",
    "95% of breaches are due to human error",
    "AI-powered phishing campaigns increasing 400%",
    "IoT devices compromised every 39 seconds"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const threatInterval = setInterval(() => {
      setCurrentThreat((prev) => (prev + 1) % threats.length);
    }, 3000);

    const handleScroll = () => {
      const statsSection = document.getElementById('stats-section');
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setStatsAnimated(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(threatInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const AnimatedCounter = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!statsAnimated) return;
      
      let start = 0;
      const startTime = performance.now();
      
      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(easeOutQuart * end);
        
        setCount(current);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, [statsAnimated, end, duration]);
    
    return <span>{count}</span>;
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200 fixed w-full top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-600 font-pacifico transform hover:scale-105 transition-transform duration-300">
                Cyber Sphere
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer transform hover:scale-105 transition-all duration-300">Home</Link>
                <Link href="/what-is-cybersecurity" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer transform hover:scale-105 transition-all duration-300">What Is Cybersecurity</Link>
                <Link href="/threats" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer transform hover:scale-105 transition-all duration-300">Threats</Link>
                <Link href="/best-practices" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer transform hover:scale-105 transition-all duration-300">Best Practices</Link>
                <Link href="/tools" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer transform hover:scale-105 transition-all duration-300">Tools</Link>
                <Link href="/glossary" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer transform hover:scale-105 transition-all duration-300">Glossary</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://readdy.ai/api/search-image?query=Futuristic%203D%20cybersecurity%20digital%20landscape%20with%20floating%20holographic%20shields%2C%20data%20streams%2C%20and%20network%20connections%20in%20blue%20and%20purple%20gradient%2C%20abstract%20technological%20security%20visualization%20with%20geometric%20patterns%20and%20glowing%20nodes%2C%20modern%20minimalist%20design%20perfect%20for%20hero%20background&width=1920&height=1080&seq=hero-3d-cyber&orientation=landscape" 
            alt="3D Cybersecurity Protection"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-indigo-900/70 to-purple-900/80"></div>
        </div>
        
        {/* Animated floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
          <div className="absolute bottom-40 left-20 w-8 h-8 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
          <div className="absolute bottom-20 right-10 w-5 h-5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-24">
          <div className={`w-full text-center transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="mb-8">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-pulse">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2 animate-ping"></div>
                <span className="text-sm font-medium">{threats[currentThreat]}</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent animate-pulse">
              Protect Your Digital World
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed transform hover:scale-105 transition-transform duration-300">
              Comprehensive cybersecurity knowledge and tools to safeguard your personal data, business assets, and digital infrastructure from evolving threats in our interconnected world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link href="/what-is-cybersecurity" className="group bg-white text-blue-600 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 cursor-pointer whitespace-nowrap transform hover:scale-105 hover:shadow-2xl">
                <span className="flex items-center">
                  Get Started 
                  <i className="ri-arrow-right-line ml-2 w-5 h-5 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300"></i>
                </span>
              </Link>
              <Link href="/threats" className="group border-2 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 cursor-pointer whitespace-nowrap transform hover:scale-105 hover:shadow-2xl">
                <span className="flex items-center">
                  Learn About Threats
                  <i className="ri-shield-line ml-2 w-5 h-5 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300"></i>
                </span>
              </Link>
            </div>

            {/* Interactive 3D Cards Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 hover:rotate-3 transition-all duration-500 cursor-pointer">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:rotate-180 transition-transform duration-500">
                  <i className="ri-shield-check-line text-white text-xl w-6 h-6 flex items-center justify-center"></i>
                </div>
                <h3 className="font-semibold text-lg mb-2">Real-time Protection</h3>
                <p className="text-sm opacity-90">24/7 monitoring and threat detection</p>
              </div>
              <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 hover:-rotate-3 transition-all duration-500 cursor-pointer">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:rotate-180 transition-transform duration-500">
                  <i className="ri-brain-line text-white text-xl w-6 h-6 flex items-center justify-center"></i>
                </div>
                <h3 className="font-semibold text-lg mb-2">AI-Powered Defense</h3>
                <p className="text-sm opacity-90">Machine learning threat analysis</p>
              </div>
              <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 hover:rotate-3 transition-all duration-500 cursor-pointer">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:rotate-180 transition-transform duration-500">
                  <i className="ri-team-line text-white text-xl w-6 h-6 flex items-center justify-center"></i>
                </div>
                <h3 className="font-semibold text-lg mb-2">Expert Guidance</h3>
                <p className="text-sm opacity-90">Professional security insights</p>
              </div>
            </div>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-ping"></div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="stats-section" className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 transform hover:scale-105 transition-transform duration-300">
              Cybersecurity Reality Check
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Understanding the current threat landscape through real-world data
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className={`text-center transform transition-all duration-1000 hover:scale-110 ${
              statsAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '0.1s' }}>
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="text-5xl font-bold text-blue-600 mb-3">
                  <AnimatedCounter end={4.45} />B
                </div>
                <div className="text-sm text-gray-600 font-medium">Data records breached in 2023</div>
                <div className="w-12 h-1 bg-blue-600 rounded-full mx-auto mt-4"></div>
              </div>
            </div>
            <div className={`text-center transform transition-all duration-1000 hover:scale-110 ${
              statsAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '0.2s' }}>
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="text-5xl font-bold text-red-600 mb-3">
                  $<AnimatedCounter end={4.88} />M
                </div>
                <div className="text-sm text-gray-600 font-medium">Average cost of a data breach</div>
                <div className="w-12 h-1 bg-red-600 rounded-full mx-auto mt-4"></div>
              </div>
            </div>
            <div className={`text-center transform transition-all duration-1000 hover:scale-110 ${
              statsAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '0.3s' }}>
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="text-5xl font-bold text-orange-600 mb-3">
                  <AnimatedCounter end={95} />%
                </div>
                <div className="text-sm text-gray-600 font-medium">Breaches due to human error</div>
                <div className="w-12 h-1 bg-orange-600 rounded-full mx-auto mt-4"></div>
              </div>
            </div>
            <div className={`text-center transform transition-all duration-1000 hover:scale-110 ${
              statsAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '0.4s' }}>
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="text-5xl font-bold text-green-600 mb-3">
                  <AnimatedCounter end={277} />
                </div>
                <div className="text-sm text-gray-600 font-medium">Days to identify a breach</div>
                <div className="w-12 h-1 bg-green-600 rounded-full mx-auto mt-4"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Essential Cybersecurity Knowledge</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to protect yourself and your organization from evolving digital threats
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* What Is Cybersecurity Card */}
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
                <i className="ri-shield-line text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What Is Cybersecurity?</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Learn the fundamentals of cybersecurity, its importance, and how it protects digital assets from various threats.</p>
              <Link href="/what-is-cybersecurity" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold cursor-pointer group-hover:translate-x-2 transition-transform duration-300">
                Learn More <i className="ri-arrow-right-line ml-2 w-4 h-4 flex items-center justify-center"></i>
              </Link>
            </div>

            {/* Common Threats Card */}
            <div className="group bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-1 cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
                <i className="ri-virus-line text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Common Threats</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Understand malware, phishing, ransomware, and other cyber threats that target individuals and businesses.</p>
              <Link href="/threats" className="inline-flex items-center text-red-600 hover:text-red-800 font-semibold cursor-pointer group-hover:translate-x-2 transition-transform duration-300">
                Explore Threats <i className="ri-arrow-right-line ml-2 w-4 h-4 flex items-center justify-center"></i>
              </Link>
            </div>

            {/* Best Practices Card */}
            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
                <i className="ri-award-line text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Best Practices</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Discover proven strategies and actionable steps to strengthen your cybersecurity posture.</p>
              <Link href="/best-practices" className="inline-flex items-center text-green-600 hover:text-green-800 font-semibold cursor-pointer group-hover:translate-x-2 transition-transform duration-300">
                View Practices <i className="ri-arrow-right-line ml-2 w-4 h-4 flex items-center justify-center"></i>
              </Link>
            </div>

            {/* Tools & Resources Card */}
            <div className="group bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-1 cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
                <i className="ri-tools-line text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tools & Resources</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Find the best cybersecurity tools, software, and resources to protect your systems.</p>
              <Link href="/tools" className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold cursor-pointer group-hover:translate-x-2 transition-transform duration-300">
                Browse Tools <i className="ri-arrow-right-line ml-2 w-4 h-4 flex items-center justify-center"></i>
              </Link>
            </div>

            {/* Glossary Card */}
            <div className="group bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
                <i className="ri-book-open-line text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Glossary</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Quick reference guide to essential cybersecurity terms and definitions.</p>
              <Link href="/glossary" className="inline-flex items-center text-orange-600 hover:text-orange-800 font-semibold cursor-pointer group-hover:translate-x-2 transition-transform duration-300">
                View Glossary <i className="ri-arrow-right-line ml-2 w-4 h-4 flex items-center justify-center"></i>
              </Link>
            </div>

            {/* Quick Assessment Card */}
            <div className="group bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-1 cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
                <i className="ri-clipboard-line text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Security Assessment</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Evaluate your current security posture with our comprehensive assessment checklist.</p>
              <Link href="/assessment" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold cursor-pointer group-hover:translate-x-2 transition-transform duration-300">
                Take Assessment <i className="ri-arrow-right-line ml-2 w-4 h-4 flex items-center justify-center"></i>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Latest Threats Alert */}
      <section className="py-20 bg-gradient-to-r from-red-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-10 transform hover:scale-105 transition-all duration-500">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mr-6 animate-pulse">
                <i className="ri-alert-line text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Current Threat Alerts</h2>
                <p className="text-gray-600">Stay informed about the latest cybersecurity threats</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group border-l-4 border-red-500 pl-6 hover:border-red-600 transition-colors duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-ping"></div>
                  <h3 className="font-bold text-gray-900 text-lg">Ransomware Campaign Targeting Healthcare</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3 font-medium">Active since: January 2024</p>
                <p className="text-gray-700 leading-relaxed">New variant of LockBit ransomware specifically targeting healthcare institutions with enhanced encryption methods and improved stealth capabilities.</p>
              </div>
              <div className="group border-l-4 border-orange-500 pl-6 hover:border-orange-600 transition-colors duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-3 animate-ping"></div>
                  <h3 className="font-bold text-gray-900 text-lg">Phishing Emails Mimicking Tax Agencies</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3 font-medium">Active since: February 2024</p>
                <p className="text-gray-700 leading-relaxed">Sophisticated phishing campaign using official-looking tax refund emails to steal personal and financial information from unsuspecting victims.</p>
              </div>
              <div className="group border-l-4 border-blue-500 pl-6 hover:border-blue-600 transition-colors duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-ping"></div>
                  <h3 className="font-bold text-gray-900 text-lg">Supply Chain Attack on Software Vendor</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3 font-medium">Active since: March 2024</p>
                <p className="text-gray-700 leading-relaxed">Attackers compromised a popular software update mechanism, distributing malware to thousands of businesses through trusted channels.</p>
              </div>
              <div className="group border-l-4 border-green-500 pl-6 hover:border-green-600 transition-colors duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-ping"></div>
                  <h3 className="font-bold text-gray-900 text-lg">Business Email Compromise (BEC) in Finance</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3 font-medium">Active since: April 2024</p>
                <p className="text-gray-700 leading-relaxed">Cybercriminals impersonated executives to trick employees into transferring large sums of money to fraudulent accounts.</p>
              </div>
              <div className="group border-l-4 border-purple-500 pl-6 hover:border-purple-600 transition-colors duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3 animate-ping"></div>
                  <h3 className="font-bold text-gray-900 text-lg">IoT Device Botnet DDoS Attack</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3 font-medium">Active since: May 2024</p>
                <p className="text-gray-700 leading-relaxed">A large-scale distributed denial-of-service attack was launched using thousands of compromised smart devices, disrupting major online services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-40 right-10 w-12 h-12 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 transform hover:scale-105 transition-transform duration-300">
            Ready to Strengthen Your Security?
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Start with our comprehensive cybersecurity assessment to identify vulnerabilities and create a protection plan tailored to your specific needs.
          </p>
          <Link href="/assessment" className="group inline-flex items-center bg-white text-blue-600 px-12 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer whitespace-nowrap transform hover:scale-105 hover:shadow-2xl">
            Start Security Assessment
            <i className="ri-arrow-right-line ml-3 w-6 h-6 flex items-center justify-center group-hover:translate-x-2 transition-transform duration-300"></i>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-blue-400 font-pacifico mb-6">Cyber Sphere</div>
            <p className="text-gray-400 leading-relaxed">Your trusted resource for cybersecurity knowledge and protection strategies in an ever-evolving digital landscape.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link href="/what-is-cybersecurity" className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300 hover:translate-x-2 inline-block">What Is Cybersecurity</Link></li>
                <li><Link href="/threats" className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300 hover:translate-x-2 inline-block">Common Threats</Link></li>
                <li><Link href="/best-practices" className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300 hover:translate-x-2 inline-block">Best Practices</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Resources</h3>
              <ul className="space-y-3">
                <li><Link href="/tools" className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300 hover:translate-x-2 inline-block">Tools & Resources</Link></li>
                <li><Link href="/glossary" className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300 hover:translate-x-2 inline-block">Glossary</Link></li>
                <li><Link href="/assessment" className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300 hover:translate-x-2 inline-block">Security Assessment</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">External Sources</h3>
              <ul className="space-y-3">
                <li><a href="https://www.cisa.gov" className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300 hover:translate-x-2 inline-block">CISA.gov</a></li>
                <li><a href="https://www.nist.gov" className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300 hover:translate-x-2 inline-block">NIST Framework</a></li>
                <li><a href="https://www.sans.org" className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300 hover:translate-x-2 inline-block">SANS Institute</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Cyber Sphere. Educational content for cybersecurity awareness. Kushagra & Lucky.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
