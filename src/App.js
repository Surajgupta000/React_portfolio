import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Index';
import { useState, useEffect } from 'react';
import Loader from './components/Loader';

function App() {
  const [showLoading, setShowLoading] = useState(true);

  // Simulate loading process with useEffect
  useEffect(() => {
    console.log('useEffect running'); // Log to check if useEffect is running
    // Simulate a loading delay
    const timer = setTimeout(() => {
      console.log('Timer finished'); // Log to check if timer completes
      setShowLoading(false);
    }, 2000); // Adjust the delay as needed

    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <BrowserRouter>
      {showLoading ? <Loader /> : null}
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
