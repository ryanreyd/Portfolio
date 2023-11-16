import { pin } from "../assets/images"

const Card = ({children, label='info'}) => {
  return (
    <div className='rounded-lg flex max-sm:p-5 p-5 xl:p-10 
    items-center w-full shadow-lg 
    bg-paper backdrop:blur-sm bg-opacity-5 backdrop-blur-xl'>
       <div className="border-dashed border-2 max-xl:pt-8 p-5 xl:p-10 
        relative rounded-md border-light-red w-full">
         <div className='flex flex-row-reverse'>
           <img 
             src={pin} 
             alt="pin" 
             height={40}
             width={40}
             className='absolute top-[-15px] right-[-10px] max-lg:w-[25px] max-lg:h-[25px]' 
           />
         </div>
         <div  className="absolute top-[-1px] text-sm left-[-20px]
          px-10 py-1 rounded-sm border-dashed border-t-0 border-r-0
          border-2 border-l-0
          border-light-red ">
            <h1>
              {label} : {/* card label */}
            </h1>
          </div>
         <div  className="absolute text-sm top-[-1px] right-[-20px]
          px-10 py-1 rounded-sm border-dashed border-t-0 border-r-0
          border-2 border-l-0
          border-light-red ">
            <h1 className="opacity-0">
               {label}{/*dashed*/}
            </h1>
          </div>
         <div className='font-montserrat text-base leading-7
          max-sm:text-sm max-sm:leading-6 text-justify'>
            {children}
         </div>
       </div>
    </div>
  )
}

export default Card