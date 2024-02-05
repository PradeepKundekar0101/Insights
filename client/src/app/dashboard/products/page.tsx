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
    <section className="section-container">
       <h1 className="heading">Products Dashboard</h1>
       <div className="flex justify-between flex-wrap md:flex-nowrap mt-2 lg:mt-10">
        <div className="bg-slate-100  dark:bg-[#1a1c24] w-full md:w-[50%] mb-4 md:mb-0 px-2 rounded-md shadow-md mt-4 lg:mt-0 lg:mr-3">
        <h1 className=" text-slate-300 text-2xl font-semibold m-2 mb-0">Total Sales per Product</h1>
          <BarChart
            data={barChartData}
            title="Stocks"
            dataSetLabel="Stocks of each product"
          />
        </div>
      
        <div className="bg-slate-100  dark:bg-[#1a1c24] w-full md:w-[50%] mb-4 md:mb-0 px-2 rounded-md shadow-md mt-4 lg:mt-0">
          <h1 className="text-slate-300 text-2xl font-semibold m-2 mb-4">Top 5 Best selling products</h1>
          <table className=" w-full border-slate-600">
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

          <div className="gap-7 mt-4 grid sm:grid-cols-1 lg:grid-cols-2">
            <Card type="product" value={productData.totalProducts} label="Total Products" />
            <Card
              type="category"
              value={productData.totalCategories}
              label="Total Categories"
            />
              <Card
              type="rating"
              value={Number(String(productData.averageRating).slice(0,4))}
              label="Average Rating"
              symbol=" /5"
            />
          </div>

     
 


    </section>
  );
};
export default page;
