import React from "react";

const GoogleMap = ({ extraClass }) => {
  return (
    <div className={`google-map__${extraClass}`}>
      <iframe
        title="template google map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13237.536785499273!2d-84.8178288!3d33.9569633!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x84c19dc2edb2798f!2sSTRONG%20ARM%20DETAIL!5e0!3m2!1sen!2sus!4v1602212215097!5m2!1sen!2sus"
        className={`map__${extraClass}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GoogleMap;
