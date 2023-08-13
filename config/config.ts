interface SocketServerConfig {
  host: string;
  port: number;
}

interface CryptocompareConfig {
  api_key: string;
  base_currency: string;
}

interface Config {
  socketServer: SocketServerConfig;
  cryptocompare: CryptocompareConfig;
}

const config: Config = {
  socketServer: {
    host: "localhost",
    port: 3002,
  },
  cryptocompare: {
    api_key: "61bdf2d063fbe77a7c57d2e620c5017be44995157b46da53b90c83299807b7d1",
    base_currency: "USD",
  },
};

export default config;
