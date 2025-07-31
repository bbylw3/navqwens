// Navigation functionality
document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      navLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
      var targetId = this.getAttribute("href").split("#")[1];
      var targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });

        var newUrl =
          window.location.protocol +
          "//" +
          window.location.host +
          window.location.pathname +
          "#" +
          targetId;
        window.history.pushState({ path: newUrl }, "", newUrl);
      }
    });
  });

  function handleHashChange() {
    var hash = window.location.hash;
    if (hash) {
      var targetElement = document.getElementById(hash.substring(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        var activeLink = document.querySelector(
          'nav a[href="' + hash + '"]'
        );
        if (activeLink) {
          navLinks.forEach((l) => l.classList.remove("active"));
          activeLink.classList.add("active");
        }
      }
    }
  }

  window.addEventListener("hashchange", handleHashChange);
  handleHashChange(); // Call on initial load
});

// Search functionality
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");
  const mainContent = document.querySelector("main");
  
  // Get all link cards for search
  const linkCards = document.querySelectorAll(".link-card");
  
  // Create a map of link cards with their text content
  const searchableContent = Array.from(linkCards).map(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    const iconText = card.querySelector("i").className;
    return {
      element: card,
      title: title,
      iconText: iconText
    };
  });

  searchInput.addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase().trim();
    
    if (searchTerm === "") {
      // Hide search results and show main content
      searchResults.style.display = "none";
      mainContent.style.display = "block";
      return;
    }
    
    // Show search results and hide main content
    searchResults.style.display = "block";
    mainContent.style.display = "none";
    
    // Filter results
    const filteredResults = searchableContent.filter(item => 
      item.title.includes(searchTerm) || 
      item.iconText.includes(searchTerm)
    );
    
    // Display results
    if (filteredResults.length > 0) {
      const grid = document.createElement("section");
      grid.className = "link-grid";
      
      filteredResults.forEach(result => {
        // Clone the element to avoid removing it from the original location
        const clone = result.element.cloneNode(true);
        // Remove the anchor tag from clone to prevent nested links
        const anchor = clone.querySelector("a");
        if (anchor) anchor.remove();
        grid.appendChild(clone);
      });
      
      searchResults.innerHTML = "";
      searchResults.appendChild(grid);
    } else {
      searchResults.innerHTML = `
        <div class="no-results">
          <i class="fas fa-search"></i>
          <p>没有找到匹配的结果</p>
        </div>
      `;
    }
  });
});