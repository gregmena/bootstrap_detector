
//bootsrap icon buton set via browser action in manifest.json
//set background color for badge
chrome.browserAction.setBadgeBackgroundColor({ color: "#990000" });

//set function to add badge text
function addBadge() {
chrome.browserAction.setBadgeText({ text: "!!" });
}

addBadge();

