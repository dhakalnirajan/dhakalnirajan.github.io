// Create a new XMLHttpRequest object
const xhr = new XMLHttpRequest ();

// Define the URL of the XML file
const url = '../metadata.xml';

// Configure the request
xhr.open ('GET', url, true);

// Define the onload function to handle the response
xhr.onload = function () {
  // Check if the request was successful
  if (xhr.status >= 200 && xhr.status < 300) {
    // Parse the XML response
    const parser = new DOMParser ();
    const xmlDoc = parser.parseFromString (xhr.responseText, 'application/xml');

    // Access elements in the XML document
    const authorElement = xmlDoc.querySelector ('author');
    const descriptionElement = xmlDoc.querySelector ('description');

    // Check if the elements exist before accessing their text content
    const author = authorElement ? authorElement.textContent.trim () : '';
    const description = descriptionElement
      ? descriptionElement.textContent.trim ()
      : '';

    console.log ('Author:', author);
    console.log ('Description:', description);
  } else {
    // Log an error message if the request fails
    console.error ('Error fetching XML:', xhr.statusText);
  }
};

// Define the onerror function to handle errors
xhr.onerror = function () {
  console.error ('Request failed');
};

// Send the request
xhr.send ();
