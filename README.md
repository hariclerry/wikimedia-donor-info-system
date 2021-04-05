# Information storage system

A simple app that collects and store information about potential Wikimedia foundation donors.

## Dependencies/Technologies and Installation

### Backend Technologies

- JavaScript, Node.js, MySQL, Jest

### Frontend Technologies

- HTML, CSS, JavaScript

### The technologies you need to have installed on your machine

- [Node.js](https://nodejs.org/en/download/)
- [MySQL](https://www.mysql.com/downloads/)

### App setup and installation

- Run `git clone https://github.com/hariclerry/wikimedia-donor-info-system.git` to clone the repository.
- Cd into the `wikimedia-donor-info-system` directory

### Database and Configuration

- Check out the `db.sql` file inside the database folder for database creation commands.

- Create a `.env` file in the root directory, copy and paste the content of the `.env-example` file found in the root directory into the `.env` file you created. Add the environment variables as needed(for example, DATABASE_PASSWORD and DATABASE_NAME).

`NB: There is no need to create the table manually since it's created during app runtime`

### To run the app locally

```
npm install
```

```
npm run dev
```

The app should be running on localhost with the designated port. Navigate to the browser and enter the app url to display the index page, for example `http://127.0.0.1:8000/`.

#### To run tests

```
npm run test
```

### Discussion

#### Implementations/Requirements

1. Unit test
   - Two tests have been written to test the behavior of the implemented endpoints.
2. Implemented endpoints
   - Create donor information endpoint has been implemented to capture donor information and save it to the database.
   - A Get endpoint to render form to the frontend has been created.
3. Frontend page
   - An index page has been created with form to capture user inputs and sent to the backend.

#### Design pattern/architecture

The application follows the Model, View and Controller(MVC) design pattern which is a common design pattern used when building web application, I have decided to follow the MVC pattern
because of the following reasons;

- Allow for development of a loosely coupled application.
- Code is easily reusable and extendable.
- Easier to maintain or modify.
- Ease of testing each part of the application independently.

#### Bonus/

1.  Ability to edit entry not yet implemented
