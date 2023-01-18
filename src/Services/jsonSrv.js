import httpCommon from "../httpCommon";
class jsonSrv{
    send(pageName,data){
        return httpCommon.post(pageName,data);
    }
    get(pageName,data=""){
        return httpCommon.get(pageName,data);
    }
}
export default new jsonSrv();