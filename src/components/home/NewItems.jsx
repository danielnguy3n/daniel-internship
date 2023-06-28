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
                ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default NewItems;
