// package: team.hypox.proto
// file: wiki.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as wiki_pb from "./wiki_pb";

interface IRepositoryServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createWiki: IRepositoryServiceService_ICreateWiki;
    getWiki: IRepositoryServiceService_IGetWiki;
    updateWiki: IRepositoryServiceService_IUpdateWiki;
    deleteWiki: IRepositoryServiceService_IDeleteWiki;
}

interface IRepositoryServiceService_ICreateWiki extends grpc.MethodDefinition<wiki_pb.RepositoryWiki, wiki_pb.RepositoryWiki> {
    path: "/team.hypox.proto.RepositoryService/CreateWiki";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<wiki_pb.RepositoryWiki>;
    requestDeserialize: grpc.deserialize<wiki_pb.RepositoryWiki>;
    responseSerialize: grpc.serialize<wiki_pb.RepositoryWiki>;
    responseDeserialize: grpc.deserialize<wiki_pb.RepositoryWiki>;
}
interface IRepositoryServiceService_IGetWiki extends grpc.MethodDefinition<wiki_pb.RepositoryQuery, wiki_pb.RepositoryWiki> {
    path: "/team.hypox.proto.RepositoryService/GetWiki";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<wiki_pb.RepositoryQuery>;
    requestDeserialize: grpc.deserialize<wiki_pb.RepositoryQuery>;
    responseSerialize: grpc.serialize<wiki_pb.RepositoryWiki>;
    responseDeserialize: grpc.deserialize<wiki_pb.RepositoryWiki>;
}
interface IRepositoryServiceService_IUpdateWiki extends grpc.MethodDefinition<wiki_pb.RepositoryWiki, wiki_pb.RepositoryWiki> {
    path: "/team.hypox.proto.RepositoryService/UpdateWiki";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<wiki_pb.RepositoryWiki>;
    requestDeserialize: grpc.deserialize<wiki_pb.RepositoryWiki>;
    responseSerialize: grpc.serialize<wiki_pb.RepositoryWiki>;
    responseDeserialize: grpc.deserialize<wiki_pb.RepositoryWiki>;
}
interface IRepositoryServiceService_IDeleteWiki extends grpc.MethodDefinition<wiki_pb.RepositoryQuery, wiki_pb.RepositoryWiki> {
    path: "/team.hypox.proto.RepositoryService/DeleteWiki";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<wiki_pb.RepositoryQuery>;
    requestDeserialize: grpc.deserialize<wiki_pb.RepositoryQuery>;
    responseSerialize: grpc.serialize<wiki_pb.RepositoryWiki>;
    responseDeserialize: grpc.deserialize<wiki_pb.RepositoryWiki>;
}

export const RepositoryServiceService: IRepositoryServiceService;

export interface IRepositoryServiceServer {
    createWiki: grpc.handleUnaryCall<wiki_pb.RepositoryWiki, wiki_pb.RepositoryWiki>;
    getWiki: grpc.handleUnaryCall<wiki_pb.RepositoryQuery, wiki_pb.RepositoryWiki>;
    updateWiki: grpc.handleUnaryCall<wiki_pb.RepositoryWiki, wiki_pb.RepositoryWiki>;
    deleteWiki: grpc.handleUnaryCall<wiki_pb.RepositoryQuery, wiki_pb.RepositoryWiki>;
}

export interface IRepositoryServiceClient {
    createWiki(request: wiki_pb.RepositoryWiki, callback: (error: grpc.ServiceError | null, response: wiki_pb.RepositoryWiki) => void): grpc.ClientUnaryCall;
    createWiki(request: wiki_pb.RepositoryWiki, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: wiki_pb.RepositoryWiki) => void): grpc.ClientUnaryCall;
    createWiki(request: wiki_pb.RepositoryWiki, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: wiki_pb.RepositoryWiki) => void): grpc.ClientUnaryCall;
    getWiki(request: wiki_pb.RepositoryQuery, callback: (error: grpc.ServiceError | null, response: wiki_pb.RepositoryWiki) => void): grpc.ClientUnaryCall;
    getWiki(request: wiki_pb.RepositoryQuery, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: wiki_pb.RepositoryWiki) => void): grpc.ClientUnaryCall;
    getWiki(request: wiki_pb.RepositoryQuery, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: wiki_pb.RepositoryWiki) => void): grpc.ClientUnaryCall;
    updateWiki(request: wiki_pb.RepositoryWiki, callback: (error: grpc.ServiceError | null, response: wiki_pb.RepositoryWiki) => void): grpc.ClientUnaryCall;
    updateWiki(request: wiki_pb.RepositoryWiki, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: wiki_pb.RepositoryWiki) => void): grpc.ClientUnaryCall;
    updateWiki(request: wiki_pb.RepositoryWiki, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: wiki_pb.RepositoryWiki) => void): grpc.ClientUnaryCall;
    deleteWiki(request: wiki_pb.RepositoryQuery, callback: (error: grpc.ServiceError | null, response: wiki_pb.RepositoryWiki) => void): grpc.ClientUnaryCall;
    deleteWiki(request: wiki_pb.RepositoryQuery, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: wiki_pb.RepositoryWiki) => void): grpc.ClientUnaryCall;
    deleteWiki(request: wiki_pb.RepositoryQuery, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: wiki_pb.RepositoryWiki) => void): grpc.ClientUnaryCall;
}

export class RepositoryServiceClient extends grpc.Client implements IRepositoryServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createWiki(request: wiki_pb.RepositoryWiki, callback: (error: grpc.ServiceError | null, response: wiki_pb.RepositoryWiki) => void): grpc.ClientUnaryCall;
    public createWiki(request: wiki_pb.RepositoryWiki, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: wiki_pb.RepositoryWiki) => void): grpc.ClientUnaryCall;
    public createWiki(request: wiki_pb.RepositoryWiki, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: wiki_pb.RepositoryWiki) => void): grpc.ClientUnaryCall;
    public getWiki(request: wiki_pb.RepositoryQuery, callback: (error: grpc.ServiceError | null, response: wiki_pb.RepositoryWiki) => void): grpc.ClientUnaryCall;
    public getWiki(request: wiki_pb.RepositoryQuery, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: wiki_pb.RepositoryWiki) => void): grpc.ClientUnaryCall;
    public getWiki(request: wiki_pb.RepositoryQuery, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: wiki_pb.RepositoryWiki) => void): grpc.ClientUnaryCall;
    public updateWiki(request: wiki_pb.RepositoryWiki, callback: (error: grpc.ServiceError | null, response: wiki_pb.RepositoryWiki) => void): grpc.ClientUnaryCall;
    public updateWiki(request: wiki_pb.RepositoryWiki, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: wiki_pb.RepositoryWiki) => void): grpc.ClientUnaryCall;
    public updateWiki(request: wiki_pb.RepositoryWiki, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: wiki_pb.RepositoryWiki) => void): grpc.ClientUnaryCall;
    public deleteWiki(request: wiki_pb.RepositoryQuery, callback: (error: grpc.ServiceError | null, response: wiki_pb.RepositoryWiki) => void): grpc.ClientUnaryCall;
    public deleteWiki(request: wiki_pb.RepositoryQuery, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: wiki_pb.RepositoryWiki) => void): grpc.ClientUnaryCall;
    public deleteWiki(request: wiki_pb.RepositoryQuery, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: wiki_pb.RepositoryWiki) => void): grpc.ClientUnaryCall;
}
