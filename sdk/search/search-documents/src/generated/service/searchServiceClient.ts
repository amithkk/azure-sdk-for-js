/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import {
  DataSources,
  Indexers,
  Skillsets,
  SynonymMaps,
  Indexes
} from "./operations";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import { SearchServiceClientContext } from "./searchServiceClientContext";
import {
  SearchServiceClientOptionalParams,
  ApiVersion20200630,
  SearchServiceClientGetServiceStatisticsOptionalParams,
  SearchServiceClientGetServiceStatisticsResponse
} from "./models";

/** @hidden */
export class SearchServiceClient extends SearchServiceClientContext {
  /**
   * Initializes a new instance of the SearchServiceClient class.
   * @param endpoint The endpoint URL of the search service.
   * @param apiVersion Api Version
   * @param options The parameter options
   */
  constructor(
    endpoint: string,
    apiVersion: ApiVersion20200630,
    options?: SearchServiceClientOptionalParams
  ) {
    super(endpoint, apiVersion, options);
    this.dataSources = new DataSources(this);
    this.indexers = new Indexers(this);
    this.skillsets = new Skillsets(this);
    this.synonymMaps = new SynonymMaps(this);
    this.indexes = new Indexes(this);
  }

  /**
   * Gets service level statistics for a search service.
   * @param options The options parameters.
   */
  getServiceStatistics(
    options?: SearchServiceClientGetServiceStatisticsOptionalParams
  ): Promise<SearchServiceClientGetServiceStatisticsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      getServiceStatisticsOperationSpec
    ) as Promise<SearchServiceClientGetServiceStatisticsResponse>;
  }

  dataSources: DataSources;
  indexers: Indexers;
  skillsets: Skillsets;
  synonymMaps: SynonymMaps;
  indexes: Indexes;
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getServiceStatisticsOperationSpec: coreHttp.OperationSpec = {
  path: "/servicestats",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServiceStatistics
    },
    default: {
      bodyMapper: Mappers.SearchError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept, Parameters.xMsClientRequestId],
  serializer
};
