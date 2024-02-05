
import BarChart from "../../../components/graphs/ageBarChart";
import Card from "../../../components/ui/card";
import PieChart from "../../../components/graphs/pieChart";
import { UserData } from "../../../types/Analytics";
const fetchUserAnalytics =async ()=>{
  const response = await fetch("http://localhost:8000/api/v1/users/analytics");
  return await response.json();
}
export default async function Home() {
  const data = await fetchUserAnalytics();
  const usersData:UserData = data.data;
  return (
    <div className="flex flex-col  dark:bg-gray-900">
        <h1 className="text-white font-bold text-3xl py-5">Users Dashboard</h1>
        <div className="w-[400px] md:h-96 md:w-[800px] mx-auto">
          <BarChart data={usersData.ageDistribution} />
        </div>

        <div className="flex items-center mx-[10%] my-10 flex-wrap  ">
          <div className="container max-w-6xl px-5 py-10 dark:bg-gray-900">
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-1">
              <Card value={usersData.totalUsers+""} label={"Total Users"}/>
              <Card value={String(usersData.averageAge).slice(0,4)} label={"Average age"}/>
            </div>
          </div>
          <div className="sm:mx-auto sm:w-full" style={{ width: '300px', height: '300px' }}>
              <PieChart data={usersData.genderDistribution} />
            </div>
        </div>
      
        
    </div>
  );
}