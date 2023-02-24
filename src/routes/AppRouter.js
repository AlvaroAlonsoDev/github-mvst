import { Routes, Route } from 'react-router-dom'


const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="*" element={<App />} />
                <Route path="/" element={<App />} />
            </Routes>
        </>
    )
}

export default AppRouter