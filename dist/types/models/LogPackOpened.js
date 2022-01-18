"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogPackOpened = void 0;
const tslib_1 = require("tslib");
const assert_1 = (0, tslib_1.__importDefault)(require("assert"));
class LogPackOpened {
    constructor(id) {
        this.id = id;
    }
    async save() {
        let id = this.id;
        (0, assert_1.default)(id !== null, "Cannot save LogPackOpened entity without an ID");
        await store.set('LogPackOpened', id.toString(), this);
    }
    static async remove(id) {
        (0, assert_1.default)(id !== null, "Cannot remove LogPackOpened entity without an ID");
        await store.remove('LogPackOpened', id.toString());
    }
    static async get(id) {
        (0, assert_1.default)((id !== null && id !== undefined), "Cannot get LogPackOpened entity without an ID");
        const record = await store.get('LogPackOpened', id.toString());
        if (record) {
            return LogPackOpened.create(record);
        }
        else {
            return;
        }
    }
    static create(record) {
        (0, assert_1.default)(typeof record.id === 'string', "id must be provided");
        let entity = new LogPackOpened(record.id);
        Object.assign(entity, record);
        return entity;
    }
}
exports.LogPackOpened = LogPackOpened;
