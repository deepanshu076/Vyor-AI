/**
 * Run this once to copy the AI-generated hero images into /public.
 * Usage (from the VYORAI project root):
 *   node scripts/copy-hero-images.mjs
 */
import { copyFileSync } from "fs";
import path from "path";
import os from "os";

const brainDir = path.join(
    os.homedir(),
    ".gemini",
    "antigravity",
    "brain",
    "724e8243-932c-4816-860f-6d250ce69e56"
);
const publicDir = path.join(process.cwd(), "public");

const images = [
    ["hero_center_robot_1772700359063.png", "hero-center.png"],
    ["hero_left_orb_1772700373938.png", "hero-left.png"],
    ["hero_right_crystal_1772700392543.png", "hero-right.png"],
];

for (const [src, dest] of images) {
    const from = path.join(brainDir, src);
    const to = path.join(publicDir, dest);
    copyFileSync(from, to);
    console.log(`✅  Copied ${src} → public/${dest}`);
}
console.log("\nDone! You can delete this script now.");
