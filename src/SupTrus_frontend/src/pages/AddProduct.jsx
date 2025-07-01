function AddProduct() {
  return (
    <div className="container col-md-6">
      <h2 className="mb-4">Add New Product Record</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter product name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Batch Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter batch number"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Manufacturer</label>
          <input
            type="text"
            className="form-control"
            placeholder="Manufacturer name"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Record
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
