// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export class LogDailyReward implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public player: string;

    public newBoosterBalance: bigint;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save LogDailyReward entity without an ID");
        await store.set('LogDailyReward', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove LogDailyReward entity without an ID");
        await store.remove('LogDailyReward', id.toString());
    }

    static async get(id:string): Promise<LogDailyReward | undefined>{
        assert((id !== null && id !== undefined), "Cannot get LogDailyReward entity without an ID");
        const record = await store.get('LogDailyReward', id.toString());
        if (record){
            return LogDailyReward.create(record);
        }else{
            return;
        }
    }



    static create(record: Partial<Omit<LogDailyReward, FunctionPropertyNames<LogDailyReward>>> & Entity): LogDailyReward {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new LogDailyReward(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
