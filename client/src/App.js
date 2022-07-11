import React, { useEffect } from 'react';
import './App.scss';
import RootPage from './pages/root-page/root-page.component';

function App() {

  useEffect(() => {
    document.body.className = "light-theme";
  }, []);

  return (
    <div className="App">
      <RootPage />
    </div>
  );
}


export default App;
