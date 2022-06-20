import { Link } from "react-router-dom";
import {
  IoHeart,
  IoEarthSharp,
  IoSearch,
  IoLocationSharp,
} from "react-icons/io5";
import logo from "../../assets/images/logos/logo-black-3.png";
import FormLogout from "./formLogout";
import styles from "./header.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useIsLogin } from "../../hooks/useIsLogin";
export default function Header() {
  const { user } = useIsLogin();
  const [state, setState] = useState({});
  useEffect(
    () => {
      axios
        .get(
          `${process.env.REACT_APP_API_URL}/api/users/${user.username}/trips`
        )
        .then((res) => {
          const persons = res.data;
          setState(persons);
        })
        .catch((error) => console.log(error));
    },
    // eslint-disable-next-line
    []
  );
  const src =
    state.profileImageUrl == null
      ? "https://wrld-se-prod.b-cdn.net/images/user-empty.svg"
      : state.profileImageUrl;
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.headerLogo}>
          <div>
            <Link to="/">
              <img alt="Worldee logo" src={logo} />
            </Link>
          </div>
        </div>
        <div className={styles.menu}>
          <div className={styles.search} aria-describedby="popup-1">
            <div className={styles.searchAll}>
              <div className={styles.searchInput}>
                <input type="text" placeholder="Search" />
              </div>
              <div className={styles.searchIcon}>
                <button>
                  <Link to="/search">
                    <div>
                      <IoSearch />
                    </div>
                    <span />
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.grow} />
          <Link to="/">
            <div className={styles.menuIcon}>
              <IoEarthSharp />
            </div>
            <span>Home</span>
          </Link>
          <Link to="/trip">
            <div className={styles.menuIcon}>
              <IoLocationSharp />
            </div>
            <span>Create</span>
          </Link>
          <div className={styles.menuButton} aria-describedby="popup-3">
            <button>
              <div className={styles.menuIcon}>
                <IoHeart />
              </div>
              <span>Notifications</span>
            </button>
          </div>
        </div>
        <div className={styles.profile}>
          <div className={styles.profileList}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Link to={`/profile/${user.username}`}>
                <div className={styles.profileIcon}>
                  <img className="w_km" alt="profile" src={src} />
                </div>
                <div>
                  <span>{user.username}</span>
                </div>
              </Link>
              <FormLogout />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
