"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const configs_1 = __importDefault(require("../config/configs"));
let sequelize = new sequelize_1.Sequelize({
    dialect: 'sqlite',
    storage: configs_1.default.dbURL
});
class UserModel extends sequelize_1.Model {
}
UserModel.init({
    // attributes
    EMAIL: {
        type: sequelize_1.TEXT,
        allowNull: false,
        unique: true
    },
    FIRST_NAME: {
        type: sequelize_1.TEXT,
        allowNull: false
    },
    LAST_NAME: {
        type: sequelize_1.TEXT,
        allowNull: false
    },
    AVATAR: {
        type: sequelize_1.TEXT,
        allowNull: true,
    }
}, {
    sequelize,
    modelName: 'USER',
    tableName: 'USERS',
    timestamps: false
});
exports.default = UserModel;
//# sourceMappingURL=UserModel.js.map