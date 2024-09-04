export default function CreateProduct() {
  return (
    <>
      <div className="container py-4">
        <div className="row">
          <div className="col-md-8 mx-auto rounded border p-4">
            <h2 className="text-center mb-5">Create Product</h2>

            <form>
              {/* 1 */}
              <div className="row mb-3">
                <label className="col-sm-4 col-form-label">Name</label>
                <div className="col-sm-8">
                  <input className="form-control" name="name" />
                  <span className="text-danger"></span>
                </div>
              </div>
              {/* 2 */}
              <div className="row mb-3">
                <label className="col-sm-4 col-form-label">Name1</label>
                <div className="col-sm-8">
                  <input className="form-control" name="name1" />
                  <span className="text-danger"></span>
                </div>
              </div>
              {/* 3 */}
              <div className="row mb-3">
                <label className="col-sm-4 col-form-label">Name</label>
                <div className="col-sm-8">
                  <select className="form-select" name="category">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <span className="text-danger"></span>
                </div>
              </div>
              {/* 4 */}
              <div className="row mb-3">
                <label className="col-sm-4 col-form-label">Description</label>
                <div className="col-sm-8">
                  <textarea
                    className="form-control"
                    name="description"
                    row="4"
                  />
                  <span className="text-danger"></span>
                </div>
              </div>
              {/* 5 */}
              <div className="row mb-3">
                <label className="col-sm-4 col-form-label">Image</label>
                <div className="col-sm-8">
                  <input className="form-control" type="file" name="image" />
                  <span className="text-danger"></span>
                </div>
              </div>

              <div className="row">
                <div className="offset-sm-4 col-sm-4 d-grid">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
                <div className="col-sm-4 d-grid">
                  <a
                    className="btn btn-secondary"
                    href="/admin/products"
                    role="button"
                  >
                    Cancel
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
