import React from 'react'
import Video from '../components/home/video.jsx'
import HomeBottomText from '../components/home/HomeBottomText.jsx'
import HomeHeroText from '../components/home/homeHeroText.jsx'


function Home() {
  return (
    <div>
    <div className='h-screen w-screen fixed'>
      <Video />
    </div>
    <div className='h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between'>
      <HomeHeroText />
      <HomeBottomText />
    </div>
    </div>
  )
}

export default Home