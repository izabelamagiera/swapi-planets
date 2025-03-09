"use server";
export const getData = async (apiEndpoint: string) => {
  try {
    const response = await fetch(`${apiEndpoint}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      cache: "no-store",
    });
    const results = await response.json();
    return results;
  } catch (error) {
    console.error(error);
    return null;
  }
};
