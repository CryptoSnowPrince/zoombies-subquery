// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export class LogPackOpened implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public buyer: string;

    public rarity: bigint;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save LogPackOpened entity without an ID");
        await store.set('LogPackOpened', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove LogPackOpened entity without an ID");
        await store.remove('LogPackOpened', id.toString());
    }

    static async get(id:string): Promise<LogPackOpened | undefined>{
        assert((id !== null && id !== undefined), "Cannot get LogPackOpened entity without an ID");
        const record = await store.get('LogPackOpened', id.toString());
        if (record){
            return LogPackOpened.create(record);
        }else{
            return;
        }
    }



    static create(record: Partial<Omit<LogPackOpened, FunctionPropertyNames<LogPackOpened>>> & Entity): LogPackOpened {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new LogPackOpened(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
