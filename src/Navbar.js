import './Navbar.css';

function Navbar() {

  const redirect = (link) => {
    window.location.href = link;
  };

  return (
    <div className="Museum">

      <header class="Header Header--top">
        <div class="Header-inner Header-inner--top" data-nc-group="top">
          <div data-nc-container="top-left">



            <nav class="Header-nav Header-nav--primary" data-nc-element="primary-nav" data-content-field="navigation">

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

                    <a href="https://www.petersonmn.com/administration" class="Header-nav-folder-item" data-test="template-nav">Administration &amp; Services</a>




                    <a href="https://drive.google.com/drive/u/0/folders/1tBd7y7Hr9dmoIJsfqQZsIONih894ER7g" target="_blank" class="Header-nav-folder-item">Ordinances, Budgets, Audits</a>





                    <a href="https://drive.google.com/drive/u/0/folders/1tBd7y7Hr9dmoIJsfqQZsIONih894ER7g" target="_blank" class="Header-nav-folder-item">City Forms</a>





                    <a href="https://drive.google.com/drive/u/0/folders/1tBd7y7Hr9dmoIJsfqQZsIONih894ER7g" target="_blank" class="Header-nav-folder-item">Newsletters</a>

                  </span>
                </span>

                <span class="Header-nav-item Header-nav-item--folder">

                  <a href="https://www.petersonmn.com/community-events" class="Header-nav-folder-title" data-controller="HeaderNavFolderTouch" data-controllers-bound="HeaderNavFolderTouch">Community</a>

                  <span class="Header-nav-folder">


                    <a href="https://www.petersonmn.com/annual-events" class="Header-nav-folder-item" data-test="template-nav">Events</a>



                    <a href="https://www.petersonmn.com/local-organizations" class="Header-nav-folder-item" data-test="template-nav">Local Organizations</a>



                    <a href="https://www.petersonmn.com/local-services" class="Header-nav-folder-item" data-test="template-nav">Local Services</a>


                  </span>

                </span>

                <span class="Header-nav-item Header-nav-item--folder">

                  <a href="https://www.petersonmn.com/explore-peterson-minnesota" class="Header-nav-folder-title" data-controller="HeaderNavFolderTouch" data-controllers-bound="HeaderNavFolderTouch">Visitors</a>

                  <span class="Header-nav-folder">


                    <a href="https://www.petersonmn.com/discover-peterson-minnesota" class="Header-nav-folder-item" data-test="template-nav">Discover Peterson</a>



                    <a href="https://www.petersonmn.com/attractions" class="Header-nav-folder-item" data-test="template-nav">Peterson Attractions</a>



                    <a href="https://www.petersonmn.com/rv-campground" class="Header-nav-folder-item" data-test="template-nav">RV Campground</a>



                    <a href="https://www.petersonmn.com/lodging" class="Header-nav-folder-item" data-test="template-nav">Lodging</a>



                    <a href="https://www.petersonmn.com/things-to-do" class="Header-nav-folder-item" data-test="template-nav">Eat / Shop / Play</a>


                  </span>
                </span><a href="https://www.petersonmn.com/events-calendar" class="Header-nav-item" data-test="template-nav">Calendar</a><a href="https://www.petersonmn.com/contact" class="Header-nav-item" data-test="template-nav">Contact</a>

                <span class="Header-nav-item Header-nav-item--folder">

                  <a href="/" class="Header-nav-folder-title" data-controller="HeaderNavFolderTouch" data-controllers-bound="HeaderNavFolderTouch">Museum</a>

                  <span class="Header-nav-folder">


                    <a href="/VideoCatalog" class="Header-nav-folder-item" data-test="template-nav">Videos</a>



                    <a href="/Schedule" class="Header-nav-folder-item" data-test="template-nav">Schedule</a>



                    <a href="https://www.petersonmn.com/rv-campground" class="Header-nav-folder-item" data-test="template-nav">Exhibitions</a>



                    <a href="https://www.petersonmn.com/lodging" class="Header-nav-folder-item" data-test="template-nav">Records</a>



                    <a href="https://www.petersonmn.com/things-to-do" class="Header-nav-folder-item" data-test="template-nav">Support</a>


                  </span>
                </span>


              </div>

            </nav><a href="/" class="Header-branding" data-nc-element="branding" data-content-field="site-title">

            </a></div>
          <div data-nc-container="top-center">


          </div>
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
