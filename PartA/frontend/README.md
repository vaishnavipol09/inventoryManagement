Inventory Search Feature

Search API allows filtering inventory by:

q (product name partial match)
category
minPrice
maxPrice

All filters are optional and can be combined.

Search Logic

Data is filtered sequentially using:

case-insensitive match for product name
exact match for category
price range filters

If no filters are provided, the API returns all inventory.

Performance Improvement

For large datasets:

Use database indexing on

product_name
category
price

Also implement pagination and caching.