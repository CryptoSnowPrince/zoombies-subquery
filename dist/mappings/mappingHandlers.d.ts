import { MoonbeamEvent } from '@subql/contract-processors/dist/moonbeam';
import { BigNumber } from "ethers";
/**
LogCardTypeLoaded(uint32 indexed cardTypeId, string cardName, uint editionTotal);
LogCardMinted(address indexed buyer, uint tokenId, uint32 indexed cardTypeId, uint editionNumber);
LogPackOpened(address indexed buyer, uint8 rarity);
LogSponsorLinked(address sponsor, address affiliate);
LogSponsorReward(address sponsor, address affiliate, uint zoomReward);
LogDailyReward(address player, uint newBoosterBalance);
LogRewardBoosters(address winner, uint boostersAwarded);
LogSacrificeNFT(address owner, uint256 tokenId, uint16 cardTypeId, uint256 zoomGained);
 */
declare type LogCardTypeLoadedEventArgs = [BigNumber, string, BigNumber] & {
    cardTypeId: BigNumber;
    cardName: string;
    editionTotal: BigNumber;
};
declare type LogCardMintedEventArgs = [string, BigNumber, BigNumber, BigNumber] & {
    buyer: string;
    tokenId: BigNumber;
    cardTypeId: BigNumber;
    editionNumber: BigNumber;
};
declare type LogPackOpenedEventArgs = [string, BigNumber] & {
    buyer: string;
    rarity: BigNumber;
};
declare type LogSponsorLinkedEventArgs = [string, string] & {
    sponsor: string;
    affiliate: string;
};
declare type LogSponsorRewardEventArgs = [string, string, BigNumber] & {
    sponsor: string;
    affiliate: string;
    zoomReward: BigNumber;
};
declare type LogDailyRewardEventArgs = [string, BigNumber] & {
    player: string;
    newBoosterBalance: BigNumber;
};
declare type LogRewardBoostersEventArgs = [string, BigNumber] & {
    winner: string;
    boostersAwarded: BigNumber;
};
declare type LogSacrificeNFTEventArgs = [string, BigNumber, BigNumber, BigNumber] & {
    owner: string;
    tokenId: BigNumber;
    cardTypeId: BigNumber;
    zoomGained: BigNumber;
};
export declare function handleLogCardTypeLoadedEvent(event: MoonbeamEvent<LogCardTypeLoadedEventArgs>): Promise<void>;
export declare function handleLogCardMintedEvent(event: MoonbeamEvent<LogCardMintedEventArgs>): Promise<void>;
export declare function handleLogPackOpenedEvent(event: MoonbeamEvent<LogPackOpenedEventArgs>): Promise<void>;
export declare function handleLogSponsorLinkedEvent(event: MoonbeamEvent<LogSponsorLinkedEventArgs>): Promise<void>;
export declare function handleLogSponsorRewardEvent(event: MoonbeamEvent<LogSponsorRewardEventArgs>): Promise<void>;
export declare function handleLogDailyRewardEvent(event: MoonbeamEvent<LogDailyRewardEventArgs>): Promise<void>;
export declare function handleLogRewardBoostersEvent(event: MoonbeamEvent<LogRewardBoostersEventArgs>): Promise<void>;
export declare function handleLogSacrificeNFTEvent(event: MoonbeamEvent<LogSacrificeNFTEventArgs>): Promise<void>;
export {};
