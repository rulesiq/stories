import React from 'react'
import Wshop from './Wshop';


const workshops = [
    {
        id:0,
        title:"Management",
        cat:"2 days Management Consulting Workshop",
        desc : "Learn to build strategic frameworks, crack case interviews, and succeed as a management consultant.",
        url:"https://go.jobaaj.com/Shubham-Agarwal",
        img:"https://www.jobaajlearnings.com/assets/workshop/2.png"
    },
    {
        id:1,
        title:"Data Science",
        cat:"5 Days Kickstarter Data Science Workshop",
        desc : "Land a 5-figure data scientist job with no coding experience. Learn the path to success now.",
        url:"https://go.jobaaj.com/tableau-workshop-p1",
        img:"https://www.jobaajlearnings.com/assets/workshop/5.png"
    },
    {
        id:2,
        title:"Trading",
        cat:"3 Days Option Trading Workshop",
        desc : "Discover the secrets to profitable options trading, no matter which way the markets move.",

        url:"https://go.jobaaj.com/option-trading-workshop",
        img:"https://www.jobaajlearnings.com/assets/workshop/4.png"
    },
    {
        id:3,
        title:"Finance",
        cat:"Financial Modelling Workshop",
        desc : "Become a Financial Modelling Expert and land your dream job in Finance with our training program.",

        url:"https://go.jobaaj.com/financial_modelling",
        img:"https://www.jobaajlearnings.com/assets/workshop/1.png"
    },
    // {
    //     id:4,
    //     title:"Data",
    //     cat:"2 Days Data Analytics Workshop",
    //             desc : "Learn Data Science with Python, SQL & Tableau without prior experience or expensive degrees.",

    //     url:"https://go.jobaaj.com/2-days-data-science-masterclass",
    //     img:"https://www.jobaajlearnings.com/assets/workshop/3.png"
    // },
    // {
    //     id:5,
    //     title:"Equity",
    //     cat:"2 Days Workshop on Equity Research Analysis",
    //     desc : "Learn to build Equity Research Reports from an industry expert with 500+ reports under their belt.",
    //     url:"https://go.jobaaj.com/2-days-Research-Report",
    //     img:"https://www.jobaajlearnings.com/assets/workshop/8.png"
    // },
    // {
    //     id:6,
    //     title:"Power BI",
    //     cat:"2 Days Power BI Workshop",
    //     desc : "Create a code-free Power BI dashboard and land a top-paying job in the field!",
    //     url:"https://go.jobaaj.com/POWER-BI",
    //     img:"https://www.jobaajlearnings.com/assets/workshop/6.png"
    // },
    // {
    //     id:7,
    //     title:"Management",
    //     cat:"2 Days Portfolio Management Workshop",
    //     desc : "Boost your wealth/asset management skills for top firms in India with our 2-day portfolio management workshop.",
    //     url:"https://go.jobaaj.com/Portfolio_Management",
    //     img:"https://www.jobaajlearnings.com/assets/workshop/7.png"
    // }
   
]


const WorkShops = () => {
  return (
   <>
   <div style={{marginTop:"20px"}} className="section-header">
						<h3 className="section-title">RUNNING <span style={{color:"#ff5e75"}}>FREE </span>⚡ WORKSHOPS ️</h3>
						<img src="assets/images/wave.svg" className="wave" alt="wave" />
					</div>

                <div className="padding-30 rounded bordered">
                     <div className="row gy-5">
                     {
                        workshops.length>0 ? workshops.map((item) => <Wshop key={item.id} work={item}/>)
                        : "No Workshops "
                    }
                </div>
                <br/>
                <br/>
                <div style={{textAlign:'center',}}>
                <a
                style={{margin:0,fontSize:'1.1rem',width:'12rem'}}
                  className="btn btn-success"
                  target='_blank'
                  href="https://www.jobaajlearnings.com/workshop?utm_source=stories&utm_medium=blogpost&utm_campaign=tracking_workshop"
                >
                     View More
                    
                    <i style={{marginLeft:"1rem",lineHeight:"5px",fontSize:'.9rem'}} class="icon-arrow-down"></i>
                    
                  
                </a>
                </div>
						
                </div>

                <div className="spacer" data-height="50"></div>

               

   </>
  )
}


export default WorkShops;
