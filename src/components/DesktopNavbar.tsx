import { BellIcon, HomeIcon, UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SignInButton, UserButton } from "@clerk/nextjs";
import ModeToggle from "./ModeToggle";
import { currentUser } from "@clerk/nextjs/server";
import { getUnreadCounts } from "@/actions/notification.action";

async function DesktopNavbar() {
  const user = await currentUser();
  console.log("user is here:", user);

  const countNotification = user ? await getUnreadCounts() : 0;

  return (
    <div className="hidden md:flex items-center space-x-4">
      <ModeToggle />


      <Button variant="ghost" className="flex items-center gap-2" asChild>
        <Link href="/">
          <HomeIcon className="w-4 h-4" />
          <span className="hidden lg:inline">Home</span>
        </Link>
      </Button>

      {user ? (
        <>
          {/* <Button variant="ghost" className="flex items-center gap-2" asChild>
            <Link href="/notifications">
              <BellIcon className="w-4 h-4" />
              <span className="hidden lg:inline">Notifications
              <span className="text-sm text-muted-foreground">0</span>
              </span>
            </Link>
          </Button> */}
          <Button variant="ghost" className="flex items-center gap-2" asChild>
            <Link href="/notifications">
              <div className="relative">
                <BellIcon className="w-4 h-4" />
                {countNotification > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {countNotification > 9 ? '9+' : countNotification}
                  </span>
                )}
              </div>
              <span className="hidden lg:inline">
                Notifications
              </span>
            </Link>
          </Button>
          {/* <Button variant="ghost" className="flex items-center gap-2" asChild>
            <Link href="/communities">
              <LibraryBig className="w-4 h-4" />
              <span className="hidden lg:inline">Communities</span>
            </Link>
          </Button> */}
          <Button variant="ghost" className="flex items-center gap-2" asChild>
            <Link
              href={`/profile/${
                user.username ?? user.emailAddresses[0].emailAddress.split("@")[0]
              }`}
            >
              <UserIcon className="w-4 h-4" />
              <span className="hidden lg:inline">Profile</span>
            </Link>
          </Button>
          <UserButton />
        </>
      ) : (
        <SignInButton mode="modal">
          <Button variant="default">Sign In</Button>
        </SignInButton>
      )}
    </div>
  );
}
export default DesktopNavbar;