import Layout from '../components/Layout';
import Link from 'next/link';

const Index = () => {
    return (
        <Layout>
            <article className="overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="display-4 font-weight-bold">
                                PEOPLE CONVO
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center pt-4 pb-5">
                            <p className="lead">
                                A start to endless blogs , conversation, and authentic human connection Share you stories to the world. Whether you're into breaking news, sports, 
                                TV fan theories,there are categories for you.

                            </p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                            'url(' +
                                            'https://images.pexels.com/photos/1054974/pexels-photo-1054974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' +
                                            ')'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">LOCKDOWNLIFE</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/LOCKDOWNLIFE">
                                        <a>
                                            <h3 className="h1">LOCKDOWN LIFE</h3>
                                        </a>
                                    </Link>
                                    <p className="lead">Bored Already? Here's what you can do. </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                            'url(' +
                                            'https://images.pexels.com/photos/775032/pexels-photo-775032.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' +
                                            ')'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">HEALTH</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/HEALTH">
                                        <a>
                                            <h3 className="h1">HEALTH</h3>
                                        </a>
                                    </Link>
                                    <p className="lead">
                                        Never say there is no time for Health
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                            'url(' +
                                            'https://images.pexels.com/photos/3786124/pexels-photo-3786124.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' +
                                            ')'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">COVID-19</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/COVID-19">
                                        <a>
                                            <h3 className="h1">COVID-19</h3>
                                        </a>
                                    </Link>
                                    <p className="lead">Get the latest updates about the Pandemic</p>
                                </div>
                            </div>
                        </div>



  <div className="col-md-4">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                            'url(' +
                                            'https://images.pexels.com/photos/3131971/pexels-photo-3131971.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' +
                                            ')'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">ENTERTAINMENT</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/ENTERTAINMENT">
                                        <a>
                                            <h3 className="h1">ENTERTAINMENT</h3>
                                        </a>
                                    </Link>
                                    <p className="lead">Read all the latest and breaking celebrity entertainment news on Entertainment Tonight. </p>
                                </div>
                            </div>
                        </div>







                          <div className="col-md-4">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                            'url(' +
                                            'https://images.pexels.com/photos/6384/woman-hand-desk-office.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500' +
                                            ')'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">CAREER</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/CAREER">
                                        <a>
                                            <h3 className="h1">CAREER</h3>
                                        </a>
                                    </Link>
                                    <p className="lead">Get the latest updates about the Pandemic</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </article>
        </Layout>
    );
};

export default Index;
