
import Amplify, { API, graphqlOperation } from "aws-amplify";
import {authConfig} from '../authConfig';
import { listChatMessages } from "../graphql/queries";

export const useAPI =() => {

    Amplify.configure({ Auth: authConfig,aws_appsync_authenticationType: import.meta.env.VITE_API_KEY})

    async function fetchData() {
        try{
            const items = await API.graphql(graphqlOperation(listChatMessages));
            console.log(items.message)
        }catch(err:any) {
            console.log(err)
        }
    }

    return {fetchData}
}