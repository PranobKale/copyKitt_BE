import React from "react";
import Form from "./form";
import Results from "./results";

const Copykitt: React.FC = () => {
    
    // api endpoint
    const ENDPOINT: string = 
    "api path"
    
    // react hook
    const [prompt, setPrompt] =  React.useState("");
    const [snippet, setSnippet] =  React.useState("");
    const [keywords, setKeywords] =  React.useState([]);
    const [hasResult, setHasResult] =  React.useState(false);
    
    // after submitting button
    const onSubmit = () => {
        console.log("Submitting: "+ prompt);
        fetch(`${ENDPOINT}?prompts=${prompt}`)
        .then((res) => res.json())
        .then(console.log);
    };
    
    const onResult = (data: any) =>{
        setSnippet(data.snippet);
        setKeywords(data.keywords);
        setHasResult(true)
    };

    const onReset = () =>{
        setPrompt("");
        setHasResult(false);
    };

    let displayedElement = null;

    if (hasResult) {
        displayedElement = <Results snippet={snippet} keywords={keywords} onBack={onReset} />
    }
    else{
        displayedElement =(
            <Form prompt={prompt} setPrompt={setPrompt} onSubmit={onsubmit}/>
        );
    }

    

    console.log(snippet);
    console.log(keywords);
    
  

    return (
        <> 
        <h1>Tagline Generator</h1>
        {displayedElement}    
        </>
    );
};

export default Copykitt;