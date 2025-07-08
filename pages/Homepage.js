"use client"
import React from 'react'
import { useState } from 'react'

import Navebar from '@/pages/Navebar'
import Mainbar from '@/pages/mainbar'
import Footer from '@/pages/Footer'
import CreateRoom from '@/pages/CreateRoom'

const Homepage = () => {
     const [showcreateroom, setshowcreateroom] = useState(false)
  return (
    <>
      {showcreateroom ? <div> <CreateRoom Disable={setshowcreateroom}/></div> : 
    <div>
        <nav>
    <Navebar />
        </nav>
        <main>
            <Mainbar setshowcreateroom={setshowcreateroom} />
        </main>
        <footer>
    <Footer />
        </footer>
        
    </div>
    }
    </>
  )
}

export default Homepage