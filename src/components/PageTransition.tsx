import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("fadeOut");
    }
  }, [location, displayLocation]);

  return (
    <>
      {transitionStage === "fadeOut" ? (
        <div className="animate-fade-in">
          <div className="container mx-auto px-4 py-8 space-y-8">
            <Skeleton className="h-12 w-3/4" />
            <Skeleton className="h-64 w-full" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Skeleton className="h-48 w-full" />
              <Skeleton className="h-48 w-full" />
              <Skeleton className="h-48 w-full" />
            </div>
            <Skeleton className="h-32 w-full" />
          </div>
        </div>
      ) : (
        <div
          className="animate-fade-in"
          onAnimationEnd={() => {
            if (transitionStage === "fadeIn" && location !== displayLocation) {
              setDisplayLocation(location);
            }
          }}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default PageTransition;
