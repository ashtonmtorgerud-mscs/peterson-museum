import './Navbar.css';

function Navbar() {

  const redirect = (link) => {
    window.location.href = link;
  };

  return (
    <div className="Museum">

      <header class="Header Header--top">
        <div class="Header-inner Header-inner--top">
          <div>

            <nav class="">

            <img
                src="//images.squarespace-cdn.com/content/v1/5c47e5fd365f02e0856ce7ce/1549117318571-6JRHJC8OQ33037W3BNOI/cityofpeterson-logo.png?format=1500w"
                alt="City of Peterson, Minnesota"
                className="Header-branding-logo"
                onClick={ () => redirect("https://www.petersonmn.com/")} // Add onClick event handler
              />

              <div class="Header-nav-inner">
                
                <span class="Header-nav-item Header-nav-item--folder">

                  <a href="https://www.petersonmn.com/government" class="Header-nav-folder-title" data-controller="HeaderNavFolderTouch" data-controllers-bound="HeaderNavFolderTouch">Government</a>

                  <span class="Header-nav-folder">

                    <a href="https://www.petersonmn.com/administration" class="Header-nav-folder-item">Administration &amp; Services</a>

                    <a href="https://drive.google.com/drive/u/0/folders/1tBd7y7Hr9dmoIJsfqQZsIONih894ER7g" class="Header-nav-folder-item">Ordinances, Budgets, Audits</a>

                    <a href="https://drive.google.com/drive/u/0/folders/1tBd7y7Hr9dmoIJsfqQZsIONih894ER7g" class="Header-nav-folder-item">City Forms</a>

                    <a href="https://drive.google.com/drive/u/0/folders/1tBd7y7Hr9dmoIJsfqQZsIONih894ER7g" class="Header-nav-folder-item">Newsletters</a>

                  </span>
                </span>

                <span class="Header-nav-item Header-nav-item--folder">

                  <a href="https://www.petersonmn.com/community-events" class="Header-nav-folder-title">Community</a>

                  <span class="Header-nav-folder">

                    <a href="https://www.petersonmn.com/annual-events" class="Header-nav-folder-item">Events</a>

                    <a href="https://www.petersonmn.com/local-organizations" class="Header-nav-folder-item">Local Organizations</a>

                    <a href="https://www.petersonmn.com/local-services" class="Header-nav-folder-item">Local Services</a>

                  </span>

                </span>

                <span class="Header-nav-item Header-nav-item--folder">

                  <a href="https://www.petersonmn.com/explore-peterson-minnesota" class="Header-nav-folder-title" >Visitors</a>

                  <span class="Header-nav-folder">

                    <a href="https://www.petersonmn.com/discover-peterson-minnesota" class="Header-nav-folder-item" >Discover Peterson</a>

                    <a href="https://www.petersonmn.com/attractions" class="Header-nav-folder-item" >Peterson Attractions</a>

                    <a href="https://www.petersonmn.com/rv-campground" class="Header-nav-folder-item" >RV Campground</a>

                    <a href="https://www.petersonmn.com/lodging" class="Header-nav-folder-item" >Lodging</a>

                    <a href="https://www.petersonmn.com/things-to-do" class="Header-nav-folder-item" >Eat / Shop / Play</a>

                  </span>
                </span>
                
                
                <span class="Header-nav-item Header-nav-item--folder">
                
                <a href="https://www.petersonmn.com/events-calendar" class="Header-nav-item" >Calendar</a>
                
                </span>


                

                <span class="Header-nav-item Header-nav-item--folder">

                <a href="https://www.petersonmn.com/contact" class="Header-nav-item" data-test="template-nav">Contact</a>


                </span>


                <span class="Header-nav-item Header-nav-item--folder">

                  <a href="/" class="Header-nav-folder-title" >Museum</a>

                  <span class="Header-nav-folder">

                    <a href="/VideoCatalog" class="Header-nav-folder-item" >Videos</a>

                    <a href="/Schedule" class="Header-nav-folder-item" >Schedule</a>

                    <a href="https://www.petersonmn.com/rv-campground" class="Header-nav-folder-item" >Exhibitions</a>

                    <a href="https://www.petersonmn.com/lodging" class="Header-nav-folder-item">Records</a>

                    <a href="https://www.petersonmn.com/things-to-do" class="Header-nav-folder-item">Support</a>

                  </span>
                </span>

              </div>

            </nav><a href="/" class="Header-branding" data-nc-element="branding" data-content-field="site-title">

            </a></div>

          <div data-nc-container="top-right">

            <div class="Header-search" onClick={() => redirect("https://www.petersonmn.com/search?q=")}>
              <form class="Header-search-form" >
                <button class="Header-search-form-submit" type="submit" ></button>
              </form>
            </div><nav class="Header-nav Header-nav--secondary" data-nc-element="secondary-nav" data-content-field="navigation">

            </nav></div>
        </div>
      </header>
    </div>

  );
}

export default Navbar;
