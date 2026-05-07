import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const navItems = ["Home", "About Us", "Packages", "Gallery", "Contact Us"];

const pageContent = {
  Home: {
    eyebrow: "FitMaker Fitness",
    title: "Train like a beast. Look like a man.",
    text: "Build strength, discipline, and confidence with coaching programs made for serious body transformation.",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=90",
    cards: [
      ["96%", "Client Satisfaction", "Members love their progress and the clarity of their coaching."],
      ["+800", "Active Members", "Join a focused community that keeps showing up."],
      ["24/7", "Support", "Get help from coaches and support whenever training gets noisy."],
    ],
  },
  "About Us": {
    eyebrow: "About FitMaker",
    title: "A fitness platform built for real people and repeatable wins.",
    text: "With over 5 years of experience, FitMaker combines practical coaching, clean tools, and community support for healthier routines.",
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
    cards: [
      ["+5", "Years Experience", "A proven record of helping members transform their training."],
      ["+80", "Coaches", "Specialists across strength, cardio, nutrition, mobility, and recovery."],
      ["+1300", "Reviews", "Positive stories from members who stayed consistent."],
    ],
  },
  Packages: {
    eyebrow: "Membership Packages",
    title: "Pick the level of support that matches your goal.",
    text: "Start with Beginner, level up with Pro, or go fully custom with dedicated trainer support.",
    image:
      "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=1200&q=80",
    cards: [
      ["49$/USDT", "Beginner Plan", "Foundation workouts, video access, tracking, and basic nutrition."],
      ["99$/USDT", "Pro Plan", "Advanced plans, coaching, program access, and progress analysis."],
      ["149$/USDT", "Custom Plan", "Fully customized training and nutrition with weekly trainer check-ins."],
    ],
  },
  Gallery: {
    eyebrow: "Training Gallery",
    title: "See the energy inside every workout.",
    text: "Browse coaches, workouts, transformations, and the training moments that power the FitMaker community.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    cards: [
      ["Workout Videos", "Guided Sessions", "Strength, cardio, mobility, and home workout content."],
      ["Trainer Gallery", "Expert Coaches", "Meet specialists across lifting, conditioning, and recovery."],
      ["Community Wins", "Real Progress", "Stories from members building stronger habits."],
    ],
  },
  "Contact Us": {
    eyebrow: "Contact FitMaker",
    title: "Start the conversation before your first rep.",
    text: "Ask about plans, trainer matching, nutrition guidance, or the best program for your current goal.",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
    cards: [
      ["USA", "Washington DC", "Visit or contact the FitMaker support team."],
      ["1234-56789", "Phone Support", "Talk with us about your goals and membership options."],
      ["Email", "Fitmakerrr@Gmail.com", "Send us your questions and current fitness target."],
    ],
  },
};

const circleItems = [
  {
    title: "Programs",
    value: "+1500",
    label: "Workout Videos",
    detail:
      "Explore guided strength, cardio, mobility, and home workout videos that update with your plan.",
  },
  {
    title: "Coaching",
    value: "+80",
    label: "Expert Coaches",
    detail:
      "Work with certified trainers for check-ins, form reviews, motivation, and practical adjustments.",
  },
  {
    title: "Plans",
    value: "3",
    label: "Flexible Plans",
    detail:
      "Choose Beginner, Pro, or Custom membership options based on your goals and preferred support.",
  },
  {
    title: "Community",
    value: "+800",
    label: "Active Members",
    detail:
      "Stay close to people building the same habits with progress posts, challenges, and support.",
  },
  {
    title: "Support",
    value: "24/7",
    label: "Always Available",
    detail:
      "Get quick help with your training, account, workouts, nutrition questions, and next steps.",
  },
  {
    title: "Results",
    value: "96%",
    label: "Client Satisfaction",
    detail:
      "Members report better consistency, clearer plans, and stronger confidence in their fitness routine.",
  },
];

const services = [
  ["Personal Training", "One-on-one programs built around your body, schedule, and goals."],
  ["Workout Videos", "Guided sessions for strength, cardio, mobility, and home workouts."],
  ["Nutrition Guides", "Simple meal guidance that supports real training progress."],
  ["Fitness Tools", "Track calories, workouts, progress, and recovery with quick tools."],
];

const plans = [
  {
    name: "Beginner Plan",
    price: "49$/USDT",
    description: "Build a strong foundation with guided workouts and essential nutrition.",
    features: ["Video library", "Progress tracking", "Group classes", "Basic nutrition guidance"],
  },
  {
    name: "Pro Plan",
    price: "99$/USDT",
    description: "Advanced programs, nutrition coaching, and deeper progress analysis.",
    features: ["Personalized workouts", "Nutrition coaching", "Advanced programs", "Body analysis"],
    featured: true,
  },
  {
    name: "Custom Plan",
    price: "149$/USDT",
    description: "A fully tailored fitness path with dedicated trainer support.",
    features: ["Custom plan", "Weekly check-ins", "All platform features", "Exclusive discounts"],
  },
];

