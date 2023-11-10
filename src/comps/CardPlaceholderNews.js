import React from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import 'react-loading-skeleton/dist/skeleton.css'


const CardPlaceholderNews = ({cat}) => {
    return(
        <>
		 <div className="col-sm-4">
            <Skeleton  height={200}/>
            <div className="details">
                <h5 className="post-title mb-3 mt-3"><Skeleton   height={8}  />
                <Skeleton   height={5} width={320}  /><Skeleton  width={280} height={5}  />
                <p className="excerpt mb-0"><Skeleton  width={150} height={5}  /></p>
                </h5>
            </div>
        </div>	
        <div className="col-sm-4">
            <Skeleton  height={200}/>
            <div className="details">
                <h5 className="post-title mb-3 mt-3"><Skeleton   height={8}  />
                <Skeleton   height={5} width={320}  /><Skeleton  width={280} height={5}  />
                <p className="excerpt mb-0"><Skeleton  width={150} height={5}  /></p>
                </h5>
            </div>
        </div>	
        <div className="col-sm-4">
            <Skeleton  height={200}/>
            <div className="details">
                <h5 className="post-title mb-3 mt-3"><Skeleton   height={8}  />
                <Skeleton   height={5} width={320}  /><Skeleton  width={280} height={5}  />
                <p className="excerpt mb-0"><Skeleton  width={150} height={5}  /></p>
                </h5>
            </div>
        </div>	
        <div className="col-sm-4">
            <Skeleton  height={200}/>
            <div className="details">
                <h5 className="post-title mb-3 mt-3"><Skeleton   height={8}  />
                <Skeleton   height={5} width={320}  /><Skeleton  width={280} height={5}  />
                <p className="excerpt mb-0"><Skeleton  width={150} height={5}  /></p>
                </h5>
            </div>
        </div>	
        <div className="col-sm-4">
            <Skeleton  height={200}/>
            <div className="details">
                <h5 className="post-title mb-3 mt-3"><Skeleton   height={8}  />
                <Skeleton   height={5} width={320}  /><Skeleton  width={280} height={5}  />
                <p className="excerpt mb-0"><Skeleton  width={150} height={5}  /></p>
                </h5>
            </div>
        </div>	
        <div className="col-sm-4">
            <Skeleton  height={200}/>
            <div className="details">
                <h5 className="post-title mb-3 mt-3"><Skeleton   height={8}  />
                <Skeleton   height={5} width={320}  /><Skeleton  width={280} height={5}  />
                <p className="excerpt mb-0"><Skeleton  width={150} height={5}  /></p>
                </h5>
            </div>
        </div>					
        </>
    )
}

export default CardPlaceholderNews;