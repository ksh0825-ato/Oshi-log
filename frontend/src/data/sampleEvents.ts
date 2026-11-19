import type { OshiEvent } from "../types/oshiEvent";

const sampleEvents: OshiEvent[] = [
    {
        id: 1,
        oshiId: 1,
        title: "시즈카 음주 잡담 방송",
        eventType: "STREAM",
        status: "PLANNED",
        startAt: "2027-01-04T20:00:00+09:00",
        contentUrl: "https://www.youtube.com/live/0Cu-EyL0F1g?si=kfGr--ffA7WbVOu0",
    },

    {
        id: 2,
        oshiId: 2,
        title: "히토시즈쿠 4th 라이브",
        eventType: "LIVE",
        status: "PLANNED",
        startAt: "2027-01-16T16:30:00+09:00",
        endAt: "2027-01-17",
        contentUrl: "https://idolmaster-official.jp/va-liv/event/3rd_live",
    },

    {
        id: 3,
        oshiId: 2,
        title: "유이나 3차 솔로곡 발매",
        eventType: "RELEASE",
        status: "PLANNED",
        startAt: "2026-12-25T14:00:00+09:00",
    },    

    {
        id: 4,
        oshiId: 3,
        title: "이로하 생일",
        eventType: "ANNIVERSARY",
        status: "COMPLETED",
        startAt: "2026-11-18",
        description: "파티룸 빌리는 게 힘들었음.. 주문 제작 케이크는 내년에도 똑같은 데 시켜야겠다."
    },

    {
        id: 5,
        oshiId: 4,
        title: "테쵸쨩 A현 콜라보 굿즈",
        eventType: "GOODS",
        status: "MISSED",
        startAt: "2026-11-02T12:00:00+09:00",
        endAt: "2026-11-09T23:59:00+09:00",
        description: "주문해야겠다는 생각만 하다가 놓쳤다ㅠㅠㅠㅠ"
    },

    {
        id: 6,
        oshiId: 4,
        title: "테쵸쨩 기타 일정",
        eventType: "OTHER",
        status: "COMPLETED",
        startAt: "2026-11-07",
        endAt: "2026-11-15"
    }
]