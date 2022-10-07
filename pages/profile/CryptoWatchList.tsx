
import { FC } from 'react'
import Carousel from '../../components/Carousel'
import { UserProps } from '../../helpers/Types'


const CryptoWatchList:FC<UserProps> = ({person}) => {

    

  

  return (
    <div>
    <div>
        <h1 className="text-center text-2xl">CryptoWatchList</h1>
    </div>
    {person[0]?.cryptoWatchList?
        <Carousel data={person[0]?.cryptoWatchList} num1={1} num2={2} num3={3} />
        :
        <p className="text-4xl text-center py-4 text-gray-600">Currently not watching any WatchList</p>
        }
</div>
  )
}

export default CryptoWatchList