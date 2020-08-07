import React, { useEffect, useRef } from 'react';
import WebViewer from '@pdftron/webviewer';
import './App.css';

function App() {
  const viewer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    WebViewer(
      {
        path: 'http://localhost:8080/lib/',
        config: 'http://localhost:8080/config.js'
      },
      viewer.current as HTMLDivElement,
    );
  }, []);

  return (
    <div className="App">
      <div className="webviewer" ref={viewer}></div>
    </div>
  );
}

export default App;
