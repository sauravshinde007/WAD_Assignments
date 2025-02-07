import { BrowserRouter } from "react-router-dom";
import {About, Contact, Experience, Feedbacks, Hero,Navbar, Tech, Works, StarsCanvas, Footer} from './components';
import { SpeedInsights } from '@vercel/speed-insights/react';

const App = ()=> {

  return (
    <BrowserRouter>
        <div className="relative z-0 bg-primary">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <Navbar />
              <Hero />
            </div>
            <About />
            <Experience />
            <Tech />
            <Works />
            {/* <Feedbacks /> */}

            <div className="relative z-0">
                <Contact />
                <StarsCanvas />
            </div>
            <Footer />
        </div>
        <SpeedInsights />
    </BrowserRouter>
  )
}

export default App
