import * as esbuild from 'esbuild-wasm';
import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { unpkgPathPlugin } from './plugins/unpk-path-plugin';
import { fetchPlugin } from './plugins/fetch-plugin';

function App() {
  const ref = useRef<any>();
  const iframe = useRef<any>();
  const startService = async () => {
    ref.current = await esbuild.startService({
      worker: true,
      wasmURL: '/esbuild.wasm',
    });
  };
  useEffect(() => {
    startService();
  }, []);
  const [input, setInput] = useState('');

  const onClick = async () => {
    if (!ref.current) return;
    iframe.current.srcdoc = html;
    const results = await ref.current.build({
      entryPoints: ['index.js'],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin(), fetchPlugin(input)],
      define: {
        'process.env.NODE_ENV': '"production"',
        global: 'window',
      },
    });
    iframe.current.contentWindow.postMessage(results.outputFiles[0].text, '*');
  };
  const html = `
    <html>
      <body>
        <div id="root"></div>
        <script>
          window.addEventListener('message', (event)=>{
            try{
              eval(event.data)

            }catch(err){
              const root = document.getElementById('root')
              root.innerHTML = '<div style="color: red;"> <h4>Run time Eror:</h4>' + err+ '</div>'

            }
          }, false)
        </script>
      </body>
    </html>
  `;
  return (
    <div className="App">
      <textarea
        name=""
        id=""
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <div>
        <button onClick={onClick}>Submit </button>

        <iframe
          title="code preview"
          ref={iframe}
          srcDoc={html}
          sandbox="allow-scripts"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
