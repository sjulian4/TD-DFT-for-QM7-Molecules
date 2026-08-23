import React from 'react';

import '../stylesheets/banner.css';

import sbu_logo from "../sbu-logo.png";

export default class Banner extends React.Component {
    render(){

        return (
            <div id="banner-alignment">
                <img src={sbu_logo} className="nav" alt="sbu-logo" style={{ width: "5vh", height: "5vh" }} onClick={() => this.props.toHomePage()}></img>
                <h1 className="nav" onClick={this.props.toHomePage}>TD-DFT for QM7 Molecules</h1>
                <button type="button" className={this.props.page === "home_page" ? "selected" : "nav-buttons"} onClick={() => this.props.toHomePage()}>Home</button>
                <button type="button" className={this.props.page === "database_page" ? "selected" : "nav-buttons"} onClick={() => this.props.toDatabasePage()}>Database</button>
                <button type="button" className={this.props.page === "about_page" ? "selected" : "nav-buttons"} onClick={() => this.props.toAboutPage()}>About</button>
                <button type="button" className={this.props.page === "help_page" ? "selected" : "nav-buttons"} onClick={() => this.props.toHelpPage()}>Help</button>
                <button type="button" className={this.props.page === "contact_us_page" ? "selected" : "nav-buttons"} onClick={() => this.props.toContactUsPage()}>Contact Us</button>
                <button type="button" className={this.props.page === "settings_page" ? "selected" : "nav-buttons"} onClick={() => this.props.toSettingsPage()}>Settings</button>
            </div>
        );
    }
}