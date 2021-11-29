import React from "react"
import '../../assets/css/category.css'

export default function Filter() {
    return (
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
                  <img src="assets/images/ads.jpg" />
                </div>
    )
}
