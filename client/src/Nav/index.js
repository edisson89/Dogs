import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './nav.module.css'

const Nav = () => {
  return (
    <div className={styles.nav}>
     <NavLink className={styles.navlink} to='/home' >
      <button>Home</button>
     </NavLink>
     <NavLink className={styles.navlink} to='/form' >
     <button>Form</button>
     </NavLink>
     <NavLink className={styles.navlink} to='/about' >
     <button>About</button>
     </NavLink>
    
     <NavLink className={styles.navlink} to='/Favorites' >
     <button>Favorites</button>
     </NavLink>
     

    </div>
  )
}

export default Nav