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
                <button id='question-1' className="accordion-btn" onClick={() => handleAccordion("question-1")}>Question Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?</button>
                <div id='answer-1' className="answer">
                    <p>Answer...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <button id='question-2' className="accordion-btn" onClick={() => handleAccordion("question-2")}>Question?</button>
                <div id='answer-2' className="answer">
                    <p>Answer...</p>
                </div>
                <button id='question-3' className="accordion-btn" onClick={() => handleAccordion("question-3")}>Question?</button>
                <div id='answer-3' className="answer">
                    <p>Answer...</p>
                </div>
                <button id='question-4' className="accordion-btn" onClick={() => handleAccordion("question-4")}>Question?</button>
                <div id='answer-4' className="answer">
                    <p>Answer...</p>
                </div>
                <button id='question-5' className="accordion-btn" onClick={() => handleAccordion("question-5")}>Question?</button>
                <div id='answer-5' className="answer">
                    <p>Answer...</p>
                </div>
            </div>
        </div>
    )
}

export default Faq;