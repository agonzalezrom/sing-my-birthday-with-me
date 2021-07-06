import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../app/assets/css/MerriweatherFont.css";
import "../app/assets/css/Theme.css";

export const App = ({Component, pageProps}) => {
    return (
            <Component {...pageProps} />
    )
}

export default App;

