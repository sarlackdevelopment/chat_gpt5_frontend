import { Observable } from '../observable/observable';
import {addMessage, getMessages} from "../API/messages";

export const storeMessagesService = {
    messages: new Observable([]),
    loadingMessageList: new Observable(false),
    errorMessageList: new Observable(''),
    loadingNewMessage: new Observable(false),
    errorNewMessage: new Observable('')
};

class MessagesService {
    setMessages = async () => {
        storeMessagesService.loadingMessageList.set(true);
        try {
            const messages = await getMessages();
            storeMessagesService.messages.set(messages);
        } catch (error) {
            storeMessagesService.errorMessageList.set(error.message);
        } finally {
            storeMessagesService.loadingMessageList.set(false);
        }
    }
    addMessage = async (data) => {
        storeMessagesService.loadingNewMessage.set(true);
        try {
            await addMessage(data);
            const messages = await getMessages();
            console.log('---------------');
            console.log(data);
            console.log(messages);
            storeMessagesService.messages.set(messages);
        } catch (error) {
            storeMessagesService.errorNewMessage.set(error.message);
        } finally {
            storeMessagesService.loadingNewMessage.set(false);
        }
    }
}

export const messagesService = new MessagesService();
