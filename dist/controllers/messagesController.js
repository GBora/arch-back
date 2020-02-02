"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messageService_1 = require("../services/messageService");
class MessagesCtrl {
    constructor() {
        this.messageService = new messageService_1.MessageService();
    }
    addMessage(data) {
        this.messageService.addMessage(data);
    }
}
exports.default = MessagesCtrl;
//# sourceMappingURL=messagesController.js.map