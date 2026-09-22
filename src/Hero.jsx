import profileImage from "./assets/Profile (2).png";

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-image">
                <div className="image-placeholder">
                    <img src={profileImage} alt="Wilson Tanjaya" />
                </div>
            </div>

            <div className="hero-content">
                <p className="hero-greeting">HELLO, I'M</p>

                <h1>Wilson Tanjaya</h1>

                <h2>Information System Student & Front-End Developer</h2>

                <p className="hero-description">
                    I am an Undergraduate Information Systems Student at Tarumanagara University
                    who is interested in Front-End Development, Data Analysis,
                    and Backend Development.
                </p>

                <div className="hero-buttons">
                    <a href="#projects">View My Work</a>
                    <a href="#contact">Contact Me</a>
                </div>
            </div>
        </section>
    );
}

export default Hero;