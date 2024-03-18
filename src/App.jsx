import { useEffect, useState } from 'react'
import './App.css'
import MainInfo from './Components/MainInfo/MainInfo'
import Loader from './Components/Loader/Loader'
import MorePosts from './Components/MorePosts/MorePosts'

function App() {

  const [username, setUsername] = useState()
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [postsShow, setPosts] = useState(12)

  const fetchData = async () => {
    setLoading(true)
    const response = await fetch(`https://instagram-backend-dox.vercel.app/user/${username}`).catch((e) => {console.log(e)})

    setLoading(false)

    if (response.status == 400){
      return
    }

    const data = await response.json()

    setPosts(data.posts.length < 12 ? data.basicRating.posts : 12)

    setData(data)
    setLoading(false)
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const response = await fetch(`https://instagram-backend-dox.vercel.app/user/ana_d_armas`).catch((e) => {console.log(e)})
      setLoading(false)

      if (response.status === 400) {return}

      const data = await response.json()
      setPosts(data.posts.length < 12 ? data.basicRating.posts : 12)
  
      setData(data)
      setLoading(false)
    }
    fetchData()
  },[])

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
      {data ? <MainInfo data={data} postsShow={postsShow}/> : <div className='container-info'><p className='info-text'>Hi, look for some one 👍</p></div>}
      {data && postsShow != data.basicRating.posts ? <MorePosts data={postsShow} originalData={data} setPosts={setPosts}/> : ""}
    </main>
  </>
}

export default App
