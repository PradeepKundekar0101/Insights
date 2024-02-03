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
}
  