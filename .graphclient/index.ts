// @ts-nocheck
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type Account = {
  /** An Account is any address that holds any amount of Nouns, the id used is the blockchain address. */
  id: Scalars['ID'];
  /** Delegate address of the token holder which will participate in votings. Delegates don't need to hold any tokens and can even be the token holder itself. */
  delegate?: Maybe<Delegate>;
  /** Noun balance of this address expressed in the smallest unit of the Nouns ERC721 Token */
  tokenBalanceRaw: Scalars['BigInt'];
  /** Noun balance of this address expressed as a BigInt normalized value for the Nouns ERC721 Token */
  tokenBalance: Scalars['BigInt'];
  /** Total amount of Nouns ever held by this address expressed in the smallest unit of the Nouns ERC721 Token */
  totalTokensHeldRaw: Scalars['BigInt'];
  /** Total amount of Nouns ever held by this address expressed as a BigInt normalized value for the Nouns ERC721 Token */
  totalTokensHeld: Scalars['BigInt'];
  /** The Nouns owned by this account */
  nouns: Array<Noun>;
};


export type AccountnounsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Noun_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Noun_filter>;
};

export type Account_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  delegate?: InputMaybe<Scalars['String']>;
  delegate_not?: InputMaybe<Scalars['String']>;
  delegate_gt?: InputMaybe<Scalars['String']>;
  delegate_lt?: InputMaybe<Scalars['String']>;
  delegate_gte?: InputMaybe<Scalars['String']>;
  delegate_lte?: InputMaybe<Scalars['String']>;
  delegate_in?: InputMaybe<Array<Scalars['String']>>;
  delegate_not_in?: InputMaybe<Array<Scalars['String']>>;
  delegate_contains?: InputMaybe<Scalars['String']>;
  delegate_contains_nocase?: InputMaybe<Scalars['String']>;
  delegate_not_contains?: InputMaybe<Scalars['String']>;
  delegate_not_contains_nocase?: InputMaybe<Scalars['String']>;
  delegate_starts_with?: InputMaybe<Scalars['String']>;
  delegate_starts_with_nocase?: InputMaybe<Scalars['String']>;
  delegate_not_starts_with?: InputMaybe<Scalars['String']>;
  delegate_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  delegate_ends_with?: InputMaybe<Scalars['String']>;
  delegate_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegate_not_ends_with?: InputMaybe<Scalars['String']>;
  delegate_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenBalanceRaw?: InputMaybe<Scalars['BigInt']>;
  tokenBalanceRaw_not?: InputMaybe<Scalars['BigInt']>;
  tokenBalanceRaw_gt?: InputMaybe<Scalars['BigInt']>;
  tokenBalanceRaw_lt?: InputMaybe<Scalars['BigInt']>;
  tokenBalanceRaw_gte?: InputMaybe<Scalars['BigInt']>;
  tokenBalanceRaw_lte?: InputMaybe<Scalars['BigInt']>;
  tokenBalanceRaw_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenBalanceRaw_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenBalance?: InputMaybe<Scalars['BigInt']>;
  tokenBalance_not?: InputMaybe<Scalars['BigInt']>;
  tokenBalance_gt?: InputMaybe<Scalars['BigInt']>;
  tokenBalance_lt?: InputMaybe<Scalars['BigInt']>;
  tokenBalance_gte?: InputMaybe<Scalars['BigInt']>;
  tokenBalance_lte?: InputMaybe<Scalars['BigInt']>;
  tokenBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensHeldRaw?: InputMaybe<Scalars['BigInt']>;
  totalTokensHeldRaw_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensHeldRaw_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensHeldRaw_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensHeldRaw_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensHeldRaw_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensHeldRaw_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensHeldRaw_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensHeld?: InputMaybe<Scalars['BigInt']>;
  totalTokensHeld_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensHeld_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensHeld_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensHeld_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensHeld_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensHeld_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensHeld_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nouns?: InputMaybe<Array<Scalars['String']>>;
  nouns_not?: InputMaybe<Array<Scalars['String']>>;
  nouns_contains?: InputMaybe<Array<Scalars['String']>>;
  nouns_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  nouns_not_contains?: InputMaybe<Array<Scalars['String']>>;
  nouns_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Account_orderBy =
  | 'id'
  | 'delegate'
  | 'tokenBalanceRaw'
  | 'tokenBalance'
  | 'totalTokensHeldRaw'
  | 'totalTokensHeld'
  | 'nouns';

export type Auction = {
  /** The Noun's ERC721 token id */
  id: Scalars['ID'];
  /** The Noun */
  noun: Noun;
  /** The current highest bid amount */
  amount: Scalars['BigInt'];
  /** The time that the auction started */
  startTime: Scalars['BigInt'];
  /** The time that the auction is scheduled to end */
  endTime: Scalars['BigInt'];
  /** The account with the current highest bid */
  bidder?: Maybe<Account>;
  /** Whether or not the auction has been settled */
  settled: Scalars['Boolean'];
  /** The auction bids */
  bids: Array<Bid>;
};


export type AuctionbidsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bid_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Bid_filter>;
};

export type Auction_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  noun?: InputMaybe<Scalars['String']>;
  noun_not?: InputMaybe<Scalars['String']>;
  noun_gt?: InputMaybe<Scalars['String']>;
  noun_lt?: InputMaybe<Scalars['String']>;
  noun_gte?: InputMaybe<Scalars['String']>;
  noun_lte?: InputMaybe<Scalars['String']>;
  noun_in?: InputMaybe<Array<Scalars['String']>>;
  noun_not_in?: InputMaybe<Array<Scalars['String']>>;
  noun_contains?: InputMaybe<Scalars['String']>;
  noun_contains_nocase?: InputMaybe<Scalars['String']>;
  noun_not_contains?: InputMaybe<Scalars['String']>;
  noun_not_contains_nocase?: InputMaybe<Scalars['String']>;
  noun_starts_with?: InputMaybe<Scalars['String']>;
  noun_starts_with_nocase?: InputMaybe<Scalars['String']>;
  noun_not_starts_with?: InputMaybe<Scalars['String']>;
  noun_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  noun_ends_with?: InputMaybe<Scalars['String']>;
  noun_ends_with_nocase?: InputMaybe<Scalars['String']>;
  noun_not_ends_with?: InputMaybe<Scalars['String']>;
  noun_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startTime?: InputMaybe<Scalars['BigInt']>;
  startTime_not?: InputMaybe<Scalars['BigInt']>;
  startTime_gt?: InputMaybe<Scalars['BigInt']>;
  startTime_lt?: InputMaybe<Scalars['BigInt']>;
  startTime_gte?: InputMaybe<Scalars['BigInt']>;
  startTime_lte?: InputMaybe<Scalars['BigInt']>;
  startTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endTime?: InputMaybe<Scalars['BigInt']>;
  endTime_not?: InputMaybe<Scalars['BigInt']>;
  endTime_gt?: InputMaybe<Scalars['BigInt']>;
  endTime_lt?: InputMaybe<Scalars['BigInt']>;
  endTime_gte?: InputMaybe<Scalars['BigInt']>;
  endTime_lte?: InputMaybe<Scalars['BigInt']>;
  endTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bidder?: InputMaybe<Scalars['String']>;
  bidder_not?: InputMaybe<Scalars['String']>;
  bidder_gt?: InputMaybe<Scalars['String']>;
  bidder_lt?: InputMaybe<Scalars['String']>;
  bidder_gte?: InputMaybe<Scalars['String']>;
  bidder_lte?: InputMaybe<Scalars['String']>;
  bidder_in?: InputMaybe<Array<Scalars['String']>>;
  bidder_not_in?: InputMaybe<Array<Scalars['String']>>;
  bidder_contains?: InputMaybe<Scalars['String']>;
  bidder_contains_nocase?: InputMaybe<Scalars['String']>;
  bidder_not_contains?: InputMaybe<Scalars['String']>;
  bidder_not_contains_nocase?: InputMaybe<Scalars['String']>;
  bidder_starts_with?: InputMaybe<Scalars['String']>;
  bidder_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bidder_not_starts_with?: InputMaybe<Scalars['String']>;
  bidder_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bidder_ends_with?: InputMaybe<Scalars['String']>;
  bidder_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bidder_not_ends_with?: InputMaybe<Scalars['String']>;
  bidder_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  settled?: InputMaybe<Scalars['Boolean']>;
  settled_not?: InputMaybe<Scalars['Boolean']>;
  settled_in?: InputMaybe<Array<Scalars['Boolean']>>;
  settled_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Auction_orderBy =
  | 'id'
  | 'noun'
  | 'amount'
  | 'startTime'
  | 'endTime'
  | 'bidder'
  | 'settled'
  | 'bids';

export type Bid = {
  /** Bid transaction hash */
  id: Scalars['ID'];
  /** The Noun being bid on */
  noun: Noun;
  /** Bid amount */
  amount: Scalars['BigInt'];
  /** Bidder account */
  bidder?: Maybe<Account>;
  /** Block number of the bid */
  blockNumber: Scalars['BigInt'];
  /** Index of transaction within block */
  txIndex: Scalars['BigInt'];
  /** The auction being bid in */
  auction: Auction;
  /** The timestamp of the block the bid is in */
  blockTimestamp: Scalars['BigInt'];
};

export type Bid_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  noun?: InputMaybe<Scalars['String']>;
  noun_not?: InputMaybe<Scalars['String']>;
  noun_gt?: InputMaybe<Scalars['String']>;
  noun_lt?: InputMaybe<Scalars['String']>;
  noun_gte?: InputMaybe<Scalars['String']>;
  noun_lte?: InputMaybe<Scalars['String']>;
  noun_in?: InputMaybe<Array<Scalars['String']>>;
  noun_not_in?: InputMaybe<Array<Scalars['String']>>;
  noun_contains?: InputMaybe<Scalars['String']>;
  noun_contains_nocase?: InputMaybe<Scalars['String']>;
  noun_not_contains?: InputMaybe<Scalars['String']>;
  noun_not_contains_nocase?: InputMaybe<Scalars['String']>;
  noun_starts_with?: InputMaybe<Scalars['String']>;
  noun_starts_with_nocase?: InputMaybe<Scalars['String']>;
  noun_not_starts_with?: InputMaybe<Scalars['String']>;
  noun_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  noun_ends_with?: InputMaybe<Scalars['String']>;
  noun_ends_with_nocase?: InputMaybe<Scalars['String']>;
  noun_not_ends_with?: InputMaybe<Scalars['String']>;
  noun_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bidder?: InputMaybe<Scalars['String']>;
  bidder_not?: InputMaybe<Scalars['String']>;
  bidder_gt?: InputMaybe<Scalars['String']>;
  bidder_lt?: InputMaybe<Scalars['String']>;
  bidder_gte?: InputMaybe<Scalars['String']>;
  bidder_lte?: InputMaybe<Scalars['String']>;
  bidder_in?: InputMaybe<Array<Scalars['String']>>;
  bidder_not_in?: InputMaybe<Array<Scalars['String']>>;
  bidder_contains?: InputMaybe<Scalars['String']>;
  bidder_contains_nocase?: InputMaybe<Scalars['String']>;
  bidder_not_contains?: InputMaybe<Scalars['String']>;
  bidder_not_contains_nocase?: InputMaybe<Scalars['String']>;
  bidder_starts_with?: InputMaybe<Scalars['String']>;
  bidder_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bidder_not_starts_with?: InputMaybe<Scalars['String']>;
  bidder_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bidder_ends_with?: InputMaybe<Scalars['String']>;
  bidder_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bidder_not_ends_with?: InputMaybe<Scalars['String']>;
  bidder_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txIndex?: InputMaybe<Scalars['BigInt']>;
  txIndex_not?: InputMaybe<Scalars['BigInt']>;
  txIndex_gt?: InputMaybe<Scalars['BigInt']>;
  txIndex_lt?: InputMaybe<Scalars['BigInt']>;
  txIndex_gte?: InputMaybe<Scalars['BigInt']>;
  txIndex_lte?: InputMaybe<Scalars['BigInt']>;
  txIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  auction?: InputMaybe<Scalars['String']>;
  auction_not?: InputMaybe<Scalars['String']>;
  auction_gt?: InputMaybe<Scalars['String']>;
  auction_lt?: InputMaybe<Scalars['String']>;
  auction_gte?: InputMaybe<Scalars['String']>;
  auction_lte?: InputMaybe<Scalars['String']>;
  auction_in?: InputMaybe<Array<Scalars['String']>>;
  auction_not_in?: InputMaybe<Array<Scalars['String']>>;
  auction_contains?: InputMaybe<Scalars['String']>;
  auction_contains_nocase?: InputMaybe<Scalars['String']>;
  auction_not_contains?: InputMaybe<Scalars['String']>;
  auction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  auction_starts_with?: InputMaybe<Scalars['String']>;
  auction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  auction_not_starts_with?: InputMaybe<Scalars['String']>;
  auction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  auction_ends_with?: InputMaybe<Scalars['String']>;
  auction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  auction_not_ends_with?: InputMaybe<Scalars['String']>;
  auction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Bid_orderBy =
  | 'id'
  | 'noun'
  | 'amount'
  | 'bidder'
  | 'blockNumber'
  | 'txIndex'
  | 'auction'
  | 'blockTimestamp';

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Delegate = {
  /** A Delegate is any address that has been delegated with voting tokens by a token holder, id is the blockchain address of said delegate */
  id: Scalars['ID'];
  /** Amount of votes delegated to this delegate to be used on proposal votings expressed in the smallest unit of the Nouns ERC721 Token */
  delegatedVotesRaw: Scalars['BigInt'];
  /** Amount of votes delegated to this delegate to be used on proposal votings expressed as a BigInt normalized value for the Nouns ERC721 Token */
  delegatedVotes: Scalars['BigInt'];
  tokenHoldersRepresentedAmount: Scalars['Int'];
  /** Token holders that this delegate represents */
  tokenHoldersRepresented: Array<Account>;
  /** Nouns that this delegate represents */
  nounsRepresented: Array<Noun>;
  /** Votes that a delegate has made in different proposals */
  votes: Array<Vote>;
  /** Proposals that the delegate has created */
  proposals: Array<Proposal>;
};


export type DelegatetokenHoldersRepresentedArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_filter>;
};


export type DelegatenounsRepresentedArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Noun_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Noun_filter>;
};


export type DelegatevotesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Vote_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Vote_filter>;
};


export type DelegateproposalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Proposal_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Proposal_filter>;
};

export type Delegate_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  delegatedVotesRaw?: InputMaybe<Scalars['BigInt']>;
  delegatedVotesRaw_not?: InputMaybe<Scalars['BigInt']>;
  delegatedVotesRaw_gt?: InputMaybe<Scalars['BigInt']>;
  delegatedVotesRaw_lt?: InputMaybe<Scalars['BigInt']>;
  delegatedVotesRaw_gte?: InputMaybe<Scalars['BigInt']>;
  delegatedVotesRaw_lte?: InputMaybe<Scalars['BigInt']>;
  delegatedVotesRaw_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatedVotesRaw_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatedVotes?: InputMaybe<Scalars['BigInt']>;
  delegatedVotes_not?: InputMaybe<Scalars['BigInt']>;
  delegatedVotes_gt?: InputMaybe<Scalars['BigInt']>;
  delegatedVotes_lt?: InputMaybe<Scalars['BigInt']>;
  delegatedVotes_gte?: InputMaybe<Scalars['BigInt']>;
  delegatedVotes_lte?: InputMaybe<Scalars['BigInt']>;
  delegatedVotes_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatedVotes_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenHoldersRepresentedAmount?: InputMaybe<Scalars['Int']>;
  tokenHoldersRepresentedAmount_not?: InputMaybe<Scalars['Int']>;
  tokenHoldersRepresentedAmount_gt?: InputMaybe<Scalars['Int']>;
  tokenHoldersRepresentedAmount_lt?: InputMaybe<Scalars['Int']>;
  tokenHoldersRepresentedAmount_gte?: InputMaybe<Scalars['Int']>;
  tokenHoldersRepresentedAmount_lte?: InputMaybe<Scalars['Int']>;
  tokenHoldersRepresentedAmount_in?: InputMaybe<Array<Scalars['Int']>>;
  tokenHoldersRepresentedAmount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  nounsRepresented?: InputMaybe<Array<Scalars['String']>>;
  nounsRepresented_not?: InputMaybe<Array<Scalars['String']>>;
  nounsRepresented_contains?: InputMaybe<Array<Scalars['String']>>;
  nounsRepresented_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  nounsRepresented_not_contains?: InputMaybe<Array<Scalars['String']>>;
  nounsRepresented_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Delegate_orderBy =
  | 'id'
  | 'delegatedVotesRaw'
  | 'delegatedVotes'
  | 'tokenHoldersRepresentedAmount'
  | 'tokenHoldersRepresented'
  | 'nounsRepresented'
  | 'votes'
  | 'proposals';

export type Governance = {
  /** Unique entity used to keep track of common aggregated data */
  id: Scalars['ID'];
  /** Number of proposals created */
  proposals: Scalars['BigInt'];
  /** Total number of token holders currently */
  currentTokenHolders: Scalars['BigInt'];
  /** Total number of delegates participating on the governance currently */
  currentDelegates: Scalars['BigInt'];
  /** Total number of token holders */
  totalTokenHolders: Scalars['BigInt'];
  /** Total number of delegates that held delegated votes */
  totalDelegates: Scalars['BigInt'];
  /** Total number of votes delegated expressed in the smallest unit of the Nouns ERC721 Token */
  delegatedVotesRaw: Scalars['BigInt'];
  /** Total number of votes delegated expressed as a BigInt normalized value for the Nouns ERC721 Token */
  delegatedVotes: Scalars['BigInt'];
  /** Number of proposals currently queued for execution */
  proposalsQueued: Scalars['BigInt'];
};

export type Governance_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  proposals?: InputMaybe<Scalars['BigInt']>;
  proposals_not?: InputMaybe<Scalars['BigInt']>;
  proposals_gt?: InputMaybe<Scalars['BigInt']>;
  proposals_lt?: InputMaybe<Scalars['BigInt']>;
  proposals_gte?: InputMaybe<Scalars['BigInt']>;
  proposals_lte?: InputMaybe<Scalars['BigInt']>;
  proposals_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposals_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentTokenHolders?: InputMaybe<Scalars['BigInt']>;
  currentTokenHolders_not?: InputMaybe<Scalars['BigInt']>;
  currentTokenHolders_gt?: InputMaybe<Scalars['BigInt']>;
  currentTokenHolders_lt?: InputMaybe<Scalars['BigInt']>;
  currentTokenHolders_gte?: InputMaybe<Scalars['BigInt']>;
  currentTokenHolders_lte?: InputMaybe<Scalars['BigInt']>;
  currentTokenHolders_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentTokenHolders_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentDelegates?: InputMaybe<Scalars['BigInt']>;
  currentDelegates_not?: InputMaybe<Scalars['BigInt']>;
  currentDelegates_gt?: InputMaybe<Scalars['BigInt']>;
  currentDelegates_lt?: InputMaybe<Scalars['BigInt']>;
  currentDelegates_gte?: InputMaybe<Scalars['BigInt']>;
  currentDelegates_lte?: InputMaybe<Scalars['BigInt']>;
  currentDelegates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentDelegates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokenHolders?: InputMaybe<Scalars['BigInt']>;
  totalTokenHolders_not?: InputMaybe<Scalars['BigInt']>;
  totalTokenHolders_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokenHolders_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokenHolders_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokenHolders_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokenHolders_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokenHolders_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDelegates?: InputMaybe<Scalars['BigInt']>;
  totalDelegates_not?: InputMaybe<Scalars['BigInt']>;
  totalDelegates_gt?: InputMaybe<Scalars['BigInt']>;
  totalDelegates_lt?: InputMaybe<Scalars['BigInt']>;
  totalDelegates_gte?: InputMaybe<Scalars['BigInt']>;
  totalDelegates_lte?: InputMaybe<Scalars['BigInt']>;
  totalDelegates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDelegates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatedVotesRaw?: InputMaybe<Scalars['BigInt']>;
  delegatedVotesRaw_not?: InputMaybe<Scalars['BigInt']>;
  delegatedVotesRaw_gt?: InputMaybe<Scalars['BigInt']>;
  delegatedVotesRaw_lt?: InputMaybe<Scalars['BigInt']>;
  delegatedVotesRaw_gte?: InputMaybe<Scalars['BigInt']>;
  delegatedVotesRaw_lte?: InputMaybe<Scalars['BigInt']>;
  delegatedVotesRaw_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatedVotesRaw_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatedVotes?: InputMaybe<Scalars['BigInt']>;
  delegatedVotes_not?: InputMaybe<Scalars['BigInt']>;
  delegatedVotes_gt?: InputMaybe<Scalars['BigInt']>;
  delegatedVotes_lt?: InputMaybe<Scalars['BigInt']>;
  delegatedVotes_gte?: InputMaybe<Scalars['BigInt']>;
  delegatedVotes_lte?: InputMaybe<Scalars['BigInt']>;
  delegatedVotes_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatedVotes_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposalsQueued?: InputMaybe<Scalars['BigInt']>;
  proposalsQueued_not?: InputMaybe<Scalars['BigInt']>;
  proposalsQueued_gt?: InputMaybe<Scalars['BigInt']>;
  proposalsQueued_lt?: InputMaybe<Scalars['BigInt']>;
  proposalsQueued_gte?: InputMaybe<Scalars['BigInt']>;
  proposalsQueued_lte?: InputMaybe<Scalars['BigInt']>;
  proposalsQueued_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposalsQueued_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Governance_orderBy =
  | 'id'
  | 'proposals'
  | 'currentTokenHolders'
  | 'currentDelegates'
  | 'totalTokenHolders'
  | 'totalDelegates'
  | 'delegatedVotesRaw'
  | 'delegatedVotes'
  | 'proposalsQueued';

export type Noun = {
  /** The Noun's ERC721 token id */
  id: Scalars['ID'];
  /** The seed used to determine the Noun's traits */
  seed?: Maybe<Seed>;
  /** The owner of the Noun */
  owner: Account;
  /** Historical votes for the Noun */
  votes: Array<Vote>;
};


export type NounvotesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Vote_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Vote_filter>;
};

export type Noun_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  seed?: InputMaybe<Scalars['String']>;
  seed_not?: InputMaybe<Scalars['String']>;
  seed_gt?: InputMaybe<Scalars['String']>;
  seed_lt?: InputMaybe<Scalars['String']>;
  seed_gte?: InputMaybe<Scalars['String']>;
  seed_lte?: InputMaybe<Scalars['String']>;
  seed_in?: InputMaybe<Array<Scalars['String']>>;
  seed_not_in?: InputMaybe<Array<Scalars['String']>>;
  seed_contains?: InputMaybe<Scalars['String']>;
  seed_contains_nocase?: InputMaybe<Scalars['String']>;
  seed_not_contains?: InputMaybe<Scalars['String']>;
  seed_not_contains_nocase?: InputMaybe<Scalars['String']>;
  seed_starts_with?: InputMaybe<Scalars['String']>;
  seed_starts_with_nocase?: InputMaybe<Scalars['String']>;
  seed_not_starts_with?: InputMaybe<Scalars['String']>;
  seed_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  seed_ends_with?: InputMaybe<Scalars['String']>;
  seed_ends_with_nocase?: InputMaybe<Scalars['String']>;
  seed_not_ends_with?: InputMaybe<Scalars['String']>;
  seed_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Noun_orderBy =
  | 'id'
  | 'seed'
  | 'owner'
  | 'votes';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Proposal = {
  /** Internal proposal ID, in this implementation it seems to be a autoincremental id */
  id: Scalars['ID'];
  /** Delegate that proposed the change */
  proposer: Delegate;
  /** Targets data for the change */
  targets?: Maybe<Array<Scalars['Bytes']>>;
  /** Values data for the change */
  values?: Maybe<Array<Scalars['BigInt']>>;
  /** Signature data for the change */
  signatures?: Maybe<Array<Scalars['String']>>;
  /** Call data for the change */
  calldatas?: Maybe<Array<Scalars['Bytes']>>;
  /** The proposal creation timestamp */
  createdTimestamp: Scalars['BigInt'];
  /** Block number from where the voting starts */
  startBlock: Scalars['BigInt'];
  /** Block number from where the voting ends */
  endBlock: Scalars['BigInt'];
  /** The proposal threshold at the time of proposal creation */
  proposalThreshold: Scalars['BigInt'];
  /** The required number of votes for quorum at the time of proposal creation */
  quorumVotes: Scalars['BigInt'];
  /** String description of the change */
  description: Scalars['String'];
  /** Status of the proposal */
  status: ProposalStatus;
  /** Once the proposal is queued for execution it will have an ETA of the execution */
  executionETA?: Maybe<Scalars['BigInt']>;
  /** Votes associated to this proposal */
  votes: Array<Vote>;
};


export type ProposalvotesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Vote_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Vote_filter>;
};

export type ProposalStatus =
  | 'PENDING'
  | 'ACTIVE'
  | 'CANCELLED'
  | 'VETOED'
  | 'QUEUED'
  | 'EXECUTED';

