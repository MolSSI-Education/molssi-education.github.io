function openCategory(evt, categoryName) {
  // Declare all variables
  var i, tabcontent, tablinks;
  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="nav-item" and remove the class "active"
  tablinks = document.getElementsByClassName("nav-item");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(categoryName).style.display = "block";

  // console.log(evt)
  if (evt.currentTarget) {
    evt.currentTarget.className += " active";
  } else {
    // This is the case where the user input URL with hash (directly to a Resources tab)
    evt.classList.toggle("active");
  }

  // Set new URL
  replaceUrlHash(categoryName);
}

/**
 * Add 'onclick' event listener to display tabs
 */
function displayTabOnClick() {
  const tabs = document.querySelectorAll("#resources-nav .nav-item");
  tabs.forEach(function (tabButton) {
    tabButton.addEventListener("click", function (e) {
      e.preventDefault();
      let tabContentId = tabButton.id.split(/tab\-(.+)/)[1];
      openCategory(e, tabContentId);
    });
  });
}

/**
 * Add the 'id' string of the the displayed tab into the URL hash,
 * for easy sharing of URL
 * @param {string} tabName
 */
function replaceUrlHash(tabName) {
  let newUrl = `${window.location.href.split("#")[0]}#${tabName}`;
  history.replaceState(null, null, newUrl);
}

/**
 * Process the URL and display the tab accordingly
 */
function directLinkToTab() {
  if (window.location.hash) {
    // If the URL contains hash, display the corresponding tab
    const hash = window.location.href.split("#")[1];
    let buttonId = `tab-${hash}`;
    let button = document.querySelector(`#${buttonId}`);
    openCategory(button, hash);
  } else {
    // If the URL does not contain hash, display the first tab
    const firstTab = document.querySelector("#resources-nav .nav-item");
    firstTab.click();
    // To prevent the web browser jump to the section
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 1);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Add 'onclick' listening event for each Tab button
  displayTabOnClick();

  // Check URL to display correct tab content
  directLinkToTab();
});
