import { Server, Monitor, Key, ShieldAlert, Activity } from "lucide-react";

const labItems = [
    { title: "Cisco Packet Tracer Labs", icon: Activity },
    { title: "Ubuntu Virtual Machines", icon: Server },
    { title: "VLAN Simulations", icon: Monitor },
    { title: "SSH Remote Management", icon: Key },
    { title: "Wireshark Traffic Analysis", icon: ShieldAlert }
];

export const HomeLabSection = () => {
    return (
        <section id="homelab" className="py-24 px-6 relative">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-2">Home Lab <span className="text-primary">Environment</span></h2>
                    <div className="h-1 w-12 bg-primary rounded-full mx-auto mb-6"></div>
                    <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
                        I actively experiment with networking and cybersecurity concepts through virtual lab environments using Cisco Packet Tracer, Linux virtual machines, and network monitoring tools.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    {labItems.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div key={idx} className="flex items-center gap-3 px-5 py-4 bg-card border border-border/60 rounded-xl shadow-sm hover:border-primary/50 transition-all">
                                <Icon className="h-5 w-5 text-primary" />
                                <span className="font-semibold text-sm">{item.title}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};