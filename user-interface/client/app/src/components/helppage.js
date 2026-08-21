import React from 'react';
import '../stylesheets/helppage.css';
import Searchbar from './searchbar';

export default class HelpPage extends React.Component {

    // create a hashing for questions and answers to display here
    faqs = [
        {
            question: "I have a suggestion for the application, how can I submit it?",
            answer: "You can submit your suggestions through the Contact Us page. We value user feedback and will consider all suggestions for future improvements."
        },
        {
            question: "placeholder question 2",
            answer: "placeholder answer 2"
        },
        {
            question: "placeholder question 3",
            answer: "placeholder answer 3"
        },
    ];

    state = {
        display_faq: ""
    };

    onSearch = (search_value) => {
        this.setState({ display_faq: search_value });
    }

    render() {
        return (
            <div>
                <div id="faq-header">
                    <h1 id="faq-title">FAQs</h1>
                     <p id="faq-description">This is the help page for the TD-DFT for QM7 Molecules Web Application. You can find answers to frequently asked questions (FAQs) about the application, its features, and how to use it effectively. If you have any further questions or need assistance, please feel free to contact us through the Contact Us page.</p> 
                    <Searchbar onSearch={this.onSearch}></Searchbar>
                </div>
                <hr></hr>
                {this.faqs.map((faq, i) => {
                    if (this.state.display_faq === "" || faq.question.toLowerCase().includes(this.state.display_faq.toLowerCase()) || faq.answer.toLowerCase().includes(this.state.display_faq.toLowerCase())) {
                        return (
                            <div key={i}>
                                <h2 className="questions">Q: {faq.question}</h2>
                                <p className="answers">A: {faq.answer}</p>
                                <hr />
                            </div>
                        );
                    }
                    return null;
                })}

            </div>
        );
    }
}
