import * as grpc from "@grpc/grpc-js"
import {IRepositoryServiceServer} from "~/proto/wiki_grpc_pb";
import {RepositoryQuery, RepositoryWiki} from "~/proto/wiki_pb";

export class WikiServer implements IRepositoryServiceServer {

    createWiki(
        call: grpc.ServerUnaryCall<RepositoryWiki, RepositoryWiki>,
        callback: grpc.sendUnaryData<RepositoryWiki>
    ) {

    }

    deleteWiki(
        call: grpc.ServerUnaryCall<RepositoryQuery, RepositoryWiki>,
        callback: grpc.sendUnaryData<RepositoryWiki>
    ) {

    }

    getWiki(
        call: grpc.ServerUnaryCall<RepositoryQuery, RepositoryWiki>,
        callback: grpc.sendUnaryData<RepositoryWiki>
    ) {

    }

    updateWiki(
        call: grpc.ServerUnaryCall<RepositoryWiki, RepositoryWiki>,
        callback: grpc.sendUnaryData<RepositoryWiki>
    ) {

    }

}