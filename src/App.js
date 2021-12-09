
import React, { useState } from 'react';
import Topbar from './Topbar.js';
import Test from './test.js';

function App() {



  const [isBottom, setIsBottom] = useState(false);

  console.log(isBottom);
  const whenIsBottom = () => {
    setIsBottom(true);
  }

  return (
    <div>
      <Topbar />
    </div>
  );
}

export default App;
