import { useState } from 'react';


export const useToggle = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleToggle = () => {
        setIsDarkMode(!isDarkMode);
    }

    return {isDarkMode, toggleToggle}
}



//     return (
//         <div className={isDarkMode ? "dark" : "light"}>
//             <button onClick={setIsDarkMode}>Dark/Light</button>
//             <MainPage />
//         </div>
//     );
//