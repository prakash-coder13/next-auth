const Code = ({children}: {children:React.ReactNode})=>{
    return (

         <code className="border bg-gray-400 p-[2px] mx-[2px] text-sm antialiased" >
            {children}
        </code>
    )
}

export default Code;