import Header from "../components/header";
import Footer from "../components/footer";
import clsx from "clsx";
import "../styles/layouts/mainLayout.scss"

function MainLayout({ children }) {
  const tagList = [
  {
    id: 1,
    tagName: "Home",
    pageTitle: "Home Page",
    icon: "fa-solid fa-house fa-2x"
  },
  {
    id: 2,
    tagName: "My Courses",
    pageTitle: "My Courses Page",
    icon: "fa-solid fa-book fa-2x"
  },
  {
    id: 3,
    tagName: "My Plans",
    pageTitle: "My Plans Page",
    icon: "fa-solid fa-note-sticky fa-2x"
  },
  {
    id: 4,
    tagName: "Acheivements",
    pageTitle: "Acheivements Page",
    icon: "fa-solid fa-trophy fa-2x"
  },
  {
    id: 5,
    tagName: "Notifications",
    pageTitle: "Notifications Page",
    icon: "fa-solid fa-bell fa-2x"
  }
];

  return (
    <div className="main-layout">
      <Header></Header>
      <div className="page-body">
        <div className="tag-select">
          <div className="main-tag">Main
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
        <main>{children}</main>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default MainLayout;
