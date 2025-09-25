import "../styles/components/skillForm.scss";

function SkillForm({ isCreate, idSkill }) {
  let idDefault;
  function handleIsCreate() {
    if (isCreate) idDefault = idSkill;
    else idDefault = null;
  }
  return (
    <div className="skill-form-container">
      <div className="skill-form-wrapper">
        <div className="skill-form-title">Lên kế hoạch cho một kỹ năng mới</div>
        <div className="space-gap"></div>
        <div className="skill-name">
          <div className="skill-name-title">Skill name</div>
          <input type="text" />
        </div>
        <div className="space-gap"></div>
        <div className="target-value">
          <div className="target-value-title">Target value </div>
          <input type="radio" name="target" id="target-1" value="basic" />
          <label htmlFor="target-1">Basic</label>
          <input type="radio" name="target" id="target-2" value="intermediate" />
          <label htmlFor="target-2">Intermediate</label>
          <input type="radio" name="target" id="target-3" value="expert" />
          <label htmlFor="target-1">Expert</label>
        </div>
        <div className="space-gap"></div>
        <div className="description">
          <div className="desc-title">Mô tả về kỹ năng</div>
          <textarea name="" id=""></textarea>
        </div>
        <div className="space-gap"></div>
        <button>Tạo</button>
      </div>
    </div>
  );
}

export default SkillForm;
