import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faMobile, faGem, faAppleAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import CardRow from '../components/Card/CardRow';
import CategorySlide from "../components/CategorySlider/CategorySlide"
class Index extends Component {
  cats = [1,2,3,4,5,6,7,8]
  render() {
    return (
        <Fragment>
              <div className="row mb-5">
                  <div className="col paper-bg">
                    <div className="row h-100 align-items-center mt-3 mb-3">
                      <div className="col-md-6 d-flex justify-content-center">
                        <div>
                          <h4 className="mb-0">
                          <FontAwesomeIcon icon={faFire} /> Trending category
                          </h4>
                          <h1 className="title textMain">Lottery</h1>
                          <span className="textLight"
                            >Sometimes the good things in life do come easy...</span
                          >
                          <br />
                          <button className="button btnPrimary mt-3">
                            Explore
                          </button>
                        </div>
                      </div>
                      <div className="col-md-6 d-flex justify-content-center">
                        <img src="/img/Digital-Marketing-PNG-Transparent-Image.png" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col">
                    <div className="row">
                      <div className="col">
                        <div className="flexboy">
                          <h4 className="textMain">Categories</h4>
                          <span className="flex-spacer"></span>
                          <span className="textLight">See all</span>
                        </div>
                      </div>
                    </div>
                
                    <div className="row align-items-center mt-3">
                      <div className="col flexboy cat-list">
                        {this.cats.map( (c, i) => (
                          <div key={i} className="paper-bg box textMain">
                            <i className="fas fa-car textMain"></i>
                            <p>Vehicles</p>
                          </div>
                        ))} 
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-5 medium-box">
                  <div className="col-md-5 paper-bg">
                    <div className="row h-100 align-items-center primary-bg panel">
                      <div className="col-md d-flex justify-content-right pl-5">
                        <div>
                          <h3><FontAwesomeIcon icon={faGem} /> Buy chips and start playing</h3>
                          <p>Start playing now and win</p>
                          <button className="button btnSecondary">
                           Buy now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7 pl-5">
                    <div className="row h-100 align-items-center paper-bg panel">
                      <div className="col-md d-flex justify-content-right pl-5">
                        <div>
                          <h3 className="textMain"><FontAwesomeIcon icon={faMobileAlt} /> Play anywhere, anytime</h3>
                          <p className="textMain">Get our app</p>
                          <button className="button btnPrimary mr-2">
                          <FontAwesomeIcon icon={faMobile} /> Google Play
                          </button>
                          <button className="button btnPrimary" >
                          <FontAwesomeIcon icon={faAppleAlt} /> Apple Store
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col">
                    <div className="row mb-3">
                      <div className="col">
                        <div className="flexboy">
                          <h4 className="text-main">Treading Categories</h4>
                          <span className="flex-spacer"></span>
                          <span className="text-light">See all</span>
                        </div>
                      </div>
                    </div>
                    <CardRow></CardRow>
                  </div>
                </div>

              <style jsx>{`
                  .paper-bg{
                    padding: 0px 0px;
                  }
                  .title{
                    font-size: 6rem;
                  }
                  img {
                    width: 70%;
                  }
                  .box {
                    padding: 25px 0px;
                    text-align: center;
                    width: 120px;
                    margin: 0px 10px;
                  }
                  .cat-list{
                    font-size: 16px;
                    font-weight: 500;
                  }
                  .cat-list i{
                    font-size: 30px;
                  }
                  .cat-list p{
                    margin: 5px 0px;
                  }
                  .panel{
                    padding: 35px 0px;
                  }
              `}</style>
        </Fragment>
     
    );
  }
}

export default Index;
