import httpclient from "../commons/httpclient";

const getHello = () =>{
    return httpclient.get('/hello');
}
export default {getHello}