const trainers = [
  ["Sam Cole", "Strength Coach", "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=700&q=80"],
  ["Michael Harris", "Personal Trainer", "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=700&q=80"],
  ["John Anderson", "Mobility Coach", "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=700&q=80"],
  ["Tom Blake", "Conditioning Coach", "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=700&q=80"],
];

const posts = [
  ["The Ultimate Guide to a Balanced Diet", "Nutrition"],
  ["The Benefits of HIIT Training", "Cardio"],
  ["5 Essential Exercises for Building Muscle", "Strength"],
  ["Home Workouts for Busy People", "Home"],
  ["How to Always Stay Motivated", "Motivation"],
];

const faqs = [
  [
    "What is FitMaker and how can it help me?",
    "FitMaker offers personalized workout plans, expert coaching, nutritional guidance, and community support for weight loss, strength, and everyday fitness.",
  ],
  ["How do I get started?", "Choose a plan, share your goals, and your coach will help you begin with a realistic first week."],
  ["What is included in the Custom Plan?", "Custom workouts, nutrition planning, weekly trainer check-ins, and access to every platform feature."],
  ["Can I change my plan later?", "Yes. You can move between plans as your goals, schedule, or training level changes."],
];

function Header({ activePage, setActivePage }) {
  return (
    <header className="site-header glass">
      <button className="brand button-reset" onClick={() => setActivePage("Home")}>
        <span className="brand-mark">F</span>
        <span>FITMAKER</span>
      </button>
      <nav aria-label="Primary navigation">
        {navItems.map((item) => (
          <button
            className={activePage === item ? "active-nav" : ""}
            key={item}
            onClick={() => setActivePage(item)}
          >
            {item}
          </button>
        ))}
      </nav>
      <div className="header-actions">
        <a className="solid-link subscribe-link" href="#signup">Subscribe</a>
      </div>
    </header>
  );
}

