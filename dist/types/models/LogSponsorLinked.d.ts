import { Entity, FunctionPropertyNames } from "@subql/types";
export declare class LogSponsorLinked implements Entity {
    constructor(id: string);
    id: string;
    sponsor: string;
    affiliate: string;
    save(): Promise<void>;
    static remove(id: string): Promise<void>;
    static get(id: string): Promise<LogSponsorLinked | undefined>;
    static create(record: Partial<Omit<LogSponsorLinked, FunctionPropertyNames<LogSponsorLinked>>> & Entity): LogSponsorLinked;
}
