import { Entity, FunctionPropertyNames } from "@subql/types";
export declare class LogPackOpened implements Entity {
    constructor(id: string);
    id: string;
    buyer: string;
    rarity: bigint;
    save(): Promise<void>;
    static remove(id: string): Promise<void>;
    static get(id: string): Promise<LogPackOpened | undefined>;
    static create(record: Partial<Omit<LogPackOpened, FunctionPropertyNames<LogPackOpened>>> & Entity): LogPackOpened;
}
