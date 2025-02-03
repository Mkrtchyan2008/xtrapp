import { Link } from "react-router-dom"
export default function Home() {
    return (
        <>
            <section className="sec_1">
                <div className="container">
                    <div className="contents">
                        <div className="content_1">
                            <div className="main_text">
                                <h1 className='txt-1'>We will help you to</h1>
                                <h1 className='txt-2'>live easier</h1>
                            </div>
                            <p>Software as a service is a software licensing and delivery model in which software is licensed on a subscription basis and is centrally hosted.</p>
                            <div className="contex-1">
                                <Link to="/Pricing" className="btn btn-1">Start free trial</Link>
                                <Link to="/Log_in" className="btn btn-2">Learn more</Link>
                            </div>
                        </div>
                        <div className="content_2">
                            <img src="https://xtratheme.com/elementor/app-2/wp-content/uploads/sites/107/2023/04/photo-intro-home.png" />
                        </div>
                    </div>

                    { }
                    <LogoSlider />
                </div>
            </section>
        </>
    )
}

const LogoSlider = () => {
    return (
        <div className="big_logos">
            <div className="logos-wrapper">
                <div className="logos">
                    <img src="https://xtratheme.com/elementor/app-2/wp-content/uploads/sites/107/2023/04/amazon-logo.png" />
                    <img src="https://xtratheme.com/elementor/app-2/wp-content/uploads/sites/107/2023/04/microsoft-logo.png" />
                    <img src="https://xtratheme.com/elementor/app-2/wp-content/uploads/sites/107/2023/04/samsung-logo.png" />
                    <img src="https://xtratheme.com/elementor/app-2/wp-content/uploads/sites/107/2023/04/google-logo.png" />
                    <img src="https://xtratheme.com/elementor/app-2/wp-content/uploads/sites/107/2023/04/logo7_fff-1.png" />
                </div>
                { }
                <div className="logos">
                    <img src="https://xtratheme.com/elementor/app-2/wp-content/uploads/sites/107/2023/04/amazon-logo.png" />
                    <img src="https://xtratheme.com/elementor/app-2/wp-content/uploads/sites/107/2023/04/microsoft-logo.png" />
                    <img src="https://xtratheme.com/elementor/app-2/wp-content/uploads/sites/107/2023/04/samsung-logo.png" />
                    <img src="https://xtratheme.com/elementor/app-2/wp-content/uploads/sites/107/2023/04/google-logo.png" />
                    <img src="https://xtratheme.com/elementor/app-2/wp-content/uploads/sites/107/2023/04/logo7_fff-1.png" />
                </div>
            </div>
        </div>
    );
};
