import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Carousel from "react-multi-carousel";
import { responsive } from './responsiveConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faIcon from '@fortawesome/free-solid-svg-icons'


export class CategorySlide extends Component {
    catList = [{
        title: "Vehicle",
        icon: "faCar",
      }, {
        title: "Games",
        icon: "faGamepad",
      }, {
        title: "Gadgets",
        icon: "faMobile",
      }, {
        title: "Voucher",
        icon: "faTicketAlt",
      }, {
        title: "Games",
        icon: "faGamepad",
      }, {
        title: "Games",
        icon: "faGamepad",
      }, {
        title: "Games",
        icon: "faGamepad",
      }, {
        title: "Games",
        icon: "faGamepad",
    }]
    static propTypes = {

    }

    render() {
        return (
          <Fragment>
            <div className="row">
            <Carousel responsive={responsive} ssr={true} className="mb-5">
            {this.catList.map( c => (
              <div className="col-auto icon-box small-box">
                <div className="box big-icon"> 
                <i className="fas fa-user"></i>
                  <h4>{c.title}</h4>
                </div>
              </div>
            ))};
            </Carousel>
            </div>
            <Carousel
  swipeable={false}
  draggable={false}
  showDots={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  <div><i className="fas fa-user">s</i>Item 1</div>
  <div><i className="fas fa-user">s</i>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Carousel>;
            <style jsx>{`
                  .box {
                    padding: 30px;
                    text-align: center;
                  }
                  
              `}</style>
          </Fragment>
        )
    }
}

export default CategorySlide
