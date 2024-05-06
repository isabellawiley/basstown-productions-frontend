import { useState } from "react";

function ContactForm(){
    const [result, setResult] = useState("");

    // function handleSelect(id) {
    //     let elem = document.getElementById(id);
    //     elem.setAttribute("selected", "");
    //     console.log(elem)
    // }

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);

        formData.append("access_key",);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
        
        const data = await response.json();

        if(data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        }
        else {
            console.log("Error", data);
            setResult(data.message);
        }

    }

    return(
        <div>
            <form className="ct-form">
                <label for="name">Name</label>
                <input id="name" type="text" name="name" placeholder="Type name here" required/>
                <label for="email">Email</label>
                <input id="email" type="email" name="email" placeholder="Type email here" required/>
                {/* <select name="services" multiple>
                    <option id='opt-1' value="photography" onClick={() => handleSelect('opt-1')}>photography</option>
                    <option id='opt-2' value="sound" onClick={() => handleSelect('opt-2')}>sound</option>
                    <option id='opt-3' value="lights" onClick={() => handleSelect('opt-3')} selected>lights</option>
                    <option id='opt-4' value="dj" onClick={() => handleSelect('opt-4')}>dj</option>
                    <option id='opt-5' value="music recording" onClick={() => handleSelect('opt-5')}>music recording</option>
                </select> */}
                <label for="message">Message</label>
                <textarea id="message" name="message" placeholder="A brief description here" required></textarea>

                <button className="sub-btn" type="submit">Send Message</button>
            </form>
        </div>
    )
}

export default ContactForm;