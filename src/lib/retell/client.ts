import Retell from "retell-sdk";

let _retellClient: Retell | null = null;

export function getRetellClient(): Retell | null {
  const apiKey = process.env.RETELL_API_KEY;
  if (!apiKey) return null;

  if (!_retellClient) {
    _retellClient = new Retell({ apiKey });
  }
  return _retellClient;
}
