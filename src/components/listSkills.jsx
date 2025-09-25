import { List, Pagination, ConfigProvider} from "antd";
import { useState } from "react";
import "../styles/components/listSkills.scss"

function listSkills({ data, onSelect }) {
  const pageSize = 5; // số phần tử mỗi trang
  const [currentPage, setCurrentPage] = useState(1);
  // Cắt dữ liệu theo trang
  const paginatedData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  return (
    <div className="listSkill-container">
      <List 
        // header={<div>Header</div>}
        // footer={<div>Footer</div>}
        bordered
        dataSource={paginatedData}
        renderItem={(item) => (
          <List.Item>
            <div className="per-list-line">
              <div className="skill-name" onClick={() => onSelect(1)}>{item.name}</div>
              <div className="skill-desc">{item.desc}</div>
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
  );
}

export default listSkills;
