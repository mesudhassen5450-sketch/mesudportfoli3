import Image from "next/image";
import Link from "next/link";

export default function AboutContent() {
  return (
    <div className="flex-1 flex flex-col w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 mb-16">
        <div className="w-full md:w-3/5 space-y-5 text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
            👋 Hi, I'm Mesud Hassen
          </h1>
          
          <div className="space-y-2">
            <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
              💻 IT Student | Full-Stack Web Developer | Software Developer | Networking Enthusiast
            </p>
            <p className="text-base text-neutral-600 dark:text-neutral-300">
              🎓 Information Technology student at <strong>Haramaya University, College of Computing and Informatics</strong>
            </p>
            <p className="text-base text-neutral-600 dark:text-neutral-300">
              🇪🇹 Ethiopia
            </p>
          </div>

          <div className="p-4 rounded-xl bg-neutral-100/80 dark:bg-neutral-900/60 border-l-4 border-indigo-600 dark:border-indigo-400">
            <p className="text-sm text-neutral-700 dark:text-neutral-300 italic">
              I enjoy turning ideas and real-world problems into <strong>practical software solutions</strong>. My main focus is <strong>full-stack web development</strong>, while I also build my skills in <strong>software engineering, databases, and computer networking</strong>.
            </p>
          </div>

          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            I learn best by building, testing, breaking, fixing, and improving real projects.
          </p>
        </div>

        <div className="w-full md:w-2/5 flex justify-center">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden border-4 border-white dark:border-neutral-800 shadow-2xl">
            <Image
              src="/mesudimage2.jpg"
              alt="Mesud Hassen"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Live Portfolio Banner */}
      <section className="mb-16 p-6 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/40 dark:to-purple-950/40 border border-indigo-200 dark:border-indigo-800">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 text-center">
          🌐 Live Portfolio
        </h2>
        <div className="flex justify-center">
          <a
            href="https://mesudportfoli3.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
          >
            🌐 Visit My Portfolio - mesudportfoli3.netlify.app
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
        <p className="text-center mt-3 text-sm text-neutral-600 dark:text-neutral-400">
          🔗 <strong>Live:</strong> https://mesudportfoli3.netlify.app
        </p>
      </section>

      {/* About Me */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
          🚀 About Me
        </h2>
        <div className="space-y-4 text-neutral-600 dark:text-neutral-300">
          <p>
            I am an IT student developing practical experience across the software development lifecycle:
          </p>
          <div className="p-6 rounded-xl bg-neutral-100 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
            <p className="text-center font-mono text-sm">
              <strong>Idea → Planning → Design → Development → Database → Testing → Debugging → Deployment</strong>
            </p>
          </div>
          <p className="font-semibold">My work has included:</p>
          <ul className="list-none space-y-2 ml-4">
            <li>🌐 Responsive web applications</li>
            <li>⚛️ React and TypeScript development</li>
            <li>🟢 Node.js and backend development</li>
            <li>🗄️ SQL, PostgreSQL, Supabase and MySQL</li>
            <li>🔐 Authentication and role-based access control</li>
            <li>🔌 API integration</li>
            <li>🧪 Testing and troubleshooting</li>
            <li>🚀 Git, GitHub and deployment</li>
            <li>🌐 Cisco networking and Packet Tracer</li>
          </ul>
          <p>
            I am particularly interested in <strong>real-world software development</strong>, collaborating with developers, solving technical problems, and continuously improving my engineering skills.
          </p>
        </div>
      </section>

      {/* What I Build */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
          💻 What I Build
        </h2>
        
        <div className="space-y-8">
          {/* Full-Stack Development */}
          <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
              🌐 Full-Stack Web Development
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              I work across both frontend and backend development, including:
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "JavaScript", "Node.js", "Express.js", "PHP", "HTML", "CSS", "REST APIs"].map((tech) => (
                <span key={tech} className="px-3 py-1 text-sm font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 rounded-lg">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
              🗄️ Databases
            </h3>
            <ul className="list-none space-y-2 text-neutral-600 dark:text-neutral-300 mb-4">
              <li>• PostgreSQL</li>
              <li>• Supabase</li>
              <li>• MySQL</li>
              <li>• SQL</li>
              <li>• Database design</li>
              <li>• Relationships and queries</li>
              <li>• Data management</li>
            </ul>
          </div>

          {/* Networking */}
          <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
              🌐 Networking
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              I also have practical networking experience and study areas including:
            </p>
            <div className="flex flex-wrap gap-2">
              {["IPv4", "Subnetting", "VLANs", "Routing", "NAT", "Ethernet", "RJ45", "Default gateways", "Cisco Packet Tracer", "Network troubleshooting"].map((tech) => (
                <span key={tech} className="px-3 py-1 text-sm font-semibold bg-green-50 dark:bg-green-950/60 text-green-700 dark:text-green-300 rounded-lg">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
          🏆 Featured Projects
        </h2>
        
        <div className="space-y-6">
          {/* Amanuel Hospital */}
          <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3">
              🏥 Dr. Amanuel Hospital Management System
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              A large practical hospital management project developed through multiple phases.
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 mb-3 font-semibold">
              The system includes areas such as:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
              {[
                "📅 Appointment booking",
                "👤 Patient registration",
                "🔢 Medical Record Number (MRN)",
                "🩺 Doctor / clinical workflows",
                "🧪 Laboratory",
                "💊 Pharmacy",
                "💳 Payments",
                "💬 Messaging",
                "🎥 Telemedicine",
                "🔐 Authentication and RBAC",
                "👨‍💼 Staff and admin management"
              ].map((feature) => (
                <span key={feature} className="text-sm text-neutral-600 dark:text-neutral-400">
                  {feature}
                </span>
              ))}
            </div>
            <p className="text-neutral-600 dark:text-neutral-300 italic">
              The project gave me hands-on experience with <strong>full-stack development, databases, authentication, security, debugging, testing, and deployment</strong>.
            </p>
          </div>

          {/* Haramaya Land Management */}
          <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3">
              🏞️ Haramaya Woreda Property Tax & Land Management System
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              A practical system focused on:
            </p>
            <ul className="list-none space-y-2 text-neutral-600 dark:text-neutral-300 ml-4">
              <li>👥 Property owners</li>
              <li>🏞️ Land records</li>
              <li>💰 Property taxation</li>
              <li>💳 Payments</li>
              <li>📊 Reports</li>
              <li>📋 Administrative workflows</li>
            </ul>
            <p className="text-neutral-600 dark:text-neutral-300 mt-4 italic">
              This project helped me understand how software can be designed around real organizational processes and data.
            </p>
          </div>

          {/* Vision Assistant */}
          <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3">
              ♿ Vision Assistant / Accessibility Project
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300">
              An accessibility-focused web project designed around improving digital interaction and assistance for visually impaired users.
            </p>
          </div>

          {/* Cisco Networking */}
          <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3">
              🌐 Cisco Networking Projects
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300">
              Practical networking exercises and topologies using Cisco Packet Tracer, including IP addressing, subnetting, VLANs, routing, connectivity testing, and troubleshooting.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
          🛠️ Technology Stack
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-neutral-100 dark:bg-neutral-900/60">
                <th className="text-left p-4 font-bold text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-800">Category</th>
                <th className="text-left p-4 font-bold text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-800">Technologies</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 font-semibold border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white">Frontend</td>
                <td className="p-4 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300">React, TypeScript, JavaScript, HTML, CSS</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white">Backend</td>
                <td className="p-4 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300">Node.js, Express.js, PHP</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white">Databases</td>
                <td className="p-4 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300">PostgreSQL, Supabase, MySQL, SQL</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white">Programming</td>
                <td className="p-4 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300">Python, Java</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white">Networking</td>
                <td className="p-4 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300">Cisco, Packet Tracer, IPv4, VLAN, Routing, NAT</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white">Tools</td>
                <td className="p-4 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300">VS Code, NetBeans, Git, GitHub, Linux</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white">Deployment</td>
                <td className="p-4 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300">Netlify and other modern hosting platforms</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400 italic">
          I use technologies according to the needs of each project rather than limiting myself to one framework.
        </p>
      </section>

      {/* How I Work */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
          🧠 How I Work
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300 mb-4">
          I enjoy the practical side of software engineering:
        </p>
        <div className="p-6 rounded-xl bg-neutral-100 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
          <pre className="text-sm text-neutral-700 dark:text-neutral-300 font-mono overflow-x-auto">
{`💡 Understand the problem
        ↓
📋 Define requirements
        ↓
🎨 Design the solution
        ↓
💻 Build
        ↓
🗄️ Connect data
        ↓
🧪 Test
        ↓
🐛 Debug
        ↓
🔐 Improve security
        ↓
🚀 Deploy
        ↓
🔄 Improve again`}
          </pre>
        </div>
        <p className="mt-4 text-neutral-600 dark:text-neutral-300">
          I also use <strong>AI-assisted development tools</strong> as part of my workflow, while keeping responsibility for understanding the code, debugging problems, testing results, and making technical decisions.
        </p>
      </section>

      {/* Education */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
          🎓 Education
        </h2>
        <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
            Haramaya University
          </h3>
          <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
            College of Computing and Informatics
          </p>
          <p className="text-lg text-neutral-900 dark:text-white mb-4">
            🎓 <strong>Information Technology</strong>
          </p>
          <p className="text-neutral-600 dark:text-neutral-300 mb-3">
            My studies include areas such as:
          </p>
          <div className="grid grid-cols-2 gap-2">
            {[
              "Computer Networks",
              "Databases",
              "Operating Systems",
              "Data Structures & Algorithms",
              "Electronics",
              "Software Development",
              "Information Technology fundamentals"
            ].map((subject) => (
              <span key={subject} className="text-sm text-neutral-600 dark:text-neutral-400">
                • {subject}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
          🌍 Languages
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { flag: "🇪🇹", name: "Amharic" },
            { flag: "🇬🇧", name: "English" },
            { flag: "🟢", name: "Afan Oromo" },
            { flag: "🇸🇦", name: "Arabic" }
          ].map((lang) => (
            <div key={lang.name} className="p-4 rounded-xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 text-center">
              <div className="text-3xl mb-2">{lang.flag}</div>
              <p className="font-semibold text-neutral-900 dark:text-white">{lang.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Continuous Learning */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
          📚 Continuous Learning
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300 mb-4">
          I continue improving through:
        </p>
        <ul className="list-none space-y-2 ml-4 text-neutral-600 dark:text-neutral-300">
          <li>• Cisco networking studies</li>
          <li>• Practical Packet Tracer exercises</li>
          <li>• Full-stack web projects</li>
          <li>• Database projects</li>
          <li>• Software development practice</li>
          <li>• AI-assisted development workflows</li>
          <li>• Git/GitHub and deployment</li>
        </ul>
        <p className="mt-4 text-neutral-600 dark:text-neutral-300 italic">
          My goal is to turn what I learn into <strong>working systems and practical experience</strong>.
        </p>
      </section>

      {/* Current Focus */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
          🎯 Current Focus
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300 mb-4">
          I am currently focused on growing in:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Full-Stack Web Development",
            "Software Engineering",
            "React & TypeScript",
            "Node.js & Backend Development",
            "Databases",
            "Computer Networking"
          ].map((focus) => (
            <div key={focus} className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800">
              <p className="font-semibold text-indigo-700 dark:text-indigo-300">{focus}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-neutral-600 dark:text-neutral-300">
          I am interested in opportunities where I can <strong>contribute to real products, work with professional teams, solve practical problems, and continue growing as a developer</strong>.
        </p>
      </section>

      {/* Let's Connect */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6 text-center">
          🤝 Let's Connect
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="https://github.com/mesudhassen5450-sketch"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 hover:border-indigo-400 dark:hover:border-indigo-600 transition-all flex items-center gap-3"
          >
            <span className="text-2xl">💻</span>
            <div>
              <p className="font-semibold text-neutral-900 dark:text-white">GitHub</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">mesudhassen5450-sketch</p>
            </div>
          </a>
          
          <a
            href="https://www.linkedin.com/in/mesud-hassen-837466413/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 hover:border-indigo-400 dark:hover:border-indigo-600 transition-all flex items-center gap-3"
          >
            <span className="text-2xl">🔗</span>
            <div>
              <p className="font-semibold text-neutral-900 dark:text-white">LinkedIn</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Mesud Hassen</p>
            </div>
          </a>
          
          <a
            href="https://mesudportfoli3.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 hover:border-indigo-400 dark:hover:border-indigo-600 transition-all flex items-center gap-3"
          >
            <span className="text-2xl">🌐</span>
            <div>
              <p className="font-semibold text-neutral-900 dark:text-white">Portfolio</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">mesudportfoli3.netlify.app</p>
            </div>
          </a>
          
          <a
            href="https://t.me/MHM5450"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 hover:border-indigo-400 dark:hover:border-indigo-600 transition-all flex items-center gap-3"
          >
            <span className="text-2xl">💬</span>
            <div>
              <p className="font-semibold text-neutral-900 dark:text-white">Telegram</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">@MHM5450</p>
            </div>
          </a>
          
          <a
            href="tel:0954501670"
            className="p-4 rounded-xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 hover:border-indigo-400 dark:hover:border-indigo-600 transition-all flex items-center gap-3"
          >
            <span className="text-2xl">📱</span>
            <div>
              <p className="font-semibold text-neutral-900 dark:text-white">Phone</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">0954501670</p>
            </div>
          </a>
        </div>
      </section>

      {/* My Approach */}
      <section className="mb-16">
        <div className="p-8 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/40 dark:to-purple-950/40 border border-indigo-200 dark:border-indigo-800 text-center">
          <p className="text-xl font-bold text-neutral-900 dark:text-white mb-4">
            ⭐ My Approach
          </p>
          <div className="space-y-2 text-neutral-700 dark:text-neutral-300">
            <p><strong>Learn by building.</strong></p>
            <p><strong>Build by solving real problems.</strong></p>
            <p><strong>Test what you build.</strong></p>
            <p><strong>Improve what you learn.</strong></p>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="text-center">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
          Thanks for visiting my portfolio! 👋
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-300">
          💻 <strong>Build</strong> • 🧪 <strong>Test</strong> • 🐛 <strong>Fix</strong> • 🚀 <strong>Deploy</strong> • 📚 <strong>Keep Learning</strong>
        </p>
      </section>
    </div>
  );
}
