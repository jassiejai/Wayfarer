## Wayfarer User Stories

**Elevator Pitch:** A travel community for users to share city-specific tips ("posts" or "logs") about their favorite locations around the world.

---

## Sprint 1: Landing Page

**A user should be able to:**

1. Navigate to "/" and see a basic splash page with the name of the website.
2. See the site-wide header on every page with a link to home page with list of cities.

---

## Sprint 2: HomePage

**A user should be able to:**

1. View the "San Francisco" page (at "/cities/1") including:
  * The site-wide header.
  * The name of the city.
  * An iconic photo of the city.
2. View a list of posts on the San Francisco page:
  * Sorted by newest first.
  * With the post titles linked to the individual post "show" pages.
3. Use the search bar to search through the posts' title and/or content.
4. Click on the title of one of their posts and be redirected to a "show" page for that post.
5. View post "show" pages with title, author, and content.


---

## Sprint 3: Validations

**A user should be able to:**

1. View city pages for "London" and "Gibraltar".
2. A post's title must be between 1 and 200 characters.
3. A post's content must not be empty.

---

## Sprint 4: Weather API

1. Call [Open Weather API](https://openweathermap.org/current) for each city to display the current weather on each city's page.

## Bonus

**A user should be able to:**

1. Visit city pages via pretty urls, like "/cities/san-francisco".
2. On a city's page:
  * See post content truncated to 1000 characters max, with a link to view more.
  * See a relative published date, e.g. "2 days ago".
3. View an error message when form validations fail, for the following validations:
  * Title must be between 1 and 200 characters.
  * Content must not be empty.
4. View only the 10 most recent posts on a city page (pagination), with
  * A link/button to the "Next" 10.
  * A link/button to the "Previous" 10.
5. View all vagabond cities as markers/pins on a map on the site's homepage.
6. Click on a pin on the homepage map and be redirected to the corresponding city page.

---
