import React from "react";
import "./Footer.css";
import { AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="container">
        <div className="socials">
          <ul>
            <li>
              <a href="https://www.instagram.com/c98fragrances">
                <FaInstagram
                  style={{ width: 60, height: 20, color: "whitesmoke" }}
                />
              </a>
            </li>
            <li>
              <a class="mailto" href="mailto:chiladike@gmail.com">
                <AiOutlineMail
                  style={{ width: 60, height: 20, color: "whitesmoke" }}
                />
              </a>
            </li>
            <li>
              <a href="tel: +39 379 2486065">
                <AiFillPhone
                  style={{ width: 60, height: 20, color: "whitesmoke" }}
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="design">
          <p>All Copyrights of c98fragrances</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
