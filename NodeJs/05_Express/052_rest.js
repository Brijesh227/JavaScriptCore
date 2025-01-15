/**
 * REpresentational State Transfer(REST):
 * 
 *      -> most used to create web api
 * 
 *      -> seprate api into logical resources(noun not a verb)(inshort name)
 *          e.g., /users, /products, /orders      not /getUsers, /createProduct
 * 
 *          to fetch data
 *              www.dummyapi.com/getMovies   ----> X
 *              www.dummyapi.com/movies      ----> O
 * 
 *      -> HTTP Methods
 * 
 *          READ    (HTTP GET),     ---> /movies  /movies/1  /movies?name=xyz   (fetch data)
 *          CREATE  (HTTP POST),    ---> /movies                                (send data to server)
 *          UPDATE  (HTTP PUT),     ---> /movies/1                              (update entire object)
 *                  (HTTP PATCH),   ---> /movies/1                              (update specific property)
 *          DELETE  (HTTP DELETE)   ---> /movies/1                              (delete object)
 * 
 *      -> send JSON data in response (Jsend JSON Data) 
 *              {
 *                  "status": "success",
 *                  "data": {[
 *                      {                      
 *                          "name": "abc",
 *                          "age": 20
 *                      },
 *                      {
 *                          "name": "xyz",
 *                          "age": 20
 *                      }
 *                  ]}
 *              }
 * 
 *      -> All request should be stateless.
 *          e.g., do not maintain loggedin session on server
 *                pagination handle from client side
 * 
 *
 * 
 */