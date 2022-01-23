
import "../../assets/css/delivery.css";
import "../../assets/css/section_heading.css";
import "../../assets/css/saleoff_tag.css";
import "../../assets/css/comment.css";
import "../../assets/css/tech_details.css";
import "../../assets/css/product_carousel.css";
import "../../assets/css/quantity.css";
import "../../assets/css/product_view.css";
import '../../assets/css/ratings.css'
import '../../assets/css/button_outlined.css'


import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Product from "../widgets/Product";
import { useEffect,useState } from "react";


export const Comment = (props: {
  text: string;
  author: { avatarUrl: string; name: string };
  date: string;
}) => {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img
          className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">{props.author.name}</div>
      </div>

      <div className="Comment-status">
        <div className="Comment-date">{props.date}</div>
        <div className="Comment-rating">
          <Ratings ratingPoint={4.5} />
        </div>
      </div>
      <div className="Comment-text">{props.text}</div>
    </div>
  );
};


const Ratings = (props: {ratingPoint : Number}) => {
  return (
    <div>
      <div className="rating d-flex">
        <div className="rating_point">{props.ratingPoint}</div>
        <div className="stars">
          <div className="star">
            <div className="fas fa-star"></div>
          </div>
          <div className="star">
            <div className="fas fa-star"></div>
          </div>
          <div className="star">
            <div className="fas fa-star"></div>
          </div>
          <div className="star">
            <div className="fas fa-star"></div>
          </div>
          <div className="star">
            <div className="fas fa-star"></div>
          </div>
        </div>
      </div>
    </div>
  );
};



const product = {
  name: "Earpods Bluetooth i12 TWS 5.0 wireless i12 with HIFI sound quality",
  category: "Technology",
  description:
    "The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles ",
  imageUrl: {
    cover: "https://cf.shopee.vn/file/7556e874cf766f3cb340e632c684def1",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: "",
  },
  brand: "No Brand",
  warrantyType: "None",
  price: 499000,
  saleOff: 69,
  stock: 999,
  skuCode: "EPXH121621VNA",
  color: "",
  size: "",
  weight: 500,
  parcelSize: {
    width: 5,
    length: 10,
    height: 5,
  },
  shippingType: "Fast",
  sale: 1,
};

const TechnicalDetails = (props: { name: string; content: string }) => {
  return (
    <div>
      <div className="technical_details ">
        <div className="details detail1">
          <div className="tech_label">{props.name}</div>
          <div className="tech_content">{props.content}</div>
        </div>
      </div>
    </div>
  );
};

