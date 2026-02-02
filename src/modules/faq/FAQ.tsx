'use client';

import { useAppStore } from '@/store/store';
import { useTranslations } from '@/i18n/i18n';
import { X } from 'lucide-react'; 
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SECTION_SPACING, CONTAINER_PADDING } from '@/constants/layout';
import { faqVariants } from '@/animations/faq';

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ() {
  const locale = useAppStore((state) => state.locale);
  const faqOpenIndex = useAppStore((state) => state.faqOpenIndex);
  const setFaqOpenIndex = useAppStore((state) => state.setFaqOpenIndex);
  const { t } = useTranslations(locale);

  const faqsData = (t('faq.faqsData') as unknown) as FAQItem[] || [];

  return (
    <section className={`bg-black ${SECTION_SPACING.MEDIUM} ${CONTAINER_PADDING.HORIZONTAL}`}>
      <motion.div
        className="mx-auto max-w-4xl"
        variants={faqVariants.container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.div variants={faqVariants.title}>
          <SectionHeader
            title={
              <>
                <span>{t('faq.titleLine1')}</span>
                <br />
                <span>{t('faq.titleLine2')}</span>
              </>
            }
            subtitle={t('faq.description')}
            subtitleClassName="mx-auto max-w-xl"
            className="mb-8"
          />
        </motion.div>

        <motion.div
          className="space-y-4"
          variants={faqVariants.items}
        >
          {faqsData.map((faq, index) => (
            <motion.div
              key={index}
              layout
              variants={faqVariants.item}
              animate={{
                borderColor: faqOpenIndex === index ? 'transparent' : '#303130',
              }}
              transition={{
                layout: {
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                },
                borderColor: {
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1],
                },
              }}
              className={`relative overflow-hidden rounded-2xl transition-[background,border-color] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                faqOpenIndex === index
                  ? 'border-transparent bg-gradient-to-b from-[#03A7FF] to-[#00398F]'
                  : 'border bg-[#080808] hover:border-[#303130]'
              }`}
            >
              <button
                onClick={() => setFaqOpenIndex(faqOpenIndex === index ? null : index)}
                className={`flex w-full items-start justify-between text-left ${
                  faqOpenIndex === index ? 'p-4 pb-2 sm:p-6 sm:pb-3' : 'p-4 sm:p-6'
                }`}
                aria-expanded={faqOpenIndex === index}
                aria-label={faqOpenIndex === index ? 'Close answer' : 'Open answer'}
              >
                <div className="flex items-center justify-between w-full">
                    <motion.h2 
                      animate={{
                        color: faqOpenIndex === index ? '#ffffff' : '#cececf',
                      }}
                      transition={{
                        duration: 0.3,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="ml-3 text-md font-medium leading-relaxed sm:text-xl"
                    >
                    {faq.question}
                    </motion.h2>
                    <div className="flex-shrink-0 mr-3">
                      <motion.div
                        initial={false}
                        animate={{
                          backgroundColor: faqOpenIndex === index ? '#ffffff' : '#151515',
                        }}
                        whileHover={{
                          backgroundColor: faqOpenIndex === index ? 'rgba(255, 255, 255, 0.8)' : 'rgba(21, 21, 21, 0.8)',
                        }}
                        transition={{
                          duration: 0.3,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                        className="flex h-10 w-10 items-center justify-center rounded-full"
                      >
                        <AnimatePresence mode="wait">
                          {faqOpenIndex === index ? (
                            <motion.div
                              key="close"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{
                                duration: 0.2,
                                ease: [0.4, 0, 0.2, 1],
                              }}
                            >
                              <X className="h-4 w-4 text-[#03A7FF]" />
                            </motion.div>
                          ) : (
                            <motion.div
                              key="open"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{
                                duration: 0.2,
                                ease: [0.4, 0, 0.2, 1],
                              }}
                            >
                              <ChevronDown className="h-5 w-5 text-white" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </div>
                </div>
              </button>
              <AnimatePresence initial={false}>
                {faqOpenIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      height: {
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1],
                      },
                      opacity: {
                        duration: 0.4,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pl-4 mr-18 ml-3 pb-4 pt-0 sm:px-6 sm:pb-6 sm:pt-0">
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.15,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="text-[16px] leading-relaxed text-white"
                      >
                        {faq.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
