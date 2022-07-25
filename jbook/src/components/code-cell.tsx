import React, { useState, useEffect } from 'react';

import CodeEditor from './code-editor';
import Preview from './preview';
import bundler from '../bundler';
import Resizable from './resizable';

function CodeCell() {
  const [code, setCode] = useState('');
  const [input, setInput] = useState('');
  const [err, setError] = useState<string>('');

  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundler(input);
      setCode(output.code);
      setError(output.error);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <Resizable direction="vertical">
      <div
        className="App"
        style={{ height: '100%', display: 'flex', flexDirection: 'row' }}
      >
        <Resizable direction="horizontal">
          <CodeEditor initialValue="" onChange={(value) => setInput(value)} />
        </Resizable>
        <Preview code={code} bundlingStatus={err} />
      </div>
    </Resizable>
  );
}

export default CodeCell;
