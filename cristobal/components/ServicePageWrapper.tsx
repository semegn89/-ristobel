'use client';

import PageTransition from './PageTransition';
import AnimatedSection from './AnimatedSection';
import AnimatedCard from './AnimatedCard';

interface ServicePageWrapperProps {
  title: string;
  sections: Array<{
    title: string;
    content: string;
  }>;
}

export default function ServicePageWrapper({ title, sections }: ServicePageWrapperProps) {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-20 md:py-28">
        <AnimatedSection>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-16 text-primary-darkest text-center">
            {title}
          </h1>
        </AnimatedSection>

        <div className="max-w-5xl mx-auto space-y-8">
          {sections.map((section, index) => (
            <AnimatedCard key={index} index={index}>
              <section className="bg-gradient-card p-10 rounded-2xl shadow-soft hover:shadow-xl transition-all duration-500 border border-gray-100">
                <h2 className="text-3xl font-display font-semibold mb-6 text-primary-darkest">
                  {section.title}
                </h2>
                <p className="text-secondary-dark text-lg leading-relaxed">
                  {section.content}
                </p>
              </section>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}

