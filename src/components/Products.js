import React from 'react'
import { Typography, CardMedia, CardContent, Card, CardActionArea, Button, CardActions } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { connect } from 'react-redux';
import { addProduct } from '../reducers/actions';
// import { showCart } from "../store/actions";

function Products(props) {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));


    return (
        <div>
            {/* {console.log('prosuctss', props.products)} */}
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 18 }}>


                    {props.products.map((item, idx) => {
                        if (props.activeCategory == item.category) {

                            return (
                                <Grid item xs={2} sm={4} md={4} key={idx}>
                                    

                                        <Card sx={{ maxWidth: 200 }} key={idx}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    // height="300px"
                                                    image={item.img}
                                                    alt={item.name}
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h6" component="div">
                                                        {item.name}
                                                    </Typography>
                                                    <Typography gutterBottom variant="p" component="div">
                                                        Price: {item.price}
                                                    </Typography>
                                                    <Typography gutterBottom variant="p" component="div">
                                                        inventory: {item.inventory}
                                                    </Typography>
                                                    {/* <Typography variant="body2" color="text.secondary">
                                                        {item.description}
                                                    </Typography> */}
                                                </CardContent>
                                                <CardActions>
                                                    <Button size="small" onClick={() => {
                                                        if (item.inventory) {
                                                            props.addProduct(item);
                                                           
                                                        } else {
                                                            alert("empty item");
                                                        }
                                                    }}>ADD TO CART</Button>
                                                </CardActions>
                                            </CardActionArea>
                                        </Card>
                                   
                                </Grid>
                            )
                        }
                    })}
                </Grid>
            </Box>
        </div>
    )
}

const mapStateToProps = state => ({
    products: state.productsReducer.activeProduct,
    activeCategory: state.categoryReducer.activeCategory
})
const mapDispatchToProps = { addProduct };

export default connect(mapStateToProps, mapDispatchToProps)(Products);