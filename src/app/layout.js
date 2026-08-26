import NavBar from "@/components/NavBar";
import "./globals.css";

export const metadata = {
  title: "Muhammad Saad Farooq | Full Stack Developer | AWS Cloud Engineer",
  description: "Full stack developer passionate about creating digital solutions. Specializing in JavaScript, React, Node.js, and cloud technologies.",
  icons: {
    icon: "/images/logo.svg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
