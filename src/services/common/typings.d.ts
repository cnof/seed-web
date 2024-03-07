declare namespace CommonAPI {
  interface Result {
    success?: boolean;
    code?: string;
    msg?: string;
  }

  interface Pagination {
    page?: number;
    pageSize?: number;
    totalCount?: number;
  }
}
