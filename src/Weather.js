import React from "react";
import "./Weather.css";
export default function Weather(){
    return(
        <div className="container">
            <form>
                <input type="search" placeholder="Enter city name"/>
                <input type="submit" placeholder="Search" className="btn btn-primary"/>
            </form>
          <h2>Paris</h2>
         <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" classname="picture"></img>
         <div class="container text-center">
  <div class="row">
    <div class="col order-last">
      First in DOM, ordered last
    </div>
    <div class="col">
      Second in DOM, unordered
    </div>
    <div class="col order-first">
      Third in DOM, ordered first
    </div>
  </div>
</div>
            
             </div>

    );
}