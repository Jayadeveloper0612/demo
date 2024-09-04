import React from "react";

export default function TotalData({ selectedProduct }) {
  if (!selectedProduct) {
    return null; // No product selected, don't render anything
  }

  const lat = parseFloat(selectedProduct.address.geo.lat);
  const lng = parseFloat(selectedProduct.address.geo.lng);
  const totalLatLng = lat + lng;

  return (
    <div>
      {/* ........... */}
      <h3 className="text-secondary">
        Total of Latitude and Longitude for{" "}
        <span className="text-danger"> {selectedProduct.name} : </span>
      </h3>
      <b className="">{totalLatLng}</b>
    </div>
  );
}
