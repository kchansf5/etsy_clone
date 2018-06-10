import React from 'react';

class Products extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.requestProducts();
  }

  render() {
    console.log(this.props.products);
    return (
      <div className="product-listings">
        {this.props.products.map(product => {
          return(
            <div className="product">
              <img src={product.image_url}/>
              {product.product_name}
              <br/>
              <div className="product-price">
                {product.price}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Products;
