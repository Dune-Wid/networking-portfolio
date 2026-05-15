export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative bg-secondary/5">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        About <span className="text-primary">Me</span>
                    </h2>
                </div>

                <div className="bg-card p-8 md:p-12 rounded-3xl shadow-sm border border-border">
                    <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                        I am an IT undergraduate passionate about networking, cybersecurity, and infrastructure automation. My interests include network design, system security, Linux environments, and automating repetitive tasks using Python.
                    </p>
                    <p className="text-lg text-foreground/90 leading-relaxed mb-12">
                        I enjoy building hands-on projects that combine networking concepts with security practices and automation workflows. Currently, I am expanding my knowledge in Cisco networking, Linux systems, and cybersecurity fundamentals while developing real-world projects.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-border/50">
                        <div className="text-center">
                            <h4 className="text-3xl font-bold text-primary mb-2">Year 2</h4>
                            <p className="text-sm text-muted-foreground font-medium">IT Undergraduate</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-3xl font-bold text-primary mb-2">Active</h4>
                            <p className="text-sm text-muted-foreground font-medium">Networking & Security Enthusiast</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-3xl font-bold text-primary mb-2">Focused</h4>
                            <p className="text-sm text-muted-foreground font-medium">Python Automation Learner</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-3xl font-bold text-primary mb-2">Hands-on</h4>
                            <p className="text-sm text-muted-foreground font-medium">Cisco Packet Tracer Labs</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};