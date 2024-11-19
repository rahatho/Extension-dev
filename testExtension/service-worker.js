const nextBtnXpath = "/html/body/div[1]/div/div/div/main/div[2]/div[2]/div[1]/div[1]/div/div[1]/nav/a[2]";

chrome.action.onClicked.addListener(tab => {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func : contentEdx,
    });
});

function contentEdx(){
    getElementByXpath(nextBtnXpath).click();
}

function getElementByXpath(xpath) {
    return document.evaluate(xpath,document,null, XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;
}

