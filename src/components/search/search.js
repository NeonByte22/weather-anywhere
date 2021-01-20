import React from 'react';
import './search.css';
export default class Search extends React.Component {
    render() {
        return (
            <div className="group">
                <h1>Weather Anywhere</h1>
                <form onSubmit={this.props.submit}>
                    <span className="material-icons">location_on</span>
                    <input type="text" placeholder="Location" value={this.props.val} onChange={this.props.change} />
                </form>
            </div>
        );
    }
}