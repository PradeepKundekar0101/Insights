import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table"
import {Avatar, AvatarFallback, AvatarImage} from '../../../components/ui/avatar'
import ProductData from "../../../types/Analytics";
const fetchProductAnalytics =async ()=>{
  const response = await fetch("http://localhost:8000/api/v1/products/analytics",{next:{revalidate:0}});
  return await response.json();
}
 const page =async () => {

  const data = await fetchProductAnalytics();
  const productData:ProductData = data.data;
  const topSelling = productData.topFiveSellingProducts;

  return (

      <div className="mt-20">

      <h1>Top 5 Best selling products</h1>
      <table className="border-2 border-slate-600">
        <tr className="text-center">
          <th>Product</th>
          <th>Sales</th>
        </tr>
        
          {
            topSelling.map((e,ind)=>{return <tr className="hover:bg-slate-800" key={ind}>
                <td className="flex items-center"> <img src={e.thumbnail} alt="product" className="w-12 mr-2 rounded-full h-12" /> { e.title }</td>
                <td className="text-center"> {e.totalSales}</td>
              </tr>})
          }

      </table>

    </div>

  )
}
export default page