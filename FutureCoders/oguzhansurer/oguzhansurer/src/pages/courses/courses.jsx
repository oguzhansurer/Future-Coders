import { Input, Button } from 'antd';
import Footer from '../../layouts/footer/footer';
import { Link } from "react-router-dom";
import CourseCard from '../course-card/course-card';
import Selection from './select';

const Courses = () => {
  return (
    <div className='courses-page-container'>
      <div className="courses-banner">
        <div className="title">
          <h1 style={{ letterSpacing: "4px" }}>courses</h1>
          <h4>Home  /  courses</h4>
        </div>
      </div>
      
      <div className="course-all">
        <div className="course-filter">
          <h2>Filter Courses</h2>
          <div className="course-filter-sections">
            <div className="course-filter-section">
              <Selection
                defaultValue={"Select"}
              />
            </div>
          </div>
        </div>
        <div className="course-all-cards">
          <CourseCard
            className={"popular"}
            image={"https://reactheme.com/products/wordpress/echooling/wp-content/uploads/2022/01/image-2.png"}
            info={"Strategy law and Organization foundation"}
            tag1={"Artificial"}
            tag2={"5 Lessons"}
            hours={5}
            minute={32}
          />
          <CourseCard
            className={"popular"}
            image={"https://reactheme.com/products/wordpress/echooling/wp-content/uploads/2022/01/image-2.png"}
            info={"Strategy law and Organization foundation"}
            tag1={"Artificial"}
            tag2={"5 Lessons"}
            hours={5}
            minute={32}
          />
          <CourseCard
            className={"popular"}
            image={"https://reactheme.com/products/wordpress/echooling/wp-content/uploads/2022/01/image-2.png"}
            info={"Strategy law and Organization foundation"}
            tag1={"Artificial"}
            tag2={"5 Lessons"}
            hours={5}
            minute={32}
          />
          <CourseCard
            className={"popular"}
            image={"https://reactheme.com/products/wordpress/echooling/wp-content/uploads/2022/01/image-2.png"}
            info={"Strategy law and Organization foundation"}
            tag1={"Artificial"}
            tag2={"5 Lessons"}
            hours={5}
            minute={32}
          />
          <CourseCard
            className={"popular"}
            image={"https://reactheme.com/products/wordpress/echooling/wp-content/uploads/2022/01/image-2.png"}
            info={"Strategy law and Organization foundation"}
            tag1={"Artificial"}
            tag2={"5 Lessons"}
            hours={5}
            minute={32}
          />
          <CourseCard
            className={"popular"}
            image={"https://reactheme.com/products/wordpress/echooling/wp-content/uploads/2022/01/image-2.png"}
            info={"Strategy law and Organization foundation"}
            tag1={"Artificial"}
            tag2={"5 Lessons"}
            hours={5}
            minute={32}
          />
          <CourseCard
            className={"popular"}
            image={"https://reactheme.com/products/wordpress/echooling/wp-content/uploads/2022/01/image-2.png"}
            info={"Strategy law and Organization foundation"}
            tag1={"Artificial"}
            tag2={"5 Lessons"}
            hours={5}
            minute={32}
          />
          <CourseCard
            className={"popular"}
            image={"https://reactheme.com/products/wordpress/echooling/wp-content/uploads/2022/01/image-2.png"}
            info={"Strategy law and Organization foundation"}
            tag1={"Artificial"}
            tag2={"5 Lessons"}
            hours={5}
            minute={32}
          />
          <CourseCard
            className={"popular"}
            image={"https://reactheme.com/products/wordpress/echooling/wp-content/uploads/2022/01/image-2.png"}
            info={"Strategy law and Organization foundation"}
            tag1={"Artificial"}
            tag2={"5 Lessons"}
            hours={5}
            minute={32}
          />
          <CourseCard
            className={"popular"}
            image={"https://reactheme.com/products/wordpress/echooling/wp-content/uploads/2022/01/image-2.png"}
            info={"Strategy law and Organization foundation"}
            tag1={"Artificial"}
            tag2={"5 Lessons"}
            hours={5}
            minute={32}
          />
         
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default Courses;
