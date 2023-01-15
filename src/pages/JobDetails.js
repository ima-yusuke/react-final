import { useState } from "react";
import { redirect } from "react-router-dom";

function JobDetail(props){
    const [flag, setFlag] = useState();
    let apply = () => {
        if(flag){
            // redirect to apply page
        }else{
            redirect("/login");
        }
    }
    /*
        get info from database and display
    */
    return (
        <>
            <button type="button" onClick={apply}>Apply</button>
        </>
    )
}
export default JobDetail;