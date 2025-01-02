import './App.css';
import AboutSection from './Components/AboutSection/AboutSection';
import ContactSection from './Components/ContactSection/ContactSection';
import FeaturesSection from './Components/FeaturesSection/FeaturesSection';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import JoinSection from './Components/JoinSection/JoinSection';
import NaviggationBar from './Components/NavigationBar/NaviggationBar';
import PlanSection from './Components/PlanSection/PlanSection';
import Spacer from './Components/Spacer/Spacer';
import TrainSection from './Components/TrainSection/TrainSection';

function App() {
  return (
    <div className="App">
      <NaviggationBar/>
      <Hero />
      <AboutSection/>
      <Spacer />
      <FeaturesSection/>
      <JoinSection/>
      <PlanSection/>
      <TrainSection/>
      <ContactSection />
      <Spacer />
      <Footer />
    </div>
  );
}

export default App;
