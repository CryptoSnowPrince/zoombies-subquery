import { Entity, FunctionPropertyNames } from "@subql/types";
export declare class LogCardTypeLoaded implements Entity {
    constructor(id: string);
    id: string;
    cardTypeId: bigint;
    cardName: string;
    editionTotal: bigint;
    save(): Promise<void>;
    static remove(id: string): Promise<void>;
    static get(id: string): Promise<LogCardTypeLoaded | undefined>;
    static create(record: Partial<Omit<LogCardTypeLoaded, FunctionPropertyNames<LogCardTypeLoaded>>> & Entity): LogCardTypeLoaded;
}
