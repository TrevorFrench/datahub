import React from "react";
import PropTypes from "prop-types";

import "./balances.css";

export default class Balances extends React.Component {
    render() {
        return(
            <table>
                <thead>
                    <tr>
                        <th>Logo</th>
                        <th>Name</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.data && this.props.data.map(data => {
                        return <tr>
                            <td><img src={data.logo_url} className='token_logo'></img></td>
                            <td>{data.contract_name}</td>
                            <td>{data.balance / Math.pow(10, data.contract_decimals)}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        )
    }
}