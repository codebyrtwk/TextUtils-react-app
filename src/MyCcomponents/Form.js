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
        let newText = text.toLowerCase();
        setText(newText)
        };

    const handleOnClick = () => {
        props.onClick(text);
        setText("");
        };
    const character = text.length;
    const words = text.split(" ").length;
    
    
    return (
        <>
    
        <div className="container my-3">
            <h1>{props.Heading}  </h1>
            <form>
                <div className="form-group">
                <textarea onChange = {handleOnChange} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button type="submit" onClick = {handleUpClick} className="btn btn-primary my-3 mx-1">Click to Uppercase</button>
                <button type="submit" onClick = {handleDownClick} className="btn btn-primary my-3">Click to Lowercase</button>
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
