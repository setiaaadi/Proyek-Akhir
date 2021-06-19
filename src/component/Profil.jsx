import React, { Component } from "react";

import Skydu from "../gambar/profil/skydu.jpg";
import Icons from "../gambar/profil/icons.jpg";
import Ellipse_head from "../gambar/profil/Ellipse_head.jpg";
import profil from "../gambar/profil/profil.jpg";
import exit from "../gambar/profil/exit.png";
import Like_bar from "../gambar/profil/Like.png";
import Comment_bar from "../gambar/profil/Comment.png";
import Share_bar from "../gambar/profil/Share.png";
import Menu from "../gambar/profil/menu.png";
import contoh from "../gambar/profil/contoh1.png";
import "../profil.css";

class Profil extends Component {
  render() {
    return (
      <div className="bdg_prf">
        <div className="headbar">
          <img src={Skydu} className="img_skydu" alt="gambar_skydu" />
          <img src={Icons} className="img_icons" alt="gambar_Icons" />
          <img
            src={Ellipse_head}
            className="img_ellpise_head"
            alt="gambar_Ellipse_head"
          />
        </div>
        <div className="kotak1">
          <img src={profil} className="img_profil" alt="gambar_profil" />
          <div className="kotak1_1">
            <p>Setia Adi Agung Nursyamsi</p>
            <p>Edit Profil</p>
            <div className="followers">
            <p>364 posts</p>
            <p>16k followers</p>
            <p>10 following</p>
            </div>
            <p>Kalo di ganggu suka gigit</p>
            <img src={exit} className="" alt="gambar_profil" />
          </div>
        </div>
        <input
          className="status"
          type="text"
          placeholder="Apa yang ada di pikiran mu Adi ?"
        ></input>
        <br />
        <div className="kotak2">
          <div className="isiStatus1">
            <img src={profil} className="img_pp_status" alt="" />
            <div>
              <h3 className="nama_bar">Setia Adi Agung Nursyamsi</h3>
              <p className="time_bar">45 mins ago</p>
            </div>
            <p className="status_bar">
              Halo nama saya Setia Adi Agung Nursyamsi, ini hanya contoh
              sementara
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
        </div>
        <div className="kotak3">
          <div className="isiStatus1">
            <div>
              <img
                src={profil}
                className="img_pp_status"
                alt="gambar_Ellipse_bar"
              />
              <h3 className="nama_bar">Setia Adi Agung Nursyamsi</h3>
              <p className="time_bar">june 21, 12:45 pm</p>
            </div>
            <p className="status_bar">
              Halo nama saya Setia Adi Agung Nursyamsi, ini hanya contoh
              sementara
            </p>

            <div>
              <img src={Menu} className="img_Menu_bar1" alt="gambar_Menu_bar" />
              <img src={contoh} className="img_gambar1" alt="gambar_gambar1" />
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
        </div>
      </div>
    );
  }
}
export default Profil;
