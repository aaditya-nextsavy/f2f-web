// reCAPTCHA v3 returns a 0-1 confidence score instead of a pass/fail
// challenge — 0.5 is Google's own suggested default cutoff.
const MIN_SCORE = 0.5;

interface RecaptchaVerifyResponse {
    success: boolean;
    score?: number;
    action?: string;
    "error-codes"?: string[];
}

export async function verifyRecaptchaToken(token: string | undefined, expectedAction: string): Promise<boolean> {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    // Not configured yet (no keys issued) — don't block form submissions on
    // a feature that hasn't been set up.
    if (!secretKey) return true;

    if (!token) return false;

    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret: secretKey, response: token }),
    });

    const result = (await response.json()) as RecaptchaVerifyResponse;

    return result.success && result.action === expectedAction && (result.score ?? 0) >= MIN_SCORE;
}
