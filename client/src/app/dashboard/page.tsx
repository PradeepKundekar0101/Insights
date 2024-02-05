import Card from "../../components/ui/card";
import BarChart from "../../components/graphs/barChart";
import { SalesData } from "../../types/Analytics";
import MonthlySalesGraph from "@/components/graphs/monthlySales";
import { server } from "@/config/server";
const fetchSalesAnalytics = async () => {
  const response = await fetch(
    `${server.url}/api/v1/orders/analytics`,
    { next: { revalidate: 0 } }
  );
  return await response.json();
};
const Page = async () => {
  const data = await fetchSalesAnalytics();
  const salesData: SalesData = data.data;
  const barChartData = salesData.salesPerProduct.map((e) => {
    return { label: e.title, value: e.totalSales };
  });
  const monthWiseSales = salesData.monthWiseSales;

  return (
    <section className="section-container">
      <h1 className="heading">
        Sales Dashboard
      </h1>
      <div className="grid gap-7 mt-3 sm:grid-cols-2 lg:grid-cols-4">
        <Card
          type="money"
          value={salesData.totalSales}
          label={"Total Sales"}
          symbol="$"
        />
        <Card
          type="money"
          value={salesData.totalDiscountedSales}
          label={"Discounted Sales"}
          symbol="$"
        />
        <Card
          type="order"
          value={salesData.totalOrders}
          label={"Total Orders"}
        />
        <Card
          type="money"
          value={salesData.averageOrderValue}
          label={"Average Order Value"}
          symbol="$"
        />
        <Card
          type="money"
          value={salesData.netSales}
          label={"Net Sales"}
          symbol="$"
        />
        <Card
          type="conversion"
          value={Number(String(salesData.conversionRate).slice(0, 4))}
          symbol="%"
          label={"Conversion rate"}
        />
      </div>
      <div className="flex justify-between flex-wrap md:flex-nowrap lg:mt-10">
        <div className="bg-slate-100  dark:bg-[#1a1c24] w-full md:w-[50%] mb-4 md:mb-0 px-2 rounded-md shadow-md mt-4 lg:mt-0 lg:mr-3">
          <h1 className="text-slate-800 dark:text-slate-300 text-2xl font-semibold m-2 mb-0">
            Total Sales per Product
          </h1>
          <BarChart
            data={barChartData}
            title="Sales"
            dataSetLabel="Total Sales per product"
          />
        </div>
        <MonthlySalesGraph data={monthWiseSales} />
      </div>
    </section>
  );
};
export default Page;
