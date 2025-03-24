import { cn } from "@/lib/utils"; // Utility for merging classes (optional)

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function SearchBar({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "px-3 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
        className
      )}
      {...props}
    />
  );
}
