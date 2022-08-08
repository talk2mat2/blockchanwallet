import axios from "axios";

const baseUrl = "https://api.coingecko.com/api/v3";

export default new (class Api {
  async fetchMarkets() {
    return await axios
      .get(
        baseUrl +
          "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => res?.data)
      .catch((er) => {
        throw er;
      });
  }
})();
