import { sampleOshis } from "../data/sampleOshis";
import { filterOshisByType, sortOshisByName } from "../utils/oshiList";

// .map((oshi) => oshi.name) : 콘솔에서 순서 확인이 쉽도록 이름만 뽑는 코드
const originalNames = sampleOshis.map((oshi) => oshi.name);
const sortedOshis = sortOshisByName(sampleOshis);

const vtubers = filterOshisByType(sampleOshis, "VTUBER");
const idols = filterOshisByType(sampleOshis, "IDOL");
const characters = filterOshisByType(sampleOshis, "CHARACTER");
const others = filterOshisByType(sampleOshis, "OTHER");

console.log("정렬 전 원본: ", originalNames);
console.log("정렬 결과: ", sortedOshis.map((oshi) => oshi.name));
console.log("정렬 후 원본: ", sampleOshis.map((oshi) => oshi.name));

console.log("VTUBER만: ", vtubers.map((oshi) => oshi.name));
console.log("IDOL만: ", idols.map((oshi) => oshi.name));
console.log("CHARACTER만: ", characters.map((oshi) => oshi.name));

console.log("OTHER 필터: ", others.map((oshi) => oshi.name));