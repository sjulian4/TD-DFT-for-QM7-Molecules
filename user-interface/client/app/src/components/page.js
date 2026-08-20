import React from 'react';
import '../stylesheets/page.css';

export default class Page extends React.Component {
    render() {
        if (this.props.page === "home_page") {
            return (
                <div className="view">
                    <h1 >Home Page</h1>
                </div>
            );
        } else if (this.props.page === "database_page") {
            return (
                <div className="view">
                    <h1>Database Page</h1>
                </div>
            );
        } else if (this.props.page === "about_page") {
            return (
                <div className="view">
                    <h1>About Page</h1>
                </div>
            );
        } else if (this.props.page === "help_page") {
            return (
                <div className="view">
                    <h1>Help Page</h1>
                </div>
            );
        } else if (this.props.page === "contact_us_page") {
            return (
                <div className="view">
                    <h1>Contact Us Page</h1>
                </div>
            );
        } else if (this.props.page === "settings_page") {
            return (
                <div className="view">
                    <h1>Settings Page</h1>
                </div>
            );
        }

    }
}