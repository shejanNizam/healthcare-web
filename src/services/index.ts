"use server";

import { BASE_URL } from "@/redux/api/baseApi/baseApi";

export const getStuffData = async () => {
  try {
    const res = await fetch(`${BASE_URL}/staffing/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return await res.json();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error : any) {
    return Error(error);
  }
};


// export async function getStuffData() {
//   try {
//     const res = await fetch(`${BASE_URL}/staffing/all`, {
//       method: "GET",
//       // cache: "no-store",
//       next: {
//         revalidate: 3600,
//       },
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch data");
//     }

//     const data = await res.json();
//     return data?.data;
//   } catch (error) {
//     console.error("Fetch error:", error);
//     return null;
//   }
// }
