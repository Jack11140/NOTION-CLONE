import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
    subsets: ["latin"],
    weight: ["400", "600"],
});

const Logo = () => {
    return (
        <div className="items-center hidden gap-x-2 md:flex dark:bg-[#1f1f1f]">
            <Image src="/logo.svg" width="40" height="40" alt="Logo" className="dark:hidden" />
            <Image src="/logo-dark.svg" width="40" height="40" alt="Logo" className="hidden dark:block" />
            <p className={cn("font-semibold", font.className)}>Notion</p>
        </div>
    );
};

export default Logo;