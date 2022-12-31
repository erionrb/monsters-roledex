import { Component } from "react";
import "./card.style.css";

class Card extends Component {
  render() {
    const { value } = this.props;
    const { id, name, email } = value;

    return (
      <div className="card-container" key={id}>
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export { Card };
