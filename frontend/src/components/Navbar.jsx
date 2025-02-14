import { Link } from "react-router-dom"

const Navbar = () => {
  
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
  <div className="container-fluid">
    <Link className="navbar-brand fw-bolder" to="/">MERN</Link>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon fw-bold"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
          <Link to="/" className="nav-link active fw-bold" >All Post</Link>
        </li>
        <li className="nav-item">
          <Link to="/create" className="nav-link fw-bold" aria-current="page" >Create Post</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
