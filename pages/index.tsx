import React, { useState, Fragment } from 'react';
import './index.scss';
import { Hero, LogoBanner } from 'components/sections';

function Index(ctx) {

    return (
        <Fragment>
            <Hero />
            <LogoBanner />
            <Hero />
        </Fragment>

    );
}

export default Index;