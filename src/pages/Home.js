import { useState } from "react";
import BarChart from "./charts/BarChart";
import PieChart from "./charts/PieChart";
import SelectData from "./charts/SelectData";
import TotalData from "./charts/TotalData";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Home</h2>
      {/* <SelectData onSelect={setSelectedProduct} />
      <TotalData selectedProduct={selectedProduct} />
      <PieChart selectedProduct={selectedProduct} /> */}

      <SelectData onSelect={setSelectedProduct} />
      {/* 2............................ */}
      <div className="row my-4">
        <div className="col-md-6 col-12">
          <BarChart />
        </div>
        <div className="col-md-6 col-12 mb-4">
          <PieChart selectedProduct={selectedProduct} />
        </div>
      </div>

      <div className="row mb-4">
        <div className="mx-auto text-center border w-100 p-3 bg-light rounded">
          <TotalData selectedProduct={selectedProduct} />
        </div>
      </div>
    </div>
  );
}
