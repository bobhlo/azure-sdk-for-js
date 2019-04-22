/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as Parameters from "./models/parameters";
import * as operations from "./operations";
import { CdnManagementClientContext } from "./cdnManagementClientContext";


class CdnManagementClient extends CdnManagementClientContext {
  // Operation groups
  profiles: operations.Profiles;
  endpoints: operations.Endpoints;
  origins: operations.Origins;
  customDomains: operations.CustomDomains;
  resourceUsage: operations.ResourceUsageOperations;
  operations: operations.Operations;
  edgeNodes: operations.EdgeNodes;

  /**
   * Initializes a new instance of the CdnManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId Azure Subscription ID.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.CdnManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.profiles = new operations.Profiles(this);
    this.endpoints = new operations.Endpoints(this);
    this.origins = new operations.Origins(this);
    this.customDomains = new operations.CustomDomains(this);
    this.resourceUsage = new operations.ResourceUsageOperations(this);
    this.operations = new operations.Operations(this);
    this.edgeNodes = new operations.EdgeNodes(this);
  }

  /**
   * Check the availability of a resource name. This is needed for resources where name is globally
   * unique, such as a CDN endpoint.
   * @param name The resource name to validate.
   * @param [options] The optional parameters
   * @returns Promise<Models.CheckNameAvailabilityResponse>
   */
  checkNameAvailability(name: string, options?: msRest.RequestOptionsBase): Promise<Models.CheckNameAvailabilityResponse>;
  /**
   * @param name The resource name to validate.
   * @param callback The callback
   */
  checkNameAvailability(name: string, callback: msRest.ServiceCallback<Models.CheckNameAvailabilityOutput>): void;
  /**
   * @param name The resource name to validate.
   * @param options The optional parameters
   * @param callback The callback
   */
  checkNameAvailability(name: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CheckNameAvailabilityOutput>): void;
  checkNameAvailability(name: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CheckNameAvailabilityOutput>, callback?: msRest.ServiceCallback<Models.CheckNameAvailabilityOutput>): Promise<Models.CheckNameAvailabilityResponse> {
    return this.sendOperationRequest(
      {
        name,
        options
      },
      checkNameAvailabilityOperationSpec,
      callback) as Promise<Models.CheckNameAvailabilityResponse>;
  }

  /**
   * Check the availability of a resource name. This is needed for resources where name is globally
   * unique, such as a CDN endpoint.
   * @param name The resource name to validate.
   * @param [options] The optional parameters
   * @returns Promise<Models.CheckNameAvailabilityWithSubscriptionResponse>
   */
  checkNameAvailabilityWithSubscription(name: string, options?: msRest.RequestOptionsBase): Promise<Models.CheckNameAvailabilityWithSubscriptionResponse>;
  /**
   * @param name The resource name to validate.
   * @param callback The callback
   */
  checkNameAvailabilityWithSubscription(name: string, callback: msRest.ServiceCallback<Models.CheckNameAvailabilityOutput>): void;
  /**
   * @param name The resource name to validate.
   * @param options The optional parameters
   * @param callback The callback
   */
  checkNameAvailabilityWithSubscription(name: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CheckNameAvailabilityOutput>): void;
  checkNameAvailabilityWithSubscription(name: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CheckNameAvailabilityOutput>, callback?: msRest.ServiceCallback<Models.CheckNameAvailabilityOutput>): Promise<Models.CheckNameAvailabilityWithSubscriptionResponse> {
    return this.sendOperationRequest(
      {
        name,
        options
      },
      checkNameAvailabilityWithSubscriptionOperationSpec,
      callback) as Promise<Models.CheckNameAvailabilityWithSubscriptionResponse>;
  }

  /**
   * Check if the probe path is a valid path and the file can be accessed. Probe path is the path to
   * a file hosted on the origin server to help accelerate the delivery of dynamic content via the
   * CDN endpoint. This path is relative to the origin path specified in the endpoint configuration.
   * @param probeURL The probe URL to validate.
   * @param [options] The optional parameters
   * @returns Promise<Models.ValidateProbeResponse>
   */
  validateProbe(probeURL: string, options?: msRest.RequestOptionsBase): Promise<Models.ValidateProbeResponse>;
  /**
   * @param probeURL The probe URL to validate.
   * @param callback The callback
   */
  validateProbe(probeURL: string, callback: msRest.ServiceCallback<Models.ValidateProbeOutput>): void;
  /**
   * @param probeURL The probe URL to validate.
   * @param options The optional parameters
   * @param callback The callback
   */
  validateProbe(probeURL: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ValidateProbeOutput>): void;
  validateProbe(probeURL: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ValidateProbeOutput>, callback?: msRest.ServiceCallback<Models.ValidateProbeOutput>): Promise<Models.ValidateProbeResponse> {
    return this.sendOperationRequest(
      {
        probeURL,
        options
      },
      validateProbeOperationSpec,
      callback) as Promise<Models.ValidateProbeResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const checkNameAvailabilityOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "providers/Microsoft.Cdn/checkNameAvailability",
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      name: "name"
    },
    mapper: {
      ...Mappers.CheckNameAvailabilityInput,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CheckNameAvailabilityOutput
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const checkNameAvailabilityWithSubscriptionOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Cdn/checkNameAvailability",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      name: "name"
    },
    mapper: {
      ...Mappers.CheckNameAvailabilityInput,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CheckNameAvailabilityOutput
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const validateProbeOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Cdn/validateProbe",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      probeURL: "probeURL"
    },
    mapper: {
      ...Mappers.ValidateProbeInput,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ValidateProbeOutput
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

export {
  CdnManagementClient,
  CdnManagementClientContext,
  Models as CdnManagementModels,
  Mappers as CdnManagementMappers
};
export * from "./operations";
