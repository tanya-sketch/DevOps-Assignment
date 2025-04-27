// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
const Sentry = require("@sentry/node");

Sentry.init({
  dsn: "https://ff597305fe87be846bdf394c08e28295@o4508987127889920.ingest.de.sentry.io/4508987134181456",

  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});