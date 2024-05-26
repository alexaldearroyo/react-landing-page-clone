import './App.css';
import React from 'react';
import CourseSummarySection from './components/CourseSummarySection';
import DecoSection from './components/DecoSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import InstructorSection from './components/InstructorSection';
import IntroSection from './components/IntroSection';
import NavBar from './components/NavBar';
import ReadySection from './components/ReadySection';
import ReviewsSection from './components/ReviewsSection';
import TrailerSection from './components/TrailerSection';

const App = () => (
  <div className="App">
    <NavBar />
    <IntroSection />
    <DecoSection />
    <TrailerSection />
    <CourseSummarySection />
    <InstructorSection />
    <FAQSection />
    <ReviewsSection />
    <ReadySection />
    <Footer />
  </div>
);

export default App;
