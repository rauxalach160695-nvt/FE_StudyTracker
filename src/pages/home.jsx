import Header from "../components/header";
import MainLayout from "../layouts/mainLayout";
import "../styles/pages/home.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Home() {
  let hoursSpend = 8;
  let lastestPlan = {
    planTitle: "Ôn tập FrontEnd",
    percentageDone: 75,
    hoursSpend: 20,
  };
  let skillOverall = {
    skillAmount: 10,
    skillCompleted: 5,
    skillOngoing: 3,
    skillDropped: 2,
  };
  return (
    <div className="home-container">
      <div className="overall">
        <div className="time-spend-today per-overall">
          <span>Thời gian học hôm nay:</span>
          <div className="hours">{hoursSpend} tiếng</div>
        </div>
        <div className="lastest-plan per-overall">
          <div className="plan-percentageDone">
            <CircularProgressbar
              value={lastestPlan.percentageDone}
              text={`${lastestPlan.percentageDone}%`}
            />
          </div>
          <div className="name-and-hours-plan">
            <div className="plan-title">
              Kế hoạch học lần gần nhất: {lastestPlan.planTitle}
            </div>
            <div className="plan-hours-spend">
              Thời gian đã học: {lastestPlan.hoursSpend} Tiếng
            </div>
          </div>
        </div>
        <div className="overall-skill per-overall">
          <div className="skill-completed skill-state">
            <i class="fa-solid fa-heart-circle-check fa-2x"></i>
            <div className="completed-title state-title">
              Số kỹ năng đã học được
            </div>
            <div className="completed-bar skill-bar ">
              <CircularProgressbar
                value={
                  (skillOverall.skillCompleted / skillOverall.skillAmount) * 100
                }
                text={`${skillOverall.skillCompleted}`}
                styles={buildStyles({
                  textSize: "40px", // 👈 chỉnh font-size ở đây
                  textColor: "#000",
                  pathColor: "#4ef259",
                  trailColor: "#eee",
                })}
              />
            </div>
          </div>
          <div className="skill-ongoing skill-state">
            <i class="fa-solid fa-heart-pulse fa-2x"></i>
            <div className="ongoing-title state-title">
              Số kỹ năng đang học{" "}
            </div>
            <div className="ongoing-bar skill-bar">
              <CircularProgressbar
                value={
                  (skillOverall.skillOngoing / skillOverall.skillAmount) * 100
                }
                text={`${skillOverall.skillOngoing}`}
                styles={buildStyles({
                  textSize: "40px", // 👈 chỉnh font-size ở đây
                  textColor: "#000",
                  pathColor: "#d7d716ff",
                  trailColor: "#eee",
                })}
              />
            </div>
          </div>
          <div className="skill-dropped skill-state">
            <i class="fa-solid fa-heart-crack fa-2x"></i>
            <div className="dropped-title state-title">
              Số kĩ năng đã ngừng học
            </div>
            <div className="dropped-bar skill-bar">
              <CircularProgressbar
                value={
                  100 -
                  ((skillOverall.skillCompleted / skillOverall.skillAmount) *
                    100 +
                    (skillOverall.skillOngoing / skillOverall.skillAmount) *
                      100)
                }
                text={`${skillOverall.skillDropped}`}
                styles={buildStyles({
                  textSize: "40px", // 👈 chỉnh font-size ở đây
                  textColor: "#000",
                  pathColor: "#fa3939",
                  trailColor: "#eee",
                })}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
