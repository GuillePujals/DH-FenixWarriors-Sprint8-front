import React from 'react';

function PropertieList(props) {
    return (
        <React.Fragment>
            <tr>
                <td>{props.id}</td>
                <td>{props.user.first_name + ' ' + props.user.last_name}</td>
                <td>{props.category}</td>
                <td>{props.description}</td>
                <td><a className="btn btn-danger" target="" rel="nofollow" href={props.url}>View property detail</a></td>
            </tr>
        </React.Fragment>
    );
}

export default PropertieList;