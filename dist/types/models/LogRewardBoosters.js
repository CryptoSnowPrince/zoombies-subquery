"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogRewardBoosters = void 0;
const tslib_1 = require("tslib");
const assert_1 = (0, tslib_1.__importDefault)(require("assert"));
class LogRewardBoosters {
    constructor(id) {
        this.id = id;
    }
    async save() {
        let id = this.id;
        (0, assert_1.default)(id !== null, "Cannot save LogRewardBoosters entity without an ID");
        await store.set('LogRewardBoosters', id.toString(), this);
    }
    static async remove(id) {
        (0, assert_1.default)(id !== null, "Cannot remove LogRewardBoosters entity without an ID");
        await store.remove('LogRewardBoosters', id.toString());
    }
    static async get(id) {
        (0, assert_1.default)((id !== null && id !== undefined), "Cannot get LogRewardBoosters entity without an ID");
        const record = await store.get('LogRewardBoosters', id.toString());
        if (record) {
            return LogRewardBoosters.create(record);
        }
        else {
            return;
        }
    }
    static create(record) {
        (0, assert_1.default)(typeof record.id === 'string', "id must be provided");
        let entity = new LogRewardBoosters(record.id);
        Object.assign(entity, record);
        return entity;
    }
}
exports.LogRewardBoosters = LogRewardBoosters;
