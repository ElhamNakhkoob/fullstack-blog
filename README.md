🧑‍💻 How to Run the Project Locally

To run this fullstack blog project on your local machine, follow the steps below:

1.  Clone the Repository:
    git clone git@github.com:ElhamNakhkoob/fullstack-blog.git
    cd fullstack-blog

2.  Backend Setup
    This will install packages like:

        -- express – for creating the API server

        -- sequelize – for interacting with the PostgreSQL database

        -- pg – PostgreSQL driver

        -- cors – for cross-origin requests

        -- Create a .env File
            PORT=4000
            PG_URI=postgresql://posts_owner:npg_QWEt8IwdOFy9@ep-white-haze-a91177g5-pooler.gwc.azure.neon.tech/posts?sslmode=require&channel_binding=require
        -- Start the Backend Server:
            npm run dev

            http://localhost:4000

3.  Frontend Setup
    Install Frontend Dependencies

        -- axios

        -- react-router-dom

        -- tailwindcss and daisyUI

        -- npm i

        -- npm run dev

            http://localhost:5173
