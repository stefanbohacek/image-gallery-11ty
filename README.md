# A gallery starter project with Glitch and 11ty

Make your own online gallery page in just 3 easy steps!

**1. Remix this app**

You don't need to sign up for an account to try things out! Just click the **⚡ Remix** button on top of the page to get going.

**2. Upload your artwork or favorite pictures**

Click over to the **📦 Assets** folder inside the sidebar on the left and upload [up to 512MB](https://help.glitch.com/hc/en-us/articles/16287495313293-Technical-Restrictions) of images.

**3. Edit a few simple files, no coding!**

← `\_data/images.json`: Here you can list the images that you want to show in your gallery. Just add the names of the files, a short title, and a [description for vision-impaired folks, or those with poor network connection](https://alttexthalloffame.org/).

```json
[
  {
    "name": "la-lutte-continue.jpg",
    "title": "La lutte continue.",
    "description": "An illustration of a fist rising from a factory chimney."
  },
  {
    "name": "all-power-to-the-people.jpg",
    "title": "All power to the people.",
    "description": ""
  }
]
```

← `\_data/site.json`: In here you can customize your page, add a title, some header text, links to your social media accounts, and more.

```json
{
  "title": "Radical Poster Art",
  "show_site_title": false,
  "description": "Project description",
  "header_text": "Radical Poster Art",
  "intro_text": "<strong>Lorem ipsum dolor</strong> sit amet...",
  "social": {
```

Heads up! If you are a [fediverse](https://jointhefediverse.net/) user, there's a few extra options for you.

```json
  "social": {
    "fediverse": "",
    "fediverse_username": "@stefan@stefanbohacek.online",
    "mastodon": "https://stefanbohacek.online/@stefan",
```

If you want to use a Mastodon icon, fill out the "mastodon" link. Or you can go for a generic fediverse icon if you use a different platform, or if you prefer this. Additionally, if you add your `fediverse_username` and you are on Mastodon, with [one extra step](https://rknight.me/blog/setting-up-mastodon-author-tags/) you can show an author badge whenever someone shares a link to your gallery.

And you can also add this page to your profile as a verified link! (Works for [Mastodon](https://docs.joinmastodon.org/user/profile/#verification), [Friendica](https://wiki.friendi.ca/docs/verify_homepage), and [a few other platforms](https://stefanbohacek.com/blog/verification-in-the-fediverse/).)
