import hero from "./images/hero-img.png";
import '../styling/faq.css';

function Faq(){

    function handleAccordion(id){
        let quest = document.getElementById(id);
        quest.classList.toggle("active");

        let answ = quest.nextElementSibling;

        if (answ.style.maxHeight){
            answ.style.maxHeight = null;
        }
        else {
            answ.style.maxHeight = answ.scrollHeight + "px";
        }
    }

    return(
        <div>
            <div id='hero-pic-container'>
                <img src={hero} alt="hero" className="hero-pic"/>
                <div className="overlay">FAQ'S</div>
            </div>
            <div className="accordion">
                <button id='question-1' className="accordion-btn" onClick={() => handleAccordion("question-1")}>What services does your production company offer?</button>
                <div id='answer-1' className="answer">
                    <p>We specialize in [list of services such as video production, audio production, event production, etc.]. Our team is dedicated to delivering high-quality and creative content tailored to your needs.</p>
                </div>
                <button id='question-2' className="accordion-btn" onClick={() => handleAccordion("question-2")}>How can I request a quote for a project?</button>
                <div id='answer-2' className="answer">
                    <p>To request a quote, please visit our [contact page/quote request form] on our website. Provide as much detail as possible about your project, and our team will get back to you promptly.</p>
                </div>
                <button id='question-3' className="accordion-btn" onClick={() => handleAccordion("question-3")}>What industries does your production company serve?</button>
                <div id='answer-3' className="answer">
                    <p>We work with a diverse range of industries, including but not limited to [list of industries]. Our experienced team is equipped to handle projects across various sectors.</p>
                </div>
                <button id='question-4' className="accordion-btn" onClick={() => handleAccordion("question-4")}>Can you handle both small and large-scale productions?</button>
                <div id='answer-4' className="answer">
                    <p>Yes, we cater to projects of all sizes. Whether it's a small-scale video production or a large-scale event, our team is adept at managing productions of different scales.</p>
                </div>
                <button id='question-5' className="accordion-btn" onClick={() => handleAccordion("question-5")}>How long does it take to complete a typical project?</button>
                <div id='answer-5' className="answer">
                    <p>The timeline for a project varies based on its complexity and scope. We work closely with our clients to establish realistic timelines and ensure timely delivery without compromising on quality.</p>
                </div>
                <button id='question-6' className="accordion-btn" onClick={() => handleAccordion("question-6")}>What is the production process like?</button>
                <div id='answer-6' className="answer">
                    <p>Our production process involves [brief overview of stages such as pre-production, production, and post-production]. We collaborate closely with clients at every stage to ensure their vision is realized.</p>
                </div>
                <button id='question-7' className="accordion-btn" onClick={() => handleAccordion("question-7")}>What sets your production company apart from others?</button>
                <div id='answer-7' className="answer">
                    <p>We take pride in our commitment to creativity, quality, and client satisfaction. Our team of professionals brings a wealth of experience to each project, ensuring exceptional results.</p>
                </div>
                <button id='question-8' className="accordion-btn" onClick={() => handleAccordion("question-8")}>Can you provide examples of your previous work?</button>
                <div id='answer-8' className="answer">
                    <p>Yes, we have a portfolio section on our website showcasing some of our past projects. Feel free to explore it [provide the link].</p>
                </div>
                <button id='question-9' className="accordion-btn" onClick={() => handleAccordion("question-9")}>How do you ensure the confidentiality and security of client projects?</button>
                <div id='answer-9' className="answer">
                    <p>Client confidentiality and project security are of utmost importance to us. We have robust measures in place to safeguard your information and ensure a secure working environment.</p>
                </div>
                <button id='question-10' className="accordion-btn" onClick={() => handleAccordion("question-10")}>How do I get in touch with your team for support during a project?</button>
                <div id='answer-10' className="answer">
                    <p>You can reach our support team by [email/phone] during regular business hours. For urgent matters, we also offer [emergency contact information].</p>
                </div>
            </div>
        </div>
    )
}

export default Faq;