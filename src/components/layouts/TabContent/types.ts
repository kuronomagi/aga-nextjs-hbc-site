export type TabHeadDataType = { text: string; linkPath: string; label: string }[];

export type TabNavDataType = { text: string; path: string; label: string }[];

export type TabSideNavDataType = {
  title: string;
  nav: TabNavDataType;
};