const SectionHeading = (props: { name: string }) => {
  return (
    <div>
      <h3 className="heading">{props.name}</h3>
      <div className="line"></div>
    </div>
  );
};
const Quantity = () => {
  return (
    <div>
      <div className="product-quantity">
        <p>Quantity</p>
        <div className="quantity d-flex">
          <div className="qtt-btn decrease">
            <i className="fas fa-minus"></i>
          </div>
          <input type="number" placeholder="0" />
          <div className="qtt-btn increase">
            <i className="fas fa-plus"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
const SaleoffTag = (props: { percent: string }) => {
  return (
    <div>
      <div className="saleoff-tag d-flex ">
        <span className="sale-percent">{props.percent} %</span>
      </div>
    </div>
  );
};

const ButtonGreen = (props: { name: string }) => {
  return (
    <div>
      <div className="button__green">{props.name}</div>
    </div>
  );
};
const ProductView = () => {
  return (
    <div>
      <div className="container mt-4 product_view">
        <h3 className="product-name">
          Earpods Bluetooth i12 TWS 5.0 wireless i12 with HIFI sound quality
        </h3>
        <div className="info">
          <Ratings ratingPoint={4.5} />
          <div className="separator"></div>
          <div className=" review">
            <p>
              <span className="review__quantity">234</span> reviews
            </p>
          </div>
          <div className="separator"></div>

          <div className=" sold">
            <p>
              <span className="sold__quantity">2345</span> sold
            </p>
          </div>
        </div>
        <div className="product-price display-flex align-items-center">
          <div className="price-original ">499.000 VND</div>
          <div className="price-saleoff">299.000 VND</div>
          <SaleoffTag percent="30" />
        </div>
        <Delivery address="123 Street City Country"></Delivery>
        <Quantity></Quantity>

        <div className=" payment-btn d-flex flex-row  ">
          <ButtonGreen name="Add to cart" />
          <ButtonGreen name="Buy Now" />
        </div>
      </div>
    </div>
  );
};

const ProductCarousel = () => {
  const [photos,setPhotos] = useState<Array<String>>([])
  useEffect(()=>{
    const productApi ='http://localhost:9000/api/products'
    const fetchPhoto = async (productId:string) => {

        
      try {
        await fetch(productApi+'/'+productId,{
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          }
        })
        .then(response => {
          return response.json()
        }).then(data => {
          setPhotos(data)
        })
      } catch (error){
        console.log(error)
      }
    }
    fetchPhoto('iiid')
  },[])
  return (
    
    <div className="product-carousel">
      <Carousel showArrows={true} showIndicators={false}>
        ()
        <div className="image">
          <img src="https://cf.shopee.vn/file/7556e874cf766f3cb340e632c684def1" alt="carousel"/>
        </div>
        <div className="image">
          <img src="https://cf.shopee.vn/file/d05bac8361e1ff7ae83bf9855dcde2a3" alt="carousel"/>
        </div>
        <div className="image">
          <img src="https://cf.shopee.vn/file/d05bac8361e1ff7ae83bf9855dcde2a3" alt="carousel"/>
        </div>
        <div className="image">
          <img src="https://cf.shopee.vn/file/b8c36cdcb50d58a62f362fb6cfed124c" alt="carousel"/>
        </div>
        <div className="image">
          <img src="https://cf.shopee.vn/file/b8c36cdcb50d58a62f362fb6cfed124c" alt="carousel"/>
        </div>
        <div className="image">
          <img src="https://cf.shopee.vn/file/b8c36cdcb50d58a62f362fb6cfed124c" alt="carousel"/>
        </div>
      </Carousel>
    </div>
  );
};

const ProductDescription = () => {
  return (
    <div>
      <div
        className="description"
        style={{ paddingLeft: "64px", listStyleType: "none" }}
      >
        <li className="description_text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.Lorem Ipsum is simply dummy text of the printing
          and typesetting industry.Lorem Ipsum is simply dummy text of the
          printing and typesetting industry.Lorem Ipsum is simply dummy text of
          the printing and typesetting industry.
        </li>
      </div>
    </div>
  );
};

const Delivery = (props: { address: string }) => {
  return (
    <div>
      <div className="product-delivery mt-3">
        <p>Delivery</p>
        <div className="delivery-location mt-3">
          <i className="fas fa-map-marker-alt col-sm-1"></i>
          <p className="address">{props.address}</p>
        </div>
        <div className="delivery-fee mt-3 mb-2">
          <i className="fas fa-shipping-fast col-sm-1"></i>
          <p className="fee-reduction">
            Delivery fee is 30% off for over 1000$ orders
          </p>
        </div>
      </div>
    </div>
  );
};
const ProductDetails = () => {
  return (
    <div>
      <div className="container" style={{ marginTop: "80px" }}>
        <div className="product-general-details d-flex mb-5 row">
          <div
            className="col-lg-6 col-md-6 col-sm-12"
            style={{ backgroundColor: "#eee", position: "relative" }}
          >
            <ProductCarousel></ProductCarousel>
            <div
              className="arrow arrow-left"
              style={{ height: "57px", width: "20px" }}
            >
              <i className="fas fa-chevron-left"></i>
            </div>
            <div
              className="arrow arrow-right"
              style={{ height: "57px", width: "20px" }}
            >
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-6 col-sm-12"
            style={{ backgroundColor: "#eee" }}
          >
            <ProductView></ProductView>
          </div>
        </div>
        <div className="product-description mb-5">
          <SectionHeading name="Description" />
          <ProductDescription></ProductDescription>
        </div>
        <div className="product-technical-details mb-5">
          <SectionHeading name="Technical Details" />
          <TechnicalDetails name="Size" content="21x13x96mm" />
          <TechnicalDetails name="Size" content="21x13x96mm" />
          <TechnicalDetails name="Size" content="21x13x96mm" />
          <TechnicalDetails name="Size" content="21x13x96mm" />
          <TechnicalDetails name="Size" content="21x13x96mm" />
        </div>
        <div className="product-reviews mb-5">
          <SectionHeading name="Reviews" />
          <Comment
            text="The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles "
            author={{
              avatarUrl:
                "https://www.meme-arsenal.com/memes/da411f886e81c45d29d745ace4e38644.jpg",
              name: "Jinne Amadiha",
            }}
            date="13/02/21"
          />
          <Comment
            text="SHop uy tín nha mn"
            author={{
              avatarUrl:
                "https://scontent.fhph1-3.fna.fbcdn.net/v/t1.15752-9/263069754_222697600003499_5270332675267797633_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=ae9488&_nc_ohc=HfXTuNBs6YAAX_UtzJl&_nc_ht=scontent.fhph1-3.fna&oh=cff73b463cc4cc0a6d65989e4f4662d7&oe=61CFDEDC",
              name: "Bảy Đuỹ",
            }}
            date="13/02/21"
          />
          <Comment
            text="Thật là tuyệt vời. Hàng đẹp"
            author={{
              avatarUrl:
                "https://scontent.fhph1-3.fna.fbcdn.net/v/t1.15752-9/263354888_231386835728074_4400531563191201065_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_ohc=aMJ2E846ISEAX80eLT6&tn=kKma8D0_hc0JfFDg&_nc_ht=scontent.fhph1-3.fna&oh=eccaac731ea964168fd7ab552ed87514&oe=61CE800E",
              name: "Đỗ viết Thành",
            }}
            date="13/02/21"
          />
          <Comment
            text="Hàng xịn quá đi"
            author={{
              avatarUrl:
                "https://scontent.fhph2-1.fna.fbcdn.net/v/t1.15752-9/263488901_623825802144575_234607901129164232_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=Wvs_xiujVmcAX8GnK0z&tn=kKma8D0_hc0JfFDg&_nc_ht=scontent.fhph2-1.fna&oh=3657c69533d6d1217f0dc30518640200&oe=61CF21B9",
              name: "Tuấn Duồi",
            }}
            date="13/02/21"
          />
          <Comment
            text="Tuyệt vời quá chị"
            author={{
              avatarUrl:
                "https://scontent.fhph2-1.fna.fbcdn.net/v/t1.15752-9/263845775_1050351005744234_2762821369476003919_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=ae9488&_nc_ohc=CCa01S65cogAX8G31C8&_nc_ht=scontent.fhph2-1.fna&oh=e4e541ee27e01873a6dd93f4ef079aa4&oe=61D06FF6",
              name: "Ninh Vinh",
            }}
            date="13/02/21"
          />
          <Comment
            text="dùng thích lắm shop"
            author={{
              avatarUrl:
                "https://scontent.fhph1-3.fna.fbcdn.net/v/t1.15752-9/263731666_4480462095394525_5413904243024933784_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_ohc=8eTMp1M7gNEAX9tRDGJ&_nc_ht=scontent.fhph1-3.fna&oh=76782e85a17de40962533a48089df029&oe=61CFB020",
              name: "Lê Mẹc Si",
            }}
            date="13/02/21"
          />
          <div className="d-flex align-items-center justify-content-center">
            <div className="button__outlined" >Show more</div>
          </div>
        </div>
        <div className="product-others ">
          <SectionHeading name="Similar Products" />
          <div className="others row ">
            <Product product= {product}></Product>
            <Product product= {product}></Product>
            <Product product= {product}></Product>
            <Product product= {product}></Product>
            <Product product= {product}></Product>
            <Product product= {product}></Product>
          </div>
          <div className="d-flex align-items-center justify-content-center mb-5">
            <button className="button__outlined" name="Show more" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
