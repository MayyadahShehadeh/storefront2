import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Toolbar, Box, Container} from '@mui/material';

import { connect } from "react-redux";
import SimpleCart from './SimpleCart';



function Header(props) {



    return (
        <AppBar position="static" >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <p>
                        Store Front
                    </p>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>

                        {/*  ================ here add cart icon ----------------------- */}
                        <SimpleCart />
                        {/* <Button color="inherit"
                         onClick={() => props.showCart(!props.show) } 
                         >
                            Cart ({props.count})</Button> */}

                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
}

const mapStateToprops = (state) => {
    return { cart: state.productsReducer.cart,
    count: state.productsReducer.count
    };
  };

export default connect(mapStateToprops)(Header);