# Express with GraphQl and Mongo DB 
## GraphQL 
---
After Running,
```
npm start
```
Go to this endpoint to play with GraphQL GUI
```
http://localhost:8080/graphql
```
Make sure you are connected to the MongoDB 
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

