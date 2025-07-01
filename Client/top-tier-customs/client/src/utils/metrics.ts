// // metrics.utils.ts

// export interface DateStampedItem {
//   createdAt: string;
// }

// export interface Product extends DateStampedItem {
//   price: number;
//   quantity: number;
// }

// export interface Service extends DateStampedItem {
//   price: number;
//   discount?: number;
//   deposit?: number;
// }

// // Format month as YYYY-MM
// const formatMonth = (dateString: string): string => {
//   const date = new Date(dateString);
//   return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
//     2,
//     "0"
//   )}`;
// };

// // 1. Product/Service growth over time (count per month)
// export const getMonthlyGrowthData = (items: DateStampedItem[]) => {
//   const monthlyMap = new Map<string, number>();

//   items.forEach(({ createdAt }) => {
//     const key = formatMonth(createdAt);
//     monthlyMap.set(key, (monthlyMap.get(key) || 0) + 1);
//   });

//   return Array.from(monthlyMap.entries()).map(([name, value]) => ({
//     name,
//     value,
//   }));
// };

// // 2. Inventory value over time (products only)
// export const getMonthlyInventoryValue = (products: Product[]) => {
//   const inventoryMap = new Map<string, number>();

//   products.forEach(({ createdAt, price, quantity }) => {
//     const key = formatMonth(createdAt);
//     inventoryMap.set(key, (inventoryMap.get(key) || 0) + price * quantity);
//   });

//   return Array.from(inventoryMap.entries()).map(([name, value]) => ({
//     name,
//     value,
//   }));
// };

// // 3. Service revenue potential over time (services only)
// export const getMonthlyServiceRevenue = (services: Service[]) => {
//   const revenueMap = new Map<string, number>();

//   services.forEach(({ createdAt, price, discount = 0, deposit = 0 }) => {
//     const key = formatMonth(createdAt);
//     const total = price - discount + deposit;
//     revenueMap.set(key, (revenueMap.get(key) || 0) + total);
//   });

//   return Array.from(revenueMap.entries()).map(([name, value]) => ({
//     name,
//     value,
//   }));
// };

// // 4. Cumulative growth (running total of items over time)
// export const getCumulativeGrowth = (items: DateStampedItem[]) => {
//   const monthlyMap: Record<string, number> = {};

//   items.forEach(({ createdAt }) => {
//     const key = formatMonth(createdAt);
//     monthlyMap[key] = (monthlyMap[key] || 0) + 1;
//   });

//   const sortedKeys = Object.keys(monthlyMap).sort();
//   let cumulative = 0;
//   return sortedKeys.map((key) => {
//     cumulative += monthlyMap[key];
//     return { name: key, value: cumulative };
//   });
// };

// metrics.utils.ts

export interface DateStampedItem {
  createdAt: string;
}

export interface Product extends DateStampedItem {
  price: number;
  quantity: number;
}

export interface Service extends DateStampedItem {
  price: number;
  discount?: number;
  deposit?: number;
}

// Format key for grouping by day, week, or month
const formatByTimeSpan = (
  date: Date,
  span: "day" | "week" | "month"
): string => {
  switch (span) {
    case "day":
      return date.toISOString().split("T")[0]; // e.g. 2025-06-21
    case "week": {
      const year = date.getFullYear();
      const firstJan = new Date(year, 0, 1);
      const days = Math.floor(
        (date.getTime() - firstJan.getTime()) / (24 * 60 * 60 * 1000)
      );
      const week = Math.ceil((days + firstJan.getDay() + 1) / 7);
      return `${year}-W${String(week).padStart(2, "0")}`; // e.g. 2025-W25
    }
    case "month":
    default:
      return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
        2,
        "0"
      )}`; // e.g. 2025-06
  }
};

// 1. Generic item growth over time
export const getGrowthData = (
  items: DateStampedItem[],
  span: "day" | "week" | "month" = "month"
) => {
  const map = new Map<string, number>();

  items.forEach(({ createdAt }) => {
    const key = formatByTimeSpan(new Date(createdAt), span);
    map.set(key, (map.get(key) || 0) + 1);
  });

  return Array.from(map.entries()).map(([name, value]) => ({ name, value }));
};

// 2. Inventory value by time (products only)
export const getInventoryValueData = (
  products: Product[],
  span: "day" | "week" | "month" = "month"
) => {
  const map = new Map<string, number>();

  products.forEach(({ createdAt, price, quantity }) => {
    const key = formatByTimeSpan(new Date(createdAt), span);
    map.set(key, (map.get(key) || 0) + price * quantity);
  });

  return Array.from(map.entries()).map(([name, value]) => ({ name, value }));
};

// 3. Service revenue potential over time
export const getServiceRevenueData = (
  services: Service[],
  span: "day" | "week" | "month" = "month"
) => {
  const map = new Map<string, number>();

  services.forEach(({ createdAt, price, discount = 0, deposit = 0 }) => {
    const key = formatByTimeSpan(new Date(createdAt), span);
    const total = price - discount + deposit;
    map.set(key, (map.get(key) || 0) + total);
  });

  return Array.from(map.entries()).map(([name, value]) => ({ name, value }));
};

// 4. Cumulative growth (running total)
export const getCumulativeGrowthData = (
  items: DateStampedItem[],
  span: "day" | "week" | "month" = "month"
) => {
  const map: Record<string, number> = {};

  items.forEach(({ createdAt }) => {
    const key = formatByTimeSpan(new Date(createdAt), span);
    map[key] = (map[key] || 0) + 1;
  });

  const sortedKeys = Object.keys(map).sort();
  let cumulative = 0;
  return sortedKeys.map((key) => {
    cumulative += map[key];
    return { name: key, value: cumulative };
  });
};
