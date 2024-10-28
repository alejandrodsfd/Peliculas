import { Routes, Route } from "react-router-dom"
import { LandingPage } from "../pages/LandingPage"
import { MovieDetails } from "../pages/MovieDetails"
import { AboutPage } from "../pages/AboutPage"
export function MyRoutes() {
    return (
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route exact path="/movies/:movieId" element={<MovieDetails/>} />
                <Route exact path="/about" element={<AboutPage/>} />
            </Routes>
    )
}