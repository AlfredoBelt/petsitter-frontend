import MainLayout from "@/modules/mainLayout";
import "../styles/global.css"



export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}
