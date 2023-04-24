import React, { Component } from "react";
import Slide from "react-reveal";
import "../index.css"
import "../App.css"

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });

    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
        <h2 className="text-center">Neler yapıyoruz</h2>
        <br />
        <br />
        {/* <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Altyapı inşaatları</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="icr1"></div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Telekom</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="icr2"></div>
              </div>
            </div>
          </div>
        </Slide> */}

        <Slide left duration={100}>
          <div class="main">
            <ul class="cards">
              <li class="cards_item" id="item_salad">
                <div class="card">
                  <div class="card_image"><img src="http://www.er-kaya.com.tr/images/bg/contact-bg.jpg" alt="mixed vegetable salad in a mason jar. " /></div>
                  <div class="card_content">
                    <h2 class="card_title">Altyapı inşaatları</h2>
                  </div>
                </div>
              </li>

              <li class="cards_item" id="item_reuben">
                <div class="card">
                  <div class="card_image"><img src="http://www.er-kaya.com.tr/images/slider-04.jpg" alt="a Reuben sandwich on wax paper. " /></div>
                  <div class="card_content">
                    <h2 class="card_title">Telekom</h2>
                  </div>
                </div>
              </li>


              <li class="cards_item" id="item_reuben">
                <div class="card">
                  <div class="card_image"><img src="http://www.er-kaya.com.tr/images/slider-04.jpg" alt="a Reuben sandwich on wax paper. " /></div>
                  <div class="card_content">
                    <h2 class="card_title">Üstyapı inşaatları</h2>
                  </div>
                </div>
              </li>

              <li class="cards_item" id="item_reuben">
                <div class="card">
                  <div class="card_image"><img src="http://www.er-kaya.com.tr/images/slider-04.jpg" alt="a Reuben sandwich on wax paper. " /></div>
                  <div class="card_content">
                    <h2 class="card_title">Konut/Eğitim</h2>
                  </div>
                </div>
              </li>


              <li class="cards_item" id="item_reuben">
                <div class="card">
                  <div class="card_image"><img src="http://www.er-kaya.com.tr/images/slider-04.jpg" alt="a Reuben sandwich on wax paper. " /></div>
                  <div class="card_content">
                    <h2 class="card_title">Yol inşaatları</h2>
                  </div>
                </div>
              </li>


              <li class="cards_item" id="item_reuben">
                <div class="card">
                  <div class="card_image"><img src="http://www.er-kaya.com.tr/images/slider-04.jpg" alt="a Reuben sandwich on wax paper. " /></div>
                  <div class="card_content">
                    <h2 class="card_title">Çevre Tanzimi</h2>
                  </div>
                </div>
              </li>

              <li class="cards_item" id="item_reuben">
                <div class="card">
                  <div class="card_image"><img src="http://www.er-kaya.com.tr/images/slider-04.jpg" alt="a Reuben sandwich on wax paper. " /></div>
                  <div class="card_content">
                    <h2 class="card_title">Enerji</h2>
                  </div>
                </div>
              </li>


              <li class="cards_item" id="item_reuben">
                <div class="card">
                  <div class="card_image"><img src="http://www.er-kaya.com.tr/images/slider-04.jpg" alt="a Reuben sandwich on wax paper. " /></div>
                  <div class="card_content">
                    <h2 class="card_title">Gsm</h2>
                  </div>
                </div>
              </li>



              <Slide left duration={1300}>
                <div className="row work workum">
                  <div className="three columns header-col ">
                    <h1 className="workumtext">
                      <span>insan kaynakları</span>
                    </h1>
                  </div>

                  <div className="nine columns main-col workumtext" >İK POLİTİKAMIZ
                    Er-Kaya A.Ş. tarafından işe alınacak adaylarda aranan ortak özellik, pozisyonun gerektirdiği eğitim, teknik bilgi ve yetkinliklerin yanında, Er-Kaya değerleriyle örtüşen kişilik özelliklerine sahip olunmasıdır.
                    <div className="ealerts">Açık pozisyonlar için info@er-kaya.com.tr adresine CV göndererek başvuru yapabilirsiniz.</div>
                  </div>
                </div>
              </Slide>



            </ul>
          </div>
        </Slide>

        {/* <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>{skillmessage}</p>

              <div className="bars">
                <ul className="skills">{skills}</ul>
              </div>
            </div>
          </div>
        </Slide> */}
      </section>
    );
  }
}

export default Resume;
