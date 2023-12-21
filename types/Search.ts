export interface SearchData {
  keywords: string;
  where: string;
  dateRange: number;
  salaryRange: string;
}

export interface Search extends SearchData {
  id: `${string}-${string}-${string}-${string}-${string}`;
}
