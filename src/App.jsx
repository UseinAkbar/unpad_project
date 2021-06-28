import React, {useState} from 'react'
import Stage from './components/Stage'
import Video from './components/Video'
import data from './data'

const App = () => {
  const [videoID, setVideoID] = useState({id: '', subtitle: ''})
  const [kelas, setKelas] = useState('')

  const handlePopOut = (id, subtitle) =>{
    setVideoID(() => {
      return {
        id,
        subtitle
      }
    })
    setKelas('popOut')
  }

  const handlePopIn = (kelas) => {
    setKelas(kelas)
    setVideoID({id: '', title: ''})
  }

  return (
    <div className="App">
      <h1 className="text-2xl">Live Stream Web App</h1>
      <div className="stage">
        {
          data.map((item, i) => {
            const {id, title} = item
            return (
              <Stage key={i} id={id} title={title} handleClick={handlePopOut}/>
            )
          })
        }
      </div>
      <Video id={videoID.id} title={videoID.subtitle} classVideo={kelas} handleClick={handlePopIn}/>
    </div>
        );
}

export default App;