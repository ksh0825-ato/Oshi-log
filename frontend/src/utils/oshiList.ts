import type { Oshi, OshiType } from "../types/oshi";

export function sortOshisByName(oshis: Oshi[]): Oshi[] {
    const copiedOshis = [...oshis];
    // [...oshis] : 같은 항목을 담은 새 배열을 만듦
    // .sort() : 호출한 배열 순서를 바꿈
    // => 복사본 정렬 시 원본 sampleOshis의 순서는 그대로 유지됨

    // (a, b) => {...} : .sort()가 두 항목 비교 시 호출하는 함수
    // a.name.localeCompare(b.name, "ko") : 이름을 한국어 정렬 기준으로 비교
    // : 결과가 음수 = a가 앞, 양수 = b가 앞, 0 = 정렬 기준상 같은 순서
    return copiedOshis.sort((a, b) => {
        return a.name.localeCompare(b.name, "ko");
    });
}

// .filter() : 배열에서 한 항목씩 꺼내 조건을 확인
export function filterOshisByType(oshis: Oshi[], type: OshiType): Oshi[] {
    return oshis.filter((oshi) => {
        return oshi.type === type;
    });
}
