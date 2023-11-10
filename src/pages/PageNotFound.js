import React, { Component } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../comps/Sidebar";


class PageNotFound extends Component {

    render(){
        return (
            <>
              <div className="main-content mt-3" style={{marginBottom:'550px'}}>
            <div className="container-xl">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                     <li className="breadcrumb-item active" aria-current="page">404 Page Not Found</li> 
                </ol>
            </nav>
            <div className="row">

                <div className="col-lg-8">
                <section class="page_404">
                    <div class="container">
                        <div class="row">	
                        <div class="col-sm-12 ">
                        <div class="col-sm-10 col-sm-offset-1  text-center">
                        <div class="four_zero_four_bg">
                            <h1 style={{fontSize:"100px"}} class="text-center">404</h1>
                        </div>
                        
                        <div class="contant_box_404" style={{textAlign:"center"}}>
                        <h3  style={{textAlign:"center"}} class="h2">
                        Look like you're lost
                        </h3>
                        
                        <p style={{textAlign:"center"}} >the page you are looking for not avaible!</p>
                        
                        <Link to="/" class="link_404">Go to Home</Link>
                    </div>
                        </div>
                        </div>
                        </div>
                    </div>
                </section>
                </div>

                <Sidebar/>

            </div>
            </div>
        </div>
        
        
            </>


        )
    }
}

export default PageNotFound;