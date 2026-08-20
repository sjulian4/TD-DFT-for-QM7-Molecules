import React from 'react';

import '../stylesheets/banner.css';

import sbu_logo from "../sbu-logo.png";

export default class Banner extends React.Component {
    render(){

        return (
            <div id="bannerAlignment">
                <img src={sbu_logo} className="nav" alt="sbu-logo" style={{ width: "5vh", height: "5vh" }} onClick={() => this.props.toHomePage()}></img>
                <h1 className="nav" onClick={this.props.toHomePage}>TDF-DFT for QM7 Molecules</h1>
                <button type="button" className={this.props.page === "home_page" ? "selected" : "navButtons"} onClick={() => this.props.toHomePage()}>Home</button>
                <button type="button" className={this.props.page === "database_page" ? "selected" : "navButtons"} onClick={() => this.props.toDatabasePage()}>Database</button>
                <button type="button" className={this.props.page === "about_page" ? "selected" : "navButtons"} onClick={() => this.props.toAboutPage()}>About</button>
                <button type="button" className={this.props.page === "help_page" ? "selected" : "navButtons"} onClick={() => this.props.toHelpPage()}>Help</button>
                <button type="button" className={this.props.page === "contact_us_page" ? "selected" : "navButtons"} onClick={() => this.props.toContactUsPage()}>Contact Us</button>
                <button type="button" className={this.props.page === "settings_page" ? "selected" : "navButtons"} onClick={() => this.props.toSettingsPage()}>Settings</button>
                        
            </div>
        );
    }
}