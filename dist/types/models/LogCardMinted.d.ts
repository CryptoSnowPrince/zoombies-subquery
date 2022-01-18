import { Entity, FunctionPropertyNames } from "@subql/types";
export declare class LogCardMinted implements Entity {
    constructor(id: string);
    id: string;
    buyer: string;
    tokenId: bigint;
    cardTypeId: bigint;
    editionNumber: bigint;
    save(): Promise<void>;
    static remove(id: string): Promise<void>;
    static get(id: string): Promise<LogCardMinted | undefined>;
    static create(record: Partial<Omit<LogCardMinted, FunctionPropertyNames<LogCardMinted>>> & Entity): LogCardMinted;
}
