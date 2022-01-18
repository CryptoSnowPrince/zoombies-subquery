"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogDailyReward = void 0;
const tslib_1 = require("tslib");
const assert_1 = (0, tslib_1.__importDefault)(require("assert"));
class LogDailyReward {
    constructor(id) {
        this.id = id;
    }
    async save() {
        let id = this.id;
        (0, assert_1.default)(id !== null, "Cannot save LogDailyReward entity without an ID");
        await store.set('LogDailyReward', id.toString(), this);
    }
    static async remove(id) {
        (0, assert_1.default)(id !== null, "Cannot remove LogDailyReward entity without an ID");
        await store.remove('LogDailyReward', id.toString());
    }
    static async get(id) {
        (0, assert_1.default)((id !== null && id !== undefined), "Cannot get LogDailyReward entity without an ID");
        const record = await store.get('LogDailyReward', id.toString());
        if (record) {
            return LogDailyReward.create(record);
        }
        else {
            return;
        }
    }
    static create(record) {
        (0, assert_1.default)(typeof record.id === 'string', "id must be provided");
        let entity = new LogDailyReward(record.id);
        Object.assign(entity, record);
        return entity;
    }
}
exports.LogDailyReward = LogDailyReward;
