import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../../css/styles/slick.css";
import "../../css/styles/slick-theme.css";
import Skeleton from "../UI/Skeleton";

const HotCollections = ({ hotCollections, hotCollectionsLoading }) => {
  useEffect(() => {
    console.log(hotCollectionsLoading);
    console.log(hotCollections);
  }, [hotCollectionsLoading]);

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

  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <Slider {...settings}>
            {hotCollectionsLoading
              ? new Array(4).fill(0).map((index) => {
                  return (
                    <div key={index}>
                      <div className="nft_coll">
                        <div className="nft_wrap">
                          {Skeleton({
                            width: "100%",
                            height: 200,
                            borderRadius: 0,
                          })}
                        </div>
                        <div className="nft_coll_pp">
                          {Skeleton({
                            width: 50,
                            height: 50,
                            borderRadius: 50,
                          })}
                          <i className="fa fa-check"></i>
                        </div>
                        <div className="nft_coll_info">
                          <Link to="/">
                            {Skeleton({
                              width: 100,
                              height: 20,
                              borderRadius: 0,
                            })}
                          </Link>
                          <br />
                          <span>
                            {Skeleton({
                              width: 60,
                              height: 20,
                              borderRadius: 0,
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })
              : hotCollections.map((collection) => (
                  <div key={collection.id}>
                    <div className="nft_coll">
                      <div className="nft_wrap">
                        <Link to="/item-details">
                          <img
                            src={collection.nftImage}
                            className="lazy img-fluid"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="nft_coll_pp">
                        <Link to="/author">
                          <img
                            className="lazy pp-coll"
                            src={collection.authorImage}
                            alt=""
                          />
                        </Link>
                        <i className="fa fa-check"></i>
                      </div>
                      <div className="nft_coll_info">
                        <Link to="/explore">
                          <h4>{collection.title}</h4>
                        </Link>
                        <span>ERC-{collection.code}</span>
                      </div>
                    </div>
                  </div>
                ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HotCollections;
