import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../../css/styles/slick.css";
import "../../css/styles/slick-theme.css";
import Skeleton from "../UI/Skeleton";
import Item from "../UI/Item";
import ItemSkeleton from "../UI/ItemSkeleton";

const NewItems = ({ newItems, newItemsLoading }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function CountdownTimer(expiryDate) {
    const timeLeftInSeconds = (expiryDate - Date.now()) / 1000;
    const startTime = Date.now();
  
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
  
    function updateTimer() {
      const secondsElapsed = (Date.now() - startTime) / 1000;
      const updateCountdown = timeLeftInSeconds - secondsElapsed;
  
      setSeconds(Math.floor(updateCountdown) % 60);
      setMinutes(Math.floor(updateCountdown / 60) % 60);
      setHours(Math.floor(updateCountdown / (60 * 60)) % 24);
    }
  
    useEffect(() => {
      const interval = setInterval(() => updateTimer(), 100);
      return () => clearInterval(interval);
    }, []);
  
    if (timeLeftInSeconds < 0) {
      return (
          <div></div>
      )
    }
  
    return (
      <div className="de_countdown">
        {seconds < 0 ? (
          <span> EXPIRED </span>
        ) : (
          <span>
            {hours}h {minutes}m {seconds}s
          </span>
        )}
      </div>
    );
  }

  return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <Slider {...settings}>
            {newItemsLoading
              ? new Array(4).fill(0).map((index) => (
                  <ItemSkeleton key={index} />
                ))
              : newItems.map((newItem) => (
                  <Item item={newItem} key={newItem.id} />
                  // <div key={newItem.id}>
                  //   <div className="nft__item">
                  //     <div className="author_list_pp">
                  //       <Link
                  //         to="/author"
                  //         data-bs-toggle="tooltip"
                  //         data-bs-placement="top"
                  //         title="Creator: Monica Lucas"
                  //       >
                  //         <img
                  //           className="lazy"
                  //           src={newItem.authorImage}
                  //           alt=""
                  //         />
                  //         <i className="fa fa-check"></i>
                  //       </Link>
                  //     </div>

                  //     {CountdownTimer(newItem.expiryDate)}

                  //     <div className="nft__item_wrap">
                  //       <div className="nft__item_extra">
                  //         <div className="nft__item_buttons">
                  //           <button>Buy Now</button>
                  //           <div className="nft__item_share">
                  //             <h4>Share</h4>
                  //             <a href="" target="_blank" rel="noreferrer">
                  //               <i className="fa fa-facebook fa-lg"></i>
                  //             </a>
                  //             <a href="" target="_blank" rel="noreferrer">
                  //               <i className="fa fa-twitter fa-lg"></i>
                  //             </a>
                  //             <a href="">
                  //               <i className="fa fa-envelope fa-lg"></i>
                  //             </a>
                  //           </div>
                  //         </div>
                  //       </div>

                  //       <Link to="/item-details">
                  //         <img
                  //           src={newItem.nftImage}
                  //           className="lazy nft__item_preview"
                  //           alt=""
                  //         />
                  //       </Link>
                  //     </div>
                  //     <div className="nft__item_info">
                  //       <Link to="/item-details">
                  //         <h4>{newItem.title}</h4>
                  //       </Link>
                  //       <div className="nft__item_price">
                  //         {newItem.price} ETH
                  //       </div>
                  //       <div className="nft__item_like">
                  //         <i className="fa fa-heart"></i>
                  //         <span>{newItem.likes}</span>
                  //       </div>
                  //     </div>
                  //   </div>
                  // </div>
                ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default NewItems;
