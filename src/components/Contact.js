import React, { Component, } from "react";

export default class Contact extends Component {
  render() {
    return (
      <section id="aboutMe">
        <img
          class="aboutImg"
          src="https://www.taslim.me/aboutme.png"
          alt="About Me"
        />
        <div class="aboutP">
          <h2>about</h2>
          <p>
            Taslim Yakub is currently pursuing a bachelor’s degree in Web
            Design and Development. He is a self-taught coder highly
            experienced with HTML, CSS, C++, Visual Basic, and JAVA. From a
            young age, Yakub was fascinated with how websites were developed
            which led him to experiment with coding and UI/UX design. Since
            then, he has created multiple websites and worked on a variety
            of personal and academic projects.
          </p>
          <h2>resume</h2>
          <p class="extraSpacing">
            <a class="buttonLink" href="#noresumeyet" target="_blank">
              <i class="fas fa-file-pdf" /> View my Resume
            </a>
          </p>

          <h2>coding +design skills</h2>
          <p>
            <i class="fab fa-html5" /> HTML5 / <i class="fab fa-css3-alt" />{" "}
            CSS3(SASS, Flexbox)
          </p>
          <p>
            <i class="fab fa-adobe" /> Illustrator 2018, Photoshop CC 2018,
            After Effects 2018
          </p>
          <h2>contact</h2>
          <p>
            <i class="fas fa-envelope" />
            <a href="mailto:taslimer@gmail.com"> taslimer@gmail.com</a>
          </p>
          <p>
            {" "}
            <i class="fas fa-phone" />
            <a href="tel:13474379337">+1 347 437 9337</a>
          </p>
        </div>
      </section>
    );
  }
}
