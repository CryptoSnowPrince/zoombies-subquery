"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogSacrificeNFT = void 0;
const tslib_1 = require("tslib");
const assert_1 = (0, tslib_1.__importDefault)(require("assert"));
class LogSacrificeNFT {
    constructor(id) {
        this.id = id;
    }
    async save() {
        let id = this.id;
        (0, assert_1.default)(id !== null, "Cannot save LogSacrificeNFT entity without an ID");
        await store.set('LogSacrificeNFT', id.toString(), this);
    }
    static async remove(id) {
        (0, assert_1.default)(id !== null, "Cannot remove LogSacrificeNFT entity without an ID");
        await store.remove('LogSacrificeNFT', id.toString());
    }
    static async get(id) {
        (0, assert_1.default)((id !== null && id !== undefined), "Cannot get LogSacrificeNFT entity without an ID");
        const record = await store.get('LogSacrificeNFT', id.toString());
        if (record) {
            return LogSacrificeNFT.create(record);
        }
        else {
            return;
        }
    }
    static create(record) {
        (0, assert_1.default)(typeof record.id === 'string', "id must be provided");
        let entity = new LogSacrificeNFT(record.id);
        Object.assign(entity, record);
        return entity;
    }
}
exports.LogSacrificeNFT = LogSacrificeNFT;
