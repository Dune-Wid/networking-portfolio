import { Github, ArrowRight } from "lucide-react";

export const GithubSection = () => {
    return (
        <section className="py-20 px-4 relative border-y border-border bg-card">
            <div className="container mx-auto max-w-4xl text-center">
                <div className="inline-flex p-5 rounded-full bg-primary/10 mb-6">
                    <Github className="h-10 w-10 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore My Repositories</h2>
                <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                    My GitHub contains networking labs, cybersecurity experiments, and automation projects with documentation and source code.
                </p>
                <a 
                    href="https://github.com/Dune-Wid" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-foreground text-background font-bold transition-all hover:bg-foreground/90 hover:scale-105 active:scale-95"
                >
                    View GitHub Profile <ArrowRight size={18} />
                </a>
            </div>
        </section>
    );
};