import React, { useState } from 'react'        //useState is a hooks


function Textform(props) {
    const handleUpClick = () => {
        // console.log("upperCase clicked" + text);
        setText(text.toUpperCase())
        props.showAlert("converted to UpperCase successfully", "success")
    }
    const handleLowerClick = () => {
        // console.log("upperCase clicked" + text);
        setText(text.toLowerCase())
        props.showAlert("converted to LowerCase successfully", "success")
    }
    const handleOnChange = (event) => {
        //console.log("Change handle");
        setText(event.target.value)         //now we can type or give value in the textforms

    }
    const handleCopy = () => {
        // console.log("i am copy")
        let text_val = document.getElementById('exampleFormControlTextarea1')         //it return an object
        text_val.select()
        navigator.clipboard.writeText(text_val.value)
        props.showAlert("converted to copy successfully", "success")
    }
    const handleClearClick = () => {
        console.log("clear value clicked")
        setText("")
        props.showAlert("Cleared text successfully", "success")
    }
    const [text, setText] = useState("")        // new state variable where we cannot set text directly.we need to change it through setText 

    return (
        <>
            <div className="container" style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === "light" ? "white" : "grey", color: props.mode === "light" ? "black" : "white" }} id="exampleFormControlTextarea1" rows="7"></textarea> {/*without onchange function we cannot type within the textarea or input */}
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container my-2" style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h1>Your summary</h1>
                <p>{text.split(" ").length} words,{text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minute to  read this content</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter your text to preview it"}</p>
            </div>
        </>
    )
}

export default Textform;