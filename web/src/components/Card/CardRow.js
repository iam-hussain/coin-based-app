import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SingleCard from './SingleCard';

export default class CardRow extends Component {
    productList = [
        {
            title: "IPhone X",
            chips: 20,
            sold: 2,
            stack:100,
            type: "OnSold",
        },
        {
            title: "Rolex G20",
            chips: 50,
            sold: 5,
            stack:10,
            type: "OnSold",
        },
        {
            title: "Mac Pro",
            chips: 10,
            sold: 0,
            stack:20,
            type: "OnSold",
        },
        {
            title: "Pixcle 3XL",
            chips: 50,
            sold: 10,
            stack:50,
            type: "OnSold",
        },
        {
            title: "IPhone X",
            chips: 20,
            sold: 2,
            stack:100,
            type: "OnSold",
        },
        {
            title: "Rolex G20",
            chips: 50,
            sold: 5,
            stack:10,
            type: "OnSold",
        },
        {
            title: "Mac Pro",
            chips: 10,
            sold: 0,
            stack:20,
            type: "OnSold",
        },
        {
            title: "Pixcle 3XL",
            chips: 50,
            sold: 10,
            stack:50,
            type: "OnSold",
        },
        {
            title: "IPhone X",
            chips: 20,
            sold: 2,
            stack:100,
            type: "OnSold",
        },
        {
            title: "Rolex G20",
            chips: 50,
            sold: 5,
            stack:10,
            type: "OnSold",
        },
        {
            title: "Mac Pro",
            chips: 10,
            sold: 0,
            stack:20,
            type: "OnSold",
        },
        {
            title: "Pixcle 3XL",
            chips: 50,
            sold: 10,
            stack:50,
            type: "OnSold",
        },
    ]

    static propTypes = {
    }

    render() {
        return (
            <div className="row">
                {this.productList.map((p,i) => (
                    <SingleCard title={p.title} chips={p.chips} sold={p.sold} stack={p.stack} type={p.type} key={i}></SingleCard> 
                ))}
            </div>
        )
    }
}
