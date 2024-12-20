# CodeStore

CodeStore is an application meant for storing code snippets. Imagine you want to store a small code snippet, maybe a Leetcode solution, or a specific snippet you use in every project. CodeStore allows you to store snippets in an IDE like environment.


## Built With

* [![Node.js][Node.js]][Node-url] 

* [![React][React.js]][React-url]

* [![MongoDB][MongoDB]][MongoDB-url]

* [![Express.js][Express.js]][Express-url]

* [![Tailwind CSS][TailwindCSS]][TailwindCSS-url]
 
## Run Locally

Clone the project

```bash
  git clone https://github.com/yousufmohi/codestore.git
```

Go to the project directory

```bash
  cd codestore
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  cd server
  npm run server
```

Start the client

```bash
  cd client
  npm start
```



## Running Tests

To run tests, run the following command

```bash
  npm test
```
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/


[Node.js]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node-url]: https://nodejs.org/


[MongoDB]: https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/


[Express.js]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/


[TailwindCSS]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[TailwindCSS-url]: https://tailwindcss.com/
## API Reference

#### Gets all the code snippets

```markdown
  GET /api/notes
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| None | N/A | N/A |

#### Creates and sets a code snipppet

```markdown
  POST /api/notes/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| None      | N/A | N/A |

#### Updates an existing code snippet

```markdown
  PUT /api/notes/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`    | `string` | **Required**. Id of snippet to update |

#### Deletes an existing code snippet

```markdown
  DELETE /api/notes/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`    | `string` | **Required**. Id of snippet to delete |


#### Creates and registers a user

```markdown
  POST /api/users/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| None      | N/A | N/A |


#### Logs a user in

```markdown
  POST /api/users/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| None      | N/A | N/A |
