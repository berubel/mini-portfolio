 // 1. Get the elements which represents the tabs on HTML

 const tabs = (document.querySelectorAll(".tab")); //search for the terms in common on the document
 

// 2. Identify the input in the tab element
tabs.forEach(tab => {
    tab.addEventListener("click", function(){
        if(tab.classList.contains("selected")){
            return;
        }
        selectedTab(tab);
        showInfoTab(tab);   
    });
});

function selectedTab(tab){
    // 3. When user clicks, deselect the selected tab
    const selectedTab = document.querySelector('.tab.selected');
    selectedTab.classList.remove("selected");

    // 4. Check clicked tab as selected
    tab.classList.add("selected");
}

function showInfoTab(tab){
    // 5. Hide previous content
    const selectedInfo = document.querySelector(".info.selected");
    selectedInfo.classList.remove("selected");

    // 6. Show selected tab content
    const infoTabElementID = `info-${tab.id}`;
    
    const shownInfo = document.getElementById(infoTabElementID)
    shownInfo.classList.add("selected")
}