Database Schema

Suppliers
---------
id
name
city

Inventory
---------
id
supplier_id
product_name
quantity
price

Relationship

One supplier can have multiple inventory items.

Why MongoDB

MongoDB is flexible and schema-less, which makes it easier to manage inventory data and relationships using ObjectIds.

Query Explanation

Aggregation pipeline is used to:

lookup supplier
group inventory by supplier
calculate total inventory value

(quantity × price)

Optimization Suggestion

Create indexes on

supplier_id
product_name

This improves query performance when inventory grows large.