import React from 'react';
import '../stylesheets/aboutpage.css';

export default class AboutPage extends React.Component {
    render() {
        return (
            <div>
                <h1 id="about-title">About the TD-DFT for QM7 Molecules Web Application</h1>

                <hr />

                <div>
                    <h2 class="section-title">The goal of this application</h2>
                    <p class="info-text">This application was created to provide a user-friendly interface for exploring the properties of QM7 molecules using Time-Dependent Density Functional Theory (TD-DFT) calculations.</p>
                </div>

                <hr />

                <div>
                    <h2 class="section-title">Context</h2>

                    <h3 class="subsection-title">What is TD-DFT?</h3>
                    <p class="info-text">Time-Dependent Density Functional Theory (TD-DFT) is a computational method used to calculate the excited states of molecules by solving the time-dependent Kohn-Sham equations.</p>

                    <h3 class="subsection-title">What are QM7 molecules?</h3>
                    <p class="info-text">QM7 is a dataset of 7,165 organic molecules with 10 heavy atoms each, used for benchmarking quantum chemical methods.</p>
                </div>

                <hr />

                <div>
                    <h2 class="section-title">What can you do on this site?</h2>
                    <p class="info-text">placeholder how to use/features</p>

                </div>

                <hr />

                <div>
                    <h2 class="section-title">How this application was developed</h2>
                    <p class="info-text">placeholder development</p>

                </div>


            </div>
        );
    }

}