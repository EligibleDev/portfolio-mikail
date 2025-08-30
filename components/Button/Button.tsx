import { ReactNode } from "react";
import { Lightbulb } from "lucide-react";

const Button = ({ children }: { children: ReactNode }) => {
    return (
        <button className="bg-primary-red font-rubik group relative flex cursor-pointer items-center gap-1 overflow-hidden rounded-full px-8 py-4 font-medium capitalize transition-all duration-400 hover:-translate-y-0.5 hover:transition-all">
            <Lightbulb className="absolute -left-1/4 z-[9] transition-all duration-400 group-hover:left-4" />

            <span className="relative z-[1] -translate-x-3 transition-all duration-400 group-hover:translate-x-3">
                {children}
            </span>

            <span className="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 transition-all duration-400 group-hover:h-[220px] group-hover:w-[220px] group-hover:opacity-100"></span>

            <Lightbulb className="absolute right-4 z-[9] w-6 transition-all duration-400 group-hover:-right-1/4" />
        </button>
    );
};

export default Button;
