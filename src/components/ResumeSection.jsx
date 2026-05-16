import { Download, FileText, GraduationCap, Award, Wrench, Briefcase } from "lucide-react";
import cvFile from "../assets/Duneth_Widanapathirana_Resume.pdf";

export const ResumeSection = () => {
    return (
        <section id="resume" className="py-24 px-4 relative bg-background">
            <div className="container mx-auto max-w-5xl">
                <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold mb-2">Professional <span className="text-primary">Resume</span></h2>
                        <p className="text-muted-foreground text-lg">A quick overview of my academic and technical background.</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href={cvFile} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:-translate-y-1 shadow-sm">
                            <FileText size={18} /> View Resume
                        </a>
                        <a href={cvFile} download className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-border bg-transparent text-foreground font-semibold hover:bg-secondary/20 transition-all hover:-translate-y-1">
                            <Download size={18} /> Download
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-card p-8 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 rounded-xl bg-primary/10"><GraduationCap className="h-6 w-6 text-primary" /></div>
                            <h3 className="text-2xl font-bold">Education</h3>
                        </div>
                        <div className="relative border-l-2 border-primary/20 pl-6 pb-2">
                            <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5 shadow-[0_0_8px_rgba(var(--color-primary),0.8)]"></div>
                            <h4 className="font-bold text-lg text-foreground">BSc (Hons) in Computer Networking</h4>
                            <p className="text-primary font-semibold mb-2">University of Bedfordshire (SLIIT City Uni)</p>
                            <p className="text-sm text-muted-foreground leading-relaxed">Focus on Routing & Switching, Network Security, and Data Communication. Expected graduation: [Year]</p>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 rounded-xl bg-primary/10"><Award className="h-6 w-6 text-primary" /></div>
                            <h3 className="text-2xl font-bold">Certifications (In Progress)</h3>
                        </div>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                                <div>
                                    <h4 className="font-bold text-foreground">Cisco Certified Network Associate (CCNA)</h4>
                                    <p className="text-sm text-muted-foreground mt-1">Currently preparing for the exam, focusing on network fundamentals and IP connectivity.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                                <div>
                                    <h4 className="font-bold text-foreground">CompTIA Security+</h4>
                                    <p className="text-sm text-muted-foreground mt-1">Studying core cybersecurity principles and risk management.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-card p-8 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 rounded-xl bg-primary/10"><Wrench className="h-6 w-6 text-primary" /></div>
                            <h3 className="text-2xl font-bold">Core Expertise</h3>
                        </div>
                        <div className="space-y-4">
                            {[
                                { name: "Network Design & Routing", tag: "Strong" },
                                { name: "Python & Automation", tag: "Intermediate" },
                                { name: "Network Security & Analysis", tag: "Intermediate" },
                                { name: "Linux Administration", tag: "Intermediate" }
                            ].map((skill, i) => (
                                <div key={i} className="flex justify-between items-center p-3 rounded-xl hover:bg-secondary/10 transition-colors">
                                    <span className="font-semibold text-foreground/90">{skill.name}</span>
                                    <span className="text-xs font-bold px-3 py-1 bg-primary/10 text-primary rounded-md">{skill.tag}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 rounded-xl bg-primary/10"><Briefcase className="h-6 w-6 text-primary" /></div>
                            <h3 className="text-2xl font-bold">Project Highlights</h3>
                        </div>
                        <ul className="space-y-6">
                            <li className="flex flex-col p-4 rounded-xl border border-border/50 bg-background/50">
                                <h4 className="font-bold text-foreground mb-1">Global Museum Network Project</h4>
                                <p className="text-sm text-muted-foreground">Multi-branch enterprise simulation using Cisco Packet Tracer.</p>
                            </li>
                            <li className="flex flex-col p-4 rounded-xl border border-border/50 bg-background/50">
                                <h4 className="font-bold text-foreground mb-1">Small Office Network</h4>
                                <p className="text-sm text-muted-foreground">Segmented network topology with proper IP addressing and VLANs.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};