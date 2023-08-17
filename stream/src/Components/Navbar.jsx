import "../Styles/Navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";


const Navbar = ({ onToggleView }) => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="nav-item home">
          <IconButton>
            <HomeIcon fontSize="large" />
            <button onClick={onToggleView}>Home</button>
          </IconButton>
        </div>

        <div className="nav-item">
          <IconButton>
            <FavoriteIcon />
            <button onClick={onToggleView}>Favorites</button>
          </IconButton>
        </div>
      </div>

      <div className="nav-center">
        <img src="./Images/itunes.png" alt="logo" width="100px" />
        <h1 className="navbar-brand">KopoStream</h1>
      </div>
    </nav>
  );
};


export default Navbar;
