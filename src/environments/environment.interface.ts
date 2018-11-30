export interface Environment {
  production: boolean;
  serverFake?: ServerFakeType;
}

export type ServerFakeType = 'inMemory' | 'swagger';

export namespace ServerFakeTypeName {
  export const inMemory: ServerFakeType = 'inMemory';
  export const swagger: ServerFakeType = 'swagger';
}
