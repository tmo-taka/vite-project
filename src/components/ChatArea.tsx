import { useEffect } from 'react'
import { Input , Button,  Box} from "@chakra-ui/react";
import { useAPI } from '@Hooks/useAPI'

export const ChatArea = () =>{
    const { inputMessage, setInputMessage, fetchData, saveData } = useAPI();

    useEffect(()=> {
        fetchData();
    },[])

    const setMessage = (event: {target: HTMLInputElement}):void =>{
        const message:string = event.target.value;
        setInputMessage(message)
    }

    const submitMessage = ():void =>{
        saveData();
    }

    return (
        <Box>
            <Input
                placeholder='name'
                size='md'
                mb={8}
                p={4}
                value={inputMessage}
                onChange={setMessage}
                bg="white"
            />
            <Button h='1.75rem' size='sm' onClick={submitMessage}>送信</Button>
        </Box>
    )
}
