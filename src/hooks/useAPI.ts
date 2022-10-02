
import {useState} from 'react'
import Amplify, { API, graphqlOperation } from "aws-amplify";
import {authConfig} from '../authConfig';
import { ChatMessage } from "../models";
import { createChatMessage } from "../graphql/mutations";
import { listChatMessages,  } from "../graphql/queries";

export const useAPI =() => {

    Amplify.configure({ Auth: authConfig,aws_appsync_authenticationType: import.meta.env.VITE_API_KEY})

    const [inputMessage, setInputMessage] = useState<string>('');

    async function fetchData() {
        try{
            const items = await API.graphql(graphqlOperation(listChatMessages));
            console.log(items.message)
        }catch(err:any) {
            console.log(err)
        }
    }

    async function saveData() {
        const model = new ChatMessage({
            message: inputMessage,
        });
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

    return {inputMessage,setInputMessage, fetchData, saveData}
}