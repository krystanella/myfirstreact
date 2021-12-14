import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router";
import employeeService from "../services/employeeService";


const AddEmployee = () => {

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [department, setDepartment] = useState("");
    const [error, setError] = useState(""); 
    const navigate = useNavigate();
    const { employeeId } = useParams();

    useEffect(
        () => {
            if (employeeId) {

                employeeService.getEmployee(employeeId)
                    .then(
                        response => {
                            setName(response.data.name);
                            setLocation(response.data.location);
                            setDepartment(response.data.department);
                        }
                    )
                    .catch(
                        error => {
                            console.error("error!")
                        }
                    )
            }

        }, [])

    const saveEmployee = (e) => {
        e.preventDefault();
        if (name && location && department) {
            setError('');
        if (employeeId) {
            const employee = { employeeId, name, location, department };
            employeeService.putEmployee(employee)
                .then(
                    response => {
                        console.log("updated employee!", response.data)
                        navigate("/myfirstreact/employees")

                    }
                )
                .catch(
                    error => {
                        console.error("something went wrong!")
                    }
                )
        }

        else {
            const employee = { name, location, department };
            employeeService.postEmployee(employee)
                .then(
                    response => {
                        console.log("added new employee!", response.data)
                        navigate("/myfirstreact/employees")

                    }
                )
                .catch(
                    error => {
                        console.error("something went wrong!")
                    }
                );
        }
    }
    else {
        console.error('All fields must be filled up');
        setError('All fields must be filled up');
    }
}
    useEffect(
        () => {
            if (employeeId) {
                employeeService.getEmployee(employeeId)
                    .then(
                        employee => {
                            setName(employee.data.name);
                            setLocation(employee.data.location);
                            setDepartment(employee.data.department);
                            console.log(employee.data.name);
                            console.log(employee.data.location);
                            console.log(employee.data.department);
                        }
                    )
                    .catch(
                        error => {
                            console.error("something went wrong!")
                        }
                    )
            }
        },[]
    )




    return (
        <div className="container">
            <h3>Add employee</h3>
            <form>
                <div className="mb-3">
                    <label for="nameField" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nameField"
                       
                        value={name}
                        placeholder="Add employee name"
                        onChange={
                            (e) => {
                                setName(e.target.value)
                            }
                        }
                    />
                </div>
                <div className="mb-3">
                    <label for="locationField" className="form-label">Location</label>
                    <input
                        type="text"
                        className="form-control"
                        id="locationField"
                        value={location}
                        placeholder="Add employee location"
                        onChange={
                            (e) => {
                                setLocation(e.target.value)
                            }
                        }
                    />
                </div>
                <div className="mb-3">
                    <label for="departmentField" className="form-label">Department</label>
                    <input
                        type="text"
                        className="form-control"
                        id="departmentField"
                        value={department}
                        placeholder="Add employee department"
                        onChange={
                            (e) => {
                                setDepartment(e.target.value)
                            }
                        }
                    />
                </div>
                <button type="submit" className="btn btn-primary" onClick={(e) => saveEmployee(e)}>Save</button>

<p id="error">{error && <p className="error">{error}</p>}</p>
            </form>
        </div>
    )
}
export default AddEmployee
