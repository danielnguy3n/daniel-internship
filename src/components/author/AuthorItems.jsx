import React, { useState } from "react";
import Item from "../UI/Item";
import ItemSkeleton from "../UI/ItemSkeleton";

const AuthorItems = ({ authorItems, authorLoading }) => {
  return (
    <div className="de_tab_content">
      <div className="tab-1">
        <div className="row">
          {authorLoading
            ? new Array(8).fill(0).map((_, index) => (
                <div
                  className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
                  key={index}
                >
                  <ItemSkeleton />
                </div>
              ))
            : authorItems.map((item) => (
                <div
                  className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
                  key={item?.id}
                >
                  <Item item={item} />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorItems;
