import { useState } from "react";


function Inputfield() {
    const[question,setQuestion] = useState("");

    function updateQuestion(event) {
        setQuestion(event.target.value);
    } 
    function abcd(){
        setQuestion("");
    }
  return (
    <div class="text">
      <input type="text" className="input" name="question" id="question" onChange={updateQuestion} value={question} />
      {console.log(question)}
      <div className="button" id="sendbutton">
        <button name="send" id="send-button" type="submit" onClick={abcd}>
          send
        </button>
      </div>
    </div>
  );
  
}

export default Inputfield;
