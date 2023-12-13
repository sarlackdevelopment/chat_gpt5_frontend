import { Observable } from '../observable/observable';
import { getMessages } from "../API/messages";

export const storeMessagesService = {
    messages: new Observable([]),
    loading: new Observable(false),
    error: new Observable('')
};

class MessagesService {
    setMessages = async () => {
        storeMessagesService.loading.set(true);
        try {
            const messages = await getMessages();
            storeMessagesService.messages.set(messages);
        } catch (error) {
            storeMessagesService.error.set(error.message);
        } finally {
            storeMessagesService.loading.set(false);
        }
    }
}

export const messagesService = new MessagesService();
