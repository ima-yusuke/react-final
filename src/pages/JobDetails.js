import { useState } from "react";

function JobDetail(props){
    const [flag, setFlag] = useState();
    let apply = () => {
        if(flag){
            // redirect to apply page
        }else{
            // redirect to login page
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