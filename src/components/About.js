import React from 'react';

function AboutCaring() {
    return (
        <section className="about-caring">
            <div className="container">
                <h2>About why we should care (In Depth)</h2>
                <dl>
                    <dt>
                        <p>There may have been moments in your life where you've notice the hype coming from a group of people around you. If you've engaged and found the topic to not be so interesting or relevant to your life, that is understandable because these subjects may not seem to apply to your current life such as ChatGPT. However even though it may seem like it is irrelevant in you life at the moment, it may affect other infrastructures around you which may cascade down to affecting your life.</p>
                        <p>ChatGPT, the latest new technology that has recently come out that is, can negatively or positively affect many things that could lead to you. For example:</p>
                        <ul>
                            <li>If you are a student: ChatGPT may change how the grading system works to adapt to ChatGPT interference, which may require efforts to adapt on your part as well.</li>
                            <li>If you have a job: Depending on what profession you are in, ChatGPT may make it's way to your workspace and possible affect your work policies in the future.</li>
                            <li>One way or another ChatGPT may appear somewhere in your life and affect you indirectly. Whenever it directly affects you however, you at least know where you stand.</li>
                        </ul>
                    </dt>
                    <dd>
                        <img src={require("./img/heardofit.jfif")} alt="Two people talking with each other about ChatGPT." />
                        <p className="credit">Photo credits to Andre266</p>
                    </dd>
                </dl>
            </div>
        </section>
    );
}

function Infrastructures() {
    return (
        <section className="about-infrastructures">
            <div className="container">
                <h2>What else can it affect?</h2>
                <p>
                    Not only can it affect us, but the society we live in. Slowly the higher levels of society will adapt to this technology, not only adopting the issues that come with it but also reinforcing these issues for the rest of society. Below are some of the infrastructures that are affected by ChatGPT and what it may mean for our society in the future regarding problems:
                </p>
                <div className="row">
                    <div className="column-button">Cybersecurity</div>
                    <div className="column-button">Healthcare</div>
                    <div className="column-button">Education</div>
                    <div className="column-button">Entertainment</div>
                </div>
            </div>
        </section>
    );
}

function Action() {
    return (
        <section className="about-action">
            <div className="container">
                <h2>What can we do about it?</h2>
                <dl>
                    <dt>
                        There are many ways to decide how to address these issues. Because of our bias as Informatics students who have been learning the ways of bonding humans with technology however, we will address these issues with an Informatics lens. That is, we think to solve the issues by doing these things:
                        <ul>
                            <li>
                                Stay Informed: What is a conversation without knowledge? If we want to start understanding how to solve issues created by ChatGPT, we must first understand how it works and where it is going.
                            </li>
                            <li>
                                Inform others: Like we mentioned before, helping keep everyone in the loop can increase the speed for which we can address these issues and discover new ideas for preventing them.
                            </li>
                            <li>
                                Discuss: It isn’t enough to tell people about it, it’s also to get them involved and to understand where they are coming from. Of course we keep things respectful and give them their space to comfortably divulge ideas.
                            </li>
                            <li>
                                Form a community: Lastly, we won’t be able to move anything by ourselves, more or less the powerful companies that back these technologies, and so we will become just as strong as them by banding together to address these issues that may affect our lives. If noone else will, then we can.
                            </li>
                        </ul>
                    </dt>
                    <dd>
                        <img className="shrunk-img" src={require("./img/awareness.png")}
                            alt="cartoon of people reaching for ideas generated by a loud speaker." />
                    </dd>
                </dl>
            </div>
        </section>
    );
}

export default function About(props) {
    return (
        <div>
            <AboutCaring />
            <Infrastructures />
            <Action />
        </div>
    );
}