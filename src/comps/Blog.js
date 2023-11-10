import React from "react";
import { Link } from "react-router-dom";

const Blog = ({blog,type}) => {

    const getImageError = e => { 
        e.currentTarget.src = "../assets/images/placeholder.jpg";
    }
    if(type==0) {
    return(
        <>
        <div className="post post-list-sm square">
            <div className="thumb rounded">
              <a href={`/${blog.url}`}>
                    <div className="inner">
                        <img src={blog.thumb}  onError={getImageError} alt="post-title" />
                    </div>
              </a>
            </div>
            <div className="details clearfix">
                <h6 className="post-title my-0"><a href={`/${blog.url}`}>{blog.title}</a></h6>
                <ul className="meta list-inline mt-1 mb-0">
                    <li className="list-inline-item">{blog.date}</li>
                </ul>
            </div>
        </div>
        </>
      )
    }
    else if(type==1){ 
        return (
        <>
            <div className="col-sm-6">
                    <div className="post">
                        <div className="thumb rounded">
                        <Link to={`/category/${blog.cat_id}`} className="category-badge position-absolute">{blog.category}</Link>
                          
                            <a href={`/${blog.url}`}>
                                <div className="inner">
                                    <img src={blog.thumb} onError={getImageError} alt="post-title" />
                                </div>
                            </a>
                        </div>
                        <ul className="meta list-inline mt-4 mb-0">
                            <li className="list-inline-item"><Link to="/author"><img src="assets/images/favicon.png" className="author" alt="author"/>Jobaaj Stories</Link></li>
                            <li className="list-inline-item">{blog.date}</li>
                        </ul>
                        <h5 className="post-title mb-3 mt-3"><a href={`/${blog.url}`}>{blog.title}</a></h5>
                        <p className="excerpt mb-0">{blog.content}</p>
                    </div>
            </div>
        </>
        )
    }else if(type==2){
        return (
            <>
               <div className='col-sm-6'>
                    <div className="post post-list-sm square before-seperator">
                        <div className="thumb rounded">
                            <a href={`/${blog.url}`}>
                                <div className="inner">
                                    <img src={blog.thumb} onError={getImageError} alt="post-title" />
                                </div>
                            </a>
                        </div>
                        <div className="details clearfix">
                            <h6 className="post-title my-0"><a href={`/${blog.url}`}>{blog.title}</a></h6>
                            <ul className="meta list-inline mt-1 mb-0">
                                <li className="list-inline-item">{blog.date}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
            )
    }else if(type==3){
        return(
            <>
           <div className="col-md-12 col-sm-6">
								
								<div className="post post-list clearfix">
									<div className="thumb rounded">
										
										<a href={`/${blog.url}`}>
											<div className="inner">
												<img src={blog.thumb} onError={getImageError} alt="post-title" />
											</div>
										</a>
									</div>
									<div className="details">
										<ul className="meta list-inline mb-3">
											<li className="list-inline-item"><Link to="/author"><img src={process.env.REACT_APP_URL + "assets/images/favicon.png"} className="author" alt="author"/>Jobaaj Stories</Link></li>
											<li className="list-inline-item"><Link to={`/category/${blog.cat_id}`}>{blog.category}</Link></li>
											<li className="list-inline-item">{blog.date}</li>
										</ul>
										<h5 className="post-title"><a href={`/${blog.url}`}>{blog.title}</a></h5>
										<p className="excerpt mb-0">{blog.content}</p>
									
									</div>
								</div>
							</div>
            </>
        )
    } else if(type==4) {
        return(
            <>
            	<div className="post post-list-sm circle">
                        <div className="thumb circle">
                            <a href={`/${blog.url}`}>
                                <div className="inner">
                                    <img style={{"height" : "56px"}} src={blog.thumb} onError={getImageError} alt="post-title" />
                                </div>
                            </a>
                        </div>
                        <div className="details clearfix">
                            <h6 style={{"fontSize":"12px"}} className="post-title my-0"><a href={`/${blog.url}`}>{blog.title}</a></h6>
                            <ul className="meta list-inline mt-1 mb-0">
                                <li className="list-inline-item">{blog.date}</li>
                            </ul>
                        </div>
                </div>
                </>
        )
    }else if(type==6){
        return(
            <>
           <div className="col-sm-3">
								
								<div className="post post-list clearfix" style={{marginBottom:'0px'}}>
									<div className="thumb rounded">
										
										<a href={`/${blog.url}`}>
											<div className="inner">
												<img src={blog.thumb} onError={getImageError} alt="post-title" />
											</div>
										</a>
									</div>
									<div>
										<ul className="meta list-inline mb-3">
											<li className="list-inline-item fw-bold mt-2">{blog.date}</li>
										</ul>
										<h6 style={{fontSize:".9rem"}}  className="post-title"><a href={`/${blog.url}`}>{blog.title}</a></h6>
										<p style={{fontSize:".8rem"}} className="excerpt mb-0">{blog.content}</p>
									
									</div>
								</div>
							</div>
            </>
        )
    }else if(type==7){
        return(
            <>
           <div className="col-sm-4">
								
								<div className="post post-list clearfix " >
									<div className="thumb rounded float-none">
										
										<a href={`/${blog.url}`}>
											<div className="inner">
												<img src={blog.thumb} onError={getImageError} alt="post-title" />
											</div>
										</a>
									</div>
									<div>
										<ul className="meta list-inline mb-3">
											<li className="list-inline-item fw-bold mt-2">{blog.date}</li>
										</ul>
										<h6 style={{fontSize:".9rem"}} className="post-title"><a href={`/${blog.url}`}>{blog.title}</a></h6>
										<p style={{fontSize:".8rem"}} className="excerpt mb-0">{blog.content}</p>
									
									</div>
								</div>
							</div>
            </>
        )
    }else {
        return (
            <>
             <div className="col-sm-6">
                    <div className="post post-grid rounded bordered">
                        <div className="thumb top-rounded">
                        <Link to={`/category/${blog.cat_id}`} className="category-badge position-absolute">{blog.category}</Link>
                           
                            <a href={`/${blog.url}`}>
                                <div className="inner">
                                    <img src={blog.thumb}  onError={getImageError} alt="post-title" />
                                </div>
                            </a>
                        </div>
                        <div className="details">
                            <ul className="meta list-inline mb-0">
                                <li className="list-inline-item"><Link to="/author"><img src={process.env.REACT_APP_URL + "assets/images/favicon.png"}  className="author" alt="author"/>Jobaaj Stories</Link></li>
                                <li className="list-inline-item">{blog.date}</li>
                            </ul>
                            <h5 className="post-title mb-3 mt-3"><a href={`/${blog.url}`}>{blog.title}</a></h5>
                            <p className="excerpt mb-0">{blog.content}</p>
                        </div>
                      
                    </div>
                </div>
            </>
        )
    }
}
export default Blog;