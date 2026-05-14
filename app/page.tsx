import CoinOverview from "@/components/home/coin-overview";
import TrendingCoins from "@/components/home/trending-coins";
import { CoinOverviewFallback, TrendingCoinsFallback } from "@/components/fallback";
import { Suspense } from "react";

const Home = async () => {
  return (
    <>
      <main className="main-container">
        <section className="home-grid">
          <Suspense fallback={<CoinOverviewFallback />}>
            <CoinOverview />
          </Suspense>

          <Suspense fallback={<TrendingCoinsFallback />}>
            <TrendingCoins />
          </Suspense>
        </section>

        <section className="w-full mt-7 space-y-4">
          <p>Categories</p>
        </section>
      </main>
    </>
  );
};

export default Home;
