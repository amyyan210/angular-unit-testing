import { MessageService } from "./message.service";

describe('MessageService', () => {
    let service: MessageService;

    beforeEach(() => {
      //initializes a new MessageService each test
      service = new MessageService();
    })

    it('Should have no messages to start', () => {
      expect(service.messages.length).toBe(0);
    })

    it('Should add a message when add is called', () => {
      service.add('message1');

      expect(service.messages.length).toBe(1);
    })

    it('Should remove all messages when clear is called', () => {
      service.add('message1');

      service.clear();

      expect(service.messages.length).toBe(0);
    })

})
