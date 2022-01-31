(function(window, undefined) {
  var dictionary = {
    "ea38e0ec-d2de-4d46-b30c-8cdd86838a52": "Bingo",
    "ab0303a2-522f-4a91-8807-a89342a4cc9d": "Bingo - Complete",
    "7dbde397-0012-4453-a96a-939b1f67a651": "Card filled in",
    "02a34af0-abbb-4f35-99fd-1fd3cb4b58f8": "Review Image",
    "7ff46f50-6899-45fe-ba72-1c6233fbd6ac": "Take picture",
    "04f04d14-bf77-48ed-80b0-7f84fcc58eba": "New card",
    "b092a611-d212-4a78-8de4-687084e41f08": "Crop picture",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);