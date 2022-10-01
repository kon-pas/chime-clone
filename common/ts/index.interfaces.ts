export interface NavigationItem {
  readonly label: string;
  readonly path?: string;
  readonly subitems: {
    readonly label: string;
    readonly path?: string;
  }[];
}