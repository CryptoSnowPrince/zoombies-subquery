// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export class LogCardTypeLoaded implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public cardTypeId: bigint;

    public cardName: string;

    public editionTotal: bigint;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save LogCardTypeLoaded entity without an ID");
        await store.set('LogCardTypeLoaded', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove LogCardTypeLoaded entity without an ID");
        await store.remove('LogCardTypeLoaded', id.toString());
    }

    static async get(id:string): Promise<LogCardTypeLoaded | undefined>{
        assert((id !== null && id !== undefined), "Cannot get LogCardTypeLoaded entity without an ID");
        const record = await store.get('LogCardTypeLoaded', id.toString());
        if (record){
            return LogCardTypeLoaded.create(record);
        }else{
            return;
        }
    }



    static create(record: Partial<Omit<LogCardTypeLoaded, FunctionPropertyNames<LogCardTypeLoaded>>> & Entity): LogCardTypeLoaded {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new LogCardTypeLoaded(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
