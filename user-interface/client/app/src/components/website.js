import React from 'react';
import {useState} from 'react';

import Banner from "./banner.js";
import Page from "./page.js";

export default function Website() {
    const [page,setPage] = useState("home_page");

    return(
            <div style={{display:"flex"}}>
            <Banner page={page} toHomePage={() => setPage("home_page")} toDatabasePage={() => setPage("database_page")} toAboutPage={() => setPage("about_page")} toHelpPage={() => setPage("help_page")} toContactUsPage={() => setPage("contact_us_page")} toSettingsPage={() => setPage("settings_page")}/>
            <Page page={page}/> 
            </div>
                
        );
}