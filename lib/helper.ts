import { v4 as uuidv4 } from "uuid";
import { BUSINESS_TELEPHONE_NUMBER } from "@/constants";

export function extractNumericPart(inputString: string): number | null {
  const numericMatch = inputString.match(/\d+/);
  if (numericMatch) {
    return parseInt(numericMatch[0], 10);
  }
  return null; // Or handle the case where no numeric part is found
}

// function that generates a random unique id using crypto.randonUUID()
export function generateId(): string {
  return uuidv4();
}

// Function to generate WhatsApp Click to Chat URL
const generateWhatsAppLink = (phoneNumber: string = BUSINESS_TELEPHONE_NUMBER as string, message: string = ""): string => {
  const baseUrl = "https://wa.me/";
  const fullPhoneNumber = phoneNumber.replace(/\D/g, ''); // Remove non-numeric characters
  const encodedMessage = encodeURIComponent(message);
  return `${baseUrl}${fullPhoneNumber}?text=${encodedMessage}`;
};