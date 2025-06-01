import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import flowerLogo from "../../assets/images/flower.svg";
import styles from "../NavBar/NavBar.module.css";

function NavBar() {
  const navigate = useNavigate();

  return (
    <div className={styles.navbar}>
      <div
        className={styles.logoContainer}
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        <img src={flowerLogo} alt="Цветочек" className={styles.logo} />
      </div>
      <div className={styles.menu}>
        <Link to="/" className={styles.navLink}>
          Home
        </Link>
        <Link to="/words" className={styles.navLink}>
          Word Cards
        </Link>
        <Link to="/carousel" className={styles.navLink}>
          Carousel
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
