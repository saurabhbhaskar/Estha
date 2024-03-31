import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TempleCardSlider from './components/TempleCardSlider.jsx'
import Footer from './components/Footer.jsx'
import BooksCardSlider from './components/BooksCardSlider.jsx'
import BlogCardSlider from './components/BlogCardSlider.jsx'
import OrgCardSlider from './components/OrgCardSlider.jsx'
import CardSlider1 from './components/CardSlider1.jsx'
import CardSlider from './functionalities/CardSlider.jsx'
import Header from './components/Header.jsx'
import Card1 from './components/Card1.jsx'
import AuthLayout from './components/AuthLayout.jsx'
import MultiStepLoaderDemo from './components/MultiStepLoaderDemo'
import SignupFormDemo from './components/SignupFormDemo'

import { Fnavbar } from './components/Fnavbar.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import LoginPage from './components/LoginPage'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Fnavbar />,
    children: [
        {
            path: "",
            element: <Fnavbar />,
        },
        // {
        //     path: "login",
        // },
        // {
        //     path: "/signup",
        //     element: (
        //         // <AuthLayout authentication={false}>
        //         <SignupFormDemo />
        //         // </AuthLayout>
        //     ),
        // },
        // {
        //     path: "/all-posts",
        //     element: (
        //         <AuthLayout authentication>
        //             {" "}
        //             <AllPosts />
        //         </AuthLayout>
        //     ),
        // },
        // {
        //     path: "/add-post",
        //     element: (
        //         <AuthLayout authentication>
        //             {" "}
        //             <AddPost />
        //         </AuthLayout>
        //     ),
        // },
        // {
        //     path: "/edit-post/:slug",
        //     element: (
        //         <AuthLayout authentication>
        //             {" "}
        //             <EditPost />
        //         </AuthLayout>
        //     ),
        // },
        // {
        //     path: "/post/:slug",
        //     element: <Post />,
        // },
    ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>

    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>

    {/* <Provider store={store}>
    <Fnavbar />
    <App />
    </Provider> */}

    {/* <Fnavbar />
    <App /> */}
    {/* <Header />
    <CardSlider1 />
    <TempleCardSlider />
    <BooksCardSlider />
    <BlogCardSlider />
    <OrgCardSlider />
    <Footer /> */}
  </>

)
