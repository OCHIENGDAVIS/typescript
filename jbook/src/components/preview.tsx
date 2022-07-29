import { useEffect, useRef } from 'react';

import './preview.css';

interface PreviewProps {
  code: string;
  bundlingStatus: string;
}

const html = `
    <html>
      <head>
        <style>
          html{background-color:white}
        </style>
      </head>
      <body>
        <div id="root"></div>
        <script>
        const handleError = (err)=>{
          const root = document.getElementById('root')
          root.innerHTML = '<div style="color: red;"> <h4>Run time Eror:</h4>' + err+ '</div>'

        }
          window.addEventListener('error', (e)=>{
            handleError(e.error)
          })
          window.addEventListener('message', (event)=>{
            try{
              eval(event.data)
            }catch(err){
              handleError(err)
            }
          }, false)
        </script>
      </body>
    </html>
  `;

const Preview: React.FC<PreviewProps> = ({ code, bundlingStatus }) => {
  const iframe = useRef<any>();
  useEffect(() => {
    iframe.current.srcdoc = html;
    setTimeout(() => {
      iframe.current.contentWindow.postMessage(code, '*');
    }, 50);
  }, [code]);
  return (
    <div className="preview-wrapper">
      <iframe
        title="code preview"
        ref={iframe}
        srcDoc={html}
        sandbox="allow-scripts"
      />
      {bundlingStatus && <div className="preview-error">{bundlingStatus}</div>}
    </div>
  );
};

export default Preview;
