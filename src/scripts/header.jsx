import React from "react";

class Header extends React.Component {
  constructor( props ) {
    super( props );

    this.handleChange = this.handleChange.bind( this );
  }

  handleChange( e ) {
    this.props.onFilterChange( e.target.value );
  }

  render() {
    return (
      <header className="c-catalogue-header">
        <h1 className="c-heading c-catalogue-header__heading">Women&rsquo;s tops</h1>

        <form className="c-filter">
          <select className="c-filter__select" value={ this.props.productFilter } onChange={ this.handleChange }>
            <option value="">No filtering</option>
            <option value="is-sale">Is on sale</option>
            <option value="is-exclusive">Is exclusive</option>
            <optgroup label="Filter by size">
              <option value="size-xs">XS</option>
              <option value="size-s">S</option>
              <option value="size-m">M</option>
              <option value="size-l">L</option>
              <option value="size-xl">XL</option>
            </optgroup>
            <optgroup label="Filter by price">
              <option value="price-lt15">&lt; $15</option>
              <option value="price-lt20">&lt; $20</option>
              <option value="price-lt25">&lt; $25</option>
            </optgroup>
          </select>
        </form>
      </header>
    );
  }
}
