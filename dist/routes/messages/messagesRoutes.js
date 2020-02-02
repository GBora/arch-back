"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const messagesController_1 = __importDefault(require("../../controllers/messagesController"));
const messagesRoutes = express_1.Router();
const messageCtrl = new messagesController_1.default();
messagesRoutes.post("/add-message", (req, res) => {
    messageCtrl.addMessage(req.body);
    res.sendStatus(200);
});
messagesRoutes.post("/get-conversation", (req, res) => {
    messageCtrl.addMessage(req.body);
    res.sendStatus(200);
});
exports.default = messagesRoutes;
//# sourceMappingURL=messagesRoutes.js.map