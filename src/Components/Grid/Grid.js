import React, { useEffect, useState } from "react";
import "./Grid.css";

const Grid = () => {
  function checkUncheck() {
    const selectAllCheckBox = document.getElementById("mainCheck");
    const allCheckBox = document.getElementsByClassName("lang");
    for (let i = 0; i < allCheckBox.length; i++) {
      allCheckBox[i].checked = selectAllCheckBox.checked;
    }
  }

  // const employeesURL = "http://localhost:3000/";

  // const employees = [
  //     {
  //         First_Name : "Vikash",
  //     }
  // ]
  // const [employees, setEmployees] = useState([]);

  // useEffect(() => {
  //     fetch(employeesURL)
  //         .then((res) => res.json())
  //         .then((data) => {
  //             setEmployees(data);
  //             console.log(data);
  //         });
  // }, []);

  return (
    <div className="EmpGrid">
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" id="mainCheck" onClick={checkUncheck} />
            </th>
            {/* <Grid col={props.col} /> */}
            <th>First Name</th>
            <th>Last Name</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Service Line</th>
            <th>Channel Name</th>
            <th>Portfolio</th>
            <th>Project</th>
            <th>Team Type</th>
            <th>Project Role</th>
            <th>Employee Type</th>
            <th>Vendor</th>
            <th>Charge Code</th>
            <th>Status</th>
            <th>RC</th>
            <th>Grnder</th>
            <th>CL</th>
            <th>CE Competency</th>
            <th>Safe Training</th>
            <th>AFNA Traning</th>
            <th>Contact No.</th>
            <th>Comments</th>
            <th>Base Of Location</th>
            <th>Current Location</th>
            <th>Date Of Joining</th>
            <th> FTE conversion Date</th>
            <th>LWD</th>
            <th>DOB</th>
            <th>Repoting Office</th>
            <th>Resource managing TDM</th>
            <th>Last Updated On</th>
          </tr>
        </thead>
        <tbody>
          {/* {employees.map((e, i) => {
                            return (
                                <tr key={i}>
                                    <td>
                                        <input className="lang" type="checkbox" value={e.id} />
                                    </td>
                                    <td>{e.employeeId}</td>
                                    <td>{e.employeeName}</td>
                                    <td>{e.department}</td>
                                    <td>{e.dateOfJoining}</td>
                                    <td>{e.photoFileName}</td>
                                </tr>
                            );
                        })} */}
          <tr>
            <td></td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Full Name</td>
            <td>Email</td>
            <td>Service Line</td>
            <td>Channel Name</td>
            <td>Portfolio</td>
            <td>Project</td>
            <td>Team Type</td>
            <td>Project Rold</td>
            <td>Employee Tyde</td>
            <td>Vendor</td>
            <td>Charge Code</td>
            <td>Status</td>
            <td>RC</td>
            <td>Grnder</td>
            <td>CL</td>
            <td>CE Competency</td>
            <td>Safe Trainidg</td>
            <td>AFNA Traning</td>
            <td>Contact No.d</td>
            <td>Comments</td>
            <td>Base Of Location</td>
            <td>Current Location</td>
            <td>Date Of Joining</td>
            <td> FTE conversion Date</td>
            <td>LWD</td>
            <td>DOB</td>
            <td>Repoting Office</td>
            <td>Resource managing TDM</td>
            <td>Last Updated On</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Sample Data	Vikash	Kumar	Vikash, Kumar	vikashkumasingh@deloitte.com			Omnia	ALT - End-Game	POD	Architect - (Application)	CT	Mindtree		Active	DAS AUDIT USI	Male		N/A	N/A	N/A	9312418034		Noida	Noida	1-May-22			17-Oct	No	Rakshekar, Joseph

export default Grid;
