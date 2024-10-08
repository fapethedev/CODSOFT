import ProfileSettings from "@/app/components/ui/profile-settings";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Account',
};

export default function Page() {
    return (
        <ProfileSettings/>
    )
}