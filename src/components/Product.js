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
};

Product.propTypes = {
  name: PropTypes.sring.isRequired,
  producer: PropTypes.string, 
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  
}
