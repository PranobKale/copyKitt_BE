import React from "react";
import Form from "./form";
import Results from "./results";

const Copykitt: React.FC = () => {
    
    const CHARACTER_LIMIT: number = 32;

    // api endpoint
    const ENDPOINT: string = 
    "http://127.0.0.1:8000"
    
    // react hook
    const [prompt, setPrompt] =  React.useState("");
    const [snippet, setSnippet] =  React.useState("");
    const [keywords, setKeywords] =  React.useState([]);
    const [hasResult, setHasResult] =  React.useState(false);
    // for loacal
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);
    
    // after submitting button
    // const onSubmit = () => {
    //     console.log("Submitting: "+ prompt);
    //     fetch(`${ENDPOINT}?prompts=${prompt}`)
    //     .then((res) => res.json())
    //     .then(console.log);
    // };

    // for local adujutment
    const onSubmit = () => {
        setSnippet('');
        setKeywords([]);
        setHasResult(false);
        setError(null);
        setIsLoading(true);
    
        // Call the three APIs sequentially
        // fetch(`${ENDPOINT}/generate_braanding_snippet?prompt=${prompt}`)
        //   .then((res) => res.json())
        //   .then((data) => {
        //     setSnippet(data.snippet);
        //     return fetch(`${ENDPOINT}/generate_braanding_keywords?prompt=${prompt}`);
        //   })
          // .then((res) => res.json())
        fetch(`${ENDPOINT}/generate_braanding_snippets_keywords?prompt=${prompt}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then((data) => {
          setKeywords(data.keywords);
          setSnippet(data.snippet);
          setHasResult(true);
        })
        .catch((err) => {
          setError('An error occurred while fetching data.');
          console.error('Error:', err);
        })
        .finally(() => {
          setIsLoading(false);
        });

      };
    
    const onResult = (data: any) =>{
        setSnippet(data.snippet);
        setKeywords(data.keywords);
        setHasResult(true)
        setIsLoading(false);
    };

    const onReset = () =>{
        setPrompt("");
        setHasResult(false);
        setIsLoading(false);
    };

    let displayedElement = null;

    if (hasResult) {
        displayedElement = <Results snippet={snippet} keywords={keywords} onBack={onReset} prompt={prompt}  />
    }
    else{
        displayedElement =(
            <Form prompt={prompt} setPrompt={setPrompt} onSubmit={onSubmit} isLoading={false} characterLimit={CHARACTER_LIMIT}/>
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