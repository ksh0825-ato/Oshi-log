import React, { useState } from "react";
import { OshiCard } from "./components/OshiCard";
import { sampleOshis } from "./data/sampleOshis";
import { filterOshisByType } from "./utils/oshiList";
import type { OshiType, Oshi } from "./types/oshi";

function App() {
  const [showVtubersOnly, setShowVtubersOnly] = useState(false);
  const [readOshiList, setReadOshiList] = useState(sampleOshis);
  const [error, setError] = useState<string | null>(null);

  let visibleOshis;

  if (showVtubersOnly == false) {
    visibleOshis = readOshiList;
  } else {
    visibleOshis = filterOshisByType(readOshiList, "VTUBER");
  }

  const [value, setValue] = useState("");
  const [oshiType, setOshiType] = useState<OshiType>("VTUBER");

  let typeOptions = [
    { value: "VTUBER", label: "VTuber"},
    { value: "IDOL", label: "아이돌"},
    { value: "CHARACTER", label: "캐릭터"},
    { value: "OTHER", label: "기타"}
  ];

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {currentTarget: { value }} = event;
    setValue(value);
  };

  const handleOshiType = (event: React.FormEvent<HTMLSelectElement>) => {
    setOshiType(event.currentTarget.value as OshiType);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 새로고침 방지

    const name = value.trim();

    if ( name === "" ) {
      setError("이름을 입력해 주세요.");
      return;
    }

    const createdAt = new Date().toISOString();

    setReadOshiList((prevList) => {
     const maxId = prevList.reduce((max, oshi) => Math.max(max, oshi.id), 0);

     const newOshi: Oshi = {
      id: maxId + 1,
      name,
      type: oshiType,
      createdAt
     };

     return [...prevList, newOshi];
  });

    setValue(""); // 등록 성공 후 이름 입력란 비우기
    setError(null);
  };

  return (
    <>
    <div>
        {visibleOshis.map((Oshi) => <OshiCard key={Oshi.id} oshi={Oshi}/>)}
        <br></br>
      <button onClick={() => setShowVtubersOnly(false)}>전체</button>
      <button onClick={() => setShowVtubersOnly(true)}>VTuber</button>
    </div>
    
    <br></br>
    
    <div>
      <form onSubmit={onSubmit}>
        <input
        type="text"
        onChange={onChange}
        placeholder="입력"
        value={value}
        />

        <select onChange={handleOshiType} value={oshiType}>
          {typeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <button type="submit">등록</button>
        {error && <p role="alert">{error}</p>}
      </form>
    </div>
    </>
  );
}

export default App;