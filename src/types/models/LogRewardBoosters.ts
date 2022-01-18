// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export class LogRewardBoosters implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public winner: string;

    public boostersAwarded: bigint;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save LogRewardBoosters entity without an ID");
        await store.set('LogRewardBoosters', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove LogRewardBoosters entity without an ID");
        await store.remove('LogRewardBoosters', id.toString());
    }

    static async get(id:string): Promise<LogRewardBoosters | undefined>{
        assert((id !== null && id !== undefined), "Cannot get LogRewardBoosters entity without an ID");
        const record = await store.get('LogRewardBoosters', id.toString());
        if (record){
            return LogRewardBoosters.create(record);
        }else{
            return;
        }
    }



    static create(record: Partial<Omit<LogRewardBoosters, FunctionPropertyNames<LogRewardBoosters>>> & Entity): LogRewardBoosters {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new LogRewardBoosters(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
