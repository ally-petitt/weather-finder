import React from 'react'

function Form({ getWeather }) {
    return (
        <div className="container w-100 py-4 my-5">
            <form onSubmit={getWeather}>
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-md-5">
                        <input type="text"className="form-control" name="city" placeholder="city" autoComplete="off" />
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-warning" type="submit">Get Weather</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form
