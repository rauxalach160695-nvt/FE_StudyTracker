import clsx from "clsx";
import "../styles/components/header.scss";
import { useState ,useEffect} from "react";
import DropPopup from "./popup";

function Header() {
  const [ isNotification, setIsNotification ] = useState(false);
  const [ show, setShow ] = useState(false);
  const data = [
    "Dòng 1",
    "Dòng 2",
    "Dòng 3",
    "Dòng 4",
    "Dòng 5",
    "Dòng 6",
    "Dòng 7",
    "Dòng 8",
    "Dòng 9",
    "Dòng 10",
    "Dòng 1",
    "Dòng 2",
    "Dòng 3",
    "Dòng 4",
    "Dòng 5",
    "Dòng 6",
    "Dòng 7",
    "Dòng 8",
    "Dòng 9",
    "Dòng 10",
  ];

  return (
    <div className="header-container">
      <div className="logo-field">
        <img
          src="https://i.pinimg.com/736x/12/f3/f4/12f3f4ecc8d00b48041062625fa9ebed.jpg"
          className="logo-image"
        />
        <div className="project-name">Study Tracker</div>
      </div>
      <div className="header-content">
        <div className="page-title">
          <span>Home page</span>
        </div>
        {show && <DropPopup notis={data} />}
        <div className="notification-wrapper" onClick={() => setShow(!show)}>
          {!isNotification ? (
            <span className="material-symbols-outlined">notifications</span>
          ) : (
            <span className="material-symbols-outlined">
              notifications_unread
            </span>
          )}
        </div>
        <div className="user-setting">
          <div className="user-avatar"></div>
          <div className="user-setting-drop-bar">NGuyen van thinh</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
