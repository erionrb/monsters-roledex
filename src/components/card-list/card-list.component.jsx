import { Component } from "react";
import { Card } from "../card/card.component";
import "./card-list.style.css";

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <>
        {monsters.length == 0 && <div>No monsters to show</div>}

        <div className="card-list">
          {monsters.map((monster) => {
            return <Card value={monster} />;
          })}
        </div>
      </>
    );
  }
}

export { CardList };
