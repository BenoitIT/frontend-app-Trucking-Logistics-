export interface TabularPageProps {
    dataSourceEndpoint?: string;
    headers: {
      header: string;
      field: string;
      hidden?: boolean;
    }[];
    addnewroute?:string;
    action?: {
      icon: React.ReactNode | JSX.Element;
      Click: (id: number) => Promise<any>;
      name?: string;
    }[];
    showTimerRangeFilters?: boolean;
  }