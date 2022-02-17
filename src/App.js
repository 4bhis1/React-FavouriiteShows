import './App.css';
import data from './data';
import Cards from './Cards';

import './index.css'


console.log(data)

function App() {
  return (
    <>
    <div className='mainHeading'>{data.length} most favourite series.</div>
    <div className='mainContainer'>
      {data.map( (val,index) => {
        return (
          <Cards 
            key = {val.id}
            imgsrc = {val.imgsrc}
            title = {val.name}
            summary = {val.summary}
            downloadLink = {val.donwloadlink}
          />
        )
      })}
    </div>
    </>
  )
}

export default App;
