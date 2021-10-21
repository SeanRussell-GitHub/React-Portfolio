const Contact= () => {
    return (
<div>
    <h1>Contact Me</h1>
    <div id="contact-me" className="contact">
        <h3>Methods:</h3>
        <ul>
           <li><a href="mailto:emailseanrussell@gmail.com?subject=Testing out mailto!">Email</a></li>
           <li><a href="https://github.com/SeanRussell-GitHub" target="_blank" rel="noopener noreferrer">
                <span>GitHub Profile</span>
                </a>
           </li>
           <li><a href="https://www.linkedin.com/in/sean-russell-32880a210/" target="_blank" rel="noopener noreferrer">
                <span >LinkedIn Profile</span>
                </a>
           </li>
           <li><a href="https://my.indeed.com/p/seanr-flh388m" target="_blank" rel="noopener noreferrer">
                <span >Resume on Indeed</span>
                </a>
           </li>
           <li>Cell phone: <span>(555)555-5555 ... leave a message or text </span></li>
        </ul>
        </div>
        <div className="return">
        <a href="#body" className="return">return to top</a>
        </div>
  </div>
);
}

export default Contact;