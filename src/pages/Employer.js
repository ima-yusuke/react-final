import jsonSrv from "../Services/jsonSrv";

function Employer({ids}){
    let getApp = () => {
        const formData = new FormData();
        formData.append("sid", ids[1]);
        formData.append("jobid", ids[2]);
        jsonSrv.send('jobList.php', formData)
        .then(res=>{
            console.log(res);
        })
    }
    getApp();
    return(
        <>
             <h1>hey</h1>
        </>
    )
   
}
export default Employer;