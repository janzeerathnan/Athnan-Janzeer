import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

const ProjectCard = ({
  project,
  index,
  isInView,
}: {
  project: (typeof projects)[0];
  index: number;
  isInView: boolean;
}) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`relative flex items-center ${
        isLeft ? "justify-start" : "justify-end"
      } mb-16 md:mb-24`}
    >
      {/* Timeline node */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
        className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-neon z-10"
      >
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-primary/50"
        />
      </motion.div>

      {/* Connector line */}
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: "calc(50% - 2rem)" } : {}}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
        className={`absolute top-1/2 h-px bg-gradient-to-r ${
          isLeft
            ? "left-1/2 ml-4 from-primary/50 to-transparent"
            : "right-1/2 mr-4 from-transparent to-primary/50"
        }`}
      />

      {/* Card */}
      <motion.div
        whileHover={{ y: -8, rotateY: isLeft ? 2 : -2 }}
        transition={{ duration: 0.3 }}
        className={`relative w-full md:w-[calc(50%-3rem)] ${
          isLeft ? "md:mr-auto" : "md:ml-auto"
        }`}
        style={{ perspective: 1000 }}
      >
        {/* Background blob */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className={`absolute -inset-4 bg-gradient-to-br ${project.color} opacity-10 blur-2xl rounded-3xl`}
        />

        <div className="relative glass rounded-3xl overflow-hidden border border-primary/20 hover:border-primary/40 hover:shadow-neon-sm transition-all duration-300 group">
          {/* Image */}
          <div className="relative h-48 md:h-56 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
            
            {/* Overlay on hover */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-primary/10 backdrop-blur-sm flex items-center justify-center gap-4"
            >              
              <Button
                variant="glass"
                size="sm"
                asChild
                className="rounded-full"
              >
                <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex gap-3">              
              <Button
                variant="outline"
                size="sm"
                asChild
                className="flex-1 rounded-xl"
              >
                <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const endRef = useRef(null);
  const isEndInView = useInView(endRef, { once: true });

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      <div className="section-container">
        <motion.div ref={ref}>
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Key <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A journey through some of my most impactful work
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Center line */}
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : {}}
              transition={{ duration: 1.5 }}
              className="absolute left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent"
            />

            {/* Projects */}
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isInView={isInView}
              />
            ))}

            {/* End easter egg */}
            <motion.div
              ref={endRef}
              initial={{ opacity: 0, scale: 0 }}
              animate={isEndInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, type: "spring" }}
              className="relative flex justify-center"
            >
              <div className="glass rounded-full p-4 border border-primary/30 shadow-neon">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-6 h-6 text-primary" />
                </motion.div>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isEndInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-8 text-sm text-muted-foreground"
              >
                More coming soon...
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
