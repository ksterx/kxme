import About from './components/About'
import Resume from './components/Resume'
import Interests from './components/Interests'
import Contact from './components/Contact'
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export default function Home() {
    return (
        <div className="container mx-auto px-4 py-8">
            <About />
            <Resume />
            <Interests />
            <Contact />
        </div>
    )
}