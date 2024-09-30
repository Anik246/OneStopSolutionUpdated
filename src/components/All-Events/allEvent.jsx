import React from "react";
import "./allEvent.css";
function AllEvent() {
    return (
        <div className="event-main-container">
            <div className="event-inner-container">
                <div className="event-title">
                    <h1>Full Stack Web Development Complete guideline</h1>
                </div>
                <div className="event-time">
                    <i class="fa-regular fa-clock"></i>
                    <p>29 April 2024, 02:42</p>
                </div>
                <div className="location" >
                       <p>At uiu campus, Dhaka, Bangladesh</p>
                </div>
                <div className="events-line">
                   <hr />
                </div>
                <div className="event-photos">
                    <img src="src/components/Events/aiEvents.jpeg" alt="/" />
                </div>
                <div className="event-description">
                    
                    Join us at the AI Innovations Summit 2024, a premier event bringing together the brightest minds in artificial intelligence and machine learning from around the globe. Over three days, this summit will explore the latest advancements, trends, and applications of AI across various industries, providing a platform for innovation, collaboration, and networking.
                      
                    
                </div>
                <div className="hr-line2" >
                    
                </div>
            </div>

        </div>
    )
}
export default AllEvent;