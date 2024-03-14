import { useState } from 'react'
import './App.css'
import MainInfo from './Components/MainInfo/MainInfo'
import Loader from './Components/Loader/Loader'
import firstData from './mock.json'

function App() {

  const [username, setUsername] = useState()
  const [data, setData] = useState(firstData)
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    const response = await fetch(`https://instagram-backend-dox.vercel.app/user/${username}`).catch((e) => {console.log(e); setLoading(false); alert('ERROR EN PETICIÓN')})
    const data = await response.json()

    setData(data)
    setLoading(false)
  }

  return <>

    {loading && <Loader />}

    <header className="header">
      <form className='form-username'>
        <div className="container-input">
          <input type="text" placeholder='Search for someone' className="username-input" onChange={(e) => {
            setUsername(e.target.value)
          }} required />
          <button className="sumbit-button" onClick={(e) => {
            e.preventDefault()
            fetchData()
          }}><i className='bx bx-search-alt'></i></button>
        </div>
      </form>
    </header>
    <main>
      {data ? <MainInfo data={data}/> : <div className='container-info'><p className='info-text'>Hi, look for some one</p> <img src="/rickandmorty.webp" width="80%" alt="" /></div>}
    </main>
  </>
}

export default App
