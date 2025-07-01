function TrackProduct() {
  return (
    <div className="container col-md-6">
      <h2 className="mb-4">Track Product</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Product Code / Batch Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter product code"
          />
        </div>
        <button type="submit" className="btn btn-info">
          Track
        </button>
      </form>
    </div>
  );
}

export default TrackProduct;
