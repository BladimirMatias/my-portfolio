import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white font-georgian">

      {/* Header */}
      <header className="container mx-auto py-6 px-4">
        <nav className="flex justify-between items-center">
          <div className="text-xl font-bold font-sans">
            <span className="text-emerald-400">&lt;</span>
            <span>Bladimir Matias</span>
            <span className="text-emerald-400">/&gt;</span>
          </div>
          <div className="flex gap-6">
            <Link href="#about" className="hover:text-emerald-400 transition-colors">
              About
            </Link>
            <Link href="#skills" className="hover:text-emerald-400 transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-emerald-400 transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="hover:text-emerald-400 transition-colors">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-20 px-4 flex flex-col items-center justify-center min-h-[80vh]">
        <div className="relative">
          <div className="absolute -inset-1 bg-purple-500/20 rounded-lg blur"></div>
          <div className="relative bg-black border border-white/10 rounded-lg p-8 shadow-xl">
            <h1 className="text-5xl md:text-7xl font-bold font-sans mb-4">
              <span className="text-purple-500/90">Hello, I'm</span>
              <br />
              Bladmir Matias
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 text-gray-300">
              <span className="font-georgian">Software Developer</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mb-8">
              <span className="text-emerald-400">const</span> passion ={" "}
              <span className="text-yellow-400">"Creating elegant solutions to complex problems"</span>;
            </p>
            <div className="flex gap-4">
              <Button className="bg-emerald-600 hover:bg-emerald-700">Download CV</Button>
              <Button variant="outline" className="border-emerald-600 text-emerald-400 hover:bg-emerald-950">
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <div className="h-px bg-white/20 flex-grow"></div>
            <h2 className="text-3xl font-bold font-sans">
              <span className="text-emerald-400">&lt;</span>
              About Me
              <span className="text-emerald-400">/&gt;</span>
            </h2>
            <div className="h-px bg-white/20 flex-grow"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="relative">
              <div className="absolute -inset-1 bg-purple-500/20 rounded-lg blur"></div>
              <div className="relative h-full bg-black border border-white/10 rounded-lg p-6 shadow-xl">
                <div className="aspect-square rounded-lg bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                  <img src="/placeholder.svg?height=400&width=400" alt="John Doe" className="rounded-lg" />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold font-sans mb-4">Biography</h3>
              <p className="text-gray-300 mb-4">
                I'm a passionate software developer with over 5 years of experience building web applications and
                digital solutions. I specialize in front-end development with a strong foundation in back-end
                technologies.
              </p>
              <p className="text-gray-300 mb-6">
                My journey in programming began when I was 15, and I've been in love with coding ever since. I enjoy
                solving complex problems and creating intuitive, efficient user experiences.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400">Name:</p>
                  <p className="font-sans font-bold">Bladimir Matias</p>
                </div>
                <div>
                  <p className="text-gray-400">Email:</p>
                  <p className="font-sans font-bold">mp326246@gmail.com</p>
                </div>
                <div>
                  <p className="text-gray-400">From:</p>
                  <p className="font-sans font-bold">Neuquen, Argentina</p>
                </div>
                <div>
                  <p className="text-gray-400">Experience:</p>
                  <p className="font-sans font-bold">2 Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <div className="h-px bg-white/20 flex-grow"></div>
            <h2 className="text-3xl font-bold font-sans">
              <span className="text-emerald-400">&lt;</span>
              Skills
              <span className="text-emerald-400">/&gt;</span>
            </h2>
            <div className="h-px bg-white/20 flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="relative">
              <div className="absolute -inset-1 bg-purple-500/20 rounded-lg blur"></div>
              <div className="relative bg-black border border-white/10 rounded-lg p-6 shadow-xl">
                <h3 className="text-xl font-bold font-sans mb-6">Programming Languages</h3>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-sans font-bold">JavaScript</span>
                      <span className="text-emerald-400">90%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-emerald-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-sans font-bold">TypeScript</span>
                      <span className="text-emerald-400">85%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-emerald-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-sans font-bold">Python</span>
                      <span className="text-emerald-400">75%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-emerald-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-sans font-bold">PHP</span>
                      <span className="text-emerald-400">70%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-emerald-500 h-2 rounded-full" style={{ width: "70%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-purple-500/20 rounded-lg blur"></div>
              <div className="relative bg-black border border-white/10 rounded-lg p-6 shadow-xl">
                <h3 className="text-xl font-bold font-sans mb-6">Frameworks & Tools</h3>

                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center p-4 bg-gray-900 rounded-lg">
                    <div className="w-12 h-12 flex items-center justify-center mb-2">
                      <img src="/placeholder.svg?height=48&width=48" alt="React" />
                    </div>
                    <span className="font-sans font-medium">React</span>
                  </div>

                  <div className="flex flex-col items-center p-4 bg-gray-900 rounded-lg">
                    <div className="w-12 h-12 flex items-center justify-center mb-2">
                      <img src="/placeholder.svg?height=48&width=48" alt="Next.js" />
                    </div>
                    <span className="font-sans font-medium">Next.js</span>
                  </div>

                  <div className="flex flex-col items-center p-4 bg-gray-900 rounded-lg">
                    <div className="w-12 h-12 flex items-center justify-center mb-2">
                      <img src="/placeholder.svg?height=48&width=48" alt="Node.js" />
                    </div>
                    <span className="font-sans font-medium">Node.js</span>
                  </div>

                  <div className="flex flex-col items-center p-4 bg-gray-900 rounded-lg">
                    <div className="w-12 h-12 flex items-center justify-center mb-2">
                      <img src="/placeholder.svg?height=48&width=48" alt="Tailwind" />
                    </div>
                    <span className="font-sans font-medium">Tailwind</span>
                  </div>

                  <div className="flex flex-col items-center p-4 bg-gray-900 rounded-lg">
                    <div className="w-12 h-12 flex items-center justify-center mb-2">
                      <img src="/placeholder.svg?height=48&width=48" alt="Git" />
                    </div>
                    <span className="font-sans font-medium">Git</span>
                  </div>

                  <div className="flex flex-col items-center p-4 bg-gray-900 rounded-lg">
                    <div className="w-12 h-12 flex items-center justify-center mb-2">
                      <img src="/placeholder.svg?height=48&width=48" alt="Docker" />
                    </div>
                    <span className="font-sans font-medium">Docker</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <div className="h-px bg-white/20 flex-grow"></div>
            <h2 className="text-3xl font-bold font-sans">
              <span className="text-emerald-400">&lt;</span>
              Projects
              <span className="text-emerald-400">/&gt;</span>
            </h2>
            <div className="h-px bg-white/20 flex-grow"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-black border border-white/10 rounded-lg overflow-hidden">
                <div className="aspect-video bg-gray-900">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="E-commerce Platform"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-sans mb-2">E-commerce Platform</h3>
                  <p className="text-gray-400 mb-4">
                    A full-stack e-commerce solution with payment integration and inventory management.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-gray-800 rounded-full text-xs">React</span>
                    <span className="px-2 py-1 bg-gray-800 rounded-full text-xs">Node.js</span>
                    <span className="px-2 py-1 bg-gray-800 rounded-full text-xs">MongoDB</span>
                    <span className="px-2 py-1 bg-gray-800 rounded-full text-xs">Stripe</span>
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1">
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                    <a href="#" className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1">
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-black border border-white/10 rounded-lg overflow-hidden">
                <div className="aspect-video bg-gray-900">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="Task Management App"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-sans mb-2">Task Management App</h3>
                  <p className="text-gray-400 mb-4">
                    A collaborative task management application with real-time updates.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-gray-800 rounded-full text-xs">Next.js</span>
                    <span className="px-2 py-1 bg-gray-800 rounded-full text-xs">TypeScript</span>
                    <span className="px-2 py-1 bg-gray-800 rounded-full text-xs">Firebase</span>
                    <span className="px-2 py-1 bg-gray-800 rounded-full text-xs">Tailwind</span>
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1">
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                    <a href="#" className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1">
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-black border border-white/10 rounded-lg overflow-hidden">
                <div className="aspect-video bg-gray-900">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="AI Content Generator"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-sans mb-2">AI Content Generator</h3>
                  <p className="text-gray-400 mb-4">
                    An AI-powered application that generates content based on user prompts.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-gray-800 rounded-full text-xs">React</span>
                    <span className="px-2 py-1 bg-gray-800 rounded-full text-xs">Python</span>
                    <span className="px-2 py-1 bg-gray-800 rounded-full text-xs">OpenAI</span>
                    <span className="px-2 py-1 bg-gray-800 rounded-full text-xs">FastAPI</span>
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1">
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                    <a href="#" className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1">
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-black border border-white/10 rounded-lg overflow-hidden">
                <div className="aspect-video bg-gray-900">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="Fitness Tracker"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-sans mb-2">Fitness Tracker</h3>
                  <p className="text-gray-400 mb-4">A mobile-first application for tracking workouts and nutrition.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-gray-800 rounded-full text-xs">React Native</span>
                    <span className="px-2 py-1 bg-gray-800 rounded-full text-xs">Redux</span>
                    <span className="px-2 py-1 bg-gray-800 rounded-full text-xs">Express</span>
                    <span className="px-2 py-1 bg-gray-800 rounded-full text-xs">PostgreSQL</span>
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1">
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                    <a href="#" className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1">
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Button variant="outline" className="border-emerald-600 text-emerald-400 hover:bg-emerald-950">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <div className="h-px bg-white/20 flex-grow"></div>
            <h2 className="text-3xl font-bold font-sans">
              <span className="text-emerald-400">&lt;</span>
              Contact
              <span className="text-emerald-400">/&gt;</span>
            </h2>
            <div className="h-px bg-white/20 flex-grow"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="relative">
              <div className="absolute -inset-1 bg-purple-500/20 rounded-lg blur"></div>
              <div className="relative bg-black border border-white/10 rounded-lg p-6 shadow-xl">
                <h3 className="text-xl font-bold font-sans mb-6">Get In Touch</h3>
                <p className="text-gray-300 mb-6">
                  I'm currently available for freelance work. If you have a project that you want to get started or
                  think you need my help with something, then get in touch.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="text-emerald-400" size={20} />
                    <span>john@example.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="text-emerald-400" size={20} />
                    <span>github.com/johndoe</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="text-emerald-400" size={20} />
                    <span>linkedin.com/in/johndoe</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-purple-500/20 rounded-lg blur"></div>
              <div className="relative bg-black border border-white/10 rounded-lg p-6 shadow-xl">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Your message..."
                    ></textarea>
                  </div>

                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto py-8 px-4 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl font-bold font-sans mb-4 md:mb-0">
            <span className="text-emerald-400">&lt;</span>
            <span>JohnDoe</span>
            <span className="text-emerald-400">/&gt;</span>
          </div>

          <div className="text-gray-400 text-sm">© {new Date().getFullYear()} John Doe. All rights reserved.</div>

          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
