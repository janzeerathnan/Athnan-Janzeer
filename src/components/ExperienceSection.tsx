import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Code } from 'lucide-react';

const experienceItems = [
  {
    role: 'Software Engineer',
    company: 'Freelancer',
    duration: '1 Year',
    points: [
      'Developed and deployed full-stack web applications using Laravel framework and MEAN stack (MongoDB, Express.js, Angular/React, Node.js)',
      'Built mobile applications from concept to deployment using Flutter framework integrated with Firebase and Supabase backends',
      'Designed and implemented RESTful APIs, database schemas, and real-time data synchronization features',
      'Collaborated with cross-functional teams to gather requirements, design solutions, and deliver high-quality software products',
      'Implemented responsive UI/UX designs and ensured application performance optimization across web and mobile platforms'
    ],
    icon: Briefcase,
    color: 'neon-cyan'
  },
  {
    role: 'Software Engineer',
    company: 'O2 Solutions',
    duration: 'Contract-Based',
    points: [
      'Delivered custom software solutions for client projects on a Project basis',
      'Developed web and mobile applications using modern technology stacks',
      'Maintained effective communication with clients to ensure project requirements were met'
    ],
    icon: Code,
    color: 'neon-magenta'
  }
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="relative py-24 md:py-32 overflow-hidden">
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
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm font-medium text-neon-cyan tracking-wider"
            >
              Professional Experience
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4 text-3xl font-bold text-white"
            >
              Work History
            </motion.h2>
          </div>

          {/* Experience timeline */}
          <div className="space-y-12">
            {experienceItems.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="flex flex-col md:flex-row items-start"
              >
                {/* Icon and date */}
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center mb-4 md:mb-0 md:w-20 md:h-20">
                  <exp.icon className={`h-6 w-6 text-${exp.color}`} />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-center gap-4">
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4 }}
                      className="text-xl font-semibold text-white"
                    >
                      {exp.role}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="text-sm text-neon-magenta"
                    >
                      {exp.company}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="text-sm text-neon-violet"
                    >
                      {exp.duration}
                    </motion.p>
                  </div>
                  
                  <motion.ul
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="list-disc list-inside space-y-2 text-sm text-gray-300"
                  >
                    {exp.points.map((point, pointIndex) => (
                      <motion.li
                        key={pointIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: 0.1 * pointIndex }}
                      >
                        {point}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};