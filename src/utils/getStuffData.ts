import { BASE_URL } from "@/redux/api/baseApi/baseApi";

export async function getStuffData() {
  try {
    const response = await fetch(`${BASE_URL}/staffing/all`, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch blog: ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return null;
  }
}
