const createURLsByStarredItemsIDs = (ids: string[]): string[] => {
  return ids.map((id) => `https://www.googleapis.com/books/v1/volumes/${id}`);
};

export default createURLsByStarredItemsIDs;
