import React from 'react';
import Layout from './components/Layout/Layout';
import Sidebar from './components/Layout/Sidebar';

function App() {
  return (
    <div className='font-helvethaica'>
      <Sidebar />
      <Layout/>
    </div>
  );
}

export default App;
