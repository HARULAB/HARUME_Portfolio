import React, { useRef, useState } from "react";
import { withBase } from "@/utils/paths";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";
import { Providers } from "@/components/Providers";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";

import worksData from "@/data/works_data.json";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import WorkCard from "@/components/WorkCard";
import {
  processWorksData,
  groupWorksByYear,
  CATEGORIES,
} from "@/utils/worksDataProcessor";

const WorksPage = ({ isTeaser = false }) => {
  const [selectedWork, setSelectedWork] = useState(null);
  const [activeCategory, setActiveCategory] = useState("ALL"); // Changed from activeFilter
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Process data using utility
  const works = processWorksData(worksData);
  const categories = CATEGORIES;

  const filteredWorks = works.filter((work) => {
    if (activeCategory === "ALL") return true;
    return work.category === activeCategory;
  });

  const groupedWorks = groupWorksByYear(filteredWorks);
  const sortedYears = Object.keys(groupedWorks).sort((a, b) => b - a);

  return (
    <Providers>
      <div
        className={`flex flex-col bg-[var(--bg-primary)] ${!isTeaser ? "min-h-screen" : ""}`}
      >
        {!isTeaser && <Header hidden={!!selectedWork} />}

        <main className="flex-1 w-full">
          <Container
            className={
              isTeaser ? "py-20" : "pb-32 md:pb-20 pt-12 md:pt-40 lg:pt-48"
            }
          >
            {/* Page Title & Showreel Section (removed) */}
            <div className="mb-6">
              <div className="flex flex-col gap-8 items-start text-left">
                {/* teaser title removed per request */}
              </div>
            </div>

            {!isTeaser && (
              <div className="flex flex-row justify-between items-center w-full mb-12 gap-4">
                <div className="relative">
                  <Button
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    aria-label="Filter"
                    className="!border-0 hover:!border-2"
                    icon={
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${isFilterOpen ? "rotate-180" : ""}`}
                      />
                    }
                  >
                    {activeCategory === "All" ? "FILTER" : activeCategory}
                  </Button>

                  <AnimatePresence>
                    {isFilterOpen && (
                      <>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          onClick={() => setIsFilterOpen(false)}
                          className="fixed inset-0 bg-white/60 backdrop-blur-md z-[80]"
                        />
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95, y: 10, x: -20 }}
                          animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: 10, x: -20 }}
                          className="absolute top-full left-0 mt-4 w-72 bg-white rounded-3xl border border-[var(--border-color)] shadow-2xl z-[90] overflow-hidden p-2 origin-top-left"
                        >
                          <div className="flex flex-col">
                            {categories.map((category) => (
                              <button
                                key={category}
                                onClick={() => {
                                  setActiveCategory(category);
                                  setIsFilterOpen(false);
                                }}
                                className={`flex items-center justify-between px-6 py-4 text-[11px] font-black tracking-[0.2em] transition-all duration-300 uppercase rounded-2xl ${
                                  activeCategory === category
                                    ? "bg-[var(--corporate-color)] text-white"
                                    : "text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]"
                                }`}
                                style={{ fontFamily: "var(--font-display)" }}
                              >
                                {category}
                                {activeCategory === category && (
                                  <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={3}
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                )}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>

                <Button
                  href="https://www.youtube.com/watch?v=rykHVO-OW8k&list=PL_IDDWCeMOvfUv5lD2VfvLX4TSVfLvrZv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="!border-0 hover:!border-2"
                  icon={<ExternalLink size={14} />}
                >
                  PLAYLIST
                </Button>
              </div>
            )}

            {/* Works Grid by Year */}
            <div className="space-y-24">
              <AnimatePresence mode="wait">
                {sortedYears.map((year) => (
                  <motion.div
                    key={year}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Year Divider */}
                    <div className="flex items-center gap-6 mb-12">
                      <h2
                        className="text-5xl md:text-6xl font-black text-[var(--text-primary)] opacity-25 font-sans tracking-tighter"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {year}
                      </h2>
                      <div className="h-px bg-[var(--text-primary)] flex-1 opacity-10"></div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                      {groupedWorks[year].map((work, index) => (
                        <WorkCard
                          key={work.title}
                          work={work}
                          index={index}
                          onClick={() => setSelectedWork(work)}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {isTeaser && (
              <div className="mt-20 flex justify-center">
                <Button href={withBase("/works")} variant="primary">
                  View All Works
                </Button>
              </div>
            )}
          </Container>
        </main>

        {!isTeaser && <Footer />}

        {selectedWork && (
          <Modal card={selectedWork} onClose={() => setSelectedWork(null)} />
        )}
      </div>
    </Providers>
  );
};

export default WorksPage;
