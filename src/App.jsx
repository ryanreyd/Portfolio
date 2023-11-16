import {
  Hero,
  Projects
} from './sections'
import Nav from './components/Nav'

const App = () => {
  return (
    <main className='relative'>
      <Nav/>
      <section>
        <Hero/>
      </section>
      <section>
        <Projects/>
      </section>
    </main>
  )
}

export default App