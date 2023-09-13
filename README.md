# Torre-Search-Server
- [Link to live server](https://search-test-server.onrender.com)
- [Link to live frontend](https://search-test-ol3b.onrender.com)

- [Frontend Repo](https://github.com/adamilare/Torre-Search)

## Endpoints

```
// search by name
post https://search-test-server.onrender.com/api/search
request payload  {"query":"Rose"}

// save recent search
post https://search-test-server.onrender.com/api/search/recent
payload  {
            "ardaId": 8009819,
            "name": "Mariana Rosendo",
            "username": "mrosendo",
            "professionalHeadline": "Gerente de RRHH",
            "imageUrl": "https://res.cloudinary.com/torre-technologies-co/image/upload/c_fill,h_150,w_150/v0/origin/starrgate/users/profile_ca1b4356db9e65f04e74f2dfb1cb1cb82f41f123.jpg"
        }

// get list of recent searches
get https://search-test-server.onrender.com/api/search/recent

// adding user o favorite list
post https://search-test-server.onrender.com/api/favorite
payload  {
            "ardaId": 8009819,
            "name": "Mariana Rosendo",
            "username": "mrosendo",
            "professionalHeadline": "Gerente de RRHH",
            "imageUrl": "https://res.cloudinary.com/torre-technologies-co/image/upload/c_fill,h_150,w_150/v0/origin/starrgate/users/profile_ca1b4356db9e65f04e74f2dfb1cb1cb82f41f123.jpg"
        }

// removing user from favorite list
delete https://search-test-server.onrender.com/api/favorite
payload  {
            "ardaId": 8009819
        }

// getting favorite list
get https://search-test-server.onrender.com/api/favorite


