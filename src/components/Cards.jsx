import React from 'react';
import {Card, CardContent ,Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import cx from 'classnames';
const Cards = (props) =>{
    if(!props.data.confirmed){
        return 'Loading..!'
    }
    return(
    <div className={styles.container}>
    <br></br>
    <br></br>
    <br></br>
    <Grid container spacing={3} justify="center">
    <Grid item component={Card} className={cx(styles.card,styles.confirmed)} justify="center">
    <CardContent>
    <Typography color="body1" variant="h5" gutterBottom justify="center">CONFIRMED</Typography>
    <Typography color="body1" variant="h6" align="center">  
    <CountUp
    start={0}
    end={props.data.confirmed}
    duration={2.5}
    separator=","/>
    </Typography>
    </CardContent>
    </Grid>
    <Grid item component={Card} className={cx(styles.card,styles.active)} >
    <CardContent>
    <Typography color="body1" variant="h5" gutterBottom justify="center">ACTIVE</Typography>
    <Typography color="body1" variant="h6" align="center">  
    <CountUp
    start={0}
    end={props.data.active}
    duration={2.5}
    separator=","/>
    </Typography>
    </CardContent>
    </Grid>
    <Grid item component={Card} className={cx(styles.card,styles.recovered)}>
    <CardContent>
    <Typography color="body1" variant="h5" gutterBottom justify="center">RECOVERED</Typography>
    <Typography color="body1" variant="h6" align="center">  
    <CountUp
    start={0}
    end={props.data.recovered}
    duration={2.5}
    separator=","/>
    </Typography>
    </CardContent>
    </Grid>
    <Grid item component={Card} className={cx(styles.card,styles.death)}>
    <CardContent>
    <Typography color="body1" variant="h5" gutterBottom justify="center">DEATHS</Typography>
    <Typography color="body1" variant="h6" align="center">  
    <CountUp
    start={0}
    end={props.data.deaths}
    duration={2.5}
    separator=","/>
    </Typography>
    </CardContent>
    </Grid>
    </Grid>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </div>
    )
}
export default Cards;