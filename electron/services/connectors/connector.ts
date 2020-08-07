interface ConnectorConstructor {
  new (...args: any[]): Connector;
}

export interface Connector {
  fetch: (...args: any[]) => Promise<any>;
  //TODO: implant  delete, update and create method should be implanted
}

function createConnector(ctor: ConnectorConstructor): Connector {
  return new ctor();
}
