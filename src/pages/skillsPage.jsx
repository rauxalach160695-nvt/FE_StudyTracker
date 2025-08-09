import { Tabs } from "antd";
import "../styles/pages/skillsPage.scss";
import ListSkills from "../components/listSkills";

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
  const listDroppedSkills = listAllSkills.filter(item => item.state === 0)
  const listCompletedSkills = listAllSkills.filter(item => item.state === 1)
  const listOngoingSkills = listAllSkills.filter(item => item.state === 2)
  return (
    <div className="skills-page-container">
      <div className="show-info-part">
        <div className="list-skills-part">
          <div className="list-skills-header">Danh sách các skill</div>
          <Tabs className="tabs-list-skills" defaultActiveKey="1">
            <Tabs.TabPane tab="Tất cả" key="1">
              <div className="list-all-skills list-skills">
                <ListSkills data={listAllSkills}></ListSkills>
              </div>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Đang học" key="2">
              <div className="list-ongoing-skill list-skills">
                <ListSkills data={listOngoingSkills}></ListSkills>
              </div>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Đã hoàn thành" key="3">
              <div className="list-completed-skills list-skills">
                <ListSkills data={listCompletedSkills}></ListSkills>
              </div>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Ngừng học" key="4">
              <div className="list-dropped-skills list-skills">
                <ListSkills data={listDroppedSkills}></ListSkills>
              </div>
            </Tabs.TabPane>
          </Tabs>
        </div>
        <div className="list-plans-part"></div>
      </div>
      <div className="control-part"></div>
    </div>
  );
}

export default SkillsPage;
