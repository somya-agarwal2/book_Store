import React from "react";
const Terms=()=>{
    return(
        <body>
        <div className="secti">
          <div className="cont">
            <h1 className="me">Terms and Conditions</h1>
    
            <div className="sect">
              <h2 className="me">1. Acceptance of Terms</h2>
              <p className="you">
                By accessing and using this website, you agree to comply with and be
                bound by the following Terms and Conditions. If you disagree with
                any part of these terms, please do not use our website.
              </p>
            </div>
    
            <div className="sect">
              <h2 className="me">2. Changes to Terms</h2>
              <p className="you">
                We reserve the right to modify these Terms and Conditions at any
                time. Any changes will be effective immediately upon posting on the
                website. It is your responsibility to review the Terms periodically.
                Your continued use of the site constitutes acceptance of any
                changes.
              </p>
            </div>
    
            <div className="sect">
              <h2 className="me">3. Use of Website Content</h2>
              <p className="you">
                <strong>Reading and Downloading:</strong> Visitors are permitted to
                read and download books solely for personal, non-commercial use.
                Redistribution, reselling, or any commercial use of downloaded
                content is strictly prohibited.
              </p>
              <p className="you">
                <strong>Book Reviews:</strong> This website provides user reviews
                for informational purposes only. We do not endorse or verify the
                accuracy of any review. Users should exercise their own judgment
                when reading reviews.
              </p>
            </div>
    
            <div className="sect">
              <h2 className="me">4. Intellectual Property Rights</h2>
              <p className="you">
                All content on this website, including but not limited to text,
                graphics, logos, images, and digital downloads, is the property of
                [Website Name] and protected by copyright laws. Unauthorized use of
                our intellectual property is prohibited.
              </p>
            </div>
    
            <div className="sect">
              <h2 className="me">5. User Conduct</h2>
              <p className="you">
                Users agree not to engage in any activity that may interfere with
                the operation of the website or compromise the security of the site.
                This includes attempting to upload malicious files, spamming, or
                accessing restricted parts of the site.
              </p>
            </div>
    
            <div className="sect">
              <h2 className="me">6. Limitation of Liability</h2>
              <p className="you">
                We strive to keep the website available and secure, but we cannot
                guarantee continuous, uninterrupted access to the site. We are not
                liable for any damages, losses, or expenses arising from your use or
                inability to use our website.
              </p>
            </div>
    
            <div className="sect">
              <h2 className="me">7. External Links</h2>
              <p className="you">
                Our website may contain links to third-party websites. These links
                are provided for convenience, and we do not endorse or take
                responsibility for the content or practices of any third-party site.
                Accessing these sites is at your own risk.
              </p>
            </div>
    
            <div className="sect">
              <h2 className="me">8. Privacy Policy</h2>
              <p className="you"> 
                We collect certain personal information for user registration and
                service provision. Our <b>Privacy Policy</b> governs the
                collection and use of this information. Please review it to
                understand how your data is protected.
              </p>
            </div>
    
            <div className="sect">
              <h2 className="me">9. Governing Law</h2>
              <p className="you">
                These Terms and Conditions are governed by and construed in
                accordance with the laws of [Country/State]. Any disputes arising
                out of these terms will be resolved under the jurisdiction of
                [appropriate legal jurisdiction].
              </p>
            </div>
    
            <div className="contact-info">
              <h2 className="me">Contact Information for Website Developer</h2>
              <p className="you"><strong>Developer Name:</strong> [Developer’s Name]</p>
              <p className="you">
                <strong>Email:</strong>
                <a href="mailto:developer@example.com">developer@example.com</a>
              </p>
              <p className="you"><strong>Phone:</strong> +1 (555) 555-5555</p>
              <p className="you"><strong>Address:</strong> [Developer's Address, City, Country]</p>
              <p className="you">
                Please include any relevant details about your query to expedite our
                response.
              </p>
            </div>
    
            <div className="complaint-form">
              <h2 className="me">Customer Complaint Form</h2>
              <form action="submit_complaint.php" method="post">
                <div className="form-group">
                  <label for="name">Full Name:</label>
                  <input className="kid" type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label for="email">Email Address:</label>
                  <input className="kid" type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label for="complaint">Complaint Details:</label>
                  <textarea className="kid"
                    id="complaint"
                    name="complaint"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button class="them" type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </body>
    )
}
export default Terms;