import "./globals.css";

// import Metrics from "./metrics";


export const metadata = {
  openGraph: {
    images: "/images/logo/dac-logo-2.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
        <>
          {/* <Navbar /> */}
          {children}
          {/* <Footer /> */}
        </>
      </body>
    </html>
  );
}
