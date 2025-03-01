/* eslint-disable */
// sequence-metadata v0.4.0 af94302de504695d49c89615d251934712903381
// --
// Code generated by webrpc-gen@v0.8.x-dev with typescript generator. DO NOT EDIT.
//
// webrpc-gen -schema=metadata.ridl -target=typescript -client -out=./clients/metadata.gen.ts

// WebRPC description and code-gen version
export const WebRPCVersion = "v1"

// Schema version of your RIDL schema
export const WebRPCSchemaVersion = "v0.4.0"

// Schema hash generated from your RIDL schema
export const WebRPCSchemaHash = "af94302de504695d49c89615d251934712903381"

//
// Types
//
export enum ContractType {
  UNKNOWN = 'UNKNOWN',
  ERC20 = 'ERC20',
  ERC721 = 'ERC721',
  ERC1155 = 'ERC1155'
}

export enum PropertyType {
  INT = 'INT',
  STRING = 'STRING',
  ARRAY = 'ARRAY',
  GENERIC = 'GENERIC'
}

export enum SwapType {
  UNKNOWN = 'UNKNOWN',
  BUY = 'BUY',
  SELL = 'SELL'
}

export enum SortOrder {
  DESC = 'DESC',
  ASC = 'ASC'
}

export interface Version {
  webrpcVersion: string
  schemaVersion: string
  schemaHash: string
  appVersion: string
}

export interface RuntimeStatus {
  healthOK: boolean
  startTime: string
  uptime: number
  ver: string
  branch: string
  commitHash: string
  checks: RuntimeChecks
}

export interface RuntimeChecks {
}

export interface ContractIndex {
  chainId: number
  address: string
  type: ContractType
  metadata: {[key: string]: any}
  contentHash: number
  notFound: boolean
}

export interface TokenIndex {
  key: string
  chainId: number
  contractAddress: string
  tokenId: string
  metadata: {[key: string]: any}
  
  notFound: boolean
}

export interface ContractInfo {
  chainId: number
  address: string
  name: string
  type: string
  symbol: string
  decimals?: number
  logoURI: string
  extensions: ContractInfoExtensions
}

export interface ContractInfoExtensions {
  link: string
  description: string
  ogImage: string
  originChainId: number
  originAddress: string
  blacklist: boolean
}

export interface TokenMetadata {
  tokenId: string
  contractAddress: string
  name: string
  description: string
  image: string
  decimals: number
  properties: {[key: string]: any}
  video: string
  audio: string
  image_data: string
  external_url: string
  background_color: string
  animation_url: string
  attributes: Array<{[key: string]: any}>
}

export interface PropertyFilter {
  name: string
  type: PropertyType
  min?: number
  max?: number
  values?: Array<any>
}

export interface Filter {
  text?: string
  properties?: Array<PropertyFilter>
}

export interface GetNiftyswapUnitPricesRequest {
  swapType: SwapType
  ids: Array<string>
  amounts: Array<string>
}

export interface Page {
  pageSize?: number
  page?: number
}

export interface SortBy {
  column: string
  order: SortOrder
}

export interface Metadata {
  ping(headers?: object): Promise<PingReturn>
  version(headers?: object): Promise<VersionReturn>
  runtimeStatus(headers?: object): Promise<RuntimeStatusReturn>
  getTokenMetadata(args: GetTokenMetadataArgs, headers?: object): Promise<GetTokenMetadataReturn>
  refreshTokenMetadata(args: RefreshTokenMetadataArgs, headers?: object): Promise<RefreshTokenMetadataReturn>
  getTokenMetadataBatch(args: GetTokenMetadataBatchArgs, headers?: object): Promise<GetTokenMetadataBatchReturn>
  searchTokenMetadata(args: SearchTokenMetadataArgs, headers?: object): Promise<SearchTokenMetadataReturn>
  searchTokenIDs(args: SearchTokenIDsArgs, headers?: object): Promise<SearchTokenIDsReturn>
  tokenCollectionFilters(args: TokenCollectionFiltersArgs, headers?: object): Promise<TokenCollectionFiltersReturn>
  getContractInfo(args: GetContractInfoArgs, headers?: object): Promise<GetContractInfoReturn>
  getContractInfoBatch(args: GetContractInfoBatchArgs, headers?: object): Promise<GetContractInfoBatchReturn>
  searchContractInfo(args: SearchContractInfoArgs, headers?: object): Promise<SearchContractInfoReturn>
  searchContractInfoBatch(args: SearchContractInfoBatchArgs, headers?: object): Promise<SearchContractInfoBatchReturn>
  getNiftyswapTokenQuantity(args: GetNiftyswapTokenQuantityArgs, headers?: object): Promise<GetNiftyswapTokenQuantityReturn>
  getNiftyswapUnitPrices(args: GetNiftyswapUnitPricesArgs, headers?: object): Promise<GetNiftyswapUnitPricesReturn>
}

