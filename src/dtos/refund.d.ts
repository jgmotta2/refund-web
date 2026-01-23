type RefundAPIresponse = {
  id: string;
  name: string;
  userId: string;
  category: CategoriesAPIenum;
  filename: string;
  amount: number;
  user: {
    name: string;
  };
};

type RefundsPaginationAPIresponse = {
  refunds: RefundAPIresponse[];
  pagination: {
    page: number;
    perPage: number;
    totalRecords: number;
    totalPages: number;
  };
};
