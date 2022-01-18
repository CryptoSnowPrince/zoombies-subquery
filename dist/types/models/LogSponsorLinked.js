"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogSponsorLinked = void 0;
const tslib_1 = require("tslib");
const assert_1 = (0, tslib_1.__importDefault)(require("assert"));
class LogSponsorLinked {
    constructor(id) {
        this.id = id;
    }
    async save() {
        let id = this.id;
        (0, assert_1.default)(id !== null, "Cannot save LogSponsorLinked entity without an ID");
        await store.set('LogSponsorLinked', id.toString(), this);
    }
    static async remove(id) {
        (0, assert_1.default)(id !== null, "Cannot remove LogSponsorLinked entity without an ID");
        await store.remove('LogSponsorLinked', id.toString());
    }
    static async get(id) {
        (0, assert_1.default)((id !== null && id !== undefined), "Cannot get LogSponsorLinked entity without an ID");
        const record = await store.get('LogSponsorLinked', id.toString());
        if (record) {
            return LogSponsorLinked.create(record);
        }
        else {
            return;
        }
    }
    static create(record) {
        (0, assert_1.default)(typeof record.id === 'string', "id must be provided");
        let entity = new LogSponsorLinked(record.id);
        Object.assign(entity, record);
        return entity;
    }
}
exports.LogSponsorLinked = LogSponsorLinked;
