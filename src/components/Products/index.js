// import React, { useState, createRef, useEffect } from "react";
// import "./product.css";
// const data = [
//   {
//     id: 1,
//     name: "Vanilla Xtacy",
//     image: [
//       {
//         id: 1,
//         src: require("../images/Givr.png"),
//       },
//       {
//         id: 2,
//         src: require("../images/Movr.png"),
//       },
//       {
//         id: 3,
//         src: require("../images/Zara.png"),
//       },
//     ],
//     images: [
//       "https://i.postimg.cc/7h6m3Vk7/uniswap.png",
//       "https://post.healthline.com/wp-content/uploads/2020/09/kidney-beans-1200x628-facebook-1200x628.jpg",
//     ],
//     description:
//       "With The vanillé Xtacy you get An enticing, medley of Sicilian lime and Caramel as an opener…trailing into a heart bursting with Chinese Jasmine, and Amber. The Base notes include Vanilla, soft Powdery musk and warm woods with hints of patchouli.",
//     price: "€22",
//   },
//   {
//     id: 2,
//     name: "Hawaiian sunrise",
//     image: [
//       {
//         id: 1,
//         src: require("../images/Givr.png"),
//       },
//       {
//         id: 2,
//         src: require("../images/Movr.png"),
//       },
//       {
//         id: 3,
//         src: require("../images/Zara.png"),
//       },
//     ],
//     images: [
//       "https://i.postimg.cc/7P7m8mHB/IMG-9894-Facetune-07-02-2022-04-40-54.jpg",
//       "https://i.postimg.cc/yNdvMKx9/IMG-0878.jpg",
//       "https://i.postimg.cc/hvxC20j5/795-F499-A-F844-43-DB-AC6-D-93-C5-C6899-DEE.jpg",
//       "https://i.postimg.cc/NMX7tjcy/IMG-0898.jpg",
//       "https://i.postimg.cc/gJPQ9Y8X/IMG-0857-1.jpg",
//     ],
//     description:
//       "With C98's Hawaiian Sunrise, you'll get a frolic forest of evergreens with new needles, falling among white aromatic Cedar and Musk, with a whisper of citrus from the Bergamot and Lemon. When lit, it creates a relaxing holiday atmosphere.",
//     price: "€22",
//   },
//   {
//     id: 3,
//     name: "Case study for Mover App which was designed to help people move their properties without struggle.",
//     image: [
//       {
//         id: 1,
//         src: require("../images/Givr.png"),
//       },
//       {
//         id: 2,
//         src: require("../images/Movr.png"),
//       },
//       {
//         id: 3,
//         src: require("../images/Zara.png"),
//       },
//     ],
//     images: [
//       "https://i.postimg.cc/7h6m3Vk7/uniswap.png",
//       "https://post.healthline.com/wp-content/uploads/2020/09/kidney-beans-1200x628-facebook-1200x628.jpg",
//     ],
//     link: "https://www.behance.net/gallery/132577067/Case-Study-for-a-relocation-app-project",
//     caseStudy:
//       "https://drive.google.com/file/d/1RRuck-v45xS_ABtY2UXEqj7QTuX3ndaL/view",
//   },
// ];

// function Products() {
//   const [product, setProduct] = useState(data);
//   const [index, setIndex] = useState();
//   const myRef = createRef();

//   const handleTab = (index) => {
//     setIndex(index);
//     const images = myRef.current.children;
//     for (let i = 0; i < images.length; i++) {
//       images[i].className = images[i].className.replace("active", "");
//     }
//     images[index].className = "active";
//   };

//   useEffect(() => {
//     const index = index;
//     myRef.current.children[index].className = "active";
//   }, []);

//   console.log(product[0].image[0]);
//   return (
//     <div className="productContainer">
//       <div className="products">
//         {product.map((cur, i) => (
//           <div className="details">
//             <div className="big-img">
//               <img src={cur.images[0]} alt="" />
//             </div>
//             <div className="box">
//               <div className="row">
//                 <h2>{cur.name}</h2>
//                 <span>{cur.price}</span>
//               </div>
//               <p>{cur.description}</p>
//               <div className="thumb">
//                 {cur.images.map((item) => (
//                   <img src={item} alt="" />
//                 ))}
//               </div>
//               <button className="cart">Add to Cart</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Products;
