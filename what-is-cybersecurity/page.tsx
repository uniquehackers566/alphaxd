'use client';

import Link from 'next/link';

export default function WhatIsCybersecurity() {
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
                <Link href="/what-is-cybersecurity" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer">What Is Cybersecurity</Link>
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
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What Is Cybersecurity?
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. Learn the fundamentals and why it matters in today's interconnected world.
              </p>
              <div className="flex space-x-4">
                <Link href="/threats" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 cursor-pointer whitespace-nowrap">
                  Explore Threats
                </Link>
                <Link href="/best-practices" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition duration-300 cursor-pointer whitespace-nowrap">
                  Best Practices
                </Link>
              </div>
            </div>
            <div className="lg:text-right">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20cybersecurity%20concept%20illustration%20showing%20digital%20shield%20protecting%20computer%20networks%2C%20data%20servers%2C%20and%20cloud%20systems%20with%20interconnected%20security%20elements%2C%20modern%20clean%20design%20with%20blue%20and%20white%20color%20scheme%2C%20business%20technology%20atmosphere&width=600&height=400&seq=cyber-concept&orientation=landscape" 
                alt="Cybersecurity Concept"
                className="w-full h-auto rounded-lg shadow-lg object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Definition Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cybersecurity Definition</h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
              <p className="text-lg text-gray-800">
                <strong>Cybersecurity</strong> is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information; extorting money from users; or interrupting normal business processes.
              </p>
            </div>
            <p className="text-gray-600 mb-6">
              Effective cybersecurity requires a coordinated approach throughout an information system. Elements of cybersecurity include application security, information security, network security, disaster recovery, operational security, and end-user education.
            </p>
          </div>
        </div>
      </section>

      {/* Key Components */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Components of Cybersecurity</h2>
            <p className="text-lg text-gray-600">Understanding the essential elements that make up comprehensive cybersecurity</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-shield-check-line text-blue-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Network Security</h3>
              <p className="text-gray-600">Protects computer networks from intruders, whether targeted attackers or opportunistic malware.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-apps-line text-green-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Application Security</h3>
              <p className="text-gray-600">Keeps software and devices free of threats. A compromised application could provide access to the data it's designed to protect.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-database-2-line text-purple-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Information Security</h3>
              <p className="text-gray-600">Protects the integrity and privacy of data, both in storage and in transit.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-refresh-line text-red-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Disaster Recovery</h3>
              <p className="text-gray-600">How an organization responds to a cyber-security incident or any other event that causes the loss of operations or data.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-settings-line text-orange-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Operational Security</h3>
              <p className="text-gray-600">Includes the processes and decisions for handling and protecting data assets.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-graduation-cap-line text-indigo-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">End-User Education</h3>
              <p className="text-gray-600">Teaching users to delete suspicious email attachments, not plug in unidentified USB drives, and various other important lessons.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Cybersecurity Matters</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="ri-money-dollar-circle-line text-blue-600 text-sm w-4 h-4 flex items-center justify-center"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Financial Protection</h3>
                    <p className="text-gray-600">Cybercrime costs the global economy over $6 trillion annually. Effective cybersecurity protects against financial losses.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="ri-shield-keyhole-line text-green-600 text-sm w-4 h-4 flex items-center justify-center"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Privacy Protection</h3>
                    <p className="text-gray-600">Personal and business data must be protected from unauthorized access and misuse.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="ri-building-line text-purple-600 text-sm w-4 h-4 flex items-center justify-center"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Continuity</h3>
                    <p className="text-gray-600">Cyber attacks can disrupt operations. Strong cybersecurity ensures business continuity and customer trust.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=Business%20cybersecurity%20importance%20concept%20showing%20protected%20office%20building%2C%20secure%20digital%20networks%2C%20financial%20data%20protection%2C%20and%20business%20continuity%20elements%2C%20professional%20corporate%20style%20with%20blue%20and%20green%20color%20scheme%2C%20modern%20technology%20atmosphere&width=600&height=400&seq=cyber-importance&orientation=landscape" 
                alt="Cybersecurity Importance"
                className="w-full h-auto rounded-lg shadow-lg object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Cyber Threats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Types of Cyber Threats</h2>
            <p className="text-lg text-gray-600">Understanding what cybersecurity protects against</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Malware</h3>
              <p className="text-gray-600 mb-4">Malicious software designed to damage, disrupt, or gain unauthorized access to computer systems.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Viruses and worms</li>
                <li>• Trojans and spyware</li>
                <li>• Ransomware</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Phishing</h3>
              <p className="text-gray-600 mb-4">Fraudulent attempts to obtain sensitive information by disguising as trustworthy entities.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Email phishing</li>
                <li>• Spear phishing</li>
                <li>• Whaling attacks</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Social Engineering</h3>
              <p className="text-gray-600 mb-4">Manipulating people to divulge confidential information or perform actions that compromise security.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Pretexting</li>
                <li>• Baiting</li>
                <li>• Tailgating</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Network Attacks</h3>
              <p className="text-gray-600 mb-4">Attacks that target network infrastructure and services.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• DDoS attacks</li>
                <li>• Man-in-the-middle</li>
                <li>• SQL injection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Learn More?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Now that you understand what cybersecurity is, explore specific threats and learn how to protect yourself and your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/threats" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 cursor-pointer whitespace-nowrap">
              Explore Threats
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
            <p>&copy; 2025 Cyber Sphere. All rights reserved. Updated content for cybersecurity awareness. Kushagra & Lucky.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}