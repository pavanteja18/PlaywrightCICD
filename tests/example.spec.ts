import { expect, test } from "@playwright/test";

test.describe("Anime Streaming Platform", async () => {
  test("Launching Browser.. 🌐", async ({ page }) => {
    test.setTimeout(120000);
    await test.step("Redirecting to the Anime Page...👺", async () => {
      await page.goto("https://allmanga.to/");
      await expect(page).toHaveTitle("All Manga");
      await expect(page).toHaveURL("https://allmanga.to/");
    });

    await test.step("Navigating to the home page...🏚️", async () => {
      await page.getByRole("link", { name: "📺 HOME" }).click();
      await expect(page).toHaveTitle("All Manga Anime - All ");
    });

    await test.step("Search for any anime...🐦‍🔥", async () => {
      await page.getByRole("searchbox", { name: "Search Anime" }).click();
      await page
        .getByRole("searchbox", { name: "Search Anime" })
        .pressSequentially("classroom of the elite");
      await page.keyboard.press("Enter");
      await page.locator(".popular-series-title").nth(1).click();
      await expect(page).toHaveTitle("📺 Jujutsu Kaisen Season 2 - All Manga ");
    });

    await test.step("Play 1st Episode...1️⃣", async () => {
      await page.locator(".anime").first().click();
    });
  });
});
