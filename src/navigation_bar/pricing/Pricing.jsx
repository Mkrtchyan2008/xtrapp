import { Link } from "react-router-dom";

export default function Pricing() {
    return (
        <>
            <div className="Pricing_sec_1">
                <div className="container">
                    <div className="content-1">
                        <div className="main-text">
                            <h2 className="text-1">Popular</h2>
                            <h2 className="text-2">Services</h2>
                        </div>
                        <div className="items">
                            <div className="item">

                                <i class='bx bxs-message-rounded no-scale' ></i>
                                <h3>Global Consulting</h3>
                                <p>Incisive guidance that creates measurable, sustainable value and profitable business decisions</p>
                            </div>
                            <div className="item">
                                <i class='bx bxs-user' ></i>
                                <h3>Partner Solutions</h3>
                                <p>As a leading provider  of credit data    and identity management solutions for businesses</p>
                                .              </div>
                            <div className="item">
                                <i class='bx bxs-pencil' ></i>
                                <h3>Marketing Services</h3>
                                <p>Helping brands have more meaningful interactions with people get more value out of data</p>
                            </div>
                            <div className="item">
                                <i class='bx bxs-data' ></i>
                                <h3>Data Quality</h3>
                                <p>Experian Data Quality is a recognized industry leader of data quality and business healthy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="Pricing_sec_2">
                <div className="container">
                    <div className="content">
                        <h2>Simple and flexible pricing</h2>
                        <div className="items">
                            <div className="item">
                                <button className="btn-1">BASIC</button>
                                <div className="money">
                                    <h3>Free</h3>
                                    <p>Lifetime</p>
                                </div>
                                <p className="text">Standard listing submission
                                    for 30 days.</p>
                                <div className="contex">
                                    <div className="contex-1">
                                        <i class='bx bxs-badge-check'></i>
                                        <p>Product Barcode</p>
                                    </div>
                                    <div className="contex-2">
                                        <i class='bx bxs-badge-check'></i>
                                        <p>Easy integrations</p>
                                    </div>
                                </div>
                                <button>Choose Plan</button>
                            </div>
                            <div className="item">
                                <button className="btn-2">BASIC</button>
                                <div className="money">
                                    <h3>Free</h3>
                                    <p>Lifetime</p>
                                </div>
                                <p className="text">Standard listing submission
                                    for 30 days.</p>
                                <div className="contex">
                                    <div className="contex-1">
                                        <i class='bx bxs-badge-check'></i>
                                        <p>Product Barcode</p>
                                    </div>
                                    <div className="contex-2">
                                        <i class='bx bxs-badge-check'></i>
                                        <p>Easy integrations</p>
                                    </div>
                                </div>
                                <button>Choose Plan</button>
                            </div>
                            <div className="item">
                                <button className="btn-1">BASIC</button>
                                <div className="money">
                                    <h3>Free</h3>
                                    <p>Lifetime</p>
                                </div>
                                <p className="text">Standard listing submission
                                    for 30 days.</p>
                                <div className="contex">
                                    <div className="contex-1">
                                        <i class='bx bxs-badge-check'></i>
                                        <p>Product Barcode</p>
                                    </div>
                                    <div className="contex-2">
                                        <i class='bx bxs-badge-check'></i>
                                        <p>Easy integrations</p>
                                    </div>
                                </div>
                                <button>Choose Plan</button>
                            </div>

                        </div>
                    </div>

                </div>

            </section>

        </>
    )
}