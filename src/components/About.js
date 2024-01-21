import React from "react";

function About({image="https://via.placeholder.com/215"}, description) {
    return (
      <aside>
        <img>src={image} alt="blog logo"</img>
        <p>{description}</p>
      </aside>
    );
}

export default About;