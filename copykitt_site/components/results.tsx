interface ResultProps{
    snippet : string;
    keywords : string[];
    prompt : string;
    onBack: any;
}

const Results: React.FC<ResultProps> = (props) =>{
    
    const keywordElements = []

    for (let i = 0; i < props.keywords.length; i++){
      const element = <div key={i}>#{props.keywords[i]}</div>;
      keywordElements.push(element);
    }
   
   return <>
    <div>
        <div>
            <div>
                <b>Prompt</b>
            </div>
            <div>
                {props.prompt}
            </div>
        </div>
        <div>
            <div>
                <b>Snippet</b>
            </div>
            <div>
                {props.snippet}
            </div>
        </div>
        <div>
            <div>
                <b>Keywords</b>
            </div>
            <div>
               {props.keywords.join(", ")}
            </div>
        </div>
    </div>
    <button onClick={props.onBack}>Back</button>
</>;
};

export default Results;