export type Proposal_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  proposer?: InputMaybe<Scalars['String']>;
  proposer_not?: InputMaybe<Scalars['String']>;
  proposer_gt?: InputMaybe<Scalars['String']>;
  proposer_lt?: InputMaybe<Scalars['String']>;
  proposer_gte?: InputMaybe<Scalars['String']>;
  proposer_lte?: InputMaybe<Scalars['String']>;
  proposer_in?: InputMaybe<Array<Scalars['String']>>;
  proposer_not_in?: InputMaybe<Array<Scalars['String']>>;
  proposer_contains?: InputMaybe<Scalars['String']>;
  proposer_contains_nocase?: InputMaybe<Scalars['String']>;
  proposer_not_contains?: InputMaybe<Scalars['String']>;
  proposer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  proposer_starts_with?: InputMaybe<Scalars['String']>;
  proposer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  proposer_not_starts_with?: InputMaybe<Scalars['String']>;
  proposer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  proposer_ends_with?: InputMaybe<Scalars['String']>;
  proposer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposer_not_ends_with?: InputMaybe<Scalars['String']>;
  proposer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  targets?: InputMaybe<Array<Scalars['Bytes']>>;
  targets_not?: InputMaybe<Array<Scalars['Bytes']>>;
  targets_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  targets_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  targets_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  targets_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  values?: InputMaybe<Array<Scalars['BigInt']>>;
  values_not?: InputMaybe<Array<Scalars['BigInt']>>;
  values_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  values_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  values_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  values_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  signatures?: InputMaybe<Array<Scalars['String']>>;
  signatures_not?: InputMaybe<Array<Scalars['String']>>;
  signatures_contains?: InputMaybe<Array<Scalars['String']>>;
  signatures_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  signatures_not_contains?: InputMaybe<Array<Scalars['String']>>;
  signatures_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  calldatas?: InputMaybe<Array<Scalars['Bytes']>>;
  calldatas_not?: InputMaybe<Array<Scalars['Bytes']>>;
  calldatas_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  calldatas_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  calldatas_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  calldatas_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  createdTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startBlock?: InputMaybe<Scalars['BigInt']>;
  startBlock_not?: InputMaybe<Scalars['BigInt']>;
  startBlock_gt?: InputMaybe<Scalars['BigInt']>;
  startBlock_lt?: InputMaybe<Scalars['BigInt']>;
  startBlock_gte?: InputMaybe<Scalars['BigInt']>;
  startBlock_lte?: InputMaybe<Scalars['BigInt']>;
  startBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endBlock?: InputMaybe<Scalars['BigInt']>;
  endBlock_not?: InputMaybe<Scalars['BigInt']>;
  endBlock_gt?: InputMaybe<Scalars['BigInt']>;
  endBlock_lt?: InputMaybe<Scalars['BigInt']>;
  endBlock_gte?: InputMaybe<Scalars['BigInt']>;
  endBlock_lte?: InputMaybe<Scalars['BigInt']>;
  endBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposalThreshold?: InputMaybe<Scalars['BigInt']>;
  proposalThreshold_not?: InputMaybe<Scalars['BigInt']>;
  proposalThreshold_gt?: InputMaybe<Scalars['BigInt']>;
  proposalThreshold_lt?: InputMaybe<Scalars['BigInt']>;
  proposalThreshold_gte?: InputMaybe<Scalars['BigInt']>;
  proposalThreshold_lte?: InputMaybe<Scalars['BigInt']>;
  proposalThreshold_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposalThreshold_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  quorumVotes?: InputMaybe<Scalars['BigInt']>;
  quorumVotes_not?: InputMaybe<Scalars['BigInt']>;
  quorumVotes_gt?: InputMaybe<Scalars['BigInt']>;
  quorumVotes_lt?: InputMaybe<Scalars['BigInt']>;
  quorumVotes_gte?: InputMaybe<Scalars['BigInt']>;
  quorumVotes_lte?: InputMaybe<Scalars['BigInt']>;
  quorumVotes_in?: InputMaybe<Array<Scalars['BigInt']>>;
  quorumVotes_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  description?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_nocase?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<ProposalStatus>;
  status_not?: InputMaybe<ProposalStatus>;
  status_in?: InputMaybe<Array<ProposalStatus>>;
  status_not_in?: InputMaybe<Array<ProposalStatus>>;
  executionETA?: InputMaybe<Scalars['BigInt']>;
  executionETA_not?: InputMaybe<Scalars['BigInt']>;
  executionETA_gt?: InputMaybe<Scalars['BigInt']>;
  executionETA_lt?: InputMaybe<Scalars['BigInt']>;
  executionETA_gte?: InputMaybe<Scalars['BigInt']>;
  executionETA_lte?: InputMaybe<Scalars['BigInt']>;
  executionETA_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executionETA_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Proposal_orderBy =
  | 'id'
  | 'proposer'
  | 'targets'
  | 'values'
  | 'signatures'
  | 'calldatas'
  | 'createdTimestamp'
  | 'startBlock'
  | 'endBlock'
  | 'proposalThreshold'
  | 'quorumVotes'
  | 'description'
  | 'status'
  | 'executionETA'
  | 'votes';

