import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("@/features/home/HomePage"));

const PageLoader = () => (
  <div className="flex min-h-screen items-center justify-center bg-background">
    <div className="h-7 w-7 animate-spin rounded-full border-b-2 border-primary" />
  </div>
);

const Index = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <HomePage />
    </Suspense>
  );
};

export default Index;
