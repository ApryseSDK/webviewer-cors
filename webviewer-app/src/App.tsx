import React, { useEffect, useRef } from 'react';
import WebViewer from '@pdftron/webviewer';
import './App.css';

function App() {
  const viewer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    WebViewer(
      {
        path: 'http://localhost:8080/lib/',
        config: 'http://localhost:8080/config.js',
      },
      viewer.current as HTMLDivElement,
    );
    
    viewer?.current?.addEventListener('ready', () => {
      const iframeWindow = viewer?.current?.querySelector('iframe')?.contentWindow;
      setTimeout(() => {
        iframeWindow?.postMessage({ 
        type: 'OPEN_DOCUMENT_URL', 
        url: 'https://pdftron.s3.amazonaws.com/downloads/pl/webviewer-demo.pdf' 
      }, '*')}, 1000);
    });
  }, []);

  return (
    <div className="App">
      <div className="webviewer" ref={viewer}></div>
    </div>
  );
}

export default App;
