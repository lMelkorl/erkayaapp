import React, { Component } from "react";
import Fade, { Slide } from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
           
            <div className="nine columns text-center">
              <h2>HAKKIMIZDA</h2>
              <div className="row">
                <div className=" text-center ">
                  <h5 style={{color: "white",fontFamily:"sans-serif"}}>Er-Kaya İnşaat
                  </h5>
                  <p>{bio}</p>
                </div>
             
              </div>
            </div>
          </div>
        </Fade>

        <Slide left duration={1300}>
          <div className="row education">
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">ER-KAYA İNŞAAT olarak müşteri memnuniyetinin ekonomik kazancımızdan önde geldiği bilinç ve ER-KAYA İNŞAAT olarak müşteri memnuniyetinin ekonomik kazancımızdan önde geldiği bilinç ve kararlılığı ile bugün, yarın ve daima en iyiye ulaşmaya, hatayı oluşmadan önlemeye, çalışanlarımızı her fırsatta eğitmeye kararlıyız.</div>
              </div>
            </div>
          </div>
        </Slide>
 
        <Slide left duration={1300}>
          <div className="row education">
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">2007’de başladığımız bu yolculukta, yaptığımız işe saygıyı ilke olarak kabul edip, maddi kazancın ötesinde iş yaptığımız kurum ve kişiler nezdinde güvenilirliği, dürüstlüğü ve kaliteyi ön planda tutmayı kendimize hedef seçtik.

Çevreye yasaların ön gördüğü zorunluluklar ötesinde bir titizlikle özen göstermeyi; bilimin gerekliliklerine uyarak hizmet kalitemizin geliştirme çalışmalarını tüm çalışanların katılımı ile desteklemeyi; yönetim sistemlerinin devamlılığını sağlamayı ve sürekli geliştirmeyi şirket politikası olarak görüyoruz.</div>
              </div>
            </div>
          </div>
        </Slide>


        <Slide left duration={1300}>
          <div className="row education">
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                Günümüzde amatör bir ruhu profesyonel bir işletme anlayışı ile birleştiren ER-KAYA İNŞAAT giderek genişleyen iş hacmine paralel olarak, makina parkını, ekipmanını ve deneyimli kadrosunu günden güne büyütmektedir.

ER-KAYA İNŞAAT günümüze kadar gerçekleştirdiği projeleriyle, kararlı ve dürüst çalışma ilkeleriylebu iş kolunda bulunan ve tercih edilen seçkin firmalar arasındadır.
                </div>
              </div>
            </div>
          </div>
        </Slide>

    
      </section>
    );
  }
}

export default About;
