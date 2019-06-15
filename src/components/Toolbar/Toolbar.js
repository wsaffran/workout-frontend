import React from 'react'

import './Toolbar.css'

const Toolbar = () => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div className="toolbar_logo"><a href="/">WORKOUT</a></div>
      <div className="spacer"></div>
      <div className="toolbar_navigation-items">
        <ul>
          <li><a href="/">Start</a></li>
          <li><a href="/">History</a></li>
          <li><a href="/">Login</a></li>
        </ul>
      </div>
    </nav>
  </header>
)

export default Toolbar
