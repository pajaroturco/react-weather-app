import React from 'react';

const WeatherForm = props => (
    <div className="card card-body">
        <form onSubmit={props.getWeather}>
            <div className="form-group">
                <input className="form-control" type="text" name="city" id="" placeholder="Your city name" autoFocus/>
            </div>
            <div className="form-group">
                <input className="form-control" type="text" name="country" id="" placeholder="Your country code"/>
            </div>
            <button className={'btn btn-success btn-block'}>
                Get Weather
            </button>
        </form>
    </div>
);

export default WeatherForm;