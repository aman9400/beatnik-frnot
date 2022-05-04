/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import Dashboard from 'views/Dashboard';
import Main from 'layouts/Dashboard';
import WithLayout from 'WithLayout';

const DashboardCover = () => {
    return (
        <WithLayout
            component={Dashboard}
            layout={Main}
        />
    )
};

export default DashboardCover;
