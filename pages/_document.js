import Document, {Html, Head, Main, NextScript} from 'next/document'

export default  class MyDocument extends Document {
    render(){
    return(
        <Html lang='en' >
            <Head>
                {/* meta important pour le seo */}
                <meta name="description" content="site d'auto ecole" />
                <meta charSet="utf8"/>
                <meta name="robots" />
                
                
                <link 
                    rel="stylesheet" 
                    href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
                />
                <link 
                href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" 
                rel="stylesheet">
                </link>
                <link
                    href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css"
                    rel="stylesheet"
                />
                <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
               
            </Head>
            <body>
                <Main />
                <NextScript/>
                <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap');
                body {
                    font-family: 'Playfair Display','Indie Flower', 'Abril Fatface', cursive;
                    background-image: url("../static/white.jpg");
                }
                `}
                </style>

            </body>

        </Html>
    )}
}
