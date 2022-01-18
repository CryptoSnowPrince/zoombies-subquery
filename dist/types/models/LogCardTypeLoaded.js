"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogCardTypeLoaded = void 0;
const tslib_1 = require("tslib");
const assert_1 = (0, tslib_1.__importDefault)(require("assert"));
class LogCardTypeLoaded {
    constructor(id) {
        this.id = id;
    }
    async save() {
        let id = this.id;
        (0, assert_1.default)(id !== null, "Cannot save LogCardTypeLoaded entity without an ID");
        await store.set('LogCardTypeLoaded', id.toString(), this);
    }
    static async remove(id) {
        (0, assert_1.default)(id !== null, "Cannot remove LogCardTypeLoaded entity without an ID");
        await store.remove('LogCardTypeLoaded', id.toString());
    }
    static async get(id) {
        (0, assert_1.default)((id !== null && id !== undefined), "Cannot get LogCardTypeLoaded entity without an ID");
        const record = await store.get('LogCardTypeLoaded', id.toString());
        if (record) {
            return LogCardTypeLoaded.create(record);
        }
        else {
            return;
        }
    }
    static create(record) {
        (0, assert_1.default)(typeof record.id === 'string', "id must be provided");
        let entity = new LogCardTypeLoaded(record.id);
        Object.assign(entity, record);
        return entity;
    }
}
exports.LogCardTypeLoaded = LogCardTypeLoaded;
