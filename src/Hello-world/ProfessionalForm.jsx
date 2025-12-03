// import { useState } from 'react';
// import PropTypes from 'prop-types';
// import './ProfessionalForm.css';

// function ProfessionalForm({ onSubmit, title = 'Professional Contact Form' }) {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     company: '',
//     position: '',
//     country: '',
//     experience: '',
//     skills: [],
//     message: '',
//     newsletter: false,
//     terms: false
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const skillOptions = ['JavaScript', 'React', 'Node.js', 'Python', 'Java', 'C++', 'Other'];
//   const experienceOptions = ['0-1 years', '1-3 years', '3-5 years', '5-10 years', '10+ years'];
//   const countries = ['USA', 'Canada', 'UK', 'Germany', 'France', 'India', 'Australia', 'Other'];

//   const validateForm = () => {
//     const newErrors = {};
    
//     if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
//     if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//     }
//     if (!formData.phone.trim()) {
//       newErrors.phone = 'Phone is required';
//     } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
//       newErrors.phone = 'Phone number is invalid';
//     }
//     if (!formData.country) newErrors.country = 'Country is required';
//     if (!formData.experience) newErrors.experience = 'Experience is required';
//     if (!formData.terms) newErrors.terms = 'You must accept the terms';
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
    
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: '' }));
//     }
//   };

//   const handleSkillChange = (skill) => {
//     setFormData(prev => ({
//       ...prev,
//       skills: prev.skills.includes(skill)
//         ? prev.skills.filter(s => s !== skill)
//         : [...prev.skills, skill]
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!validateForm()) return;
    
//     setIsSubmitting(true);
    
//     try {
//       await new Promise(resolve => setTimeout(resolve, 1000));
      
//       if (onSubmit) {
//         onSubmit(formData);
//       } else {
//         console.log('Form submitted:', formData);
//         alert('Form submitted successfully!');
//       }
      
//       setFormData({
//         firstName: '', lastName: '', email: '', phone: '', company: '',
//         position: '', country: '', experience: '', skills: [], message: '',
//         newsletter: false, terms: false
//       });
//     } catch (error) {
//       alert('Submission failed. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>{title}</h2>
      
//       <form onSubmit={handleSubmit} className="professional-form">
//         <div className="form-section">
//           <h3>Personal Information</h3>
          
//           <div className="form-row">
//             <div className="form-group">
//               <label htmlFor="firstName">First Name *</label>
//               <input
//                 id="firstName"
//                 name="firstName"
//                 type="text"
//                 value={formData.firstName}
//                 onChange={handleInputChange}
//                 placeholder="Enter your first name"
//                 className={errors.firstName ? 'error' : ''}
//               />
//               {errors.firstName && <span className="error-message">{errors.firstName}</span>}
//             </div>
            
//             <div className="form-group">
//               <label htmlFor="lastName">Last Name *</label>
//               <input
//                 id="lastName"
//                 name="lastName"
//                 type="text"
//                 value={formData.lastName}
//                 onChange={handleInputChange}
//                 placeholder="Enter your last name"
//                 className={errors.lastName ? 'error' : ''}
//               />
//               {errors.lastName && <span className="error-message">{errors.lastName}</span>}
//             </div>
//           </div>
          
//           <div className="form-row">
//             <div className="form-group">
//               <label htmlFor="email">Email *</label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 placeholder="Enter your email"
//                 className={errors.email ? 'error' : ''}
//               />
//               {errors.email && <span className="error-message">{errors.email}</span>}
//             </div>
            
//             <div className="form-group">
//               <label htmlFor="phone">Phone *</label>
//               <input
//                 id="phone"
//                 name="phone"
//                 type="tel"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//                 placeholder="Enter your phone number"
//                 className={errors.phone ? 'error' : ''}
//               />
//               {errors.phone && <span className="error-message">{errors.phone}</span>}
//             </div>
//           </div>
//         </div>

//         <div className="form-section">
//           <h3>Professional Information</h3>
          
//           <div className="form-row">
//             <div className="form-group">
//               <label htmlFor="company">Company</label>
//               <input
//                 id="company"
//                 name="company"
//                 type="text"
//                 value={formData.company}
//                 onChange={handleInputChange}
//                 placeholder="Enter your company name"
//               />
//             </div>
            
//             <div className="form-group">
//               <label htmlFor="position">Position</label>
//               <input
//                 id="position"
//                 name="position"
//                 type="text"
//                 value={formData.position}
//                 onChange={handleInputChange}
//                 placeholder="Enter your position"
//               />
//             </div>
//           </div>
          
//           <div className="form-row">
//             <div className="form-group">
//               <label htmlFor="country">Country *</label>
//               <select
//                 id="country"
//                 name="country"
//                 value={formData.country}
//                 onChange={handleInputChange}
//                 className={errors.country ? 'error' : ''}
//               >
//                 <option value="">Select your country</option>
//                 {countries.map(country => (
//                   <option key={country} value={country}>{country}</option>
//                 ))}
//               </select>
//               {errors.country && <span className="error-message">{errors.country}</span>}
//             </div>
            
//             <div className="form-group">
//               <label htmlFor="experience">Experience *</label>
//               <select
//                 id="experience"
//                 name="experience"
//                 value={formData.experience}
//                 onChange={handleInputChange}
//                 className={errors.experience ? 'error' : ''}
//               >
//                 <option value="">Select your experience</option>
//                 {experienceOptions.map(exp => (
//                   <option key={exp} value={exp}>{exp}</option>
//                 ))}
//               </select>
//               {errors.experience && <span className="error-message">{errors.experience}</span>}
//             </div>
//           </div>
          
//           <div className="form-group">
//             <label>Skills</label>
//             <div className="checkbox-group">
//               {skillOptions.map(skill => (
//                 <label key={skill} className="checkbox-label">
//                   <input
//                     type="checkbox"
//                     checked={formData.skills.includes(skill)}
//                     onChange={() => handleSkillChange(skill)}
//                   />
//                   <span>{skill}</span>
//                 </label>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="form-section">
//           <div className="form-group">
//             <label htmlFor="message">Message</label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleInputChange}
//               placeholder="Enter your message or additional information"
//               rows="4"
//             />
//           </div>
//         </div>

//         <div className="form-section">
//           <div className="checkbox-group">
//             <label className="checkbox-label">
//               <input
//                 type="checkbox"
//                 name="newsletter"
//                 checked={formData.newsletter}
//                 onChange={handleInputChange}
//               />
//               <span>Subscribe to newsletter</span>
//             </label>
            
//             <label className="checkbox-label">
//               <input
//                 type="checkbox"
//                 name="terms"
//                 checked={formData.terms}
//                 onChange={handleInputChange}
//                 className={errors.terms ? 'error' : ''}
//               />
//               <span>I accept the terms and conditions *</span>
//             </label>
//             {errors.terms && <span className="error-message">{errors.terms}</span>}
//           </div>
//         </div>

//         <button 
//           type="submit" 
//           disabled={isSubmitting}
//           className={isSubmitting ? 'submitting' : ''}
//         >
//           {isSubmitting ? 'Submitting...' : 'Submit Form'}
//         </button>
//       </form>
//     </div>
//   );
// }

// ProfessionalForm.propTypes = {
//   onSubmit: PropTypes.func,
//   title: PropTypes.string,
// };

// export default ProfessionalForm;