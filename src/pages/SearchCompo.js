const SearchCompo = ({ word }) => {
  
  // setItem({fanme:"gag",
// lname:"gah"})
  return (
    <>
      {/* <div>{word}</div> */}
      <div>{word.map((name , idx)=>
        <div key={idx}>{name.fname} {name.lname}</div>
      )}</div>
    </>
  )
}

export default SearchCompo