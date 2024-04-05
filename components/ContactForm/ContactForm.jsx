// import styles from "./ContactForm.css"

const ContactForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="center">
            <h2>Contact Me</h2>
            <p></p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name </label>
                <input type="text" id="name" name="name" />
                <label htmlFor="email">Email </label>
                <input type="email" id="email" name="email" />
                <label htmlFor="message">Message</label>
                <input type="text" id="message" name="message" />
            </form>
        </div>
    )
}

export default ContactForm;