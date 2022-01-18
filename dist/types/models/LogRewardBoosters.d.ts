import { Entity, FunctionPropertyNames } from "@subql/types";
export declare class LogRewardBoosters implements Entity {
    constructor(id: string);
    id: string;
    winner: string;
    boostersAwarded: bigint;
    save(): Promise<void>;
    static remove(id: string): Promise<void>;
    static get(id: string): Promise<LogRewardBoosters | undefined>;
    static create(record: Partial<Omit<LogRewardBoosters, FunctionPropertyNames<LogRewardBoosters>>> & Entity): LogRewardBoosters;
}
