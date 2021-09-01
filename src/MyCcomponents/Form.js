import React , {useState} from 'react'


export default function Form(props) {
    const [text, setText] = useState("");
    const handleUpClick = () => {
        setText(text.toUpperCase());
        };

    const handleOnChange = (e) => {
        setText(e.target.value);
        };
    const handleDownClick = () => {
            setText(text.toLowerCase());
        };

    

    // #copy to clipboard
    const handleCopyClick = () => {
        let textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
        //auto dismissing alert
        alert("Copied to clipboard");

        };


    //clear text
    const handleClearClick = () => {
        setText("");
        };
    //remove extra space
    const handleExtraSpace = () => {
            setText(text.trim());
        };

    const character = text.length;
    const words = text.split(" ").length;
    
    
    return (
        <>
    
        <div className="container my-3">
            <h1>{props.Heading}  </h1>
            <form>
                <div className="form-group">
                <textarea  value = {text} onChange = {handleOnChange} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button type="submit" onClick = {handleUpClick} className="btn btn-primary my-3 mx-1">Click to UPPERCASE</button>
                <button type="submit" onClick = {handleDownClick} className="btn btn-primary my-3 mx-1">Click to lowercase</button>
                <button type="submit" onClick = {handleCopyClick} className="btn btn-primary my-3 mx-1">Copy to clipboard</button>
                <button type="submit" onClick = {handleExtraSpace} className="btn btn-primary my-3 mx-1">Remove Extra Spaces</button>
                <button type="submit" onClick = {handleClearClick} className="btn btn-primary my-3 mx-1">Clear Text</button>
                
            </form>
        </div>

        <div className="container my-2 " >
            <h2>Your Text Summary :</h2>
            <p>Your Text has <strong>{character}</strong> characters and <strong>{words}</strong> Words . </p>
            <h3>Preview</h3>
            <p border="1" >{text}</p>
        </div>
        
        </>
        
    )
}
