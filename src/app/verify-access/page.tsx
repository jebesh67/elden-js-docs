import { VerifyAccess } from "@/components/usage/tokenVerification/VerifyAccess";
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
