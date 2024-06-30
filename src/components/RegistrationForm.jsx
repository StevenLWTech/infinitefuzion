// src/components/RegistrationForm.js
import React, { useState } from 'react';
import '../components/styles/RegistrationForm.css'; // Make sure to create this CSS file in the src/styles folder

const RegistrationForm = () => {

    // State for each section's visibility
    const [isTuitionVisible, setTuitionVisibility] = useState(false);
    const [isLiabilityVisible, setLiabilityVisibility] = useState(false);

    // State for each checkbox
    const [tuitionAgreed, setTuitionAgreed] = useState(false);
    const [liabilityAgreed, setLiabilityAgreed] = useState(false);

    // Toggle visibility functions
    const toggleTuitionVisibility = () => setTuitionVisibility(!isTuitionVisible);
    const toggleLiabilityVisibility = () => setLiabilityVisibility(!isLiabilityVisible);

    // Toggle agreement functions
    const toggleTuitionAgreement = () => setTuitionAgreed(!tuitionAgreed);
    const toggleLiabilityAgreement = () => setLiabilityAgreed(!liabilityAgreed);

    // const toggleAllVisibility = () => {
    //     setAllVisible(!allVisible);
    // };
    const [formData, setFormData] = useState({
        familyLastName: '',
        homeAddress: '',
        city: '',
        state: '',
        zip: '',
        primaryPhone: '',
        email: '',
        confirmEmail: '',
        password: '',
        confirmPassword: '',
        studentFirstName: '',
        studentLastName: '',
        studentGender: '',
        studentBirthDate: '',
        studentEmail: '',
        allergies: '',
        referralName: '',
        cardNumber: '',
        expMonth: '',
        expYear: '',
        cardNickname: '',
        nameOnCard: ''
    });
    // const handleCheckboxChange = () => {
    //     setIsChecked(!isChecked);
    // };
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        // Add form submission logic here, e.g., sending data to a server
    };

    // const containerClass = `legalContainer ${isChecked ? 'checked' : 'unchecked'}`;


    return (
        <div className="container">
            <div className="wrapper">
                <section className='con'>
                    <div className='title'>
                        <h1>Infinite Fuzion</h1>
                        <h1>Dance Studio</h1>
                        <h2>Registration</h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <section className="family-info">
                            <h2 className='section-header'>Family Information</h2>
                            <div>
                                <label htmlFor="familyLastName">Family Last Name<span className='required-asterick'>*</span></label>
                                <input
                                    className="input"
                                    type="text"
                                    id="familyLastName"
                                    name="familyLastName"
                                    value={formData.familyLastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <h4 className='sub-section-header'>Where do you live?</h4>
                            <label htmlFor="homeAddress">Home Address<span className='required-asterick'>*</span></label>
                            <div>
                                <input

                                    className="input"
                                    type="text"
                                    id="homeAddress"
                                    name="homeAddress"
                                    value={formData.homeAddress}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <label htmlFor="city">City<span className='required-asterick'>*</span></label>
                            <div>
                                <input
                                    className="input"
                                    type="text"
                                    id="homeCity"
                                    name="homeCity"
                                    value={formData.homeCity}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <label htmlFor="state">State<span className='required-asterick'>*</span></label>
                            <div>
                                <select
                                    className="input"
                                    id="state"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select a State</option>
                                    <option value="AL">Alabama</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="CA">California</option>
                                    <option value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DE">Delaware</option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="ID">Idaho</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IN">Indiana</option>
                                    <option value="IA">Iowa</option>
                                    <option value="KS">Kansas</option>
                                    <option value="KY">Kentucky</option>
                                    <option value="LA">Louisiana</option>
                                    <option value="ME">Maine</option>
                                    <option value="MD">Maryland</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MN">Minnesota</option>
                                    <option value="MS">Mississippi</option>
                                    <option value="MO">Missouri</option>
                                    <option value="MT">Montana</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NY">New York</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oregon</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VT">Vermont</option>
                                    <option value="VA">Virginia</option>
                                    <option value="WA">Washington</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WY">Wyoming</option>
                                </select>
                            </div>

                            <label htmlFor="homeZip">Zip<span className='required-asterick'>*</span></label>
                            <div>
                                <input
                                    className="input"
                                    type="text"
                                    id="homeZip"
                                    name="homeZip"
                                    value={formData.homeZip}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <label htmlFor="homePhone">Primary Phone<span className='required-asterick'>*</span></label>
                            <div>
                                <input
                                    className="input"
                                    type="text"
                                    id="homePhone"
                                    name="homePhone"
                                    value={formData.homePhone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>


                        </section>
                        <section className="contact-info">
                            <h2 className='section-header'>Contact #1</h2>
                            <label htmlFor="contactFirstName">Contact First Name<span className='required-asterick'>*</span></label>
                            <input
                                className="input"
                                type="text"
                                id="contactFirstName"
                                name="contactFirstName"
                                value={formData.contactFirstName}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="contactLastName">Last Name<span className='required-asterick'>*</span></label>
                            <input
                                className="input"
                                type="text"
                                id="contactLastName"
                                name="contactLastName"
                                value={formData.contactLastName}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="contactType">Type</label>
                            <div>
                                <select
                                    className="input"
                                    id="type"
                                    name="type"
                                    value={formData.type}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="Caregiver">Caregiver</option>
                                    <option value="Father">Father</option>
                                    <option value="Guardian">Guardian</option>
                                    <option value="Mother" selected>Mother</option>
                                    <option value="Parent">Parent</option>
                                    <option value="Self">Self</option>
                                </select>
                            </div>
                            <h4 className='sub-section-header'>How can we contact you?</h4>
                            <label htmlFor="contactWorkNumber">Work #</label>
                            <div>
                                <input
                                    className="input"
                                    type="text"
                                    id="contactWorkNumber"
                                    name="contactWorkNumber"
                                    value={formData.contactWorkNumber}
                                    onChange={handleChange}

                                />
                            </div>
                            <label htmlFor="contactCellNumber">Cell #</label>
                            <div>
                                <input
                                    className="input"
                                    type="text"
                                    id="contactCellNumber"
                                    name="contactCellNumber"
                                    value={formData.contactCellNumber}
                                    onChange={handleChange}

                                />
                            </div>
                        </section>
                        <section className="student-info">
                            <h2 className='section-header'>Student Information</h2>
                            <label htmlFor="studentFirstName">Student's First Name<span className='required-asterick'>*</span></label>
                            <input
                                className="input"
                                type="text"
                                id="studentFirstName"
                                name="studentFirstName"
                                value={formData.studentFirstName}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="studentLastName">Last Name<span className='required-asterick'>*</span></label>
                            <input
                                className="input"
                                type="text"
                                id="studentLastName"
                                name="studentLastName"
                                value={formData.studentLastName}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="studentLastName">Student Gender<span className='required-asterick'>*</span></label>
                            <input
                                className="input"
                                type="text"
                                id="studentGender"
                                name="studentGender"
                                value={formData.studentGender}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="studentBirthDate">Birth Date<span className='required-asterick'>*</span></label>
                            <input
                                className="input"
                                type="date"
                                id="studentBirthDate"
                                name="studentBirthDate"
                                value={formData.studentBirthDate}
                                onChange={handleChange}
                                required
                            />

                            <h4 className='sub-section-header'>Addtional Info</h4>
                            <label htmlFor="studentEmail">Student Email (if applicable)</label>
                            <input
                                className="input"
                                type="text"
                                id="studentEmail"
                                name="studentEmail"
                                value={formData.studentEmail}
                                onChange={handleChange}

                            />
                            <label htmlFor="studentAllergies">Allergies (Leave blank if NONE)</label>
                            <input
                                className="input"
                                type="text"
                                id="studentEmail"
                                name="studentEmail"
                                value={formData.studentEmail}
                                onChange={handleChange}

                            />

                        </section>
                        {/* <section className="enrollment">
                        <div><h4 className='sub-section-header'>ENROLL IN CLASSES</h4></div>
                        <div className='select-classes'>SELECT CLASS</div>
                        <div className='border'>
                        <div className='class-choices'>Section open to ideas how you want to schedule</div>
                        <div className='class-choices'>Hip-Hop</div>
                        <div className='class-choices'>K-pop</div>
                        <div className='class-choices'>Bhangra</div>
                        <div className='class-choices'>Bollywood</div>

                        </div>

                    </section> */}

                        <section className="student-info">
                            <h2 className='section-header'>
                                <span id='section-header-left'>Required Policies
                                </span>
                                {/* <span id='section-header-right' className='divtoggleAgreementAll'>+(show-hide details)
                        </span> */}
                            </h2>
                            <article>
                                <div className='lbl' onClick={toggleTuitionVisibility}>+ Tuition</div>
                                <div className={`agreementText ${isTuitionVisible ? 'visible' : 'hidden'} `} id="WebRegText_1">
                                    Annual registration fees are $25.00 (per family). Tuition for July events and our 5-week Summer Session are processed
                                    at the beginning of July. Tuition for August camps and events is processed at the beginning of August.
                                    For your convenience, we calculate your Fall tuition for the entire school year and evenly split your tuition into 10 equal monthly payments.
                                </div>
                                <div className={`legalContainer ${tuitionAgreed ? 'checked' : 'unchecked'}`}>
                                    <label>
                                        <input
                                            className="checkbox-text"
                                            id='checkbox-tuition'
                                            type="checkbox"
                                            checked={tuitionAgreed}
                                            onChange={toggleTuitionAgreement}
                                            required
                                        />
                                        <span >I've read the above and agree</span>
                                    </label>
                                </div>

                            </article>
                            <article>
                                <div className='lbl' onClick={toggleLiabilityVisibility}>+ Liability Waiver</div>
                                <div className={`agreementText ${isLiabilityVisible ? 'visible' : 'hidden'}`}>
                                    I hereby release, remise, and discharge Infinite Fuzion Dance Studio and its agents and employees, of and from all claims, demands, actions and injuries,
                                    sustained to my person or property as a result of any act, omission, or negligence while participating in rehearsals, performances, or other events with Infinite Fuzion Dance Studio
                                    on or away from its physical campus. I understand that due to the physical nature of dance, accidents and injuries can occur.
                                    Please let us know of any physical limitations that would hinder full participation or other reasons the dancer may need modification in classes.
                                    I also understand that Infinite Fuzion Dance Studio is not responsible for lost or stolen valuables.
                                </div>
                                <div className={`legalContainer ${liabilityAgreed ? 'checked' : 'unchecked'}`}>
                                    <label>
                                        <input
                                            className="checkbox-text"
                                            id='checkbox-liability'
                                            type="checkbox"
                                            checked={liabilityAgreed}
                                            onChange={toggleLiabilityAgreement}
                                            required
                                        />
                                        I've read the above and agree</label>
                                </div>
                            </article>

                        </section>
                        <button type="submit" className='select-button'>Submit Registration</button>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default RegistrationForm;
