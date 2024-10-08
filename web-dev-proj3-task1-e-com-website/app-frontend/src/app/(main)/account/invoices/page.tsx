import Invoice from "@/app/components/ui/invoices";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Invoices',
};

export default function Page() {
    return (
        <Invoice/>
    )
}