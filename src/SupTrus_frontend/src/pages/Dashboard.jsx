import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="text-center">
      <h2>Dashboard</h2>
      <p className="lead">Manage your supply chain records</p>
      <Link to="/add-product" className="btn btn-success m-2">
        Add New Product
      </Link>
      <Link to="/track-product" className="btn btn-info m-2">
        Track Product
      </Link>
    </div>
  );
}

export default Dashboard;
