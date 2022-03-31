export interface QueryPaginationArgs {
  limit: number;
  offset: number;
}

export interface QueryPaginationOutput {
  total: number;
  rows: number;
  remaining: number;
}
