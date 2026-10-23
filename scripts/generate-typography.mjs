
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const sourcePath = path.join(
  root,
  "design-tokens/tokens/typography.json",
);
const outputPath = path.join(
  root,
  "design-tokens/generated/css/typography.css",
);

const checkOnly = process.argv.includes("--check");

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function validateTokens(tokens) {
  const groups = [
    "fontFamily",
    "fontWeight",
    "fontSize",
    "lineHeight",
  ];

  for (const group of groups) {
    assert(
      tokens[group] && typeof tokens[group] === "object",
      `Missing or invalid token group: ${group}`,
    );
  }

  assert(
    typeof tokens.fontFamily.sans === "string" &&
      tokens.fontFamily.sans.trim().length > 0,
    "fontFamily.sans must be a non-empty string",
  );

  for (const [name, value] of Object.entries(tokens.fontWeight)) {
    assert(
      Number.isInteger(value) && value >= 100 && value <= 900,
      `Invalid font weight "${name}": ${value}`,
    );
  }

  for (const [name, value] of Object.entries(tokens.fontSize)) {
    assert(
      typeof value === "string" &&
        /^\d+(\.\d+)?(px|rem|em)$/.test(value),
      `Invalid font size "${name}": ${value}`,
    );
  }

  for (const [name, value] of Object.entries(tokens.lineHeight)) {
    assert(
      typeof value === "number" && value > 0 && value <= 3,
      `Invalid line height "${name}": ${value}`,
    );
  }
}

function toKebabCase(value) {
  return value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}

function cssVariables(group, values) {
  return Object.entries(values)
    .map(
      ([name, value]) =>
        `  --juf-${group}-${toKebabCase(name)}: ${value};`,
    )
    .join("\n");
}

function generateCss(tokens) {
  return `:root {
${cssVariables("font-family", tokens.fontFamily)}

${cssVariables("font-weight", tokens.fontWeight)}

${cssVariables("font-size", tokens.fontSize)}

${cssVariables("line-height", tokens.lineHeight)}
}
`;
}

try {
  const raw = await readFile(sourcePath, "utf8");
  const tokens = JSON.parse(raw);

  validateTokens(tokens);

  const expected = generateCss(tokens);

  if (checkOnly) {
    let actual;

    try {
      actual = await readFile(outputPath, "utf8");
    } catch {
      throw new Error("Generated CSS is missing. Run the generator first.");
    }

    assert(
      actual === expected,
      "Generated CSS is out of date. Run: node scripts/generate-typography.mjs",
    );

    console.log("Typography tokens are valid; generated CSS is up to date.");
  } else {
    await writeFile(outputPath, expected, "utf8");
    console.log(`Generated ${path.relative(root, outputPath)}`);
  }
} catch (error) {
  console.error(`Typography token error: ${error.message}`);
  process.exitCode = 1;
}