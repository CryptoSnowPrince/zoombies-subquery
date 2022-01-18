import { Entity, FunctionPropertyNames } from "@subql/types";
export declare class LogSponsorReward implements Entity {
    constructor(id: string);
    id: string;
    sponsor: string;
    affiliate: string;
    zoomReward: bigint;
    save(): Promise<void>;
    static remove(id: string): Promise<void>;
    static get(id: string): Promise<LogSponsorReward | undefined>;
    static create(record: Partial<Omit<LogSponsorReward, FunctionPropertyNames<LogSponsorReward>>> & Entity): LogSponsorReward;
}
