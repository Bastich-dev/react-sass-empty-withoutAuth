import * as Sentry from "@sentry/nextjs";
import isNaN from "lodash/isNaN";
import { sentryDsn, sentrySampleRate, sentryEnvName } from "./config/sentry";
const path = require("path");

export const sentryEnvName = process.env.NEXT_PUBLIC_SENTRY_ENV_NAME;
export const sentryDsn = process.env.NEXT_PUBLIC_SENTRY_DSN;
const sampleRate = parseFloat(process.env.NEXT_PUBLIC_SENTRY_APM || "");
export const sentrySampleRate = isNaN(sampleRate) ? 0 : sampleRate;

Sentry.init({
  dsn: sentryDsn,
  tracesSampleRate: sentrySampleRate,
  environment: sentryEnvName,
});
