"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleLogSacrificeNFTEvent = exports.handleLogRewardBoostersEvent = exports.handleLogDailyRewardEvent = exports.handleLogSponsorRewardEvent = exports.handleLogSponsorLinkedEvent = exports.handleLogPackOpenedEvent = exports.handleLogCardMintedEvent = exports.handleLogCardTypeLoadedEvent = void 0;
const types_1 = require("../types");
// LogCardTypeLoaded(uint32 indexed cardTypeId, string cardName, uint editionTotal);
async function handleLogCardTypeLoadedEvent(event) {
    const logCardTypeLoaded = new types_1.LogCardTypeLoaded(event.transactionHash);
    logCardTypeLoaded.cardTypeId = event.args.cardTypeId.toBigInt();
    logCardTypeLoaded.cardName = event.args.cardName;
    logCardTypeLoaded.editionTotal = event.args.editionTotal.toBigInt();
    await logCardTypeLoaded.save();
}
exports.handleLogCardTypeLoadedEvent = handleLogCardTypeLoadedEvent;
// LogCardMinted(address indexed buyer, uint tokenId, uint32 indexed cardTypeId, uint editionNumber);
async function handleLogCardMintedEvent(event) {
    const logCardMinted = new types_1.LogCardMinted(event.transactionHash);
    logCardMinted.buyer = event.args.buyer;
    logCardMinted.tokenId = event.args.tokenId.toBigInt();
    logCardMinted.cardTypeId = event.args.cardTypeId.toBigInt();
    logCardMinted.editionNumber = event.args.editionNumber.toBigInt();
    await logCardMinted.save();
}
exports.handleLogCardMintedEvent = handleLogCardMintedEvent;
// LogPackOpened(address indexed buyer, uint8 rarity);
async function handleLogPackOpenedEvent(event) {
    const logPackOpened = new types_1.LogPackOpened(event.transactionHash);
    logPackOpened.buyer = event.args.buyer;
    logPackOpened.rarity = event.args.rarity.toBigInt();
    await logPackOpened.save();
}
exports.handleLogPackOpenedEvent = handleLogPackOpenedEvent;
// LogSponsorLinked(address sponsor, address affiliate);
async function handleLogSponsorLinkedEvent(event) {
    const logSponsorLinked = new types_1.LogSponsorLinked(event.transactionHash);
    logSponsorLinked.sponsor = event.args.sponsor;
    logSponsorLinked.affiliate = event.args.affiliate;
    await logSponsorLinked.save();
}
exports.handleLogSponsorLinkedEvent = handleLogSponsorLinkedEvent;
// LogSponsorReward(address sponsor, address affiliate, uint zoomReward);
async function handleLogSponsorRewardEvent(event) {
    const logSponsorReward = new types_1.LogSponsorReward(event.transactionHash);
    logSponsorReward.sponsor = event.args.sponsor;
    logSponsorReward.affiliate = event.args.affiliate;
    logSponsorReward.zoomReward = event.args.zoomReward.toBigInt();
    await logSponsorReward.save();
}
exports.handleLogSponsorRewardEvent = handleLogSponsorRewardEvent;
// LogDailyReward(address player, uint newBoosterBalance);
async function handleLogDailyRewardEvent(event) {
    const logDailyReward = new types_1.LogDailyReward(event.transactionHash);
    logDailyReward.player = event.args.player;
    logDailyReward.newBoosterBalance = event.args.newBoosterBalance.toBigInt();
    await logDailyReward.save();
}
exports.handleLogDailyRewardEvent = handleLogDailyRewardEvent;
// LogRewardBoosters(address winner, uint boostersAwarded);
async function handleLogRewardBoostersEvent(event) {
    const logRewardBoosters = new types_1.LogRewardBoosters(event.transactionHash);
    logRewardBoosters.winner = event.args.winner;
    logRewardBoosters.boostersAwarded = event.args.boostersAwarded.toBigInt();
    await logRewardBoosters.save();
}
exports.handleLogRewardBoostersEvent = handleLogRewardBoostersEvent;
// LogSacrificeNFT(address owner, uint256 tokenId, uint16 cardTypeId, uint256 zoomGained);
async function handleLogSacrificeNFTEvent(event) {
    const logSacrificeNFT = new types_1.LogSacrificeNFT(event.transactionHash);
    logSacrificeNFT.owner = event.args.owner;
    logSacrificeNFT.tokenId = event.args.tokenId.toBigInt();
    logSacrificeNFT.cardTypeId = event.args.cardTypeId.toBigInt();
    logSacrificeNFT.zoomGained = event.args.zoomGained.toBigInt();
    await logSacrificeNFT.save();
}
exports.handleLogSacrificeNFTEvent = handleLogSacrificeNFTEvent;
