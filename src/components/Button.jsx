const Button = ({label, variant}) => {
  console.log(variant)
  return (
    <button className={`text-white bg-${variant} flex items-center 
    justify-center font-montserrat back px-5 py-2
    rounded-full hover:shadow-lg bg-slate-800`}>
        {label}
    </button>
  )
}

export default Button