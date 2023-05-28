import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getbooks } from "../utils/api";

function BookList() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    getbooks().then((lists) => {
      setLists(lists);
    });
  }, []);
  return (
    <>
      <ul className="card_component">
        {lists.map((list) => {
          const { volumeInfo } = list;
          const { title, authors, imageLinks } = volumeInfo;

          return (
            <li className="card" key={list.id}>
              <h3>{title}</h3>
              <p>{authors}</p>
              {imageLinks && imageLinks.thumbnail && (
                <img
                  src={imageLinks.thumbnail.replace(/^http:/, "https:")}
                  alt={title}
                />
              )}
              <button
                onClick={() => orderItem(item)}
                title="Click here to order this item now."
              >
                {" "}
                Buy now
              </button>
              <button
                onClick={() => addItemToBasket(item)}
                title="Click here to add this item to your basket."
              >
                {" "}
                Add to cart 🛒
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default BookList;
