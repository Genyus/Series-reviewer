const seriesArray = [
  {
      title:'When They See Us',
      director:'Ava DuVernay',
      stars:'Asante Blackk, Caleel Harris, Ethan Herisse',
      rating: 8.9,
      price: 8.99,
      summary: 'Five teens from Harlem become trapped in a nightmare when theyre falsely accused of a brutal attack in Central Park. Based on the true story.',
      image: "Movie Images/When they see us.jpg"
  },
  {
      title:'Seven Seconds',
      director:'Veena Sud',
      stars: 'Clare-Hope Ashitey, Michael Mosley, David Lyons',
      rating: 7.7,
      price: 5.99,
      summary:'Tensions run high between African American citizens and Caucasian cops in Jersey City when a teenage African American boy is critically injured by a cop.s',
      image: "Movie Images/Seven Seconds.png"
  },
  {
      title:'13th',
      director:'Ava DuVernay',
      stars:'Melina Abdullah, Michelle Alexander, Cory Booker',
      rating: 8.3,
      price: 5.99,
      summary: `An in-depth look at the prison system in the United States and how it reveals the nation's history of racial inequality.`,
      image: "Movie Images/13th.jpg"
  },
  {
      title:'My Wife And Kids',
      director:'Don Reo, Damon Wayans',
      stars:'Damon Wayans, Tisha Campbell-Martin, George Gore II',
      rating: 6.8,
      price: 7.99,
      summary: `Michael Kyle longs for a traditional life, but his day-trader wife Janet, gangsta rap-worshipping son Michael Jr., and brooding daughters Claire and Kady make his dream just that ... a dream.`,
      image:"Movie Images/My Wife and Kids.jpg"
  },
  {
      title:'Everybody Hates Chris',
      director: 'Ali LeRoi, Chris Rock',
      stars: 'Terry Crews, Tichina Arnold, Tequan Richmond',
      rating: 7.4,
      price: 8.99,
      summary: `A young African-American teen attempts to survive with his dysfunctional family and his all-white school in the 1980s.`,
      image: "Movie Images/Everybody Hates Chris.jpg"
  },
  {
      title:'The Fresh Prince of Bel-Air',
      director: 'Andy Borowitz, Susan Borowitz',
      stars: 'Will Smith, James Avery, Alfonso Ribeiro',
      rating: 7.9,
      price: 5.99,
      summary: `A streetwise, poor young man from Philadelphia is sent by his mother to live with his aunt, uncle and cousins in their Bel-Air mansion.`,
      image: "Movie Images/The Fresh Prince of Bel-Air.jpg"
  },
  {
      title:'Insecure',
      director: 'Issa Rae, Larry Wilmore',
      stars: 'Issa Rae, Yvonne Orji, Jay Ellis',
      rating: 7.9,
      price: 8.99,
      summary: `Follows the awkward experiences and racy tribulations of a modern-day African-American woman.`,
      image: "Movie Images/Insecure.jpg"

  },
  {
      title:'The Chi',
      director: 'Lena Waithe',
      stars: 'Jason Mitchell, Jacob Latimore, Ntare Guma Mbaho Mwine',
      rating: 7.4,
      price: 6.99,
      summary: `The Chi is a timely coming-of-age drama series centered on a group of residents who become linked by coincidence but bonded by the need for connection and redemption.`,
      image: "Movie Images/The Chi.jpg"
  },
  {
      title:'Atlanta',
      director: 'David Glover',
      stars: 'Donald Glover, Brian Tyree Henry, LaKeith Stanfield',
      rating: 8.6,
      price: 8.99,
      summary: `Based in Atlanta, Earn and his cousin Alfred try to make their way in the world through the rap scene. Along the way they come face to face with social and economic issues touching on race, relationships, poverty, status, and parenthood.`,
      image: "Movie Images/Atlanta.jpg"
  },
  {
      title:'Grown-ish',
      director: 'Kenya Barris, Larry Wilmore',
      stars: 'Yara Shahidi, Trevor Jackson, Francia Raisa',
      rating: 6.4,
      price: 7.99,
      summary: `A spinoff of ABC's "Black-ish," Zoey Johnson is off to college and must live outside the nest, dealing with drugs, sex, and relationships along the way.`,
      image: "Movie Images/Grownish.jpg"
  },
  {
      title:'Dear White People',
      director: 'Justin Simien',
      stars: 'Logan Browning, Brandon P Bell, DeRon Horton',
      rating: 6.3,
      price: 6.99,
      summary: `At a predominantly white Ivy League college, a group of black students navigate various forms of racial and other types of discrimination.`,
      image: "Movie Images/Dear White People.jpg"
  },
  {
      title:'Claws',
      director: 'Eliot Laurence',
      stars: 'Niecy Nash, Carrie Preston, Judy Reyes ',
      rating: 7.3,
      price: 7.99,
      summary: `A look at the life and crimes of five women who work at a Florida nail salon.`,
      image: "Movie Images/Claws.jpg"
  },
  {
      title:'The Haves And The Have Nots',
      director: 'Tyler Perry',
      stars: 'Tika Sumpter, John Schneider, Crystal Fox',
      rating: 6.0,
      price: 5.99,
      summary: `The Chi is a timely coming-of-age drama series centered on a group of residents who become linked by coincidence but bonded by the need for connection and redemption.`,
      image: "Movie Images/The Have Nots.jpg"
  }
]



//This is to ensure the document is loaded before accessing different parts of it!
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  createSeriesList(seriesArray);
}

function createSeriesList(series) {
  const mainContainer = document.querySelector("#main-container");

  //Create Element & save
  //Configure it to set attriibutes
  //Append to Parent Element( look at indentation)
  series.map((details) => {
    const list = document.createElement("div");
    list.className = "list";
    const image = document.createElement("img");
    image.setAttribute("src", details.image);
    image.setAttribute("alt", details.name);
    image.className = "series-image";
    const seriesDetails = document.createElement("div");
    seriesDetails.className = "series-details";
    const article = document.createElement("article");
    article.className = "article";
    const title = document.createElement("h2");
    title.className = "series-title";
    title.appendChild(document.createTextNode(details.title));
    const director = document.createElement("p");
    director.className = "director";
    director.appendChild(document.createTextNode("by " + details.director));
    const price = document.createElement("p");
    price.className = "series-price";
    const priceValue = document.createElement("span");
    priceValue.appendChild(document.createTextNode("£" + details.price));
    price.appendChild(priceValue);
    const summary = document.createElement("p");
    summary.className = "summary";
    summary.appendChild(document.createTextNode(details.summary));
    const stars = document.createElement("p");
    stars.className = "stars";
    stars.appendChild(document.createTextNode("Starring " + details.stars));
    const rating = document.createElement("p");
    rating.className = "rating";
    const ratingNumber = document.createElement("span");
    rating.appendChild(
      document.createTextNode("Rating: " + details.rating + "/10")
    );
    rating.appendChild(ratingNumber);
    const button = document.createElement("button");
    button.className = "btn btn-primary series-item-button";
    button.appendChild(document.createTextNode("+Add to Cart"));

    mainContainer.appendChild(list);
    list.appendChild(image);
    list.appendChild(seriesDetails);
    seriesDetails.appendChild(article);
    article.appendChild(title);
    article.appendChild(director);
    article.appendChild(price);
    article.appendChild(summary);
    article.appendChild(stars);
    article.appendChild(rating);
    list.appendChild(button);
  });
}
