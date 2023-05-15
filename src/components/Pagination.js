import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import './Pagination.css';
const Pagination=()=>{
    const {page, totalPage, handlePageChange}=useContext(AppContext)
    return (
        <div className="page">
            {page>1 && <button className="btn" onClick={()=>handlePageChange(page-1)}>Previous</button>}
            <p>page {page} of {totalPage}</p>
            {page<totalPage &&<button className="btn" onClick={()=>handlePageChange(page+1)}>Next</button>}
        </div>
    )
}

export default Pagination;