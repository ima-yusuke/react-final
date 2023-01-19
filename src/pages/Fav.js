function Fav({id}){

    // Saving uid from sessionStorage (id)
    let logId = sessionStorage.getItem(id)

    // Getting favarite array and Saving the Array
    let Array = JSON.parse(localStorage.getItem(logId))

    return(
        <div>
            <h1>Favorite List Page</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {(Array!=null)?Array.map((val)=>
                    <tr>
                        <td>{val['jobid']}</td>
                        <td>{val['title']}</td>
                        <td>{val['salary']}</td>
                    </tr>
                    ):null}
                </tbody>
            </table>
        </div>
    )
}
export default Fav