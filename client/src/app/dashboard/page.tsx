import Card from "../../components/ui/card"
import BarChart from "../../components/graphs/barChart"
import { SalesData } from "../../types/Analytics";
import MonthlySalesGraph from "@/components/graphs/monthlySales";
const fetchSalesAnalytics =async ()=>{
  const response = await fetch("http://localhost:8000/api/v1/orders/analytics",{next:{revalidate:0}});
  return await response.json();
}
const Page = async() =>{
    const data = await fetchSalesAnalytics();
    const salesData:SalesData = data.data;
    const barChartData = salesData.salesPerProduct.map((e)=>{return {label:e.title,value:e.totalSales}});
    const monthWiseSales = salesData.monthWiseSales;

    return   <div className="container max-w-6xl px-5 py-10  text-slate-800 ">
          <div>
        <MonthlySalesGraph data={monthWiseSales}/>
      </div>
      <h1 className="text-slate-800 dark:text-white font-bold text-3xl py-5">Sales Dashboard</h1>
      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
      <Card value={"$"+salesData.totalSales} label={"Total Sales"}/>
      <Card value={"$"+salesData.totalDiscountedSales} label={"Discounted Sales"}/>
      <Card value={""+salesData.totalOrders} label={"Total Orders"}/>
      <Card value={"$"+salesData.averageOrderValue} label={"Average Order Value"}/>
      <Card value={"$"+salesData.netSales} label={"Net Sales"}/>
      <Card value={String(salesData.conversionRate).slice(0,4)+" %"} label={"Conversion rate"}/>
    </div>
    
    <div className="bg-slate-100 dark:bg-gray-800 my-10 px-2 rounded-md shadow-md">
    <h1 className=" text-slate-800 dark:text-white font-bold text-3xl py-5">Total Sales per Product</h1>
    <BarChart data={barChartData} title="Sales" dataSetLabel="Total Sales per product"/>
    </div>

    </div>
  }
  export default Page