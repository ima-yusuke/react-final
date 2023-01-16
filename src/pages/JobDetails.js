import { useState } from "react";
import { redirect } from "react-router-dom";

function JobDetail(props){
    const [flag, setFlag] = useState();
    const [job, setJob] = useState();
    const [app, setApp] = useState();
    let apply = (e) => {
        console.log(e.target)
        // if(flag){
        //     // send data to database
        // }else{
        //     redirect("/login");
        // }
    }
    return (
        <>
            <section>

            </section>
            <button type="button" onClick={apply}>Apply</button>
        </>
    )
}
export default JobDetail;