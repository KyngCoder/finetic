
import Carousel from '../../components/Carousel'
import { UserProps } from '../../helpers/Types'


const CryptoWatchList = ({user}:UserProps) => {

    

  

  return (
    <div>
    <div>
        <h1 className="text-center text-2xl">CryptoWatchList</h1>
    </div>
    <Carousel data={user[0]?.cryptoWatchList} num1={1} num2={2} num3={3} />
</div>
  )
}

export default CryptoWatchList