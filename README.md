# School Management API

This project is an API built with Node.js, Express, and MySQL for managing school data.

## Features
- Add a new school
- List schools sorted by proximity to a user-specified location

## Endpoints

### 1. Add School
**Method**: POST  
**Endpoint**: `/api/schools/addSchool`  
**Payload**:
```json
{
  "name": "Sample School",
  "address": "123 Main St",
  "latitude": 40.7128,
  "longitude": -74.0060
}
{
"id":1,
"name":"Springfield Elementary",
"address":"742 Evergreen Terrace, Springfield",
"latitude":40.7127,
"longitude":-74.0059,
"distance":168.5570395136083
}

```
### 2. List Schools by Proximity
**Method**: GET
**Endpoint**: /api/schools/listSchools?latitude=40.7128&longitude=-72.0060

## Query Parameters:
latitude: User's latitude
longitude: User's longitude
sample response: 
```
/api/schools/listSchools?latitude=40.7128&longitude=-72.0060
````
```
{
"id":1,
"name":"Springfield Elementary",
"address":"742 Evergreen Terrace, Springfield",
"latitude":40.7127,
"longitude":-74.0059,
"distance":168.5570395136083
}
```


