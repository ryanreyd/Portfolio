import Card from '../components/Card'
import TechStack from '../components/TechStack'
import { react_icon } from '../assets/icons'
import { js_icon } from '../assets/icons'
import { tailwind_icon } from '../assets/icons'
import { css_icon } from '../assets/icons'
import { html_icon } from '../assets/icons'
import { note_pad } from '../assets/images'
import { github } from '../assets/icons'
import { google } from '../assets/icons'
import { fb } from '../assets/icons'
import { linkedin } from '../assets/icons'

const Hero = () => {
  return (
    <section 
      className="text-white w-full flex flex-col justify-center items-center min-h-screen
        bg-local px-16 max-sm:px-10" 
        style={{ backgroundImage:`url(${note_pad})` }}>
      <div className="flex w-full flex-col mt-10
       justify-center rounded-xl gap-5 p-5">
        <div className='grid grid-cols-6 gap-5 max-xl:flex max-xl:flex-col'>
          <h1 className="col-span-3 text-4xl flex-shrink lg:min-w-fit max-md:text-3xl 
            leading-normal font-palanquin font-medium tracking-wide
            p-5 rounded-lg w-full relative">
             <span className='px-4'> Hi!</span><span className='bg-blood-red px-4'>I'am</span>
            <br/>
            <span className=" px-4 font-bold text-white">
              Ryan Rey
            </span>
            <br/>
            <span className=""><span className='bg-blood-red px-4'>Aspiring</span> Web Developer</span>
          </h1>
          <div className='col-span-3'>
            <Card> {/* description */}
              <div className=''>
                I am a passionate and creative developer who loves 
                to build web and mobile applications using various 
                frameworks and programming languages.
              </div>
            </Card>
          </div>
          <div className='col-span-3'>
            <Card label='Tech Stack'> {/* Tech Stack */}
              <div className='grid grid-cols-3 gap-5'>
                <TechStack name="React-JS" icon={react_icon} customBg="clay"/>
                <TechStack name="React Native" icon={react_icon}customBg="clay"/>
                <TechStack name="Tailwind" icon={tailwind_icon} customBg="red-50"/>
                <TechStack name="JavaScript" icon={js_icon} customBg="red-50"/>
                <TechStack name="CSS" icon={css_icon} customBg="red-50"/>
                <TechStack name="HTML" icon={html_icon} customBg="red-50"/>
              </div>
            </Card>
          </div>
          <div className='col-span-3'>
            <Card label='Social Media'> {/* social media */}
              <div className='grid grid-cols-2 gap-5 items-center justify-center'>
                <TechStack name="Github" icon={github} customBg="red-50"/>
                <TechStack name="Google" icon={google}customBg="clay"/>
                <TechStack name="Facebook" icon={fb} customBg="clay"/>
                <TechStack name="LinkedIn" icon={linkedin} customBg="red-50"/>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero