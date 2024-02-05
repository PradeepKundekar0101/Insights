import ProductData from "../../../types/Analytics";
import Card from "../../../components/ui/card";
import BarChart from "../../../components/graphs/barChart";
const fetchProductAnalytics = async () => {
  const response = await fetch(
    "http://localhost:8000/api/v1/products/analytics",
    { next: { revalidate: 0 } }
  );
  return await response.json();
};
const page = async () => {
  const data = await fetchProductAnalytics();
  const productData: ProductData = data.data;
  const topSelling = productData.topFiveSellingProducts;
  const barChartData = productData.productsByStocks.map((e) => {
    return { label: e.title, value: e.stock };
  });
  return (
    <section className="container mt-20   flex flex-col">
       <h1 className="text-slate-800 dark:text-white font-bold text-3xl py-5">Products Dashboard</h1>
       <div className="h-auto w-full mx-auto px-10 dark:bg-gray-800 flex justify-center flex-col rounded-lg mb-4">
       <h1 className=" text-slate-800 dark:text-slate-300 font-bold text-2xl py-5">Total Sales per Product</h1>
        <BarChart
          data={barChartData}
          title="Stocks"
          dataSetLabel="Stocks of each product"
        />
      </div>

      <div className=" items-start flex justify-between">
          <div className="flex flex-col gap-7  flex-1 mr-2 sm:grid-cols-2 lg:grid-cols-2">
            <Card value={productData.totalProducts + ""} label="Total Products" />
            <Card
              value={productData.totalCategories + ""}
              label="Total Categories"
            />
              <Card
              value={String(productData.averageRating).slice(0,4)+"/5"}
              label="Average Rating"
            />
          </div>

      <div className="dark:bg-gray-800 p-5 rounded-lg">
        <h1 className="text-lg font-bold py-4">Top 5 Best selling products</h1>
        <table className=" border-slate-600">
          {topSelling.map((e, ind) => {
            return (
              <tr className=" rounded-full flex justify-between items-center hover:bg-slate-800 " key={ind}>
                <td className="mb-3 flex items-center mr-4  ">
                  {" "}
                  <img
                    src={e.thumbnail}
                    alt="product"
                    className="w-12 mr-2 rounded-full h-12"
                  />{" "}
                  {e.title}
                </td>
                <td className="text-center font-bold mb-3"> {e.totalSales}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>


    </section>
  );
};
export default page;
