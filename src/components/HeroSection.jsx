import { ArrowDown, Download, Eye } from "lucide-react";
import cvFile from "../assets/cv.pdf";

export const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20">
            <div className="container max-w-5xl mx-auto text-center z-10">
                <div className="space-y-8">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight opacity-0 animate-fade-in text-foreground leading-tight">
                        IT Undergraduate focused on <br className="hidden md:block"/>
                        <span className="text-primary">Networking</span>, <span className="text-primary">Cybersecurity</span>, <br className="hidden md:block"/>
                        and <span className="text-primary">Infrastructure Automation</span>.
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-in-delay-1 leading-relaxed">
                        I build secure and scalable network solutions, explore cybersecurity concepts, and create automation tools using Python and networking technologies.
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-3 opacity-0 animate-fade-in-delay-2 pt-2">
                        {["Networking", "Cybersecurity", "Python Automation", "Cisco", "Linux"].map((tag) => (
                            <span key={tag} className="px-4 py-1.5 text-sm font-medium border rounded-full border-primary/30 text-primary bg-primary/5 shadow-[0_0_15px_rgba(var(--color-primary),0.05)]">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="pt-10 flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in-delay-3">
                        <a href="#projects" className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(var(--color-primary),0.4)] hover:-translate-y-1 w-full sm:w-auto">
                            <Eye size={20} /> View Projects
                        </a>
                        <a href={cvFile} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border-2 border-primary text-primary font-semibold transition-all duration-300 hover:bg-primary/10 hover:-translate-y-1 w-full sm:w-auto">
                            <Download size={20} /> Download Resume
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center animate-bounce opacity-0 animate-fade-in-delay-4">
                <span className="text-sm text-muted-foreground mb-2 font-medium">Scroll to explore</span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    );
};