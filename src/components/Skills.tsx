import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/data/projects";
import { Code, Database, Wrench, Palette } from "lucide-react";

const categories = [
  { key: "frontend", label: "Frontend", icon: Code },
  { key: "backend", label: "Backend", icon: Database },
  { key: "tools", label: "Tools", icon: Wrench },
  { key: "design", label: "Design", icon: Palette },
];

const SkillTag = ({
  name,
  level,
  index,
  isInView,
}: {
  name: string;
  level: number;
  index: number;
  isInView: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="group relative"
    >
      <div className="px-4 py-3 rounded-xl glass border border-border/50 hover:border-primary/50 transition-all duration-300 cursor-default">
        <div className="flex items-center justify-between gap-4">
          <span className="text-foreground font-medium">{name}</span>
          <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
            {level}%
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] border border-border/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] border border-border/10 rounded-full"
        />
      </div>

      <div className="section-container relative z-10">
        <motion.div ref={ref}>
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I've mastered over the years
            </p>
          </motion.div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, catIndex) => {
              const Icon = category.icon;
              const categorySkills = skills[category.key as keyof typeof skills];

              return (
                <motion.div
                  key={category.key}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: catIndex * 0.15 }}
                  className="glass rounded-3xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300"
                >
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-2xl bg-muted/50">
                      <Icon className="w-5 h-5 text-foreground" />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-foreground">
                      {category.label}
                    </h3>
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-3">
                    {categorySkills.map((skill, index) => (
                      <SkillTag
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        index={index}
                        isInView={isInView}
                      />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
