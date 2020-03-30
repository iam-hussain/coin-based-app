import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore, faSearch, faFilter, faUsers } from '@fortawesome/free-solid-svg-icons'

export class NavBar extends Component {
  static propTypes = {

  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <span className="brand">Coin App</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
          <form className="form-inline mr-auto my-2 my-lg-0">
            {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
          </form>

          <div className="navbar-nav">
            <button className="button btnTertiary"><FontAwesomeIcon icon={faStore} /> MarketPlace</button>
            <button className="button iconBtn btnTertiary"><FontAwesomeIcon icon={faUsers} /></button>
          </div> 
        </div>

        <style jsx>{`
            .brand{
              font-size: 1.2rem;
              font-weight: 500;
              color: #3a3b3d;
              margin: 0px 20px 0px 0px;
            }
            .button{
              font-weight: 500;
            }
        `}</style>

      </nav>
    )
  }
}

export default NavBar
