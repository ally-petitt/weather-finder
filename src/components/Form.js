import React from 'react'

function Form({ getWeather, status }) {

    return (
        <div className="container w-100 pb-4 my-5">
            <form onSubmit={getWeather}>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-5 d-flex flex-column align-items-start">
                        <input type="text"className="form-control" name="city" placeholder="city" autoComplete="off" />
                        {status == 404 ? 
                            <small className="text-danger text-small ps-1" style={{justifySelf: "flex-start"}}>
                                City Not Found
                            </small> 
                            : null}
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-dark" type="submit">Get Weather</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form
