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

export function CategoriesFallback() {
  const skeletonColumns = [
    {
      header: "Category",
      cellClassName: "category-cell",
      cell: () => (
        <div className="category-skeleton animate-pulse bg-dark-700 rounded-md" />
      ),
    },
    {
      header: "Top Gainers",
      cellClassName: "top-gainers-cell",
      cell: () => (
        <div className="flex gap-1">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="coin-skeleton animate-pulse bg-dark-700 rounded-full"
            />
          ))}
        </div>
      ),
    },
    {
      header: "24h Change",
      cellClassName: "change-header-cell",
      cell: () => (
        <div className="value-skeleton-sm animate-pulse bg-dark-700 rounded-md" />
      ),
    },
    {
      header: "Market Cap",
      cellClassName: "market-cap-cell",
      cell: () => (
        <div className="value-skeleton-lg animate-pulse bg-dark-700 rounded-md" />
      ),
    },
    {
      header: "24h Volume",
      cellClassName: "volume-cell",
      cell: () => (
        <div className="value-skeleton-md animate-pulse bg-dark-700 rounded-md" />
      ),
    },
  ];

  const skeletonData = Array.from({ length: 10 }, (_, i) => ({ id: i }));

  return (
    <div id="categories-fallback">
      <h4>Top Categories</h4>
      <DataTable
        columns={skeletonColumns}
        data={skeletonData}
        rowKey={(item) => item.id}
        tableClassName="mt-3"
      />
    </div>
  );
}
