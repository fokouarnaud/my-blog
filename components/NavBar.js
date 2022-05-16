import React from 'react'

const NavBar = () => {
  return (
    <div className="bg-yellow-400 border-b border-black">

        <div className="max-w-7xl mx-auto flex flex-row items-center justify-between py-3">
            <div>
                <img className=" h-12" src ="/images/logo.png" alt="act-blog"/>
            </div>
            <div className="">
                <ul  className="flex flex-row items-center justify-between space-x-5">
                    <li><a href="#">Our story</a></li>
                    <li><a href="#">Membership</a></li>
                    <li><a href="#">Write</a></li> 
                    <li><a href="#">Sign In</a></li> 
                    <li><a href="#" className="bg-black rounded-full text-white px-5 py-3">Get started</a></li> 
                </ul>
            </div>
            
        </div>
    </div>
  )
}

export default NavBar