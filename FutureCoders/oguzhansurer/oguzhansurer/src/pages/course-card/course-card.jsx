const CourseCard = ({ hours, minute, info, tag1, tag2, image , className }) => {
    return (
      <div className={`${className}-course-card`}>
        <img src={image} alt="" />
        <div className="card-title">
          <div className="card-tags">
            <ul>
              <li style={{ color: "#d30e40" }}>{tag1}</li>
              <li>{tag2}</li>
            </ul>
          </div>
          <div className="card-info">
            <span>{info}</span>
          </div>
        </div>
        <div className="card-subtitle">
          <div className="card-subtitle-container">
            <div className="course-time">
              <span>
                {hours} Hours {minute} Minutes
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CourseCard;
  