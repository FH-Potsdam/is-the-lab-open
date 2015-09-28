## Authentification  

Currently we have some simple authentification in place so nobody can call the api. Create a file under `private/data.json` and add the following content.  

    [
      {
        "id":1,
        "username":"secretname",
        "password":"superlongultrasecretpassword",
        "email":"me@me.io"
      }
    ]

To make a call to the api you can now open the url like this:   

This opens the lab: [https://maker:superlongultrasecretpassword@example.com/is-the-lab-open/api/1](https://maker:superlongultrasecretpassword@example.com/is-the-lab-open/api/1)  


This closes the lab: [https://maker:superlongultrasecretpassword@example.com/is-the-lab-open/api/0](https://maker:superlongultrasecretpassword@example.com/is-the-lab-open/api/0)  

