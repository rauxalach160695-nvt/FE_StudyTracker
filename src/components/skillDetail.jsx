import { List, Pagination } from "antd";
import { useState } from "react";
import IconButton from "./iconButton";
import "../styles/components/skillDetail.scss";

function SkillDetail({ data, onSelect }) {
  const targetValue = {
    1: "Mới bắt đầu",
    2: "Thông hiểu",
    3: "Chuyên gia",
  };
  const skillState = {
    0: "Đã ngưng",
    1: "Đang học",
    3: "Đã hoàn thành",
  };
  const pageSize = 5; // số phần tử mỗi trang
  const [currentPage, setCurrentPage] = useState(1);
  // Cắt dữ liệu theo trang
  const paginatedData = data.listPlan.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  return (
    <div className="skill-detail-container">
      <div className="skill-info">
        <div className="skill-info-name">{data.name}</div>
        <div className="space-gap"></div>
        <div className="target-value">
          Mức dộ: {targetValue[data.targetValue]}
        </div>
        <div className="space-gap"></div>
        <div className="skill-info-state">
          Tình trạng: {skillState[data.state]}
        </div>
        <div className="space-gap"></div>
        <div className="skill-desc">{data.desc}</div>
        <div className="space-gap"></div>
        <div className="list-plan-title">Danh sách các plan của kỹ năng</div>
        <div className="space-gap"></div>
        <List
          bordered
          dataSource={paginatedData}
          renderItem={(item) => (
            <List.Item>
              <div className="per-list-line">
                <div className="plan-title" onClick={() => onSelect(1)}>
                  {item.title}
                </div>
                <div className="plan-desc">{item.desc}</div>
              </div>
            </List.Item>
          )}
        />
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={data.length}
          onChange={(page) => setCurrentPage(page)}
          style={{ marginTop: 20, textAlign: "center" }}
        />
      </div>
      <div className="skill-manager">
        <div className="skill-btn-container">
          <IconButton id={1}></IconButton>
          <div className="space-gap"></div>
          <IconButton id={2}></IconButton>
          <div className="space-gap"></div>
          <IconButton id={3}></IconButton>
          <div className="space-gap"></div>
          <IconButton id={4}></IconButton>
          <div className="space-gap"></div>
          <IconButton id={5}></IconButton>
        </div>
      </div>
    </div>
  );
}

export default SkillDetail;
