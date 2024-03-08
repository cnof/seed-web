declare namespace CommonAPI {
  interface Result {
    success?: boolean;
    code?: string;
    msg?: string;
  }

  interface Page {
    currentPage?: number;
    pageSize?: number;
  }

  interface Pagination {
    page?: number;
    pageSize?: number;
    totalCount?: number;
  }
}
