// package: team.hypox.proto
// file: wiki.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class RepositoryWiki extends jspb.Message { 
    getName(): string;
    setName(value: string): RepositoryWiki;
    getDescription(): string;
    setDescription(value: string): RepositoryWiki;
    getGitUri(): string;
    setGitUri(value: string): RepositoryWiki;
    clearAuthorsGitUriList(): void;
    getAuthorsGitUriList(): Array<string>;
    setAuthorsGitUriList(value: Array<string>): RepositoryWiki;
    addAuthorsGitUri(value: string, index?: number): string;
    clearPagesList(): void;
    getPagesList(): Array<RepositoryWiki.WikiPage>;
    setPagesList(value: Array<RepositoryWiki.WikiPage>): RepositoryWiki;
    addPages(value?: RepositoryWiki.WikiPage, index?: number): RepositoryWiki.WikiPage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RepositoryWiki.AsObject;
    static toObject(includeInstance: boolean, msg: RepositoryWiki): RepositoryWiki.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RepositoryWiki, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RepositoryWiki;
    static deserializeBinaryFromReader(message: RepositoryWiki, reader: jspb.BinaryReader): RepositoryWiki;
}

export namespace RepositoryWiki {
    export type AsObject = {
        name: string,
        description: string,
        gitUri: string,
        authorsGitUriList: Array<string>,
        pagesList: Array<RepositoryWiki.WikiPage.AsObject>,
    }


    export class WikiPage extends jspb.Message { 

        hasIconUrl(): boolean;
        clearIconUrl(): void;
        getIconUrl(): string | undefined;
        setIconUrl(value: string): WikiPage;
        getTopic(): string;
        setTopic(value: string): WikiPage;
        getTitle(): string;
        setTitle(value: string): WikiPage;
        clearAuthorsGitUriList(): void;
        getAuthorsGitUriList(): Array<string>;
        setAuthorsGitUriList(value: Array<string>): WikiPage;
        addAuthorsGitUri(value: string, index?: number): string;

        hasDescription(): boolean;
        clearDescription(): void;
        getDescription(): string | undefined;
        setDescription(value: string): WikiPage;
        getBody(): string;
        setBody(value: string): WikiPage;
        getTimeRead(): number;
        setTimeRead(value: number): WikiPage;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): WikiPage.AsObject;
        static toObject(includeInstance: boolean, msg: WikiPage): WikiPage.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: WikiPage, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): WikiPage;
        static deserializeBinaryFromReader(message: WikiPage, reader: jspb.BinaryReader): WikiPage;
    }

    export namespace WikiPage {
        export type AsObject = {
            iconUrl?: string,
            topic: string,
            title: string,
            authorsGitUriList: Array<string>,
            description?: string,
            body: string,
            timeRead: number,
        }
    }

}

export class RepositoryQuery extends jspb.Message { 
    getName(): string;
    setName(value: string): RepositoryQuery;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RepositoryQuery.AsObject;
    static toObject(includeInstance: boolean, msg: RepositoryQuery): RepositoryQuery.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RepositoryQuery, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RepositoryQuery;
    static deserializeBinaryFromReader(message: RepositoryQuery, reader: jspb.BinaryReader): RepositoryQuery;
}

export namespace RepositoryQuery {
    export type AsObject = {
        name: string,
    }
}
