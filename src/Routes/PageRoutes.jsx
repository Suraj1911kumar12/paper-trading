import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Auth/Login'
import { UseAuth } from '../Context/AuthContext'
import Sidebar from '../Layout/Sidebar'
import PageNotFound from '../pages/PageNotFound'
import TermsAndCondition from '../pages/Settings/TermsAndCondition'
import PrivacyPolicy from '../pages/Settings/PrivacyPolicy'
import Users from '../pages/Users/Users'
import Profile from '../pages/Profile'
import SidebarNew from '../Layout/SidebarNew'

const PageRoutes = () => {
    const auth = UseAuth()
    return (
        <Routes>
            {
                auth.isAuthenticated ?
                    <>
                        <Route element={<Sidebar />}>
                            <Route exact path='/' element={<Home />} />
                            <Route exact path='/users' element={<Users />} />
                            <Route exact path='/profile' element={<Profile />} />
                            <Route exact path='/termsandconditions' element={<TermsAndCondition />} />
                            <Route exact path='/privacypolicy' element={<PrivacyPolicy />} />
                        </Route>
                        <Route exact path='*' element={<PageNotFound />} />
                    </>
                    :
                    <>
                        <Route exact path='/' element={<Login />} />
                        <Route exact path='*' element={<PageNotFound />} />
                    </>
            }
        </Routes>
    )
}

export default PageRoutes