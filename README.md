# Streamdeck Global Folders

More or less a proof of concept and working prototype of how something like this could function.

Essentially, it comes bundled with three premade empty profiles for you use.
So you can fill them up with whatever you want. Despite the name "Folder", this is using Profiles.
But the "Exit Global Folder" will only work inside of these profiles, and it will take you back to your last selected profile.


This let's you add two profiles for different applications. Then pick one of them available global profiles, build your profile. Such as, a Discord or music control panel.

Then from both application profiles, you can select the same folder. And they will both open the same profile. And when you exit the profile, it'll take you back to your last selected application.

This project came to be from this [Reddit thread](https://www.reddit.com/r/elgato/comments/uerh0t/feature_request_for_a_previous_profile_action/) from 3 years ago. And big thanks for Reddit user [KSP_HarvesteR](https://www.reddit.com/user/KSP_HarvesteR/) for the inspiration behind this.


## Known issues
* If you add multiple pages to the global folder, and navigate between them, the "Exit Global Folder" will no longer function. (Probably won't be able to fix?)
 But with multple pages, it will remember the last page you were on. And you could add an Exit button to each page.

* Same with folders. However, folders will not re-open where you last were.

Any other issues can be posted to [Issues](./issues) here on GitHub.

## Download
The .streamDeckPlugin file has been posted in [Releases](./releases), for a quick and convinient way of installing the plugin.

## Adding more Profiles
Currently, this adds 3 configureable profiles for you to use and choose from.

While adding more is trivial and possible. There is quite a few steps involved in doing so:

1. Clone this repo and create a new empty profile in your Streamdeck, and add the "Exit Global Folder" action to it. (Adding the action I believe is optional?)
2. Give the profile a unique name. You don't have to follow the same naming convention I have.
3. Then export the profile into the `com.norway174.global.folders.sdPlugin/` folder next to the others.
4. Update "Profiles" in `com.norway174.global.folders.sdPlugin\manifest.json` file, and add your newly exported profile. Name field has to be the same as the profile name, without the `.sdPlugin` extension.
5. Update the Select list in `com.norway174.global.folders.sdPlugin\ui\open-gfolder.html` and add the new profile option. The "Value" has to match the profile name. The name can be anything that's shown to the user.
6. That's all, now you can test or build the plugin and use it in your Streamdeck.

If this proves to work well, I might also update this to adding more as well. I only added 3 initially to test the concept and see if I could get something working.
I would love your feedback on this!

## Contact
You can reach out to me on my Development Discord here: https://discord.gg/aBapcEjaDa
