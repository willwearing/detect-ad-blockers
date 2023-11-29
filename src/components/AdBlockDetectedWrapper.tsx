import React from "react";
import { useNetworkRequestCheck } from "../hooks/useNetworkRequestCheck";

const AdBlockDetectedWrapper = ({
  children,
}: React.PropsWithChildren<object>) => {
  const adBlockDetected = useNetworkRequestCheck();

  return <>{adBlockDetected && children}</>;
};

export default AdBlockDetectedWrapper;
