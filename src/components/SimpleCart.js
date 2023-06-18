import React from "react";
import { connect } from "react-redux";
import { Badge, Menu, MenuItem, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { deleteProduct } from "../reducers/actions";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

const SimpleCart = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <div style={{ position: "absolute", right: "20px" }}>


                <section >
                    <Button style={{ color: 'white' }}
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        Cart ({props.count})
                    </Button>
                    {console.log('carttt in page', props.cart)}

                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }} >

                        { props.cart.map((item, idx) => {

                                return (
                                    <MenuItem key={idx}>
                                        {item.map((item, idx) => {
                                            return (
                                                <div>

                                                    <span>{item.name}</span>
                                                    <Button
                                                        color="secondary"
                                                        onClick={() => {
                                                            props.deleteProduct(item.name, idx);
                                                        }}>

                                                        Delete
                                                    </Button>
                                                </div>

                                            )
                                        })}
                                        {/* {console.log('item.name',item[idx].name)} */}
                                    </MenuItem>
                                );
                            })


                        }
                    </Menu>


                </section>
            </div>
        </>
    );
};

const mapStateToprops = (state) => {
    return {
        cart: state.productsReducer.cart,
        count: state.productsReducer.count

    };
};

const mapDispatchToProps = { deleteProduct };

export default connect(mapStateToprops, mapDispatchToProps)(SimpleCart);