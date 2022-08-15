// Created by Apiwat Tatsanakitti 

import {useState, useEffect} from 'react'
import axios from 'axios'

// const baseURL = "http://[public-ip]:8000/api/TestDB"
const baseURL = "http://3.0.30.183/:8000/api/TestDB"

function App() {

  const [TestDB, setProducts] = useState(null)

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setProducts(response.data);
    });
  }, [])

  if (!TestDB) return null;

  return (
    <center><div>
      <p>--------------------------------------------------------------------</p>
      {
       TestDB.map(element => {
          return (
            
            <div key={element.id}>
              <p>{element.data1} / {element.data2} / {element.data3}</p>
              <p>--------------------------------------------------------------------</p>
            </div>
          )
        })
      }
    </div></center>
  );
}

export default App
