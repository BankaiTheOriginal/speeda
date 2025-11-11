export default async function getIPAddress() {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    return data.ip;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error("Unable to fetch IP address");
    } else {
      throw new Error("Unable to fetch IP address: Unknown error");
    }
  }
}
