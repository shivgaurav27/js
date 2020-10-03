import React ,{useState , useEffect} from 'react';
import {NativeSelect,FormControl } from '@material-ui/core'
import Styles from './CountryPickr.modules.css'
import {fetchCountries} from '../../api'

const CountryPickr = ({handleCountryChange}) => {
    const [fetchedCountries,setFetchedCountries]= useState([]);

    useEffect(()=>{
        const fetchAPI = async()=>{
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    },[fetchedCountries])
    return ( 
        <div>
        <FormControl >
            <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value="global">Global</option>
                {
                    fetchedCountries.map((country,i)=><option key={i} value={country}>{country}</option>)
                }
            </NativeSelect>
        </FormControl>
        </div>
     );
}
 
export default CountryPickr;