import React, {useEffect, useState } from 'react';
import base_url from '../api/phpapi';
import axios, * as others from 'axios';
import Blog from '../comps/Blog';
import Sidebar from '../comps/Sidebar';
import { Link } from 'react-router-dom';
import Insta from '../comps/Insta';
import { Helmet } from 'react-helmet';
import WorkShops from '../comps/WorkShops';
import InArticalAd from '../comps/InArticalAd';
import Skeleton from "react-loading-skeleton";
import CatLi from "../comps/CatLi";


 const  Home = () =>  {

	useEffect(()=> {
		getAllPostFromServer();
		getHomePagePost();
		getCats();
		getMails();
		
	},[]);

	var castories1 = {title:"",content:"",date:"",category:"",cat_id:"",thumb:""}

	const getAllPostFromServer =()=>{
		axios.get(`${base_url}\stories?mainstory`).then(
			(response)=>{
				setStories(response.data.CaStories);
				setNews(response.data.NewsUpdate);
				setLearn(response.data.learn);
				setPop(response.data.pop);
				setRecent(response.data.recent);
			},
			(error)=>{
				console.log(error);
			}
		)
	}

	//get categories for sidebar

	const getCats = () => {
	
		axios.get(`${base_url}\category?cats`).then(
		  (response) => {
			setIsLoading(false);
			setCat(response.data);
		  },
		  (error) => {
			console.log(error);
		  }
		);
	};

	const getMails = () => {
	
		axios.get(`${base_url}/newsLetter?mailsPosts=4`).then(
		  (response) => {
			setMails(response.data.pop);
		  },
		  (error) => {
			console.log(error);
		  }
		);
	};


	const getHomePagePost =()=>{
		axios.get(`${base_url}\post?home_page_post`).then(
			(response)=>{
				setStory(response.data);
			},
			(error)=>{
				console.log(error);
			}
		)
	}

	const [isLoading, setIsLoading] = useState(true);

	const [castories,setStories] = useState([]);
	const [story,setStory] = useState([]);
	const [pop,setPop] = useState([]);
	const [recent,setRecent] = useState([]);
	const [news,setNews] = useState([]);
	const [mail,setMails] = useState([]);
	const [learn,setLearn] = useState([]);
	const [cats, setCat] = useState([]);

	if(castories.length>0){
		castories1 = castories[0];
	}

return (
        <>
	
	<section id="hero">

		<div className="container-fluid px-8">

			<div className="row gy-4">



				<div className="col-lg-8">
					
					<div className="post featured-post-lg">
						<div className="details clearfix">
							<Link to={`/category/${story.cat_id}`} className="category-badge">{story.category}</Link>
							<h2 className="post-title"><a href={`/${story.url}`}>{story.title}</a></h2>
							<ul className="meta list-inline mb-0">
								<li className="list-inline-item"><Link to="/author">Jobaaj Stories</Link></li>
								<li className="list-inline-item">{story.date}</li>
							</ul>
						</div>
						<a href={`/${story.url}`}>
							<div className="thumb rounded">
								<div className="inner data-bg-image" data-bg-image={story.thumb} style={{ backgroundImage:`url(${story.thumb})`}}></div>
							</div>
						</a>
					</div>

				</div>

				<div className="col-lg-4">

				


					<div className="post-tabs rounded bordered">
						<ul className="nav nav-tabs nav-pills nav-fill" id="postsTab" role="tablist">
							<li className="nav-item" role="presentation"><button aria-controls="popular" aria-selected="true" style={{textAlign:"center"}} className="nav-link active" data-bs-target="#popular" data-bs-toggle="tab" id="popular-tab" role="tab" type="button">Recent</button></li>
							<li className="nav-item" role="presentation"><button aria-controls="recent" aria-selected="false" style={{textAlign:"center"}}  className="nav-link" data-bs-target="#recent" data-bs-toggle="tab" id="recent-tab" role="tab" type="button">Popular</button></li>
						</ul>
						<div className="tab-content" id="postsTabContent">
							<div className="lds-dual-ring"></div>
							<div aria-labelledby="popular-tab" className="tab-pane fade show active" id="popular" role="tabpanel">
								
								
								{
									recent.length>0 ? recent.map((item) => <Blog key={item.id} blog={item} type={4}/>)
									: "No Post"
								}
							
							</div>
							<div aria-labelledby="recent-tab" className="tab-pane fade" id="recent" role="tabpanel">
								{
									pop.length>0 ? pop.map((item) => <Blog key={item.id} blog={item} type={4}/>)
									: "No Post"
								}

							</div>
						</div>
					</div>
				</div>

			</div>

		</div>

	</section>

	<section className="main-content">
		<div className="container-fluid px-8">
			<div className="row gy-4">
				<div className="col-lg-8">

					<div className="section-header">
						<h3 className="section-title">Corporate speaks</h3>
						<img src="assets/images/wave.svg" className="wave" alt="wave" />
					</div>

					<div className="padding-30 rounded bordered">
						<div className="row gy-5">
							<div className="col-sm-6">
								
								<div className="post">
									<div className="thumb rounded">
										<Link to={`/category/${castories1.cat_id}`} className="category-badge position-absolute">{castories1.category}</Link>
										
										<a href={`/${castories1.url}`}>
											<div className="inner">
												<img src={castories1.thumb} alt="post-title" />
											</div>
										</a>
									</div>
									<ul className="meta list-inline mt-4 mb-0">
										<li className="list-inline-item"><Link to="/author"><img src="assets/images/favicon.png" className="author" alt="author"/>Jobaaj Stories</Link></li>
										<li className="list-inline-item">{castories1.date}</li>
									</ul>
									<h5 className="post-title mb-3 mt-3"><a href={`/${castories1.url}`}>{castories1.title}</a></h5>
									<p className="excerpt mb-0">{castories1.content}</p>
								</div>
							</div>
							<div className="col-sm-6">
								{
									castories.length>0 ? castories.slice(1).map((item) => <Blog key={item.id} blog={item} type={0}/>)
									: "No Post"
								}
							
							</div>
						</div>
					</div>

					<br/>

					<div className="section-header">
						<h3 className="section-title">Weekly Digest</h3>
						<img src="assets/images/wave.svg" className="wave" alt="wave" />
							<Link style={{float:"right",textDecoration:"underline",fontSize:"1.2rem"}} to={`/weekly-digest`}>View All </Link>
					</div>

					<div className="padding-30 rounded bordered">
						<div className="row">
								{
									mail.length>0 ? mail.slice().map((item) => <Blog key={item.id} blog={item} type={6}/>)
									: "No Post"
								}
						</div>

						
					</div>

				</div>
				
				<div className="col-lg-4 pt-5">
				<div className="sidebar">

				<div className="widget rounded mt-4">
					<div className="widget-header text-center">
					<h3 className="widget-title">Explore Magzine</h3>
					<img
						src={process.env.REACT_APP_URL + "assets/images/wave.svg"}
						className="wave"
						alt="wave"
					/>
					</div>
					<div className="widget-content text-center" >
						<a  href="https://stories.jobaaj.com/jobaajtimes/" target="_blank">
						<img  className='mb-1' style={{borderRadius:"5px",width:"450px"}} src="https://stories.jobaaj.com/jobaajtimes/flipbook/b1/1.webp"/>
						</a>
					</div>
				</div>

				<div className="widget rounded">
					<div className="widget-header text-center">
					<h3 className="widget-title">Explore Topics</h3>
					<img
						src={process.env.REACT_APP_URL + "assets/images/wave.svg"}
						className="wave"
						alt="wave"
					/>
					</div>
					<div className="widget-content">
					<ul className="list">
						{isLoading ? (
						<>
							<li>
							<h3>
								<Skeleton height={30} count={3} />
							</h3>
							</li>
							<li>
							<h3>
								<Skeleton />
							</h3>
							</li>
							<li>
							<h3>
								<Skeleton />
							</h3>
							</li>
						</>
						) : cats.length > 0 ? (
						cats.map((item) => <CatLi key={item.id} cat={item} />)
						) : (
						""
						)}
					</ul>
					</div>
				</div>

				</div>

      </div>
				
			</div>

		</div>
	</section>


	<section className="main-content">
		<div className="container-fluid px-8">
			<div className="row gy-4">
				<div className="col-lg-8">

					

					<InArticalAd slot="1363350575"/> 



      </div>
				
			</div>

		</div>
	</section>

	<section className="main-content">
		<div className="container-fluid px-8">
			<div className="row gy-4">
				<div className="col-lg-12">

					<div className="section-header">
						<h3 className="section-title">Startups on fire</h3>
						<img src="assets/images/wave.svg" className="wave" alt="wave" />

							<Link style={{float:"right",textDecoration:"underline",fontSize:"1.2rem"}} to={`/category/startups-on-fire`}>View All</Link>
					</div>

					<div className="padding-30 rounded bordered">
						<div className="row">
								{
									news.length>0 ? news.slice(0,4).map((item) => <Blog key={item.id}  blog={item} type={6}/>)
									: "No Post"
								}


						</div>

						
					</div>




      </div>
				
			</div>

		</div>
	</section>
	

	<section className="main-content">
		<div className="container-fluid px-8">
			<div className="row gy-4">
				<div className="col-lg-8">
					
<br/>
					<WorkShops/>

					
					<br/>
					<div className="section-header">
						<h3 className="section-title">Learn something new</h3>
						<img src="assets/images/wave.svg" className="wave" alt="wave" />
					</div>

					<div className="padding-30 rounded bordered">

						<div className="row">
								{
									learn.length>0 ? learn.slice(1,6).map((item) => <Blog key={item.id} blog={item} type={3}/>)
									: "No Post"
								}
						</div>
						{/* <div className="text-center">
							<button className="btn btn-simple">Load More</button>
						</div> */}

					</div>

				</div>
				<Sidebar/>
			</div>

		</div>
	</section>


	<Insta/>
        </>
      )
}

export default Home;