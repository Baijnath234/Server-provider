import { useState } from 'react';
import './App.css'
import Login from './Login';
import Signup from './Signup';


function App() {
  const [isLoginView, setIsLoginView] = useState(true);

  const handleToggleView = () => {
    setIsLoginView(!isLoginView);
  };

  return (
    <>
    <div className="container mx-auto">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Login/Signup</h1>
        <div className="flex justify-center">
          <button
            className={`px-4 py-2 mr-2 ${isLoginView ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
            onClick={handleToggleView}
          >
            Login
          </button>
          <button
            className={`px-4 py-2 ${!isLoginView ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
            onClick={handleToggleView}
          >
            Signup
          </button>
        </div>
        <div className="mt-4">
          {isLoginView ? <Login /> : <Signup />}
        </div>
      </div>
    </div>
    </>
  )
}

export default App
