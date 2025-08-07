import Header from "../components/header";
import Footer from "../components/footer";
import clsx from "clsx";
import "../styles/layouts/mainLayout.scss"
import { Outlet } from "react-router-dom";

function MainLayout({ children }) {
  const tagList = [
  {
    id: 1,
    tagName: "Home",
    pageTitle: "Home Page",
    icon: "fa-solid fa-house "
  },
  {
    id: 2,
    tagName: "My Skill",
    pageTitle: "My Skills Page",
    icon: "fa-solid fa-book "
  },
  {
    id: 3,
    tagName: "My Plans",
    pageTitle: "My Plans Page",
    icon: "fa-solid fa-note-sticky "
  },
  {
    id: 4,
    tagName: "Acheivements",
    pageTitle: "Acheivements Page",
    icon: "fa-solid fa-trophy "
  },
  {
    id: 5,
    tagName: "Notifications",
    pageTitle: "Notifications Page",
    icon: "fa-solid fa-bell "
  }
];

  return (
    <div className="main-layout">
      <Header></Header>
      <div className="page-body">
        <div className="tag-select">
          <div className="main-tag">Main
            <div className="empty-space"></div>
            {tagList.map((tag, index)=> (
            <div className="selection">
              <i class={tag.icon}></i>
              <div className="text-selection">{tag.tagName}</div>
            </div>
          ))}
          </div>
          <div className="other-tag">Other
            
          </div>
        </div>
        <main className="page-container"><Outlet/></main>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default MainLayout;
