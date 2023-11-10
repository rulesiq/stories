import React from "react";

const Wshop = ({work}) => {

    const getImageError = e => { 
        e.currentTarget.src = "../assets/images/placeholder.jpg";
    }
    
    return(
        <>
		 <div className="col-sm-6">
                    <div className="post">
                        <div className="thumb rounded">
                        <a href={work.url} target="_blank" className="category-badge position-absolute">{work.title}</a>
                           
                            <a href={work.url} target="_blank" >
                                <div className="inner">
                                    <img src={work.img} onError={getImageError} alt="post-title" />
                                </div>
                            </a>
                        </div>
                        <ul className="meta list-inline mt-4 mb-0">
                        </ul>
                        <h5 className="post-title mb-3 mt-3"><a href={work.url} target="_blank">{work.cat}</a></h5>
                        <p className="excerpt mb-0">{work.desc}</p>
                        <div style={{display:"block",textAlign:"right"}}>
                            <br/>
                        <a target="_blank"  className="btn btn-primary" href={work.url}>Register Now</a>
                        </div>
                    </div>
            </div>					
        </>
    )
}

export default Wshop;