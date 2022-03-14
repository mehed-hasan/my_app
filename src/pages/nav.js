import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function nav () {
    return (  
        <Fragment>
            <div>
                <Link to='/'> Home</Link>
                <Link to='/about'> About</Link>
                <Link to='/contact'> Contact</Link>
            </div>


            
        </Fragment>
    );
}

