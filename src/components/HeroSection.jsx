import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
      <section
          id="hero"
          className="relative min-h-screen flex flex-col items-center justify-center px-4"
      >
      <div
          id="hero"
          className="relative min-h-screen flex items-center justify-center px-4"
      >
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-[url('/burst-paint-bg.png')] bg-cover bg-center opacity-20 mix-blend-lighten"></div>
        </div>
        <div className="absolute inset-0 z-0 bg-stars bg-repeat"></div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center z-10">
          {/* Left: Text Content */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              <span className="block opacity-0 animate-fade-in">Hi, I'm</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1"> Srun</span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Veng</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl opacity-0 animate-fade-in-delay-3">
            I am back-end developer with a passion for creating efficient and scalable web applications. I specialize in Spring boot, and I love building APIs that power modern web experiences.
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex flex-col sm:flex-row items-center gap-4">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
              <a
                  href="public/resume/Veng Srun.pdf"
                  download
                  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>

          </div>

          {/* Right: Image */}
          <div className="flex justify-center md:justify-end">
            <img
                src="/my-profile.jpg"
                alt="Srun Veng"
                className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover shadow-xl border-4 border-primary animate-fade-in-delay-2"
            />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
          <span className="text-sm text-muted-foreground mb-2">Scroll</span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </div>
      </div>
      </section>
  );
};
