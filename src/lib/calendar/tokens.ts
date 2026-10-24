import { promises as fs } from "fs";
import path from "path";

export type GoogleTokens = {
  access_token?: string | null;
  refresh_token?: string | null;
  scope?: string;
  token_type?: string | null;
  expiry_date?: number | null;
  email?: string;
  connectedAt?: string;
};

const TOKEN_PATH = path.join(process.cwd(), ".data", "google-tokens.json");

async function ensureDataDir() {
  await fs.mkdir(path.dirname(TOKEN_PATH), { recursive: true });
}

export async function readTokens(): Promise<GoogleTokens | null> {
  try {
    const raw = await fs.readFile(TOKEN_PATH, "utf8");
    return JSON.parse(raw) as GoogleTokens;
  } catch {
    return null;
  }
}

export async function writeTokens(tokens: GoogleTokens): Promise<void> {
  await ensureDataDir();
  await fs.writeFile(TOKEN_PATH, JSON.stringify(tokens, null, 2), "utf8");
}

export async function clearTokens(): Promise<void> {
  try {
    await fs.unlink(TOKEN_PATH);
  } catch {
    // ignore
  }
}

export async function isCalendarConnected(): Promise<boolean> {
  const tokens = await readTokens();
  return Boolean(tokens?.refresh_token || tokens?.access_token);
}
