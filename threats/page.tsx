'use client';

import Link from 'next/link';

export default function Threats() {
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
                <Link href="/threats" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer">Threats</Link>
                <Link href="/best-practices" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer">Best Practices</Link>
                <Link href="/tools" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer">Tools</Link>
                <Link href="/glossary" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer">Glossary</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

// ...existing code...
      <section className="relative bg-gradient-to-br from-red-50 to-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Common Cyber Threats
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Understanding the landscape of cyber threats is the first step in protecting yourself and your organization. Learn about the most common attack vectors and how they work.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/best-practices" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 cursor-pointer whitespace-nowrap">
                Protection Strategies
              </Link>
              <Link href="/tools" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition duration-300 cursor-pointer whitespace-nowrap">
                Security Tools
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Threat Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Threat Landscape Statistics</h2>
            <p className="text-lg text-gray-600">Current state of cyber threats worldwide</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">+40%</div>
              <div className="text-sm text-gray-600">Increase in ransomware attacks (2024–2025)</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">2.8M</div>
              <div className="text-sm text-gray-600">Malicious npm downloads per week (2025)</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">309</div>
              <div className="text-sm text-gray-600">US companies infiltrated by North Korean IT worker schemes (2025)</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">$380M</div>
              <div className="text-sm text-gray-600">Clorox cyberattack lawsuit value (2025)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Major Threat Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Major Threat Categories</h2>
            <p className="text-lg text-gray-600">Comprehensive overview of the most dangerous cyber threats</p>
          </div>

          {/* Malware */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-virus-line text-red-600 text-xl w-6 h-6 flex items-center justify-center"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Malware</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Malicious software designed to damage, disrupt, or gain unauthorized access to computer systems. It's one of the most common and dangerous threats.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <strong className="text-gray-900">Viruses:</strong> Self-replicating programs that spread by attaching to other files
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <strong className="text-gray-900">Trojans:</strong> Disguised as legitimate software but perform malicious actions
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <strong className="text-gray-900">Ransomware:</strong> Encrypts files and demands payment for decryption
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://readdy.ai/api/search-image?query=Computer%20virus%20and%20malware%20threat%20visualization%20showing%20infected%20system%20with%20red%20warning%20alerts%2C%20digital%20virus%20spreading%20through%20network%20connections%2C%20cybersecurity%20malware%20protection%20concept%20with%20dark%20background%20and%20glowing%20red%20elements&width=600&height=400&seq=malware-threat&orientation=landscape" 
                  alt="Malware Threat"
                  className="w-full h-auto rounded-lg shadow-lg object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Phishing */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="lg:order-2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-mail-unread-line text-orange-600 text-xl w-6 h-6 flex items-center justify-center"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Phishing Attacks</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Fraudulent attempts to obtain sensitive information by disguising as trustworthy entities in electronic communications.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <strong className="text-gray-900">Email Phishing:</strong> Fake emails requesting personal information
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <strong className="text-gray-900">Spear Phishing:</strong> Targeted attacks on specific individuals
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <strong className="text-gray-900">Whaling:</strong> Attacks targeting high-profile executives
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:order-1">
                <img 
                  src="https://readdy.ai/api/search-image?query=Phishing%20email%20attack%20concept%20showing%20fake%20suspicious%20email%20with%20fishing%20hook%2C%20fraudulent%20message%20on%20computer%20screen%2C%20cybersecurity%20phishing%20protection%20illustration%20with%20orange%20and%20red%20warning%20colors%2C%20professional%20business%20setting&width=600&height=400&seq=phishing-attack&orientation=landscape" 
                  alt="Phishing Attack"
                  className="w-full h-auto rounded-lg shadow-lg object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Social Engineering */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-user-heart-line text-purple-600 text-xl w-6 h-6 flex items-center justify-center"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Social Engineering</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Manipulating people to divulge confidential information or perform actions that compromise security through psychological manipulation.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <strong className="text-gray-900">Pretexting:</strong> Creating false scenarios to gain trust
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <strong className="text-gray-900">Baiting:</strong> Offering something enticing to spark curiosity
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <strong className="text-gray-900">Tailgating:</strong> Following authorized personnel into secure areas
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://readdy.ai/api/search-image?query=Social%20engineering%20cyber%20attack%20concept%20showing%20person%20being%20manipulated%20through%20phone%20conversation%2C%20psychological%20manipulation%20tactics%2C%20human%20element%20in%20cybersecurity%20threats%2C%20purple%20and%20dark%20color%20scheme%2C%20professional%20business%20atmosphere&width=600&height=400&seq=social-engineering&orientation=landscape" 
                  alt="Social Engineering"
                  className="w-full h-auto rounded-lg shadow-lg object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emerging Threats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Emerging Threats</h2>
            <p className="text-lg text-gray-600">New and evolving cyber threats to watch out for</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-robot-line text-blue-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Powered Attacks</h3>
              <p className="text-gray-600">Cybercriminals using artificial intelligence to create more sophisticated and targeted attacks, including deepfakes and automated social engineering.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-smartphone-line text-green-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobile Threats</h3>
              <p className="text-gray-600">Increasing attacks on mobile devices through malicious apps, SMS phishing, and exploitation of mobile vulnerabilities.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-cloud-line text-indigo-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cloud Security Threats</h3>
              <p className="text-gray-600">Attacks targeting cloud infrastructure, including misconfigured storage, compromised credentials, and cloud-specific vulnerabilities.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-wifi-line text-red-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">IoT Vulnerabilities</h3>
              <p className="text-gray-600">Internet of Things devices with weak security becoming entry points for larger network attacks and botnets.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-currency-line text-orange-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cryptocurrency Threats</h3>
              <p className="text-gray-600">Cryptojacking, wallet theft, and attacks on cryptocurrency exchanges and mining operations.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-government-line text-purple-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Nation-State Attacks</h3>
              <p className="text-gray-600">Sophisticated attacks by government-sponsored groups targeting critical infrastructure and sensitive data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Examples */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Real-World Attack Examples</h2>
            <p className="text-lg text-gray-600">Learn from actual cyber attacks and their impact</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <i className="ri-alert-line text-red-600 text-sm w-4 h-4 flex items-center justify-center"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">BlackSuit Ransomware Disruption (2025)</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Law enforcement seized BlackSuit ransomware extortion sites, disrupting a major global ransomware operation.
              </p>
              <div className="text-sm text-gray-500">
                <strong>Impact:</strong> Hundreds of organizations targeted, sites seized
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                  <i className="ri-database-line text-orange-600 text-sm w-4 h-4 flex items-center justify-center"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Toptal GitHub Supply Chain Attack (2025)</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Hackers breached Toptal’s GitHub and published malicious npm packages, impacting millions of downloads.
              </p>
              <div className="text-sm text-gray-500">
                <strong>Impact:</strong> 2.8M weekly downloads affected
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <i className="ri-mail-line text-purple-600 text-sm w-4 h-4 flex items-center justify-center"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">North Korean IT Worker Infiltration (2025)</h3>
              </div>
              <p className="text-gray-600 mb-4">
                North Korean nationals infiltrated 309 U.S. companies via fraudulent IT worker schemes; key accomplice sentenced to 8 years.
              </p>
              <div className="text-sm text-gray-500">
                <strong>Impact:</strong> 309 companies infiltrated, 8-year prison sentence
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <i className="ri-oil-line text-blue-600 text-sm w-4 h-4 flex items-center justify-center"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Clorox Cyberattack Lawsuit (2025)</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Clorox sues Cognizant for $380M after a 2023 cyberattack enabled by a help desk password reset for a hacker.
              </p>
              <div className="text-sm text-gray-500">
                <strong>Impact:</strong> $380M lawsuit, major business disruption
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Protection CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Protect Yourself from These Threats</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Understanding threats is the first step. Learn how to implement effective security measures to protect yourself and your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/best-practices" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 cursor-pointer whitespace-nowrap">
              Best Practices
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