export type Query = {
  seed?: Maybe<Seed>;
  seeds: Array<Seed>;
  noun?: Maybe<Noun>;
  nouns: Array<Noun>;
  bid?: Maybe<Bid>;
  bids: Array<Bid>;
  auction?: Maybe<Auction>;
  auctions: Array<Auction>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  delegate?: Maybe<Delegate>;
  delegates: Array<Delegate>;
  proposal?: Maybe<Proposal>;
  proposals: Array<Proposal>;
  vote?: Maybe<Vote>;
  votes: Array<Vote>;
  governance?: Maybe<Governance>;
  governances: Array<Governance>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryseedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryseedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Seed_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Seed_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynounArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynounsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Noun_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Noun_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybidArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybidsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bid_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Bid_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryauctionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryauctionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Auction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Auction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydelegateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydelegatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Delegate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Delegate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryproposalArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryproposalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Proposal_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Proposal_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvoteArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvotesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Vote_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Vote_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerygovernanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerygovernancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Governance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Governance_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Seed = {
  /** The Noun's ERC721 token id */
  id: Scalars['ID'];
  /** The background index */
  background: Scalars['BigInt'];
  /** The body index */
  body: Scalars['BigInt'];
  /** The accessory index */
  accessory: Scalars['BigInt'];
  /** The head index */
  head: Scalars['BigInt'];
  /** The glasses index */
  glasses: Scalars['BigInt'];
};

export type Seed_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  background?: InputMaybe<Scalars['BigInt']>;
  background_not?: InputMaybe<Scalars['BigInt']>;
  background_gt?: InputMaybe<Scalars['BigInt']>;
  background_lt?: InputMaybe<Scalars['BigInt']>;
  background_gte?: InputMaybe<Scalars['BigInt']>;
  background_lte?: InputMaybe<Scalars['BigInt']>;
  background_in?: InputMaybe<Array<Scalars['BigInt']>>;
  background_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  body?: InputMaybe<Scalars['BigInt']>;
  body_not?: InputMaybe<Scalars['BigInt']>;
  body_gt?: InputMaybe<Scalars['BigInt']>;
  body_lt?: InputMaybe<Scalars['BigInt']>;
  body_gte?: InputMaybe<Scalars['BigInt']>;
  body_lte?: InputMaybe<Scalars['BigInt']>;
  body_in?: InputMaybe<Array<Scalars['BigInt']>>;
  body_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  accessory?: InputMaybe<Scalars['BigInt']>;
  accessory_not?: InputMaybe<Scalars['BigInt']>;
  accessory_gt?: InputMaybe<Scalars['BigInt']>;
  accessory_lt?: InputMaybe<Scalars['BigInt']>;
  accessory_gte?: InputMaybe<Scalars['BigInt']>;
  accessory_lte?: InputMaybe<Scalars['BigInt']>;
  accessory_in?: InputMaybe<Array<Scalars['BigInt']>>;
  accessory_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  head?: InputMaybe<Scalars['BigInt']>;
  head_not?: InputMaybe<Scalars['BigInt']>;
  head_gt?: InputMaybe<Scalars['BigInt']>;
  head_lt?: InputMaybe<Scalars['BigInt']>;
  head_gte?: InputMaybe<Scalars['BigInt']>;
  head_lte?: InputMaybe<Scalars['BigInt']>;
  head_in?: InputMaybe<Array<Scalars['BigInt']>>;
  head_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  glasses?: InputMaybe<Scalars['BigInt']>;
  glasses_not?: InputMaybe<Scalars['BigInt']>;
  glasses_gt?: InputMaybe<Scalars['BigInt']>;
  glasses_lt?: InputMaybe<Scalars['BigInt']>;
  glasses_gte?: InputMaybe<Scalars['BigInt']>;
  glasses_lte?: InputMaybe<Scalars['BigInt']>;
  glasses_in?: InputMaybe<Array<Scalars['BigInt']>>;
  glasses_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Seed_orderBy =
  | 'id'
  | 'background'
  | 'body'
  | 'accessory'
  | 'head'
  | 'glasses';

export type Subscription = {
  seed?: Maybe<Seed>;
  seeds: Array<Seed>;
  noun?: Maybe<Noun>;
  nouns: Array<Noun>;
  bid?: Maybe<Bid>;
  bids: Array<Bid>;
  auction?: Maybe<Auction>;
  auctions: Array<Auction>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  delegate?: Maybe<Delegate>;
  delegates: Array<Delegate>;
  proposal?: Maybe<Proposal>;
  proposals: Array<Proposal>;
  vote?: Maybe<Vote>;
  votes: Array<Vote>;
  governance?: Maybe<Governance>;
  governances: Array<Governance>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionseedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionseedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Seed_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Seed_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnounArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnounsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Noun_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Noun_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbidArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbidsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bid_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Bid_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionauctionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionauctionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Auction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Auction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondelegateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondelegatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Delegate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Delegate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionproposalArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionproposalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Proposal_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Proposal_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvoteArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvotesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Vote_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Vote_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiongovernanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiongovernancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Governance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Governance_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Vote = {
  /** Delegate ID + Proposal ID */
  id: Scalars['ID'];
  /** Whether the vote is in favour of the proposal */
  support: Scalars['Boolean'];
  /** The integer support value: against (0), for (1), or abstain (2) */
  supportDetailed: Scalars['Int'];
  /** Amount of votes in favour or against expressed in the smallest unit of the Nouns ERC721 Token */
  votesRaw: Scalars['BigInt'];
  /** Amount of votes in favour or against expressed as a BigInt normalized value for the Nouns ERC721 Token */
  votes: Scalars['BigInt'];
  /** The optional vote reason */
  reason?: Maybe<Scalars['String']>;
  /** Delegate that emitted the vote */
  voter: Delegate;
  /** The Nouns used to vote */
  nouns?: Maybe<Array<Noun>>;
  /** Proposal that is being voted on */
  proposal: Proposal;
};


export type VotenounsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Noun_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Noun_filter>;
};

export type Vote_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  support?: InputMaybe<Scalars['Boolean']>;
  support_not?: InputMaybe<Scalars['Boolean']>;
  support_in?: InputMaybe<Array<Scalars['Boolean']>>;
  support_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  supportDetailed?: InputMaybe<Scalars['Int']>;
  supportDetailed_not?: InputMaybe<Scalars['Int']>;
  supportDetailed_gt?: InputMaybe<Scalars['Int']>;
  supportDetailed_lt?: InputMaybe<Scalars['Int']>;
  supportDetailed_gte?: InputMaybe<Scalars['Int']>;
  supportDetailed_lte?: InputMaybe<Scalars['Int']>;
  supportDetailed_in?: InputMaybe<Array<Scalars['Int']>>;
  supportDetailed_not_in?: InputMaybe<Array<Scalars['Int']>>;
  votesRaw?: InputMaybe<Scalars['BigInt']>;
  votesRaw_not?: InputMaybe<Scalars['BigInt']>;
  votesRaw_gt?: InputMaybe<Scalars['BigInt']>;
  votesRaw_lt?: InputMaybe<Scalars['BigInt']>;
  votesRaw_gte?: InputMaybe<Scalars['BigInt']>;
  votesRaw_lte?: InputMaybe<Scalars['BigInt']>;
  votesRaw_in?: InputMaybe<Array<Scalars['BigInt']>>;
  votesRaw_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  votes?: InputMaybe<Scalars['BigInt']>;
  votes_not?: InputMaybe<Scalars['BigInt']>;
  votes_gt?: InputMaybe<Scalars['BigInt']>;
  votes_lt?: InputMaybe<Scalars['BigInt']>;
  votes_gte?: InputMaybe<Scalars['BigInt']>;
  votes_lte?: InputMaybe<Scalars['BigInt']>;
  votes_in?: InputMaybe<Array<Scalars['BigInt']>>;
  votes_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reason?: InputMaybe<Scalars['String']>;
  reason_not?: InputMaybe<Scalars['String']>;
  reason_gt?: InputMaybe<Scalars['String']>;
  reason_lt?: InputMaybe<Scalars['String']>;
  reason_gte?: InputMaybe<Scalars['String']>;
  reason_lte?: InputMaybe<Scalars['String']>;
  reason_in?: InputMaybe<Array<Scalars['String']>>;
  reason_not_in?: InputMaybe<Array<Scalars['String']>>;
  reason_contains?: InputMaybe<Scalars['String']>;
  reason_contains_nocase?: InputMaybe<Scalars['String']>;
  reason_not_contains?: InputMaybe<Scalars['String']>;
  reason_not_contains_nocase?: InputMaybe<Scalars['String']>;
  reason_starts_with?: InputMaybe<Scalars['String']>;
  reason_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reason_not_starts_with?: InputMaybe<Scalars['String']>;
  reason_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reason_ends_with?: InputMaybe<Scalars['String']>;
  reason_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reason_not_ends_with?: InputMaybe<Scalars['String']>;
  reason_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  voter?: InputMaybe<Scalars['String']>;
  voter_not?: InputMaybe<Scalars['String']>;
  voter_gt?: InputMaybe<Scalars['String']>;
  voter_lt?: InputMaybe<Scalars['String']>;
  voter_gte?: InputMaybe<Scalars['String']>;
  voter_lte?: InputMaybe<Scalars['String']>;
  voter_in?: InputMaybe<Array<Scalars['String']>>;
  voter_not_in?: InputMaybe<Array<Scalars['String']>>;
  voter_contains?: InputMaybe<Scalars['String']>;
  voter_contains_nocase?: InputMaybe<Scalars['String']>;
  voter_not_contains?: InputMaybe<Scalars['String']>;
  voter_not_contains_nocase?: InputMaybe<Scalars['String']>;
  voter_starts_with?: InputMaybe<Scalars['String']>;
  voter_starts_with_nocase?: InputMaybe<Scalars['String']>;
  voter_not_starts_with?: InputMaybe<Scalars['String']>;
  voter_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  voter_ends_with?: InputMaybe<Scalars['String']>;
  voter_ends_with_nocase?: InputMaybe<Scalars['String']>;
  voter_not_ends_with?: InputMaybe<Scalars['String']>;
  voter_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nouns?: InputMaybe<Array<Scalars['String']>>;
  nouns_not?: InputMaybe<Array<Scalars['String']>>;
  nouns_contains?: InputMaybe<Array<Scalars['String']>>;
  nouns_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  nouns_not_contains?: InputMaybe<Array<Scalars['String']>>;
  nouns_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  proposal?: InputMaybe<Scalars['String']>;
  proposal_not?: InputMaybe<Scalars['String']>;
  proposal_gt?: InputMaybe<Scalars['String']>;
  proposal_lt?: InputMaybe<Scalars['String']>;
  proposal_gte?: InputMaybe<Scalars['String']>;
  proposal_lte?: InputMaybe<Scalars['String']>;
  proposal_in?: InputMaybe<Array<Scalars['String']>>;
  proposal_not_in?: InputMaybe<Array<Scalars['String']>>;
  proposal_contains?: InputMaybe<Scalars['String']>;
  proposal_contains_nocase?: InputMaybe<Scalars['String']>;
  proposal_not_contains?: InputMaybe<Scalars['String']>;
  proposal_not_contains_nocase?: InputMaybe<Scalars['String']>;
  proposal_starts_with?: InputMaybe<Scalars['String']>;
  proposal_starts_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_not_starts_with?: InputMaybe<Scalars['String']>;
  proposal_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_ends_with?: InputMaybe<Scalars['String']>;
  proposal_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_not_ends_with?: InputMaybe<Scalars['String']>;
  proposal_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Vote_orderBy =
  | 'id'
  | 'support'
  | 'supportDetailed'
  | 'votesRaw'
  | 'votes'
  | 'reason'
  | 'voter'
  | 'nouns'
  | 'proposal';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Account: ResolverTypeWrapper<Account>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Account_filter: Account_filter;
  String: ResolverTypeWrapper<Scalars['String']>;
  Account_orderBy: Account_orderBy;
  Auction: ResolverTypeWrapper<Auction>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Auction_filter: Auction_filter;
  Auction_orderBy: Auction_orderBy;
  Bid: ResolverTypeWrapper<Bid>;
  Bid_filter: Bid_filter;
  Bid_orderBy: Bid_orderBy;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
  Delegate: ResolverTypeWrapper<Delegate>;
  Delegate_filter: Delegate_filter;
  Delegate_orderBy: Delegate_orderBy;
  Governance: ResolverTypeWrapper<Governance>;
  Governance_filter: Governance_filter;
  Governance_orderBy: Governance_orderBy;
  Noun: ResolverTypeWrapper<Noun>;
  Noun_filter: Noun_filter;
  Noun_orderBy: Noun_orderBy;
  OrderDirection: OrderDirection;
  Proposal: ResolverTypeWrapper<Proposal>;
  ProposalStatus: ProposalStatus;
  Proposal_filter: Proposal_filter;
  Proposal_orderBy: Proposal_orderBy;
  Query: ResolverTypeWrapper<{}>;
  Seed: ResolverTypeWrapper<Seed>;
  Seed_filter: Seed_filter;
  Seed_orderBy: Seed_orderBy;
  Subscription: ResolverTypeWrapper<{}>;
  Vote: ResolverTypeWrapper<Vote>;
  Vote_filter: Vote_filter;
  Vote_orderBy: Vote_orderBy;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Account: Account;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Account_filter: Account_filter;
  String: Scalars['String'];
  Auction: Auction;
  Boolean: Scalars['Boolean'];
  Auction_filter: Auction_filter;
  Bid: Bid;
  Bid_filter: Bid_filter;
  BigDecimal: Scalars['BigDecimal'];
  BigInt: Scalars['BigInt'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Bytes: Scalars['Bytes'];
  Delegate: Delegate;
  Delegate_filter: Delegate_filter;
  Governance: Governance;
  Governance_filter: Governance_filter;
  Noun: Noun;
  Noun_filter: Noun_filter;
  Proposal: Proposal;
  Proposal_filter: Proposal_filter;
  Query: {};
  Seed: Seed;
  Seed_filter: Seed_filter;
  Subscription: {};
  Vote: Vote;
  Vote_filter: Vote_filter;
  _Block_: _Block_;
  _Meta_: _Meta_;
}>;

export type entityDirectiveArgs = { };

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String'];
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String'];
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AccountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  delegate?: Resolver<Maybe<ResolversTypes['Delegate']>, ParentType, ContextType>;
  tokenBalanceRaw?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tokenBalance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalTokensHeldRaw?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalTokensHeld?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  nouns?: Resolver<Array<ResolversTypes['Noun']>, ParentType, ContextType, RequireFields<AccountnounsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AuctionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Auction'] = ResolversParentTypes['Auction']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  noun?: Resolver<ResolversTypes['Noun'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  startTime?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  endTime?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  bidder?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  settled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  bids?: Resolver<Array<ResolversTypes['Bid']>, ParentType, ContextType, RequireFields<AuctionbidsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BidResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Bid'] = ResolversParentTypes['Bid']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  noun?: Resolver<ResolversTypes['Noun'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  bidder?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  txIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  auction?: Resolver<ResolversTypes['Auction'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type DelegateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Delegate'] = ResolversParentTypes['Delegate']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  delegatedVotesRaw?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  delegatedVotes?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tokenHoldersRepresentedAmount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tokenHoldersRepresented?: Resolver<Array<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<DelegatetokenHoldersRepresentedArgs, 'skip' | 'first'>>;
  nounsRepresented?: Resolver<Array<ResolversTypes['Noun']>, ParentType, ContextType, RequireFields<DelegatenounsRepresentedArgs, 'skip' | 'first'>>;
  votes?: Resolver<Array<ResolversTypes['Vote']>, ParentType, ContextType, RequireFields<DelegatevotesArgs, 'skip' | 'first'>>;
  proposals?: Resolver<Array<ResolversTypes['Proposal']>, ParentType, ContextType, RequireFields<DelegateproposalsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GovernanceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Governance'] = ResolversParentTypes['Governance']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  proposals?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  currentTokenHolders?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  currentDelegates?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalTokenHolders?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalDelegates?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  delegatedVotesRaw?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  delegatedVotes?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  proposalsQueued?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NounResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Noun'] = ResolversParentTypes['Noun']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  seed?: Resolver<Maybe<ResolversTypes['Seed']>, ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  votes?: Resolver<Array<ResolversTypes['Vote']>, ParentType, ContextType, RequireFields<NounvotesArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProposalResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Proposal'] = ResolversParentTypes['Proposal']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  proposer?: Resolver<ResolversTypes['Delegate'], ParentType, ContextType>;
  targets?: Resolver<Maybe<Array<ResolversTypes['Bytes']>>, ParentType, ContextType>;
  values?: Resolver<Maybe<Array<ResolversTypes['BigInt']>>, ParentType, ContextType>;
  signatures?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  calldatas?: Resolver<Maybe<Array<ResolversTypes['Bytes']>>, ParentType, ContextType>;
  createdTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  startBlock?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  endBlock?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  proposalThreshold?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  quorumVotes?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ProposalStatus'], ParentType, ContextType>;
  executionETA?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  votes?: Resolver<Array<ResolversTypes['Vote']>, ParentType, ContextType, RequireFields<ProposalvotesArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  seed?: Resolver<Maybe<ResolversTypes['Seed']>, ParentType, ContextType, RequireFields<QueryseedArgs, 'id' | 'subgraphError'>>;
  seeds?: Resolver<Array<ResolversTypes['Seed']>, ParentType, ContextType, RequireFields<QueryseedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  noun?: Resolver<Maybe<ResolversTypes['Noun']>, ParentType, ContextType, RequireFields<QuerynounArgs, 'id' | 'subgraphError'>>;
  nouns?: Resolver<Array<ResolversTypes['Noun']>, ParentType, ContextType, RequireFields<QuerynounsArgs, 'skip' | 'first' | 'subgraphError'>>;
  bid?: Resolver<Maybe<ResolversTypes['Bid']>, ParentType, ContextType, RequireFields<QuerybidArgs, 'id' | 'subgraphError'>>;
  bids?: Resolver<Array<ResolversTypes['Bid']>, ParentType, ContextType, RequireFields<QuerybidsArgs, 'skip' | 'first' | 'subgraphError'>>;
  auction?: Resolver<Maybe<ResolversTypes['Auction']>, ParentType, ContextType, RequireFields<QueryauctionArgs, 'id' | 'subgraphError'>>;
  auctions?: Resolver<Array<ResolversTypes['Auction']>, ParentType, ContextType, RequireFields<QueryauctionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryaccountArgs, 'id' | 'subgraphError'>>;
  accounts?: Resolver<Array<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryaccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  delegate?: Resolver<Maybe<ResolversTypes['Delegate']>, ParentType, ContextType, RequireFields<QuerydelegateArgs, 'id' | 'subgraphError'>>;
  delegates?: Resolver<Array<ResolversTypes['Delegate']>, ParentType, ContextType, RequireFields<QuerydelegatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  proposal?: Resolver<Maybe<ResolversTypes['Proposal']>, ParentType, ContextType, RequireFields<QueryproposalArgs, 'id' | 'subgraphError'>>;
  proposals?: Resolver<Array<ResolversTypes['Proposal']>, ParentType, ContextType, RequireFields<QueryproposalsArgs, 'skip' | 'first' | 'subgraphError'>>;
  vote?: Resolver<Maybe<ResolversTypes['Vote']>, ParentType, ContextType, RequireFields<QueryvoteArgs, 'id' | 'subgraphError'>>;
  votes?: Resolver<Array<ResolversTypes['Vote']>, ParentType, ContextType, RequireFields<QueryvotesArgs, 'skip' | 'first' | 'subgraphError'>>;
  governance?: Resolver<Maybe<ResolversTypes['Governance']>, ParentType, ContextType, RequireFields<QuerygovernanceArgs, 'id' | 'subgraphError'>>;
  governances?: Resolver<Array<ResolversTypes['Governance']>, ParentType, ContextType, RequireFields<QuerygovernancesArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
}>;

export type SeedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Seed'] = ResolversParentTypes['Seed']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  background?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  body?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  accessory?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  head?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  glasses?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  seed?: SubscriptionResolver<Maybe<ResolversTypes['Seed']>, "seed", ParentType, ContextType, RequireFields<SubscriptionseedArgs, 'id' | 'subgraphError'>>;
  seeds?: SubscriptionResolver<Array<ResolversTypes['Seed']>, "seeds", ParentType, ContextType, RequireFields<SubscriptionseedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  noun?: SubscriptionResolver<Maybe<ResolversTypes['Noun']>, "noun", ParentType, ContextType, RequireFields<SubscriptionnounArgs, 'id' | 'subgraphError'>>;
  nouns?: SubscriptionResolver<Array<ResolversTypes['Noun']>, "nouns", ParentType, ContextType, RequireFields<SubscriptionnounsArgs, 'skip' | 'first' | 'subgraphError'>>;
  bid?: SubscriptionResolver<Maybe<ResolversTypes['Bid']>, "bid", ParentType, ContextType, RequireFields<SubscriptionbidArgs, 'id' | 'subgraphError'>>;
  bids?: SubscriptionResolver<Array<ResolversTypes['Bid']>, "bids", ParentType, ContextType, RequireFields<SubscriptionbidsArgs, 'skip' | 'first' | 'subgraphError'>>;
  auction?: SubscriptionResolver<Maybe<ResolversTypes['Auction']>, "auction", ParentType, ContextType, RequireFields<SubscriptionauctionArgs, 'id' | 'subgraphError'>>;
  auctions?: SubscriptionResolver<Array<ResolversTypes['Auction']>, "auctions", ParentType, ContextType, RequireFields<SubscriptionauctionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  account?: SubscriptionResolver<Maybe<ResolversTypes['Account']>, "account", ParentType, ContextType, RequireFields<SubscriptionaccountArgs, 'id' | 'subgraphError'>>;
  accounts?: SubscriptionResolver<Array<ResolversTypes['Account']>, "accounts", ParentType, ContextType, RequireFields<SubscriptionaccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  delegate?: SubscriptionResolver<Maybe<ResolversTypes['Delegate']>, "delegate", ParentType, ContextType, RequireFields<SubscriptiondelegateArgs, 'id' | 'subgraphError'>>;
  delegates?: SubscriptionResolver<Array<ResolversTypes['Delegate']>, "delegates", ParentType, ContextType, RequireFields<SubscriptiondelegatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  proposal?: SubscriptionResolver<Maybe<ResolversTypes['Proposal']>, "proposal", ParentType, ContextType, RequireFields<SubscriptionproposalArgs, 'id' | 'subgraphError'>>;
  proposals?: SubscriptionResolver<Array<ResolversTypes['Proposal']>, "proposals", ParentType, ContextType, RequireFields<SubscriptionproposalsArgs, 'skip' | 'first' | 'subgraphError'>>;
  vote?: SubscriptionResolver<Maybe<ResolversTypes['Vote']>, "vote", ParentType, ContextType, RequireFields<SubscriptionvoteArgs, 'id' | 'subgraphError'>>;
  votes?: SubscriptionResolver<Array<ResolversTypes['Vote']>, "votes", ParentType, ContextType, RequireFields<SubscriptionvotesArgs, 'skip' | 'first' | 'subgraphError'>>;
  governance?: SubscriptionResolver<Maybe<ResolversTypes['Governance']>, "governance", ParentType, ContextType, RequireFields<SubscriptiongovernanceArgs, 'id' | 'subgraphError'>>;
  governances?: SubscriptionResolver<Array<ResolversTypes['Governance']>, "governances", ParentType, ContextType, RequireFields<SubscriptiongovernancesArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
}>;

