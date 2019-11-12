import React, { Fragment } from 'react';

export const PagePlaceholder = (props) => {
    const { params } = props.match;
    return (
        <div>
            <h1>Welcome to the {props.match.url} Page</h1>
            <p>
            <table>
                    <thead>
                        <th>Key</th>
                        <th>Value</th>
                    </thead>
                    <tbody>
                        {Object.keys(params).map( key => {
                
                    return (
                        <Fragment>
                            <td>{key}</td>
                            <td>{params[key]}</td>
                        </Fragment>
                    );
            })}
                    </tbody>            
                </table>
            </p>
        </div>
    );
}