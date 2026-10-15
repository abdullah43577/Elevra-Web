export interface APIResponse<TData = unknown> {
  message: string;
  data: TData;
}

export interface Paginated<TItem> {
  data: TItem[];
  total: number;
  page: number;
  totalPages: number;
}
