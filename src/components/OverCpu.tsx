export default function OverCpu(sec: number) {
  let startTime = performance.now();

  // 1밀리초(ms) 이상 시간이 흐를 때까지 루프를 계속 실행하여 CPU를 점유
  while (performance.now() - startTime < sec) {
    // 이 루프는 동기적으로 실행되어 렌더링을 지연시킵니다.
  }
}
