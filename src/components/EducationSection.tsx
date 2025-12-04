import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, BookOpen, Award, Trophy } from 'lucide-react';

const educationItems = [
  {
    title: 'BA in Applied Information Technology',
    institution: 'Sri Lanka Institute of Technology Campus (SLTC)',
    status: 'Currently Pursuing',
    icon: GraduationCap,
    color: 'neon-cyan',
  },
  {
    title: 'Management Course',
    institution: 'Sri Lankan Youth Center',
    status: 'Completed',
    icon: BookOpen,
    color: 'neon-magenta',
  },
  {
    title: 'IT Certificate Course',
    institution: 'Open University, Vavuniya',
    status: 'Completed',
    icon: Award,
    color: 'neon-violet',
  },
];

const achievements = [
  {
    title: '3rd Place – PovertyHack 2025 Hackathon',
    icon: Trophy,
  },
  {
    title: 'Organized No-Code Low-Code Hackathon at ICST University Park',
    icon: Award,
  },
];

export const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-magenta/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-neon-magenta text-sm font-medium tracking-widest uppercase mb-4"
            >
              Learning Journey
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-display text-4xl md:text-5xl font-bold"
            >
              Education & <span className="text-glow-magenta">Achievements</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education Timeline */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold flex items-center gap-2 mb-8">
                <GraduationCap className="w-6 h-6 text-neon-cyan" />
                Education
              </h3>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-neon-magenta to-neon-violet" />

                {educationItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.15 }}
                      className="relative pl-16 pb-8 last:pb-0"
                    >
                      {/* Timeline dot */}
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className={`absolute left-3 w-6 h-6 rounded-full glass border-2 border-${item.color} flex items-center justify-center`}
                        style={{
                          boxShadow: `0 0 20px hsl(var(--${item.color}) / 0.5)`,
                        }}
                      >
                        <div className={`w-2 h-2 rounded-full bg-${item.color}`} />
                      </motion.div>

                      {/* Card */}
                      <motion.div
                        whileHover={{ scale: 1.02, y: -2 }}
                        className="glass rounded-2xl p-6 border border-border/50 hover:border-neon-cyan/30 transition-all"
                      >
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-xl bg-${item.color}/10`}>
                            <Icon className={`w-6 h-6 text-${item.color}`} />
                          </div>
                          <div className="flex-1">
                            <span
                              className={`inline-block px-2 py-0.5 text-xs font-medium rounded-full mb-2 ${
                                item.status === 'Currently Pursuing'
                                  ? 'bg-neon-cyan/20 text-neon-cyan'
                                  : 'bg-muted text-muted-foreground'
                              }`}
                            >
                              {item.status}
                            </span>
                            <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                            <p className="text-muted-foreground text-sm">{item.institution}</p>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold flex items-center gap-3 mb-8">
                <Trophy className="w-16 h-6 text-neon-magenta" />
                Events & Achievements
              </h3>

              <div className="space-y-4">
                {achievements.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.15 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="glass rounded-2xl p-6 border border-border/50 hover:border-neon-magenta/30 transition-all group"
                    >
                      <div className="flex items-center gap-4">
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                          className="p-3 rounded-xl bg-neon-magenta/10 group-hover:bg-neon-magenta/20 transition-colors"
                        >
                          <Icon className="w-6 h-6 text-neon-magenta" />
                        </motion.div>
                        <p className="font-medium">{item.title}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Decorative element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 }}
                className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-neon-cyan/10 via-neon-magenta/10 to-neon-violet/10 border border-border/30"
              >
                <p className="text-center text-muted-foreground italic">
                  "Continuous learning is the minimum requirement for success in any field."
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
