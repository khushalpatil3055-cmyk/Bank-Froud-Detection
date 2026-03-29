import React from 'react'

const Search = () => {
  return (
    <div>
      <form className = "d-flex"> 
           <input className="form-control me-2" type="search" placeholder="Search transaction ID / account number..." aria-label="Search" style={{width:"600px",marginLeft : "250px"}}/>
        <button type="button" class="btn btn-primary rounded-circle " style={{backgroundColor:"#0F3D3E"}}>🔍︎</button>
      </form>
    </div>
  )
}

export default Search
