import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight, Github } from 'lucide-react';
import  Flutter  from '../Data/data';

const Projects = () => {
  const [active, setActive] = useState('react');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(2);

  const getCurrentProjects = () => {
    switch (active) {
      case 'react': return Flutter;
      default: return [];
    }
  };

  const currentProjects = getCurrentProjects();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setSlidesPerView(1);
      else setSlidesPerView(2);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setCurrentSlide(0);
  }, [active]);

  const maxSlide = Math.max(0, Math.ceil(currentProjects.length / slidesPerView) - 1);

  const handleToggle = (type) => setActive(type);

  const nextSlide = () => setCurrentSlide(prev => Math.min(prev + 1, maxSlide));
  const prevSlide = () => setCurrentSlide(prev => Math.max(prev - 1, 0));

  return (
    <div className="pt-12 pb-10 min-h-screen" id="projects">
      <div className="text-center w-full my-10">
        <h1 className="bg-gradient-to-r from-primary to-white pb-3 bg-clip-text text-transparent text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold inline-block"
          style={{ WebkitTextFillColor: "transparent" }}>
          Projects <span className='w-4 h-4 bg-primary inline-block rounded-full'></span>
        </h1>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <div className="overflow-hidden px-4">
              <motion.div
                className="flex gap-6 md:gap-8"
                animate={{ x: `-${currentSlide * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Group projects into pairs */}
                {Array.from({ length: Math.ceil(currentProjects.length / slidesPerView) }).map((_, slideIndex) => (
                  <div 
                    key={slideIndex} 
                    className="flex-shrink-0 w-full flex gap-6 md:gap-8"
                  >
                    {currentProjects.slice(slideIndex * slidesPerView, slideIndex * slidesPerView + slidesPerView).map((item) => (
                      <motion.div
                        key={item.id}
                        className="flex-1 min-w-0"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-primary/50 transition-all duration-500 h-full flex flex-col shadow-xl hover:shadow-2xl hover:shadow-primary/20">
                          {/* Image Container */}
                          <div className="relative overflow-hidden">
                            <motion.div 
                              className="relative"
                              whileHover={{ scale: 1.02 }} 
                              transition={{ duration: 0.4 }}
                            >
                              {item.img ? (
                                <img 
                                  src={item.img} 
                                  alt={item.title} 
                                  className="w-full h-52 sm:h-60 md:h-72 object-contain bg-slate-800" 
                                  loading="lazy" 
                                />
                              ) : (
                                <div className="w-full h-52 sm:h-60 md:h-72 bg-slate-700 flex items-center justify-center text-slate-400">
                                  <span>No image</span>
                                </div>
                              )}
                              {/* Overlay gradient */}
                              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                            </motion.div>
                            
                            {/* Floating action buttons */}
                            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              {item.link && (
                                <motion.a 
                                  href={item.link} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  whileHover={{ scale: 1.1 }} 
                                  className="w-10 h-10 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center text-white shadow-lg"
                                >
                                  <Github size={18} />
                                </motion.a>
                              )}
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-5 flex flex-col flex-1">
                            <h2 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                              {item.title}
                            </h2>
                            
                            <p className="text-gray-400 text-sm md:text-base mb-4 line-clamp-3 flex-1">
                              {item.description}
                            </p>

                            {/* Skills/Technologies */}
                            {Array.isArray(item.skills) && item.skills.length > 0 && (
                              <div className="flex flex-wrap gap-2 mt-auto">
                                {item.skills.slice(0, 4).map((skill, idx) => (
                                  <span 
                                    key={idx} 
                                    className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full text-xs font-medium"
                                  >
                                    {skill}
                                  </span>
                                ))}
                                {item.skills.length > 4 && (
                                  <span className="px-3 py-1 bg-slate-700/50 text-gray-400 rounded-full text-xs font-medium">
                                    +{item.skills.length - 4}
                                  </span>
                                )}
                              </div>
                            )}

                            {/* View Project Link */}
                            <motion.a 
                              href={item.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="mt-4 inline-flex items-center gap-2 text-primary hover:text-white transition-colors duration-300 text-sm font-medium group/link"
                              whileHover={{ x: 5 }}
                            >
                              View Project 
                              <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
                            </motion.a>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Arrows */}
            {currentProjects.length > slidesPerView && (
              <>
                <button 
                  onClick={prevSlide} 
                  disabled={currentSlide === 0} 
                  className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 w-12 h-12 rounded-full bg-slate-800/90 backdrop-blur-sm border border-slate-700 flex items-center justify-center transition-all duration-300 ${ currentSlide === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-primary hover:border-primary hover:scale-110' }`} 
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>

                <button 
                  onClick={nextSlide} 
                  disabled={currentSlide === maxSlide} 
                  className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 w-12 h-12 rounded-full bg-slate-800/90 backdrop-blur-sm border border-slate-700 flex items-center justify-center transition-all duration-300 ${ currentSlide === maxSlide ? 'opacity-30 cursor-not-allowed' : 'hover:bg-primary hover:border-primary hover:scale-110' }`} 
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </>
            )}

            {/* Pagination Dots */}
            {currentProjects.length > slidesPerView && (
              <div className="flex justify-center gap-3 mt-10">
                {Array.from({ length: maxSlide + 1 }).map((_, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setCurrentSlide(idx)} 
                    className={`rounded-full transition-all duration-300 ${ idx === currentSlide ? 'bg-primary w-10 h-3' : 'bg-slate-600 hover:bg-slate-500 w-3 h-3' }`} 
                    aria-label={`Go to slide ${idx + 1}`} 
                  />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;

