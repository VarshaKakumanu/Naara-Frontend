import React, { Component, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function SignUp() {
  const [companyName, setCompanyName] = useState("");
  const [address, setAddress] = useState("");
  //const [fname, setFname] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [companyType, setCompanyType] = useState("");
  // const [lname, setLname] = useState("");
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [website, setWebsite] = useState("");
  const [number, setNumber] = useState("");
  const [department, setDepartment] = useState("");
  const [permanentAddress, setPermanentAddress] = useState("");
  const [description, setDescription] = useState("");

  const [branch, setBranch] = useState("");
  
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const handleSubmit = (e) => {
    if (userType == "Admin" && secretKey != "AdarshT") {
      e.preventDefault();
      alert("Invalid Admin");
    } else {
      e.preventDefault();

      console.log( companyName,
        companyType,
        contactPerson,
        department,
        branch,
        email,
        number,
        address,
        permanentAddress,
        city,
        website,
        description,
        password,
);
      fetch("http://localhost:5000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          companyName,
          companyType,
          contactPerson,
          department,
          branch,
          email,
          number,
          address,
          permanentAddress,
          city,
          website,
          description,
          password,

          
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status == "ok") {
            alert("Registration Successful");
          } else {
            alert("Something went wrong");
          }
        });
    }
  };

  return (
    <Container className="p-4" fluid="md" >
      <Row>
        <Col>
    
     
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
        
<div className="mb-3">
            <label>Company Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Company name"
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Company Type</label>
            <input
              type="text"
              className="form-control"
              placeholder="Company Type"
              onChange={(e) => setCompanyType(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Contact Person</label>
            <input
              type="text"
              className="form-control"
              placeholder="Contact Person"
              onChange={(e) => setContactPerson(e.target.value)}
            />
          </div>
         
          <div className="mb-3">
            <label>Department</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Department"
              onChange={(e) => setDepartment(e.target.value)}
            />
          </div>

          <div>
           <label>Branch</label><br />
            <Row>
              <Col><input
              type="radio"
              name="branch"
              value="branch1"
              onChange={(e) => setBranch(e.target.value)}
            />
            Branch1</Col>
            <Col><input
              type="radio"
              name="branch"
              value="branch2"
              onChange={(e) => setBranch(e.target.value)}
            />
          Branch2</Col></Row>
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>number</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter number"
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label> Address </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Permanent Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Address"
              onChange={(e) => setPermanentAddress(e.target.value)}
            />
          </div>
          

          <div className="mb-3">
            <label>city</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter city"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>website</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter website"
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
        
          <div className="mb-3">
            <label>Description</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
          </p>
        </form>
      </div>
    </div>


</Col>
</Row>
    </Container>
  );
}
