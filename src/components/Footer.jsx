import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="py-12 px-4 bg-background border-t border-border mt-auto">
            <div className="container mx-auto max-w-5xl flex flex-col md:flex-row justify-between items-center gap-6">
                
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold mb-2">Duneth Widanapathirana</h3>
                    <p className="text-sm text-muted-foreground font-medium">Building secure and automated infrastructure solutions.</p>
                </div>

                <div className="flex gap-4">
                    <a href="https://github.com/Dune-Wid" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all shadow-sm">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/duneth-widanapathirana-634a27299/" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all shadow-sm">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:duneth.wid@gmail.com" className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all shadow-sm">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
            
            <div className="container mx-auto max-w-5xl mt-10 pt-8 border-t border-border/50 text-center text-sm font-medium text-muted-foreground">
                &copy; {new Date().getFullYear()} Duneth Widanapathirana. All rights reserved.
            </div>
        </footer>
    );
};