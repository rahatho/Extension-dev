
chrome.action.onClicked.addListener(tab => {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func : contentEdx,
    });
});

function contentEdx(){
    const nextBtnXpath = "/html/body/div[1]/div/div/div/main/div[2]/div[2]/div[1]/div[1]/div/div[1]/nav/a[2]";
                          
    let nextBtn;

    console.log("i am in body.");

    do{

        nextBtn = getElementByXpath(nextBtnXpath);
        console.log("xpath found");
        

        while (document.readyState != 'complete'){
            sleep(10000);
        }
        
        

        console.log("i am in loop\n");
        console.log(document);
        nextBtn.click();

        window.location.reload();

        while (document.readyState != 'complete'){
            sleep(10000)
        }


        
    }while(getElementByXpath(nextBtnXpath) != null);

    function getElementByXpath(xpath) {
        return document.evaluate(xpath,document,null, XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;
    }

   
    
    function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
          if ((new Date().getTime() - start) > milliseconds){
            break;
          }
        }
      }
   

    //getElementByXpath(nextBtnXpath).click();
}



