import React, { useEffect, useState } from "react";

export default function SelectData({ onSelect }) {
  const [selData, setSelData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setSelData(data))
      .catch((err) => console.error(err));
  }, []);

  const handleSelectChange = (event) => {
    const selectedProduct = selData.find(
      (item) => item.id === parseInt(event.target.value)
    );
    onSelect(selectedProduct);
  };

  return (
    <div className="row mb-2">
      <div className="col-sm-3">
        <select
          className="form-select"
          name="category"
          onChange={handleSelectChange}
        >
          <option value="">---Select Name---</option>
          {selData.map((item) => (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      {/* 2 */}
      <div className="col-sm-3">
        <select className="form-select" name="category">
          <option value="">---Select Data1---</option>

          <option value={"1"}>1</option>
          <option value={"2"}>2</option>
        </select>
      </div>
      {/* 3 */}
      <div className="col-sm-3">
        <select className="form-select" name="category">
          <option value="">---Select Data2---</option>

          <option value={"1"}>1</option>
          <option value={"2"}>2</option>
        </select>
      </div>
      {/* 4 */}
      <div className="col-sm-3">
        <select className="form-select" name="category">
          <option value="">---Select Data3---</option>

          <option value={"1"}>1</option>
          <option value={"2"}>2</option>
        </select>
      </div>
    </div>
  );
}
