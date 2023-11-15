import React from "react";
import Mira from '../img/mira.jpg'

function MainContent() {
  return (
    <main>

      <div className="pic">
        <img src={Mira} alt="Mira" />
      </div>

      <div className="introduction">
        <h3 className="name">Miroslava Patleeva</h3>
        <div className="job">Quality Assurance Junior</div>
        <div className="company">Imaginary Company</div>
      </div>

      <div className="buttons">
        <button>Email</button>
        <button>LinkedIn</button>
      </div>

      <div className="content">

        <div className="about">

          <h2>About</h2>
          <div className="about-content">
            Hello there! I'm a bundle of positive energy and a firm believer in the power of kindness. My passion for life reflects in my ever-smiling demeanor, making me a source of joy for those around me. I bring a lovely and compassionate approach to everything I do, fostering a harmonious and uplifting environment. With a heart that thrives on goodness, I'm always eager to lend a helping hand and spread warmth. Hard work is my middle name, and I tackle challenges with enthusiasm and dedication.
          </div>

        </div>

        <div className="interests">
          <h2>Interests</h2>
          <div className="interests-content">
            When I'm not spreading joy and positivity, you can find me indulging in some of my favorite hobbies. I have a deep love for comedies, and there's nothing like a good laugh to brighten my day. Whether it's a classic sitcom or a stand-up special, I find joy in the humor that life has to offer.
            Music is another passion that holds a special place in my heart. Pop music, with its catchy tunes and relatable lyrics, is my go-to genre.
          </div>
        </div>

      </div>

    </main>
  )
}

export default MainContent;