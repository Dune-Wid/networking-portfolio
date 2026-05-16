import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.target;
        const data = new FormData(form);

        try {
            // Replace with your actual Formspree endpoint URL
            const response = await fetch("https://formspree.io/f/mlgzqbzk", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                toast({ title: "Message Sent!", description: "Thank you for reaching out. I'll get back to you soon." });
                form.reset();
            } else {
                toast({ variant: "destructive", title: "Error", description: "Oops! There was a problem submitting your form." });
            }
        } catch (error) {
            toast({ variant: "destructive", title: "Error", description: "Oops! There was a problem submitting your form." });
        }
        setIsSubmitting(false);
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/5">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In <span className="text-primary">Touch</span></h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        I’m currently looking for internship opportunities in networking, cybersecurity, and automation. Feel free to reach out.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                    <div className="lg:col-span-2 space-y-6">
                        <a href="mailto:duneth.wid@gmail.com" className="flex items-center gap-5 p-6 rounded-3xl bg-card border border-border shadow-sm hover:shadow-md transition-all group hover:-translate-y-1">
                            <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-primary">
                                <Mail className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground font-medium mb-1">Email</p>
                                <p className="font-bold text-foreground">duneth.wid@gmail.com</p>
                            </div>
                        </a>
                        
                        <a href="https://www.linkedin.com/in/duneth-widanapathirana-634a27299/" target="_blank" rel="noreferrer" className="flex items-center gap-5 p-6 rounded-3xl bg-card border border-border shadow-sm hover:shadow-md transition-all group hover:-translate-y-1">
                            <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-primary">
                                <Linkedin className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground font-medium mb-1">LinkedIn</p>
                                <p className="font-bold text-foreground">Let's Connect</p>
                            </div>
                        </a>
                        
                        <a href="https://github.com/Dune-Wid" target="_blank" rel="noreferrer" className="flex items-center gap-5 p-6 rounded-3xl bg-card border border-border shadow-sm hover:shadow-md transition-all group hover:-translate-y-1">
                            <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-primary">
                                <Github className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground font-medium mb-1">GitHub</p>
                                <p className="font-bold text-foreground">View Repositories</p>
                            </div>
                        </a>
                    </div>

                    <div className="lg:col-span-3 bg-card p-8 md:p-10 rounded-3xl border border-border shadow-sm">
                        <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold mb-2 text-foreground/80">Full Name</label>
                                    <input type="text" id="name" name="name" required
                                        className="w-full px-5 py-3.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                                        placeholder="Enter your name"/>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground/80">Email Address</label>
                                    <input type="email" id="email" name="email" required
                                        className="w-full px-5 py-3.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                                        placeholder="Enter your email"/>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-foreground/80">Message</label>
                                <textarea id="message" name="message" required rows="5"
                                    className="w-full px-5 py-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none transition-shadow"
                                    placeholder="Enter your message here..."/>
                            </div>
                            <button type="submit" disabled={isSubmitting}
                                className={cn("w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold flex items-center justify-center gap-2 transition-all shadow-md", 
                                isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5")}>
                                {isSubmitting ? "Sending..." : "Send Message"} {!isSubmitting && <Send size={18}/>}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};