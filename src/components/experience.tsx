import type { ReactNode } from "react";

const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Maj",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

function formatDate(date: Date) {
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
}

export function Experience({
    children,
    company,
    title,
    from,
    to,
    className,
}: {
    children: ReactNode;
    company: string;
    title: string;
    from: Date;
    to?: Date;
    className?: string;
}) {
    return (
        <div className={className}>
            <div className="text-lg font-bold text-zinc-700">
                {company} – {title}
            </div>
            <div className="text-sm font-bold text-zinc-500 mb-2">
                {formatDate(from)} – {to && formatDate(to)}
            </div>
            <div className="text-sm">{children}</div>
        </div>
    );
}
