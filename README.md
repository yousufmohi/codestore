## API Reference

#### Gets all the code snippets

```http
  GET /api/notes
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| None | N/A | N/A |

#### Creates and sets a code snipppet

```http
  POST /api/notes/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| None      | N/A | N/A |

#### Updates an existing code snippet

```http
  PUT /api/notes/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`    | `string` | **Required**. Id of snippet to update |

#### Deletes an existing code snippet

```http
  DELETE /api/notes/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`    | `string` | **Required**. Id of snippet to delete |


#### Creates and registers a user

```http
  POST /api/users/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| None      | N/A | N/A |


#### Logs a user in

```http
  POST /api/users/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| None      | N/A | N/A |
