// 샘플 표의 최애 데이터를 저장

import type { Oshi } from "../types/oshi";

// Oshi[] : 배열에 넣은 최애 한 명 한 명이 Oshi 형식을 따르는지 확인
export const sampleOshis: Oshi[] = [
    {
        id: 1,
        name: "히토리 시즈카",
        type: "VTUBER",
        groupName: "V-SEKAI",
        officialUrl: "https://www.nijisanji.jp/",
        memo: "게임 방송 기록용",
        createdAt: "2026-11-19T00:00:00.000Z",
    },

    {
        id: 2,
        name: "무라사메 유이나",
        type: "IDOL",
        groupName: "히토시즈쿠",
        memo: "라이브, 신곡 발매일 기록용",
        createdAt: "2026-11-19T00:00:00.000Z",
    },

    {
        id: 3,
        name: "아사조라 이로하",
        type: "CHARACTER",
        groupName: "나나이로 데이즈",
        memo: "기념일, 관련 콘텐츠 기록용",
        createdAt: "2026-11-19T00:00:00.000Z",
    },

    {
        id: 4,
        name: "테쵸쨩",
        type: "OTHER",
        groupName: "TSUKUE-TIME",
        memo: "굿즈 발매일, 기타 기록(문구류 브랜드 마스코트 느낌)",
        createdAt: "2026-11-19T00:00:00.000Z",
    }
];