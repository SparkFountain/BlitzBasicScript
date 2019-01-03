export interface ApiCommand {
  id: number;
  name: string;
  deprecated: 0 | 1;
  category: number;
  sub_category: number;
}
