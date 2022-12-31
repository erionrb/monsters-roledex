import { Component } from "react";
import "./search-box.styles.css";

class SearchBox extends Component {
  render() {
    const { onChangeHandler, placeHolder, className } = this.props;

    return (
      <div>
        <input
          className={`search-box ${className}`}
          type="search"
          placeholder={placeHolder}
          onChange={onChangeHandler}
        />
      </div>
    );
  }
}

export { SearchBox };
