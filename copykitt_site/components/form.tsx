import { isValidElement } from "react";
import { text } from "stream/consumers";

interface FormProps{
    prompt: string;
    setPrompt: any;
    onSubmit: any;
    isLoading: boolean;
    characterLimit: number;
}

const Form: React.FC<FormProps> = (props) =>{

    const isPromtValid = props.prompt.length < props.characterLimit;
    const updatePromptValue = (text: string) => {
        if (text.length <= props.characterLimit){
            props.setPrompt(text);
        }
    }
    return <><p>
    Tell me what your brand is about and I will generate tagline and keyword for you.
 </p>
 <input 
    type="text" 
    placeholder="coffee" 
    value={props.prompt}
    onChange={(e) => updatePromptValue(e.currentTarget.value)}></input>
    <div>
        {props.prompt.length}/{props.characterLimit}
    </div>
    <button onClick={props.onSubmit} disabled={props.isLoading || !isPromtValid}>Submit</button></>;
};

export default Form;