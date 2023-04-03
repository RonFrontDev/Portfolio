import './App.scss'
import Navbar from './components/Navbar/Navbar'
import About from './sections/About/About'
import Contact from './sections/Contact/Contact'
import Introduction from './sections/Introduction/Introduction'
import Projects from './sections/Projects/Projects'


function App() {

  return (
    <div className="app">
      <Navbar/>
      <Introduction/>
      <About/>
      <Projects/>
      <Contact/>
      {/* about me
      picture and text with animations/ emojis */}
    </div>
  )
}

export default App
