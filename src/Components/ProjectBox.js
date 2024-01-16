import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    WeatherappDesc : "This website is a landing page for weather application. It is a responsive website which was made to understand gatsby.js.",
    WeatherappGithub : "https://github.com/joyaljojo/Weather_application_using_gatsby.js",
    WeatherappWebsite : "https://joyaljojo.github.io/Weather_application_using_gatsby.js/",

    RestaurantDesc : "A website that shows you the menu of a restuarnet website. This was a one of my first projects made while i was studing the course.",
    Restauranthub : "https://github.com/joyaljojo/restaurant_webapplication-",
    RestaurantWebsite : " https://joyaljojo.github.io/restaurant_webapplication-/",

    TrafficSignalDesc:"This is a sample project i did for government of Canada this is a kind of signal analazyer which used macro and this was a group project where we had to reverse enginer macro to web application and moreover it gave me experience with aws ",
    TrafficSignalGithub:"https://github.com/Bronson-Technologies/signal-analyzer",
    TrafficSignalWebsite:"http://testfrontendre.s3-website.ca-central-1.amazonaws.com",
    
    CourseRegisterDesc:"This is a project that uses c# asp.net, as its a course registering course it can be used to add students add tasks and add status too.",
    CourseRegisterGithub:"https://github.com/joyaljojo/Course_registration_asp.net",
    CourseRegisterWebsite:"",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox