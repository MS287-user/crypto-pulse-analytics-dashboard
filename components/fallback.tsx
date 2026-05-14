import DataTable from "@/components/data-table";

export function CoinOverviewFallback() {
  return (
    <div id="coin-overview-fallback">
      <div className="header">
        <div className="header-image animate-pulse bg-dark-700 rounded-full" />
        <div className="info">
          <div className="header-line-sm animate-pulse bg-dark-700 rounded-md" />
          <div className="header-line-lg animate-pulse bg-dark-700 rounded-md" />
        </div>
      </div>
      <div className="chart">
        <div className="chart-skeleton animate-pulse bg-dark-700" />
      </div>
    </div>
  );
}

export function TrendingCoinsFallback() {
  const skeletonColumns = [
    {
      header: "Name",
      cellClassName: "name-cell",
      cell: () => (
        <div className="name-link">
          <div className="name-image animate-pulse bg-dark-700 rounded-full" />
          <div className="name-line animate-pulse bg-dark-700 rounded-md" />
        </div>
      ),
    },
    {
      header: "24h Change",
      cellClassName: "name-cell",
      cell: () => (
        <div className="h-4 w-16 animate-pulse bg-dark-700 rounded-md" />
      ),
    },
    {
      header: "Price",
      cellClassName: "name-cell",
      cell: () => (
        <div className="h-4 w-20 animate-pulse bg-dark-700 rounded-md" />
      ),
    },
  ];

  const skeletonData = Array.from({ length: 4 }, (_, i) => ({ id: i }));

  return (
    <div id="trending-coins-fallback">
      <h4>Trending Coins</h4>
      <DataTable
        data={skeletonData}
        columns={skeletonColumns}
        rowKey={(item) => item.id}
        tableClassName="trending-coins-table"
      />
    </div>
  );
}
