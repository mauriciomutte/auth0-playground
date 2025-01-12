const path = require("node:path");
const fs = require("node:fs");

const args = process.argv.slice(2);
const [name, allowedLogoutUrls, allowedOrigins] = args;

if (!name || !allowedLogoutUrls || !allowedOrigins) {
    console.error('Usage: node generate-client-json.js <name> <allowed_logout_urls> <callbacks>');
    process.exit(1);
}

const templatePath = path.join(__dirname, 'templates/client-template.json');
const template = fs.readFileSync(templatePath, 'utf8');

const logoutUrlArray = allowedLogoutUrls.split(',').map(url => `"${url.trim()}"`).join(', ');
const callbackArray = allowedOrigins.split(',').map(url => `"${url.trim()}"`).join(', ');

const output = template
    .replace('"{{name}}"', `"${name}"`)
    .replace('"{{allowed_logout_urls}}"', logoutUrlArray)
    .replace('"{{callbacks}}"', callbackArray);

const outputPath = `auth0-infra-as-code/src/clients/${name}.json`;
fs.writeFileSync(outputPath, output);

console.log(`Client JSON file generated at ${outputPath}`);