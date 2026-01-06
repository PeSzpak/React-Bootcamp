import type {ReactNode} from "react";

export function Title({ children }: { children: ReactNode }) {
    return (
        <>
        <h1 className="text-3xl text-slate-100 font-bold text-center my-6">
            {children}
        </h1>
        </>
    )
}