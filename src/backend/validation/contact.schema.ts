export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export interface ValidationResult {
  valid: boolean;
  error?: string;
  data?: ContactPayload;
}

function sanitize(str: string): string {
  return str.trim();
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactPayload(body: unknown): ValidationResult {
  if (!body || typeof body !== "object") {
    return { valid: false, error: "Invalid request payload." };
  }

  const record = body as Record<string, unknown>;
  const name = sanitize(typeof record.name === "string" ? record.name : "");
  const email = sanitize(typeof record.email === "string" ? record.email : "");
  const message = sanitize(typeof record.message === "string" ? record.message : "");

  if (!name || !email || !message) {
    return { valid: false, error: "All fields are required." };
  }

  if (!EMAIL_REGEX.test(email)) {
    return { valid: false, error: "Invalid email address." };
  }

  if (name.length > 100 || email.length > 100 || message.length > 2000) {
    return { valid: false, error: "Input exceeds maximum length." };
  }

  return {
    valid: true,
    data: { name, email, message },
  };
}
