import { useState } from 'react';
import MainPage from './pages/MainPage';
import {useToggle} from './hooks/useToggle';

function App() {



  // const [isDarkMode, setIsDarkMode] = useState(false);

  // const useToggle = () => {
  //   setIsDarkMode(!isDarkMode);
  // }

  const {isDarkMode, toggleToggle} = useToggle()

  return (
    <div className={isDarkMode ? "dark" : "light"} >
      <button onClick={toggleToggle}>Dark/Light</button>
      <MainPage />
    </div>
  );
}

export default App;
