import React, { useState } from "react";
import { Link } from "react-router-dom";
import Item from "../UI/Item";
import ItemSkeleton from "../UI/ItemSkeleton";

const ExploreItems = ({ items, itemsLoading }) => {
  const displayAmount = 8;
  const [displayItems, setDisplayItems] = useState(displayAmount);

  return (
    <>
      <div>
        <select id="filter-items" defaultValue="">
          <option value="">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>

      {itemsLoading
        ? new Array(8).fill(0).map((_, index) => (
            <div
              key={index}
              className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
              style={{ display: "block", backgroundSize: "cover" }}
            >
              <ItemSkeleton />
            </div>
          ))
        : items
            .map((item) => (
              <div
                key={item.id}
                className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
                style={{ display: "block", backgroundSize: "cover" }}
              >
                <Item item={item} />
              </div>
            ))
            .slice(0, displayItems)}
      <div className="col-md-12 text-center">
        {displayItems === items.length ? (
          <div></div>
        ) : (
          <Link
            to=""
            id="loadmore"
            className="btn-main lead"
            onClick={() => setDisplayItems(displayItems + 4)}
          >
            Load more
          </Link>
        )}
      </div>
    </>
  );
};

export default ExploreItems;
