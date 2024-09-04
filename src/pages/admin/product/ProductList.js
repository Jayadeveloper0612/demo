import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [productData, setProductData] = useState([]);

  function getProducts() {
    fetch(" http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProductData(data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getProducts();
  }, []);

  function deleteProduct(id) {
    fetch(" http://localhost:5000/products/" + id, {
      method: "DELETE",
    })
      .then((res) => getProducts())
      .catch((err) => console.log(err));
  }
  return (
    <>
      <div className="container my-4">
        <h2 className="text-center mb-4">Products</h2>

        <div className="row mb-3">
          <div className="col">
            <Link
              to="/admin/product/create"
              className="btn btn-primary me-2"
              role="button"
            >
              Create
            </Link>
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={getProducts}
            >
              Refresh
            </button>
          </div>
          <div className="col"></div>
        </div>

        <table className="table mb-5">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>UserName</th>
              <th>Email</th>
              <th>Images</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Company</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {productData.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>
                    <img
                      src={"http://localhost:5000/images/" + item.imgFile}
                      width="30"
                      alt="..."
                    />
                  </td>
                  <td>{item.address.street}</td>
                  <td>{item.phone}</td>
                  <td>{item.website}</td>
                  <td>{item.company.name}</td>
                  <td className="position-absolute">
                    <button className="btn btn-sm btn-success me-2">
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => deleteProduct(item.id)}
                    >
                      Del
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