export type VoteResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Vote'] = ResolversParentTypes['Vote']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  support?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  supportDetailed?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  votesRaw?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  votes?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  reason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  voter?: Resolver<ResolversTypes['Delegate'], ParentType, ContextType>;
  nouns?: Resolver<Maybe<Array<ResolversTypes['Noun']>>, ParentType, ContextType, RequireFields<VotenounsArgs, 'skip' | 'first'>>;
  proposal?: Resolver<ResolversTypes['Proposal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Account?: AccountResolvers<ContextType>;
  Auction?: AuctionResolvers<ContextType>;
  Bid?: BidResolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  Delegate?: DelegateResolvers<ContextType>;
  Governance?: GovernanceResolvers<ContextType>;
  Noun?: NounResolvers<ContextType>;
  Proposal?: ProposalResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Seed?: SeedResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Vote?: VoteResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

import { MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';

import { InContextSdkMethod } from '@graphql-mesh/types';


    export namespace LilnounsTypes {
      export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type Account = {
  /** An Account is any address that holds any amount of Nouns, the id used is the blockchain address. */
  id: Scalars['ID'];
  /** Delegate address of the token holder which will participate in votings. Delegates don't need to hold any tokens and can even be the token holder itself. */
  delegate?: Maybe<Delegate>;
  /** Noun balance of this address expressed in the smallest unit of the Nouns ERC721 Token */
  tokenBalanceRaw: Scalars['BigInt'];
  /** Noun balance of this address expressed as a BigInt normalized value for the Nouns ERC721 Token */
  tokenBalance: Scalars['BigInt'];
  /** Total amount of Nouns ever held by this address expressed in the smallest unit of the Nouns ERC721 Token */
  totalTokensHeldRaw: Scalars['BigInt'];
  /** Total amount of Nouns ever held by this address expressed as a BigInt normalized value for the Nouns ERC721 Token */
  totalTokensHeld: Scalars['BigInt'];
  /** The Nouns owned by this account */
  nouns: Array<Noun>;
};


export type AccountnounsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Noun_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Noun_filter>;
};

export type Account_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  delegate?: InputMaybe<Scalars['String']>;
  delegate_not?: InputMaybe<Scalars['String']>;
  delegate_gt?: InputMaybe<Scalars['String']>;
  delegate_lt?: InputMaybe<Scalars['String']>;
  delegate_gte?: InputMaybe<Scalars['String']>;
  delegate_lte?: InputMaybe<Scalars['String']>;
  delegate_in?: InputMaybe<Array<Scalars['String']>>;
  delegate_not_in?: InputMaybe<Array<Scalars['String']>>;
  delegate_contains?: InputMaybe<Scalars['String']>;
  delegate_contains_nocase?: InputMaybe<Scalars['String']>;
  delegate_not_contains?: InputMaybe<Scalars['String']>;
  delegate_not_contains_nocase?: InputMaybe<Scalars['String']>;
  delegate_starts_with?: InputMaybe<Scalars['String']>;
  delegate_starts_with_nocase?: InputMaybe<Scalars['String']>;
  delegate_not_starts_with?: InputMaybe<Scalars['String']>;
  delegate_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  delegate_ends_with?: InputMaybe<Scalars['String']>;
  delegate_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegate_not_ends_with?: InputMaybe<Scalars['String']>;
  delegate_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenBalanceRaw?: InputMaybe<Scalars['BigInt']>;
  tokenBalanceRaw_not?: InputMaybe<Scalars['BigInt']>;
  tokenBalanceRaw_gt?: InputMaybe<Scalars['BigInt']>;
  tokenBalanceRaw_lt?: InputMaybe<Scalars['BigInt']>;
  tokenBalanceRaw_gte?: InputMaybe<Scalars['BigInt']>;
  tokenBalanceRaw_lte?: InputMaybe<Scalars['BigInt']>;
  tokenBalanceRaw_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenBalanceRaw_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenBalance?: InputMaybe<Scalars['BigInt']>;
  tokenBalance_not?: InputMaybe<Scalars['BigInt']>;
  tokenBalance_gt?: InputMaybe<Scalars['BigInt']>;
  tokenBalance_lt?: InputMaybe<Scalars['BigInt']>;
  tokenBalance_gte?: InputMaybe<Scalars['BigInt']>;
  tokenBalance_lte?: InputMaybe<Scalars['BigInt']>;
  tokenBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensHeldRaw?: InputMaybe<Scalars['BigInt']>;
  totalTokensHeldRaw_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensHeldRaw_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensHeldRaw_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensHeldRaw_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensHeldRaw_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensHeldRaw_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensHeldRaw_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensHeld?: InputMaybe<Scalars['BigInt']>;
  totalTokensHeld_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensHeld_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensHeld_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensHeld_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensHeld_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensHeld_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensHeld_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nouns?: InputMaybe<Array<Scalars['String']>>;
  nouns_not?: InputMaybe<Array<Scalars['String']>>;
  nouns_contains?: InputMaybe<Array<Scalars['String']>>;
  nouns_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  nouns_not_contains?: InputMaybe<Array<Scalars['String']>>;
  nouns_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Account_orderBy =
  | 'id'
  | 'delegate'
  | 'tokenBalanceRaw'
  | 'tokenBalance'
  | 'totalTokensHeldRaw'
  | 'totalTokensHeld'
  | 'nouns';

export type Auction = {
  /** The Noun's ERC721 token id */
  id: Scalars['ID'];
  /** The Noun */
  noun: Noun;
  /** The current highest bid amount */
  amount: Scalars['BigInt'];
  /** The time that the auction started */
  startTime: Scalars['BigInt'];
  /** The time that the auction is scheduled to end */
  endTime: Scalars['BigInt'];
  /** The account with the current highest bid */
  bidder?: Maybe<Account>;
  /** Whether or not the auction has been settled */
  settled: Scalars['Boolean'];
  /** The auction bids */
  bids: Array<Bid>;
};


export type AuctionbidsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bid_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Bid_filter>;
};

export type Auction_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  noun?: InputMaybe<Scalars['String']>;
  noun_not?: InputMaybe<Scalars['String']>;
  noun_gt?: InputMaybe<Scalars['String']>;
  noun_lt?: InputMaybe<Scalars['String']>;
  noun_gte?: InputMaybe<Scalars['String']>;
  noun_lte?: InputMaybe<Scalars['String']>;
  noun_in?: InputMaybe<Array<Scalars['String']>>;
  noun_not_in?: InputMaybe<Array<Scalars['String']>>;
  noun_contains?: InputMaybe<Scalars['String']>;
  noun_contains_nocase?: InputMaybe<Scalars['String']>;
  noun_not_contains?: InputMaybe<Scalars['String']>;
  noun_not_contains_nocase?: InputMaybe<Scalars['String']>;
  noun_starts_with?: InputMaybe<Scalars['String']>;
  noun_starts_with_nocase?: InputMaybe<Scalars['String']>;
  noun_not_starts_with?: InputMaybe<Scalars['String']>;
  noun_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  noun_ends_with?: InputMaybe<Scalars['String']>;
  noun_ends_with_nocase?: InputMaybe<Scalars['String']>;
  noun_not_ends_with?: InputMaybe<Scalars['String']>;
  noun_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startTime?: InputMaybe<Scalars['BigInt']>;
  startTime_not?: InputMaybe<Scalars['BigInt']>;
  startTime_gt?: InputMaybe<Scalars['BigInt']>;
  startTime_lt?: InputMaybe<Scalars['BigInt']>;
  startTime_gte?: InputMaybe<Scalars['BigInt']>;
  startTime_lte?: InputMaybe<Scalars['BigInt']>;
  startTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endTime?: InputMaybe<Scalars['BigInt']>;
  endTime_not?: InputMaybe<Scalars['BigInt']>;
  endTime_gt?: InputMaybe<Scalars['BigInt']>;
  endTime_lt?: InputMaybe<Scalars['BigInt']>;
  endTime_gte?: InputMaybe<Scalars['BigInt']>;
  endTime_lte?: InputMaybe<Scalars['BigInt']>;
  endTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bidder?: InputMaybe<Scalars['String']>;
  bidder_not?: InputMaybe<Scalars['String']>;
  bidder_gt?: InputMaybe<Scalars['String']>;
  bidder_lt?: InputMaybe<Scalars['String']>;
  bidder_gte?: InputMaybe<Scalars['String']>;
  bidder_lte?: InputMaybe<Scalars['String']>;
  bidder_in?: InputMaybe<Array<Scalars['String']>>;
  bidder_not_in?: InputMaybe<Array<Scalars['String']>>;
  bidder_contains?: InputMaybe<Scalars['String']>;
  bidder_contains_nocase?: InputMaybe<Scalars['String']>;
  bidder_not_contains?: InputMaybe<Scalars['String']>;
  bidder_not_contains_nocase?: InputMaybe<Scalars['String']>;
  bidder_starts_with?: InputMaybe<Scalars['String']>;
  bidder_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bidder_not_starts_with?: InputMaybe<Scalars['String']>;
  bidder_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bidder_ends_with?: InputMaybe<Scalars['String']>;
  bidder_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bidder_not_ends_with?: InputMaybe<Scalars['String']>;
  bidder_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  settled?: InputMaybe<Scalars['Boolean']>;
  settled_not?: InputMaybe<Scalars['Boolean']>;
  settled_in?: InputMaybe<Array<Scalars['Boolean']>>;
  settled_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Auction_orderBy =
  | 'id'
  | 'noun'
  | 'amount'
  | 'startTime'
  | 'endTime'
  | 'bidder'
  | 'settled'
  | 'bids';

export type Bid = {
  /** Bid transaction hash */
  id: Scalars['ID'];
  /** The Noun being bid on */
  noun: Noun;
  /** Bid amount */
  amount: Scalars['BigInt'];
  /** Bidder account */
  bidder?: Maybe<Account>;
  /** Block number of the bid */
  blockNumber: Scalars['BigInt'];
  /** Index of transaction within block */
  txIndex: Scalars['BigInt'];
  /** The auction being bid in */
  auction: Auction;
  /** The timestamp of the block the bid is in */
  blockTimestamp: Scalars['BigInt'];
};

export type Bid_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  noun?: InputMaybe<Scalars['String']>;
  noun_not?: InputMaybe<Scalars['String']>;
  noun_gt?: InputMaybe<Scalars['String']>;
  noun_lt?: InputMaybe<Scalars['String']>;
  noun_gte?: InputMaybe<Scalars['String']>;
  noun_lte?: InputMaybe<Scalars['String']>;
  noun_in?: InputMaybe<Array<Scalars['String']>>;
  noun_not_in?: InputMaybe<Array<Scalars['String']>>;
  noun_contains?: InputMaybe<Scalars['String']>;
  noun_contains_nocase?: InputMaybe<Scalars['String']>;
  noun_not_contains?: InputMaybe<Scalars['String']>;
  noun_not_contains_nocase?: InputMaybe<Scalars['String']>;
  noun_starts_with?: InputMaybe<Scalars['String']>;
  noun_starts_with_nocase?: InputMaybe<Scalars['String']>;
  noun_not_starts_with?: InputMaybe<Scalars['String']>;
  noun_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  noun_ends_with?: InputMaybe<Scalars['String']>;
  noun_ends_with_nocase?: InputMaybe<Scalars['String']>;
  noun_not_ends_with?: InputMaybe<Scalars['String']>;
  noun_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bidder?: InputMaybe<Scalars['String']>;
  bidder_not?: InputMaybe<Scalars['String']>;
  bidder_gt?: InputMaybe<Scalars['String']>;
  bidder_lt?: InputMaybe<Scalars['String']>;
  bidder_gte?: InputMaybe<Scalars['String']>;
  bidder_lte?: InputMaybe<Scalars['String']>;
  bidder_in?: InputMaybe<Array<Scalars['String']>>;
  bidder_not_in?: InputMaybe<Array<Scalars['String']>>;
  bidder_contains?: InputMaybe<Scalars['String']>;
  bidder_contains_nocase?: InputMaybe<Scalars['String']>;
  bidder_not_contains?: InputMaybe<Scalars['String']>;
  bidder_not_contains_nocase?: InputMaybe<Scalars['String']>;
  bidder_starts_with?: InputMaybe<Scalars['String']>;
  bidder_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bidder_not_starts_with?: InputMaybe<Scalars['String']>;
  bidder_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bidder_ends_with?: InputMaybe<Scalars['String']>;
  bidder_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bidder_not_ends_with?: InputMaybe<Scalars['String']>;
  bidder_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txIndex?: InputMaybe<Scalars['BigInt']>;
  txIndex_not?: InputMaybe<Scalars['BigInt']>;
  txIndex_gt?: InputMaybe<Scalars['BigInt']>;
  txIndex_lt?: InputMaybe<Scalars['BigInt']>;
  txIndex_gte?: InputMaybe<Scalars['BigInt']>;
  txIndex_lte?: InputMaybe<Scalars['BigInt']>;
  txIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  auction?: InputMaybe<Scalars['String']>;
  auction_not?: InputMaybe<Scalars['String']>;
  auction_gt?: InputMaybe<Scalars['String']>;
  auction_lt?: InputMaybe<Scalars['String']>;
  auction_gte?: InputMaybe<Scalars['String']>;
  auction_lte?: InputMaybe<Scalars['String']>;
  auction_in?: InputMaybe<Array<Scalars['String']>>;
  auction_not_in?: InputMaybe<Array<Scalars['String']>>;
  auction_contains?: InputMaybe<Scalars['String']>;
  auction_contains_nocase?: InputMaybe<Scalars['String']>;
  auction_not_contains?: InputMaybe<Scalars['String']>;
  auction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  auction_starts_with?: InputMaybe<Scalars['String']>;
  auction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  auction_not_starts_with?: InputMaybe<Scalars['String']>;
  auction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  auction_ends_with?: InputMaybe<Scalars['String']>;
  auction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  auction_not_ends_with?: InputMaybe<Scalars['String']>;
  auction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Bid_orderBy =
  | 'id'
  | 'noun'
  | 'amount'
  | 'bidder'
  | 'blockNumber'
  | 'txIndex'
  | 'auction'
  | 'blockTimestamp';

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Delegate = {
  /** A Delegate is any address that has been delegated with voting tokens by a token holder, id is the blockchain address of said delegate */
  id: Scalars['ID'];
  /** Amount of votes delegated to this delegate to be used on proposal votings expressed in the smallest unit of the Nouns ERC721 Token */
  delegatedVotesRaw: Scalars['BigInt'];
  /** Amount of votes delegated to this delegate to be used on proposal votings expressed as a BigInt normalized value for the Nouns ERC721 Token */
  delegatedVotes: Scalars['BigInt'];
  tokenHoldersRepresentedAmount: Scalars['Int'];
  /** Token holders that this delegate represents */
  tokenHoldersRepresented: Array<Account>;
  /** Nouns that this delegate represents */
  nounsRepresented: Array<Noun>;
  /** Votes that a delegate has made in different proposals */
  votes: Array<Vote>;
  /** Proposals that the delegate has created */
  proposals: Array<Proposal>;
};


export type DelegatetokenHoldersRepresentedArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_filter>;
};


export type DelegatenounsRepresentedArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Noun_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Noun_filter>;
};


export type DelegatevotesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Vote_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Vote_filter>;
};


export type DelegateproposalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Proposal_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Proposal_filter>;
};

export type Delegate_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  delegatedVotesRaw?: InputMaybe<Scalars['BigInt']>;
  delegatedVotesRaw_not?: InputMaybe<Scalars['BigInt']>;
  delegatedVotesRaw_gt?: InputMaybe<Scalars['BigInt']>;
  delegatedVotesRaw_lt?: InputMaybe<Scalars['BigInt']>;
  delegatedVotesRaw_gte?: InputMaybe<Scalars['BigInt']>;
  delegatedVotesRaw_lte?: InputMaybe<Scalars['BigInt']>;
  delegatedVotesRaw_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatedVotesRaw_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatedVotes?: InputMaybe<Scalars['BigInt']>;
  delegatedVotes_not?: InputMaybe<Scalars['BigInt']>;
  delegatedVotes_gt?: InputMaybe<Scalars['BigInt']>;
  delegatedVotes_lt?: InputMaybe<Scalars['BigInt']>;
  delegatedVotes_gte?: InputMaybe<Scalars['BigInt']>;
  delegatedVotes_lte?: InputMaybe<Scalars['BigInt']>;
  delegatedVotes_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatedVotes_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenHoldersRepresentedAmount?: InputMaybe<Scalars['Int']>;
  tokenHoldersRepresentedAmount_not?: InputMaybe<Scalars['Int']>;
  tokenHoldersRepresentedAmount_gt?: InputMaybe<Scalars['Int']>;
  tokenHoldersRepresentedAmount_lt?: InputMaybe<Scalars['Int']>;
  tokenHoldersRepresentedAmount_gte?: InputMaybe<Scalars['Int']>;
  tokenHoldersRepresentedAmount_lte?: InputMaybe<Scalars['Int']>;
  tokenHoldersRepresentedAmount_in?: InputMaybe<Array<Scalars['Int']>>;
  tokenHoldersRepresentedAmount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  nounsRepresented?: InputMaybe<Array<Scalars['String']>>;
  nounsRepresented_not?: InputMaybe<Array<Scalars['String']>>;
  nounsRepresented_contains?: InputMaybe<Array<Scalars['String']>>;
  nounsRepresented_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  nounsRepresented_not_contains?: InputMaybe<Array<Scalars['String']>>;
  nounsRepresented_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Delegate_orderBy =
  | 'id'
  | 'delegatedVotesRaw'
  | 'delegatedVotes'
  | 'tokenHoldersRepresentedAmount'
  | 'tokenHoldersRepresented'
  | 'nounsRepresented'
  | 'votes'
  | 'proposals';

export type Governance = {
  /** Unique entity used to keep track of common aggregated data */
  id: Scalars['ID'];
  /** Number of proposals created */
  proposals: Scalars['BigInt'];
  /** Total number of token holders currently */
  currentTokenHolders: Scalars['BigInt'];
  /** Total number of delegates participating on the governance currently */
  currentDelegates: Scalars['BigInt'];
  /** Total number of token holders */
  totalTokenHolders: Scalars['BigInt'];
  /** Total number of delegates that held delegated votes */
  totalDelegates: Scalars['BigInt'];
  /** Total number of votes delegated expressed in the smallest unit of the Nouns ERC721 Token */
  delegatedVotesRaw: Scalars['BigInt'];
  /** Total number of votes delegated expressed as a BigInt normalized value for the Nouns ERC721 Token */
  delegatedVotes: Scalars['BigInt'];
  /** Number of proposals currently queued for execution */
  proposalsQueued: Scalars['BigInt'];
};

export type Governance_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  proposals?: InputMaybe<Scalars['BigInt']>;
  proposals_not?: InputMaybe<Scalars['BigInt']>;
  proposals_gt?: InputMaybe<Scalars['BigInt']>;
  proposals_lt?: InputMaybe<Scalars['BigInt']>;
  proposals_gte?: InputMaybe<Scalars['BigInt']>;
  proposals_lte?: InputMaybe<Scalars['BigInt']>;
  proposals_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposals_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentTokenHolders?: InputMaybe<Scalars['BigInt']>;
  currentTokenHolders_not?: InputMaybe<Scalars['BigInt']>;
  currentTokenHolders_gt?: InputMaybe<Scalars['BigInt']>;
  currentTokenHolders_lt?: InputMaybe<Scalars['BigInt']>;
  currentTokenHolders_gte?: InputMaybe<Scalars['BigInt']>;
  currentTokenHolders_lte?: InputMaybe<Scalars['BigInt']>;
  currentTokenHolders_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentTokenHolders_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentDelegates?: InputMaybe<Scalars['BigInt']>;
  currentDelegates_not?: InputMaybe<Scalars['BigInt']>;
  currentDelegates_gt?: InputMaybe<Scalars['BigInt']>;
  currentDelegates_lt?: InputMaybe<Scalars['BigInt']>;
  currentDelegates_gte?: InputMaybe<Scalars['BigInt']>;
  currentDelegates_lte?: InputMaybe<Scalars['BigInt']>;
  currentDelegates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentDelegates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokenHolders?: InputMaybe<Scalars['BigInt']>;
  totalTokenHolders_not?: InputMaybe<Scalars['BigInt']>;
  totalTokenHolders_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokenHolders_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokenHolders_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokenHolders_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokenHolders_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokenHolders_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDelegates?: InputMaybe<Scalars['BigInt']>;
  totalDelegates_not?: InputMaybe<Scalars['BigInt']>;
  totalDelegates_gt?: InputMaybe<Scalars['BigInt']>;
  totalDelegates_lt?: InputMaybe<Scalars['BigInt']>;
  totalDelegates_gte?: InputMaybe<Scalars['BigInt']>;
  totalDelegates_lte?: InputMaybe<Scalars['BigInt']>;
  totalDelegates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDelegates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatedVotesRaw?: InputMaybe<Scalars['BigInt']>;
  delegatedVotesRaw_not?: InputMaybe<Scalars['BigInt']>;
  delegatedVotesRaw_gt?: InputMaybe<Scalars['BigInt']>;
  delegatedVotesRaw_lt?: InputMaybe<Scalars['BigInt']>;
  delegatedVotesRaw_gte?: InputMaybe<Scalars['BigInt']>;
  delegatedVotesRaw_lte?: InputMaybe<Scalars['BigInt']>;
  delegatedVotesRaw_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatedVotesRaw_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatedVotes?: InputMaybe<Scalars['BigInt']>;
  delegatedVotes_not?: InputMaybe<Scalars['BigInt']>;
  delegatedVotes_gt?: InputMaybe<Scalars['BigInt']>;
  delegatedVotes_lt?: InputMaybe<Scalars['BigInt']>;
  delegatedVotes_gte?: InputMaybe<Scalars['BigInt']>;
  delegatedVotes_lte?: InputMaybe<Scalars['BigInt']>;
  delegatedVotes_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatedVotes_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposalsQueued?: InputMaybe<Scalars['BigInt']>;
  proposalsQueued_not?: InputMaybe<Scalars['BigInt']>;
  proposalsQueued_gt?: InputMaybe<Scalars['BigInt']>;
  proposalsQueued_lt?: InputMaybe<Scalars['BigInt']>;
  proposalsQueued_gte?: InputMaybe<Scalars['BigInt']>;
  proposalsQueued_lte?: InputMaybe<Scalars['BigInt']>;
  proposalsQueued_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposalsQueued_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Governance_orderBy =
  | 'id'
  | 'proposals'
  | 'currentTokenHolders'
  | 'currentDelegates'
  | 'totalTokenHolders'
  | 'totalDelegates'
  | 'delegatedVotesRaw'
  | 'delegatedVotes'
  | 'proposalsQueued';

export type Noun = {
  /** The Noun's ERC721 token id */
  id: Scalars['ID'];
  /** The seed used to determine the Noun's traits */
  seed?: Maybe<Seed>;
  /** The owner of the Noun */
  owner: Account;
  /** Historical votes for the Noun */
  votes: Array<Vote>;
};


export type NounvotesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Vote_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Vote_filter>;
};

export type Noun_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  seed?: InputMaybe<Scalars['String']>;
  seed_not?: InputMaybe<Scalars['String']>;
  seed_gt?: InputMaybe<Scalars['String']>;
  seed_lt?: InputMaybe<Scalars['String']>;
  seed_gte?: InputMaybe<Scalars['String']>;
  seed_lte?: InputMaybe<Scalars['String']>;
  seed_in?: InputMaybe<Array<Scalars['String']>>;
  seed_not_in?: InputMaybe<Array<Scalars['String']>>;
  seed_contains?: InputMaybe<Scalars['String']>;
  seed_contains_nocase?: InputMaybe<Scalars['String']>;
  seed_not_contains?: InputMaybe<Scalars['String']>;
  seed_not_contains_nocase?: InputMaybe<Scalars['String']>;
  seed_starts_with?: InputMaybe<Scalars['String']>;
  seed_starts_with_nocase?: InputMaybe<Scalars['String']>;
  seed_not_starts_with?: InputMaybe<Scalars['String']>;
  seed_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  seed_ends_with?: InputMaybe<Scalars['String']>;
  seed_ends_with_nocase?: InputMaybe<Scalars['String']>;
  seed_not_ends_with?: InputMaybe<Scalars['String']>;
  seed_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Noun_orderBy =
  | 'id'
  | 'seed'
  | 'owner'
  | 'votes';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Proposal = {
  /** Internal proposal ID, in this implementation it seems to be a autoincremental id */
  id: Scalars['ID'];
  /** Delegate that proposed the change */
  proposer: Delegate;
  /** Targets data for the change */
  targets?: Maybe<Array<Scalars['Bytes']>>;
  /** Values data for the change */
  values?: Maybe<Array<Scalars['BigInt']>>;
  /** Signature data for the change */
  signatures?: Maybe<Array<Scalars['String']>>;
  /** Call data for the change */
  calldatas?: Maybe<Array<Scalars['Bytes']>>;
  /** The proposal creation timestamp */
  createdTimestamp: Scalars['BigInt'];
  /** Block number from where the voting starts */
  startBlock: Scalars['BigInt'];
  /** Block number from where the voting ends */
  endBlock: Scalars['BigInt'];
  /** The proposal threshold at the time of proposal creation */
  proposalThreshold: Scalars['BigInt'];
  /** The required number of votes for quorum at the time of proposal creation */
  quorumVotes: Scalars['BigInt'];
  /** String description of the change */
  description: Scalars['String'];
  /** Status of the proposal */
  status: ProposalStatus;
  /** Once the proposal is queued for execution it will have an ETA of the execution */
  executionETA?: Maybe<Scalars['BigInt']>;
  /** Votes associated to this proposal */
  votes: Array<Vote>;
};


