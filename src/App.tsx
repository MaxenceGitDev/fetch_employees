import { useState } from "react";
import EmployeeCard from "./components/EmployeeCard";

const sampleEmployee = {
  picture: { medium: "https://randomuser.me/api/portraits/med/men/96.jpg" },
  name: { first: "John", last: "Doe" },
  email: "johndoe@mailtest.com",
};

export default function App() {
  const [employee, setEmployee] = useState(sampleEmployee);
  const getEmployee = () => {
    //send the request
    // fetch("https://www.randomuser.me/api?nat=en")
    fetch("http://localhost:3310/api/employees")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEmployee(data.results[0]);
      })
      .catch((error) => {
        console.error("Error fetching employee:", error);
      });
  };
  return (
    <>
      <EmployeeCard employee={employee} />
      <button type="button" onClick={getEmployee}>
        Get employee
      </button>
    </>
  );
}
