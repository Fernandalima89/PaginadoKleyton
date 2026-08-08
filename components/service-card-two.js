import React from "react";
import Link from "next/link";

const ServiceCardTwo = ({ data }) => {
  const { url, icon1, icon2, title } = data;
  return (
    <Link href={url} >
      <a className="icon_box_1 text-center" >
        <div className="flipper">
          <div className="front">
            {/*<i className={iconName}></i>*/}
            <img style={{paddingBottom: 20}} src={icon1} />
            <h3>{title}</h3>
          </div>
          <div className="back">
            {/*<i className={iconName}></i>*/}
            <img style={{paddingBottom: 20}} src={icon2} />
            <h3>{title}</h3>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ServiceCardTwo;
