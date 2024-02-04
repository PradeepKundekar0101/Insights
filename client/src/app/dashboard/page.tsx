import Card from "../../components/ui/card"
import BarChart from "../../components/ui/barChart"
import { SalesData } from "../../types/Analytics";

const fetchSalesAnalytics =async ()=>{
  const response = await fetch("http://localhost:8000/api/v1/orders/analytics");
  return await response.json();
}
const Page = async() =>{
    const data = await fetchSalesAnalytics();
    const salesData:SalesData = data.data;
    return   <div className="container h-screen max-w-6xl px-5 py-10 dark:bg-gray-900 overflow-y-scroll">
      <h1 className="text-white font-bold text-3xl py-5">Sales Dashboard</h1>
    <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
      <Card value={"$"+salesData.totalSales} label={"Total Sales"}/>
      <Card value={"$"+salesData.totalDiscountedSales} label={"Discounted Sales"}/>
      <Card value={""+salesData.totalOrders} label={"Total Orders"}/>
      <Card value={"$"+salesData.averageOrderValue} label={"Average Order Value"}/>
      <Card value={"$"+salesData.netSales} label={"Net Sales"}/>
      <Card value={String(salesData.conversionRate).slice(0,4)+" %"} label={"Conversion rate"}/>
    </div>
    <BarChart data={salesData.salesPerProduct}/>
    </div>
  }
  export default Page