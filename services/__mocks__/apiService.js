
const apiService = async () => {
  console.log("Mocked api");
  return Promise.resolve({
    data: 
      {
        count: 8,
        entries: [
          {
            API: "AdoptAPet",
            Description: "Resource to help get pets adopted",
            Auth: "apiKey",
            HTTPS: true,
            Cors: "yes",
            Link: "https://www.adoptapet.com/public/apis/pet_list.html",
            Category: "Animals",
          },
          {
            API: "Axolotl",
            Description: "Collection of axolotl pictures and facts",
            Auth: "",
            HTTPS: true,
            Cors: "no",
            Link: "https://theaxolotlapi.netlify.app/",
            Category: "Animals",
          },
          {
            API: "Cat Facts",
            Description: "Daily cat facts",
            Auth: "",
            HTTPS: true,
            Cors: "no",
            Link: "https://alexwohlbruck.github.io/cat-facts/",
            Category: "Animals",
          },
          {
            API: "Cataas",
            Description: "Cat as a service (cats pictures and gifs)",
            Auth: "",
            HTTPS: true,
            Cors: "no",
            Link: "https://cataas.com/",
            Category: "Animals",
          },
          {
            API: "Cats",
            Description: "Pictures of cats from Tumblr",
            Auth: "apiKey",
            HTTPS: true,
            Cors: "no",
            Link: "https://docs.thecatapi.com/",
            Category: "Animals",
          },
          {
            API: "Dog Facts",
            Description: "Random dog facts",
            Auth: "",
            HTTPS: true,
            Cors: "yes",
            Link: "https://dukengn.github.io/Dog-facts-API/",
            Category: "Animals",
          },
          {
            API: "Dog Facts",
            Description: "Random facts of Dogs",
            Auth: "",
            HTTPS: true,
            Cors: "yes",
            Link: "https://kinduff.github.io/dog-api/",
            Category: "Animals",
          },
          {
            API: "Dogs",
            Description: "Based on the Stanford Dogs Dataset",
            Auth: "",
            HTTPS: true,
            Cors: "yes",
            Link: "https://dog.ceo/dog-api/",
            Category: "Animals",
          },
        ],
      },
  });
};

const apiTitle = async (title) => {
  console.log("Mocked api by title");
 return Promise.resolve({
    data: 
      {
        count: 1,
        entries: [
          {
            API: "AdoptAPet",
            Description: "Resource to help get pets adopted",
            Auth: "apiKey",
            HTTPS: true,
            Cors: "yes",
            Link: "https://www.adoptapet.com/public/apis/pet_list.html",
            Category: "Animals",
          },
        ],
      },
  });
};

module.exports = { apiService, apiTitle };
