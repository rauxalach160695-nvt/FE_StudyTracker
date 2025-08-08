import Header from "../components/header";
import MainLayout from "../layouts/mainLayout";
import TimeLineChart from "../components/timeLineChart";
import TimeBarChart from "../components/timeBarChart";
import "../styles/pages/home.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState } from "react";

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
let streak = 7;
let dayOfWeek = ["M", "T", "W", "T", "F", "S", "S"];
let twoOngoningSkill = [
  {
    name: "solobolo",
    description:
      "it just a random text solobarca lonichiwa la la la la la mot hai the next is a longgggg text so dont read it if you did, you are a dog",
  },
  {
    name: "solobolo",
    description:
      "it just a random text solobarca lonichiwa la la la la la mot hai the next is a longgggg text so dont read it if you did, you are a dog  ha ha ha ha ha h ah aha ha dhflaskdj fasldfjasd falsdkfj alakjsdf laskdjf laksdj flksdjf lad jfkjalskdf lasdjkf laskdf lajksdf ",
  },
];
const oneYearData = [
  { name: "Tháng 1", value: 35 },
  { name: "Tháng 2", value: 22 },
  { name: "Tháng 3", value: 48 },
  { name: "Tháng 4", value: 30 },
  { name: "Tháng 5", value: 55 },
  { name: "Tháng 6", value: 20 },
  { name: "Tháng 7", value: 65 },
  { name: "Tháng 8", value: 40 },
  { name: "Tháng 9", value: 25 },
  { name: "Tháng 10", value: 60 },
  { name: "Tháng 11", value: 38 },
  { name: "Tháng 12", value: 50 },
];
const oneMonthData = Array.from({ length: 30 }, (_, i) => ({
  name: `Ngày ${i + 1}`,
  value: Math.floor(Math.random() * 50) + 20, // giá trị ngẫu nhiên từ 20–69
}));

const oneWeekData = [
  { name: "Thứ 2", value: 45 },
  { name: "Thứ 3", value: 30 },
  { name: "Thứ 4", value: 50 },
  { name: "Thứ 5", value: 28 },
  { name: "Thứ 6", value: 60 },
  { name: "Thứ 7", value: 35 },
  { name: "Chủ nhật", value: 40 },
];

function Home() {
  const [typeChart, setTypeChart] = useState(true);
  const [timeDuration, setTimeDuration] = useState("week");
  const [data, setData] = useState(oneWeekData);
  const timeDurationHandle = (e) => {
    const value = e.target.value;
    setTimeDuration(value);
    if (value === "year") setData(oneYearData);
    else if (value === "month") setData(oneMonthData);
    else if (value === "week") setData(oneWeekData);
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
      <div className="list-ongoing-and-streak">
        <div className="list-ongoing">
          <div className="list-ongoing-header">
            <div className="ongoing-title">Một số skill đang học</div>
            <div className="viewmore-title">view more</div>
          </div>
          <div className="list-content">
            {twoOngoningSkill.map((skill, index) => (
              <div key={index} className="per-skill">
                <div className="info-skill">
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-desc">{skill.description}</div>
                </div>
                <div className="view-skill">
                  <div className="view-icon">
                    <i class="fa-solid fa-play"></i>
                  </div>
                  <div className="view-holder">xem</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="streak">
          <div className="weekly-streak-title">
            <i class="fa-solid fa-bolt fa-2x"></i>
            <span>Chuỗi trong tuần</span>
          </div>
          <div className="weekly-streak">
            {dayOfWeek.map((day, index) => (
              <div key={index} className="per-day">
                <div className="streak-icon">
                  <i class="fa-solid fa-circle-check fa-2x"></i>
                </div>
                <div className="day">{day}</div>
              </div>
            ))}
          </div>
          <hr
            style={{
              border: "none",
              borderTop: "2px dashed #888",
              margin: "20px 0",
            }}
          ></hr>
          <div className="streak-bottom">
            <div className="longest-streak each-streak">
              <div className="longest-title streak-bottom-title">
                Chuỗi dài nhất
              </div>
              <div className="longest-number streak-bottom-number">
                <span>23</span> ngày
              </div>
            </div>
            <div className="current-streak each-streak">
              <div className="current-title streak-bottom-title">
                Chuỗi hiện tại
              </div>
              <div className="current-number streak-bottom-number">
                <span>2</span> ngày
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="chart-container">
        Biểu đồ thống kê thời gian học tập
        <div className="chart-options">
          <div className="chart-type">
            <div className="bar-chart" onClick={() => setTypeChart(true)}>
              <i class="fa-solid fa-chart-column fa-2x"></i>
            </div>
            <div className="line-chart" onClick={() => setTypeChart(false)}>
              <i class="fa-solid fa-chart-line fa-2x"></i>
            </div>
          </div>
          <div className="time-duration">
            <input
              type="radio"
              id="year"
              name="duration"
              value="year"
              style={{ accentColor: "#53BF2A" }}
              onChange={timeDurationHandle}
              checked={timeDuration === "year"}
            />
            <label htmlFor="year">Năm</label>
            <input
              type="radio"
              id="month"
              name="duration"
              value="month"
              style={{ accentColor: "#53BF2A" }}
              onChange={timeDurationHandle}
              checked={timeDuration === "month"}
            />
            <label htmlFor="month">Tháng</label>
            <input
              type="radio"
              id="week"
              name="duration"
              value="week"
              style={{ accentColor: "#53BF2A" }}
              onChange={timeDurationHandle}
              checked={timeDuration === "week"}
            />
            <label htmlFor="week">Tuần</label>
          </div>
        </div>
        <div className="chart-wrapper">
          {typeChart ? (
            <TimeBarChart data={data}></TimeBarChart>
          ) : (
            <TimeLineChart data={data}></TimeLineChart>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
