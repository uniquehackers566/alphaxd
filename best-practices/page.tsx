'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function BestPractices() {
  const [activeTab, setActiveTab] = useState('personal');

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
                <Link href="/best-practices" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer">Best Practices</Link>
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
              Cybersecurity Best Practices
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Implement proven strategies and actionable steps to strengthen your cybersecurity posture. Protect yourself and your organization with these essential security practices.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/tools" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 cursor-pointer whitespace-nowrap">
                Security Tools
              </Link>
              <Link href="/assessment" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition duration-300 cursor-pointer whitespace-nowrap">
                Security Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex space-x-1 bg-white rounded-full p-1 shadow-md">
              <button
                onClick={() => setActiveTab('personal')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition duration-300 whitespace-nowrap cursor-pointer ${
                  activeTab === 'personal'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Personal Security
              </button>
              <button
                onClick={() => setActiveTab('business')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition duration-300 whitespace-nowrap cursor-pointer ${
                  activeTab === 'business'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Business Security
              </button>
              <button
                onClick={() => setActiveTab('advanced')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition duration-300 whitespace-nowrap cursor-pointer ${
                  activeTab === 'advanced'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Advanced Practices
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Security Practices */}
      {activeTab === 'personal' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Personal Security Practices</h2>
              <p className="text-lg text-gray-600">Essential steps to protect your personal digital life</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Password Security */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-lock-line text-blue-600 text-xl w-6 h-6 flex items-center justify-center"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Strong Password Management</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-600 mr-2 mt-1 text-sm w-4 h-4 flex items-center justify-center"></i>
                    Use unique passwords for each account
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-600 mr-2 mt-1 text-sm w-4 h-4 flex items-center justify-center"></i>
                    Create passwords with 12+ characters
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-600 mr-2 mt-1 text-sm w-4 h-4 flex items-center justify-center"></i>
                    Use a password manager
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-600 mr-2 mt-1 text-sm w-4 h-4 flex items-center justify-center"></i>
                    Enable two-factor authentication
                  </li>
                </ul>
              </div>

              {/* Software Updates */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-download-line text-green-600 text-xl w-6 h-6 flex items-center justify-center"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Keep Software Updated</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-600 mr-2 mt-1 text-sm w-4 h-4 flex items-center justify-center"></i>
                    Enable automatic updates for OS
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-600 mr-2 mt-1 text-sm w-4 h-4 flex items-center justify-center"></i>
                    Update browsers and plugins regularly
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-600 mr-2 mt-1 text-sm w-4 h-4 flex items-center justify-center"></i>
                    Keep antivirus software current
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-600 mr-2 mt-1 text-sm w-4 h-4 flex items-center justify-center"></i>
                    Update mobile apps frequently
                  </li>
                </ul>
              </div>

              {/* Email Security */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-mail-line text-orange-600 text-xl w-6 h-6 flex items-center justify-center"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Email Security</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-600 mr-2 mt-1 text-sm w-4 h-4 flex items-center justify-center"></i>
                    Verify sender identity before clicking links
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-600 mr-2 mt-1 text-sm w-4 h-4 flex items-center justify-center"></i>
                    Don't download suspicious attachments
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-600 mr-2 mt-1 text-sm w-4 h-4 flex items-center justify-center"></i>
                    Use email encryption for sensitive data
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-600 mr-2 mt-1 text-sm w-4 h-4 flex items-center justify-center"></i>
                    Report phishing attempts
                  </li>
                </ul>
              </div>

              {/* Safe Browsing */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-global-line text-purple-600 text-xl w-6 h-6 flex items-center justify-center"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Safe Browsing Habits</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-600 mr-2 mt-1 text-sm w-4 h-4 flex items-center justify-center"></i>
                    Look for HTTPS before entering sensitive info
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-600 mr-2 mt-1 text-sm w-4 h-4 flex items-center justify-center"></i>
                    Avoid downloading from untrusted sites
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-600 mr-2 mt-1 text-sm w-4 h-4 flex items-center justify-center"></i>
                    Use ad blockers and script blockers
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-600 mr-2 mt-1 text-sm w-4 h-4 flex items-center justify-center"></i>
                    Clear cookies and cache regularly
                  </li>
                </ul>
              </div>
            </div>

            {/* Personal Security Checklist */}
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Personal Security Checklist</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-3 cursor-pointer" />
                    <span className="text-gray-700">Install antivirus software</span>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-3 cursor-pointer" />
                    <span className="text-gray-700">Enable firewall protection</span>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-3 cursor-pointer" />
                    <span className="text-gray-700">Set up automatic backups</span>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-3 cursor-pointer" />
                    <span className="text-gray-700">Review privacy settings on social media</span>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-3 cursor-pointer" />
                    <span className="text-gray-700">Use VPN for public Wi-Fi</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-3 cursor-pointer" />
                    <span className="text-gray-700">Monitor credit reports regularly</span>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-3 cursor-pointer" />
                    <span className="text-gray-700">Secure home Wi-Fi with WPA3</span>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-3 cursor-pointer" />
                    <span className="text-gray-700">Lock devices with PIN/biometrics</span>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-3 cursor-pointer" />
                    <span className="text-gray-700">Be cautious with USB drives</span>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-3 cursor-pointer" />
                    <span className="text-gray-700">Educate family members about security</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Business Security Practices */}
      {activeTab === 'business' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Business Security Practices</h2>
              <p className="text-lg text-gray-600">Comprehensive security measures for organizations</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Access Control */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-key-line text-blue-600 text-xl w-6 h-6 flex items-center justify-center"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Access Control</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-600 mr-2 mt-1 text-sm w-4 h-4 flex items-center justify-center"></i>
                    Implement principle of least privilege
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-600 mr-2 mt-1 text-sm w-4 h-4 flex items-center justify-center"></i>
                    Use role-based access control (RBAC)
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-600 mr-2 mt-1 text-sm w-4 h-4 flex items-center justify-center"></i>
                    Regular access reviews and audits
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-600 mr-2 mt-1 text-sm w-4 h-4 flex items-center justify-center"></i>
                    Immediate access revocation for departing employees
                  </li>
                </ul>
              </div>

              {/* Employee Training */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-graduation-cap-line text-green-600 text-xl w-6 h-6 flex items-center justify-center"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Employee Training</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-600 mr-2 mt-1 text-sm w-4 h-4 flex items-center justify-center"></i>
                    Regular security awareness training
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-600 mr-2 mt-1 text-sm w-4 h-4 flex items-center justify-center"></i>
                    Phishing simulation exercises
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-600 mr-2 mt-1 text-sm w-4 h-4 flex items-center justify-center"></i>
                    Clear security policies and procedures
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-600 mr-2 mt-1 text-sm w-4 h-4 flex items-center justify-center"></i>
                    Incident reporting procedures
                  </li>
                </ul>
              </div>

              {/* Data Protection */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-shield-check-line text-purple-600 text-xl w-6 h-6 flex items-center justify-center"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Data Protection</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-600 mr-2 mt-1 text-sm w-4 h-4 flex items-center justify-center"></i>
                    Encrypt data at rest and in transit
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-600 mr-2 mt-1 text-sm w-4 h-4 flex items-center justify-center"></i>
                    Regular automated backups
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-600 mr-2 mt-1 text-sm w-4 h-4 flex items-center justify-center"></i>
                    Data classification and labeling
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-600 mr-2 mt-1 text-sm w-4 h-4 flex items-center justify-center"></i>
                    Secure data disposal procedures
                  </li>
                </ul>
              </div>

              {/* Network Security */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-wifi-line text-orange-600 text-xl w-6 h-6 flex items-center justify-center"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Network Security</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-600 mr-2 mt-1 text-sm w-4 h-4 flex items-center justify-center"></i>
                    Deploy firewalls and intrusion detection
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-600 mr-2 mt-1 text-sm w-4 h-4 flex items-center justify-center"></i>
                    Segment network into security zones
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-600 mr-2 mt-1 text-sm w-4 h-4 flex items-center justify-center"></i>
                    Monitor network traffic continuously
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-600 mr-2 mt-1 text-sm w-4 h-4 flex items-center justify-center"></i>
                    Secure wireless networks with WPA3
                  </li>
                </ul>
              </div>
            </div>

            {/* Business Security Framework */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">NIST Cybersecurity Framework</h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-search-line text-blue-600 text-xl w-8 h-8 flex items-center justify-center"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">IDENTIFY</h4>
                  <p className="text-sm text-gray-600">Understand your organization's cybersecurity risks</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-shield-line text-green-600 text-xl w-8 h-8 flex items-center justify-center"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">PROTECT</h4>
                  <p className="text-sm text-gray-600">Implement safeguards to limit impact</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-eye-line text-orange-600 text-xl w-8 h-8 flex items-center justify-center"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">DETECT</h4>
                  <p className="text-sm text-gray-600">Identify cybersecurity events quickly</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-alarm-line text-red-600 text-xl w-8 h-8 flex items-center justify-center"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">RESPOND</h4>
                  <p className="text-sm text-gray-600">Take action once an incident is detected</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-refresh-line text-purple-600 text-xl w-8 h-8 flex items-center justify-center"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">RECOVER</h4>
                  <p className="text-sm text-gray-600">Restore services and learn from incidents</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Advanced Practices */}
      {activeTab === 'advanced' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Security Practices</h2>
              <p className="text-lg text-gray-600">Sophisticated security measures for enhanced protection</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Zero Trust Architecture */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-shield-star-line text-blue-600 text-xl w-6 h-6 flex items-center justify-center"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Zero Trust Architecture</h3>
                </div>
                <p className="text-gray-600 mb-4">Never trust, always verify - a security model that requires verification for every user and device.</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Continuous authentication and authorization</li>
                  <li>• Microsegmentation of network resources</li>
                  <li>• Least privilege access controls</li>
                  <li>• Comprehensive logging and monitoring</li>
                </ul>
              </div>

              {/* Threat Intelligence */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-brain-line text-purple-600 text-xl w-6 h-6 flex items-center justify-center"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Threat Intelligence</h3>
                </div>
                <p className="text-gray-600 mb-4">Proactive security through understanding of current and emerging threats.</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Subscribe to threat intelligence feeds</li>
                  <li>• Analyze indicators of compromise (IoCs)</li>
                  <li>• Share threat information with peers</li>
                  <li>• Integrate intelligence into security tools</li>
                </ul>
              </div>

              {/* Security Automation */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-robot-line text-green-600 text-xl w-6 h-6 flex items-center justify-center"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Security Automation</h3>
                </div>
                <p className="text-gray-600 mb-4">Automate repetitive security tasks to improve efficiency and response times.</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Automated incident response playbooks</li>
                  <li>• Security orchestration platforms</li>
                  <li>• Automated vulnerability scanning</li>
                  <li>• Threat hunting automation</li>
                </ul>
              </div>

              {/* Advanced Monitoring */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-radar-line text-orange-600 text-xl w-6 h-6 flex items-center justify-center"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Advanced Monitoring</h3>
                </div>
                <p className="text-gray-600 mb-4">Comprehensive monitoring and analysis of security events and anomalies.</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• SIEM (Security Information and Event Management)</li>
                  <li>• User and Entity Behavior Analytics (UEBA)</li>
                  <li>• Network traffic analysis</li>
                  <li>• Endpoint detection and response (EDR)</li>
                </ul>
              </div>
            </div>

            {/* Security Maturity Model */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Security Maturity Levels</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-red-600 font-bold">1</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Basic</h4>
                  <p className="text-sm text-gray-600">Minimal security controls, reactive approach</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-orange-600 font-bold">2</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Managed</h4>
                  <p className="text-sm text-gray-600">Documented processes, some automation</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Defined</h4>
                  <p className="text-sm text-gray-600">Standardized processes, proactive monitoring</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 font-bold">4</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Optimized</h4>
                  <p className="text-sm text-gray-600">Continuous improvement, advanced analytics</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Implementation Guide */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Implementation Roadmap</h2>
            <p className="text-lg text-gray-600">Step-by-step guide to implementing cybersecurity best practices</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Assessment</h3>
              <p className="text-gray-600">Evaluate your current security posture and identify gaps and vulnerabilities in your systems.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Planning</h3>
              <p className="text-gray-600">Develop a comprehensive security strategy and implementation plan based on your assessment results.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Implementation</h3>
              <p className="text-gray-600">Execute your security plan with proper tools, training, and continuous monitoring for effectiveness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Implementing These Practices Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step towards better security. Use our assessment tool to evaluate your current practices and get personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/assessment" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 cursor-pointer whitespace-nowrap">
              Security Assessment
            </Link>
            <Link href="/tools" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300 cursor-pointer whitespace-nowrap">
              Security Tools
            </Link>
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