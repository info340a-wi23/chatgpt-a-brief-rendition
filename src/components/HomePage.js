import React from 'react';

function MainContent() {
    return (
        <section className="main-content">
            <div className="container">
                <h2>What is ChatGPT?</h2>
                <p>ChatGPT is a Large Language Model (LLM) developed by OpenAI that is capable of completing a wide range of natural language tasks, such as text generation, translation, and summarization. It is also able to generate code and document it well. All of this can be done with prompts given by the user. It is trained on text data scraped from the internet, which includes 25% of Reddit posts and various academic articles and books. The model has been released recently and is already showing a lot of potential for various applications, but it also raises important ethical and societal questions.</p>
                <img src={require("./img/chatgptlg.png")} alt="ChatGPT Screenshot" />
            </div>
        </section>
    )
}

function CareStatement() {
    return (
        <section className="about">
            <div className="container">
                <h2>Why Should We Care?</h2>
                <p>One of the main concerns is the potential bias in the data used to train the model, as well as the implications of data collection from social media platforms such as Twitter and Reddit, where users have no way to opt out. Additionally, there are discussions about the potential misuse of ChatGPT, such as in academic misconduct and plagiarism. To address these concerns, we propose to start healthy discussions among researchers, students, and educators about the positive and negative outcomes of ChatGPT, and to explore ways to leverage its capabilities while avoiding its potential harms.
                </p>
            </div>
        </section>
    )
}

export default function HomePage(props) {
    return (
        <div>
            <MainContent />
            <CareStatement />
        </div>
    );
}