import React from 'react'
import { useState } from 'react'

const Nav = () => {
  const [sidebar, setSidebar] = useState(false)
  return (
    <>
      <header>
        <div className="container flexSB">
          <div className="logo">
            <h1>
              .<span>m</span>uu
            </h1>
          </div>
          <nav>
            <button className="toggle" onClick={() => setSidebar(!sidebar)}>
              {sidebar ? <i className='fas fa-times' /> : <i className='fas fa-bars' />}
            </button>
            <ul className={sidebar ? 'nav-links-sidebar' : 'nav-links'} onClick={() => setSidebar(false)}>
              <li><a href="/">Home</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Creative</a></li>
              <li><a href="/">Educations</a></li>
              <li><a href="/">Works</a></li>
              <li><a href="/">Blog</a></li>
              <li><a href="/">Contacts</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Nav