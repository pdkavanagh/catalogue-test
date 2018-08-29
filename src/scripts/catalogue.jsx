import React from "react";

import { Product } from "./product";

const apiEndpoint = "api/products.json";

class Catalogue extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      isLoaded: false,
      error: null,
      productData: []
    };

    this.filterType2Func = {
      "is-sale": this.filterIsSale,
      "is-exclusive": this.filterIsExclusive,
      "size-xs": this.filterSizeXS,
      "size-s": this.filterSizeS,
      "size-m": this.filterSizeM,
      "size-l": this.filterSizeL,
      "size-xl": this.filterSizeXL,
      "price-lt15": this.filterPriceLT15,
      "price-lt20": this.filterPriceLT20,
      "price-lt25": this.filterPriceLT25
    };
  }

  componentDidMount() {
    fetch( apiEndpoint )
      .then( res => res.json() )
      .then(
        ( result ) => {
          this.setState({
            isLoaded: true,
            productData: result
          });
        },
        ( error ) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  filterIsSale( el ) {
    return el.isSale;
  }

  filterIsExclusive( el ) {
    return el.isExclusive;
  }

  filterSizeXS( el ) {
    return el.size.includes("XS");
  }

  filterSizeS( el ) {
    return el.size.includes("S");
  }

  filterSizeM( el ) {
    return el.size.includes("M");
  }

  filterSizeL( el ) {
    return el.size.includes("L");
  }

  filterSizeXL( el ) {
    return el.size.includes("XL");
  }

  filterPriceLT15( el ) {
    return Number( el.price.replace( "$", "" ) ) < 15;
  }

  filterPriceLT20( el ) {
    return Number( el.price.replace( "$", "" ) ) < 20;
  }

  filterPriceLT25( el ) {
    return Number( el.price.replace( "$", "" ) ) < 25;
  }

  render() {
    const { error, isLoaded } = this.state;
    const productFilter = this.props.productFilter;

    let productData = this.state.productData;

    if ( productFilter !== "" ) {
      productData = productData.filter( this.filterType2Func[ productFilter ] );
    }

    if ( error ) {
      return <div>Error: { error.message }</div>;
    } else if ( !isLoaded ) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="c-catalogue">
          { productData.map( item => (
            <Product key={ item.index } data={ item } />
          ))}
        </div>
      );
    }
  }
}
