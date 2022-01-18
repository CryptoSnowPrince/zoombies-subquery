import { Entity, FunctionPropertyNames } from "@subql/types";
export declare class LogDailyReward implements Entity {
    constructor(id: string);
    id: string;
    player: string;
    newBoosterBalance: bigint;
    save(): Promise<void>;
    static remove(id: string): Promise<void>;
    static get(id: string): Promise<LogDailyReward | undefined>;
    static create(record: Partial<Omit<LogDailyReward, FunctionPropertyNames<LogDailyReward>>> & Entity): LogDailyReward;
}
