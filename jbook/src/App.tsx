import 'bulmaswatch/superhero/bulmaswatch.min.css';
import React, { useState } from 'react';

import './App.css';
import CodeCell from './components/code-cell';

function App() {
  return (
    <div className="App">
      <CodeCell />
      {/* <CodeCell /> */}
    </div>
  );
}

export default App;
