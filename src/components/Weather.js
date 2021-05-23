import React from 'react'

function Weather({ info }) {
    return (
        <div className="container">
          <div className="cards">
              <h1>{info.city}, {info.country}</h1>
              <h5 className="py-4">
                  <i className={`wi ${info.icon} display-1`}></i>
              </h5>
              <h1 className="py-2">{info.temp}&deg; C</h1>

              <div className="container w-100 d-flex justify-content-center align-items-center">
                <h3 className="d-flex">
                    <div className=" mx-3 mx-md-5 my-3 d-flex flex-column justify-content-center align-items-center">
                        <span>Low</span>
                        <span className="px-4">{info.minTemp}&deg; C</span>
                    </div>
                    <div className=" mx-3 mx-md-5 my-3 d-flex flex-column justify-content-center align-items-center">
                        <span>High</span>
                        <span className="px-4">{info.maxTemp}&deg; C</span>
                    </div>
                </h3>
              </div>
              <h4 className="py-3">{info.description}</h4>
            </div> 
        </div>
    )
}

export default Weather
