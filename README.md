# E-Commerce DB
![MIT License badge](https://img.shields.io/badge/license-MIT_License-green)
## Description
E-Commerce is a backend MySQL/Sequelize e-commerce database. It is a simple to use db that allows users to create products add stock, include price, and associate them with different categories and tags for easier organization/finding.

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Routes/JSONs](#routes-and-jsons)
* [License](#license)
* [Credits](#credits)
* [Contributions](#contributions)
* [Questions](#questions)

## Installation
1. Ensure that you are able to create a new SQL Database (I used [MySQL Server](https://dev.mysql.com/downloads/mysql/)) 
2. Clone repository 
3. Open a new command line that is in the correct directory 
4. Run `npm i `
5. Navigate to the ".env EXAMPLE" file 
6. Edit the DB_USER and DB_PASS values to match your SQL Server credentials. 
7. Rename the ".env EXAMPLE" file to ".env"
8. Return to your open command line, load the schema.sql to create the appropriate database and tables.
    * In MySQL this can be done by:
    * `mysql -u {user} -p`
    * Enter your MySQL password
    * `source ./db/schema.sql;`
    * Close the MySQL command line `\q`
9. If you wish to populate the application with test values you can do so by entering the command: `npm run seed`
9. The application can now be used.

## Usage
Once the application has been installed, open a new command line within the repository's directory, enter the command `node server`. E-Commerce DB is now up and running. You can now link it to your front end or manipulate the information with a program like Insomnia which provides a UI to do a variety of GET, POST, PUT, DELETE requests. 

Here is a detailed walkthrough in the usage of the [E-Commerce DB](https://drive.google.com/file/d/1z3lacBlnRNPFIh2Pfv2FTQhKJUELesK3/view)

## Routes and JSONs
Note that each of these routes are the subdirectory following your the domain that is hosting the database. Please insert your domain before the routes for proper usage. Additionally, all JSONs have validation if CONSTRAINED keys attempt to associate with an ID that doesn't exist it will throw an error.
### Product 
#### Get All Products
* __Route:__ `/api/products`
* __JSON:__ No JSON required


#### Get Product by ID
* Route: `/api/products/{product-id}`
* JSON: No JSON required

#### Create Product
* __Route:__ `/api/products`
* __JSON:__ 
```
{
      "product_name": "Test Product",
      "price": 20.00,
      "stock": 10, // By default this is set to 10
      "category_id":1,
      "tagIds": 1 // Use an array for more than one tag
}
```
#### Update Product
* __Route:__ `/api/products/{product-id}`
* __JSON:__ 
```
{
      "product_name": "Test Product",
      "price": 20.00,
      "stock": 10, // By default this is set to 10
      "category_id":1,
      "tagIds": 1 // Use an array for more than one tag
}
```
#### Delete Product
* __Route:__ `/api/products/{product-id}`
* __JSON:__  No JSON required

### Categories 
#### Get All Categories
* __Route:__ `/api/categories`
* __JSON:__ No JSON required


#### Get Category by ID
* Route: `/api/categories/{category-id}`
* JSON: No JSON required

#### Create Category
* __Route:__ `/api/categories`
* __JSON:__ 
```
{
	"category_name": "Test Category Name"
}
```
#### Update Category
* __Route:__ `/api/categories/{category-id}`
* __JSON:__ 
```
{
	"category_name": "Update Category Name"
}
```
#### Delete Category
* __Route:__ `/api/categories/{category-id}`
* __JSON:__  No JSON required

### Tags
#### Get All Tags
* __Route:__ `/api/tags`
* __JSON:__ No JSON required


#### Get Tag by ID
* Route: `/api/tags/{tag-id}`
* JSON: No JSON required

#### Create Tag
* __Route:__ `/api/tags`
* __JSON:__ 
```
{
	"tag_name": "Test Tag Name"
}
```
#### Update Tag
* __Route:__ `/api/tags/{tags-id}`
* __JSON:__ 
```
{
	"tag_name": "Updated Tag Name"
}
```
#### Delete Tag
* __Route:__ `/api/tags/{tags-id}`
* __JSON:__  No JSON required

## License

MIT License

Copyright &copy; 2021 Jake Pedigo

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Credits
### Assets
* [Node.js](https://nodejs.org/en/)
* [Sequelize](https://sequelize.org/)

## Contributions
Contributions to this project follow the Contributor Covenant [additional information can be found here](https://www.contributor-covenant.org/version/2/0/code_of_conduct/).

## Questions
For any inquiries regarding Team Manager, please contact Jake Pedigo:
* GitHub: [jbped](https://github.com/jbped)
* Email: <pedigojacob@gmail.com>
