export function Pill({
    text,
    color,
    className,
}: {
    text: string;
    color?: string;
    className?: string;
}) {
    return (
        <div
            className={`${className} px-2 py-1 text-white rounded-full ${
                color ? color : "bg-green-600"
            }`}
        >
            {text}
        </div>
    );
}
