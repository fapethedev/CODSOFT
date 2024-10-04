import logo from "../../../../public/logo.png";
import Link from "next/link";
import Image from "next/image";


export default function Logo({size}: {size: string}) {
    return (
        <div className="flex justify-center items-center">
            <Link href="/">
                <Image className={size.concat(` w-auto mx-auto`)} src={logo} alt="logo"/>
            </Link>
        </div>
    )
}