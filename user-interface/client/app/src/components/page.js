import React from 'react';
import '../stylesheets/page.css';

import HomePage from "./homepage.js";
import DatabasePage from "./databasepage.js";
import AboutPage from "./aboutpage.js";
import HelpPage from "./helppage.js";
import ContactUsPage from "./contactuspage.js";
import SettingsPage from "./settings.js";

export default class Page extends React.Component {
    render() {
        if (this.props.page === "home_page") {
            return (
                <div className="view">
                    <HomePage />
                </div>
            );
        } else if (this.props.page === "database_page") {
            return (
                <div className="view">
                    <DatabasePage />
                </div>
            );
        } else if (this.props.page === "about_page") {
            return (
                <div className="view">
                    <AboutPage />
                </div>
            );
        } else if (this.props.page === "help_page") {
            return (
                <div className="view">
                    <HelpPage />
                </div>
            );
        } else if (this.props.page === "contact_us_page") {
            return (
                <div className="view">
                    <ContactUsPage />
                </div>
            );
        } else if (this.props.page === "settings_page") {
            return (
                <div className="view">
                    <SettingsPage />
                </div>
            );
        }

    }
}