import { useEffect } from 'react'
import { Input , Button,  Box} from "@chakra-ui/react";
import { useAPI } from '@Hooks/useAPI'

type Props = {
    children?: React.ReactNode;
};

export const ChatArea: FC<Props> = (props) =>{
    const { inputMessage, chatMessage, setInputMessage, fetchData, saveData } = useAPI();

    useEffect(()=> {
        fetchData();
    },[inputMessage])

    const setMessage = (event: {target: HTMLInputElement}):void =>{
        const message:string = event.target.value;
        setInputMessage(message)
    }

    const submitMessage = ():void =>{
        saveData();
    }

    return (
        <Box>
            {chatMessage.map((message, index) => {return (<div key={index}>{message.message}</div>)})}
            <Input
                placeholder='text'
                size='md'
                mb={8}
                p={4}
                value={inputMessage}
                onChange={setMessage}
                bg="white"
            />
            <Button h='1.75rem' size='sm' onClick={submitMessage}>投稿</Button>
        </Box>
    )
}
