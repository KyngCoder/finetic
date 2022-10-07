
import Carousel from '../../components/Carousel'
import { UserProps } from '../../helpers/Types'


const StockWatchList = ({person}:UserProps) => {

    

  

  return (
    <div>
    <div>
        <h1 className="text-center text-2xl">StockWatchList</h1>
    </div>
    {person[0]?.stocks?
        <Carousel data={person[0]?.stockWatchList} num1={1} num2={2} num3={3} />
        :
        <p className="text-4xl text-center py-4 text-gray-600">Currently not watching any stocks</p>
        }
</div>
  )
}

export default StockWatchList