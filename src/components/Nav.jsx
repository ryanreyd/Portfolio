import { navLinks } from "../constants"
import { hamburger } from  "../assets/icons"
import {logo} from "../assets/images"
import Button from "../components/Button"

const Nav = () => {
  return (
    <header className="padding-x py-8 w-full mr-3 absolute z-10 shadow-lg
      max-lg:shadow-md bg-slate-900 backdrop:blur-sm bg-opacity-5
      backdrop-blur-xl">
      <nav className="flex justify-between items-center max-container">
    {/*     <a href='/'>
          <img 
            src={logo}
            alt='logo'
            className="m-0 w-[70px] h-[40px]"
          />
        </a> */}
        <div>
          <h1>
            ryandumpasan@gmail.com
          </h1>
        </div>
        <ul className="flex-1 flex justify-center
         items-center gap-16 max-lg:hidden
         text-paper">
          {navLinks.map((item) =>(
            <li key={item.label}>
              <a href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='max-lg:hidden '>
           <Button label="Resume" variant='red-900'/>
        </div>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
      </nav>
    </header>
  )
}

export default Nav