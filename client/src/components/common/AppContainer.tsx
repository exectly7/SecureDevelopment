import "./AppContainer.css";
import type {ReactNode} from "react";

export default function AppContainer({ children }: { children: ReactNode }) {
    return (
        <main className="app-container">
            { children }
        </main>
    )
}