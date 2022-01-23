import "../../assets/css/user_order.css";

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
  size: "",
  color: "",
  weight: 500,
  parcelSize: {
    width: 5,
    length: 10,
    height: 5,
  },
  shippingType: "Fast",
  sale: 1,
};
const listOrders = [
  {
    product: product,
    customer: "lincoln@23",
    payment: product.price,
    status: "Delivered",
    quantity: 1,
    action: "View details",
  },
  {
    product: product,
    customer: "padspas@23",
    payment: product.price,
    status: "Cancelled",
    quantity: 2,
    action: "View details",
  },
  {
    product: product,
    customer: "ipqwen@23",
    payment: product.price,
    status: "Returned",
    quantity: 2,
    action: "View details",
  },
];

const UserOrder = () => {
  return (
    <div className="userOrder">
      {/* <UserNav></UserNav> */}
      <div >
        <h2 className="mb-4">My Orders</h2>
        {/* Tìm kiếm đơn mua */}
        <div className="order-search mb-4">
          <i className="fas fa-search"></i>
          <input
            className="order-search-input"
            type="text"
            name=""
            id="orderSearch"
            placeholder="Search your orders by Product Name, Order ID or Shop"
          />
        </div>
        {/* Phân loại đơn mua theo trạng thái */}
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              className="nav-link active"
              id="nav-all-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-all"
              type="button"
              role="tab"
              aria-controls="nav-all"
              aria-selected="true"
            >
              All
            </button>
            <button
              className="nav-link"
              id="nav-delivered-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-delivered"
              type="button"
              role="tab"
              aria-controls="nav-delivered"
              aria-selected="false"
            >
              Delivering
            </button>
            <button
              className="nav-link"
              id="nav-cancelled-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-cancelled"
              type="button"
              role="tab"
              aria-controls="nav-cancelled"
              aria-selected="false"
            >
              Delivered
            </button>
            <button
              className="nav-link"
              id="nav-return-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-return"
              type="button"
              role="tab"
              aria-controls="nav-return"
              aria-selected="false"
            >
              Cancelled
            </button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-all"
            role="tabpanel"
            aria-labelledby="nav-all-tab"
          >
            <div className="userOrdersList">
              <UserOrderListItem order={listOrders[1]}></UserOrderListItem>
              <UserOrderListItem order={listOrders[0]}></UserOrderListItem>
              <UserOrderListItem order={listOrders[1]}></UserOrderListItem>
              <UserOrderListItem order={listOrders[1]}></UserOrderListItem>
              <UserOrderListItem order={listOrders[1]}></UserOrderListItem>
              <UserOrderListItem order={listOrders[1]}></UserOrderListItem>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-delivered"
            role="tabpanel"
            aria-labelledby="nav-delivered-tab"
          >
            <div className="userOrdersList"></div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-cancelled"
            role="tabpanel"
            aria-labelledby="nav-cancelled-tab"
          >
            <div className="userOrdersList"></div>

          </div>
          <div
            className="tab-pane fade"
            id="nav-returned"
            role="tabpanel"
            aria-labelledby="nav-returned-tab"
          >
            <div className="userOrdersList"></div>

          </div>
        </div> 
        <div className="table-resposive-md"></div>
      </div>
    </div>
  );
};

const UserOrderListItem = (props: any) => {
  return (
    <div className="UserOrderListItem mt-5">
      <div className="order-header">
        <div className="shop  d-flex align-items-center">
        <p className="shop-name">SE06</p>
        <div className="view-shop d-flex align-items-center"><a href="/shop" >View Shop</a></div>
        </div>
      </div>
      <div className="line" style={{marginBottom:'16px',backgroundColor:'#aaa'}}></div>
      <div className="order-body d-flex align-items-center">
        <div className="product d-flex align-items-center">
          <div className="product-img">
            <img
              src={props.order.product.imageUrl.cover}
              alt={props.order.product.name}
              width={100}
              height={100}
            />
          </div>
          <div className="d-flex align-items-start flex-column" style={{paddingLeft : '16px'}}>
          <p className="product-name" style={ {fontWeight:'600'}}>{props.order.product.name}</p>
          <p className="classification" style={{color : 'rgba(0,0,0,.54)'}}>Classification: {product.size},{product.color}</p>
          <p className="quantity">x {props.order.quantity}</p>
          </div>
        </div>
        <div className="payment d-flex">
          <p>Total : {props.order.payment}</p>
        </div>
        <p className="order-status ">{props.order.status}</p>

      </div>
      
    </div>
  );
};
export default UserOrder;
