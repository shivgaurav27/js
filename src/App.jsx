import React, { Component } from 'react';
import {Card ,Chart ,CountryPickr} from './Component';
import Styles from './App.module.css';
import {fetchData} from './api';
import coronaImage from './Component/Image/covid-19.png';
class App extends Component{
        state={
            data:{},
            country:'',
        }
    async componentDidMount(){
        const fetchedData = await fetchData();
        // console.group("data=>",data)
        this.setState({data:fetchedData})
    }

    handleCountryChange = async(country)=>{
        const fetchedData = await fetchData(country);
        console.log(fetchedData)
        this.setState({data:fetchedData , country})

        // fetch the data
        // set the state
 
    }
 


    render(){
        const {data ,country}= this.state;
        return(
            <div className={Styles.container}>
                <img  className={Styles.image} src={coronaImage} alt='COVID-19'/>
                <Card  data={data}/>
                <CountryPickr handleCountryChange={this.handleCountryChange}/>
                <Chart  data={data} country={country}/>
            </div>
        )
    }
}

export default App;