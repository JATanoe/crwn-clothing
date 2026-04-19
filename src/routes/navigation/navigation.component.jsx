import React, { Fragment } from "react"
import { Outlet, Link } from "react-router"

import CrwnLogo from "../../assets/crown.svg?react"

import "./navigation.styles.scss"

const Navigation = () => {
   return (
      <Fragment>
         <nav className="navigation">
            <Link className="nav-logo" to="/">
               <CrwnLogo className="logo" />
            </Link>

            <div className="nav-links">
               <Link className="nav-link" to="/shop">
                  Shop
               </Link>
               <Link className="nav-link" to="/signin">
                  Sign In
               </Link>
            </div>
         </nav>

         <Outlet />
      </Fragment>
   )
}

export default Navigation
