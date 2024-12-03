from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import BertForQuestionAnswering, BertTokenizer
import torch
import string


app = Flask(__name__)
CORS(app)


model = BertForQuestionAnswering.from_pretrained('bert-large-uncased-whole-word-masking-finetuned-squad')
tokenizer = BertTokenizer.from_pretrained('bert-large-uncased-whole-word-masking-finetuned-squad')

def select_best_context(question):
    with open('answers2.txt', 'r') as file:
        contexts = [line.strip() for line in file.readlines()]



    best_context = None
    best_score = float('-inf')
    scores = {}

    question_tokens = [token for token in tokenizer.tokenize(question) if token not in string.punctuation and token.lower() != "'s"]
    keywords = [str(token) for token in question_tokens]
    #print("Keywords:", keywords)

    question_input = tokenizer.convert_tokens_to_ids(question_tokens)

    for context in contexts:
        context_tokens = tokenizer.tokenize(context)
        context_input = tokenizer.convert_tokens_to_ids(context_tokens)

        score = 0

        # added kayword search as well to make the answers more accurate
        for keyword in keywords:
            if keyword.lower() in [token.lower() for token in context_tokens]:
                score += 2  # Increment score if keyword is found

        input_ids = tokenizer.build_inputs_with_special_tokens(question_input, context_input)
        token_type_ids = tokenizer.create_token_type_ids_from_sequences(question_input, context_input)

        input_ids_tensor = torch.tensor([input_ids])
        token_type_ids_tensor = torch.tensor([token_type_ids])

        outputs = model(input_ids_tensor, token_type_ids=token_type_ids_tensor)
        start_scores = outputs.start_logits
        end_scores = outputs.end_logits

        score += start_scores[0, torch.argmax(start_scores)] + end_scores[0, torch.argmax(end_scores)]

        scores[context] = score

        if score > best_score:
            best_context = context
            best_score = score

    # print out all scores for checking purposes
    #for context, score in scores.items():
    #    print(f"Context: {context}")
    #    print(f"Score: {score}\n")
    if(best_score>5):
        best_context= best_context
    else:
        best_context= "I'm sorry, I didnt quite get that. Please try to rephrase the question or try to ask a more specific one, and I'll do my best to help you, thanks!"
    return best_context




@app.route('/api/ask', methods=['POST'])
def ask():
    data = request.get_json()
    sentence = data.get('sentence', '')
    result = select_best_context(sentence)
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)
