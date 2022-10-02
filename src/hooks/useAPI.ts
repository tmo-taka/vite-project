
import {useState} from 'react'
import Amplify, { API, graphqlOperation } from "aws-amplify";
import {authConfig} from '../authConfig';
import { ChatMessage } from "../models";
import { createChatMessage } from "../graphql/mutations";
import { listChatMessages,  } from "../graphql/queries";

export const useAPI =() => {

    Amplify.configure({ Auth: authConfig,aws_appsync_authenticationType: import.meta.env.VITE_API_KEY})

    const [inputMessage, setInputMessage] = useState<string>('');
    const [chatMessage, setChatMessage] = useState<ChatMessage[]>([]);

    async function fetchData() {
        try{
            const items = await API.graphql(graphqlOperation(listChatMessages));
            if ("data" in items && items.data) {
                const messages = items.data;
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