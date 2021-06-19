import { Component } from "react";

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listNama: [
        "pada ",
        "hari ",
        "minggu ",
        "aku ",
        "turut ",
        "ayah ",
        "ke kota ",
        "Naik Delman ",
        "Istimewa ",
        "Ku Duduk ",
      ],
      title: ["Anda Menang!"],
    };
    console.log("contructor");
  }
  componentDidMount() {
    const title = this.props.title;
    if (title) {
      this.setState({ title: title });
    }
  }
  ubahKata = () => {
    this.setState({});
  };

  hapusKata = (key) => {
    if (this.randomKata === this.state.listNama[key]) {
      this.state.listNama.splice(key, 1);
    } else alert("Anda Salah");
  };

  render() {
    console.log("render");
    return (
      <div>
        <div className="judulKata">
          <h1>
            {" "}
            {
              (this.randomKata =
                this.state.listNama[
                  Math.floor(Math.random() * this.state.listNama.length)
                ])
            }
          </h1>
        </div>
        <hr />
        <div className="cariKata">
          {this.state.listNama.map((dataDiri, key) => (
            <button
              onClick={() => {
                this.ubahKata();
                this.hapusKata(key);
              }}
              class="btnKata"
            >
              {dataDiri}
            </button>
          ))}
        </div>
        <hr />
      </div>
    );
  }
}

export default LifeCycle;
