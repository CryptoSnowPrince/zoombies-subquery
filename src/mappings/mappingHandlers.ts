import { LogCardTypeLoaded, LogCardMinted, LogPackOpened, LogSponsorLinked, LogSponsorReward, LogDailyReward, LogRewardBoosters, LogSacrificeNFT} from "../types";
import { MoonbeamEvent } from '@subql/contract-processors/dist/moonbeam';
import { BigNumber } from "ethers";

// Setup types from ZoombiesABI
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
type LogCardTypeLoadedEventArgs = [BigNumber, string, BigNumber] & { cardTypeId: BigNumber; cardName: string; editionTotal: BigNumber; };
type LogCardMintedEventArgs = [string, BigNumber, BigNumber, BigNumber] & { buyer: string; tokenId: BigNumber; cardTypeId: BigNumber; editionNumber: BigNumber; };
type LogPackOpenedEventArgs = [string, BigNumber] & { buyer: string; rarity: BigNumber; };
type LogSponsorLinkedEventArgs = [string, string] & { sponsor: string; affiliate: string; };
type LogSponsorRewardEventArgs = [string, string, BigNumber] & { sponsor: string; affiliate: string; zoomReward: BigNumber; };
type LogDailyRewardEventArgs = [string, BigNumber] & { player: string; newBoosterBalance: BigNumber; };
type LogRewardBoostersEventArgs = [string, BigNumber] & { winner: string; boostersAwarded: BigNumber; };
type LogSacrificeNFTEventArgs = [string, BigNumber, BigNumber, BigNumber] & { owner: string; tokenId: BigNumber; cardTypeId: BigNumber; zoomGained: BigNumber; };

// LogCardTypeLoaded(uint32 indexed cardTypeId, string cardName, uint editionTotal);

export async function handleLogCardTypeLoadedEvent(event: MoonbeamEvent<LogCardTypeLoadedEventArgs>): Promise<void> {
    const logCardTypeLoaded = new LogCardTypeLoaded(event.transactionHash);

    logCardTypeLoaded.cardTypeId = event.args.cardTypeId.toBigInt();
    logCardTypeLoaded.cardName = event.args.cardName;
    logCardTypeLoaded.editionTotal = event.args.editionTotal.toBigInt();

	await logCardTypeLoaded.save();
}

// LogCardMinted(address indexed buyer, uint tokenId, uint32 indexed cardTypeId, uint editionNumber);

export async function handleLogCardMintedEvent(event: MoonbeamEvent<LogCardMintedEventArgs>): Promise<void> {
    const logCardMinted = new LogCardMinted(event.transactionHash);

    logCardMinted.buyer = event.args.buyer;
    logCardMinted.tokenId = event.args.tokenId.toBigInt();
    logCardMinted.cardTypeId = event.args.cardTypeId.toBigInt();
    logCardMinted.editionNumber = event.args.editionNumber.toBigInt();

	await logCardMinted.save();
}

// LogPackOpened(address indexed buyer, uint8 rarity);

export async function handleLogPackOpenedEvent(event: MoonbeamEvent<LogPackOpenedEventArgs>): Promise<void> {
	const logPackOpened = new LogPackOpened(event.transactionHash);

    logPackOpened.buyer = event.args.buyer;
    logPackOpened.rarity = event.args.rarity.toBigInt();

	await logPackOpened.save();
}

// LogSponsorLinked(address sponsor, address affiliate);

export async function handleLogSponsorLinkedEvent(event: MoonbeamEvent<LogSponsorLinkedEventArgs>): Promise<void> {
	const logSponsorLinked = new LogSponsorLinked(event.transactionHash);

    logSponsorLinked.sponsor = event.args.sponsor;
    logSponsorLinked.affiliate = event.args.affiliate;

	await logSponsorLinked.save();
}

// LogSponsorReward(address sponsor, address affiliate, uint zoomReward);

export async function handleLogSponsorRewardEvent(event: MoonbeamEvent<LogSponsorRewardEventArgs>): Promise<void> {
	const logSponsorReward = new LogSponsorReward(event.transactionHash);

    logSponsorReward.sponsor = event.args.sponsor;
    logSponsorReward.affiliate = event.args.affiliate;
    logSponsorReward.zoomReward = event.args.zoomReward.toBigInt();

	await logSponsorReward.save();
}

// LogDailyReward(address player, uint newBoosterBalance);

export async function handleLogDailyRewardEvent(event: MoonbeamEvent<LogDailyRewardEventArgs>): Promise<void> {
    const logDailyReward = new LogDailyReward(event.transactionHash);

    logDailyReward.player = event.args.player;
    logDailyReward.newBoosterBalance = event.args.newBoosterBalance.toBigInt();

	await logDailyReward.save();
}

// LogRewardBoosters(address winner, uint boostersAwarded);

export async function handleLogRewardBoostersEvent(event: MoonbeamEvent<LogRewardBoostersEventArgs>): Promise<void> {
    const logRewardBoosters = new LogRewardBoosters(event.transactionHash);

    logRewardBoosters.winner = event.args.winner;
    logRewardBoosters.boostersAwarded = event.args.boostersAwarded.toBigInt();

    await logRewardBoosters.save();
}

// LogSacrificeNFT(address owner, uint256 tokenId, uint16 cardTypeId, uint256 zoomGained);

export async function handleLogSacrificeNFTEvent(event: MoonbeamEvent<LogSacrificeNFTEventArgs>): Promise<void> {
	const logSacrificeNFT = new LogSacrificeNFT(event.transactionHash);

    logSacrificeNFT.owner = event.args.owner;
    logSacrificeNFT.tokenId = event.args.tokenId.toBigInt();
    logSacrificeNFT.cardTypeId = event.args.cardTypeId.toBigInt();
    logSacrificeNFT.zoomGained = event.args.zoomGained.toBigInt();

	await logSacrificeNFT.save();
}
