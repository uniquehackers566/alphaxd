"use client";
import Link from "next/link";

export default function Tools() {


  return (
    <div className="min-h-screen bg-white">
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
                <Link href="/tools" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer">Tools</Link>
                <Link href="/glossary" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer">Glossary</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Major Cybersecurity Tools</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Explore essential cybersecurity tools used by professionals for network analysis, penetration testing, vulnerability assessment, and more.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* ThreatLocker Patch Management */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-blue-600 mb-2">ThreatLocker Patch Management</h2>
              <p className="text-gray-700 mb-4">Real-time patch management and application control for incident-driven security.</p>
              <a href="https://www.threatlocker.com/pages/application-control-allowlisting" target="_blank" rel="noopener" className="text-blue-500 hover:underline">Learn more</a>
            </div>
            {/* Nudge Security */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-blue-600 mb-2">Nudge Security</h2>
              <p className="text-gray-700 mb-4">SaaS security and third-party risk management platform for modern organizations.</p>
              <a href="https://www.nudgesecurity.com/" target="_blank" rel="noopener" className="text-blue-500 hover:underline">Learn more</a>
            </div>
            {/* KarmaCheck */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-blue-600 mb-2">KarmaCheck</h2>
              <p className="text-gray-700 mb-4">Swiss Army Knife for SaaS security, GenAI risk management, and shadow IT control.</p>
              <a href="https://www.nudgesecurity.com/case-study/karmacheck" target="_blank" rel="noopener" className="text-blue-500 hover:underline">Learn more</a>
            </div>
            {/* Nmap */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-blue-600 mb-2">Nmap</h2>
              <p className="text-gray-700 mb-4">Network mapper for scanning and discovering devices, open ports, and services on a network.</p>
              <a href="https://nmap.org/" target="_blank" rel="noopener" className="text-blue-500 hover:underline">Learn more</a>
            </div>
            {/* Wireshark */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-blue-600 mb-2">Wireshark</h2>
              <p className="text-gray-700 mb-4">Powerful network protocol analyzer for inspecting data packets in real time.</p>
              <a href="https://www.wireshark.org/" target="_blank" rel="noopener" className="text-blue-500 hover:underline">Learn more</a>
            </div>
            {/* Metasploit */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-blue-600 mb-2">Metasploit</h2>
              <p className="text-gray-700 mb-4">Penetration testing framework for developing and executing exploit code against remote targets.</p>
              <a href="https://www.metasploit.com/" target="_blank" rel="noopener" className="text-blue-500 hover:underline">Learn more</a>
            </div>
            {/* Burp Suite */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-blue-600 mb-2">Burp Suite</h2>
              <p className="text-gray-700 mb-4">Web vulnerability scanner and proxy tool for testing web application security.</p>
              <a href="https://portswigger.net/burp" target="_blank" rel="noopener" className="text-blue-500 hover:underline">Learn more</a>
            </div>
            {/* Nessus */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-blue-600 mb-2">Nessus</h2>
              <p className="text-gray-700 mb-4">Comprehensive vulnerability scanner for identifying security issues in systems and networks.</p>
              <a href="https://www.tenable.com/products/nessus" target="_blank" rel="noopener" className="text-blue-500 hover:underline">Learn more</a>
            </div>
            {/* John the Ripper */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-blue-600 mb-2">John the Ripper</h2>
              <p className="text-gray-700 mb-4">Popular password cracking tool for testing password strength and security.</p>
              <a href="https://www.openwall.com/john/" target="_blank" rel="noopener" className="text-blue-500 hover:underline">Learn more</a>
            </div>
            {/* Aircrack-ng */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-blue-600 mb-2">Aircrack-ng</h2>
              <p className="text-gray-700 mb-4">Suite of tools for auditing wireless networks and cracking Wi-Fi passwords.</p>
              <a href="https://www.aircrack-ng.org/" target="_blank" rel="noopener" className="text-blue-500 hover:underline">Learn more</a>
            </div>
            {/* OWASP ZAP */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-blue-600 mb-2">OWASP ZAP</h2>
              <p className="text-gray-700 mb-4">Open-source web application security scanner for finding vulnerabilities in web apps.</p>
              <a href="https://www.zaproxy.org/" target="_blank" rel="noopener" className="text-blue-500 hover:underline">Learn more</a>
            </div>
            {/* Hydra */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-blue-600 mb-2">Hydra</h2>
              <p className="text-gray-700 mb-4">Fast and flexible password brute-forcing tool supporting many protocols.</p>
              <a href="https://github.com/vanhauser-thc/thc-hydra" target="_blank" rel="noopener" className="text-blue-500 hover:underline">Learn more</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Cyber Sphere. Educational content for cybersecurity awareness. Kushagra & Lucky.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}