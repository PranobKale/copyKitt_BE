interface ResultProps{
    snippet : string;
    keywords : string[];
    onBack: any;
}

const Results: React.FC<ResultProps> = (props) =>{
    return <>
    <div>
    Here are your results:
    <div>Snippet: {props.snippet}</div>
    <div>Keywords: {props.keywords.join(", ")}</div>
    </div>
    <button onClick={props.onBack}>Back</button>
</>;
};

export default Results;