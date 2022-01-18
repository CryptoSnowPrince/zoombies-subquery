"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogSponsorReward = void 0;
const tslib_1 = require("tslib");
const assert_1 = (0, tslib_1.__importDefault)(require("assert"));
class LogSponsorReward {
    constructor(id) {
        this.id = id;
    }
    async save() {
        let id = this.id;
        (0, assert_1.default)(id !== null, "Cannot save LogSponsorReward entity without an ID");
        await store.set('LogSponsorReward', id.toString(), this);
    }
    static async remove(id) {
        (0, assert_1.default)(id !== null, "Cannot remove LogSponsorReward entity without an ID");
        await store.remove('LogSponsorReward', id.toString());
    }
    static async get(id) {
        (0, assert_1.default)((id !== null && id !== undefined), "Cannot get LogSponsorReward entity without an ID");
        const record = await store.get('LogSponsorReward', id.toString());
        if (record) {
            return LogSponsorReward.create(record);
        }
        else {
            return;
        }
    }
    static create(record) {
        (0, assert_1.default)(typeof record.id === 'string', "id must be provided");
        let entity = new LogSponsorReward(record.id);
        Object.assign(entity, record);
        return entity;
    }
}
exports.LogSponsorReward = LogSponsorReward;
