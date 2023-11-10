import React, { Component, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Footer = () => {

	const navigate = useNavigate();
	const [search,setSearch] = useState(false);

	const [switchToggle,setSwitchedToggle] = useState(false);
	
	const handleSearch = () => {
	 	switchToggle ? setSwitchedToggle(false) : setSwitchedToggle(true);
	    navigate(`/search/${search}`);
	}

	function getData(val){
		setSwitchedToggle(true);
		setSearch(val.target.value);
	}

	return(
        <>
		<footer>
		<div className="container-xl">
			<div className="footer-inner">
				<div className="row d-flex align-items-center gy-4">
					<div className="col-md-4">
						<span className="copyright">© {new Date().getFullYear()} Jobaaj Stories.</span>
					</div>

					<div className="col-md-5 text-center">
						<ul className="social-icons list-unstyled list-inline mb-0">
						<li  className="list-inline-item"><Link to="about" style={{fontSize:'13px !important'}}>About Us</Link></li>
						<li className="list-inline-item"><a  href="#"  target="_blank">|</a></li>
						<li className="list-inline-item"><a  href="https://www.jobaaj.com/contact-us"  target="_blank">Contact Us</a></li>
						<li className="list-inline-item"><a  href="#"  target="_blank">|</a></li>

						<li className="list-inline-item"><a  href="https://www.jobaaj.com/"  target="_blank">Jobaaj.com</a></li>
						<li className="list-inline-item"><a  href="#"  target="_blank">|</a></li>

						<li className="list-inline-item"><a  href="https://www.linkedin.com/showcase/jobaaj-stories/"  target="_blank"><i className="fab fa-linkedin"></i></a></li>
					<li className="list-inline-item"><a  href="https://www.instagram.com/jobaajstories/"  target="_blank"><i className="fab fa-instagram"></i></a></li>
					<li className="list-inline-item"><a  href="https://www.facebook.com/jobaaj.com95/"  target="_blank"><i className="fab fa-facebook"></i></a></li>
					</ul>
					</div>

					<div className="col-md-3">
						<a href="#" id="return-to-top" className="float-md-end"><i className="icon-arrow-up"></i>Back to Top</a>
					</div>
				</div>
			</div>
		</div>

		<div className="container-xl">
			<div className="footer-inner">
				<div className="row d-flex align-items-center gy-4">
					<div className="col-md-6">
						<span className="copyright">Our Brands by Nishtya Infotech Private Limited:</span>
					</div>

				<div className="col-md-12 text-center" style={{display:'flex',justifyContent:'space-around',alignItems:'flex-end'}}>
            <div className="pro_logo">
                <a target="_blank" href="https://www.jobaaj.com/"> <img src="https://www.procapitas.com/assets/procapitas/jobaaj.png" style={{width: '4rem'}} alt=""/></a>
            </div>
            <div className="pro_logo">
                <a target="_blank" href="https://www.stories.jobaaj.com/"><img src="https://www.procapitas.com/assets/procapitas/logo.png" style={{width: '4rem'}} alt=""/></a>
            </div>
            <div className="pro_logo">
                <a target="_blank" href="https://www.jobaajlearnings.com/"><img src="https://www.procapitas.com/assets/procapitas/d-logo.png" alt="" style={{width: '8rem'}}/></a>
               
            </div>

			<div className="pro_logo">
                <a target="_blank" href="https://www.procapitas.com/"><img src="https://www.procapitas.com/assets/procapitas/procapitas.png" alt="" style={{width: '3rem'}}/></a>
               
            </div>
            <div className="pro_logo">
                <a target="_blank" href="https://www.eshancollege.com/"><img src="https://www.procapitas.com/assets/procapitas/eshan.png" style={{width: '4rem'}} alt=""/></a>
               
            </div>


         </div>
        

					
				</div>
			</div>
		</div>


		</footer>
			<div className={`search-popup ${switchToggle ? 'visible' : ''}`}>
				<button type="button" className="btn-close" aria-label="Close"></button>
				<div className="search-content">
					<div className="text-center">
						<h3 className="mb-4 mt-0">Search Anything...!</h3>
					</div>
					<form className="d-flex search-form">
						<input className="form-control me-2" onKeyPress={event => {
                if (event.key === 'Enter') {
					handleSearch()
                }
              }} onChange={getData} id="searchInput" type="search" placeholder="Type Here ..." aria-label="Search"/>
						<button className="btn btn-default btn-lg" onClick={() => {handleSearch()}} type="button"><i className="icon-magnifier"></i></button>
					</form>
				</div>
			</div>
			<div className="canvas-menu d-flex align-items-end flex-column">
				<button type="button" className="btn-close" aria-label="Close"></button>

				<div className="logo">
					<img style={{width:"100px"}} src={process.env.REACT_APP_URL + "assets/images/logo.png"} alt="logo" />
				</div>

				<nav>
				<ul className="vertical-menu">
                             
							 <li>
								 <a href="#">Corporates</a>
									 <ul className="submenu">
									    <li><Link  to="category/startups-on-fire">Startups on fire</Link></li>
                                        <li><Link  to="category/market-leaders-in-action">Market leaders in action</Link></li>
                                        <li><Link  to="category/billionaire-insights">Billionaire Insights</Link></li>
                                        <li><Link  to="category/pathbreaking-announcements">Pathbreaking Announcements</Link></li>
									</ul>
								 </li>
 
								 
								 <li className="nav-item dropdown">
									<a href="#">Economic Expose</a>
                                    <ul className="submenu">
                                        <li><Link  to="category/crazy-stock-movements">Crazy stock movements</Link></li>
                                        <li><Link  to="category/the-ipo-train">The IPO train</Link></li>
                                        <li><Link  to="category/quarterly-results">Quarterly results</Link></li>
                                        <li><Link  to="category/financial-insight">Financial Insight</Link></li>
                                    </ul>
                                </li>

								
								 <li>
									 <Link style={{fontWeight:'bold',color:'#fd5d75'}}  to="category/must-reads">Must reads!</Link>
								 </li>
 
								 
								 <li className="nav-item dropdown">
								 <a href="#">People@Work</a>
                                    <ul className="submenu">
                                        <li><Link  to="category/entrepreneurial-spirit">Entrepreneurial Spirit</Link></li>
                                        <li><Link  to="category/financial-fables">Financial fables</Link></li>
										<li><Link  to="category/struggle-to-success">Struggle to Success</Link></li>
                                        <li><Link  to="category/jobaaj-mentors" style={{color:'#fd5d75'}}>Jobaaj Mentors</Link></li>
                                        {/* <li><Link  to="category/jobaaj-students" style={{color:'#fd5d75'}}>Jobaaj Students</Link></li> */}
                                    </ul>
                                </li>

								 <li>
									<a href="#">Learning resources</a>
										<ul className="submenu">
										<li><Link  to="category/ca-cfa-frm">CA/CFA/FRM</Link></li>
										<li><Link  to="category/ai-ml">AI/ML</Link></li>
											<li><Link  to="category/top-investors">Top investors</Link></li>
											<li><Link  to="category/around-the-globe">Around the globe</Link></li>
											<li><Link  to="category/articleships">Articleships</Link></li>
											<li><Link  to="category/industrial-training">Industrial training</Link></li>
										</ul>
                                </li>
							 </ul>
					
				</nav>

				<ul className="social-icons list-unstyled list-inline mb-0 mt-auto w-100">
					
					<li className="list-inline-item"><a  href="https://www.linkedin.com/showcase/jobaaj-stories/"  target="_blank"><i className="fab fa-linkedin"></i></a></li>
					<li className="list-inline-item"><a  href="https://www.instagram.com/jobaajstories/"  target="_blank"><i className="fab fa-instagram"></i></a></li>
					<li className="list-inline-item"><a  href="https://www.facebook.com/jobaaj.com95/"  target="_blank"><i className="fab fa-facebook"></i></a></li>
				</ul>
			</div>
        </>
        )
}

export default Footer;