import React, { Component, Fragment } from 'react';

class Index extends Component {
  render() {
    return (
        <Fragment>
              <div className='row'>
                <div className="col"> 
                    hello
                    <button className="button">ddd</button>
                </div>
              </div>
              <style jsx>{`
                    .col{
                        padding: 50px;
                        background-color: #f1f5ee;
                    }
                    
              `}</style>
        </Fragment>
     
    );
  }
}

export default Index;
