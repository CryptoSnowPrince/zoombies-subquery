import { Entity, FunctionPropertyNames } from "@subql/types";
export declare class LogSacrificeNFT implements Entity {
    constructor(id: string);
    id: string;
    owner: string;
    tokenId: bigint;
    cardTypeId: bigint;
    zoomGained: bigint;
    save(): Promise<void>;
    static remove(id: string): Promise<void>;
    static get(id: string): Promise<LogSacrificeNFT | undefined>;
    static create(record: Partial<Omit<LogSacrificeNFT, FunctionPropertyNames<LogSacrificeNFT>>> & Entity): LogSacrificeNFT;
}
