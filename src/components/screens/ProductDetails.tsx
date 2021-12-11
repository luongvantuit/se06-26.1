import React from "react";
import ProductCarousel from "../widgets/ProductDetails/ProductCarousel";
import ProductDescription from "../widgets/ProductDetails/ProductDescription";
import TechnicalDetails from "../widgets/ProductDetails/TechnicalDetails";
import Comment from "../widgets/ProductDetails/Comment";
import ProductOutline from "../widgets/ProductDetails/ProductOutline";
import ProductView from "../widgets/ProductDetails/ProductView";
import SectionHeading from "../widgets/ProductDetails/SectionHeading";
import ButtonOutlined from '../widgets/ButtonOutlined'
const ProductDetails = () => {
  return (
    <div>
      <div className="container" style={{marginTop:'80px'}}>
        <div className="product-general-details d-flex mb-5 row">
          <div className="col-lg-6 col-md-6 col-sm-12" style={{backgroundColor:'#eee',position:'relative'}}>
            <ProductCarousel ></ProductCarousel>
            <div className="arrow arrow-left" style={{height:'57px',width:'20px'}}>
              <i className="fas fa-chevron-left"></i>
            </div>
            <div className="arrow arrow-right" style={{height:'57px',width:'20px'}}>
            <i className="fas fa-chevron-right"></i>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12" style={{backgroundColor:'#eee'}}>
          <ProductView></ProductView>
          </div>
        </div>
        <div className="product-description mb-5">
          <SectionHeading name="Description" />
          <ProductDescription></ProductDescription>
        </div>
        <div className="product-technical-details mb-5">
          <SectionHeading name="Technical Details" />
          <TechnicalDetails name='Size' content='21x13x96mm'/>
          <TechnicalDetails name='Size' content='21x13x96mm'/>
          <TechnicalDetails name='Size' content='21x13x96mm'/>
          <TechnicalDetails name='Size' content='21x13x96mm'/>
          <TechnicalDetails name='Size' content='21x13x96mm'/>
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
            <ButtonOutlined name='Show more'/>
          </div>
        </div>
        <div className="product-others ">
          <SectionHeading name="Similar Products" />
          <div className="others row ">
            <ProductOutline></ProductOutline>
            <ProductOutline></ProductOutline>
            <ProductOutline></ProductOutline>
            <ProductOutline></ProductOutline>
            <ProductOutline></ProductOutline>
            <ProductOutline></ProductOutline>
          </div>
          <div className="d-flex align-items-center justify-content-center mb-5">
            <ButtonOutlined name='Show more'/>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ProductDetails;
