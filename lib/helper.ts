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
type GenerateWhatsAppLink = (message?: string, phoneNumber?: string) => string;

const defaultWhatsAppMessage = `Hello, I'm interested in your auto repair services.`;

export const generateWhatsAppLink: GenerateWhatsAppLink = (
  message = defaultWhatsAppMessage,
  phoneNumber = BUSINESS_TELEPHONE_NUMBER as string,
) => {
  const baseUrl = "https://wa.me/";
  let fullPhoneNumber = phoneNumber.replace(/\D/g, ""); // Remove non-numeric characters
  // remove leading 0
  if (fullPhoneNumber.startsWith("0")) {
    fullPhoneNumber = fullPhoneNumber.slice(1);
  }
  // add "+27" to the beginning of the number
  fullPhoneNumber = "+27" + fullPhoneNumber;
  const encodedMessage = encodeURIComponent(message);
  return `${baseUrl}${fullPhoneNumber}?text=${encodedMessage}`;
};
