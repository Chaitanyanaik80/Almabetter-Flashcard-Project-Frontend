import React, { useEffect, useState } from 'react';


const DarkTheme = () => {
    //  import useState to change Theme value 
    const [Theme, SetTheme] = useState("light");
    // created a function  to toggle theme value
    const ToggleTheme = () => {
        Theme === "light" ? SetTheme("dark") : SetTheme("light")
    }
    // import useEffect to render theme value at least once
    useEffect(() => {
        document.body.className = Theme;
    }, [Theme])


    return (
        <div className='flex items-center mr-3'>
            <span className="mx-5 font-medium text-gray-900 dark:text-gray-100">Flashcard Generator ⚡ </span>
            <label className="relative inline-flex items-center cursor-pointer">
                <input onClick={ToggleTheme} type="checkbox" value="" className="sr-only peer" />
            </label>
        

        </div>
    )
}

export default DarkTheme
