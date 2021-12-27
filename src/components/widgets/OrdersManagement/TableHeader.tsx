import React from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th scope="col">[Products]</th>
        <th scope="col">Customer</th>
        <th scope="col">Payment</th>
        <th scope="col">Status</th>
        <th scope="col">Shipment</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
