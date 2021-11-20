import httpclient from "../commons/httpclient";

const getEmployees = () =>{
    return httpclient.get('/employees');
}
export default {getEmployees}