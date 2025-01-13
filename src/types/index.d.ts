export type TradeOrder = {
  pair: string;
  orderType: string;
  price: string;
  filledAmount: string;
  dateTime: string;
  status: boolean;
  perpetual: boolean;
};
