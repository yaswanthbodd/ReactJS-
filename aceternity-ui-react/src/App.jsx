import './App.css'
import { AnimatedPinDemo } from './components/AnimatedPinDemo'
import { AnimatedTestimonialsDemo } from './components/AnimatedTestimonialsDemo'
import { AnimatedTooltipPreview } from './components/AnimatedTooltipPreview'
import { BackgroundBeamsDemo } from './components/BackgroundBeamsDemo'
import { BackgroundBeamsWithCollisionDemo } from './components/BackgroundBeamsWithCollisionDemo'
import { BackgroundBoxesDemo } from './components/BackgroundBoxesDemo'
import { BackgroundLinesDemo } from './components/BackgroundLinesDemo'
import { CardHoverEffectDemo } from './components/CardHoverEffectDemo'
import { CodeBlockDemo } from './components/CodeBlockDemo'
import { ThreeDCardDemo } from './components/ThreeDCardDemo'
import { ThreeDMarqueeDemo } from './components/ThreeDMarqueeDemo'

function App() {

  return (
    <>
      <div className='bg-black h-screen'>
        {/* <AnimatedPinDemo /> */}
        {/* <ThreeDCardDemo /> */}
        {/* <ThreeDMarqueeDemo /> */}
        {/* <AnimatedTestimonialsDemo /> */}
        {/* <AnimatedTooltipPreview />   */}
        {/* <BackgroundBeamsDemo /> */}
        {/* <BackgroundBeamsWithCollisionDemo /> */}
        {/* <BackgroundBoxesDemo /> */}
        {/* <BackgroundLinesDemo /> */}
        {/* <CardHoverEffectDemo /> */}
        <CodeBlockDemo />
        
      </div>
    </>
  )
}

export default App
