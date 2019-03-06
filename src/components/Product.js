import React from 'react' ;

export default class Product extends React.Component {

  render(){
    return (
      <div>
        <h3>
          {this.props.name}
        </h3>
        <p>
          producer:
          {this.props.producer}
        </p>
        <p>
          hasWaterMark:
          {this.props.hasWaterMark}
        </p>
        <p>
          color:
          {this.props.color}
        </p>
        <p>
          weight:
          {this.props.weight}
        </p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}
