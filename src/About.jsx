function About() {
    return (
        <section className="about" id="about">
            <div className="about-title">
                <p>ABOUT ME</p>
                <h2>Who I am?</h2>
            </div>

            <div className="about-content">
                <div className="about-text">
                    <h3>Information Systems Student with a Tech & Data Perspective</h3>

                    <p>
                        I am an undergraduate Information Systems student at
                        Tarumanagara University with a strong interest in technology,
                        web development, and data.
                    </p>

                    <p>
                        My main interest is Front-End Development, while I also have
                        experience exploring Backend Development and Data Analysis
                        using Python, SQL, and Excel. I enjoy building digital
                        solutions and working with data to understand problems and
                        support better decisions.
                    </p>

                    <p>
                        I am currently looking for an internship opportunity where I
                        can apply my technical knowledge, gain real-world experience,
                        and continue developing my skills in technology and data.
                    </p>
                </div>

                <div className="about-info">
                    <div>
                        <span>University</span>
                        <strong>Tarumanagara University</strong>
                    </div>

                    <div>
                        <span>Major</span>
                        <strong>Information Systems</strong>
                    </div>

                    <div>
                        <span>Primary Interest</span>
                        <strong>Front-End Development</strong>
                    </div>

                    <div>
                        <span>Data Analysis</span>
                        <strong>Python, SQL & Excel</strong>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;