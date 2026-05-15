import { Target } from "lucide-react";

const goals = [
    "Strengthening CCNA networking fundamentals",
    "Learning Python for infrastructure automation",
    "Building networking and cybersecurity lab projects",
    "Improving Linux administration skills",
    "Preparing for internship opportunities in networking and cybersecurity"
];

export const CurrentGoalsSection = () => {
    return (
        <section className="py-24 px-6 relative bg-secondary/5 border-y border-border/50">
            <div className="container mx-auto max-w-4xl">
                <div className="flex items-center gap-4 mb-10">
                    <div className="p-3 bg-primary/10 rounded-xl">
                        <Target className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight">Current Goals</h2>
                </div>

                <div className="bg-card border border-border/60 rounded-2xl p-8 shadow-sm">
                    <ul className="space-y-6">
                        {goals.map((goal, idx) => (
                            <li key={idx} className="flex items-start gap-4">
                                <div className="mt-1.5 relative flex items-center justify-center">
                                    <div className="h-2 w-2 rounded-full bg-primary ring-4 ring-primary/20"></div>
                                    {idx !== goals.length - 1 && (
                                        <div className="absolute top-4 w-px h-10 bg-border"></div>
                                    )}
                                </div>
                                <span className="text-foreground/90 font-medium text-lg leading-snug">{goal}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};