export type ProposalvotesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Vote_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Vote_filter>;
};

export type ProposalStatus =
  | 'PENDING'
  | 'ACTIVE'
  | 'CANCELLED'
  | 'VETOED'
  | 'QUEUED'
  | 'EXECUTED';

export type Proposal_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  proposer?: InputMaybe<Scalars['String']>;
  proposer_not?: InputMaybe<Scalars['String']>;
  proposer_gt?: InputMaybe<Scalars['String']>;
  proposer_lt?: InputMaybe<Scalars['String']>;
  proposer_gte?: InputMaybe<Scalars['String']>;
  proposer_lte?: InputMaybe<Scalars['String']>;
  proposer_in?: InputMaybe<Array<Scalars['String']>>;
  proposer_not_in?: InputMaybe<Array<Scalars['String']>>;
  proposer_contains?: InputMaybe<Scalars['String']>;
  proposer_contains_nocase?: InputMaybe<Scalars['String']>;
  proposer_not_contains?: InputMaybe<Scalars['String']>;
  proposer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  proposer_starts_with?: InputMaybe<Scalars['String']>;
  proposer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  proposer_not_starts_with?: InputMaybe<Scalars['String']>;
  proposer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  proposer_ends_with?: InputMaybe<Scalars['String']>;
  proposer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposer_not_ends_with?: InputMaybe<Scalars['String']>;
  proposer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  targets?: InputMaybe<Array<Scalars['Bytes']>>;
  targets_not?: InputMaybe<Array<Scalars['Bytes']>>;
  targets_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  targets_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  targets_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  targets_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  values?: InputMaybe<Array<Scalars['BigInt']>>;
  values_not?: InputMaybe<Array<Scalars['BigInt']>>;
  values_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  values_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  values_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  values_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  signatures?: InputMaybe<Array<Scalars['String']>>;
  signatures_not?: InputMaybe<Array<Scalars['String']>>;
  signatures_contains?: InputMaybe<Array<Scalars['String']>>;
  signatures_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  signatures_not_contains?: InputMaybe<Array<Scalars['String']>>;
  signatures_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  calldatas?: InputMaybe<Array<Scalars['Bytes']>>;
  calldatas_not?: InputMaybe<Array<Scalars['Bytes']>>;
  calldatas_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  calldatas_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  calldatas_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  calldatas_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  createdTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startBlock?: InputMaybe<Scalars['BigInt']>;
  startBlock_not?: InputMaybe<Scalars['BigInt']>;
  startBlock_gt?: InputMaybe<Scalars['BigInt']>;
  startBlock_lt?: InputMaybe<Scalars['BigInt']>;
  startBlock_gte?: InputMaybe<Scalars['BigInt']>;
  startBlock_lte?: InputMaybe<Scalars['BigInt']>;
  startBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endBlock?: InputMaybe<Scalars['BigInt']>;
  endBlock_not?: InputMaybe<Scalars['BigInt']>;
  endBlock_gt?: InputMaybe<Scalars['BigInt']>;
  endBlock_lt?: InputMaybe<Scalars['BigInt']>;
  endBlock_gte?: InputMaybe<Scalars['BigInt']>;
  endBlock_lte?: InputMaybe<Scalars['BigInt']>;
  endBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposalThreshold?: InputMaybe<Scalars['BigInt']>;
  proposalThreshold_not?: InputMaybe<Scalars['BigInt']>;
  proposalThreshold_gt?: InputMaybe<Scalars['BigInt']>;
  proposalThreshold_lt?: InputMaybe<Scalars['BigInt']>;
  proposalThreshold_gte?: InputMaybe<Scalars['BigInt']>;
  proposalThreshold_lte?: InputMaybe<Scalars['BigInt']>;
  proposalThreshold_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposalThreshold_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  quorumVotes?: InputMaybe<Scalars['BigInt']>;
  quorumVotes_not?: InputMaybe<Scalars['BigInt']>;
  quorumVotes_gt?: InputMaybe<Scalars['BigInt']>;
  quorumVotes_lt?: InputMaybe<Scalars['BigInt']>;
  quorumVotes_gte?: InputMaybe<Scalars['BigInt']>;
  quorumVotes_lte?: InputMaybe<Scalars['BigInt']>;
  quorumVotes_in?: InputMaybe<Array<Scalars['BigInt']>>;
  quorumVotes_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  description?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_nocase?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<ProposalStatus>;
  status_not?: InputMaybe<ProposalStatus>;
  status_in?: InputMaybe<Array<ProposalStatus>>;
  status_not_in?: InputMaybe<Array<ProposalStatus>>;
  executionETA?: InputMaybe<Scalars['BigInt']>;
  executionETA_not?: InputMaybe<Scalars['BigInt']>;
  executionETA_gt?: InputMaybe<Scalars['BigInt']>;
  executionETA_lt?: InputMaybe<Scalars['BigInt']>;
  executionETA_gte?: InputMaybe<Scalars['BigInt']>;
  executionETA_lte?: InputMaybe<Scalars['BigInt']>;
  executionETA_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executionETA_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Proposal_orderBy =
  | 'id'
  | 'proposer'
  | 'targets'
  | 'values'
  | 'signatures'
  | 'calldatas'
  | 'createdTimestamp'
  | 'startBlock'
  | 'endBlock'
  | 'proposalThreshold'
  | 'quorumVotes'
  | 'description'
  | 'status'
  | 'executionETA'
  | 'votes';

