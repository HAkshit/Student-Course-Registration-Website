# Student-Course-Registration-Website

Welcome to the Student Course Registration Website, a platform developed to streamline the course registration process for students. Leveraging React for the frontend and Spring Boot to implement backend APIs, this project provides an efficient solution for students to manage their course selections. Users can log in, browse available courses, and add them to their personal bucket. Meanwhile, administrative users have the privilege to log in, add and delete courses, ensuring dynamic content management. All essential data, including student information and course registration details, is stored in two CSV files, namely `CoursesList.csv` and `StudentList.csv`.

## Implementations Used

1. **Backend**: Spring Boot
2. **Frontend**: React
3. **Database**: Data stored as CSV files
4. **Build Tool**: Gradle

## Project Setup

### Frontend Setup

1. **Install npm for frontend**: Install npm from [here](https://nodejs.org/en/download).

2. **Install frontend dependencies**: Run the following command in the project root directory:
    ```sh
    npm install -g npm
    ```
    
    ```sh
    npm init
    ```
    
    ```sh
    npx create-react-app 
    ```

   ```sh
   npm i
   ```

### Frontend Dependencies

- `axios`: ^1.6.2
- `react`: ^18.2.0
- `react-modal`: ^3.16.1
- `react-router-dom`: ^6.20.0
- `sass`: ^1.69.5

### Backend Setup

3. **Install Gradle for backend**: Follow the instructions [here](https://gradle.org/install).

4. **Invoke a declared version of Gradle**:
    ```sh
    gradle wrapper
    ```

### Backend Dependencies

- `spring-boot-starter`
- `spring-boot-starter-web`
- `spring-boot-starter-test`
- `gson`: 2.8.9

5. **Build and start the application**:
    ```sh
    ./gradlew clean build
    ./gradlew bootRun
    ```

### Access the Application

6. Navigate to `http://localhost:8080` in any web browser.

## Project Implementation Overview

### Controllers

- **CourseController**: Manages course-related requests, including retrieval, addition, and deletion.
- **StudentController**: Handles student-related operations, such as retrieving information and managing registrations.
- **LoginController**: Responsible for user authentication, verifying credentials, and granting access based on roles.

### Models

- **User Models** (Abstract, User, Professor): Defines user entities, with abstract and role-specific attributes.
- **User Factories** (Abstract, User, Professor): Implements factories for flexible user instantiation.
- **LoginCredentials Model**: Represents user login credentials for authentication.
- **Course Model**: Defines course entity attributes like code, title, professor, and availability.

### Services

- **DatabaseService Interface**: Ensures a consistent interface for CSV-based data interaction.
- **Course Database Service**: Manages course data with operations like reading, adding, and updating.
- **Registration Database Service**: Handles student registrations using the DatabaseService interface.
- **Account Database Service**: Manages user account information and roles via CSV interaction.

### Additional Components

- **AdminService**: For administrative tasks, dependent on the completion of Course Database Service.

## Screenshots

Here are some screenshots of the application hosted locally:

<img src="https://github.com/HAkshit/Student-Course-Registration-Website/blob/main/snapshots/Login%20Page.png" alt="Login Page" width="800" height="650">

<img src="https://github.com/HAkshit/Student-Course-Registration-Website/blob/main/snapshots/New%20Student%20Sign%20Up.png" alt="New Student Sign Up" width="800" height="650">

<img src="https://github.com/HAkshit/Student-Course-Registration-Website/blob/main/snapshots/Student%20Logged%20In.png" alt="Student Logged In" width="800" height="400">

<img src="https://github.com/HAkshit/Student-Course-Registration-Website/blob/main/snapshots/Add%20new%20course%20for%20Student%20Register.png" alt="Add new course for Student Register" width="800" height="400">

<img src="https://github.com/HAkshit/Student-Course-Registration-Website/blob/main/snapshots/Student%20Course%20add.png" alt="Student Course add" width="800" height="400">

<img src="https://github.com/HAkshit/Student-Course-Registration-Website/blob/main/snapshots/Student%20Drop%20course.png" alt="Student Drop course" width="800" height="400">

<img src="https://github.com/HAkshit/Student-Course-Registration-Website/blob/main/snapshots/Admin%20Login.png" alt="Admin Login" width="800" height="650">

<img src="https://github.com/HAkshit/Student-Course-Registration-Website/blob/main/snapshots/Admin%20Page.png" alt="Admin Page" width="800" height="400">

<img src="https://github.com/HAkshit/Student-Course-Registration-Website/blob/main/snapshots/Admin%20Add%20new%20course%20Functionality.png" alt="Admin Add new course Functionality" width="800" height="400">
