import React , {useState,useEffect} from 'react';
import {Container,Grow} from '@mui/material';
import { Grid2 } from '@mui/material';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
import {useDispatch} from 'react-redux';

import {getPosts} from './actions/posts';
import { blue } from '@mui/material/colors';
import Navbar from './components/Navbar/Navbar';

const App = () => {
    const [currentId , setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect (()=>{
        dispatch(getPosts());
    },[currentId,dispatch]);


    return (
       <Container maxWidth ="lg">
           <Navbar/>
            <Grow in>
                <Container>
                    <Grid2 container className={classes.mainContainer} justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid2 item xs ={12} sm= {7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid2>
                        <Grid2 item xs ={12} sm= {4}>
                            <Form currentId = {currentId} setCurrentId={setCurrentId} />
                        </Grid2>
                    </Grid2>
                </Container>
            </Grow>
       </Container>
    );
}


export default App ;