import React from "react";

class Product extends React.Component {
  render() {
    let tag;

    let isSale = this.props.data.isSale;
    let isExclusive = this.props.data.isExclusive;

    if ( isSale ) {
      tag = <div className="c-tag">Sale</div>;
    } else if ( isExclusive ) {
      tag = <div className="c-tag">Exclusive</div>;
    }

    return (
      <div className={ "c-product" + ( isSale ? " c-product--sale" : "" ) + ( isExclusive ? " c-product--exclusive" : "" ) }>
        <img src={ "img/products/" + this.props.data.productImage } alt={ this.props.data.productName } />

        { tag }

        <div className="c-product__meta">
          <span className="c-product__name">{ this.props.data.productName }</span>
          <span className="c-product__price">{ this.props.data.price }</span>
        </div>
      </div>
    );
  }
}
