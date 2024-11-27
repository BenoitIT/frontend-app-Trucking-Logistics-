export interface TabularPageProps {
    dataSourceEndpoint?: string;
    headers: {
      header: string;
      field: string;
      hidden?: boolean;
    }[];
    action?: {
      icon: React.ReactNode | JSX.Element;
      Click: (id: number) => Promise<any>;
      name?: string;
    }[];
    showTimerRangeFilters?: boolean;
  }