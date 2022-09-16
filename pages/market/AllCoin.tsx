import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from './Table';

const AllCoin = () => {

    const [allCoins, setAllCoins] = useState([
        {
          id: "",
          symbol: "",
          name: "",
          image: "",
          current_price: 0,
          market_cap: 0,
          price_change_percentage_24h: 0,
          market_cap_change_24h: 0,
        },
      ]);
    
      const getCoins = async () => {
        const data = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        );
    
        setAllCoins(data.data);
      };
    
      useEffect(() => {
        getCoins();
      }, []);

      console.log(allCoins)

  return (
   <Table data={allCoins} />
  )
}

export default AllCoin