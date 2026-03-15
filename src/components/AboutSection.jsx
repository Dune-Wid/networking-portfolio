import { Network, Shield, GraduationCap } from "lucide-react";

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative mb-70 pt-40">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        A Growing Networking Professional with a Passion for Secure Infrastructure
                    </h3>
                    <p className="text-muted-foreground">
                        I’m a second-year Computer Networking student at SLIIT City University, pursuing my BSc (Hons) from the University of Bedfordshire. I’m passionate about building secure and efficient network infrastructures and learning how technology connects people across the world.
                    </p>

                    <p className="text-muted-foreground">
                        I enjoy working with tools like Cisco Packet Tracer, Wireshark, and GNS3 to design, simulate, and troubleshoot networks. My goal is to gain real-world experience through an internship and grow into a confident, industry-ready network engineer.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">{" "}Get inTouch</a>
                        <a href="src\assets\Duneth_Widanapathirana_Resume.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">{" "}Download CV</a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p=6 card-hover">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Network className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Network Design & Configuration</h4>
                                <p className="text-muted-foreground text-sm pt-1">I create efficient network topologies using VLANs, routing, and switching to ensure reliable communication and performance.</p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p=6 card-hover">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Shield className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Network Security</h4>
                                <p className="text-muted-foreground text-sm pt-1">I apply ACLs, port security, and monitoring tools like Wireshark to protect networks and maintain secure data flow..</p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p=6 card-hover">
                        <div className="flex items-center gap-4 ">
                            <div className="p-3 rounded-full bg-primary/10">
                                <GraduationCap className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Continuous Learning</h4>
                                <p className="text-muted-foreground text-sm pt-1">I constantly explore new tools and technologies to stay updated and improve my network engineering skills.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </section>;
};