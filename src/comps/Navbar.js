import React, {Component}  from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component{
    render(){
        return(
           <>
              <header className="header-default">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-xl">
                        <Link className="navbar-brand" to="/"><img style={{width:"100px"}} src={process.env.REACT_APP_URL + "assets/images/logo.png"} alt="logog" /></Link> 

                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                             
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="#">Corporates</Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="category/startups-on-fire">Startups on fire</Link></li>
                                        <li><Link className="dropdown-item" to="category/market-leaders-in-action">Market leaders in action</Link></li>
                                        <li><Link className="dropdown-item" to="category/billionaire-insights">Billionaire Insights</Link></li>
                                        <li><Link className="dropdown-item" to="category/pathbreaking-announcements">Pathbreaking Announcements</Link></li>
                                    </ul>
                                </li>

                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="#">Economic Expose</Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="category/crazy-stock-movements">Crazy stock movements</Link></li>
                                        <li><Link className="dropdown-item" to="category/the-ipo-train">The IPO train</Link></li>
                                        <li><Link className="dropdown-item" to="category/quarterly-results">Quarterly results</Link></li>
                                        <li><Link className="dropdown-item" to="category/financial-insight">Financial Insight</Link></li>
                                    </ul>
                                </li>

 
                                <li className="nav-item">
                                    <Link style={{fontWeight:'bold',color:'#fd5d75'}} className="nav-link" to="category/must-reads">Must reads!</Link>
                                </li>


                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="#">People@Work</Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="category/entrepreneurial-spirit">Entrepreneurial Spirit</Link></li>
                                        <li><Link className="dropdown-item" to="category/financial-fables">Financial fables</Link></li>
                                        <li><Link className="dropdown-item" to="category/struggle-to-success">Struggle to Success</Link></li>
                                        <li><Link className="dropdown-item" to="category/jobaaj-mentors" style={{color:'#fd5d75'}}>Jobaaj Mentors</Link></li>
                                        {/* <li><Link className="dropdown-item" to="category/jobaaj-students" style={{color:'#fd5d75'}}>Jobaaj Students</Link></li> */}
                                    </ul>
                                </li>

                              

                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="#">Learning resources</Link>
                                    <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="category/ca-cfa-frm">CA/CFA/FRM</Link></li>
                                    <li><Link className="dropdown-item" to="category/ai-ml">AI/ML</Link></li>
                                    <li><Link className="dropdown-item" to="category/top-investors">Top investors</Link></li>
                                        <li><Link className="dropdown-item" to="category/around-the-globe">Around the globe</Link></li>
                                        <li><Link className="dropdown-item" to="category/articleships">Articleships</Link></li>
                                        <li><Link className="dropdown-item" to="category/industrial-training">Industrial training</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div className="header-right">
                            
                            <div className="header-buttons">
                                <button className="search icon-button">
                                    <i className="icon-magnifier"></i>
                                </button>
                                <button className="burger-menu icon-button">
                                    <span className="burger-icon"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            </>
        )
    }
}