import React from "react";
import profile from "../../src/images/Screenshot 2024-02-09 155607.png";

// const MyComponentsWithoutJSX = () => {};
// const MyComponentsWithJSX = () => {};
const MyProfile = () => {};
function Week1() {
  return (
    <div className="Week1">
      <h1>Hello World!</h1>
      <hr></hr>
      <b>
        Name : Yalla Jnan Devi Satya Prasad<br></br>
        Roll Number : 2211CS010605<br></br>
        Sem Id : G7A-34<br></br>
        Group : 7A
      </b>
      <hr></hr>
      {/* <h1>Displaying my components without JSX</h1>
      <MyComponentsWithoutJSX />
      <hr />
      <h1>Displaying my components with JSX</h1>
      <MyComponentsWithJSX />
      <hr /> */}
      <h1>My Profile</h1>
      <MyProfile />
      <img
        src={profile}
        style={{
          height: "200px",
          widht: "200px",
          borderRadius: "50px",
          border: "5px solid #000000",
        }}
        alt="My profile picture"
      ></img>
      <p>
        <b>
          Myself Yalla Jnan Devi Satya Prasad of Roll Number 2211CS010605
          I am currently studying Btech 2nd year in Malla Reddy University
          Am a student enrolled in CSE General course.
          My schooling is done in Chennai, and completed inter from Narayana College 
        </b>
      </p>
    </div>
  );
}

export default Week1;
