import { createContext,  useState } from "react";
import { apiUrl } from "../apiUrl";

export const AppContext= createContext();

export default function AppContextProvider({children}){

    const [page, setPage]=useState(1);
    const [totalPage, setTotalPage]=useState(null);
    const [posts, setPosts]= useState([]);
    const [loading, setLoading]=useState(false);

    

    async function fetchBlogs(page=1){
        setLoading(true);
        let url=`${apiUrl}?page=${page}`;
        try{
            
            const result=await fetch(url);
            const data=await result.json();
            
            
            setPage(data.page);
            setPosts(data.posts);
            setTotalPage(data.totalPages);
            
        }
        catch(err){
            console.log("error in fetching data")
            console.log(err);
            setPage(1);
            setPosts([]);
            setTotalPage(null);
        }
        setLoading(false);
    }

    function handlePageChange(page){
        setPage(page);
        fetchBlogs(page);
    }
    

    const value={
        page, setPage, totalPage, setTotalPage, loading, setLoading, posts, setPosts, fetchBlogs, handlePageChange
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}