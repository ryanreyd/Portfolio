const TechStack = ({name, customBg, icon, alt}) => {
  return (
    <div
      className={
        `bg-${customBg}
        border-dashed
        w-fit
      border-clay
        flex
        items-center
        gap-2
        text-sm 
        max-md:text-xs 
        w-full'`
      }
    >
        <div 
          className={`
            border-clay
            flex 
            items-center
            justify-center
          `}
        >
          <img
            src={icon}
            alt={alt}
            height={25}
            width={25}
            className={`
              max-sm:w-[20px] 
              max-sm:h-[20px]
              max-md:w-[22px] 
              max-md:h-[22px]
              max-lg:w-[23px] 
              max-lg:h-[23px]
            `} 
          />
        </div>
      <div className="" >{name}</div>
    </div>
  )
}

export default TechStack
