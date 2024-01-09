export function extractNumericPart(inputString: string): number | null {
  const numericMatch = inputString.match(/\d+/);
  if (numericMatch) {
    return parseInt(numericMatch[0], 10);
  }
  return null; // Or handle the case where no numeric part is found
}

// function that generates a random unique id using crypto.randonUUID()
export function generateId(): string {
  return crypto.randomUUID();
}
