import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Briefcase, Award, MapPin } from "lucide-react";

const stats = [
  { label: "Years Experience", value: 1, icon: Calendar },
  { label: "Projects Delivered", value: 4, icon: Briefcase },
  { label: "Awards Won", value: 1, icon: Award },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating impactful digital solutions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Avatar / Image side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative"
            >
              <div className="relative mx-auto w-72 h-72 md:w-96 md:h-96">
                {/* Animated border */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-3xl border-2 border-dashed border-neon-cyan/30"
                />
                
                {/* Main container */}
                <div className="absolute inset-4 rounded-2xl glass border border-neon-cyan/20 overflow-hidden">
                  {/* Placeholder avatar */}
                  <div className="w-full h-full bg-gradient-to-br from-neon-cyan/20 to-neon-magenta/20 flex items-center justify-center">
                    <span className="font-display text-8xl font-bold bg-gradient-neon bg-clip-text text-transparent">
                      <img src="../../public/assets/Athnan.jpeg" alt="" />
                    </span>
                  </div>
                </div>

                {/* Floating badges */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 glass px-4 py-2 rounded-xl border border-neon-cyan/30"
                >
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-neon-cyan" />
                    <span>Sri Lanka</span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-xl border border-neon-magenta/30"
                >
                  <div className="flex items-center gap-2 text-sm">
                    <Award className="w-4 h-4 text-neon-magenta" />
                    <span>Award Winner</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>


            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Based in Singapore</span>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  I am a dedicated Software Engineer with experience in developing full-stack web applications, 
                  solving real-world problems, and building clean, scalable systems. 
                  I enjoy turning ideas into functional products using modern tools, frameworks, and best practices. 
                  My passion for technology drives me to continuously learn, experiment, and improve my craft.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Beyond coding, I focus on writing maintainable code, understanding user needs, and delivering reliable solutions. 
                  I enjoy working in collaborative environments, taking ownership of tasks, and contributing to meaningful projects. 
                  My goal is to create software that is efficient, intuitive, and impactful.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                        className="glass rounded-2xl p-4 text-center"
                      >
                        <Icon className="w-5 h-5 text-primary mx-auto mb-2" />
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : {}}
                          transition={{
                            type: "spring",
                            delay: 0.8 + index * 0.1,
                          }}
                          className="text-2xl md:text-3xl font-display font-bold text-foreground"
                        >
                          {stat.value}+
                        </motion.div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {stat.label}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Core competencies */}
              <div className="pt-8">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-neon-cyan" />
                  Core Competencies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Team Coordination',
                    'Client Communication',
                    'Critical Thinking',
                    'Task Prioritization',
                    'Time Management',
                    'Adaptability',
                    'Leadership',
                  ].map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 text-sm glass rounded-lg border border-neon-cyan/20 hover:border-neon-cyan/50 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
