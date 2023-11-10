import React, { useEffect,useState } from "react";
import Sidebar from "../comps/Sidebar";
import { Link, useParams } from "react-router-dom";
import base_url from "../api/phpapi";
import axios, * as others from 'axios';
import Blog from "../comps/Blog";
import CardPlaceholder from "../comps/CardPlaceholder";
import { Helmet } from "react-helmet";


const Search = () => {
    
    const {keyword} = useParams();
    const [page,setPage] = useState(0);

    useEffect(() => {
        if(keyword){
            document.title=`${keyword} - Search Result`
            setPage(0);
            setPost(search_posts.length=0)
            setTimeout(() => {
                getSearch(0);
            },500)
        }
    },[keyword]);


    const [search_posts,setPost] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

    const getSearch = async (cpage)=>{
		await axios.get(`${base_url}\search?keyword=${keyword}&count=${cpage}`).then(
			(response)=>{
                let red = response.data;
                let c = search_posts.concat(red);
				let result = c.filter((item,pos) => c.indexOf(item) === pos);
                setPost(result);
                setIsLoading(false);
			},
			(error)=>{
				console.log(error);
			}
		)
	}
    const incNum = ()=>{
        setPage(page+10);
        getSearch(page+10);
    }


        return(
            <>
            <Helmet>
            <title>{keyword.replace('-'," ").toUpperCase()} - Search Results</title>
            <meta name="keyword" content="Jobaaj Stories, Ca Stories, People Stories, Public Figures, Jobaaj learnings"/>
            <meta 
            name="description"
            content="Jobaaj Stories is home to a plethora of content categorised in distinctive niches such as finance related news updates, inspirational stories about professionals and entrepreneurs in various domains, and global financial insights."/>
            </Helmet>
            <section className="page-header">
                <div className="container-xl">
                    <div className="text-center">
                        <h1 className="mt-0 mb-2">Searched for : {keyword}</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center mb-0">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Search</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>

            <section className="main-content">
                <div className="container-xl">

                    <div className="row gy-4">

                        <div className="col-lg-8">

                            <div className="row gy-4">
                            {
                                isLoading
                                ?
                                <>
                                <CardPlaceholder/>
                                </>
                                :
                                search_posts.length>0 ? search_posts.map((item) => <Blog blog={item} key={item.id} type={5}/>)
                                : "No Post Found!"
                            }
                            </div>

                            <br/> <br/>
                            {
                                search_posts.length
                                ?
                                <>
                                 <div className="text-center">
                                <button onClick={() => {  incNum()}} className="btn btn-simple">Load More</button>
                                </div> 
                                </>
                                :
                                ""
                            }
                           

                        </div>

                        <Sidebar/>
                        </div>

                </div>
            </section>
            </>
        )
}
export default Search;