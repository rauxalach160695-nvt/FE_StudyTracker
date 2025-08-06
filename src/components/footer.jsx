import "../styles/components/footer.scss";

function Footer() {
  const footerData = [
    {
      title: "About Us",
      content: [
        "Heaven fruitful doesn't over lesser days appear creeping seasons so behold bearing days open",
      ],
    },
    {
      title: "Contact Info",
      content: [
        "Heaven fruitful doAddress : Your address goes here, your demo address.",
        "Phone : +8880 44338899",
        "info@domain.com",
      ],
    },
    {
      title: "Important Link",
      content: [
        "WHMCS-bridge",
        "Search Domain",
        "My Account",
        "Shopping Cart",
        "Our Shop",
      ],
    },
    {
      title: "Newsleeter",
      content: [
        "Heaven fruitful doesn't over lesser in days. Appear creeping seasons deve behold bearing days open",
      ],
    },
  ];

  return (
    <div className="footer-container">
      <div className="footer-content">
        {footerData.map((data, index) => (
          <div key= {index} className="per-column-content">
            <div key= {index} className="title-content">{data.title}</div>
            {data.content.map((text, textIndex) => (
              <div key={textIndex} className="text-content">{text}</div>
            ))}
          </div>
        ))}
      </div>
      <div className="social-media-link">
        <div className="web-author">Copyright ©2025 All rights reserved &nbsp; &nbsp; This template is made by Thinh Nguyen</div>
        <div className="list-social-link">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-square-twitter"></i>
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-tiktok"></i>
        </div>
      </div>
    </div>
  );
}

export default Footer;
