import React from 'react';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import Styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames'
const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}}) => {
   if(!confirmed){
       return 'Loading ...';
   }
    return ( 
        <div className={Styles.container}>
            <Grid container spacing={3}  justify="center">
                
                <Grid item  component={Card} xs ={12} md={3} className={cx(Styles.card,Styles.infected)}>
                <CardContent >
                    <Typography color="textSecondary" gutterBottom >Infected</Typography>
                    <Typography variant="h5" >
                        <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                    </Typography>
                        <Typography color="textSecondary" > {new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2" >Number Of Active Cases Caused By Covid-19</Typography>
                </CardContent>
                </Grid>
                <Grid item  component={Card} xs ={12} md={3} className={cx(Styles.card,Styles.recovered)}>
                    <CardContent >
                        <Typography color="textSecondary" gutterBottom >Recovered</Typography>
                        <Typography variant="h5" >
                             <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                         </Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" >Number Of Recoveries from  Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item  component={Card} xs ={12} md={3} className={cx(Styles.card,Styles.deaths)}>
                    <CardContent >
                        <Typography color="textSecondary" gutterBottom >Deaths</Typography>
                        <Typography variant="h5" >
                             <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                         </Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" >Number Of Deaths Caused By Covid-19</Typography>
                    </CardContent>
                </Grid>
               
            </Grid>
        </div>
     );
}
 
export default Cards;


