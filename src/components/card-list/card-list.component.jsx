import { Card } from "../card/card.component";
import "./card-list.style.css";

const CardList = ({ monsters }) => {
  return (
    <>
      {monsters.length == 0 && <div>No monsters to show</div>}

      <div className="card-list">
        {monsters.map((m) => (
          <Card monster={m} />
        ))}
      </div>
    </>
  );
};

export { CardList };
