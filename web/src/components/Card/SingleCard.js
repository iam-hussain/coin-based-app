import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SingleCard extends Component {
    static propTypes = {
        
    }

    
    componentDidMount(){
        console.log(this.props)
    }

    render() {
        return (
            <div className="col-2 d-flex justify-content-center card-box">
                <div className="card">
                <img src="https://images.unsplash.com/photo-1571161473325-1594dece4499?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <div className="flexboy">
                        <span>Sold: {this.props.sold}/{this.props.stack}</span>
                        <span className="flex-spacer"></span>
                        <span>Startes: {this.props.type}</span>
                    </div>
                </div>
                </div>
                <style jsx>{`
                    .card-box{
                        padding: 0px 6px;
                        margin: 10px 0px;
                    }   
                    .card{
                        text-align: center;
                        border: 2px solid #221996;
                        border-radius: 20px;
                    } 
                    .card-body{
                        padding: 5px 20px;
                    }
                    .card-title{
                        padding: 0px;
                    }
                    img {
                        border-radius: 20px 20px 0px 0px;
                        height: 200px;
                        width: 100%;
                    }
              `}</style>
            </div>
        )
    }
}
