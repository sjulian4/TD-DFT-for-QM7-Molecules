import React from 'react';
import '../stylesheets/contactuspage.css';

export default class ContactUsPage extends React.Component {

    contacts = [
        {
            name: "Jesús Pérez Ríos",
            email: "jesus.perezrios@stonybrook.edu",
            description: "Professor and researcher in the Department of Physics at Stony Brook University. He is the principal investigator of the research group that developed this web application. He is responsible for the  wB97XD calculations."
        },
        {
            name: "Sarah Julian",
            email: "sarah.julian@stonybrook.edu",
            description: "Undergraduate student in the Departments of Computer Science and Applied Mathematics & Statistics. She is one of the developers of this web application."
        },
        {
            name: "Susan Qu",
            email: "susan.qu@stonybrook.edu",
            description: "Undergraduate student in the Department of Computer Science. She is one of the developers of this web application."
        },
        {
            name: "Kelly Fung",
            email: "kelly.fung@stonybrook.edu",
            description: "Undergraduate student in the Department of Computer Science. She is one of the developers of this web application."
        },
        {
            name: "Daniel Julian",
            email: "daniel.julian@stonybrook.edu",
            description: "PhD student in the Department of Physics. He is responsible for the B3LYP calculations."
        },
    ];

    render() {
        return (
            <div>
                <h1 id="contact-title">Contact Us</h1>
                <p id="contact-description">If you have any questions or feedback about the TD-DFT for QM7 Molecules Web Application, please feel free to contact us.</p>
                <hr />
                {this.contacts.map((contact, i) => {
                    return (
                        <div key={i}>
                            <h2 >Name: {contact.name}</h2>
                            <p >Email: {contact.email}</p>
                            <p >{contact.description}</p>
                            <hr />
                        </div>
                    );
                })}
            </div>
        );
    }
}

