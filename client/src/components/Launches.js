import React, { Component, Fragment } from 'react';
import { gql, Query, useQuery } from "@apollo/client";
import LaunchItem from './LaunchItem';

const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
    }
`;

const Launches = () => {
    const { loading, error, data } = useQuery(LAUNCHES_QUERY);

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error :(</p>;

    console.log(data);

    return (
        <Fragment>
            <h1 className="display-4 my-3">Launches</h1>
            {
                data.launches.map(launch => {
                    return <LaunchItem key={launch.flight_number} launch={launch} />
                })
            }
        </Fragment>
    );
}

export default Launches;