function SectionTitle({ eyebrow, title, children }) {
  return (
    <div className="section-title">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}

function Hero({ activePage, setActivePage }) {
  const page = pageContent[activePage];

  return (
    <section
      className="hero section"
      id="home"
      style={{ "--hero-image": `url(${page.image})` }}
    >
      <div className="hero-copy">
        <p className="eyebrow">{page.eyebrow}</p>
        {activePage === "Home" ? (
          <h1 className="beast-title">
            <span>Train Like <mark>A Beast</mark></span>
            <span>Look Like <mark>A Man</mark></span>
          </h1>
        ) : (
          <h1>{page.title}</h1>
        )}
        <p>{page.text}</p>
        <div className="hero-actions">
          <a className="solid-link large" href="#signup">Join Us</a>
          <button className="ghost-link large" onClick={() => setActivePage("Packages")}>
            View Packages
          </button>
        </div>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <img src={page.image} alt="" />
      </div>
    </section>
  );
}

function PageDetails({ activePage }) {
  const page = pageContent[activePage];

  return (
    <section className="page-details section">
      <SectionTitle eyebrow={`${activePage} Page`} title={`${activePage} content`}>
        Every header now opens its own content area while keeping the FitMaker color system and glass feel.
      </SectionTitle>
      <div className="page-card-grid">
        {page.cards.map(([value, title, text]) => (
          <article className="glass page-card" key={title}>
            <strong>{value}</strong>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CircularShowcase() {
  const [active, setActive] = useState(0);
  const selected = circleItems[active];
  const step = 360 / circleItems.length;

  return (
    <section className="circular-section section" id="programs">
      <SectionTitle eyebrow="Interactive Circle" title="Click any value to reveal its content">
        The circle rotates clockwise to the selected item, then the matching details appear below.
      </SectionTitle>
      <div className="circular-layout">
        <div className="circle-stage">
          <div
            className="circle-wheel"
            style={{ transform: `rotate(${active * step}deg)` }}
          >
            {circleItems.map((item, index) => {
              const angle = index * step;
              const isActive = active === index;
              return (
                <button
                  className={`circle-node glass ${isActive ? "is-active" : ""}`}
                  key={item.title}
                  onClick={() => setActive(index)}
                  style={{
                    transform: `rotate(${angle}deg) translate(182px) rotate(${-angle - active * step}deg)`,
                  }}
                >
                  <strong>{item.value}</strong>
                  <span>{item.title}</span>
                </button>
              );
            })}
          </div>
          <div className="circle-core glass">
            <span>FitMaker</span>
            <strong>{selected.value}</strong>
            <small>{selected.label}</small>
          </div>
        </div>
        <article className="circle-content glass">
          <p className="eyebrow">{selected.title}</p>
          <h3>{selected.label}</h3>
          <p>{selected.detail}</p>
          <button className="solid-link">Like This Content</button>
        </article>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section">
      <SectionTitle eyebrow="Our Services" title="Glass-powered fitness services">
        Access coaching, plans, tools, and practical resources built to keep your training clear.
      </SectionTitle>
      <div className="service-grid">
        {services.map(([title, text], index) => (
          <article className="service-card glass hover-lift" key={title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{title}</h3>
            <p>{text}</p>
            <a href="#signup">Learn More</a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Plans() {
  return (
    <section className="section plans-section" id="membership">
      <SectionTitle eyebrow="Our Plans" title="Choose the coaching level that fits">
        Select the plan that suits your fitness goals and let expert coaches guide every step.
      </SectionTitle>
      <div className="toggle glass" aria-label="Billing period">
        <button>Monthly</button>
        <button>Annually</button>
      </div>
      <div className="plan-grid">
        {plans.map((plan) => (
          <article className={`plan-card glass hover-lift ${plan.featured ? "featured" : ""}`} key={plan.name}>
            <p className="package">Package</p>
            <h3>{plan.name}</h3>
            <p>{plan.description}</p>
            <h4>Features</h4>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <div className="plan-footer">
              <strong>{plan.price}</strong>
              <a className="solid-link" href="#signup">Choose This Plan</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Trainers() {
  return (
    <section className="section" id="about-us">
      <SectionTitle eyebrow="Meet Our Trainers" title="Coaches with the right specialty">
        Meet some of our trainers and the work they bring into FitMaker programs.
      </SectionTitle>
      <div className="trainer-grid">
        {trainers.map(([name, role, image]) => (
          <article className="trainer-card glass hover-lift" key={name}>
            <img src={image} alt={`${name} fitness trainer`} />
            <div>
              <h3>{name}</h3>
              <p>{role}</p>
              <a href="#signup">Learn More</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Blog() {
  return (
    <section className="section">
      <SectionTitle eyebrow="FitMaker Blog Posts" title="Training ideas for better results">
        Discover essential tips to maximize your workout results and reach your goals faster.
      </SectionTitle>
      <div className="blog-grid">
        {posts.map(([title, category]) => (
          <article className="glass hover-lift" key={title}>
            <span>{category}</span>
            <h3>{title}</h3>
            <p>August 14</p>
            <a href="#signup">Learn More</a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Signup() {
  return (
    <section className="signup-section section" id="signup">
      <div className="signup-copy">
        <SectionTitle eyebrow="Join Our Fitness Community" title="Start with a plan that is yours">
          Unlock personalized workout plans, expert coaching, and a supportive community that helps you stay consistent.
        </SectionTitle>
        <div className="benefits">
          {[
            ["Personalized Workout Plans", "Customized routines that match your level and goals."],
            ["Expert Coaching", "Certified trainers guide you every step of the way."],
            ["Community Support", "Share experiences, get motivated, and stay inspired."],
            ["Exclusive Resources", "Access video tutorials, nutrition guides, and discounts."],
          ].map(([title, text]) => (
            <article className="glass" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
      <form className="signup-form glass">
        <div className="form-tabs">
          <button type="button">Sign Up</button>
          <button type="button">Login</button>
        </div>
        <label>
          Name
          <input placeholder="Enter Your Name" />
        </label>
        <label>
          E-Mail
          <input type="email" placeholder="Enter Your E-Mail" />
        </label>
        <button className="solid-link" type="button">Sign Up</button>
        <span>Or</span>
        <button className="google-button" type="button">Sign Up With Google</button>
      </form>
    </section>
  );
}

function FAQ() {
  return (
    <section className="section faq-section">
      <SectionTitle eyebrow="FAQ" title="Answers before your first workout">
        Everything you need to feel clear before joining FitMaker.
      </SectionTitle>
      <div className="faq-list">
        {faqs.map(([question, answer], index) => (
          <details className="glass" key={question} open={index === 0}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  const groups = {
    Company: ["About us", "Our Services", "Careers", "Blog", "Testimonial"],
    Resources: ["Fitness tools", "Workout Videos", "Nutrition Guides", "FAQ", "Success Stories"],
    Programs: ["Weight Loss", "Building Muscles", "Home Workout", "Gym Plan", "Fitness Group"],
    "Contact Us": ["USA - Washington DC", "1234-56789", "Fitmakerrr@Gmail.com"],
  };

  return (
    <footer>
      <div>
        <a className="brand" href="#home">FitMaker</a>
        <h2>Transform Your Body</h2>
        <p>
          FitMaker is your trusted fitness partner with expert coaching, tailored workout plans, and nutrition guidance.
        </p>
      </div>
      {Object.entries(groups).map(([title, links]) => (
        <div key={title}>
          <h3>{title}</h3>
          {links.map((link) => (
            <a key={link} href="#home">{link}</a>
          ))}
        </div>
      ))}
    </footer>
  );
}

function App() {
  const [activePage, setActivePage] = useState("Home");

  return (
    <>
      <Header activePage={activePage} setActivePage={setActivePage} />
      <main>
        <Hero activePage={activePage} setActivePage={setActivePage} />
        <PageDetails activePage={activePage} />
        <CircularShowcase />
        <Services />
        <Plans />
        <Trainers />
        <Blog />
        <Signup />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
