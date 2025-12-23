
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import ValuePillars from './components/ValuePillars';
import ProcessSteps from './components/ProcessSteps';
import ExperienceBand from './components/ExperienceBand';
import MetricsStrip from './components/MetricsStrip';
import UseCases from './components/UseCases';
import LeadCapture from './components/LeadCapture';
import Footer from './components/Footer';
import AnalysisModal from './components/AnalysisModal';

const App: React.FC = () => {
  const [isAnalysisModalOpen, setIsAnalysisModalOpen] = useState(false);
  const [analysisData, setAnalysisData] = useState<any>(null);

  const scrollToLeadForm = () => {
    const element = document.getElementById('lead-capture');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartAnalysis = (data: any) => {
    setAnalysisData(data);
    setIsAnalysisModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0f1e] flex flex-col selection:bg-blue-500/30">
      <Header onCtaClick={scrollToLeadForm} />
      
      <main className="flex-grow">
        <Hero 
          onPrimaryClick={scrollToLeadForm} 
          onSecondaryClick={() => alert("Connecting you with a Senior Energy Advisor...")} 
        />
        
        <div className="bg-dots py-4">
          <TrustSection />
          <ValuePillars />
          <ProcessSteps />
          <ExperienceBand />
          <MetricsStrip />
          <UseCases />
        </div>
        
        <section id="lead-capture" className="py-32 bg-[#0d1425]">
          <div className="max-w-7xl mx-auto px-6">
            <LeadCapture onAnalysisComplete={handleStartAnalysis} />
          </div>
        </section>
      </main>

      <Footer />

      {isAnalysisModalOpen && (
        <AnalysisModal 
          isOpen={isAnalysisModalOpen} 
          onClose={() => setIsAnalysisModalOpen(false)} 
          data={analysisData}
        />
      )}
    </div>
  );
};

export default App;
