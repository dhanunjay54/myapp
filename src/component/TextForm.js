import React,{useState} from 'react';

export default function TextForm(props) {
    const handleonChange = (event) =>{
        console.log("Text are OnChange fire");
        
        setText(event.target.value);
    }

    const uponClick =() =>{
        console.log("Button i am fired when clicked uppercase "+text);
        let NewText = text.toUpperCase();
        setText(NewText);
        props.showAlert("Converted to Upper Case", "success");
    }

    const lwonClick = () =>{
      console.log("On click this button convert text to lower case");
      let NewText = text.toLowerCase();
      setText(NewText);
      props.showAlert("Converted to Lower case!", "success")

    }

    const handletextclearonClick = () =>{
      console.log("Button on click the Text will be clear");
      let NewText = "";
      setText(NewText);
      props.showAlert("Text is Cleared!!", "success")
    }

    const handleCopyText = () =>{
      console.log("Buuton click will copy Text");
      var text = document.getElementById("mybox");
      text.select();
      text.setSelectionRange(0, 9999);
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text is copied to Clip board", "success")
    }

    const handleExtraSpace = () =>{
      console.log("Button click will handle etxra space removal from the text")
      let NewText = text.split(/[ ]+/);
      setText(NewText.join(" "));
      props.showAlert("Extra Space is Removed from the text ", "success");

    }

    const[text, setText] = useState("Enter the useState text here");
  return (
    <>
    <div className = "container" style = {{color : props.mode === 'dark'?'white':'black'}}>
   <h1>{props.heading}</h1> 
<div className="mb-3">
  
  <textarea className="form-control" id="mybox" value ={text}  onChange={handleonChange} style ={{backgroundColor: props.mode ==='dark'?'grey':'white', color : props.mode ==='dark'?'white':'black'}} rows="8"></textarea>
  <button className = "btn btn-primary my-3" onClick={uponClick}>Upper Case Text</button>
  <button className ="btn btn-outline-primary mx-1" onClick={lwonClick}>Lower Case Text</button>
  <button className = "btn btn-outline-primary mx-1" onClick={handletextclearonClick}>Text Clear</button>
  <button className ="btn btn-primary mx-1" onClick ={handleCopyText}>Copy Text</button>
  <button className ="btn btn-primary mx-1" onClick ={handleExtraSpace}>Remove Extra Space</button>
  
</div>
</div>

<div className = "container" style = {{color : props.mode === 'dark'?'white':'black'}}>
  <h1>Your Text Summary</h1>
  <p>{text.split(" ").length}  Words and {text.length}  Characters</p>
  <p>{0.008 * text.split(" ").length} Read of Words Per Minutes</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter Something in the Above textform to preview it here"}</p>

</div>

    </>
  );
}
