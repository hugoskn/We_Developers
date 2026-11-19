import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import LandingPage from './Pages/PublicFacing/LandingPage';
import SignInSignUpPage from './Pages/PublicFacing/SignInSignUpPage';
import ResetPasswordPage from './Pages/PublicFacing/ResetPasswordPage';
import MainPage from './Pages/Platform/MainPage';
import PrivacyPolicyPage from './Pages/PublicFacing/PrivacyPolicyPage';
import TermsAndConditionsPage from './Pages/PublicFacing/TermsAndConditionsPage';

function PrivateRoute({ children }) {
    const token = localStorage.getItem('authToken');
    return token ? children : <Navigate to="/account" replace />;
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/account" element={<SignInSignUpPage />} />
                <Route path="/reset-password" element={<ResetPasswordPage />} />
                <Route path="/main" element={
                    <PrivateRoute>
                        <MainPage />
                    </PrivateRoute>
                } />
                <Route path="/privacy" element={<PrivacyPolicyPage />} />
                <Route path="/terms" element={<TermsAndConditionsPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
