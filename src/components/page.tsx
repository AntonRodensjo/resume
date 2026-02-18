import type { ComponentProps } from "react";

export function Page({ className = "", children }: ComponentProps<"div">) {
    return (
        <div
            className={`w-[794px] h-[1123px] print:w-[210mm] print:h-[297mm] bg-white mx-auto print:m-0 print:shadow-none ${className}`}
        >
            {children}
        </div>
    );
}