export interface PingArgs {
}

export interface PingReturn {
  status: boolean  
}
export interface VersionArgs {
}

export interface VersionReturn {
  version: Version  
}
export interface RuntimeStatusArgs {
}

export interface RuntimeStatusReturn {
  status: RuntimeStatus  
}
export interface GetTokenMetadataArgs {
  chainID: string
  contractAddress: string
  tokenIDs: Array<string>
}

export interface GetTokenMetadataReturn {
  tokenMetadata: Array<TokenMetadata>  
}
export interface RefreshTokenMetadataArgs {
  chainID: string
  contractAddress: string
  tokenIDs?: Array<string>
  refreshAll?: boolean
}

export interface RefreshTokenMetadataReturn {
  status: {[key: string]: boolean}  
}
export interface GetTokenMetadataBatchArgs {
  chainID: string
  contractTokenMap: {[key: string]: Array<string>}
}

export interface GetTokenMetadataBatchReturn {
  contractTokenMetadata: {[key: string]: Array<TokenMetadata>}  
}
export interface SearchTokenMetadataArgs {
  chainID: string
  contractAddress: string
  filter: Filter
  page?: Page
}

export interface SearchTokenMetadataReturn {
  page: Page
  tokenMetadata: Array<TokenMetadata>  
}
export interface SearchTokenIDsArgs {
  chainID: string
  contractAddress: string
  filter: Filter
  page?: Page
}

export interface SearchTokenIDsReturn {
  page: Page
  tokenIds: Array<string>  
}
export interface TokenCollectionFiltersArgs {
  chainID: string
  contractAddress: string
}

export interface TokenCollectionFiltersReturn {
  filters: Array<PropertyFilter>  
}
export interface GetContractInfoArgs {
  chainID: string
  contractAddress: string
}

export interface GetContractInfoReturn {
  contractInfo: ContractInfo  
}
export interface GetContractInfoBatchArgs {
  chainID: string
  contractAddresses: Array<string>
}

export interface GetContractInfoBatchReturn {
  contractInfoMap: {[key: string]: ContractInfo}  
}
export interface SearchContractInfoArgs {
  contractAddress: string
}

export interface SearchContractInfoReturn {
  contractInfoList: Array<ContractInfo>  
}
export interface SearchContractInfoBatchArgs {
  contractAddresses: Array<string>
}

export interface SearchContractInfoBatchReturn {
  contractInfoByChain: {[key: string]: Array<ContractInfo>}  
}
export interface GetNiftyswapTokenQuantityArgs {
  chainID: string
  contractAddress: string
  tokenIDs: Array<string>
}

export interface GetNiftyswapTokenQuantityReturn {
  quantity: {[key: string]: string}  
}
export interface GetNiftyswapUnitPricesArgs {
  chainID: string
  contractAddress: string
  req: GetNiftyswapUnitPricesRequest
}

export interface GetNiftyswapUnitPricesReturn {
  prices: {[key: string]: string}  
}


  
//
// Client
//
export class Metadata implements Metadata {
  protected hostname: string
  protected fetch: Fetch
  protected path = '/rpc/Metadata/'

  constructor(hostname: string, fetch: Fetch) {
    this.hostname = hostname
    this.fetch = (input: RequestInfo, init?: RequestInit) => fetch(input, init)
  }

  private url(name: string): string {
    return this.hostname + this.path + name
  }
  
