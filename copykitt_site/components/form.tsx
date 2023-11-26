interface FormProps{
    prompt: string,
    setPrompt: any,
    onSubmit: any
}

const Form: React.FC<FormProps> = (props) =>{
    return <><p>
    Tell me what your brand is about and I will generate tagline and keyword for you.
 </p>
 <input 
    type="text" 
    placeholder="coffee" 
    value={props.prompt}
    onChange={(e) => props.setPrompt(e.currentTarget.value)}></input>
    <button onClick={props.onSubmit}>Submit</button></>;
};

export default Form;