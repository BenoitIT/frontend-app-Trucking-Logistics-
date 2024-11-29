export const deleteData = async (url: string) => {
  const response = await fetch(url, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete the item.");
  }
  return response.json();
};
