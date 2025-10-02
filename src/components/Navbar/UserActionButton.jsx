import { authUserSession } from "@/libs/auth-libs";
import Link from "next/link";

const UserActionButton = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="flex gap-2 justify-between">
      {
        user ? <Link href="/users/dashboard" className="signin">Dashboard</Link> : null
      }
      <Link href={actionURL} className="signin bg-dark text-accent inline-block">
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserActionButton;
