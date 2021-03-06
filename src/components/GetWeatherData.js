// You can look up cities based on woeid by replacing id at the end of this URL https://www.flickr.com/places/info/2364558

import React from 'react';
import PrevDateAndTime from './PrevDateAndTime';
import CurrDateAndTime from './CurrDateAndTime';
import WeatherBlock from './WeatherBlock';

class GetWeatherData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currData: null,
            prevData: null,
            year: 0,
            month: '',
            numericMonth: 0,
            dayOfMonth: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            dayOfWeek: '',
            localGmtDifferential: '',
            woeid: 'null',
            cityGmtDifferential: 0,
            netDifferential: 0,
            historyChoice: 0,
            citySelection: null
        }
        this.parseTimeAndDifferential = this.parseTimeAndDifferential.bind(this);
        this.fetchCurrData = this.fetchCurrData.bind(this);
        this.fetchPrevData = this.fetchPrevData.bind(this);
        this.chooseWeatherBlock = this.chooseWeatherBlock.bind(this);
        this.reloadPage = this.reloadPage.bind(this);
    }
    reloadPage() {
        window.location.reload()
    }
    //Callback function for slider that sets value of slider in state to be used as index of previousWeather array in choosing to display a PrevDateAndTime and WeatherBlock
    chooseWeatherBlock(e) {
        let historyChoice = e.target.value;
        this.setState({
            historyChoice: historyChoice
        })
    }

    parseTimeAndDifferential() {
        let currentTime = Date();
        let year = parseInt(currentTime.substring(11,15));
        let month = currentTime.substring(4,7);
        let numericMonth = new Date().getMonth() + 1;
        let dayOfMonth = parseInt(currentTime.substring(8,10));
        let hours = parseInt(currentTime.substring(16,18));
        let minutes = parseInt(currentTime.substring(19,21));
        let seconds = parseInt(currentTime.substring(22,24));
        let dayOfWeek = currentTime.substring(0,3);
        let localGmtDifferential = parseInt(currentTime.slice(currentTime.indexOf('GMT')+3).split(' ')[0].substring(0,3));
        let cityGmtDifferential = this.props.cityGmtDifferential
        let netDifferential = cityGmtDifferential - localGmtDifferential;

        this.setState({
            year: year,
            month: month,
            numericMonth: numericMonth,
            dayOfMonth: dayOfMonth,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
            dayOfWeek: dayOfWeek,
            localGmtDifferential: localGmtDifferential,
            cityGmtDifferential: cityGmtDifferential,
            netDifferential: netDifferential
        })
    }
    //Fetch the current weather by passing the selected woeid into the API
    fetchCurrData(props) {
        fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${this.state.woeid}/`)
        .then(response => response.json())
        .then(currData => this.setState({
            currData: currData
        }));
    }
    //Fetch roughly the past week of weather by passing the selected woeid and parsed current date into the API
    fetchPrevData(props) {
        fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${this.state.woeid}/${this.state.year}/${this.state.numericMonth}/${this.state.dayOfMonth}/`)
        .then(response => response.json())
        .then(prevData => this.setState({
            prevData: prevData
        }));
    }
    //Asynchronize componentDidMount lifecycle method to call the fetch methods and for some reason "await" doesn't work, so delay call of functions by 10ms in a setInterval function
    async componentDidMount() {
        setInterval(() => {
            if ((this.state.woeid !== null) && (this.props.woeid !== null) && (this.state.woeid !== this.props.woeid)) {
                this.setState({
                    woeid: this.props.woeid,
                    googleMap: this.props.googleMap,
                    citySelection: this.props.citySelection
                })
                this.parseTimeAndDifferential();
                this.fetchPrevData();
                this.fetchCurrData();
            }
        }, 10)
    }

    render() {
        //Render previousWeather by looping over array and passing the parsed timestamp as props to PrevDateAndTime and the localGmtDifferential to the WeatherBlock

        const previousWeather = [];
        let currentWeather = [];

        if (this.state.prevData !== null) {
            this.state.prevData.forEach(i => {
                previousWeather.push(<div key={i.id}><PrevDateAndTime dayOfMonth={this.state.dayOfMonth} prevData={i} cityGmtDifferential={this.state.cityGmtDifferential}/><WeatherBlock prevData={i}/></div>)
            });
        }
        //Drill into the currentWeather for the first index of the array to get the actual current weather (the rest of the data is forecast)
        if (this.state.currData !== null) {
            currentWeather = this.state.currData.consolidated_weather[0];
        }

        let maxHistoryRange = previousWeather.length - 1;

        //If the data are not null, indicated by this.state.year not being 0, return the data as those components
        return (
            <div className='container' style={{display: this.state.year === 0 ? 'none' : 'flex'}}>

                <div className='veil'></div>

                <iframe className="map" title="googMap" src={this.state.googleMap}></iframe>

                <div style={{display: this.state.currData === null || this.state.prevData === null ? 'flex' : 'none'}} className="loading-spinner"><div></div><div></div></div>

                <div className='current-block'><div className='location-block'>{this.state.citySelection}</div><div><CurrDateAndTime state={this.state}/><WeatherBlock prevData={currentWeather}/></div></div>

                <span className="last-week" style={{display: this.state.prevData === null ? 'none' : 'block'}}>Last Week</span><input className='chronology-slider' style={{display: this.state.prevData === null ? 'none' : 'block'}} type='range' min='0' max={maxHistoryRange} onChange={this.chooseWeatherBlock}/><span className="today" style={{display: this.state.prevData === null ? 'none' : 'block'}}>Today</span>

                <div className='previous-block' style={{display: this.state.prevData === null ? 'none' : 'block'}}>{previousWeather[this.state.historyChoice]}<button onClick={this.reloadPage}>Different City</button></div>
            </div>
        );
    }
}

export default GetWeatherData;
