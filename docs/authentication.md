## authentication to the API  

Currently we have some simple authentication in place so nobody can call the api except for those who now the password and username\*. Create a file under `private/data.json` and add the following content.  

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

\* Calls like these should only be made over https or you risk man in the middle attacks.  

