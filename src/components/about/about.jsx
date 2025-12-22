import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { skills, personal , education } from '../Data/data';





export default  function About() {
  const [activeTab, setActiveTab] = useState('skills');
  
  const tabs = [
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' }
  ];

  return (
    <section className="py-28" id="about">
      <div className=" px-4 sm:px-4 md:px-6 lg:px-8 xl:px-32">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h1 
   className="bg-gradient-to-r from-primary to-white bg-clip-text text-transparent text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold inline-block"
   style={{ WebkitTextFillColor: "transparent" }}>
  About Me <span className='w-4 h-4 bg-primary inline-block rounded-full'></span>
  </h1>
        </motion.div>

        <div className="flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <p>
                I'm <span className="text-primary font-semibold">{personal.name.split(' ')[0]}</span> Junior Mobile Developer proficient in Flutter with a strong grasp of Clean Architecture and BLoC/Cubit for
state management. Experienced in backend integration using RESTful APIs, Firebase, and Parse Server. Proud
creator of 'Mersal', an AI-based sign language translation tool. Eager to join a professional team to build
scalable and high-performance mobile applications.
              </p>
              <p>
              </p>
             
            </div>
          </motion.div>

          {/* Skills & Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8 flex flex-col"
          >
            <div className="flex gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-2 relative w-32 text-xl font-semibold cursor-pointer transition-all duration-300 ease-in-out pb-2 ${
                    activeTab === tab.id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute left-0 bottom-0 h-0.5 w-full bg-primary"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div>
              <AnimatePresence mode="wait">
                {activeTab === 'skills' && (
                  <motion.div
                    key="skills"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-wrap gap-3"
                  >
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-primary text-primary-foreground px-4 py-2 rounded-full hover-elevate cursor-pointer select-none transition-all duration-200"
                      >
                        <span className="font-medium text-sm">{skill}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {activeTab === 'education' && (
                  <motion.div
                    key="education"
                  >
                    {education.map((edu) => (
                      <motion.div
                        key={edu.degree}
                        className="bg-card rounded-lg p-6 border border-card-border"
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-primary/10 p-3 rounded-lg">
                            <GraduationCap className="w-6 h-6 text-primary" />
                          </div>
                          
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg text-card-foreground mb-1">
                              {edu.degree}
                            </h3>
                            
                            <div className="flex items-center gap-2 text-muted-foreground mb-2">
                              <MapPin className="w-4 h-4" />
                              <span className="text-sm">{edu.institution}</span>
                            </div>
                            
                            <div className="flex items-center gap-2 text-muted-foreground mb-3">
                              <Calendar className="w-4 h-4" />
                              <span className="text-sm">{edu.year}</span>
                            </div>
                            
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {edu.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}