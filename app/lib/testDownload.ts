export async function testDownloadSpeed(
  onProgress?: (speedMbps: number) => void
): Promise<number> {
  const url = `https://speed.cloudflare.com/__down?bytes=100000000&t=${Date.now()}`; // 100MB file
  const start = performance.now();

  const response = await fetch(url, { cache: "no-cache" });

  if (!response.body) {
    throw new Error("ReadableStream not supported");
  }

  const reader = response.body.getReader();
  console.log(reader);
  let receivedBytes = 0;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    receivedBytes += value!.length; // count bytes received
    if (onProgress) {
      const now = performance.now();
      const duration = (now - start) / 1000;
      const bits = receivedBytes * 8;
      const mbps = bits / (duration * 1024 * 1024);
      onProgress(mbps);
    }
  }

  const end = performance.now();
  const durationSeconds = (end - start) / 1000;
  const bits = receivedBytes * 8;
  const mbps = bits / (durationSeconds * 1024 * 1024);

  return mbps;
}