export type Query = {
  seed?: Maybe<Seed>;
  seeds: Array<Seed>;
  noun?: Maybe<Noun>;
  nouns: Array<Noun>;
  bid?: Maybe<Bid>;
  bids: Array<Bid>;
  auction?: Maybe<Auction>;
  auctions: Array<Auction>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  delegate?: Maybe<Delegate>;
  delegates: Array<Delegate>;
  proposal?: Maybe<Proposal>;
  proposals: Array<Proposal>;
  vote?: Maybe<Vote>;
  votes: Array<Vote>;
  governance?: Maybe<Governance>;
  governances: Array<Governance>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryseedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryseedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Seed_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Seed_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynounArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynounsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Noun_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Noun_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybidArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybidsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bid_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Bid_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryauctionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryauctionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Auction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Auction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydelegateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydelegatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Delegate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Delegate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryproposalArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryproposalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Proposal_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Proposal_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvoteArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvotesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Vote_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Vote_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerygovernanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerygovernancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Governance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Governance_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Seed = {
  /** The Noun's ERC721 token id */
  id: Scalars['ID'];
  /** The background index */
  background: Scalars['BigInt'];
  /** The body index */
  body: Scalars['BigInt'];
  /** The accessory index */
  accessory: Scalars['BigInt'];
  /** The head index */
  head: Scalars['BigInt'];
  /** The glasses index */
  glasses: Scalars['BigInt'];
};

export type Seed_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  background?: InputMaybe<Scalars['BigInt']>;
  background_not?: InputMaybe<Scalars['BigInt']>;
  background_gt?: InputMaybe<Scalars['BigInt']>;
  background_lt?: InputMaybe<Scalars['BigInt']>;
  background_gte?: InputMaybe<Scalars['BigInt']>;
  background_lte?: InputMaybe<Scalars['BigInt']>;
  background_in?: InputMaybe<Array<Scalars['BigInt']>>;
  background_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  body?: InputMaybe<Scalars['BigInt']>;
  body_not?: InputMaybe<Scalars['BigInt']>;
  body_gt?: InputMaybe<Scalars['BigInt']>;
  body_lt?: InputMaybe<Scalars['BigInt']>;
  body_gte?: InputMaybe<Scalars['BigInt']>;
  body_lte?: InputMaybe<Scalars['BigInt']>;
  body_in?: InputMaybe<Array<Scalars['BigInt']>>;
  body_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  accessory?: InputMaybe<Scalars['BigInt']>;
  accessory_not?: InputMaybe<Scalars['BigInt']>;
  accessory_gt?: InputMaybe<Scalars['BigInt']>;
  accessory_lt?: InputMaybe<Scalars['BigInt']>;
  accessory_gte?: InputMaybe<Scalars['BigInt']>;
  accessory_lte?: InputMaybe<Scalars['BigInt']>;
  accessory_in?: InputMaybe<Array<Scalars['BigInt']>>;
  accessory_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  head?: InputMaybe<Scalars['BigInt']>;
  head_not?: InputMaybe<Scalars['BigInt']>;
  head_gt?: InputMaybe<Scalars['BigInt']>;
  head_lt?: InputMaybe<Scalars['BigInt']>;
  head_gte?: InputMaybe<Scalars['BigInt']>;
  head_lte?: InputMaybe<Scalars['BigInt']>;
  head_in?: InputMaybe<Array<Scalars['BigInt']>>;
  head_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  glasses?: InputMaybe<Scalars['BigInt']>;
  glasses_not?: InputMaybe<Scalars['BigInt']>;
  glasses_gt?: InputMaybe<Scalars['BigInt']>;
  glasses_lt?: InputMaybe<Scalars['BigInt']>;
  glasses_gte?: InputMaybe<Scalars['BigInt']>;
  glasses_lte?: InputMaybe<Scalars['BigInt']>;
  glasses_in?: InputMaybe<Array<Scalars['BigInt']>>;
  glasses_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Seed_orderBy =
  | 'id'
  | 'background'
  | 'body'
  | 'accessory'
  | 'head'
  | 'glasses';

export type Subscription = {
  seed?: Maybe<Seed>;
  seeds: Array<Seed>;
  noun?: Maybe<Noun>;
  nouns: Array<Noun>;
  bid?: Maybe<Bid>;
  bids: Array<Bid>;
  auction?: Maybe<Auction>;
  auctions: Array<Auction>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  delegate?: Maybe<Delegate>;
  delegates: Array<Delegate>;
  proposal?: Maybe<Proposal>;
  proposals: Array<Proposal>;
  vote?: Maybe<Vote>;
  votes: Array<Vote>;
  governance?: Maybe<Governance>;
  governances: Array<Governance>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionseedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionseedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Seed_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Seed_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnounArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnounsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Noun_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Noun_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbidArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbidsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bid_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Bid_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionauctionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionauctionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Auction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Auction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondelegateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondelegatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Delegate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Delegate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionproposalArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionproposalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Proposal_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Proposal_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvoteArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvotesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Vote_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Vote_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiongovernanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiongovernancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Governance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Governance_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Vote = {
  /** Delegate ID + Proposal ID */
  id: Scalars['ID'];
  /** Whether the vote is in favour of the proposal */
  support: Scalars['Boolean'];
  /** The integer support value: against (0), for (1), or abstain (2) */
  supportDetailed: Scalars['Int'];
  /** Amount of votes in favour or against expressed in the smallest unit of the Nouns ERC721 Token */
  votesRaw: Scalars['BigInt'];
  /** Amount of votes in favour or against expressed as a BigInt normalized value for the Nouns ERC721 Token */
  votes: Scalars['BigInt'];
  /** The optional vote reason */
  reason?: Maybe<Scalars['String']>;
  /** Delegate that emitted the vote */
  voter: Delegate;
  /** The Nouns used to vote */
  nouns?: Maybe<Array<Noun>>;
  /** Proposal that is being voted on */
  proposal: Proposal;
};


export type VotenounsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Noun_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Noun_filter>;
};

export type Vote_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  support?: InputMaybe<Scalars['Boolean']>;
  support_not?: InputMaybe<Scalars['Boolean']>;
  support_in?: InputMaybe<Array<Scalars['Boolean']>>;
  support_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  supportDetailed?: InputMaybe<Scalars['Int']>;
  supportDetailed_not?: InputMaybe<Scalars['Int']>;
  supportDetailed_gt?: InputMaybe<Scalars['Int']>;
  supportDetailed_lt?: InputMaybe<Scalars['Int']>;
  supportDetailed_gte?: InputMaybe<Scalars['Int']>;
  supportDetailed_lte?: InputMaybe<Scalars['Int']>;
  supportDetailed_in?: InputMaybe<Array<Scalars['Int']>>;
  supportDetailed_not_in?: InputMaybe<Array<Scalars['Int']>>;
  votesRaw?: InputMaybe<Scalars['BigInt']>;
  votesRaw_not?: InputMaybe<Scalars['BigInt']>;
  votesRaw_gt?: InputMaybe<Scalars['BigInt']>;
  votesRaw_lt?: InputMaybe<Scalars['BigInt']>;
  votesRaw_gte?: InputMaybe<Scalars['BigInt']>;
  votesRaw_lte?: InputMaybe<Scalars['BigInt']>;
  votesRaw_in?: InputMaybe<Array<Scalars['BigInt']>>;
  votesRaw_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  votes?: InputMaybe<Scalars['BigInt']>;
  votes_not?: InputMaybe<Scalars['BigInt']>;
  votes_gt?: InputMaybe<Scalars['BigInt']>;
  votes_lt?: InputMaybe<Scalars['BigInt']>;
  votes_gte?: InputMaybe<Scalars['BigInt']>;
  votes_lte?: InputMaybe<Scalars['BigInt']>;
  votes_in?: InputMaybe<Array<Scalars['BigInt']>>;
  votes_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reason?: InputMaybe<Scalars['String']>;
  reason_not?: InputMaybe<Scalars['String']>;
  reason_gt?: InputMaybe<Scalars['String']>;
  reason_lt?: InputMaybe<Scalars['String']>;
  reason_gte?: InputMaybe<Scalars['String']>;
  reason_lte?: InputMaybe<Scalars['String']>;
  reason_in?: InputMaybe<Array<Scalars['String']>>;
  reason_not_in?: InputMaybe<Array<Scalars['String']>>;
  reason_contains?: InputMaybe<Scalars['String']>;
  reason_contains_nocase?: InputMaybe<Scalars['String']>;
  reason_not_contains?: InputMaybe<Scalars['String']>;
  reason_not_contains_nocase?: InputMaybe<Scalars['String']>;
  reason_starts_with?: InputMaybe<Scalars['String']>;
  reason_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reason_not_starts_with?: InputMaybe<Scalars['String']>;
  reason_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reason_ends_with?: InputMaybe<Scalars['String']>;
  reason_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reason_not_ends_with?: InputMaybe<Scalars['String']>;
  reason_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  voter?: InputMaybe<Scalars['String']>;
  voter_not?: InputMaybe<Scalars['String']>;
  voter_gt?: InputMaybe<Scalars['String']>;
  voter_lt?: InputMaybe<Scalars['String']>;
  voter_gte?: InputMaybe<Scalars['String']>;
  voter_lte?: InputMaybe<Scalars['String']>;
  voter_in?: InputMaybe<Array<Scalars['String']>>;
  voter_not_in?: InputMaybe<Array<Scalars['String']>>;
  voter_contains?: InputMaybe<Scalars['String']>;
  voter_contains_nocase?: InputMaybe<Scalars['String']>;
  voter_not_contains?: InputMaybe<Scalars['String']>;
  voter_not_contains_nocase?: InputMaybe<Scalars['String']>;
  voter_starts_with?: InputMaybe<Scalars['String']>;
  voter_starts_with_nocase?: InputMaybe<Scalars['String']>;
  voter_not_starts_with?: InputMaybe<Scalars['String']>;
  voter_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  voter_ends_with?: InputMaybe<Scalars['String']>;
  voter_ends_with_nocase?: InputMaybe<Scalars['String']>;
  voter_not_ends_with?: InputMaybe<Scalars['String']>;
  voter_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nouns?: InputMaybe<Array<Scalars['String']>>;
  nouns_not?: InputMaybe<Array<Scalars['String']>>;
  nouns_contains?: InputMaybe<Array<Scalars['String']>>;
  nouns_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  nouns_not_contains?: InputMaybe<Array<Scalars['String']>>;
  nouns_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  proposal?: InputMaybe<Scalars['String']>;
  proposal_not?: InputMaybe<Scalars['String']>;
  proposal_gt?: InputMaybe<Scalars['String']>;
  proposal_lt?: InputMaybe<Scalars['String']>;
  proposal_gte?: InputMaybe<Scalars['String']>;
  proposal_lte?: InputMaybe<Scalars['String']>;
  proposal_in?: InputMaybe<Array<Scalars['String']>>;
  proposal_not_in?: InputMaybe<Array<Scalars['String']>>;
  proposal_contains?: InputMaybe<Scalars['String']>;
  proposal_contains_nocase?: InputMaybe<Scalars['String']>;
  proposal_not_contains?: InputMaybe<Scalars['String']>;
  proposal_not_contains_nocase?: InputMaybe<Scalars['String']>;
  proposal_starts_with?: InputMaybe<Scalars['String']>;
  proposal_starts_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_not_starts_with?: InputMaybe<Scalars['String']>;
  proposal_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_ends_with?: InputMaybe<Scalars['String']>;
  proposal_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_not_ends_with?: InputMaybe<Scalars['String']>;
  proposal_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Vote_orderBy =
  | 'id'
  | 'support'
  | 'supportDetailed'
  | 'votesRaw'
  | 'votes'
  | 'reason'
  | 'voter'
  | 'nouns'
  | 'proposal';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

    }
    export type QueryLilnounsSdk = {
  /** null **/
  seed: InContextSdkMethod<LilnounsTypes.Query['seed'], LilnounsTypes.QueryseedArgs, MeshContext>,
  /** null **/
  seeds: InContextSdkMethod<LilnounsTypes.Query['seeds'], LilnounsTypes.QueryseedsArgs, MeshContext>,
  /** null **/
  noun: InContextSdkMethod<LilnounsTypes.Query['noun'], LilnounsTypes.QuerynounArgs, MeshContext>,
  /** null **/
  nouns: InContextSdkMethod<LilnounsTypes.Query['nouns'], LilnounsTypes.QuerynounsArgs, MeshContext>,
  /** null **/
  bid: InContextSdkMethod<LilnounsTypes.Query['bid'], LilnounsTypes.QuerybidArgs, MeshContext>,
  /** null **/
  bids: InContextSdkMethod<LilnounsTypes.Query['bids'], LilnounsTypes.QuerybidsArgs, MeshContext>,
  /** null **/
  auction: InContextSdkMethod<LilnounsTypes.Query['auction'], LilnounsTypes.QueryauctionArgs, MeshContext>,
  /** null **/
  auctions: InContextSdkMethod<LilnounsTypes.Query['auctions'], LilnounsTypes.QueryauctionsArgs, MeshContext>,
  /** null **/
  account: InContextSdkMethod<LilnounsTypes.Query['account'], LilnounsTypes.QueryaccountArgs, MeshContext>,
  /** null **/
  accounts: InContextSdkMethod<LilnounsTypes.Query['accounts'], LilnounsTypes.QueryaccountsArgs, MeshContext>,
  /** null **/
  delegate: InContextSdkMethod<LilnounsTypes.Query['delegate'], LilnounsTypes.QuerydelegateArgs, MeshContext>,
  /** null **/
  delegates: InContextSdkMethod<LilnounsTypes.Query['delegates'], LilnounsTypes.QuerydelegatesArgs, MeshContext>,
  /** null **/
  proposal: InContextSdkMethod<LilnounsTypes.Query['proposal'], LilnounsTypes.QueryproposalArgs, MeshContext>,
  /** null **/
  proposals: InContextSdkMethod<LilnounsTypes.Query['proposals'], LilnounsTypes.QueryproposalsArgs, MeshContext>,
  /** null **/
  vote: InContextSdkMethod<LilnounsTypes.Query['vote'], LilnounsTypes.QueryvoteArgs, MeshContext>,
  /** null **/
  votes: InContextSdkMethod<LilnounsTypes.Query['votes'], LilnounsTypes.QueryvotesArgs, MeshContext>,
  /** null **/
  governance: InContextSdkMethod<LilnounsTypes.Query['governance'], LilnounsTypes.QuerygovernanceArgs, MeshContext>,
  /** null **/
  governances: InContextSdkMethod<LilnounsTypes.Query['governances'], LilnounsTypes.QuerygovernancesArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<LilnounsTypes.Query['_meta'], LilnounsTypes.Query_metaArgs, MeshContext>
};

export type MutationLilnounsSdk = {

};

export type SubscriptionLilnounsSdk = {
  /** null **/
  seed: InContextSdkMethod<LilnounsTypes.Subscription['seed'], LilnounsTypes.SubscriptionseedArgs, MeshContext>,
  /** null **/
  seeds: InContextSdkMethod<LilnounsTypes.Subscription['seeds'], LilnounsTypes.SubscriptionseedsArgs, MeshContext>,
  /** null **/
  noun: InContextSdkMethod<LilnounsTypes.Subscription['noun'], LilnounsTypes.SubscriptionnounArgs, MeshContext>,
  /** null **/
  nouns: InContextSdkMethod<LilnounsTypes.Subscription['nouns'], LilnounsTypes.SubscriptionnounsArgs, MeshContext>,
  /** null **/
  bid: InContextSdkMethod<LilnounsTypes.Subscription['bid'], LilnounsTypes.SubscriptionbidArgs, MeshContext>,
  /** null **/
  bids: InContextSdkMethod<LilnounsTypes.Subscription['bids'], LilnounsTypes.SubscriptionbidsArgs, MeshContext>,
  /** null **/
  auction: InContextSdkMethod<LilnounsTypes.Subscription['auction'], LilnounsTypes.SubscriptionauctionArgs, MeshContext>,
  /** null **/
  auctions: InContextSdkMethod<LilnounsTypes.Subscription['auctions'], LilnounsTypes.SubscriptionauctionsArgs, MeshContext>,
  /** null **/
  account: InContextSdkMethod<LilnounsTypes.Subscription['account'], LilnounsTypes.SubscriptionaccountArgs, MeshContext>,
  /** null **/
  accounts: InContextSdkMethod<LilnounsTypes.Subscription['accounts'], LilnounsTypes.SubscriptionaccountsArgs, MeshContext>,
  /** null **/
  delegate: InContextSdkMethod<LilnounsTypes.Subscription['delegate'], LilnounsTypes.SubscriptiondelegateArgs, MeshContext>,
  /** null **/
  delegates: InContextSdkMethod<LilnounsTypes.Subscription['delegates'], LilnounsTypes.SubscriptiondelegatesArgs, MeshContext>,
  /** null **/
  proposal: InContextSdkMethod<LilnounsTypes.Subscription['proposal'], LilnounsTypes.SubscriptionproposalArgs, MeshContext>,
  /** null **/
  proposals: InContextSdkMethod<LilnounsTypes.Subscription['proposals'], LilnounsTypes.SubscriptionproposalsArgs, MeshContext>,
  /** null **/
  vote: InContextSdkMethod<LilnounsTypes.Subscription['vote'], LilnounsTypes.SubscriptionvoteArgs, MeshContext>,
  /** null **/
  votes: InContextSdkMethod<LilnounsTypes.Subscription['votes'], LilnounsTypes.SubscriptionvotesArgs, MeshContext>,
  /** null **/
  governance: InContextSdkMethod<LilnounsTypes.Subscription['governance'], LilnounsTypes.SubscriptiongovernanceArgs, MeshContext>,
  /** null **/
  governances: InContextSdkMethod<LilnounsTypes.Subscription['governances'], LilnounsTypes.SubscriptiongovernancesArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<LilnounsTypes.Subscription['_meta'], LilnounsTypes.Subscription_metaArgs, MeshContext>
};

export type LilnounsContext = {
      ["lilnouns"]: { Query: QueryLilnounsSdk, Mutation: MutationLilnounsSdk, Subscription: SubscriptionLilnounsSdk },
    };

export type MeshContext = LilnounsContext & BaseMeshContext;


import { getMesh, ExecuteMeshFn, SubscribeMeshFn } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';

import { fileURLToPath } from '@graphql-mesh/utils';
const baseDir = pathModule.join(pathModule.dirname(fileURLToPath(import.meta.url)), '..');

const importFn = (moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".graphclient/sources/lilnouns/introspectionSchema":
      return import("./sources/lilnouns/introspectionSchema");
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { DefaultLogger } from '@graphql-mesh/utils';
import GraphqlHandler from "@graphql-mesh/graphql"
import BareMerger from "@graphql-mesh/merger-bare";
import { printWithCache } from '@graphql-mesh/utils';
export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
    } as any)
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger('🕸️  Mesh');
const sources = [];
const transforms = [];
const additionalEnvelopPlugins = [];
const lilnounsTransforms = [];
const additionalTypeDefs = [] as any[];
const lilnounsHandler = new GraphqlHandler({
              name: "lilnouns",
              config: {"endpoint":"https://api.thegraph.com/subgraphs/name/lilnounsdao/lil-nouns-subgraph"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("lilnouns"),
              logger: logger.child("lilnouns"),
              importFn
            });
sources.push({
          name: 'lilnouns',
          handler: lilnounsHandler,
          transforms: lilnounsTransforms
        })
const merger = new(BareMerger as any)({
        cache,
        pubsub,
        logger: logger.child('bareMerger'),
        store: rootStore.child('bareMerger')
      })
const additionalResolvers = [] as any[]

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      
    ];
    },
  };
}

let meshInstance$: Promise<MeshInstance<MeshContext>>;

export function getBuiltGraphClient(): Promise<MeshInstance<MeshContext>> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh<MeshContext>(meshOptions)).then(mesh => {
      const id$ = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        id$.then(id => mesh.pubsub.unsubscribe(id)).catch(err => console.error(err));
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));