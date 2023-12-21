# Social Media Backend

This is the backend for a social media application built using Node.js and Express. It provides various features, including user authentication, post management, and user-related operations.

## Features

### User Authentication

- **User Registration:** Users can register with a unique username, email, and password. Passwords are securely hashed using bcrypt.
  
- **User Login:** Registered users can log in using their email and password.

### Post Management

- **Create Post:** Users can create posts with a title, content, and association with a specific user.

- **Update Post:** Users can update their own posts, modifying the title and content.

- **Delete Post:** Users can delete their own posts.

- **Like/Dislike Post:** Users can like or dislike a post, with real-time updates on the like status.

### User Management

- **Update User:** Users can update their account details, including the username and password.

- **Delete User:** Users can delete their accounts.

- **Get User:** Retrieve user details, excluding sensitive information like passwords.

- **Follow/Unfollow User:** Users can follow or unfollow other users, with real-time updates on the follower count.

### Timeline

- **Get User Timeline:** Retrieve a user's timeline, consisting of their own posts and posts from users they follow.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Docker](https://www.docker.com/get-started)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Darshan016/social-media-REST-API.git

2. Navigate to the project directory:

    ```bash
    cd social-media-backend

3. Install dependencies:
    ```bash
    npm install

### Configuration

Create a `.env` file in the root directory of the project and configure the following environment variables:

```env
PORT=3000
MONGODB_URL=mongodb://localhost:27017/social-media-db
```

### Start the server:
```bash
npm start
```

## Dockerization

### To dockerize the application, follow these steps:

1. Build the Docker image:
```bash
docker build -t social-media-backend .
```

2. Run the Docker container:
```bash
docker run -p 3000:3000 -d social-media-backend
```
3. Or run via docker-compose:
```bash
docker-compose up -d
```
Make sure to replace your MONGO_URL's host name with the mongo service mentioned in docker-compose file. If you started the app via docker-compose then your MONGO_URL will look like this:
```env
MONGODB_URL=mongodb://mongo:27017/social-media-db
```
