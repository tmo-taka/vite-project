
import {useState} from 'react'
import {Amplify,API, graphqlOperation } from "aws-amplify";
import {apiConfig} from '../aws-export';
import { ChatMessage } from "../models";
import { createChatMessage } from "../graphql/mutations";
import { listChatMessages,  } from "../graphql/queries";

export const useAPI =() => {

    Amplify.configure({
        API: apiConfig,
    })

    const [inputMessage, setInputMessage] = useState<string>('');
    const [chatMessage, setChatMessage] = useState<ChatMessage[]>([]);

    async function fetchData() {
        try{
            const items = await API.graphql(graphqlOperation(listChatMessages));
            if ("data" in items && items.data) {
                const messages = items.data;
                console.log(messages)
                setChatMessage(messages.listChatMessages.items);
            }
        }catch(err:any) {
            console.log(err)
        }
    }

    async function saveData() {
        const model = new ChatMessage({
            message: inputMessage,
        });
        console.log(model);
        try{
            await API.graphql(
                graphqlOperation(createChatMessage, {
                    input: model,
                })
            );
        }catch(err:any) {
            console.log(err)
        }
        setInputMessage('')
    }

    return {inputMessage, chatMessage, setInputMessage, fetchData, saveData}
}