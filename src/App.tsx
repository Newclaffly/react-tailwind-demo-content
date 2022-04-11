import React from 'react';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='mx-auto container-fuild'>
      <Sidebar />
      <Layout/>
    </div>
  );
}

export default App;
