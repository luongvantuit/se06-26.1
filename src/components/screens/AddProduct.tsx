import SideNav from "../widgets/SideNav";
import "../../assets/css/add_product.css";
import "../../assets/css/button_green.css";
import add from "../../assets/img/plus_circle.svg";
import "../../assets/css/add_image.css";
import "../../assets/js/createProduct";


export const AddImage = () => {
  return (
    <div className="add-image d-flex align-items-center justify-content-center">
      <input type="file" id="fileUpload" style={{ display: "none" }} />
      <label htmlFor="fileUpload">
        <img src={add} alt="product" />
      </label>
    </div>
  );
};

const AddProduct = () => {
  // var productNameRef = useRef("");
  // var categoryRef = useRef("");
  // var descriptionRef = useRef("");
  // var priceRef = useRef<Number>();
  // var skuRef = useRef("");
  return (
    <div>
      <SideNav></SideNav>
      <div className="add_product">
        <div className="productInfo">
          <h3>Sale Information</h3>
          <div className="form-group row">
            <label htmlFor="productName" className="col-sm-2 col-form-label">
              Product Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="productName"
                value=""
                // ref= {productNameRef}
                placeholder="Enter product name"
              ></input>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="categories" className="col-sm-2 col-form-label">
              Category
            </label>
            <div className="col-sm-10">
              <select className="form-control" id="categories">
                <option>Men Clothes</option>
                <option>Woman Clothes</option>
                <option>Health</option>
                <option>Fashion Item</option>
                <option>Household application</option>
                <option>Travel </option>
                <option>Phones </option>
                <option>Laptop,PC </option>
                <option>Gaming and Console </option>
                <option>Camera and Flycams </option>
                <option>Sport </option>
                <option>Hobbies </option>
                <option>Oto </option>
                <option>Motorbike </option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="description" className=" col-sm-2 col-form-label">
              Description
            </label>
            <div className="col-sm-10">
              <textarea
                name="Description"
                id="description"
                className="form-control"
                rows={10}
              ></textarea>
            </div>
          </div>
          <div className="form-group row">
            <label className=" col-sm-2 col-form-label">Product Image</label>
            <div className="col-sm-10 d-flex flex-row align-items-center">
              <div
                className="d-flex align-items-center row"
                style={{ marginTop: "0" }}
              >
                <div className="col-3 col-md-2">
                  <AddImage></AddImage>
                </div>
                <div className="col-3 col-md-2">
                  <AddImage></AddImage>
                </div>
                <div className="col-3 col-md-2">
                  <AddImage></AddImage>
                </div>
                <div className="col-3 col-md-2">
                  <AddImage></AddImage>
                </div>
                <div className="col-3 col-md-2">
                  <AddImage></AddImage>
                </div>
                <div className="col-3 col-md-2">
                  <AddImage></AddImage>
                </div>
                <div className="col-3 col-md-2">
                  <AddImage></AddImage>
                </div>
                <div className="col-3 col-md-2">
                  <AddImage></AddImage>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="brand" className="col-sm-2 col-form-label">
              Brand
            </label>
            <div className="col-sm-10">
              <select className="form-control" id="brand">
                <option>Brand</option>
                <option>Brand</option>
                <option>Brand</option>
                <option>Brand</option>
                <option>Brand</option>
                <option>Brand</option>
                <option>Brand</option>
                <option>Brand</option>
                <option>Brand</option>
                <option>Brand </option>
                <option>Brand </option>
                <option>Brand</option>
                <option>Brand </option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="warranty" className="col-sm-2 col-form-label">
              Warranty
            </label>
            <div className="col-sm-10">
              <select className="form-control" id="warranty">
                <option>No warranty </option>
                <option>Shop warranty </option>
                <option>Brand warranty </option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="price" className="col-sm-2 col-form-label">
              Price
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="price"
                value=""
                placeholder="Enter price"
              ></input>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="stock" className="col-sm-2 col-form-label">
              Stock
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="stock"
                value=""
                placeholder="Enter stock"
              ></input>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="skuCode" className="col-sm-2 col-form-label">
              SKU code
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="skuCode"
                value=""
                placeholder="Enter SKU code"
              ></input>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="size" className="col-sm-2 col-form-label">
              Size
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="size"
                value=""
                placeholder="Enter size"
              ></input>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="color" className="col-sm-2 col-form-label">
              Color
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="color"
                value=""
                placeholder="Enter color"
              ></input>
            </div>
          </div>
        </div>
        <div className="productInfo" style={{ marginTop: "64px" }}>
          <h3 className="classification">Product Classofocation</h3>
          <div className="addClassification"></div>
        </div>
        <div className="productInfo" style={{ marginTop: "64px" }}>
          <h3>Shipment Information</h3>

          <div className="form-group row">
            <label htmlFor="weight" className="col-sm-2 col-form-label">
              Weight
            </label>
            <div className="col-sm-10">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Weight(gr)"
                  aria-label="Weight(gr)"
                  aria-describedby="basic-addon2"
                  id="weight"
                ></input>
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon2">
                    gr
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="skuCode" className="col-sm-2 col-form-label">
              Parcel size
            </label>
            <div className="col-sm-10">
              <div className="d-flex flex-row align-items-center justify-content-between">
                <div className="col-sm-3">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Width"
                      aria-label="Width"
                      aria-describedby="basic-addon2"
                      id="width"
                    ></input>
                    <div className="input-group-append">
                      <span className="input-group-text" id="basic-addon2">
                        cm
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Length"
                      aria-label="Length"
                      aria-describedby="basic-addon2"
                      id="length"
                    ></input>
                    <div className="input-group-append">
                      <span className="input-group-text" id="basic-addon2">
                        cm
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Height"
                      aria-label="Height"
                      aria-describedby="basic-addon2"
                      id="height"
                    ></input>
                    <div className="input-group-append">
                      <span className="input-group-text" id="basic-addon2">
                        cm
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="d-flex align-items-center justify-content-center mt-4"
          style={{
            marginLeft: "128px",
            marginRight: "128px",
            padding: "32px",
            marginTop: "64px",
          }}
        >
          <div className="button__green" id="createProduct">
            Submit
          </div>
          <div className="button__green" id="cancelCreateProduct">
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
