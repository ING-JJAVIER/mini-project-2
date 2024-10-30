import "./globals.css";
import {Raleway} from "next/font/google"

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable:'--font-raleway'
})

export const metadata = {
  title: "Weather Central",
  description: "App for check the weather",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${raleway.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}