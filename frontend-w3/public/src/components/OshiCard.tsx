import type { Oshi } from "../types/oshi";

export function OshiCard({ oshi }: { oshi: Oshi }) {
    return (
        <article>
            <h2>{oshi.name}</h2>
            <p>{oshi.type}</p>
            {oshi.groupName && <p>{oshi.groupName}</p>}
        </article>
    );
}