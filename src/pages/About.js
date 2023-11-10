import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";
import Insta from "../comps/Insta";
import Sidebar from "../comps/Sidebar";


const About = () => {
    

        useEffect(() => {
                window.scrollTo(0, 0);
        });


        return (
            <>
            <div className="main-content mt-3">
            <div className="container-xl">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                     <li className="breadcrumb-item active" aria-current="page">About</li> 
                </ol>
            </nav>
            <div className="row gy-4">

                <div className="col-lg-8">
                <h2>Why we exist?</h2>
            <p className="mb-4">Jobaaj Stories started out as the story-telling arm of <a href="https://jobaaj.com/" target="_blank">Jobaaj.com. </a><br/><br/>
            But over time it kept growing on its own, taking up novel niches, such as blazing news updates, inspiring stories of magnificent people, and informational resources, all for the purpose of nourishing and educating budding professionals and students.
<br/><br/>

But if there was one thing that remained constant,<b> it was our love for story-telling!</b>
<br/><br/>
And that’s why we exist, <b> to tell you stories,</b> and hope meanwhile, that these stories enrich you with information and inspiration!

            
            </p>

            <h3>What drives us to wake up in the morning?</h3>
           

            <p className="mb-4">
            Well, it's true that any day, we could just shut off our alarms and let the platform go dormant! 
            <br/><br/>
            But what drives us to wake up every morning, and work dedicatedly on Jobaaj Stories is the sheer value that we are able to provide to our community!
            <br/><br/>
            With every piece of content we put out there, be it our news reports, stock analysis, or people’s personal career journeys, we believe we are making a positive contribution to the knowledge of our readers!
            <br/><br/>
            And that’s what this whole experience is all about!
           
            <h6>THAT is what Jobaaj Stories is about!</h6>
            <br/><br/>
            <h3>What we can do for you?</h3>
            

            Our primary story-telling element is to delve into the real-life stories of people!
We believe people are the most complicated yet one of the most abundant sources of knowledge and information.
<br/><br/>
The hardships, the failures, the setbacks, the successes, the heartbreaks, all these experiences make humans one of the most interesting information sources.

<br/><br/>
From industry leaders to students, we have covered the stories of a vast range of people in the Finance, Tech, and Data industry.

<br/><br/>
So if you have a story worth sharing, and if you feel that it has the potential to inspire others,<br/>
<a href="https://forms.gle/u5LAyytHEXBd7mfZ8" target="_blank">Then tell it to us!</a>
<br/><br/>
We’ll share it with the world!
<br/><br/>
</p>


                      
                


                  <div className="spacer" data-height="50"></div>

                    <div className="spacer" data-height="50"></div>

                   
                </div>

                <Sidebar/>

            </div>
                    <Insta/>
            </div>
        </div>
        
        
            </>


        )
    }

export default About;