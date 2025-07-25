'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Glossary() {
  const [searchTerm, setSearchTerm] = useState('');

  // Organize terms by category
  const glossaryCategories = {
    "Security Frameworks": [
      { term: "NIST Cybersecurity Framework", definition: "A set of guidelines and best practices for managing and reducing cybersecurity risk." },
      { term: "ISO/IEC 27001", definition: "International standard for information security management systems (ISMS)." }
    ],
    "Cloud Security": [
      { term: "CASB (Cloud Access Security Broker)", definition: "Security policy enforcement point between cloud service consumers and providers." },
      { term: "Cloud Encryption", definition: "Encrypting data stored or processed in cloud environments to protect confidentiality." },
      { term: "Cloud Security", definition: "Policies, technologies, and controls deployed to protect data, applications, and infrastructure in cloud computing environments." }
    ],
    "Mobile Security": [
      { term: "Mobile Device Management (MDM)", definition: "Software for managing, monitoring, and securing mobile devices in an organization." },
      { term: "App Sandboxing", definition: "Restricting mobile app access to system resources for security." }
    ],
    "Privacy & Compliance": [
      { term: "GDPR (General Data Protection Regulation)", definition: "European Union regulation for data protection and privacy." },
      { term: "HIPAA", definition: "US law for protecting sensitive patient health information." },
      { term: "PII (Personally Identifiable Information)", definition: "Any data that could identify a specific individual." }
    ],
    "Incident Response & Threat Intelligence": [
      { term: "SIEM (Security Information and Event Management)", definition: "Software solution for real-time analysis of security alerts and events." },
      { term: "SOC (Security Operations Center)", definition: "Centralized unit that deals with security issues on an organizational and technical level." },
      { term: "Threat Hunting", definition: "Proactive search for cyber threats that evade existing security solutions." },
      { term: "Zero Trust", definition: "Security model that assumes no user or device is trusted by default, even inside the network." },
      { term: "Incident Response", definition: "The organized approach to addressing and managing security breaches or attacks." },
      { term: "Threat Intelligence", definition: "Information about current and emerging security threats and vulnerabilities." }
    ],
    "General Terms": [
      { term: "Antivirus", definition: "Software designed to detect, prevent, and remove malware from computers and networks." },
      { term: "Backup", definition: "A copy of data stored separately from the original to protect against data loss." },
      { term: "Botnet", definition: "A network of compromised computers controlled remotely by cybercriminals." },
      { term: "Brute Force Attack", definition: "A trial-and-error method used to obtain passwords or encryption keys by trying many combinations." },
      { term: "Cipher", definition: "An algorithm used to encrypt and decrypt data to protect its confidentiality." },
      { term: "Cryptocurrency", definition: "Digital currency that uses cryptography for security and operates independently of central banks." },
      { term: "Cybercrime", definition: "Criminal activities carried out using computers or the internet as a tool or target." },
      { term: "DDoS Attack", definition: "Distributed Denial of Service attack that overwhelms a target with traffic from multiple sources." },
      { term: "Encryption", definition: "The process of converting data into a coded format to prevent unauthorized access." },
      { term: "Endpoint", definition: "A device connected to a network, such as computers, smartphones, or IoT devices." },
      { term: "Firewall", definition: "A security system that monitors and controls incoming and outgoing network traffic." },
      { term: "Hacker", definition: "A person who uses technical skills to gain unauthorized access to computer systems." },
      { term: "Identity Theft", definition: "The fraudulent acquisition and use of another person's personal information." },
      { term: "IoT (Internet of Things)", definition: "Network of interconnected devices that can collect and exchange data." },
      { term: "Keylogger", definition: "Software or hardware that records keystrokes to capture passwords and sensitive information." },
      { term: "Malware", definition: "Malicious software designed to damage, disrupt, or gain unauthorized access to computer systems." },
      { term: "Multi-Factor Authentication", definition: "Security process requiring multiple forms of verification to access an account." },
      { term: "Network Security", definition: "Practices and technologies designed to protect computer networks from unauthorized access." },
      { term: "Patch", definition: "Software update designed to fix security vulnerabilities or bugs." },
      { term: "Penetration Testing", definition: "Authorized simulated attack on a computer system to evaluate its security." },
      { term: "Phishing", definition: "Fraudulent attempt to obtain sensitive information by disguising as a trustworthy entity." },
      { term: "Ransomware", definition: "Malware that encrypts files and demands payment for decryption." },
      { term: "Risk Assessment", definition: "Process of identifying, analyzing, and evaluating potential security threats." },
      { term: "Social Engineering", definition: "Psychological manipulation to trick people into divulging confidential information." },
      { term: "Spam", definition: "Unwanted or unsolicited electronic messages, typically sent in bulk." },
      { term: "Spyware", definition: "Malware that secretly gathers information about a user's activities." },
      { term: "SSL/TLS", definition: "Protocols that provide secure communication over computer networks." },
      { term: "Trojan Horse", definition: "Malware disguised as legitimate software to gain unauthorized access." },
      { term: "Two-Factor Authentication", definition: "Security process requiring two different authentication factors to verify identity." },
      { term: "Vulnerability", definition: "A weakness in a system that can be exploited by threats to gain unauthorized access." },
      { term: "VPN (Virtual Private Network)", definition: "Technology that creates a secure, encrypted connection over a less secure network." },
      { term: "Zero-Day Attack", definition: "Attack that exploits a previously unknown vulnerability before a patch is available." },
      { term: "API Security", definition: "Protection of Application Programming Interfaces from attacks and misuse." },
      { term: "Biometric Authentication", definition: "Security process using unique biological characteristics for user verification." },
      { term: "Certificate Authority", definition: "Trusted entity that issues digital certificates to verify identity." },
      { term: "Data Breach", definition: "Unauthorized access to or disclosure of sensitive information." },
      { term: "Digital Forensics", definition: "Investigation of digital devices to recover and analyze evidence of cybercrimes." },
      { term: "Ethical Hacking", definition: "Authorized hacking performed to identify vulnerabilities and improve security." },
      { term: "Honeypot", definition: "Decoy system designed to attract and detect unauthorized access attempts." },
      { term: "Insider Threat", definition: "Security risk posed by people within an organization who have authorized access." },
      { term: "Machine Learning Security", definition: "Application of AI and ML techniques to enhance cybersecurity capabilities." },
      { term: "Password Manager", definition: "Software application that stores and manages passwords securely." },
      { term: "Sandbox", definition: "Isolated environment for testing potentially malicious software safely." },
      { term: "Whaling", definition: "Phishing attack specifically targeting high-profile individuals like executives." }
    ]
  };

  // Flatten all terms for search
  const allTerms = Object.values(glossaryCategories).flat();
  const filteredTerms = allTerms.filter(item =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  type GlossaryTerm = { term: string; definition: string };
  type GroupedTerms = { [key: string]: GlossaryTerm[] };
  // Group filtered terms by category
  const filteredCategories: { [key: string]: GlossaryTerm[] } = {};
  Object.entries(glossaryCategories).forEach(([category, terms]) => {
    const filtered = terms.filter(item =>
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filtered.length > 0) {
      filteredCategories[category] = filtered;
    }
  });

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
                <Link href="/glossary" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer">Glossary</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 to-purple-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cybersecurity Glossary
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Your comprehensive reference guide to cybersecurity terminology. Find definitions for essential terms, concepts, and technologies in the cybersecurity field.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search terms and definitions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 pr-4 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="ri-search-line text-gray-400 text-xl w-6 h-6 flex items-center justify-center"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{Object.values(glossaryCategories).flat().length}+</div>
              <div className="text-gray-600">Terms Defined</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">{Object.keys(glossaryCategories).length}</div>
              <div className="text-gray-600">Categories Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">{filteredTerms.length}</div>
              <div className="text-gray-600">Search Results</div>
            </div>
          </div>
        </div>
      </section>

      {/* Glossary Terms */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.keys(filteredCategories).length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-search-line text-gray-400 text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No terms found</h3>
              <p className="text-gray-600">Try searching with different keywords</p>
            </div>
          ) : (
            <div className="space-y-12">
              {Object.entries(filteredCategories).map(([category, terms]) => (
                <div key={category}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl font-bold text-indigo-600">{category}</span>
                    </div>
                    <div className="flex-1 h-px bg-gray-200"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {terms.map((item: GlossaryTerm, index: number) => (
                      <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.term}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.definition}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Resources</h2>
            <p className="text-lg text-gray-600">Expand your cybersecurity knowledge with these additional resources</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-book-open-line text-blue-600 text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Learn Basics</h3>
              <p className="text-sm text-gray-600 mb-4">Start with cybersecurity fundamentals</p>
              <Link href="/what-is-cybersecurity" className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">
                Get Started →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-alert-line text-red-600 text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Threat Guide</h3>
              <p className="text-sm text-gray-600 mb-4">Understand common cyber threats</p>
              <Link href="/threats" className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">
                Explore →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-green-600 text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Best Practices</h3>
              <p className="text-sm text-gray-600 mb-4">Learn protection strategies</p>
              <Link href="/best-practices" className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">
                Discover →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-tools-line text-purple-600 text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Security Tools</h3>
              <p className="text-sm text-gray-600 mb-4">Find the right security software</p>
              <Link href="/tools" className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">
                Browse →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">External Cybersecurity Resources</h2>
            <p className="text-lg text-gray-600">Authoritative sources for continued learning</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-government-line text-blue-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">CISA (Cybersecurity & Infrastructure Security Agency)</h3>
              <p className="text-gray-600 mb-4">Official US government cybersecurity guidance and resources</p>
              <a href="https://www.cisa.gov" className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">
                Visit CISA.gov →
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-file-text-line text-green-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">NIST Cybersecurity Framework</h3>
              <p className="text-gray-600 mb-4">Comprehensive framework for improving cybersecurity practices</p>
              <a href="https://www.nist.gov/cyberframework" className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">
                View Framework →
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-graduation-cap-line text-purple-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">SANS Institute</h3>
              <p className="text-gray-600 mb-4">Leading cybersecurity training and certification organization</p>
              <a href="https://www.sans.org" className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Apply Your Knowledge?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Now that you understand the terminology, take our security assessment to see how well you're protected against cyber threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/assessment" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 cursor-pointer whitespace-nowrap">
              Security Assessment
            </Link>
            <Link href="/best-practices" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300 cursor-pointer whitespace-nowrap">
              Best Practices
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