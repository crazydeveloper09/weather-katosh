
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Table from './components/Table/Table';

function App() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("London");
  useEffect(() => {
    const interval = setInterval(() => {
      axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=bcd92a4aeb2c54e5f8c6966dc27c0cdf`)
      .then((response) => {
        console.log(response.data)
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
    }, 10000)
   
    return () => {
      clearInterval(interval);
    }
    
  }, [city]);

  const handleChange = (e) => {
    setCity(e.target.value);
  }
  
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-12">
          <h1>Currently chosen <span>{city}</span></h1>
          <select className="form-select" onChange={handleChange}>
            <option value="London, gb">London</option>
            <option value="Munich, de">Munich</option>
          </select>
          <Table data={data} />
        </div>
      </div>
      
    </div>
  );
}

export default App;
