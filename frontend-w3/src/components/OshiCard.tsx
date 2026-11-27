import type { Oshi } from "../types/oshi";

interface OshiCardProps {
    id: number;
    oshi: Oshi;
    onDelete: (id: number) => void;
}

export function OshiCard({ id, oshi, onDelete }: OshiCardProps) {
    return (
        <article>
            <h2>{oshi.name}</h2>
            <p>{oshi.type}</p>
            {oshi.groupName && <p>{oshi.groupName}</p>}
            <button onClick={() => onDelete(id)}>삭제</button>
        </article>
    );
}