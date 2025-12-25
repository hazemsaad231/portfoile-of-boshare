import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import  Flutter  from '../Data/data';

const Projects = () => {
  const [active, setActive] = useState('react');
  const [expanded, setExpanded] = useState(null); // هنا الستيت الوحيدة اللي بتخزن الـ active card
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

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
      else if (window.innerWidth < 1024) setSlidesPerView(2);
      else setSlidesPerView(4);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // لما أغير التاب أرجع slide و expanded للصفر/null
  useEffect(() => {
    setCurrentSlide(0);
    setExpanded(null);
  }, [active]);

  const maxSlide = Math.max(0, currentProjects.length - slidesPerView);

  // نفس طريقةك بالظبط: لو ضغطت نفس الـ id أقفله، لو ضغطت غيره أفتحه
  const handleExpandClick = (id) => {
    setExpanded(prev => (prev === id ? null : id));
  };

  const handleToggle = (type) => setActive(type);

  const nextSlide = () => setCurrentSlide(prev => Math.min(prev + 1, maxSlide));
  const prevSlide = () => setCurrentSlide(prev => Math.max(prev - 1, 0));

  return (
    <div className="pt-12 pb-10 min-h-screen" id="projects">
      <div className="text-center w-full my-10">
        <h1 className="bg-gradient-to-r from-primary to-white  pb-3 bg-clip-text text-transparent text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold inline-block"
          style={{ WebkitTextFillColor: "transparent" }}>
          Projects <span className='w-4 h-4 bg-primary inline-block rounded-full'></span>
        </h1>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-0 md:gap-5"
                animate={{ x: `-${currentSlide * (100 / slidesPerView)}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {currentProjects.map((item) => {
                  const isExpanded = expanded === item.id; // هنا المقارنة اللي بتخلي كل كارد يفتح لوحده

                  return (
                    <motion.div
                      key={item.id}
                      className="flex-shrink-0"
                      style={{ width: `calc(${100 / slidesPerView}% - ${(slidesPerView - 1) * 24 / slidesPerView}px)` }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div
                        onClick={() => { if (window.innerWidth < 768) handleExpandClick(item.id); }}
                        className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col cursor-pointer"
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => { if ((e.key === 'Enter' || e.key === ' ') && window.innerWidth < 768) handleExpandClick(item.id); }}
                      >
                        <motion.div className="overflow-hidden" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                          {item.img ? (
                            <img src={item.img} alt={item.title} className="w-full h-48 sm:h-64 md:h-[340px] object-center" loading="lazy" />
                          ) : (
                            <div className="w-full h-48 sm:h-64 md:h-[340px] bg-slate-200 flex items-center justify-center text-slate-500">
                              <span>No image</span>
                            </div>
                          )}
                        </motion.div>

                        <div className="p-4 flex flex-col">
                          <motion.h2 className="text-xl text-gray-800 font-bold mb-4" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                            {item.title}
                          </motion.h2>

                          <div className="flex items-center justify-between mt-auto">
                            <div className="flex gap-3">
                              <motion.a href={item.gitHub} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} transition={{ type: 'spring', stiffness: 200 }} className="text-gray-600 hover:text-blue-500">
                              </motion.a>
                              <motion.a href={item.link} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} transition={{ type: 'spring', stiffness: 200 }} className="text-gray-600 hover:text-blue-500">
                                <ExternalLink size={25} />
                              </motion.a>
                            </div>

                            <button
                              onClick={(e) => { e.stopPropagation(); handleExpandClick(item.id); }} // toggle based on id
                              className="text-gray-600 hover:text-blue-500 transition-colors w-10 h-10 rounded-full flex items-center justify-center"
                              aria-expanded={isExpanded}
                              aria-label="show more"
                            >
                              <motion.div animate={{ rotate: (isExpanded || slidesPerView === 1) ? 180 : 0 }} transition={{ duration: 0.3 }}>
                                <ChevronDown size={20} />
                              </motion.div>
                            </button>
                          </div>

                          <AnimatePresence initial={false}>
                            {(isExpanded || slidesPerView === 1) && (
                              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                                <div className="mt-4 pt-4 border-t border-gray-200">
                                  <p className="text-gray-700 text-sm mb-3">{item.description}</p>
                                  {Array.isArray(item.skills) && item.skills.length > 0 && (
                                    <div>
                                      <p className="text-gray-600 text-xs font-semibold mb-2">Technologies:</p>
                                      <div className="flex flex-wrap gap-2">
                                        {item.skills.map((skill, idx) => (
                                          <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
                                            {skill}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {currentProjects.length > slidesPerView && (
              <>
                <button onClick={prevSlide} disabled={currentSlide === 0} className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-800/90 backdrop-blur-sm border border-slate-700 flex items-center justify-center transition-all ${ currentSlide === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-primary hover:border-primary' }`} aria-label="Previous slide">
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>

                <button onClick={nextSlide} disabled={currentSlide === maxSlide} className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-800/90 backdrop-blur-sm border border-slate-700 flex items-center justify-center transition-all ${ currentSlide === maxSlide ? 'opacity-30 cursor-not-allowed' : 'hover:bg-primary hover:border-primary' }`} aria-label="Next slide">
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </>
            )}

            {currentProjects.length > slidesPerView && (
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: maxSlide + 1 }).map((_, idx) => (
                  <button key={idx} onClick={() => setCurrentSlide(idx)} className={`rounded-full p-2 transition-all ${ idx === currentSlide ? 'bg-primary w-8 h-2 sm:w-8 sm:h-2' : 'bg-slate-600 hover:bg-slate-500 w-2 h-2 sm:w-2 sm:h-2' }`} aria-label={`Go to slide ${idx + 1}`} />
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

