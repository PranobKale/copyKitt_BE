import os
import openai
import argparse
import re

Max_INPUT_LENGTH = 12

def main():    
    parser = argparse.ArgumentParser()
    parser.add_argument('--input', "-i",type=str, required=True)
    args = parser.parse_args()
    user_input = args.input

    print(f"user_input: {user_input}\n")
    if validate_length(user_input):
        result = generate_braanding_snippet(user_input)
        keyword_result = generate_keywords(user_input)
    else:
        raise ValueError(f"Input length is too long. Must be unde {Max_INPUT_LENGTH}. Submitted input is {user_input}")
    

def generate_braanding_snippet(prompt:str) -> str:
    openai.api_key = "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"

    enriched_prompt = f"Generate upbeat branding snippet for {prompt} :"
    print(enriched_prompt)

    # Create a chat completion using gpt-3.5-turbo
    response = openai.Completion.create(
        engine="davinci-instruct-beta-v3",
        prompt=enriched_prompt,
        max_tokens=32
    )

    # Extract output text
    branding_text: str = response.choices[0].text
    
    # Strip whitespaces
    branding_text = branding_text.strip()
    
    # Add "..." to truncated string
    last_char = branding_text[-1]
    if last_char not in {".", "!", "?"}:
       branding_text += "..."
    
    print(f"Snippet : {branding_text}")
    return branding_text
    

def generate_keywords(prompt:str) -> str:
    openai.api_key = "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"

    enriched_prompt = f"Generate related branding keywords for {prompt} :"
    print(enriched_prompt,"")

    # Create a chat completion using davinci-instruct-beta-v3
    response = openai.Completion.create(
        engine="davinci-instruct-beta-v3",
        prompt=enriched_prompt,
        max_tokens=32
    )

    # Extract output text
    keyword_text: str = response.choices[0].text
    
    # Strip whitespaces
    keyword_text = keyword_text.strip()
    keyword_array = re.split(",|\n|-",keyword_text)
    keyword_array = [k.lower().strip() for k in keyword_array] 
    keyword_array = [k for k in keyword_array if len(k) > 0]

    print(f"Keywords : {keyword_array}")
    return keyword_array
    

def validate_length(prompt:str) -> bool:
    """Validates the length of the input"""
    return len(prompt) <= 12



if __name__ == "__main__":
   main()
