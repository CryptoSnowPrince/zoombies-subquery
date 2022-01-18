"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogCardMinted = void 0;
const tslib_1 = require("tslib");
const assert_1 = (0, tslib_1.__importDefault)(require("assert"));
class LogCardMinted {
    constructor(id) {
        this.id = id;
    }
    async save() {
        let id = this.id;
        (0, assert_1.default)(id !== null, "Cannot save LogCardMinted entity without an ID");
        await store.set('LogCardMinted', id.toString(), this);
    }
    static async remove(id) {
        (0, assert_1.default)(id !== null, "Cannot remove LogCardMinted entity without an ID");
        await store.remove('LogCardMinted', id.toString());
    }
    static async get(id) {
        (0, assert_1.default)((id !== null && id !== undefined), "Cannot get LogCardMinted entity without an ID");
        const record = await store.get('LogCardMinted', id.toString());
        if (record) {
            return LogCardMinted.create(record);
        }
        else {
            return;
        }
    }
    static create(record) {
        (0, assert_1.default)(typeof record.id === 'string', "id must be provided");
        let entity = new LogCardMinted(record.id);
        Object.assign(entity, record);
        return entity;
    }
}
exports.LogCardMinted = LogCardMinted;
