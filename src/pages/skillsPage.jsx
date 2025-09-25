import { Tabs } from "antd";
import { useState } from "react";
import "../styles/pages/skillsPage.scss";
import ListSkills from "../components/listSkills";
import SkillForm from "../components/skillForm";
import SkillDetail from "../components/skillDetail";

function SkillsPage() {
  const listAllSkills = Array.from({ length: 20 }, (_, i) => {
    const states = [0, 1, 2];
    const randomState = states[Math.floor(Math.random() * states.length)];
    const skillNames = [
      "nấu bún chả cá",
      "học JavaScript",
      "lập trình React",
      "nướng bánh mì",
      "đan len",
      "vẽ tranh sơn dầu",
      "chơi guitar",
      "chạy marathon",
      "làm sushi",
      "thiết kế UI",
      "chỉnh sửa video",
      "điêu khắc gỗ",
      "trồng cây cảnh",
      "học tiếng Nhật",
      "chụp ảnh nghệ thuật",
      "viết blog",
      "lặn biển",
      "leo núi",
      "nấu cà ri",
      "thổi kèn saxophone",
    ];

    const skillName = skillNames[i % skillNames.length];
    return {
      name: `Học ${skillName}`,
      desc: `Đây là quá trình ${skillName} số ${i + 1}`,
      state: randomState,
    };
  });
  const listDroppedSkills = listAllSkills.filter((item) => item.state === 0);
  const listCompletedSkills = listAllSkills.filter((item) => item.state === 1);
  const listOngoingSkills = listAllSkills.filter((item) => item.state === 2);

  const skillInfo = {
    id: 1,
    name: "React Fundamentals",
    desc: "Nắm vững các khái niệm cơ bản của React như component, props, state, và lifecycle.",
    targetValue: 1,
    state:1,
    listPlan: [
      {
        id: 1,
        title: "Học JSX & Components",
        desc: "Tìm hiểu JSX và cách tạo functional component.",
        dayStart: "2025-10-10",
        dayEnd: "2025-10-15",
        progress: 0,
      },
      {
        id: 2,
        title: "State & Props",
        desc: "Hiểu cách quản lý dữ liệu bằng state và truyền props giữa các component.",
        dayStart: "2025-10-16",
        dayEnd: "2025-10-20",
        progress: 0,
      },
      {
        id: 3,
        title: "Lifecycle & Hooks",
        desc: "Thực hành useEffect, useState và các hook cơ bản.",
        dayStart: "2025-10-21",
        dayEnd: "2025-10-25",
        progress: 0,
      },
    ],
  };

  const [selectedId, setSelectedId] = useState(null);
  const handleSelectId = (id) => {
    setSelectedId(id);
  };
  const [selectedPlanId, setSelectedPlanId] = useState(null);
  const handlePlanId = (id) => {
    setSelectedPlanId(id);
  };
  return (
    <div className="skills-page-container">
      <div className="show-info-part">
        <div className="list-skills-part">
          <div className="list-skills-header">Danh sách các skill</div>
          <Tabs className="tabs-list-skills" defaultActiveKey="1">
            <Tabs.TabPane tab="Tất cả" key="1">
              <div className="list-all-skills list-skills">
                <ListSkills
                  data={listAllSkills}
                  onSelect={handleSelectId}
                ></ListSkills>
              </div>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Đang học" key="2">
              <div className="list-ongoing-skills list-skills">
                <ListSkills
                  data={listOngoingSkills}
                  onSelect={handleSelectId}
                ></ListSkills>
              </div>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Đã hoàn thành" key="3">
              <div className="list-completed-skills list-skills">
                <ListSkills
                  data={listCompletedSkills}
                  onSelect={handleSelectId}
                ></ListSkills>
              </div>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Ngừng học" key="4">
              <div className="list-dropped-skills list-skills">
                <ListSkills
                  data={listDroppedSkills}
                  onSelect={handleSelectId}
                ></ListSkills>
              </div>
            </Tabs.TabPane>
          </Tabs>
        </div>
        <div className="space-gap"></div>
        <div className="list-plans-part">
          <SkillDetail data={skillInfo} onSlectedPlanId={handlePlanId}></SkillDetail>
        </div>
      </div>
      <div className="control-part">
        <SkillForm iscreate={true} idSkill={null}></SkillForm>
      </div>
    </div>
  );
}

export default SkillsPage;
