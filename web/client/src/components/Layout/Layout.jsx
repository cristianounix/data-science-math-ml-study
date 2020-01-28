import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import classes from './Layout.module.scss';


export function Layout(props) {


    return (
        <Fragment>
            <Header />

            <main className={classes.Main}>
                {props.children}
            </main>

            <Footer />
        </Fragment>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
};


export default Layout;