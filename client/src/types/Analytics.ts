export interface SalesData {
      totalSales: number;
      totalDiscountedSales: number;
      totalOrders: number;
      averageOrderValue: number;
      conversionRate: number;
      salesPerProduct: Array<{
        _id: number;
        totalSales: number;
        title: string;
      }>;
      netSales: number;
      monthWiseSales:Array<{
        _id:number,
        sales:{k:number,v:number}[],
      }>
}

interface GenderDistribution {
  _id: "female" | "male";
  count: number;
}


export interface UserData {
  totalUsers: number;
  genderDistribution: GenderDistribution[];
  ageDistribution: {
    _id: string;
    count: number;
  }[],
  averageAge: number;
}


interface TopSellingProduct {
  _id: number;
  totalSales: number;
  thumbnail:string;
  title: string;
}

interface ProductByStock {
  _id: string;
  title: string;
  stock: number;
  thumbnail: string;
}

interface ProductData {
  topFiveSellingProducts: TopSellingProduct[];
  productsByStocks: ProductByStock[];
  totalProducts: number;
  totalCategories: number;
  averageRating:number;
}

export default ProductData;
