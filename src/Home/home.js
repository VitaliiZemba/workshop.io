import React, { Component } from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MyCard from "../components/mycard";
class Home extends Component{
    render(){
        return(
            <Container sx={{backgroundColor:'black'}}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} columns={12}>
                        <Grid item xs={8}>
                            <MyCard 
                                title="Welcome to the event details"
                                description="This is a big card with some text inside. You can complete it as per your requirement."
    
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <MyCard 
                                    title="Small Card"
                                    description="This is a small card"
        
                                />
                        </Grid>
                        <Grid item xs={8}>
                            <MyCard 
                                title="Welcome to the event details"
                                description="This is a big card with some text inside. You can complete it as per your requirement."
    
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <MyCard 
                                    title="Small Card"
                                    description="This is a small card"
        
                                />
                        </Grid>
                        <Grid item xs={8}>
                            <MyCard 
                                title="Welcome to the event details"
                                description="This is a big card with some text inside. You can complete it as per your requirement."
    
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <MyCard 
                                    title="Small Card"
                                    description="This is a small card"
        
                                />
                        </Grid>
                    </Grid>
                    
                </Box>
            </Container>
        );
    }
}
export default Home;

