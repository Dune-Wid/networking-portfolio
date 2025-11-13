import { useState } from "react";
import { Network, Server, Terminal, Shield } from "lucide-react";

// ---- data (you can tweak levels/categories) ----
const skills = [
  // Networking
  { name: "IP Addressing & Subnetting", level: "Intermediate", category: "networking" },
  { name: "VLANs & Trunking (802.1Q)", level: "Intermediate", category: "networking" },
  { name: "Routing Protocols (EIGRP, OSPF, BGP)", level: "Intermediate", category: "networking" },
  { name: "Access Control Lists (ACLs)", level: "Intermediate", category: "networking" },
  { name: "DHCP & DNS Configuration", level: "Intermediate", category: "networking" },
  { name: "NAT & PAT", level: "Beginner", category: "networking" },
  { name: "Network Security Basics", level: "Intermediate", category: "networking" },

  // Tools
  { name: "Cisco Packet Tracer", level: "Advanced", category: "tools" },
  { name: "GNS3 / EVE-NG", level: "Intermediate", category: "tools" },
  { name: "Wireshark", level: "Intermediate", category: "tools" },
  { name: "pfSense", level: "Beginner", category: "tools" },
  { name: "Linux (Ubuntu)", level: "Intermediate", category: "tools" },

  // Automation
  { name: "Python (Basics)", level: "Beginner", category: "automation" },
  { name: "Network Automation (Netmiko / Paramiko)", level: "Beginner", category: "automation" },
  { name: "Git & GitHub", level: "Intermediate", category: "automation" },
];

const categories = ["all", "networking", "tools", "automation"];

// Robust icon map (always falls back to Shield)
const IconMap = {
  networking: Network,
  tools: Server,
  automation: Terminal,
  default: Shield,
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (s) => activeCategory === "all" || s.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/3">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full capitalize transition-colors duration-300
                ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/70 text-foreground hover:bg-secondary"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => {
            const Icon = IconMap[skill.category] || IconMap.default;

            return (
              <div
                key={skill.name}
                className="bg-card p-6 rounded-3xl shadow-xs card-hover border border-border transition hover:shadow-md"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-md bg-primary/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground capitalize">
                    {skill.category}
                  </span>
                  <span
                    className={`text-xs px-3 py-1 rounded-full border ${
                      skill.level === "Advanced"
                        ? "bg-primary/10 text-primary border-primary/30"
                        : skill.level === "Intermediate"
                        ? " text-foreground/80 border-secondary/50 bg-secondary/10"
                        : "bg-transparent text-foreground/70 border-border"
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
