function Table({obj,setObj}){
    let getObj =null
    const get=()=>{
        getObj=JSON.parse(localStorage.getItem(2))
        console.log(getObj)
        setObj(getObj)
    }
    return(
        <div>
            <button onClick={get}>GET</button> 
            <h1>{obj!=="nothing" ? obj['fname'] :obj}</h1>
        </div>
    )
}
export default Table