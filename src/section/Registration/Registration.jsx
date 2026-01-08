import { useState, useEffect } from 'react';
import registerImg from '../../assets/register-img.png';
import './Registration.css';

const STORAGE_KEY = 'registration_submitted';

const validateEmail = (email) => {
  if (!email.trim()) {
    return false;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

function Registration() {
  const [form, setForm] = useState({ name: '', company: '', email: '' });
  const [touched, setTouched] = useState({ name: false, email: false });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const data = JSON.parse(stored);
      setIsSubmitted(true);
      setSubmittedName(data.name || '');
    }
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true });

    const nameError = !form.name.trim();
    const emailError = !validateEmail(form.email);

    if (nameError || emailError) {
      return;
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
    setIsSubmitted(true);
    setSubmittedName(form.name);
  };

  const nameError = touched.name && !form.name.trim();
  const emailError = touched.email && !validateEmail(form.email);

  return (
    <section className="registration" id="register" aria-labelledby="registration-heading">
      <div className="container">
        <div className="registration-inner">

          <div className="registration-visual" aria-hidden="true">
            <img 
              src={registerImg} 
              alt="" 
              className="registration-image"
              loading="lazy"
            />
          </div>

          <div className="registration-card">
            {isSubmitted ? (
              <div className="registration-success" role="status" aria-live="polite">
                <h2 className="registration-success-heading">Registration</h2>
                <p className="success-message">
                  Hi <strong>{submittedName}</strong>, thanks for registering. Somebody will contact you soon.
                </p>
              </div>
            ) : (
              <>
                <div className="registration-header">
                  <h2>Registration</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <br />
                    Vitae, in tristique senectus dui pharetra sit.
                  </p>
                </div>

                <form className="registration-form" onSubmit={onSubmit} noValidate aria-describedby="registration-required-note">
                <div className="field">
                  <label className="field-label" htmlFor="name">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={onChange}
                    onBlur={() => onBlur('name')}
                    required
                    aria-invalid={nameError}
                    aria-describedby={nameError ? 'name-error' : undefined}
                  />
                  {nameError && 
                    <span className="field-error">Name field is must</span>
                  }
                  
                </div>

                <div className="field">
                  <label className="field-label" htmlFor="company">Company</label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    placeholder="Enter your company name"
                    value={form.company}
                    onChange={onChange}
                  />
                </div>

                <div className="field">
                  <label className="field-label" htmlFor="email">
                    Email address <span className="required">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={form.email}
                    onChange={onChange}
                    onBlur={() => onBlur('email')}
                    required
                    aria-invalid={emailError}
                    aria-describedby={emailError ? 'email-error' : undefined}
                  />
                  {emailError && 
                    <span id="email-error" className="field-error">
                      {!form.email.trim() 
                        ? 'Email address is required.' 
                        : 'Please enter a valid email address with @ and domain (e.g., .com)'}
                    </span>
                  }
                </div>

                <button type="submit" className="submit-btn">
                  Register
                </button>
              </form>
              </>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
}
export default Registration;