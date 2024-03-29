# Event Management Backend using Express with GraphQL and Mongo DB


  
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
  



### Prerequisites 
 * Dependencies Used
   * Express (Framework)
   * Mongoose (MongoDB)
   * Nodemon 
   * Express GraphQL
   * GraphQL


* Install all the dependencies by running this command 


  ```
  npm install
  ```
* Make sure you are connected to the MongoDB by adding the Mongo URL to .env file and export it
  
  ```
  MongoURL="Add your Mongo URL Here....."
  ```

* Run the server 


  ```
  npm start
  ```
## GraphQL 

After Running,
Go to this endpoint to play with GraphQL GUI
```
http://localhost:8080/graphql
```
 
 * ## Data Insertion
    ```
    mutation {
    createEvent(eventInput: {Event_Name: "Enter your Event Name", Event_Description: "Enter your Event Description", Event_Price: 1000.00}) 
    {
    Event_Name
    Event_Description
    Event_Price
    Date
    }}
    ```
* ## Data Querying 
  ```
  query{
  events{
    _id
    Event_Name
    Event_Description
    Event_Price
    Date
  }}
  ```