  ping = (headers?: object): Promise<PingReturn> => {
    return this.fetch(
      this.url('Ping'),
      createHTTPRequest({}, headers)
      ).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          status: <boolean>(_data.status)
        }
      })
    })
  }
  
  version = (headers?: object): Promise<VersionReturn> => {
    return this.fetch(
      this.url('Version'),
      createHTTPRequest({}, headers)
      ).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          version: <Version>(_data.version)
        }
      })
    })
  }
  
  runtimeStatus = (headers?: object): Promise<RuntimeStatusReturn> => {
    return this.fetch(
      this.url('RuntimeStatus'),
      createHTTPRequest({}, headers)
      ).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          status: <RuntimeStatus>(_data.status)
        }
      })
    })
  }
  
  getTokenMetadata = (args: GetTokenMetadataArgs, headers?: object): Promise<GetTokenMetadataReturn> => {
    return this.fetch(
      this.url('GetTokenMetadata'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          tokenMetadata: <Array<TokenMetadata>>(_data.tokenMetadata)
        }
      })
    })
  }
  
  refreshTokenMetadata = (args: RefreshTokenMetadataArgs, headers?: object): Promise<RefreshTokenMetadataReturn> => {
    return this.fetch(
      this.url('RefreshTokenMetadata'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          status: <{[key: string]: boolean}>(_data.status)
        }
      })
    })
  }
  
  getTokenMetadataBatch = (args: GetTokenMetadataBatchArgs, headers?: object): Promise<GetTokenMetadataBatchReturn> => {
    return this.fetch(
      this.url('GetTokenMetadataBatch'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          contractTokenMetadata: <{[key: string]: Array<TokenMetadata>}>(_data.contractTokenMetadata)
        }
      })
    })
  }
  
  searchTokenMetadata = (args: SearchTokenMetadataArgs, headers?: object): Promise<SearchTokenMetadataReturn> => {
    return this.fetch(
      this.url('SearchTokenMetadata'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          page: <Page>(_data.page), 
          tokenMetadata: <Array<TokenMetadata>>(_data.tokenMetadata)
        }
      })
    })
  }
  
  searchTokenIDs = (args: SearchTokenIDsArgs, headers?: object): Promise<SearchTokenIDsReturn> => {
    return this.fetch(
      this.url('SearchTokenIDs'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          page: <Page>(_data.page), 
          tokenIds: <Array<string>>(_data.tokenIds)
        }
      })
    })
  }
  
  tokenCollectionFilters = (args: TokenCollectionFiltersArgs, headers?: object): Promise<TokenCollectionFiltersReturn> => {
    return this.fetch(
      this.url('TokenCollectionFilters'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          filters: <Array<PropertyFilter>>(_data.filters)
        }
      })
    })
  }
  
  getContractInfo = (args: GetContractInfoArgs, headers?: object): Promise<GetContractInfoReturn> => {
    return this.fetch(
      this.url('GetContractInfo'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          contractInfo: <ContractInfo>(_data.contractInfo)
        }
      })
    })
  }
  
  getContractInfoBatch = (args: GetContractInfoBatchArgs, headers?: object): Promise<GetContractInfoBatchReturn> => {
    return this.fetch(
      this.url('GetContractInfoBatch'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          contractInfoMap: <{[key: string]: ContractInfo}>(_data.contractInfoMap)
        }
      })
    })
  }
  
  searchContractInfo = (args: SearchContractInfoArgs, headers?: object): Promise<SearchContractInfoReturn> => {
    return this.fetch(
      this.url('SearchContractInfo'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          contractInfoList: <Array<ContractInfo>>(_data.contractInfoList)
        }
      })
    })
  }
  
  searchContractInfoBatch = (args: SearchContractInfoBatchArgs, headers?: object): Promise<SearchContractInfoBatchReturn> => {
    return this.fetch(
      this.url('SearchContractInfoBatch'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          contractInfoByChain: <{[key: string]: Array<ContractInfo>}>(_data.contractInfoByChain)
        }
      })
    })
  }
  
  getNiftyswapTokenQuantity = (args: GetNiftyswapTokenQuantityArgs, headers?: object): Promise<GetNiftyswapTokenQuantityReturn> => {
    return this.fetch(
      this.url('GetNiftyswapTokenQuantity'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          quantity: <{[key: string]: string}>(_data.quantity)
        }
      })
    })
  }
  
  getNiftyswapUnitPrices = (args: GetNiftyswapUnitPricesArgs, headers?: object): Promise<GetNiftyswapUnitPricesReturn> => {
    return this.fetch(
      this.url('GetNiftyswapUnitPrices'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          prices: <{[key: string]: string}>(_data.prices)
        }
      })
    })
  }
  
}

  
export interface WebRPCError extends Error {
  code: string
  msg: string
	status: number
}

const createHTTPRequest = (body: object = {}, headers: object = {}): object => {
  return {
    method: 'POST',
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify(body || {})
  }
}

const buildResponse = (res: Response): Promise<any> => {
  return res.text().then(text => {
    let data
    try {
      data = JSON.parse(text)
    } catch(err) {
      throw { code: 'unknown', msg: `expecting JSON, got: ${text}`, status: res.status } as WebRPCError
    }
    if (!res.ok) {
      throw data // webrpc error response
    }
    return data
  })
}

export type Fetch = (input: RequestInfo, init?: RequestInit) => Promise<Response>
