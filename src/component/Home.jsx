import React, { Component } from "react";
import Profil from "./Profil";

import Skydu from "../gambar/skydu.jpg";
import Icons from "../gambar/icons.jpg";
import Ellipse_head from "../gambar/Ellipse_head.jpg";
import Ellipse_bar from "../gambar/Ellipse_bar.png";
import Ellipse_bar2 from "../gambar/Ellipse_bar2.png";
import Like_bar from "../gambar/Like.png";
import Gambar1 from "../gambar/gambar1.jpg";
import Comment_bar from "../gambar/Comment.png";
import Share_bar from "../gambar/Share.png";
import Menu from "../gambar/menu.png";
import Cm1 from "../gambar/Ellipse1.png";
import Cm2 from "../gambar/Ellipse2.png";
import Cm3 from "../gambar/Ellipse3.png";

class Home extends Component {
  render() {
    return (
      <div className=" bdg_Home">
        <div className="headbar">
          <img src={Skydu} className="img_skydu" alt="gambar_skydu" />
          <img src={Icons} className="img_icons" alt="gambar_Icons" />
          <img
            src={Ellipse_head}
            className="img_ellpise_head"
            alt="gambar_Ellipse_head"
            
          />
        </div>
        <br />
        <input
          className="status"
          type="text"
          placeholder="Apa yang kamu pikirkan ?"
        ></input>
        <br />
        <br />
        <div className="isiStatus1">
          <div>
            <img
              src={Ellipse_bar}
              className="img_ellpise_bar"
              alt="gambar_Ellipse_bar"
            />
            <h3 className="nama_bar">Thomas Ben</h3>
            <p className="time_bar">45 mins ago</p>
          </div>
          <p className="status_bar">
            Halo nama saya Setia Adi Agung Nursyamsi, ini hanya contoh sementara
          </p>
          <div>
            <img src={Menu} className="img_Menu_bar1" alt="gambar_Menu_bar" />
            <img
              src={Like_bar}
              className="img_Like_bar1"
              alt="gambar_Like_bar"
            />
            <img
              src={Comment_bar}
              className="img_Comment_bar1"
              alt="gambar_Like_bar"
            />
            <img
              src={Share_bar}
              className="img_Share_bar1"
              alt="gambar_Like_bar"
            />
          </div>
        </div>
        <br />
        <div className="isiStatus1">
          <div>
            <img
              src={Ellipse_bar2}
              className="img_ellpise_bar"
              alt="gambar_Ellipse_bar"
            />
            <h3 className="nama_bar">Miranda Saffer </h3>
            <p className="time_bar">june 21, 12:45 pm</p>
          </div>
          <p className="status_bar">
            Having fun while cooking and eating variety of foods with @setiaaadi
          </p>
          <img src={Gambar1} className="img_gambar1" alt="gambar_gambar1" />
          <img src={Menu} className="img_Menu_bar2" alt="gambar_Menu_bar" />
          <div>
            <img
              src={Like_bar}
              className="img_Like_bar1"
              alt="gambar_Like_bar"
            />
            <img
              src={Comment_bar}
              className="img_Comment_bar1"
              alt="gambar_Like_bar"
            />
            <img
              src={Share_bar}
              className="img_Share_bar1"
              alt="gambar_Like_bar"
            />
          </div>
          <div className="Comentar_master">
            <img
              src={Cm1}
              className="img_ellpise_bar"
              alt="gambar_Ellipse_bar"
            />
            <div className="Comentar_isi">
              <h4>Mary Jane Watson</h4>
              <p>Itu gimana cara masaknya gan?</p>
            </div>
          </div>
          <div className="Comentar_master">
            <img
              src={Cm3}
              className="img_ellpise_bar"
              alt="gambar_Ellipse_bar"
            />
            <div className="Comentar_isi">
              <h4>Bibi May</h4>
              <p>kayanya gampang deh.. cek dulu di youtube</p>
            </div>
          </div>
          <div className="Comentar_master">
            <img
              src={Cm2}
              className="img_ellpise_bar"
              alt="gambar_Ellipse_bar"
            />
            <div className="Comentar_isi">
              <h4>Miles Morales</h4>
              <p>IIkutan dong, mau buat juga!</p>
            </div>
          </div>

          <div className="Comentar_master">
            <img
              src={Ellipse_bar2}
              className="img_ellpise_bar"
              alt="gambar_Ellipse_bar"
            />
            <div className="Comentar_isi">
              <input
                className="Comment"
                type="text"
                value="Tulis Komentar Kamu.."
              ></input>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
