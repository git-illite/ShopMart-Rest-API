#  ShopMArt API

## Summary 

A simple RESTful API that allows an administrator to create, read, edit and delete customer and short term properties.

## End Points


#### POST /customers

The above end point creates a customer. You must submit the customer data in the body of the request (as JSON), The data includes  :

firstName (required),
lastName: (required),
email (required),
password (required),
phoneNum

The data is validated prior to saving (check for mandatory data)

#### GET /customers/
This end point returns all customers

#### GET /customers/id

The above end point returns a customer based on the id provided.


### POST /shortprop

The above end point creates a short term property . You must submit the short term property data in the body of the request (as JSON), The data includes  :

title (required),
rentPrice (required),
description,
type (required),
rules,
amenities (required),
location  (required),
bestSeller (required),
photo

The data is validated prior to saving (check for mandatory data)

#### GET /shortprop
This end point returns all short term properties as well as any queries supplied (?type=house,?rentPrice&lt=1000,?bestSellers=true, etc.)

#### GET /shortprop/id

The above end point returns a short term property based on the id provided.

#### PUT /shortprop/id

The above end point updates a short term property based on the id provided, the input is validated and proper errors messages are returned.

### DELETE /shortprop/id

The above end point removes/deletes an existing short term property based on the id provided.