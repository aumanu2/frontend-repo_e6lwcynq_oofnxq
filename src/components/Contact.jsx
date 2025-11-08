import { Mail, Phone, Instagram, Linkedin, Github } from 'lucide-react'

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-2xl bg-white p-8 shadow-xl shadow-purple-100 ring-1 ring-purple-100">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-3xl font-bold text-gray-900">Let’s connect</h3>
            <p className="mt-2 text-gray-600">I’m open to collaborations, freelance projects, and interesting conversations.</p>

            <div className="mt-6 space-y-3">
              <a href="mailto:you@example.com" className="group flex items-center gap-3 rounded-xl border border-transparent px-3 py-2 transition hover:border-purple-200">
                <Mail className="h-5 w-5 text-[#6A0DAD]" />
                <span className="font-medium text-gray-800 group-hover:text-[#6A0DAD]">you@example.com</span>
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-xl border border-transparent px-3 py-2 transition hover:border-purple-200">
                <Phone className="h-5 w-5 text-[#6A0DAD]" />
                <span className="font-medium text-gray-800 group-hover:text-[#6A0DAD]">WhatsApp</span>
              </a>
              <div className="mt-4 flex items-center gap-4">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="rounded-full bg-[#6A0DAD]/10 p-2 text-[#6A0DAD] hover:bg-[#6A0DAD]/20">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="rounded-full bg-[#6A0DAD]/10 p-2 text-[#6A0DAD] hover:bg-[#6A0DAD]/20">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-full bg-[#6A0DAD]/10 p-2 text-[#6A0DAD] hover:bg-[#6A0DAD]/20">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-[#6A0DAD]/10 to-[#9B59B6]/20 p-6">
            <h4 className="text-lg font-semibold text-gray-900">About</h4>
            <p className="mt-2 text-gray-700">
              I’m a multidisciplinary creator focused on building delightful, performant products. I care about
              accessibility, craft, and the details that make experiences memorable.
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-gray-700">
              <li className="rounded-lg bg-white/70 px-3 py-2 shadow-sm">• React</li>
              <li className="rounded-lg bg-white/70 px-3 py-2 shadow-sm">• FastAPI</li>
              <li className="rounded-lg bg-white/70 px-3 py-2 shadow-sm">• Tailwind</li>
              <li className="rounded-lg bg-white/70 px-3 py-2 shadow-sm">• Framer Motion</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-purple-100 pt-6 text-sm text-gray-600">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
            <p className="text-gray-500">Built with care. Purple-powered.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
