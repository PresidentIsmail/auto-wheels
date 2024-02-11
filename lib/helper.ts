import { v4 as uuidv4 } from "uuid";
import { BUSINESS_TELEPHONE_NUMBER } from "@/constants";

/**
 * This function extracts the first numeric part from a string.
 *
 * @param {string} inputString - The string to extract the numeric part from.
 * @returns {number | null} The extracted number or null if no numeric part is found.
 */
export function extractNumericPart(inputString: string): number | null {
  const numericMatch = inputString.match(/\d+/);
  if (numericMatch) {
    return parseInt(numericMatch[0], 10);
  }
  return null; // Or handle the case where no numeric part is found
}

/**
 * This function generates a random unique id using the uuid library.
 *
 * @returns {string} The generated unique id.
 */
export function generateId(): string {
  return uuidv4();
}

// Function to generate WhatsApp Click to Chat URL
type GenerateWhatsAppLink = (message?: string, phoneNumber?: string) => string;

const defaultWhatsAppMessage = `Hello, I'm interested in your auto repair services.`;

/**
 * This function generates a WhatsApp Click to Chat URL.
 *
 * @param {string} [message] - The message to be included in the URL. Defaults to a default message.
 * @param {string} [phoneNumber] - The phone number to be included in the URL. Defaults to a business telephone number.
 * @returns {string} The generated WhatsApp Click to Chat URL.
 */
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

/**
 * This function takes a string as input, replaces all spaces with hyphens, and converts all characters to lowercase.
 * It's useful for normalizing strings to be used in contexts such as HTML IDs, CSS classes, or URL slugs.
 * For example, the string "Brake Services" would be converted to "brake-services".
 *
 * @param {string} input - The string to be normalized.
 * @returns {string} The normalized string.
 */
export function normalizeString(input: string): string {
  // in some cases the input looks like "Lights, Wipers, and Battery", we need to remove the commas and replace them with hyphens
  input = input.replace(/,/g, "");

  // replace spaces with hyphens and convert to lowercase
  input = input.replace(/\s/g, "-").toLowerCase();

  return input;
}

/**
 * This function takes a string as input, normalizes it, and builds a Search Query from it.
 * for example, the string "Brake Services" would be converted to "service-group=brake-services".
 *
 * @param {string} value - The string to be converted to a Search Query.
 * @returns  {string} The Search Query.
 */

export function buildSearchQuery(value: string): string {
  return `service-group=${normalizeString(value)}`;
}
