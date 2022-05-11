import React from "react";
import DetailsThumb from "../DetailsThumb";
import "./product.css";

const data = [
  {
    id: 1,
    name: "Vanilla Xtacy",
    src: [
      "https://i.postimg.cc/cCWPpJzh/AFA13-E31-3-D2-A-43-A0-90-BB-017563-FB0-A6-D.jpg",
      "https://i.postimg.cc/8cktdf32/IMG-1036.jpg",
      "https://i.postimg.cc/tg0kSMwt/IMG-1871.png",
      "https://i.postimg.cc/kG5vR3R9/IMG-9934-Facetune-15-02-2022-10-27-08.jpg",
      "https://i.postimg.cc/05tfRQhN/IMG-9942-Facetune-15-02-2022-10-07-07.jpg",
      "https://i.postimg.cc/MGb7sKyq/photo-output.jpg",
    ],
    description:
      "With The vanillé Xtacy you get An enticing, medley of Sicilian lime and Caramel as an opener…trailing into a heart bursting with Chinese Jasmine, and Amber. The Base notes include Vanilla, soft Powdery musk and warm woods with hints of patchouli.",
    price: "€22",
    size: "100ml",
  },
  {
    id: 2,
    name: "Hawaiian sunrise",
    src: [
      "https://i.postimg.cc/7P7m8mHB/IMG-9894-Facetune-07-02-2022-04-40-54.jpg",
      "https://i.postimg.cc/yNdvMKx9/IMG-0878.jpg",
      "https://i.postimg.cc/hvxC20j5/795-F499-A-F844-43-DB-AC6-D-93-C5-C6899-DEE.jpg",
      "https://i.postimg.cc/NMX7tjcy/IMG-0898.jpg",
      "https://i.postimg.cc/gJPQ9Y8X/IMG-0857-1.jpg",
      "https://i.postimg.cc/Y06zQ43r/45077-C35-93-DE-409-A-838-F-729-E6-A7-A4702.jpg",
    ],
    description:
      "With C98's Hawaiian Sunrise, you'll get a frolic forest of evergreens with new needles, falling among white aromatic Cedar and Musk, with a whisper of citrus from the Bergamot and Lemon. When lit, it creates a relaxing holiday atmosphere.",
    price: "€22",
    size: "114g",
  },
];

class Arinze extends React.Component {
  state = {
    products: data,
    index: 0,
  };

  myRef = React.createRef();

  handleTab = (index) => {
    this.setState({ index: index });
    const images = this.myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount() {
    const { index } = this.state;
    this.myRef.current.children[index].className = "active";
  }

  render() {
    const { products, index } = this.state;
    return (
      <div className="app" id="shop">
        {products.map((item) => (
          <div className="details" key={item._id}>
            <div className="big-img" data-aos="flip-left" data-aos-delay="400">
              <img src={item.src[index]} alt="" />
            </div>

            <div className="box" data-aos="zoom-out-up" data-aos-delay="400">
              <div className="row">
                <h2>{item.name}</h2>
                <span>{item.price}</span>
              </div>

              <p>{item.description}</p>
              <p>Size: {item.size}</p>

              <DetailsThumb
                images={item.src}
                tab={this.handleTab}
                myRef={this.myRef}
              />
              <button className="cart">Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Arinze;
