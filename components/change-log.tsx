import React from "react";

const  ChangeLog = ({title,date,description}:{title:string,date:string,description:string})=>{

    return(

        <>
        <div className="bg-gray-300 flex flex-col max-w-max p-8 my-4">
         <div className="text-xl">
            {title}
         </div>
         <div className="text-sm">
            {date}
         </div>
         <div>
            {description}
         </div>
        </div>
        
        </>
    )

}

export default ChangeLog;