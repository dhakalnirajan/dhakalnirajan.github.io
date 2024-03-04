// Fetch the XML file
fetch ('metadata.xml')
  .then (response => response.text ())
  .then (xmlString => {
    const parser = new DOMParser ();
    const xmlDoc = parser.parseFromString (xmlString, 'application/xml');

    // Access elements in the XML document
    const author = xmlDoc.querySelector ('author').textContent;
    const description = xmlDoc.querySelector ('description').textContent;

    console.log ('Author:', author);
    console.log ('Description:', description);
  })
  .catch (error => {
    console.error ('Error fetching or parsing XML:', error);
  });
