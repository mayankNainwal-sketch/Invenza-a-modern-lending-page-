# Invenza-a-modern-lending-page-
A modern, responsive landing page for Invenza featuring interactive modals for login/signup and payments, a testimonial slider, pricing plans, partner logos, and a contact form. Built with HTML, CSS, and JavaScript, all buttons share unified styling for a seamless user experience.


      Features

  **Navigation & Layout**
- Responsive navigation bar with logo and social media links.
- Smooth scrolling between sections.
- Clean, modern layout with visually distinct sections.

 2. **Hero Section**
- Eye-catching headline and subtext.
- Prominent "Try for Free" button that opens a login/signup modal.

 3. **Features Section**
- Highlights three main features with icons and descriptions.
- Responsive flexbox layout for feature items.

 4. **Video Section**
- Embedded product video with a custom play button overlay.

 5. **Subscription Sections**
- Two subscription sections:
  - "Unlock Premium Design Assets" with a "Try for Free" button.
  - "Lightning Fast Prototyping" with a newsletter subscription form.
- All buttons styled consistently using the `.main-btn` class.

6. **Partners Section**
- Displays trusted partner logos with links.
- Includes another "Try for Free" button.

7. **Testimonials**
- Testimonial slider with auto-advance and clickable dots.
- Each testimonial includes a quote, author, and partner logo.

 8. **Pricing Section**
- Three pricing plans (Basic, Standard, Premium) with features and "Order Now" buttons.
- Hover effects highlight the selected plan.

9. **Contact Section**
- Contact form for user inquiries.
- Additional contact details and embedded Google Map.

 10. **Footer**
- Company, Services, and Resources links.
- Contact info and social media icons.

---

 Interactive Functionality

 **Modals**
- **Login/Signup Modal:**  
  - Triggered by any "Try for Free" button.
  - Tabbed interface for login and signup.
  - Form validation and dummy submission alerts.

- **Payment Gateway Modal:**  
  - Triggered by any "Order Now" button.
  - Fully responsive payment form with plan selection, card details, and success message.
  - Demo payment logic (no real transactions).

 **Testimonial Slider**
- Auto-advances every 5 seconds.
- Manual navigation via clickable dots.

**Newsletter Subscription**
- Styled input and button for email capture (no backend logic).

---

 Styling

- All main action buttons use the `.main-btn` class for a unified look.
- Responsive design with media queries for mobile and tablet screens.
- Subtle box-shadows, rounded corners, and color transitions for a modern feel.
- Consistent color palette (blues, whites, and grays).

---

How to Use

1. **Clone or Download** this repository.
2. Place all images in the `/images` folder and videos in the `/videos` folder as referenced in the HTML.
3. Open `index.html` in your browser to view the landing page.
4. All interactive features (modals, slider, etc.) work out-of-the-box with the included `script.js`.

---

Customization

- **Add/Remove Features:**  
  Edit the HTML sections as needed.
- **Change Branding:**  
  Replace logos and update color variables in `style.css`.
- **Integrate Backend:**  
  Connect the contact form and payment modal to your backend for real submissions.

---

 Technologies Used

- **HTML5**
- **CSS3** (Flexbox, Media Queries)
- **Vanilla JavaScript**
