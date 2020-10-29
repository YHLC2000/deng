import React, { useState } from 'react'
import Biao from './Biao'
import Tian from './Tian'
import 'antd/dist/antd.css'
function App() {
  const [data, getdata] = useState([
    {
      name: '陈赫',
      age: '18',
      box: '0001',
    },
    {
      name: '王麻子',
      age: '20',
      box: '0002',
    }
  ])
  const tianApp = (item) =>{
    getdata(data.concat(item))
  }
  return (
    <div >
      <Tian onAdd={tianApp} />
      <Biao data={data} />
    </div>
  );
}
export default App;
