import React from 'react';
import {useState} from 'react';

import '../stylesheets/website.css';

import Banner from "./banner.js";
import Page from "./page.js";

export default function Website() {
    const [page,setPage] = useState("home_page");

    return(
            <div id="overall-website">
                <Banner page={page} toHomePage={() => setPage("home_page")} toDatabasePage={() => setPage("database_page")} toAboutPage={() => setPage("about_page")} toHelpPage={() => setPage("help_page")} toContactUsPage={() => setPage("contact_us_page")} toSettingsPage={() => setPage("settings_page")}/>
                <div id="page-view">
                    <Page page={page}/> 
                </div>
            </div>
                
        );
}