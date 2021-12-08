import React from "react"
import '../../assets/css/category.css'
import laptop from '../../assets/img/home/laptop_1.jpg'
import banner_category from '../../assets/img/home/cate-banner.jpg'
import ads from '../../assets/img/home/ads.jpg'

export default function Category(){
    return(
        <div className="container wrapper-category">
          <div className="cate-banner">
            <img src={banner_category} />
          </div>
          <div className="bread-crumbs">
            <a className="crumb1">Home</a>
            <i className="fas fa-angle-right" />
            <a className="crumb1">Laptops</a>
          </div>
          <h4 className="category-name">Laptop (20)</h4>
          <div>
            {/* Button trigger modal */}
            <button type="button" className="btn btn-primary btn-modal" data-toggle="modal" data-target="#exampleModalCenter">
              Filter
            </button>
            {/* Modal */}
            <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="filters filters-modal">
                    <p className="p_filters">Filters</p>
                    <button>Clear filter</button>
                    <div className="filter-type">
                      <div className="filter-title">
                        <p>Category</p>
                        <i className="fas fa-chevron-up" />
                      </div>
                      <div className="filter-item">
                        <p>CUSTOM PCS</p>
                        <p>15</p>
                      </div>
                      <div className="filter-item">
                        <p>MSI ALL-IN-ONE PCS</p>
                        <p>20</p>
                      </div>
                      <div className="filter-item">
                        <p>Dell</p>
                        <p>35</p>
                      </div>
                    </div>
                    <div className="filter-type">
                      <div className="filter-title">
                        <p>Price</p>
                        <i className="fas fa-chevron-up" />
                      </div>
                      <div className="filter-item">
                        <p>$0.00 - $1,000.00</p>
                        <p>15</p>
                      </div>
                      <div className="filter-item">
                        <p>$1,000.00 - $2,000.00</p>
                        <p>20</p>
                      </div>
                      <div className="filter-item">
                        <p>$2,000.00 - $3,000.00</p>
                        <p>35</p>
                      </div>
                      <div className="filter-item">
                        <p>$3,000.00 - $4,000.00</p>
                        <p>15</p>
                      </div>
                      <div className="filter-item">
                        <p>$4,000.00 - $5,000.00</p>
                        <p>20</p>
                      </div>
                      <div className="filter-item">
                        <p>$5,000.00 And Above</p>
                        <p>35</p>
                      </div>
                    </div>
                    <div className="filter-type">
                      <div className="filter-title">
                        <p>Color</p>
                        <i className="fas fa-chevron-up" />
                      </div>
                      <div className="btn-color">
                        <button className="color color-1" />
                        <button className="color color-2" />
                      </div>
                    </div>
                    <div className="filter-type">
                      <div className="filter-title">
                        <p>Filter Name</p>
                        <i className="fas fa-chevron-up" />
                      </div>
                      <button className="apply-filters">Apply Filters (2)</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content d-flex">
            <div className="content-left">
                    <a className="back">
                      <i className="fas fa-chevron-left" />
                      Back
                    </a>
                    <div className="filters">
                      <p className="p_filters">Filters</p>
                      <button>Clear filter</button>
                      <div className="filter-type">
                        <div className="filter-title">
                          <p>Category</p>
                          <i className="fas fa-chevron-up" />
                        </div>
                        <div className="filter-item">
                          <p>CUSTOM PCS</p>
                          <p>15</p>
                        </div>
                        <div className="filter-item">
                          <p>MSI ALL-IN-ONE PCS</p>
                          <p>20</p>
                        </div>
                        <div className="filter-item">
                          <p>Dell</p>
                          <p>35</p>
                        </div>
                      </div>
                      <div className="filter-type">
                        <div className="filter-title">
                          <p>Price</p>
                          <i className="fas fa-chevron-up" />
                        </div>
                        <div className="filter-item">
                          <p>$0.00 - $1,000.00</p>
                          <p>15</p>
                        </div>
                        <div className="filter-item">
                          <p>$1,000.00 - $2,000.00</p>
                          <p>20</p>
                        </div>
                        <div className="filter-item">
                          <p>$2,000.00 - $3,000.00</p>
                          <p>35</p>
                        </div>
                        <div className="filter-item">
                          <p>$3,000.00 - $4,000.00</p>
                          <p>15</p>
                        </div>
                        <div className="filter-item">
                          <p>$4,000.00 - $5,000.00</p>
                          <p>20</p>
                        </div>
                        <div className="filter-item">
                          <p>$5,000.00 And Above</p>
                          <p>35</p>
                        </div>
                      </div>
                      <div className="filter-type">
                        <div className="filter-title">
                          <p>Color</p>
                          <i className="fas fa-chevron-up" />
                        </div>
                        <div className="btn-color">
                          <button className="color color-1" />
                          <button className="color color-2" />
                        </div>
                      </div>
                      <div className="filter-type">
                        <div className="filter-title">
                          <p>Filter Name</p>
                          <i className="fas fa-chevron-up" />
                        </div>
                        <button className="apply-filters">Apply Filters (2)</button>
                      </div>
                    </div>
                    <img src={ads} />
            </div>
            <div className="content-right">
              <div className="sort-show d-flex">
                <small>Items 1-35 of 61</small>
                <div className="sort d-flex">
                  <div className="sort-show-item sort-by d-flex">
                    <small>Sort By: </small>
                    <select name="sort" id="sort">
                      <option value="position">Position</option>
                      <option value="price">Price</option>
                    </select>
                  </div>
                  <div className="sort-show-item show d-flex">
                    <small>Show: </small>
                    <select name="sort" id="show">
                      <option value="24_per_page">5 per page</option>
                      <option value="24_per_page">10 per page</option>
                      <option value="24_per_page">15 per page</option>
                      <option value="24_per_page">20 per page</option>
                      <option value="24_per_page">25 per page</option>
                      <option value="24_per_page">30 per page</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="current-cate d-flex">
                <div className="current-cate-item d-flex">
                  <p>CUSTOM PCS</p>
                  <small>(24)</small>
                  <i className="fas fa-times-circle" />
                </div>
                <button className="clear-all">Clear All</button>
              </div>
              <div className="row row-1">
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 product-category-page product product-1">
                  <div className="in-stock d-flex">
                    <i className="fa fa-check-circle" />
                    <p><a>in stock</a></p>
                  </div>
                  <div className="img-product">
                    <img src={laptop} />
                  </div>
                  <div className="evaluate d-flex">
                    <div className="star">
                      <span className="fa fa-star checked checked1" />
                      <span className="fa fa-star checked checked2" />
                      <span className="fa fa-star checked checked3" />
                      <span className="fa fa-star checked checked4" />
                      <span className="fa fa-star checked checked5" />
                    </div>
                    <p><a>Reviews (4)</a></p>
                  </div>
                  <h5><a>Acer Aspire 5 A515-46-R14K Slim Laptop</a></h5>
                  <div className="price price-sold d-flex">
                    <p className="cost">$499.00</p>
                    <p className="sold">Đã bán: 30</p>
                  </div>
                  <div className="price price-address d-flex">
                    <h4 className="sale">$499.00</h4>
                    <a className="address">Hà Nội</a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 product-category-page product product-2">
                  <div className="in-stock d-flex">
                    <i className="fa fa-check-circle" />
                    <p><a>in stock</a></p>
                  </div>
                  <div className="img-product">
                    <img src={laptop} />
                  </div>
                  <div className="evaluate d-flex">
                    <div className="star">
                      <span className="fa fa-star checked checked1" />
                      <span className="fa fa-star checked checked2" />
                      <span className="fa fa-star checked checked3" />
                      <span className="fa fa-star checked checked4" />
                      <span className="fa fa-star checked checked5" />
                    </div>
                    <p><a>Reviews (4)</a></p>
                  </div>
                  <h5><a>Acer Aspire 5 A515-46-R14K Slim Laptop</a></h5>
                  <div className="price price-sold d-flex">
                    <p className="cost">$499.00</p>
                    <p className="sold">Đã bán: 30</p>
                  </div>
                  <div className="price price-address d-flex">
                    <h4 className="sale">$499.00</h4>
                    <a className="address">Hà Nội</a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 product-category-page product product-3">
                  <div className="in-stock d-flex">
                    <i className="fa fa-check-circle" />
                    <p><a>in stock</a></p>
                  </div>
                  <div className="img-product">
                    <img src={laptop} />
                  </div>
                  <div className="evaluate d-flex">
                    <div className="star">
                      <span className="fa fa-star checked checked1" />
                      <span className="fa fa-star checked checked2" />
                      <span className="fa fa-star checked checked3" />
                      <span className="fa fa-star checked checked4" />
                      <span className="fa fa-star checked checked5" />
                    </div>
                    <p><a>Reviews (4)</a></p>
                  </div>
                  <h5><a>Acer Aspire 5 A515-46-R14K Slim Laptop</a></h5>
                  <div className="price price-sold d-flex">
                    <p className="cost">$499.00</p>
                    <p className="sold">Đã bán: 30</p>
                  </div>
                  <div className="price price-address d-flex">
                    <h4 className="sale">$499.00</h4>
                    <a className="address">Hà Nội</a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 product-category-page product product-4">
                  <div className="in-stock d-flex">
                    <i className="fa fa-check-circle" />
                    <p><a>in stock</a></p>
                  </div>
                  <div className="img-product">
                    <img src={laptop} />
                  </div>
                  <div className="evaluate d-flex">
                    <div className="star">
                      <span className="fa fa-star checked checked1" />
                      <span className="fa fa-star checked checked2" />
                      <span className="fa fa-star checked checked3" />
                      <span className="fa fa-star checked checked4" />
                      <span className="fa fa-star checked checked5" />
                    </div>
                    <p><a>Reviews (4)</a></p>
                  </div>
                  <h5><a>Acer Aspire 5 A515-46-R14K Slim Laptop</a></h5>
                  <div className="price price-sold d-flex">
                    <p className="cost">$499.00</p>
                    <p className="sold">Đã bán: 30</p>
                  </div>
                  <div className="price price-address d-flex">
                    <h4 className="sale">$499.00</h4>
                    <a className="address">Hà Nội</a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 product-category-page product product-5">
                  <div className="in-stock d-flex">
                    <i className="fa fa-check-circle" />
                    <p><a>in stock</a></p>
                  </div>
                  <div className="img-product">
                    <img src={laptop} />
                  </div>
                  <div className="evaluate d-flex">
                    <div className="star">
                      <span className="fa fa-star checked checked1" />
                      <span className="fa fa-star checked checked2" />
                      <span className="fa fa-star checked checked3" />
                      <span className="fa fa-star checked checked4" />
                      <span className="fa fa-star checked checked5" />
                    </div>
                    <p><a>Reviews (4)</a></p>
                  </div>
                  <h5><a>Acer Aspire 5 A515-46-R14K Slim Laptop</a></h5>
                  <div className="price price-sold d-flex">
                    <p className="cost">$499.00</p>
                    <p className="sold">Đã bán: 30</p>
                  </div>
                  <div className="price price-address d-flex">
                    <h4 className="sale">$499.00</h4>
                    <a className="address">Hà Nội</a>
                  </div>
                </div>
              </div>
              <div className="row row-2">
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 product-category-page product product-1">
                  <div className="in-stock d-flex">
                    <i className="fa fa-check-circle" />
                    <p><a>in stock</a></p>
                  </div>
                  <div className="img-product">
                    <img src={laptop} />
                  </div>
                  <div className="evaluate d-flex">
                    <div className="star">
                      <span className="fa fa-star checked checked1" />
                      <span className="fa fa-star checked checked2" />
                      <span className="fa fa-star checked checked3" />
                      <span className="fa fa-star checked checked4" />
                      <span className="fa fa-star checked checked5" />
                    </div>
                    <p><a>Reviews (4)</a></p>
                  </div>
                  <h5><a>Acer Aspire 5 A515-46-R14K Slim Laptop</a></h5>
                  <div className="price price-sold d-flex">
                    <p className="cost">$499.00</p>
                    <p className="sold">Đã bán: 30</p>
                  </div>
                  <div className="price price-address d-flex">
                    <h4 className="sale">$499.00</h4>
                    <a className="address">Hà Nội</a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 product-category-page product product-2">
                  <div className="in-stock d-flex">
                    <i className="fa fa-check-circle" />
                    <p><a>in stock</a></p>
                  </div>
                  <div className="img-product">
                    <img src={laptop} />
                  </div>
                  <div className="evaluate d-flex">
                    <div className="star">
                      <span className="fa fa-star checked checked1" />
                      <span className="fa fa-star checked checked2" />
                      <span className="fa fa-star checked checked3" />
                      <span className="fa fa-star checked checked4" />
                      <span className="fa fa-star checked checked5" />
                    </div>
                    <p><a>Reviews (4)</a></p>
                  </div>
                  <h5><a>Acer Aspire 5 A515-46-R14K Slim Laptop</a></h5>
                  <div className="price price-sold d-flex">
                    <p className="cost">$499.00</p>
                    <p className="sold">Đã bán: 30</p>
                  </div>
                  <div className="price price-address d-flex">
                    <h4 className="sale">$499.00</h4>
                    <a className="address">Hà Nội</a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 product-category-page product product-3">
                  <div className="in-stock d-flex">
                    <i className="fa fa-check-circle" />
                    <p><a>in stock</a></p>
                  </div>
                  <div className="img-product">
                    <img src={laptop} />
                  </div>
                  <div className="evaluate d-flex">
                    <div className="star">
                      <span className="fa fa-star checked checked1" />
                      <span className="fa fa-star checked checked2" />
                      <span className="fa fa-star checked checked3" />
                      <span className="fa fa-star checked checked4" />
                      <span className="fa fa-star checked checked5" />
                    </div>
                    <p><a>Reviews (4)</a></p>
                  </div>
                  <h5><a>Acer Aspire 5 A515-46-R14K Slim Laptop</a></h5>
                  <div className="price price-sold d-flex">
                    <p className="cost">$499.00</p>
                    <p className="sold">Đã bán: 30</p>
                  </div>
                  <div className="price price-address d-flex">
                    <h4 className="sale">$499.00</h4>
                    <a className="address">Hà Nội</a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 product-category-page product product-4">
                  <div className="in-stock d-flex">
                    <i className="fa fa-check-circle" />
                    <p><a>in stock</a></p>
                  </div>
                  <div className="img-product">
                    <img src={laptop} />
                  </div>
                  <div className="evaluate d-flex">
                    <div className="star">
                      <span className="fa fa-star checked checked1" />
                      <span className="fa fa-star checked checked2" />
                      <span className="fa fa-star checked checked3" />
                      <span className="fa fa-star checked checked4" />
                      <span className="fa fa-star checked checked5" />
                    </div>
                    <p><a>Reviews (4)</a></p>
                  </div>
                  <h5><a>Acer Aspire 5 A515-46-R14K Slim Laptop</a></h5>
                  <div className="price price-sold d-flex">
                    <p className="cost">$499.00</p>
                    <p className="sold">Đã bán: 30</p>
                  </div>
                  <div className="price price-address d-flex">
                    <h4 className="sale">$499.00</h4>
                    <a className="address">Hà Nội</a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 product-category-page product product-5">
                  <div className="in-stock d-flex">
                    <i className="fa fa-check-circle" />
                    <p><a>in stock</a></p>
                  </div>
                  <div className="img-product">
                    <img src={laptop} />
                  </div>
                  <div className="evaluate d-flex">
                    <div className="star">
                      <span className="fa fa-star checked checked1" />
                      <span className="fa fa-star checked checked2" />
                      <span className="fa fa-star checked checked3" />
                      <span className="fa fa-star checked checked4" />
                      <span className="fa fa-star checked checked5" />
                    </div>
                    <p><a>Reviews (4)</a></p>
                  </div>
                  <h5><a>Acer Aspire 5 A515-46-R14K Slim Laptop</a></h5>
                  <div className="price price-sold d-flex">
                    <p className="cost">$499.00</p>
                    <p className="sold">Đã bán: 30</p>
                  </div>
                  <div className="price price-address d-flex">
                    <h4 className="sale">$499.00</h4>
                    <a className="address">Hà Nội</a>
                  </div>
                </div>
              </div>
              <div className="row row-3">
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 product-category-page product product-1">
                  <div className="in-stock d-flex">
                    <i className="fa fa-check-circle" />
                    <p><a>in stock</a></p>
                  </div>
                  <div className="img-product">
                    <img src={laptop} />
                  </div>
                  <div className="evaluate d-flex">
                    <div className="star">
                      <span className="fa fa-star checked checked1" />
                      <span className="fa fa-star checked checked2" />
                      <span className="fa fa-star checked checked3" />
                      <span className="fa fa-star checked checked4" />
                      <span className="fa fa-star checked checked5" />
                    </div>
                    <p><a>Reviews (4)</a></p>
                  </div>
                  <h5><a>Acer Aspire 5 A515-46-R14K Slim Laptop</a></h5>
                  <div className="price price-sold d-flex">
                    <p className="cost">$499.00</p>
                    <p className="sold">Đã bán: 30</p>
                  </div>
                  <div className="price price-address d-flex">
                    <h4 className="sale">$499.00</h4>
                    <a className="address">Hà Nội</a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 product-category-page product product-2">
                  <div className="in-stock d-flex">
                    <i className="fa fa-check-circle" />
                    <p><a>in stock</a></p>
                  </div>
                  <div className="img-product">
                    <img src={laptop} />
                  </div>
                  <div className="evaluate d-flex">
                    <div className="star">
                      <span className="fa fa-star checked checked1" />
                      <span className="fa fa-star checked checked2" />
                      <span className="fa fa-star checked checked3" />
                      <span className="fa fa-star checked checked4" />
                      <span className="fa fa-star checked checked5" />
                    </div>
                    <p><a>Reviews (4)</a></p>
                  </div>
                  <h5><a>Acer Aspire 5 A515-46-R14K Slim Laptop</a></h5>
                  <div className="price price-sold d-flex">
                    <p className="cost">$499.00</p>
                    <p className="sold">Đã bán: 30</p>
                  </div>
                  <div className="price price-address d-flex">
                    <h4 className="sale">$499.00</h4>
                    <a className="address">Hà Nội</a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 product-category-page product product-3">
                  <div className="in-stock d-flex">
                    <i className="fa fa-check-circle" />
                    <p><a>in stock</a></p>
                  </div>
                  <div className="img-product">
                    <img src={laptop} />
                  </div>
                  <div className="evaluate d-flex">
                    <div className="star">
                      <span className="fa fa-star checked checked1" />
                      <span className="fa fa-star checked checked2" />
                      <span className="fa fa-star checked checked3" />
                      <span className="fa fa-star checked checked4" />
                      <span className="fa fa-star checked checked5" />
                    </div>
                    <p><a>Reviews (4)</a></p>
                  </div>
                  <h5><a>Acer Aspire 5 A515-46-R14K Slim Laptop</a></h5>
                  <div className="price price-sold d-flex">
                    <p className="cost">$499.00</p>
                    <p className="sold">Đã bán: 30</p>
                  </div>
                  <div className="price price-address d-flex">
                    <h4 className="sale">$499.00</h4>
                    <a className="address">Hà Nội</a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 product-category-page product product-4">
                  <div className="in-stock d-flex">
                    <i className="fa fa-check-circle" />
                    <p><a>in stock</a></p>
                  </div>
                  <div className="img-product">
                    <img src={laptop} />
                  </div>
                  <div className="evaluate d-flex">
                    <div className="star">
                      <span className="fa fa-star checked checked1" />
                      <span className="fa fa-star checked checked2" />
                      <span className="fa fa-star checked checked3" />
                      <span className="fa fa-star checked checked4" />
                      <span className="fa fa-star checked checked5" />
                    </div>
                    <p><a>Reviews (4)</a></p>
                  </div>
                  <h5><a>Acer Aspire 5 A515-46-R14K Slim Laptop</a></h5>
                  <div className="price price-sold d-flex">
                    <p className="cost">$499.00</p>
                    <p className="sold">Đã bán: 30</p>
                  </div>
                  <div className="price price-address d-flex">
                    <h4 className="sale">$499.00</h4>
                    <a className="address">Hà Nội</a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 product-category-page product product-5">
                  <div className="in-stock d-flex">
                    <i className="fa fa-check-circle" />
                    <p><a>in stock</a></p>
                  </div>
                  <div className="img-product">
                    <img src={laptop} />
                  </div>
                  <div className="evaluate d-flex">
                    <div className="star">
                      <span className="fa fa-star checked checked1" />
                      <span className="fa fa-star checked checked2" />
                      <span className="fa fa-star checked checked3" />
                      <span className="fa fa-star checked checked4" />
                      <span className="fa fa-star checked checked5" />
                    </div>
                    <p><a>Reviews (4)</a></p>
                  </div>
                  <h5><a>Acer Aspire 5 A515-46-R14K Slim Laptop</a></h5>
                  <div className="price price-sold d-flex">
                    <p className="cost">$499.00</p>
                    <p className="sold">Đã bán: 30</p>
                  </div>
                  <div className="price price-address d-flex">
                    <h4 className="sale">$499.00</h4>
                    <a className="address">Hà Nội</a>
                  </div>
                </div>
              </div>
              <div className="row row-4">
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 product-category-page product product-1">
                  <div className="in-stock d-flex">
                    <i className="fa fa-check-circle" />
                    <p><a>in stock</a></p>
                  </div>
                  <div className="img-product">
                    <img src={laptop} />
                  </div>
                  <div className="evaluate d-flex">
                    <div className="star">
                      <span className="fa fa-star checked checked1" />
                      <span className="fa fa-star checked checked2" />
                      <span className="fa fa-star checked checked3" />
                      <span className="fa fa-star checked checked4" />
                      <span className="fa fa-star checked checked5" />
                    </div>
                    <p><a>Reviews (4)</a></p>
                  </div>
                  <h5><a>Acer Aspire 5 A515-46-R14K Slim Laptop</a></h5>
                  <div className="price price-sold d-flex">
                    <p className="cost">$499.00</p>
                    <p className="sold">Đã bán: 30</p>
                  </div>
                  <div className="price price-address d-flex">
                    <h4 className="sale">$499.00</h4>
                    <a className="address">Hà Nội</a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 product-category-page product product-2">
                  <div className="in-stock d-flex">
                    <i className="fa fa-check-circle" />
                    <p><a>in stock</a></p>
                  </div>
                  <div className="img-product">
                    <img src={laptop} />
                  </div>
                  <div className="evaluate d-flex">
                    <div className="star">
                      <span className="fa fa-star checked checked1" />
                      <span className="fa fa-star checked checked2" />
                      <span className="fa fa-star checked checked3" />
                      <span className="fa fa-star checked checked4" />
                      <span className="fa fa-star checked checked5" />
                    </div>
                    <p><a>Reviews (4)</a></p>
                  </div>
                  <h5><a>Acer Aspire 5 A515-46-R14K Slim Laptop</a></h5>
                  <div className="price price-sold d-flex">
                    <p className="cost">$499.00</p>
                    <p className="sold">Đã bán: 30</p>
                  </div>
                  <div className="price price-address d-flex">
                    <h4 className="sale">$499.00</h4>
                    <a className="address">Hà Nội</a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 product-category-page product product-3">
                  <div className="in-stock d-flex">
                    <i className="fa fa-check-circle" />
                    <p><a>in stock</a></p>
                  </div>
                  <div className="img-product">
                    <img src={laptop} />
                  </div>
                  <div className="evaluate d-flex">
                    <div className="star">
                      <span className="fa fa-star checked checked1" />
                      <span className="fa fa-star checked checked2" />
                      <span className="fa fa-star checked checked3" />
                      <span className="fa fa-star checked checked4" />
                      <span className="fa fa-star checked checked5" />
                    </div>
                    <p><a>Reviews (4)</a></p>
                  </div>
                  <h5><a>Acer Aspire 5 A515-46-R14K Slim Laptop</a></h5>
                  <div className="price price-sold d-flex">
                    <p className="cost">$499.00</p>
                    <p className="sold">Đã bán: 30</p>
                  </div>
                  <div className="price price-address d-flex">
                    <h4 className="sale">$499.00</h4>
                    <a className="address">Hà Nội</a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 product-category-page product product-4">
                  <div className="in-stock d-flex">
                    <i className="fa fa-check-circle" />
                    <p><a>in stock</a></p>
                  </div>
                  <div className="img-product">
                    <img src={laptop} />
                  </div>
                  <div className="evaluate d-flex">
                    <div className="star">
                      <span className="fa fa-star checked checked1" />
                      <span className="fa fa-star checked checked2" />
                      <span className="fa fa-star checked checked3" />
                      <span className="fa fa-star checked checked4" />
                      <span className="fa fa-star checked checked5" />
                    </div>
                    <p><a>Reviews (4)</a></p>
                  </div>
                  <h5><a>Acer Aspire 5 A515-46-R14K Slim Laptop</a></h5>
                  <div className="price price-sold d-flex">
                    <p className="cost">$499.00</p>
                    <p className="sold">Đã bán: 30</p>
                  </div>
                  <div className="price price-address d-flex">
                    <h4 className="sale">$499.00</h4>
                    <a className="address">Hà Nội</a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 product-category-page product product-5">
                  <div className="in-stock d-flex">
                    <i className="fa fa-check-circle" />
                    <p><a>in stock</a></p>
                  </div>
                  <div className="img-product">
                    <img src={laptop} />
                  </div>
                  <div className="evaluate d-flex">
                    <div className="star">
                      <span className="fa fa-star checked checked1" />
                      <span className="fa fa-star checked checked2" />
                      <span className="fa fa-star checked checked3" />
                      <span className="fa fa-star checked checked4" />
                      <span className="fa fa-star checked checked5" />
                    </div>
                    <p><a>Reviews (4)</a></p>
                  </div>
                  <h5><a>Acer Aspire 5 A515-46-R14K Slim Laptop</a></h5>
                  <div className="price price-sold d-flex">
                    <p className="cost">$499.00</p>
                    <p className="sold">Đã bán: 30</p>
                  </div>
                  <div className="price price-address d-flex">
                    <h4 className="sale">$499.00</h4>
                    <a className="address">Hà Nội</a>
                  </div>
                </div>
              </div>
              <div className="row row-5">
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 product-category-page product product-1">
                  <div className="in-stock d-flex">
                    <i className="fa fa-check-circle" />
                    <p><a>in stock</a></p>
                  </div>
                  <div className="img-product">
                    <img src={laptop} />
                  </div>
                  <div className="evaluate d-flex">
                    <div className="star">
                      <span className="fa fa-star checked checked1" />
                      <span className="fa fa-star checked checked2" />
                      <span className="fa fa-star checked checked3" />
                      <span className="fa fa-star checked checked4" />
                      <span className="fa fa-star checked checked5" />
                    </div>
                    <p><a>Reviews (4)</a></p>
                  </div>
                  <h5><a>Acer Aspire 5 A515-46-R14K Slim Laptop</a></h5>
                  <div className="price price-sold d-flex">
                    <p className="cost">$499.00</p>
                    <p className="sold">Đã bán: 30</p>
                  </div>
                  <div className="price price-address d-flex">
                    <h4 className="sale">$499.00</h4>
                    <a className="address">Hà Nội</a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 product-category-page product product-2">
                  <div className="in-stock d-flex">
                    <i className="fa fa-check-circle" />
                    <p><a>in stock</a></p>
                  </div>
                  <div className="img-product">
                    <img src={laptop} />
                  </div>
                  <div className="evaluate d-flex">
                    <div className="star">
                      <span className="fa fa-star checked checked1" />
                      <span className="fa fa-star checked checked2" />
                      <span className="fa fa-star checked checked3" />
                      <span className="fa fa-star checked checked4" />
                      <span className="fa fa-star checked checked5" />
                    </div>
                    <p><a>Reviews (4)</a></p>
                  </div>
                  <h5><a>Acer Aspire 5 A515-46-R14K Slim Laptop</a></h5>
                  <div className="price price-sold d-flex">
                    <p className="cost">$499.00</p>
                    <p className="sold">Đã bán: 30</p>
                  </div>
                  <div className="price price-address d-flex">
                    <h4 className="sale">$499.00</h4>
                    <a className="address">Hà Nội</a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 product-category-page product product-3">
                  <div className="in-stock d-flex">
                    <i className="fa fa-check-circle" />
                    <p><a>in stock</a></p>
                  </div>
                  <div className="img-product">
                    <img src={laptop} />
                  </div>
                  <div className="evaluate d-flex">
                    <div className="star">
                      <span className="fa fa-star checked checked1" />
                      <span className="fa fa-star checked checked2" />
                      <span className="fa fa-star checked checked3" />
                      <span className="fa fa-star checked checked4" />
                      <span className="fa fa-star checked checked5" />
                    </div>
                    <p><a>Reviews (4)</a></p>
                  </div>
                  <h5><a>Acer Aspire 5 A515-46-R14K Slim Laptop</a></h5>
                  <div className="price price-sold d-flex">
                    <p className="cost">$499.00</p>
                    <p className="sold">Đã bán: 30</p>
                  </div>
                  <div className="price price-address d-flex">
                    <h4 className="sale">$499.00</h4>
                    <a className="address">Hà Nội</a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 product-category-page product product-4">
                  <div className="in-stock d-flex">
                    <i className="fa fa-check-circle" />
                    <p><a>in stock</a></p>
                  </div>
                  <div className="img-product">
                    <img src={laptop} />
                  </div>
                  <div className="evaluate d-flex">
                    <div className="star">
                      <span className="fa fa-star checked checked1" />
                      <span className="fa fa-star checked checked2" />
                      <span className="fa fa-star checked checked3" />
                      <span className="fa fa-star checked checked4" />
                      <span className="fa fa-star checked checked5" />
                    </div>
                    <p><a>Reviews (4)</a></p>
                  </div>
                  <h5><a>Acer Aspire 5 A515-46-R14K Slim Laptop</a></h5>
                  <div className="price price-sold d-flex">
                    <p className="cost">$499.00</p>
                    <p className="sold">Đã bán: 30</p>
                  </div>
                  <div className="price price-address d-flex">
                    <h4 className="sale">$499.00</h4>
                    <a className="address">Hà Nội</a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 product-category-page product product-5">
                  <div className="in-stock d-flex">
                    <i className="fa fa-check-circle" />
                    <p><a>in stock</a></p>
                  </div>
                  <div className="img-product">
                    <img src={laptop} />
                  </div>
                  <div className="evaluate d-flex">
                    <div className="star">
                      <span className="fa fa-star checked checked1" />
                      <span className="fa fa-star checked checked2" />
                      <span className="fa fa-star checked checked3" />
                      <span className="fa fa-star checked checked4" />
                      <span className="fa fa-star checked checked5" />
                    </div>
                    <p><a>Reviews (4)</a></p>
                  </div>
                  <h5><a>Acer Aspire 5 A515-46-R14K Slim Laptop</a></h5>
                  <div className="price price-sold d-flex">
                    <p className="cost">$499.00</p>
                    <p className="sold">Đã bán: 30</p>
                  </div>
                  <div className="price price-address d-flex">
                    <h4 className="sale">$499.00</h4>
                    <a className="address">Hà Nội</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
}