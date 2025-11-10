

function App() {

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#0d1117] relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-[#161b22] via-[#0d1117] to-[#010409]"></div>
      <div className="absolute inset-0 opacity-30"></div>

      <div 
        className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm w-full max-w-6xl bg-linear-to-br from-violet-900/40 via-purple-900/30 to-blue-900/40 border-[#374151] relative z-10 backdrop-blur-sm"
        style={{
          boxShadow: "0 25px 50px -12px rgba(6, 182, 212, 0.5), 0 10px 25px -5px rgba(14, 165, 233, 0.4), 0 0 80px rgba(34, 211, 238, 0.3)"
        }}
      >
        <div className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8"> 
            <div className="shrink-0">
              <img src="./perfil.jpeg" alt="profile"  className="w-48 h-48 rounded-full object-cover border-4 border-[#30363d] shadow-lg object-[50%_26%]" />
            </div>
            <div className="flex flex-col max-w-3xl">
              <div className="flex flex-col items-center md:items-start text-center md:text-left mb-4">
                <h1 className="text-4xl md:text-5xl font-bold text-[#c9d1d9]  text-balance">Marcelo Marino</h1>
                <span className=" text-[#c9d1d9] mt-2 font-bold text-xl">Web Developer</span>
              </div>
              <p className="text-lg text-[#8b949e] leading-relaxed mb-2 text-pretty">
                I’m a Full Stack Web Developer with almost four years of experience building scalable REST APIs and dynamic web applications. My main stack includes Node.js, NestJS, React, and TypeScript, with a background in both relational (MySQL, PostgreSQL) and non-relational (MongoDB) databases.
              </p>
              <p className="text-lg text-[#8b949e] leading-relaxed mb-2 text-pretty">
                On the frontend, I build responsive and intuitive user interfaces using React (JavaScript/TypeScript), manage global state with Redux Toolkit or API Context, and apply modern styling with Tailwind CSS and custom CSS.
              </p>
              <p className="text-lg text-[#8b949e] leading-relaxed mb-2 text-pretty">
                Currently, I’m strengthening my skills in software testing with Jest, clean code practices, and cloud infrastructure management, focusing on creating maintainable, efficient, and user-centered solutions.
              </p>
              <div className="space-y-4 mt-2">
                <h2 className="text-xl font-semibold text-[#c9d1d9] mb-4">Contact me</h2>
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  <a 
                    href="https://github.com/mogmarino"
                    target="_blank"
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md px-6 has-[>svg]:px-4 gap-2 bg-[#21262d] border-[#30363d] text-[#c9d1d9] hover:bg-[#30363d] hover:border-[#388bfd] transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    Github
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/mogmarino"
                    target="_blank"
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md px-6 has-[>svg]:px-4 gap-2 bg-[#21262d] border-[#30363d] text-[#c9d1d9] hover:bg-[#30363d] hover:border-[#388bfd] transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    Linkedin
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
