import React, { useEffect } from "react";
import "./subscribe.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Subscribe() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div id="contact">
      <div className="contact">
        <div
          className="contact__container"
          data-aos="fade-up-right"
          data-aos-delay="100"
          data-aos-easing="linear"
        >
          <h1>Get In Touch ✋ </h1>
        </div>
        <div className="contacts">
          <p
            className="content__tags"
            data-aos="fade-up-left"
            data-aos-delay="400"
          >
            Give your inbox some love with new products, tips, & more.
          </p>
        </div>
        <div>
          <a class="mailto" href="mailto:chiladike@gmail.com">
            <button className="hello">Say Hello 👋</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
