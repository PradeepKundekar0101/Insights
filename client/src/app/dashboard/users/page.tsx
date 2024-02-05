import BarChart from "../../../components/graphs/ageBarChart";
import Card from "../../../components/ui/card";
import PieChart from "../../../components/graphs/pieChart";
import { UserData } from "../../../types/Analytics";
const fetchUserAnalytics = async () => {
  const response = await fetch("http://localhost:8000/api/v1/users/analytics");
  return await response.json();
};
export default async function Home() {
  const data = await fetchUserAnalytics();
  const usersData: UserData = data.data;
  return (
    <section className="section-container ">
      <h1 className="heading">Users Dashboard</h1>
      <div className="flex justify-between flex-wrap md:flex-nowrap mt-2 lg:mt-10  ">
        <div className="bg-slate-100  dark:bg-[#1a1c24] w-full md:w-[50%] mb-4 md:mb-0 px-2 rounded-md shadow-md">
          <h1 className=" text-slate-300 text-2xl font-semibold m-2 mb-0">
            Age Distribution
          </h1>
          <BarChart data={usersData.ageDistribution} />
        </div>
        <div className="bg-white dark:bg-[#1a1c24]  rounded-lg w-full md:w-[50%] lg:ml-2">
          <h1 className=" text-slate-300 text-2xl font-semibold m-2 mb-0">
            Gender Distribution
          </h1>
          <PieChart data={usersData.genderDistribution} />
        </div>
      </div>

      <div className="grid w-full my-4 gap-4 lg:gap-7 sm:grid-cols-1 lg:grid-cols-2">
        <Card type="user" value={usersData.totalUsers} label={"Total Users"} />
        <Card
          type="age"
          value={Number(String(usersData.averageAge).slice(0, 4))}
          label={"Average age"}
        />
      </div>
    </section>
  );
}
