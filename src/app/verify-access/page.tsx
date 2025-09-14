import { VerifyAccess } from "@/components/usage/VerifyAccess";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "verifyAccess",
};

const VerifyAccessPage = () => {
  return (
    <div>
      <VerifyAccess />
    </div>
  );
};

export default VerifyAccessPage;
