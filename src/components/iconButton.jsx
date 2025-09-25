import { Tooltip } from "antd";
import "../styles/components/iconButton.scss"

function IconButton({ id }) {
  const buttonTheme = {
    1: {
      color: "#3168F5",
      classIcon: "fa-solid fa-rotate-right",
      title: "Học lại",
    },
    2: {
      color: "#27F52E",
      classIcon: "fa-solid fa-check",
      title: "Hoàn thành",
    },
    3: {
      color: "#F55C2A",
      classIcon: "fa-solid fa-slash",
      title: "Ngưng học",
    },
    4: {
      color: "#29F2FF",
      classIcon: "fa-solid fa-pen",
      title: "Chỉnh sửa",
    },
    5: {
      color: "#f71629ff",
      classIcon: "fa-solid fa-trash",
      title: "Xóa",
    },
  };
  const classIcon = "fa-solid fa-rotate-right";
  return (
    <Tooltip placement="topRight" title={buttonTheme[id].title}>
      <button
        className="icon-btn-container"
        title="Tiếp tục"
        style={{ backgroundColor: buttonTheme[id].color }}
      >
        <i class={buttonTheme[id].classIcon} style={{ color: "#FFFFFF" }}></i>
      </button>
    </Tooltip>
  );
}

export default IconButton;
