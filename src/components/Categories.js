import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { connect } from 'react-redux';
import { activeCategory } from '../store/Categories.reducer';


function Categories(props) {
 

    return (
        <div role="presentation" >
            
            <Breadcrumbs maxItems={2} aria-label="breadcrumb">

                <Link underline="hover" color="inherit" onClick={()=> props.activeCategory("ELECTRONICS")}>
                   ELECTRONICS
                </Link>

                <Link underline="hover" color="inherit" onClick={()=> props.activeCategory("FOOD")}>
                FOOD
                </Link>
            </Breadcrumbs>

            <h2>{props.activeCateg}</h2>
        </div>
    )
}

const mapStateToProps = state => ({
    activeCateg: state.categoryReducer.activeCategory
});

const mapDispatchToProps = { activeCategory };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
