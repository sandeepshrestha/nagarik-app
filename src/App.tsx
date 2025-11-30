import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/context/LanguageContext";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import Dashboard from "@/pages/Dashboard";
import Documents from "@/pages/Documents";
import Services from "@/pages/Services";
import ServiceDetails from "@/pages/ServiceDetails";
import ApplicationWizard from "@/pages/ApplicationWizard";
import { ChatWidget } from "@/components/features/ChatWidget";

import Transactions from "@/pages/Transactions";
import Settings from "@/pages/Settings";

import { AuthProvider } from "@/context/AuthContext";
import LoginPage from "@/pages/auth/LoginPage";
import OTPPage from "@/pages/auth/OTPPage";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";

import { ThemeProvider } from "@/context/ThemeContext";

// Main App component
function App() {
  return (
    <LanguageProvider>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/otp" element={<OTPPage />} />

              <Route
                path="/*"
                element={
                  <ProtectedRoute>
                    <DashboardLayout>
                      <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/services" element={<Services />} />
                        <Route
                          path="/services/:id"
                          element={<ServiceDetails />}
                        />
                        <Route
                          path="/services/:id/apply"
                          element={<ApplicationWizard />}
                        />
                        <Route path="/documents" element={<Documents />} />
                        <Route
                          path="/transactions"
                          element={<Transactions />}
                        />
                        <Route path="/settings" element={<Settings />} />
                      </Routes>
                      <ChatWidget />
                    </DashboardLayout>
                  </ProtectedRoute>
                }
              />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
