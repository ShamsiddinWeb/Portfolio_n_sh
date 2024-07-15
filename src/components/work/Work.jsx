import React from "react";
import "./Work.css";
import work1 from "../../assets/images/work1.jpg";
import work2 from "../../assets/images/work2.jpg";
import work3 from "../../assets/images/work3.jpg";
import work4 from "../../assets/images/work4.jpg";
import work5 from "../../assets/images/work5.jpg";
import work6 from "../../assets/images/work6.jpg";

const Work = () => {
  return (
    <section className="work" id="work">
      <div className="title reveal">
        <div className="section-title">My Work</div>
      </div>
      <div className="content">
        <div className="card reveal">
          <div className="card-img">
            <img
              className="card1"
              src={work1}
              alt="nimadir"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="card reveal">
          <div className="card-img">
            <img
              className="card2"
              src={work2}
              alt="nimadir"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="card reveal">
          <div className="card-img">
            <img
              className="card3"
              src={work3}
              alt="nimadir"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="card reveal">
          <div className="card-img">
            <img
              className="card4"
              src={work4}
              alt="nimadir"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="card reveal">
          <div className="card-img">
            <img
              className="card5"
              src={work5}
              alt="nimadir"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="card reveal">
          <div className="card-img">
            <img
              className="card6"
              src={work6}
              alt="nimadir"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="title reveal">
          <a href="#" className="btn">
            See All
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;
