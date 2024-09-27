import Banner from '../../assets/hero/banner-car.png';
import Car from '../../assets/hero/car.png';
const Hero = () => {
    return (
        <>
            <div className="w-full max-h-[500px] flex content-center pt-20">
                <div className="flex justify-center flex-col md:flex-row">
                    {/* header text............  */}

                    <div className="order-2 md:order-1">
                        <div className="flex flex-col justify-center items-start h-full px-5 gap-y-2 md:px-10 lg:px-20 dark:bg-gray-900 dark:text-white">
                            <p
                                data-aos="zoom-in"
                                className="text-2xl text-[#ffc727]"
                            >
                                Effortlesss
                            </p>
                            <h3
                                data-aos="fade-up"
                                className="text-5xl lg:text-7xl font-semibold"
                            >
                                Car Rental
                            </h3>
                            <p data-aos="fade-up">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quae eius distinctio
                                reiciendis praesentium ipsa cum, asperiores
                                earum quas enim dolorum.
                            </p>
                            <button
                                data-aos="zoom-in"
                                className="  bg-yellow-300 px-5 py-2 text-black rounded-md hover:scale-105 "
                            >
                                Get Started
                            </button>
                        </div>
                    </div>

                    {/* header image............  */}

                    <div
                        data-aos="zoom-in"
                        className="flex  justify-center items-center order-1 md:order-2 dark:bg-gray-900"
                    >
                        <img src={Banner} alt="header image" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
