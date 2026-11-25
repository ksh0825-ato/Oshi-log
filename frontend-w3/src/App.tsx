import './App.css'
import { sampleOshis } from './data/sampleOshis';
import { OshiCard } from './components/OshiCard';
import { filterOshisByType } from './utils/oshiList';
import { useState } from 'react';
import type { Oshi, OshiType } from './types/oshi';

function App() {
  // useState : React가 화면을 다시 그릴 때도 값을 기억하게 함

  const [oshis, setOshis] = useState<Oshi[]>(sampleOshis); // 현재 최애 목록(처음에는 샘플이, 등록 시에는 setOshis로 목록 갱신)
  // name, type = 현재 폼에 입력된 값
  const [name, setName] = useState(""); // 이름 : 빈칸으로 시작
  const [type, setType] = useState<OshiType>("VTUBER"); // 유형 : VTUBER로 시작
  const [error, setError] = useState(""); // 이름 미입력 후 등록 시 보여줄 안내 문구

  const [showVtubersOnly, setShowVtubersOnly] = useState(false);
  // 처음에는 showVtubersOnly = false여서 전체 목록 표시됨
  // => VTuber 버튼 클릭 시) 상태가 true로 바뀌면서 App 다시 실행됨

  function addOshi() {
    const trimmedName = name.trim(); // 공백 제거

    if (trimmedName === "") {
      setError("최애 이름을 입력해 주세요.");
      return;
    }

    const createdAt = new Date().toISOString();

    setOshis((prev) => { // prev : 갱신 직전의 최애 목록
      const maxId = prev.reduce((max, oshi) => Math.max(max, oshi.id), 0);
    
      const newOshi: Oshi = {
        id: maxId + 1,
        name: trimmedName,
        type,
        createdAt
      };

      return [...prev, newOshi];
    });

    setName("");
    setError("");
    setShowVtubersOnly(false);
  }
  
  const visibleOshis = showVtubersOnly
    ? filterOshisByType(oshis, "VTUBER")
    : oshis;

  return (
  <>
  <form
      onSubmit={(event) => {
        event.preventDefault(); // 브라우저의 기본 제출 동작 막음
        addOshi(); // 목록 갱신
      } }
    >
      <label>
        최애 이름
        <input
          value={name} // 현재 상태 화면에 표시
          onChange={(event) => setName(event.target.value)} // 타이핑한 값 다시 상태에 저장
        />
      </label>

      <label>
        유형
        <select
          value={type}
          onChange={(event) => setType(event.target.value as OshiType)}
        >
          <option value={"VTUBER"}>VTuber</option>
          <option value={"IDOL"}>아이돌</option>
          <option value={"CHARACTER"}>캐릭터</option>
          <option value={"OTHER"}>기타</option>
        </select>
      </label>

      <button type="submit">등록</button>
      {error && <p role="alert">{error}</p>}
    </form>
    
    <>
        <button onClick={() => setShowVtubersOnly(false)}>전체</button>
        <button onClick={() => setShowVtubersOnly(true)}>VTuber</button>

        {visibleOshis.map((oshi) => (
          <OshiCard key={oshi.id} oshi={oshi} />
        ))}
      </>
    </>
  );
}

export default App
