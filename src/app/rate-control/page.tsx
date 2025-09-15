import { RateControl } from "@/components/usage/rateLimiting/RateControl";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "rateControl",
};

const RateControlPage = () => {
  return (
    <>
      <RateControl />
    </>
  );
};

export default RateControlPage;
