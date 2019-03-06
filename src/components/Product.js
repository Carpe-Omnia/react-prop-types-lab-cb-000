import React from 'react' ;
import PropTypes from 'prop-types' ;

 class Product extends React.Component {

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
};

Product.propTypes = {
  name: PropTypes.string.isRequired ,
  producer: PropTypes.string ,
  hasWatermark: PropTypes.bool ,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired ,
  weight: (props, propName) => {
    var exists = !!props[propName] ;
    var entry = props[propName] ;
    var numeric = parseInt(entry) === entry ;
    var range = false ;
    if (numeric === true ) {
      if (entry >= 80 && entry <= 300) {
        var range = true
      }
    }
    if (numeric === true && range === true) {
        console.log("this seems fine")
    }
    else {
      return new Error('Incorrect weight prop')
    }
  } 
}

export default Product ;
